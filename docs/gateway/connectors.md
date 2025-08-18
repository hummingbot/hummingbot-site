# Gateway DEX Connectors

Gateway provides standardized connectors for interacting with decentralized exchanges (DEXs) across different blockchain networks. Each connector implements one or more trading types (Router, AMM, CLMM) to support various DeFi protocols.

## Supported Connectors

| Protocol | Chain | Router | AMM | CLMM | Description |
|----------|-------|--------|-----|------|-------------|
| **Jupiter** | Solana | ✅ | ❌ | ❌ | Leading DEX aggregator on Solana, finding optimal swap routes across multiple liquidity sources |
| **Meteora** | Solana | ❌ | ❌ | ✅ | Dynamic Liquidity Market Maker (DLMM) with bin-based concentrated liquidity |
| **Raydium** | Solana | ❌ | ✅ | ✅ | Full-featured DEX with both Standard AMM (V2) and Concentrated Liquidity (V3) pools |
| **Uniswap** | Ethereum/EVM | ✅ | ✅ | ✅ | The original AMM DEX, supporting V2 pools, V3 concentrated liquidity, and Smart Order Router |
| **0x** | Ethereum/EVM | ✅ | ❌ | ❌ | Professional-grade DEX aggregator with RFQ system and multi-chain support |

## Trading Types Explained

### Router (DEX Aggregators)
Router connectors interface with DEX aggregators that find optimal swap routes across multiple liquidity sources. They don't manage liquidity positions but focus on executing trades at the best available prices.

**Key Features:**
- Smart order routing across multiple DEXs
- Gas optimization
- MEV protection
- Better price execution through route splitting

**Available for:** Jupiter, Uniswap (via Universal Router), 0x

### AMM (Automated Market Maker)
AMM connectors work with traditional constant product (x*y=k) pools, commonly known as V2-style pools. Users can both trade and provide liquidity to earn fees.

**Key Features:**
- Simple liquidity provision with automatic 50/50 balancing
- Single liquidity position per pool
- Fees earned proportionally to liquidity share
- No need to manage price ranges

**Available for:** Raydium Standard, Uniswap V2

### CLMM (Concentrated Liquidity Market Maker)
CLMM connectors support concentrated liquidity pools where liquidity providers can specify custom price ranges, improving capital efficiency.

**Key Features:**
- Custom price ranges for liquidity provision
- Multiple positions per pool
- Higher fee earnings within active price ranges
- NFT-based position tracking
- Active position management required

**Available for:** Raydium CLMM, Uniswap V3, Meteora DLMM

## Connector Details

### Jupiter

**Chain:** Solana  
**Trading Types:** Router  
**Networks:** mainnet-beta, devnet

Jupiter is Solana's leading DEX aggregator, providing best-price swaps by routing through multiple liquidity sources including Raydium, Orca, Meteora, and others.

#### Configuration
Configure Jupiter settings in `/conf/connectors/jupiter.yml`:
```yaml
allowedSlippage: 1.0  # Maximum slippage percentage
gasLimitEstimate: 300000
ttl: 30  # Quote time-to-live in seconds
referrerAddress: null  # Optional referrer address for fees
```

#### Key Features
- Automatic route optimization
- Token list integration
- Priority fee suggestions
- Transaction versioning support

#### API Endpoints
- `POST /connectors/jupiter/router/quote-swap` - Get optimal swap quote
- `POST /connectors/jupiter/router/execute-swap` - Execute swap directly
- `POST /connectors/jupiter/router/execute-quote` - Execute pre-fetched quote

### Raydium

**Chain:** Solana  
**Trading Types:** AMM, CLMM  
**Networks:** mainnet-beta, devnet

Raydium offers both Standard AMM pools (similar to Uniswap V2) and Concentrated Liquidity pools (CLMM) for more capital-efficient liquidity provision.

#### Configuration
Configure Raydium settings in `/conf/connectors/raydium.yml`:
```yaml
allowedSlippage: 1.0
gasLimitEstimate: 500000
ttl: 30
programIds:
  amm: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"
  clmm: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
```

#### Standard AMM Features
- Traditional x*y=k pools
- Simple LP token mechanism
- Automatic rebalancing
- Pool-wide fee distribution

#### CLMM Features
- Concentrated liquidity positions
- Custom price ranges
- Position NFTs
- Individual fee collection
- Up to 500x capital efficiency

#### API Endpoints

**AMM Operations:**
- `POST /connectors/raydium/amm/pool-info`
- `POST /connectors/raydium/amm/position-info`
- `POST /connectors/raydium/amm/quote-swap`
- `POST /connectors/raydium/amm/execute-swap`
- `POST /connectors/raydium/amm/quote-liquidity`
- `POST /connectors/raydium/amm/add-liquidity`
- `POST /connectors/raydium/amm/remove-liquidity`

**CLMM Operations:**
- `POST /connectors/raydium/clmm/pool-info`
- `POST /connectors/raydium/clmm/positions-owned`
- `POST /connectors/raydium/clmm/position-info`
- `POST /connectors/raydium/clmm/quote-position`
- `POST /connectors/raydium/clmm/open-position`
- `POST /connectors/raydium/clmm/add-liquidity`
- `POST /connectors/raydium/clmm/remove-liquidity`
- `POST /connectors/raydium/clmm/collect-fees`
- `POST /connectors/raydium/clmm/close-position`

### Meteora

**Chain:** Solana  
**Trading Types:** CLMM  
**Networks:** mainnet-beta, devnet

Meteora implements a Dynamic Liquidity Market Maker (DLMM) model using discrete price bins instead of continuous price curves.

#### Configuration
Configure Meteora settings in `/conf/connectors/meteora.yml`:
```yaml
allowedSlippage: 1.0
gasLimitEstimate: 400000
ttl: 30
programId: "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo"
```

#### DLMM Features
- Bin-based liquidity concentration
- Dynamic fee tiers
- Zero slippage within bins
- Flexible liquidity shapes
- Volatility-adjusted fees

#### API Endpoints
- `POST /connectors/meteora/clmm/pool-info`
- `POST /connectors/meteora/clmm/fetch-pools`
- `POST /connectors/meteora/clmm/positions-owned`
- `POST /connectors/meteora/clmm/position-info`
- `POST /connectors/meteora/clmm/quote-swap`
- `POST /connectors/meteora/clmm/execute-swap`
- `POST /connectors/meteora/clmm/open-position`
- `POST /connectors/meteora/clmm/add-liquidity`
- `POST /connectors/meteora/clmm/remove-liquidity`
- `POST /connectors/meteora/clmm/collect-fees`
- `POST /connectors/meteora/clmm/close-position`

### Uniswap

**Chain:** Ethereum and EVM-compatible chains  
**Trading Types:** Router, AMM, CLMM  
**Networks:** mainnet, arbitrum, optimism, base, polygon, avalanche, bsc, celo

Uniswap is the most comprehensive DEX protocol, supporting V2 AMM pools, V3 concentrated liquidity, and Universal Router for optimal trade execution.

#### Configuration
Configure Uniswap settings in `/conf/connectors/uniswap.yml`:
```yaml
allowedSlippage: 1.0
gasLimitEstimate: 300000
ttl: 600
contractAddresses:
  mainnet:
    uniswapV2RouterAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    uniswapV3RouterAddress: "0xE592427A0AEce92De3Edee1F18E0157C05861564"
    uniswapV3NftManagerAddress: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88"
    universalRouterAddress: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD"
```

#### Uniswap V2 (AMM)
- Classic constant product pools
- ERC-20 LP tokens
- 0.3% default fee tier
- Simple liquidity provision

#### Uniswap V3 (CLMM)
- Concentrated liquidity positions
- Multiple fee tiers (0.01%, 0.05%, 0.3%, 1%)
- Position NFTs
- Range orders capability
- Up to 4000x capital efficiency

#### Universal Router
- Aggregates V2, V3, and other protocols
- Multi-hop routing
- Permit2 integration
- Gas-optimized execution

#### API Endpoints

**Router Operations:**
- `POST /connectors/uniswap/router/quote-swap`
- `POST /connectors/uniswap/router/execute-swap`
- `POST /connectors/uniswap/router/execute-quote`

**AMM Operations:**
- `POST /connectors/uniswap/amm/pool-info`
- `POST /connectors/uniswap/amm/position-info`
- `POST /connectors/uniswap/amm/quote-swap`
- `POST /connectors/uniswap/amm/execute-swap`
- `POST /connectors/uniswap/amm/quote-liquidity`
- `POST /connectors/uniswap/amm/add-liquidity`
- `POST /connectors/uniswap/amm/remove-liquidity`

**CLMM Operations:**
- `POST /connectors/uniswap/clmm/pool-info`
- `POST /connectors/uniswap/clmm/positions-owned`
- `POST /connectors/uniswap/clmm/position-info`
- `POST /connectors/uniswap/clmm/quote-position`
- `POST /connectors/uniswap/clmm/open-position`
- `POST /connectors/uniswap/clmm/add-liquidity`
- `POST /connectors/uniswap/clmm/remove-liquidity`
- `POST /connectors/uniswap/clmm/collect-fees`
- `POST /connectors/uniswap/clmm/close-position`

### 0x Protocol

**Chain:** Ethereum and EVM-compatible chains  
**Trading Types:** Router  
**Networks:** mainnet, arbitrum, optimism, base, polygon, avalanche, bsc

0x is a professional-grade DEX aggregator that combines on-chain liquidity with off-chain RFQ (Request for Quote) systems from professional market makers.

#### Configuration
Configure 0x settings in `/conf/connectors/0x.yml`:
```yaml
allowedSlippage: 1.0
gasLimitEstimate: 350000
ttl: 30
apiEndpoint: "https://api.0x.org"
apiKey: null  # Optional API key for higher rate limits
```

#### Key Features
- RFQ system for better prices
- Smart order routing
- MEV protection
- Professional market maker liquidity
- Gasless trading support

#### API Endpoints
- `POST /connectors/0x/router/quote-swap` - Get aggregated quote
- `POST /connectors/0x/router/execute-swap` - Execute swap
- `POST /connectors/0x/router/execute-quote` - Execute pre-fetched quote
- `GET /connectors/0x/router/get-price` - Get indicative price

## Connector Schemas

Gateway implements standardized API schemas that define the request and response structure for different types of trading operations. These schemas ensure consistency across connectors and make it easier to integrate new DEXs.

### Schema Files Location
Schema definitions are located in the Gateway repository:
- Router Schema: [`src/schemas/router-schema.ts`](https://github.com/hummingbot/gateway/blob/development/src/schemas/router-schema.ts)
- AMM Schema: [`src/schemas/amm-schema.ts`](https://github.com/hummingbot/gateway/blob/development/src/schemas/amm-schema.ts)
- CLMM Schema: [`src/schemas/clmm-schema.ts`](https://github.com/hummingbot/gateway/blob/development/src/schemas/clmm-schema.ts)

### Common Request Parameters

Most trading operations share common parameters:

```typescript
{
  chain: string;        // Blockchain name (e.g., "ethereum", "solana")
  network: string;      // Network name (e.g., "mainnet", "mainnet-beta")
  connector: string;    // Connector name (e.g., "uniswap", "raydium")
  address: string;      // Wallet address
  slippage?: number;    // Maximum slippage tolerance (e.g., 0.01 for 1%)
}
```

### Common Response Fields

Standard response fields across operations:

```typescript
{
  network: string;      // Network used
  timestamp: number;    // Unix timestamp
  latency: number;      // Response time in milliseconds
  base: string;         // Base token symbol
  quote: string;        // Quote token symbol
  amount: string;       // Amount traded/quoted
  expectedOut: string;  // Expected output amount
  price: string;        // Execution price
  gasEstimate?: string; // Estimated gas cost
  txHash?: string;      // Transaction hash (for executed trades)
}
```

## Adding Custom Connectors

To add support for a new DEX connector:

1. **Choose the appropriate trading type(s)**:
   - Router: For DEX aggregators
   - AMM: For V2-style constant product pools
   - CLMM: For concentrated liquidity pools

2. **Create connector implementation**:
   ```typescript
   // src/connectors/mydex/mydex.ts
   export class MyDex {
     private static instances: Record<string, MyDex> = {};
     
     public static getInstance(chain: string, network: string): MyDex {
       const key = `${chain}:${network}`;
       if (!MyDex.instances[key]) {
         MyDex.instances[key] = new MyDex(chain, network);
       }
       return MyDex.instances[key];
     }
   }
   ```

3. **Implement required methods** based on chosen trading types

4. **Create route handlers** in appropriate subdirectories:
   - `router-routes/` for Router operations
   - `amm-routes/` for AMM operations
   - `clmm-routes/` for CLMM operations

5. **Add configuration files**:
   - Create schema in `src/templates/namespace/mydex-schema.json`
   - Create default config in `src/templates/connectors/mydex.yml`

6. **Register the connector** in `src/connectors/connector.routes.ts`

7. **Write tests** with minimum 75% coverage

## Best Practices

### For Traders
- Always use appropriate slippage settings based on market volatility
- Check gas estimates before executing large trades
- Use `execute-quote` pattern when possible for better execution guarantees
- Monitor transaction status using the `/poll` endpoint

### For Liquidity Providers
- Understand impermanent loss risks
- For CLMM: Choose price ranges based on volatility and fee tiers
- Regularly collect fees and rebalance positions
- Monitor position performance and adjust ranges as needed

### For Developers
- Implement proper error handling for all connector methods
- Use the standardized schemas for consistency
- Cache pool and token data when appropriate
- Implement retry logic for transient failures
- Add comprehensive logging for debugging

## Troubleshooting

### Common Issues

**"Pool not found" errors:**
- Verify the pool ID is correct
- Check that the pool exists on the specified network
- Ensure tokens are in the correct order (base/quote)

**"Insufficient liquidity" errors:**
- Try smaller trade amounts
- Check pool TVL and depth
- Consider using Router connectors for better liquidity aggregation

**"Slippage too high" errors:**
- Increase slippage tolerance
- Try smaller trade sizes
- Execute during lower volatility periods

**Transaction failures:**
- Check wallet has sufficient balance for trade + gas
- Verify token approvals are in place
- Ensure wallet is unlocked/connected

## Resources

- [Gateway GitHub Repository](https://github.com/hummingbot/gateway)
- [Gateway API Documentation](http://localhost:15888/docs) (when running)
- [Hummingbot Documentation](https://docs.hummingbot.org)
- [Discord Support](https://discord.gg/hummingbot)