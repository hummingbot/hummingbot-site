Gateway is API middleware that enables Hummingbot to send and receive data from different blockchain protocols and provides a standard interface for community developers to add connectors for common DeFi protocols.

Gateway connectors establish and maintain connections to automated market maker (AMM) DEXs and other protocols on various blockchain networks, interfaces with their Javascript SDKs, and exposes standard REST API endpoints for trading and liquidity provision-related actions on these DEXs.

See [Gateway](/gateway) for more information.

### Gateway DEX Connector Schemas

Gateway schemas define standardized endpoints that chains and connectors must implement to ensure compatibility with Hummingbot. Each schema specifies a set of endpoints with precise request and response structures that the Hummingbot GatewayHTTPClient and related connector interfaces utilize. Each chain and connector route should be self-contained in its own file and contain both the route handler and other logic required.

Gateway currently supports the following connector schemas:

* **Swap**: For taker-only DEXs and DEX aggregators.
* **AMM**: For Automated Market Maker DEXs (like Raydium Standard and Uniswap V2 pools)
* **CLMM**: For Concentrated Liquidity Market Maker DEXs (like Raydium Concentrated and Uniswap V3 pools)

The schema files are located in the [`src/schemas/trading-types`](https://github.com/hummingbot/gateway/tree/development/src/schemas/trading-types) directory of the Gateway repository.

For comprehensive documentation, including detailed endpoint specifications, request parameters, and response formats, please refer to the [Schemas](/gateway/schemas) page.

## Current Gateway DEX Connectors

!!! note
    Gateway is currently undergoing a large multi-release codebase refactoring, approved in proposal [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c). During this refactoring process, not all connectors are available in the new version, as they are being gradually migrated from the legacy architecture.

Here are the Gateway connectors in the codebase for the current [Epoch](/governance/epochs/). The **Updated** column shows whether the connector has been updated for the changes approvd in [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c)

| Exchange | Chain Architecture | Updated? | Connector Types |
|----------|-------|----------|-----------------|
| [Jupiter](/exchanges/gateway/jupiter) | `solana` | ✓ | `swap` |
| [Meteora](/exchanges/gateway/meteora) | `solana` | ✓ | `swap`, `clmm` |
| [Raydium](/exchanges/gateway/raydium) | `solana` | ✓ | `swap`, `clmm`, `amm` |
| [Uniswap](/exchanges/gateway/uniswap) | `ethereum` | ✓ | `swap`, `amm`, `clmm` |
| [Balancer](/exchanges/gateway/balancer) | `ethereum` | | `swap`, `amm` |
| [Carbon](/exchanges/gateway/carbon) | `ethereum` | | `swap`, `amm` |
| [Curve](/exchanges/gateway/curve) | `ethereum` | | `swap`, `amm` |
| [ETCSwap](/exchanges/gateway/etcSwap) | `ethereum` | | `swap`, `amm`, `clmm` |
| [Pancakeswap](/exchanges/gateway/pancakeswap) | `ethereum` | | `swap`, `amm` |
| [Quickswap](/exchanges/gateway/quickswap) | `ethereum` | | `amm` |
| [Sushiswap](/exchanges/gateway/sushiswap) | `ethereum` | | `amm` |
| [TraderJoe](/exchanges/gateway/traderjoe) | `ethereum` | | `amm` |

### Building Gateway DEX Connectors

See [Adding a New Gateway DEX Connector](/gateway/new-connector/) guide. This guide uses the new Raydium connector as reference and walks through how to build your connector for compatibility with the Hummingbot client.

If the exchange is not yet supported by Hummingbot, you can submit a governance proposal for it to be included. New connectors may be contributed by community members via [New Connector Proposals](/governance/proposals), which require a pull request with the connector code to the Hummingbot Github repo, along with a minimum HBOT balance to create.
