## Connector Structure

Each connector is a folder in [`src/connectors`](https://github.com/hummingbot/gateway/tree/v2.2.0/src/connectors) folder or [`src/chains`](https://github.com/hummingbot/gateway/tree/v2.2.0/src/chains) in the Gateway v2.2.0 branch.

To enable users to use legacy connectors during the refactor, the Hummingbot `fix/gateway-2.2` branch is compatible with Gateway v2.2.0, the last version that contains all the legacy connectors. This branch will be kept updated with the Hummingbot `development` branch while the refactor is in progress.

Follow the links below to install, configure and use Gateway Legacy:

- [Installation](legacy/installation.md): How to install Gateway from source or via Docker, including detailed instructions for Docker Compose setup
- [Testing with Postman](legacy/testing/index.md): How to test Gateway API endpoints on a standalone basis using Postman and other tools
- [Using Gateway with Hummingbot](legacy/setup.md): How to send commands to Gateway from Hummingbot
- [Working with Tokens](legacy/tokens/index.md): Adding tokens, approving tokens and getting testnet tokens
- [Running DEX Bots](legacy/running-dex-bots.md): How to run the `amm-arb` strategy and scripts that use Gateway DEX connectors
- [Adding Connectors](legacy/adding-dex-connectors.md): Developer guide for contributing new DEX connectors into the open source Gateway codebase

## Trading Types

Gateway Legacy (v2.2.0) supported the following trading types:

- **AMM**: Endpoints for fetching quote prices and executing swaps on DEXs and DEX aggregators
- **AMM_LP**: Endpoints for adding and removing liquidity on Uniswap V3 pools


