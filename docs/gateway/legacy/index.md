Follow the links below to install, configure and use Gateway Legacy:

- [Installation](legacy/installation.md): How to install Gateway from source or via Docker, including detailed instructions for Docker Compose setup
- [Testing with Postman](legacy/testing/index.md): How to test Gateway API endpoints on a standalone basis using Postman and other tools
- [Using Gateway with Hummingbot](legacy/setup.md): How to send commands to Gateway from Hummingbot
- [Working with Tokens](legacy/tokens/index.md): Adding tokens, approving tokens and getting testnet tokens
- [Running DEX Bots](legacy/running-dex-bots.md): How to run the `amm-arb` strategy and scripts that use Gateway DEX connectors
- [Adding Connectors](legacy/adding-dex-connectors.md): Developer guide for contributing new DEX connectors into the open source Gateway codebase

## Connector Structure

!!! note
    To enable users to use legacy connectors during the refactor, the Hummingbot `fix/gateway-2.2` branch is compatible with Gateway v2.2.0, the last version that contains all the legacy connectors. This branch will be kept updated with the Hummingbot `development` branch while the refactor is in progress.

Each exchange connector is a folder in [`src/connectors`](https://github.com/hummingbot/gateway/tree/v2.2.0/src/connectors) folder, and each chain connector is a folder in [`src/chains`](https://github.com/hummingbot/gateway/tree/v2.2.0/src/chains).

## Connector Types

Gateway Legacy (v2.2.0) supported the following connector types:

### AMM

*Endpoints for fetching quote prices and executing swaps on DEXs and DEX aggregators*

**GET `/amm/price`**

- Description: Get price for a swap
- Request: `{chain, network, connector, quote, base, amount, side}`
- Response: `{ base, quote, amount, expectedAmount, price, gasPrice, gasLimit, gasCost }`

**POST `/amm/trade`**

- Description: Execute a swap
- Request: `{ chain, network, connector, address, quote, base, amount, side, limitPrice?, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ base, quote, price, gasPrice, gasLimit, gasCost, nonce, txHash }`

### AMM_LP

*Additional endpoints for connectors that support concentrated liquidity pools*

**POST `/amm/liquidity/add`**

- Description: add liquidity to a pool
- Request: `{ chain, network, connector, address, token0, token1, amount0, amount1, lowerPrice, upperPrice, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ token0, token1, liquidity, nonce, txHash }`

**POST `/amm/liquidity/remove`**

- Description: Remove liquidity from a pool
- Request: `{ chain, network, connector, address, tokenId, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ nonce, txHash }`

**POST `/amm/liquidity/collect_fees`**

- Description: Remove liquidity from a pool
- Request: `{ chain, network, connector, address, tokenId, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ nonce, txHash }`

**POST `/amm/liquidity/price`**

- Description: Returns the current pool price
- Request: `{ chain, network, connector, address, token0, token1, liquidity, fee, period, interval }`
- Response: `{ token0, token1, fee, period, interval }`

**POST `/amm/liquidity/position`**

- Description: Returns the current pool price
- Request: `{ chain, network, connector, tokenId }`
- Response: `{ tokenId, token0, token1, fee, lowerPrice, upperPrice, amount0, amount1, unclaimedToken0, unclaimedToken1 }`
