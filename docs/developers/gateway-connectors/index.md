# Building Gateway Connectors

## Overview

This guide walks you through the process of building new Gateway connectors for decentralized exchanges (DEXs). Gateway connectors enable Hummingbot to interact with blockchain-based trading protocols through a standardized REST API interface.

Gateway supports three types of DEX connectors:

- **Router**: DEX aggregators that find optimal swap routes
- **AMM**: Traditional V2-style constant product pools
- **CLMM**: Concentrated liquidity market makers with custom price ranges

## Prerequisites

Before building a Gateway connector, ensure you have:

### Development Environment
- Node.js 18+ and pnpm
- TypeScript knowledge
- Understanding of the target blockchain and DEX protocol

### Protocol Knowledge
- Familiarity with the DEX's smart contracts
- Understanding of the protocol's SDK or API
- Knowledge of liquidity pool mechanics

### Gateway Setup
- Gateway development environment configured
- Ability to run and test Gateway locally

## Connector Architecture

Gateway connectors follow a modular architecture:

```
src/connectors/{protocol}/
├── {protocol}.ts           # Main connector class
├── {protocol}.config.ts    # Configuration interface
├── {protocol}.constants.ts # Protocol-specific constants
├── {protocol}.utils.ts     # Helper functions
├── router-routes/          # Router endpoints (if applicable)
├── amm-routes/            # AMM endpoints (if applicable)
└── clmm-routes/           # CLMM endpoints (if applicable)
```

## Implementation Steps

### Step 1: Choose Connector Type

Determine which trading types your DEX supports:

| Type | Use Case | Key Methods |
|------|----------|-------------|
| **Router** | DEX aggregators, swap-only protocols | `quote`, `trade`, `estimateGas` |
| **AMM** | V2-style pools with LP tokens | `poolPrice`, `addLiquidity`, `removeLiquidity` |
| **CLMM** | Concentrated liquidity with ranges | `openPosition`, `addLiquidity`, `collectFees` |

### Step 2: Create Connector Class

Create the main connector class - reference **Uniswap** if you are building an Ethereum-based DEX connector and **Raydium** if you are building a Solana-based DEX connector.

```typescript
// src/connectors/mydex/mydex.ts
export class MyDex {
  private static instances: Record<string, MyDex> = {};
  public solana: Solana; // or Ethereum
  public sdk: MyDEXSDK;
  public config: MyDexConfig.RootConfig;
 
  private constructor() {
    this.config = MyDexConfig.config;
    this.txVersion = TxVersion.V0;
  }

  // Gets singleton instance
  public static getInstance(network: string): MyDex {
    if (!MyDex._instances) {
      MyDex._instances = {};
    }

    if (!MyDex._instances[network]) {
      const instance = new MyDex();
      await instance.init(network);
      MyDex._instances[network] = instance;
    }

    return MyDex._instances[network];
  }

  // Initializes instance
  private async init(network: string) {
    try {
      this.solana = await Solana.getInstance(network);
      this.sdk = await MyDEXSDK.load({
        connection: this.solana.connection,
        blockhashCommitment: 'confirmed',
      });

      logger.info('MyDEX initialized successfully');
    } catch (error) {
      logger.error('MyDEX initialization failed:', error);
      throw error;
    }
  }
}
```

### Step 3: Implement Trading Methods

Based on your connector type, implement the required methods:

#### Router Methods

```typescript
// Quote a swap
async quote(
  base: Token,
  quote: Token,
  amount: BigNumber,
  side: 'BUY' | 'SELL'
): Promise<SwapQuote> {
  // Implement quote logic
  return {
    route: optimalRoute,
    expectedOut: outputAmount,
    priceImpact: impact,
    gasEstimate: gasLimit
  };
}

// Execute a swap
async trade(
  wallet: Wallet,
  quote: SwapQuote,
  slippage: number
): Promise<Transaction> {
  // Build and execute transaction
  return transaction;
}
```

#### AMM Methods

```typescript
// Get pool information
async poolInfo(
  base: Token,
  quote: Token
): Promise<PoolInfo> {
  // Fetch pool data
  return {
    reserves: [baseReserve, quoteReserve],
    fee: poolFee,
    liquidity: totalLiquidity
  };
}

// Add liquidity
async addLiquidity(
  wallet: Wallet,
  base: Token,
  quote: Token,
  baseAmount: BigNumber,
  quoteAmount: BigNumber,
  slippage: number
): Promise<Transaction> {
  // Add liquidity logic
  return transaction;
}
```

#### CLMM Methods

```typescript
// Open a concentrated liquidity position
async openPosition(
  wallet: Wallet,
  pool: Pool,
  lowerPrice: number,
  upperPrice: number,
  baseAmount: BigNumber,
  quoteAmount: BigNumber
): Promise<Position> {
  // Create position NFT
  return position;
}

// Collect earned fees
async collectFees(
  wallet: Wallet,
  positionId: string
): Promise<Transaction> {
  // Collect fees logic
  return transaction;
}
```

### Step 4: Create Route Handlers

Create route handler files for your supported operations:

```typescript
// src/connectors/mydex/router-routes/router.routes.ts
import { Router, Request, Response } from 'express';
import { MyDex } from '../mydex';
import { 
  QuoteSwapRequest,
  QuoteSwapResponse,
  ExecuteSwapRequest,
  ExecuteSwapResponse 
} from '../../../schemas/router-schema';

export const routerRoutes = Router();

routerRoutes.post('/quote-swap', async (req: Request, res: Response) => {
  const request = req.body as QuoteSwapRequest;
  const connector = MyDex.getInstance(request.chain, request.network);
  
  try {
    const quote = await connector.quote(
      request.base,
      request.quote,
      request.amount,
      request.side
    );
    
    const response: QuoteSwapResponse = {
      network: request.network,
      timestamp: Date.now(),
      latency: 0,
      base: request.base,
      quote: request.quote,
      amount: request.amount,
      expectedOut: quote.expectedOut,
      price: quote.price,
      gasEstimate: quote.gasEstimate,
      route: quote.route
    };
    
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routerRoutes.post('/execute-swap', async (req: Request, res: Response) => {
  // Implementation for swap execution
});
```

### Step 5: Add Configuration

Create configuration files for your connector:

#### Schema Definition

```json
// src/templates/namespace/mydex-schema.json
{
  "type": "object",
  "properties": {
    "slippagePct": {
      "type": "number",
      "description": "Maximum slippage percentage",
      "default": 1.0
    },
    "customParam": {
      "type": "number",
      "description": "Custom parameter",
    },
  },
  "required": ["slippagePct"]
}
```

#### Default Configuration

```yaml
# src/templates/connectors/mydex.yml
allowedSlippage: 1.0
customParam: 300000
```

### Step 6: Register the Connector

Register your connector in the main connector routes:

```typescript
// src/connectors/connector.routes.ts
import { Router } from 'express';
import { routerRoutes as mydexRouterRoutes } from './mydex/router-routes/router.routes';
import { ammRoutes as mydexAmmRoutes } from './mydex/amm-routes/amm.routes';

export const connectorRoutes = Router();

// Add your connector routes
connectorRoutes.use('/mydex/router', mydexRouterRoutes);
connectorRoutes.use('/mydex/amm', mydexAmmRoutes);
```

### Step 7: Write Tests

Create comprehensive tests for your connector:

```typescript
// test/connectors/mydex/mydex.test.ts
import { MyDex } from '../../../src/connectors/mydex/mydex';

describe('MyDex Connector', () => {
  let connector: MyDex;
  
  beforeEach(() => {
    connector = MyDex.getInstance('ethereum', 'mainnet');
  });
  
  describe('quote', () => {
    it('should return valid quote for token swap', async () => {
      const quote = await connector.quote(
        mockTokenA,
        mockTokenB,
        BigNumber.from('1000000'),
        'SELL'
      );
      
      expect(quote).toBeDefined();
      expect(quote.expectedOut).toBeGreaterThan(0);
      expect(quote.priceImpact).toBeLessThan(0.1);
    });
    
    it('should handle insufficient liquidity', async () => {
      await expect(
        connector.quote(
          mockTokenA,
          mockTokenB,
          BigNumber.from('999999999999'),
          'SELL'
        )
      ).rejects.toThrow('Insufficient liquidity');
    });
  });
  
  // Add tests for all methods
});
```

## Adding Chain Support

!!! note "Chain Support Status"
    Gateway is currently not accepting pull requests for new blockchain implementations. The framework currently supports:
    - **EVM chains**: Ethereum and EVM-compatible chains (Arbitrum, Optimism, Base, Polygon, BSC, Avalanche, etc.)
    - **SVM chains**: Solana and SVM-compatible chains
    
    If your connector requires a chain built on either EVM or SVM architecture, you can proceed with the implementation below. For entirely new blockchain architectures, please check the [GitHub repository](https://github.com/hummingbot/gateway) for updates on when new chain support will be accepted.

If your connector requires a new blockchain:

### Step 1: Create Chain Implementation

```typescript
// src/chains/mychain/mychain.ts
import { ChainBase } from '../../services/chain-base';

export class MyChain extends ChainBase {
  private static instances: Record<string, MyChain> = {};
  
  public static getInstance(network: string): MyChain {
    if (!MyChain.instances[network]) {
      MyChain.instances[network] = new MyChain(network);
    }
    return MyChain.instances[network];
  }
  
  // Implement required methods
  async getWallet(address: string): Promise<Wallet> {
    // Wallet implementation
  }
  
  async getBalance(address: string): Promise<Balance> {
    // Balance checking logic
  }
  
  async getTokens(symbols: string[]): Promise<Token[]> {
    // Token resolution logic
  }
}
```

### Step 2: Create Chain Routes

```typescript
// src/chains/mychain/routes/mychain.routes.ts
import { Router } from 'express';
import { MyChain } from '../mychain';

export const chainRoutes = Router();

chainRoutes.get('/balance', async (req, res) => {
  const { address } = req.query;
  const chain = MyChain.getInstance(req.query.network);
  const balance = await chain.getBalance(address);
  res.json(balance);
});
```

### Step 3: Add Chain Configuration

```yaml
# src/templates/chains/mychain.yml
networks:
  mainnet:
    rpcUrl: 'https://rpc.mychain.io'
    chainId: 1234
    nativeCurrency: 'MYCOIN'
  testnet:
    rpcUrl: 'https://testnet-rpc.mychain.io'
    chainId: 5678
    nativeCurrency: 'TESTCOIN'
```

## Testing Requirements

All Gateway connectors must meet these testing standards:

1. **Code Coverage**: Minimum 75% coverage
2. **Unit Tests**: Test all public methods
3. **Integration Tests**: Test API endpoints
4. **Error Handling**: Test failure scenarios
5. **Mock Data**: Use realistic test data

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific connector
pnpm test -- mydex

# Check coverage
pnpm test:coverage
```

## Code Quality Standards

### Linting and Formatting

Gateway uses ESLint and Prettier for code quality:

```bash
# Run linting
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

### TypeScript Best Practices

1. **Strong Typing**: Use explicit types, avoid `any`
2. **Error Handling**: Implement proper error classes
3. **Async/Await**: Use modern async patterns
4. **Documentation**: Add JSDoc comments for public methods

## Submission Checklist

Before submitting your connector:

- [ ] All tests pass with >75% coverage
- [ ] Code passes linting and formatting checks
- [ ] Configuration files added for all supported networks
- [ ] API endpoints follow schema specifications
- [ ] Documentation includes usage examples
- [ ] Error handling covers edge cases
- [ ] Performance tested with realistic loads
- [ ] Security review completed

## Next Steps

1. **Test locally**: Run Gateway with your connector and test all operations
2. **Create examples**: Add sample scripts showing connector usage
3. **Submit PR**: Create pull request to [Gateway repository](https://github.com/hummingbot/gateway)
4. **Governance proposal**: Submit [New Connector Proposal](/governance/proposals) if required

## Resources

- [Gateway GitHub Repository](https://github.com/hummingbot/gateway)
- [Gateway API Documentation](/gateway/commands)
- [Connector Schemas](https://github.com/hummingbot/gateway/tree/development/src/schemas)
- [Example Connectors](https://github.com/hummingbot/gateway/tree/development/src/connectors)
- [Discord Support](https://discord.gg/hummingbot)