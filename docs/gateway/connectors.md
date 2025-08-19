# Gateway DEX Connectors

Gateway provides standardized connectors for interacting with decentralized exchanges (DEXs) across different blockchain networks. Each connector implements one or more trading types (Router, AMM, CLMM) to support various DeFi protocols.

## Supported Connectors

| Protocol | Chain | Router | AMM | CLMM | Documentation |
|----------|-------|--------|-----|------|---------------|
| **[Jupiter](/exchanges/gateway/jupiter)** | Solana | ✅ | ❌ | ❌ | Leading DEX aggregator on Solana |
| **[Meteora](/exchanges/gateway/meteora)** | Solana | ❌ | ❌ | ✅ | Dynamic Liquidity Market Maker (DLMM) |
| **[Raydium](/exchanges/gateway/raydium)** | Solana | ❌ | ✅ | ✅ | Full-featured DEX with AMM and CLMM |
| **[Uniswap](/exchanges/gateway/uniswap)** | Ethereum/EVM | ✅ | ✅ | ✅ | The original AMM DEX with V2, V3, and Universal Router |
| **[0x](/exchanges/gateway/0x)** | Ethereum/EVM | ✅ | ❌ | ❌ | Professional-grade DEX aggregator with RFQ |

## Trading Types Explained

### Router (DEX Aggregators)
Router connectors interface with DEX aggregators that find optimal swap routes across multiple liquidity sources. They don't manage liquidity positions but focus on executing trades at the best available prices.

**Key Features:**
- Smart order routing across multiple DEXs
- Gas optimization
- MEV protection
- Better price execution through route splitting

### AMM (Automated Market Maker)
AMM connectors work with traditional constant product (x*y=k) pools, commonly known as V2-style pools. Users can both trade and provide liquidity to earn fees.

**Key Features:**
- Simple liquidity provision with automatic 50/50 balancing
- Single liquidity position per pool
- Fees earned proportionally to liquidity share
- No need to manage price ranges

### CLMM (Concentrated Liquidity Market Maker)
CLMM connectors support concentrated liquidity pools where liquidity providers can specify custom price ranges, improving capital efficiency.

**Key Features:**
- Custom price ranges for liquidity provision
- Multiple positions per pool
- Higher fee earnings within active price ranges
- NFT-based position tracking
- Active position management required

## Base Schemas

Gateway implements three standardized schemas that define the API structure for different trading types. Each connector must implement one or more of these schemas to ensure compatibility with Hummingbot.

### Router Schema
For DEX aggregators and swap-only protocols. Focuses on finding optimal trade routes across multiple liquidity sources.

**Key Operations:**
- `quote-swap`: Get optimal swap quote with routing details
- `execute-swap`: Execute swap directly
- `execute-quote`: Execute pre-fetched quote

### AMM Schema  
For traditional Automated Market Maker pools with constant product (x*y=k) formulas.

**Key Operations:**
- `pool-info`: Get pool reserves and pricing
- `position-info`: Get current liquidity position details
- `quote-liquidity`: Calculate liquidity provision amounts
- `add-liquidity`: Add liquidity to pool
- `remove-liquidity`: Remove liquidity from pool

### CLMM Schema
For Concentrated Liquidity Market Maker pools where liquidity providers can specify custom price ranges.

**Key Operations:**
- `positions-owned`: List all positions for an address
- `quote-position`: Calculate position parameters for price range
- `open-position`: Create new concentrated liquidity position
- `add-liquidity`: Add liquidity to existing position
- `remove-liquidity`: Remove liquidity from position
- `collect-fees`: Collect earned fees
- `close-position`: Close position and withdraw all liquidity

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

## Resources

- [Gateway GitHub Repository](https://github.com/hummingbot/gateway)
- [Gateway API Documentation](http://localhost:15888/docs) (when running)
- [API Commands Reference](/gateway/commands)
- [Hummingbot Documentation](https://docs.hummingbot.org)
- [Discord Support](https://discord.gg/hummingbot)