This work-in-progress document defines the standardized API endpoints that each Gateway decentralized exchange (DEX) connector should implement. 

Each DEX should implement the **NetworkBase** interface, as well as its chain/network-specific interface:

- **NetworkBase**: General endpoints for all chains
- **EVM**: Endpoints for DEXs on EVM-specific chains (Mainnet, Avalanche, BNB Chain, Polygon, Harmony, etc)

In addition, each DEX should implement the **ConnectorBase** interface, as well as the interface(s) for its exchange types:

- **ConnectorBase**: Endpoints for all DEXs
- **AMM**: Endpoints for AMM connectors needed to enable swapping assets
- **AMM-RANGE**: *Additional endpoints for spot AMM connectors that support concentrated liquidity ranges (example: `uniswap`)
- **PERP AMM**: Endpoints for perpetual futures AMMs (example: `perp`)

!!! tip "TypeScript interface naming conventions"
    TypeScript interfaces for the requests and responses below should be named according to their corresponding URL endpoints. For example, a request and a response interface for `/evm/allowances` should be named `EVMAllowancesRequest` and `EVMAllowancesResponse`.

## Network

General endpoints for all chains.

**GET `/network/status`**

- Description: Get the current status of a chain/network
- Request params: `{chain?, network?}`
- Response: array of `{ chain, network, rpcUrl, currentBlockNumber, currentBlockSeconds(seconds since block) }` for each chain/network combination

**GET `/network/chain_config`**

- Description: Display the configuration options for a chain
- Request params: `{chain}`
- Response: chain config map ([example](https://github.com/hummingbot/gateway/blob/main/src/templates/ethereum.yml))

**GET `/network/tokens`**

- Description: Get token list for a chain/network
- Request: `{chain, network, tokenSymbols?}`
- Response: array of `{ chain, network, symbol, address, decimals }`

**GET `/network/balances`**

- Description: Get balances for an address
- Request: `{chain, network, address, tokenSymbols}`
- Response: `{ balances }`

**GET `/network/poll`**

- Description: Fetch the current status for a transaction hash
- Request: `{chain, network, txHash}`
- Response: `{ currentBlock, txHash, txStatus, txBlock, txData, txReceipt }`

## EVM

Endpoints interacting with chains that use the Ethereum Virtual Machine.

**GET `/evm/allowances`**

- Description: Get allowances for a spender
- Request: `{chain, network, address, spender, tokenSymbols}`
- Response: `{ spender, approvals }`

**GET `/evm/nonce`**

- Description: Get nonce for an address
- Request: `{chain, network, address}`
- Response: `{ nonce }`

**POST `/evm/cancel`**

- Description: Cancel a transaction
- Request: `{ chain, network, address, nonce? }`
- Response: `{ txHash }`

**POST `/evm/approve`**

- Description: Approve a token to be spent by a spender
- Request: `{ chain, network, address, spender, token, amount?, nonce? }`
- Response: `{ spender, tokenAddress, amount, nonce, txHash }`

## SPOT AMM

Endpoints for spot AMM connectors needed to enable swapping assets.

**GET `/amm/price`**

- Description: Get price for a swap
- Request: `{chain, network, connector, quote, base, amount, side}`
- Response: `{ base, quote, amount, expectedAmount, price, gasPrice, gasLimit, gasCost }`

**POST `/amm/trade`**

- Description: Execute a swap
- Request: `{ chain, network, connector, address, quote, base, amount, side, limitPrice?, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ base, quote, price, gasPrice, gasLimit, gasCost, nonce, txHash }`

## SPOT AMM-RANGE

*Additional endpoints for AMM-RANGE connectors that support concentrated liquidity ranges*

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

## PERP AMM

Endpoints for perpetual futures AMM DEXs.

**GET `/perp/position`**

- Description: Get info on a position
- Request: `{chain, network, connector, wallet_address, quote, base}`
- Response: `{ position }`

**POST `/perp/open`**

- Description: Open a position
- Request: `{ chain, network, connector, address, quote, base, amount, side, margin, leverage, limitPrice?, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ position, price, gasPrice, gasLimit, gasCost, nonce, txHash }`

**POST `/perp/close`**

- Description: Close a position
- Request: `{ chain, network, connector, address, quote, base, limitPrice?, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ gasPrice, gasLimit, gasCost, nonce, txHash }`

**GET `/perp/market-prices`**

**GET `/perp/market-status`**

**GET `/perp/pairs`**

**GET `/perp/balance`**

**POST `/perp/estimateGas`**
