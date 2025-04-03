## What is Gateway?

Hummingbot Gateway is open source API middleware that helps the Hummingbot client to connect to decentralized exchanges (DEX) on various blockchain networks. Gateway manages interfacing with DEX connectors and exposes standard REST API endpoints for trading and liquidity-related functionality on these DEXs.

The [Gateway code repo](https://github.com/hummingbot/gateway) is open sourced under the Apache 2.0 license and updated using the same [release cycle](/release-notes) as the main Hummingbot client codebase.

## New vs Legacy

Gateway is currently undergoing a large multi-release codebase refactoring, approved in proposal [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c).

The Gateway refactor modernizes the codebase and makes it more flexible for future development, while adding important new components that enable standalone use:

* **Chain-Agnostic Design**: Removes dependency on specific chain architectures in the Hummingbot client. The client now supports specific connector types, and any connector that implements the appropriate schema should be compatible with Hummingbot.
* **Enhanced Flexibility**: The new architecture is more flexible and should support a wider range of DEX protocols, allowing for extension into future connector types such as lending and bridging.
* **Modernized Codebase**: The new version reduces code bloat and image size by upgrading to Fastify and `pnpm`
* **Developer Mode**: The new `--dev` flag allows developers to inspect/execute endpoints using the auto-generated Swagger interactive API
* **Command-Line Interface**: Gateway introduced a dedicated `gateway` command and CLI for standalone use.

### Gateway New

Starting in release v2.5+, Gateway connectors expose standard API endpoints for the following types of connectors:

- **Swap**: Endpoints for fetching quote prices and executing swaps on taker-only DEXs and DEX aggregators, like [Jupiter](https://jup.ag/).
- **AMM**: Endpoints for quoting, swapping, and adding/removing liquidity on AMM (Automated Market Maker) DEXs, like [Raydium Standard](https://raydium.io/liquidity-pools/?tab=standard) and Uniswap V2 pools.
- **CLMM**: Endpoints for quoting, swapping, and adding/removing liquidity on CLMM (Concentrated Liquidity Market Maker) DEXs, like [Raydium Concentrated](https://raydium.io/liquidity-pools/?tab=concentrated) and Uniswap V3/V4 pools.

Each exchange is a folder in the [`src/connectors`](https://github.com/hummingbot/gateway/tree/core-2.5/src/connectors) folder. The main exchange folder may contain routes for different connectors, such as `raydium/amm` and `raydium/clmm`, as long as they implement the standard API [schemas](schemas.md) for the given type.

Follow the links below to install, configure and use Gateway:

- [README](https://github.com/hummingbot/gateway/tree/core-2.5): Github README which explains how to install and setup Gateway
- [Connector Walkthrough](walkthrough.md): How to configure, test, and use the Raydium connectors alongside Hummingbot

Gateway's roadmap includes plans to expand functionality beyond the current types. While not yet implemented, future connector types may include:

- **Lend**: For lending and borrowing assets on DeFi lending protocols
- **Stake**: For staking assets in various protocols
- **Bridge**: For transferring assets between different blockchain networks

These additional connector types are still in the planning phase and will be developed as the Hummingbot ecosystem continues to evolve.

### Gateway Legacy

Gateway Legacy (v2.2.0) supported the following trading types:

- **AMM**: Endpoints for fetching quote prices and executing swaps on DEXs and DEX aggregators
- **AMM_LP**: Endpoints for adding and removing liquidity on Uniswap V3 pools

Each connector is a folder in [`src/connectors`](https://github.com/hummingbot/gateway/tree/v2.2.0/src/connectors) folder or [`src/chains`](https://github.com/hummingbot/gateway/tree/v2.2.0/src/chains) in the Gateway v2.2.0 branch.

To enable users to use legacy connectors during the refactor, the Hummingbot `fix/gateway-2.2` branch is compatible with Gateway v2.2.0, the last version that contains all the legacy connectors. This branch will be kept updated with the Hummingbot `development` branch while the refactor is in progress.

Legacy Gateway supports a wide range of blockchain networks including Ethereum, Algorand, Avalanche, BNB Chain, Cosmos, Cronos, Ethereum Classic, Osmosis, Polygon, and Solana. Each chain connector integrates a Layer 1 blockchain and their networks into Gateway, enabling wallet access, node RPC interactions, and other support needed by DEXs.

Follow the links below to install, configure and use Gateway Legacy:

- [Installation](legacy/installation.md): How to install Gateway from source or via Docker, including detailed instructions for Docker Compose setup
- [Testing with Postman](legacy/testing/index.md): How to test Gateway API endpoints on a standalone basis using Postman and other tools
- [Supported Chains](legacy/chains/index.md): Overview of all blockchain networks supported by Gateway Legacy
- [Using Gateway with Hummingbot](legacy/setup.md): How to send commands to Gateway from Hummingbot
- [Working with Tokens](legacy/tokens/index.md): Adding tokens, approving tokens and getting testnet tokens
- [Running DEX Bots](legacy/running-dex-bots.md): How to run the `amm-arb` strategy and scripts that use Gateway DEX connectors
- [Adding Connectors](legacy/adding-dex-connectors.md): Developer guide for contributing new DEX connectors into the open source Gateway codebase

## History

See the following blog posts from Hummingbot co-founder and original CTO Martin Kou for more information about Gateway's history, background, and intended developer experience:

* [Hummingbot Gateway V2 Architecture - Part 1](/blog/hummingbot-gateway-architecture---part-1/)
* [Hummingbot Gateway V2 Architecture - Part 2](/blog/hummingbot-gateway-architecture---part-2/)

