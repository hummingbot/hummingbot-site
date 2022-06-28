This work-in-progress document defines the standardized API endpoints that each Gateway decentralized exchange (DEX) connector should implement. 

Each DEX should implement the **NetworkBase** interface, as well as its chain/network-specific interface:

- **NetworkBase**: General endpoints for all chains
- **EVM**: Endpoints for DEXs on EVM-specific chains (Mainnet, Avalanche, BNB Chain, Polygon, Harmony, etc)
- **Solana**: Endpoints for Solana-based DEXs

In addition, each DEX should implement the **ConnectorBase** interface, as well as the interface(s) for its exchange model:

- **ConnectorBase**: Endpoints for all DEXs
- **AMM**: Endpoints for spot AMM connectors needed to enable swapping assets (example: `uniswap`)
- **AMM (Concentrated Liquidity)**: *Additional endpoints for spot AMM connectors that support concentrated liquidity ranges (example: `uniswap-v3`)
- **Perpetual AMM**: Endpoints for perpetual futures AMMs (example: `perp`)
- **CLOB**: Endpoints for central limit order book (CLOB) DEXs (example: `serum`)
- **Margined CLOB**: Additional endpoints for CLOB DEXs that support margin accounts (example: `mango`)
- **Perpetual CLOB**: Endpoints for perpetual futures CLOB DEXs

!!! note
    Please note the meaning of the following terms used below:

    * `chain` refers to a Layer 1 or Layer 2 blockchain, e.g. `ethereum`, `avalanche`, `arbitrum`, `optimism`
    * `network` refers to a mainnet or testnet network of a particular blockchain, e.g. `mainnet`, `kovan`
    * `address` refers to a wallet address specific to a particular network

!!! tip "TypeScript interface naming conventions"
    TypeScript interfaces for the requests and responses below should be named according to their corresponding URL endpoints. For example, a request and a response interface for `/evm/allowances` should be named `EVMAllowancesRequest` and `EVMAllowancesResponse`.

## Chain Interfaces

### NetworkBase

*General endpoints for all chains*

**GET `/network/status`**

- Description: Get the current status of a chain/network
- Request params: `{chain?, network?}`
- Response: array of `{ chain, network, rpcUrl, currentBlockNumber, currentBlockSeconds(seconds since block) }` for each chain/network combination

**GET `/network/chain_config`**

- Description: Display the configuration options for a chain
- Request params: `{chain}`
- Response: chain config map ([example](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/ethereum.yml))

**GET `/network/tokens`**

- Description: Get token list for a chain/network
- Request: `{chain, network, tokenSymbols?}`
- Response: array of `{ chain, network, symbol, address, decimals }`

**GET `/network/balances`**

- Description: Get balances for an address
- Request: `{chain, network, address, tokenSymbols}`
- Response: `{ nonce }`

**GET `/network/poll`**

- Description: Fetch the current status for a transaction hash
- Request: `{chain, network, txHash}`
- Response: `{ currentBlock, txHash, txStatus, txBlock, txData, txReceipt }`

### EVM

*Endpoints for DEXs on EVM-specific chains (Mainnet, Avalanche, BNB Chain, Polygon, Harmony, etc)*

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

### Solana

*Endpoints for Solana-based DEXs*

**POST `/solana/create-token`**

- Description: Approve a token to be spent by a spender
- Request: `{ chain, network, address, tokenSymbol, nonce? }`
- Response: `{ txHash }`

## DEX Interfaces

### ConnectorBase

*Endpoints for all DEXs*

**GET `/connector/config`**
- Description: Display the configuration options for a specific connector
- Request: `{connector}`
- Response: connector config map ([example](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/uniswap.yml))

### AMM

*Endpoints for spot AMM connectors needed to enable swapping assets*

**GET `/amm/price`**

- Description: Get price for a swap
- Request: `{chain, network, connector, quote, base, amount, side}`
- Response: `{ base, quote, amount, expectedAmount, price, gasPrice, gasLimit, gasCost }`

**POST `/amm/trade`**

- Description: Execute a swap
- Request: `{ chain, network, connector, address, quote, base, amount, side, limitPrice?, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ base, quote, price, gasPrice, gasLimit, gasCost, nonce, txHash }`

### Concentrated Liquidity AMM

*Additional endpoints for spot AMM connectors that support concentrated liquidity ranges*

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

### Perpetual AMM

*Endpoints for perpetual futures AMMs*

**GET `/perpAMM/price`**

- Description: Get price for opening a position
- Request: `{chain, network, connector, quote, base, amount, side}`
- Response: `{ quote, base, side, amount, price }`

**GET `/perpAMM/position`**

- Description: Get info on a position
- Request: `{chain, network, connector, wallet_address, quote, base}`
- Response: `{ position }`

**GET `/perpAMM/margin`**

- Description: Get your current margin status
- Request: `{chain, network, connector, wallet_address}`
- Response: `{ margin }`

**GET `/perpAMM/funding`**

- Description: Get the current funding rate
- Request: `{chain, network, connector, wallet_address}`
- Response `{ funding }`

**POST `/perpAMM/open`**

- Description: Open a position
- Request: `{ chain, network, connector, address, quote, base, amount, side, margin, leverage, limitPrice?, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ position, price, gasPrice, gasLimit, gasCost, nonce, txHash }`

**POST `/perpAMM/close`**

- Description: Close a position
- Request: `{ chain, network, connector, address, quote, base, limitPrice?, nonce?, maxFeePerGas?, maxPriorityFeePerGas? }`
- Response: `{ gasPrice, gasLimit, gasCost, nonce, txHash }`

### CLOB

*Endpoints for central limit order book (CLOB) DEXs*

In progress - see https://github.com/yourtrading-ai/hummingbot/blob/feat/gateway-v2_clob-serum/gateway/src/clob/clob.routes.ts.

### Margined CLOB

*Additional endpoints for CLOB DEXs that support margin accounts*

Coming soon.

### Perpetual CLOB

*Endpoints for perpetual futures CLOB DEXs*

Coming soon.

