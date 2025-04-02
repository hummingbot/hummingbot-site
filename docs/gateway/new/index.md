## Gateway Connectors

Gateway connectors integrate into a decentralized exchange's (DEX) Javascript SDKs or smart contracts, enabling standardized transaction placement and blockchain data fetching from the perspective of Hummingbot strategies. Each DeFi connector implements a specific trading type:

- **Swap**: Simple token exchange connectors for basic swapping functionality
- **AMM (Automated Market Maker)**: Connectors for liquidity pool-based exchanges like Uniswap V2
- **CLMM (Concentrated Liquidity Market Maker)**: Connectors for advanced AMMs with concentrated liquidity positions like Uniswap V3

## Architecture

Each Gateway connector is a folder in the [Gateway](/gateway) repository, either in [connectors](https://github.com/hummingbot/gateway/tree/main/src/connectors).
