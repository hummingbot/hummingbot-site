# Testing Gateway Connectors

## Overview

Comprehensive testing is crucial for Gateway connectors to ensure reliability, security, and compatibility. This guide covers testing strategies, tools, and best practices for Gateway connector development.

## Testing Requirements

All Gateway connectors must meet these minimum requirements:

- **Code Coverage**: ≥75% overall coverage
- **Unit Tests**: All public methods tested
- **Integration Tests**: All API endpoints tested
- **Error Cases**: All failure scenarios covered
- **Performance**: Response times under load tested

## Test Structure

### Directory Organization

```
test/
├── connectors/
│   └── mydex/
│       ├── mydex.test.ts           # Unit tests
│       ├── mydex.integration.test.ts # Integration tests
│       └── fixtures/                # Test data
│           ├── tokens.json
│           ├── pools.json
│           └── transactions.json
├── mocks/
│   └── mydex/
│       ├── sdk.mock.ts            # SDK mocks
│       └── responses.mock.ts      # API response mocks
└── utils/
    ├── test-helpers.ts            # Shared utilities
    └── test-constants.ts          # Common test data
```

## Unit Testing

### Basic Test Structure

```typescript
import { MyDex } from '../../../src/connectors/mydex/mydex';
import { MockSDK } from '../../mocks/mydex/sdk.mock';
import { fixtures } from './fixtures';

describe('MyDex Connector', () => {
  let connector: MyDex;
  let mockSDK: MockSDK;
  
  beforeEach(() => {
    mockSDK = new MockSDK();
    connector = new MyDex('ethereum', 'mainnet', mockSDK);
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('initialization', () => {
    it('should initialize with correct chain and network', () => {
      expect(connector.chain).toBe('ethereum');
      expect(connector.network).toBe('mainnet');
    });
    
    it('should load configuration correctly', () => {
      expect(connector.config).toBeDefined();
      expect(connector.config.allowedSlippage).toBe(1.0);
    });
  });
});
```

### Testing Swap Operations

```typescript
describe('swap operations', () => {
  describe('quote', () => {
    it('should return valid quote for token swap', async () => {
      const quote = await connector.quote({
        base: fixtures.tokens.USDC,
        quote: fixtures.tokens.WETH,
        amount: '1000000', // 1 USDC
        side: 'SELL'
      });
      
      expect(quote).toMatchObject({
        expectedOut: expect.any(String),
        price: expect.any(String),
        priceImpact: expect.any(Number),
        route: expect.any(Array)
      });
      
      expect(Number(quote.expectedOut)).toBeGreaterThan(0);
      expect(quote.priceImpact).toBeLessThan(0.1);
    });
    
    it('should handle buy side quotes', async () => {
      const quote = await connector.quote({
        base: fixtures.tokens.USDC,
        quote: fixtures.tokens.WETH,
        amount: '1000000000000000', // 0.001 WETH
        side: 'BUY'
      });
      
      expect(quote.expectedOut).toBeDefined();
    });
    
    it('should throw on insufficient liquidity', async () => {
      mockSDK.setLiquidity(0);
      
      await expect(connector.quote({
        base: fixtures.tokens.USDC,
        quote: fixtures.tokens.WETH,
        amount: '999999999999999999',
        side: 'SELL'
      })).rejects.toThrow('Insufficient liquidity');
    });
  });
  
  describe('trade', () => {
    it('should execute swap successfully', async () => {
      const tx = await connector.trade({
        wallet: fixtures.wallet,
        base: fixtures.tokens.USDC,
        quote: fixtures.tokens.WETH,
        amount: '1000000',
        side: 'SELL',
        slippage: 0.01
      });
      
      expect(tx).toMatchObject({
        hash: expect.stringMatching(/^0x/),
        gasUsed: expect.any(String),
        status: 'success'
      });
    });
    
    it('should respect slippage settings', async () => {
      const spy = jest.spyOn(mockSDK, 'swap');
      
      await connector.trade({
        wallet: fixtures.wallet,
        base: fixtures.tokens.USDC,
        quote: fixtures.tokens.WETH,
        amount: '1000000',
        side: 'SELL',
        slippage: 0.005
      });
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          minAmountOut: expect.any(String)
        })
      );
    });
  });
});
```

### Testing Liquidity Operations

```typescript
describe('liquidity operations', () => {
  describe('addLiquidity', () => {
    it('should add liquidity to pool', async () => {
      const tx = await connector.addLiquidity({
        wallet: fixtures.wallet,
        pool: fixtures.pools.USDC_WETH,
        baseAmount: '1000000',
        quoteAmount: '1000000000000000',
        slippage: 0.01
      });
      
      expect(tx.hash).toBeDefined();
      expect(tx.lpTokensReceived).toBeGreaterThan(0);
    });
    
    it('should calculate correct token ratios', async () => {
      const result = await connector.quoteLiquidity({
        pool: fixtures.pools.USDC_WETH,
        baseAmount: '1000000'
      });
      
      expect(result.quoteAmount).toBeDefined();
      expect(result.shareOfPool).toBeGreaterThan(0);
      expect(result.shareOfPool).toBeLessThan(1);
    });
  });
  
  describe('removeLiquidity', () => {
    it('should remove liquidity from pool', async () => {
      const tx = await connector.removeLiquidity({
        wallet: fixtures.wallet,
        pool: fixtures.pools.USDC_WETH,
        liquidity: '1000000000000000000',
        slippage: 0.01
      });
      
      expect(tx.baseAmountReceived).toBeGreaterThan(0);
      expect(tx.quoteAmountReceived).toBeGreaterThan(0);
    });
  });
});
```

## Integration Testing

### API Endpoint Testing

```typescript
import request from 'supertest';
import { app } from '../../../src/app';

describe('MyDex API Endpoints', () => {
  describe('POST /connectors/mydex/router/quote-swap', () => {
    it('should return swap quote', async () => {
      const response = await request(app)
        .post('/connectors/mydex/router/quote-swap')
        .send({
          chain: 'ethereum',
          network: 'mainnet',
          connector: 'mydex',
          base: 'USDC',
          quote: 'WETH',
          amount: '1000000',
          side: 'SELL'
        });
      
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        network: 'mainnet',
        base: 'USDC',
        quote: 'WETH',
        expectedOut: expect.any(String),
        price: expect.any(String)
      });
    });
    
    it('should validate request parameters', async () => {
      const response = await request(app)
        .post('/connectors/mydex/router/quote-swap')
        .send({
          chain: 'ethereum',
          network: 'mainnet'
          // Missing required fields
        });
      
      expect(response.status).toBe(400);
      expect(response.body.error).toContain('validation');
    });
  });
  
  describe('POST /connectors/mydex/router/execute-swap', () => {
    it('should execute swap transaction', async () => {
      const response = await request(app)
        .post('/connectors/mydex/router/execute-swap')
        .send({
          chain: 'ethereum',
          network: 'mainnet',
          connector: 'mydex',
          address: '0x...',
          base: 'USDC',
          quote: 'WETH',
          amount: '1000000',
          side: 'SELL',
          slippage: 0.01
        });
      
      expect(response.status).toBe(200);
      expect(response.body.txHash).toMatch(/^0x/);
    });
  });
});
```

### WebSocket Testing

```typescript
describe('WebSocket connections', () => {
  let ws: WebSocket;
  
  beforeEach((done) => {
    ws = new WebSocket('ws://localhost:15888/ws');
    ws.on('open', done);
  });
  
  afterEach(() => {
    ws.close();
  });
  
  it('should stream price updates', (done) => {
    ws.send(JSON.stringify({
      type: 'subscribe',
      channel: 'prices',
      params: {
        connector: 'mydex',
        pairs: ['USDC-WETH']
      }
    }));
    
    ws.on('message', (data) => {
      const message = JSON.parse(data);
      expect(message.type).toBe('price_update');
      expect(message.data.pair).toBe('USDC-WETH');
      expect(message.data.price).toBeGreaterThan(0);
      done();
    });
  });
});
```

## Mock Creation

### SDK Mocking

```typescript
export class MockSDK {
  private liquidity = 1000000;
  private priceImpact = 0.01;
  
  setLiquidity(amount: number): void {
    this.liquidity = amount;
  }
  
  setPriceImpact(impact: number): void {
    this.priceImpact = impact;
  }
  
  async getQuote(params: QuoteParams): Promise<Quote> {
    if (this.liquidity === 0) {
      throw new Error('Insufficient liquidity');
    }
    
    return {
      amountOut: this.calculateOutput(params.amountIn),
      priceImpact: this.priceImpact,
      route: [{ pool: '0x...', percentage: 100 }]
    };
  }
  
  async executeSwap(params: SwapParams): Promise<Transaction> {
    return {
      hash: `0x${Math.random().toString(16).slice(2)}`,
      gasUsed: BigNumber.from('100000'),
      status: 'success',
      blockNumber: 12345678
    };
  }
}
```

### Response Mocking

```typescript
export const mockResponses = {
  tokens: {
    USDC: {
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin'
    },
    WETH: {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: 18,
      symbol: 'WETH',
      name: 'Wrapped Ether'
    }
  },
  
  pools: {
    USDC_WETH: {
      address: '0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8',
      token0: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      token1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      fee: 3000,
      liquidity: '1000000000000000000',
      sqrtPriceX96: '1234567890123456789012345678901234'
    }
  }
};
```

## Performance Testing

### Load Testing

```typescript
describe('Performance', () => {
  it('should handle concurrent requests', async () => {
    const requests = Array(100).fill(null).map(() =>
      connector.quote({
        base: fixtures.tokens.USDC,
        quote: fixtures.tokens.WETH,
        amount: '1000000',
        side: 'SELL'
      })
    );
    
    const start = Date.now();
    const results = await Promise.all(requests);
    const duration = Date.now() - start;
    
    expect(results).toHaveLength(100);
    expect(duration).toBeLessThan(5000); // 5 seconds for 100 requests
  });
  
  it('should cache appropriately', async () => {
    const spy = jest.spyOn(mockSDK, 'getPool');
    
    // First call
    await connector.getPoolInfo('USDC-WETH');
    expect(spy).toHaveBeenCalledTimes(1);
    
    // Second call should use cache
    await connector.getPoolInfo('USDC-WETH');
    expect(spy).toHaveBeenCalledTimes(1);
    
    // After cache expiry
    jest.advanceTimersByTime(31000);
    await connector.getPoolInfo('USDC-WETH');
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
```

### Memory Testing

```typescript
describe('Memory management', () => {
  it('should not leak memory on repeated operations', async () => {
    const initialMemory = process.memoryUsage().heapUsed;
    
    for (let i = 0; i < 1000; i++) {
      await connector.quote({
        base: fixtures.tokens.USDC,
        quote: fixtures.tokens.WETH,
        amount: '1000000',
        side: 'SELL'
      });
    }
    
    global.gc(); // Force garbage collection
    const finalMemory = process.memoryUsage().heapUsed;
    const memoryIncrease = finalMemory - initialMemory;
    
    expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024); // Less than 10MB
  });
});
```

## Error Testing

### Error Scenarios

```typescript
describe('Error handling', () => {
  it('should handle network errors gracefully', async () => {
    mockSDK.simulateNetworkError();
    
    await expect(connector.quote({
      base: fixtures.tokens.USDC,
      quote: fixtures.tokens.WETH,
      amount: '1000000',
      side: 'SELL'
    })).rejects.toThrow('Network error');
  });
  
  it('should handle invalid token addresses', async () => {
    await expect(connector.quote({
      base: { ...fixtures.tokens.USDC, address: 'invalid' },
      quote: fixtures.tokens.WETH,
      amount: '1000000',
      side: 'SELL'
    })).rejects.toThrow('Invalid token address');
  });
  
  it('should handle transaction failures', async () => {
    mockSDK.simulateTransactionFailure();
    
    await expect(connector.trade({
      wallet: fixtures.wallet,
      base: fixtures.tokens.USDC,
      quote: fixtures.tokens.WETH,
      amount: '1000000',
      side: 'SELL',
      slippage: 0.01
    })).rejects.toThrow('Transaction failed');
  });
  
  it('should handle slippage exceeded', async () => {
    mockSDK.setPriceImpact(0.1);
    
    await expect(connector.trade({
      wallet: fixtures.wallet,
      base: fixtures.tokens.USDC,
      quote: fixtures.tokens.WETH,
      amount: '1000000',
      side: 'SELL',
      slippage: 0.01
    })).rejects.toThrow('Slippage exceeded');
  });
});
```

## Test Coverage

### Running Coverage Reports

```bash
# Generate coverage report
pnpm test:coverage

# Generate HTML report
pnpm test:coverage -- --coverageReporters=html

# Check coverage thresholds
pnpm test:coverage -- --coverageThreshold='{
  "global": {
    "branches": 75,
    "functions": 75,
    "lines": 75,
    "statements": 75
  }
}'
```

### Coverage Configuration

```json
// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/connectors/mydex/**/*.ts',
    '!src/connectors/mydex/**/*.test.ts',
    '!src/connectors/mydex/types.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75
    }
  },
  coverageReporters: ['text', 'lcov', 'html']
};
```

## Test Utilities

### Helper Functions

```typescript
// test/utils/test-helpers.ts
export function createMockWallet(address?: string): Wallet {
  return {
    address: address || '0x' + '0'.repeat(40),
    privateKey: '0x' + '0'.repeat(64),
    signTransaction: jest.fn(),
    signMessage: jest.fn()
  };
}

export function createMockToken(
  symbol: string,
  decimals: number = 18
): Token {
  return {
    symbol,
    decimals,
    address: `0x${symbol}${'0'.repeat(40 - symbol.length)}`,
    name: `Mock ${symbol}`
  };
}

export async function waitForEvent(
  emitter: EventEmitter,
  event: string,
  timeout: number = 5000
): Promise<any> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Timeout waiting for event: ${event}`));
    }, timeout);
    
    emitter.once(event, (data) => {
      clearTimeout(timer);
      resolve(data);
    });
  });
}
```

## Best Practices

### 1. Test Independence
Each test should be independent and not rely on others:

```typescript
// Good
beforeEach(() => {
  connector = new MyDex('ethereum', 'mainnet');
});

// Bad - relies on previous test state
it('test 1', () => {
  connector.setState('value');
});

it('test 2', () => {
  expect(connector.getState()).toBe('value'); // Depends on test 1
});
```

### 2. Descriptive Test Names
Use clear, descriptive test names:

```typescript
// Good
it('should return USDC-WETH pool info with correct reserves and fee tier');

// Bad
it('works');
```

### 3. Test Data Builders
Create builders for complex test data:

```typescript
class PoolBuilder {
  private pool = { ...defaultPool };
  
  withTokens(token0: string, token1: string): this {
    this.pool.token0 = token0;
    this.pool.token1 = token1;
    return this;
  }
  
  withLiquidity(amount: string): this {
    this.pool.liquidity = amount;
    return this;
  }
  
  build(): Pool {
    return this.pool;
  }
}

// Usage
const pool = new PoolBuilder()
  .withTokens('USDC', 'WETH')
  .withLiquidity('1000000')
  .build();
```

### 4. Async Testing
Always handle async operations properly:

```typescript
// Good
it('should handle async operation', async () => {
  const result = await asyncOperation();
  expect(result).toBeDefined();
});

// Bad - might pass before async completes
it('should handle async operation', () => {
  asyncOperation().then(result => {
    expect(result).toBeDefined();
  });
});
```

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Gateway Testing Examples](https://github.com/hummingbot/gateway/tree/development/test)
- [Test Coverage Reports](https://github.com/hummingbot/gateway/actions)
- [Mock Data Examples](https://github.com/hummingbot/gateway/tree/development/test/mocks)