!!! note
    This chain has been upgraded to the **Gateway New (v2.5+)** architecture. For installation instructions, refer to the [Installation Guide](../installation.md).

## ℹ️ Chain Info

* **Website**: <https://ethereum.org/>
* **Block Explorer**: <https://etherscan.io/>
* **CoinMarketCap**: <https://coinmarketcap.com/currencies/ethereum/>
* **CoinGecko**: <https://www.coingecko.com/en/coins/ethereum>
* **DefiLlama**: <https://defillama.com/chain/Ethereum>

## ⚙️ Chain Configuration

!!! tip
    In the new Gateway architecture, the Ethereum chain integration supports any Ethereum Virtual Machine (EVM)-compatible network, including both Layer 1 and Layer 2 blockchains. 

* **Connector Folder**: [/gateway/src/chains/ethereum](https://github.com/hummingbot/gateway/tree/development/src/chains/ethereum)
* **Config Schema**: [/gateway/src/services/schemas/raydium-schema.json](https://github.com/hummingbot/gateway/tree/development/src/templates/raydium.yml)
* **Configs**: [/gateway/src/templates/ethereum.yml](https://github.com/hummingbot/gateway/tree/development/src/templates/ethereum.yml)

Upon Gateway setup, a default `ethereum.yml` configuration file is created in your `conf` folder based on the template below:

```yaml
networks:
  mainnet:
    chainID: 1
    nodeURL: https://rpc.ankr.com/eth
    tokenListType: FILE
    nativeCurrencySymbol: ETH
    tokenListSource: /home/gateway/conf/lists/mainnet.json
    gasPriceRefreshInterval: 60
  arbitrum:
    chainID: 42161
    nodeURL: https://rpc.ankr.com/arbitrum
    tokenListType: FILE
    tokenListSource: /home/gateway/conf/lists/arbitrum.json
    nativeCurrencySymbol: ETH
    gasPriceRefreshInterval: 60
  optimism:
    chainID: 10
    nodeURL: https://rpc.ankr.com/optimism
    tokenListType: FILE
    tokenListSource: /home/gateway/conf/lists/optimism.json
    nativeCurrencySymbol: OETH
    gasPriceRefreshInterval: 60
  base:
    chainID: 8453
    nodeURL: https://mainnet.base.org
    tokenListType: FILE
    tokenListSource: /home/gateway/conf/lists/base.json
    nativeCurrencySymbol: ETH
    gasPriceRefreshInterval: 60
  sepolia:
    chainID: 11155111
    nodeURL: https://rpc.ankr.com/eth_sepolia 
    tokenListType: FILE
    tokenListSource: /home/gateway/conf/lists/sepolia.json
    nativeCurrencySymbol: ETH
    gasPriceRefreshInterval: 60
  bsc:
    chainID: 56
    nodeURL: https://binance.llamarpc.com
    tokenListType: FILE
    tokenListSource: /home/gateway/conf/lists/bsc.json
    nativeCurrencySymbol: BNB
    gasPriceRefreshInterval: 60
  avalanche:
    chainID: 43114
    nodeURL: https://rpc.ankr.com/avalanche
    tokenListType: FILE
    tokenListSource: conf/lists/avalanche.json
    nativeCurrencySymbol: AVAX
    gasPriceRefreshInterval: 60
  celo:
    chainID: 42220
    nodeURL: https://rpc.ankr.com/celo
    tokenListType: FILE
    tokenListSource: /home/gateway/conf/lists/celo.json
    nativeCurrencySymbol: CELO
    gasPriceRefreshInterval: 60
  polygon:
    chainID: 137
    nodeURL: https://rpc.ankr.com/polygon
    tokenListType: FILE
    tokenListSource: conf/lists/polygon.json
    nativeCurrencySymbol: POL
    gasPriceRefreshInterval: 60

# if you use the gas assumptions below, your wallet needs >0.1 ETH balance for gas
gasLimitTransaction: 3000000
manualGasPrice: 33
```

### Networks

Each network defines its own configuration for Node RPC endpoint, chain ID, token list source, and native currency symbol.

- `nodeURL`: The RPC endpoint for the network
- `chainId`: The unique identifier for the network
- `tokenListType`: How token information is sourced (FILE or URL)
- `tokenListSource`: Location of the token list file or URL
- `nativeCurrencySymbol`: The native currency symbol

### Token Lists

Token lists provide essential mapping between token symbols and their on-chain address and decimals. 

You can customize the default token list for each network by editing the specified file located in [`conf/lists/`](https://github.com/hummingbot/gateway/blob/main/src/templates/lists/).

### Gas Settings

- `gasLimitTransaction`: Sets the maximum amount of gas units that can be used for a transaction (3,000,000 in this example). This is the upper limit of computational work your transaction can use.

- `manualGasPrice`: Defines a fixed gas price in Gwei (33 Gwei in this example) to use for transactions instead of dynamically estimating it from the network.

!!! warning "Gas Balance Requirements"
    With these default gas settings (3,000,000 gas limit at 33 Gwei), your wallet would need more than 0.1 ETH (or equivalent native token) to cover potential gas costs for transactions. Ensure your wallet has sufficient balance before executing transactions.

## Custom Endpoints

### Allowances
```http
POST /ethereum/allowances
```
Query the current token allowance for a spender contract. This endpoint can also be accessed via the `gateway allowances` command.

### Approvals
```http
POST /ethereum/approve
```
Authorize a spender contract to use a specified amount of tokens. Required for executing trades and other token operations. Accessible via the `gateway approve-token` command.

EVM-specific endpoints for managing transaction nonces, particularly useful for handling stuck transactions:

### Get Current Nonce
```http
POST /ethereum/nonce
```
Retrieve the current nonce for a specified address.

### Get Next Nonce
```http
POST /ethereum/nextNonce
```
Obtain the next available nonce for an address to prevent transaction conflicts.

### Cancel Transaction
```http
POST /ethereum/cancel
```
Cancel a pending Ethereum transaction by submitting a new transaction with the same nonce and higher gas price.
