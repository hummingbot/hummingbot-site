This work-in-progress document defines the standardized API endpoints that each Gateway decentralized exchange (DEX) connector should implement. 

Each DEX type (AMM, CLOB, Perpetual AMM, Concentrated Liquidity AMM, etc) has a different API interface that matches a corresponding connector interface in the Hummingbot client. In addition, each DEX’s underlying chain architecture has a chain-specific interface.

!!! note
    Please note the meaning of the following terms used below:

    * `chain` refers to a Layer 1 or Layer 2 blockchain, e.g. `ethereum`, `avalanche`, `arbitrum`, `optimism`
    * `network` refers to a mainnet or testnet network of a particular blockchain, e.g. `mainnet`, `kovan`
    * `address` refers to a wallet address specific to a particular network


## Chain Interfaces

### Network base

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

*Endpoints for EVM-specific chains (Mainnet, Avalanche, BNB Chain, Polygon, Harmony, etc)*

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

### NEAR


## DEX Interfaces

### Connector base

### AMM

### CLOB

### Perpetual AMM

### Concentrated Liquidity AMM


