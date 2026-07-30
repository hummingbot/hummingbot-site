# Gateway DEX Connectors

Gateway provides standardized connectors for interacting with decentralized exchanges (DEXs) across different blockchain networks. Each connector implements one or more trading types (Router, AMM, CLMM) to support various DeFi protocols.

## Supported Connectors

!!! note
    The Gateway refactoring approved in [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c) has been completed with the v2.8.0 release. The new standard is now ready, and developers can help upgrade the legacy connectors to the new architecture. Community developers can claim bounties for these upgrades where available.

### Active Connectors

| Protocol | Chain | Router | AMM | CLMM | Description |
|----------|-------|--------|-----|------|---------------|
| **[Jupiter](../exchanges/gateway/jupiter.md)** | Solana | ✅ | ❌ | ❌ | Leading DEX aggregator on Solana (default router) |
| **[Titan](../exchanges/gateway/jupiter.md#other-solana-routers)** | Solana | ✅ | ❌ | ❌ | Solana swap router (new in v2.16.0) |
| **[DFlow](../exchanges/gateway/jupiter.md#other-solana-routers)** | Solana | ✅ | ❌ | ❌ | Solana swap router (new in v2.16.0) |
| **[OKX DEX](../exchanges/gateway/jupiter.md#other-solana-routers)** | Solana | ✅ | ❌ | ❌ | Solana swap router (new in v2.16.0) |
| **[Meteora](../exchanges/gateway/meteora.md)** | Solana | ❌ | ❌ | ✅ | Supports for Dynamic Liquidity Market Maker (DLMM) |
| **[Raydium](../exchanges/gateway/raydium.md)** | Solana | ❌ | ✅ | ✅ | Supports for Standard and Concentrated Pools |
| **[Orca](../exchanges/gateway/orca.md)** | Solana | ❌ | ❌ | ✅ | Supports Standard CLMM Pools |
| **[Uniswap](../exchanges/gateway/uniswap.md)** | Ethereum | ✅ | ✅ | ✅ | Support for V2, V3, and Universal Router |
| **[PancakeSwap](../exchanges/gateway/pancakeswap.md)** | Ethereum/BNB | ✅ | ✅ | ✅ | Support for V2, V3, and Smart Router |

The `swapProvider` setting in each network's configuration determines which router serves the unified `/trading/swap` endpoints. See [How to Change Routers](../exchanges/gateway/jupiter.md#how-to-change-routers) for switching between Solana routers.

## Connector Schemas

Gateway implements three standardized schemas that define the API structure for different trading types. Each connector must implement one or more of these schemas to ensure compatibility with Hummingbot.

### Router Schema
For DEX aggregators and swap-only protocols. Focuses on quoting optimal trade routes across multiple liquidity sources and executing quotes.

**Key Endpoints:**

- `quote-swap`: Get optimal swap quote with routing details
- `execute-swap`: Execute swap directly
- `execute-quote`: Execute pre-fetched quote

### AMM Schema  
For traditional Automated Market Maker pools with constant product (x*y=k) formulas, such as Uniswap V2 and Raydium Standard Pools.

**Key Endpoints:**

- `pool-info`: Get pool reserves and pricing
- `position-info`: Get current liquidity position details
- `quote-liquidity`: Calculate liquidity provision amounts
- `add-liquidity`: Add liquidity to pool
- `remove-liquidity`: Remove liquidity from pool

### CLMM Schema
For Concentrated Liquidity Market Maker pools where liquidity providers can specify custom price ranges such as Uniswap V3 and Raydium Concentrated Pools.

**Key Endpoints:**

- `positions-owned`: List all positions for an address
- `quote-position`: Calculate position parameters for price range
- `open-position`: Create new concentrated liquidity position
- `add-liquidity`: Add liquidity to existing position
- `remove-liquidity`: Remove liquidity from position
- `collect-fees`: Collect earned fees
- `close-position`: Close position and withdraw all liquidity

## Building Custom Connectors

For detailed instructions on building custom Gateway DEX connectors, see [Building Gateway Connectors](../connectors/gateway-connectors/index.md).
