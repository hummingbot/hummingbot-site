Follow the links below to install, configure and use Gateway:

- [Installation & Setup](../installation.md): How to install and setup Gateway
- [Configuration](../configuration.md): How to configure Gateway
- [Schemas](../schemas.md): API specifications for each connector type

## Motivation

The Gateway refactor approved in [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c) modernizes the codebase and makes it more flexible for future development, while adding important new components that enable standalone use:

* **Chain-Agnostic Design**: Removes dependency on specific chain architectures in the Hummingbot client. The client now supports specific connector types, and any connector that implements the appropriate schema should be compatible with Hummingbot.
* **Enhanced Flexibility**: The new architecture is more flexible and should support a wider range of DEX protocols, allowing for extension into future connector types such as lending and bridging.
* **Modernized Codebase**: The new version reduces code bloat and image size by upgrading to Fastify and `pnpm`
* **Developer Mode**: The new `--dev` flag allows developers to inspect/execute endpoints using the auto-generated Swagger interactive API
* **Command-Line Interface**: Gateway introduced a dedicated `gateway` command and CLI for standalone use.

## Connector Structure

Each exchange is a folder in the [`src/connectors`](https://github.com/hummingbot/gateway/tree/core-2.5/src/connectors) folder. 

The main exchange folder may contain sub-folders for connectors that fit different schemas, such as `/raydium/amm-routes` for the `raydium/amm` connector and `/raydium/clmm-routes` for the `raydium/clmm` connector.

A route should be self-contained in its own file and contain both the route handler and other logic required, but it should import and utilize the types from the appropriate schema below.

## Connector Schemas

Starting in release v2.5+, Gateway implements the following schemas, which define the API request and response structure for each type of trading:

Each schema defines a standardized interface that connectors must implement to be compatible with Hummingbot. This ensures consistency across different DEXs and makes it easier to integrate new protocols into the ecosystem.

- **Swap**: Endpoints for quoting and executing swaps on DEXs and DEX aggregators, like [Jupiter](https://jup.ag/).
- **AMM**: Endpoints for managing liquidity positions on AMM (Automated Market Maker) DEXs, like [Raydium Standard](https://raydium.io/liquidity-pools/?tab=standard) and Uniswap V2 pools.
- **CLMM**: Endpoints for managing liquidity positions on CLMM (Concentrated Liquidity Market Maker) DEXs, like [Raydium Concentrated](https://raydium.io/liquidity-pools/?tab=concentrated) and Uniswap V3/V4 pools.

For detailed information about each connector schema, including the specific endpoints, request types, and response types, please refer to the [Schemas](../schemas.md) documentation.

