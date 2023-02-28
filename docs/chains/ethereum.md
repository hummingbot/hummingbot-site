This page contains notes about connecting Gateway to the Ethereum blockchain and other Ethereum Virtual Machine (EVM)-based blockchains.

All chains on this page use the EVM class defined below.

📁 [EVM class folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/evm) 

## Ethereum

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/ethereum)

📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/ethereum.yml)

Below are the Ethereum networks that Gateway currently supports.

### `mainnet` (mainnet)

**Default configuration parameters**

* `chainID`: 1
* `nodeURL`: https://rpc.ankr.com/eth
* `tokenListType`: `FILE`
* `tokenListSource`: `src/chains/ethereum/erc20_tokens_mainnet.json`
* `nativeCurrencySymbol`: ETH
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config ethereum.networks.mainnet.<parameter>
```

### `ropsten` (testnet)

**Default configuration parameters**

* `chainID`: 3
* `nodeURL`: https://rpc.ankr.com/eth_ropsten
* `tokenListType`: `FILE`
* `tokenListSource`: [Ropsten token list](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/chains/ethereum/erc20_tokens_ropsten.json)
* `nativeCurrencySymbol`: ETH
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config ethereum.networks.ropsten.<parameter>
```

### `kovan` (testnet)

**Default configuration parameters**

* `chainID`: 42
* `nodeURL`: https://kovan.infura.io/v3/ (adjust `nodeURL` to add the RPC URL that includes your Infura API key to use it)
* `tokenListType`: FILE
* `tokenListSource`: [Kovan token list](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/chains/ethereum/erc20_tokens_kovan.json)
* `nativeCurrencySymbol`: ETH
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config ethereum.networks.kovan.<parameter>
```

### `arbitrum_one` (mainnet)

**Default configuration parameters**

* `chainID`: 42161
* `nodeURL`: https://rpc.ankr.com/arbitrum
* `tokenListType`: `FILE`
* `tokenListSource`: `src/chains/ethereum/arbitrum_one_tokens.json`
* `nativeCurrencySymbol`: ETH
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config ethereum.networks.arbitrum_one.<parameter>
```

### `arbitrum_rinkeby` (testnet)

**Default configuration parameters**

* `chainID`: 421611
* `nodeURL`: https://arbitrum-rinkeby.infura.io/v3/ (adjust `nodeURL` to add the RPC URL that includes your Infura API key to use it)
* `tokenListType`: `FILE`
* `tokenListSource`: `src/chains/ethereum/arbitrum_rinkeby_tokens.json`
* `nativeCurrencySymbol`: ETH
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config ethereum.networks.arbitrum_rinkeby.<parameter>
```

### `optimism` (mainnet)

**Default configuration parameters**

* `chainID`: 10
* `nodeURL`: https://rpc.ankr.com/optimism
* `tokenListType`: `FILE`
* `tokenListSource`: `src/chains/ethereum/optimism_tokens.json`
* `nativeCurrencySymbol`: ETH
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config ethereum.networks.optimism.<parameter>
```
