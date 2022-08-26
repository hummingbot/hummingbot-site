This page contains notes about connecting Gateway to the Ethereum blockchain and other Ethereum Virtual Machine (EVM)-based blockchains.

All chains on this page use the EVM class defined below.

📁 [EVM class folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/evm) 

## Ethereum

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/ethereum)

📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/ethereum.yml)

For Ethereum, we recommend using Infura for the RPC node provider. Here's a [guide](https://blog.infura.io/post/getting-started-with-infura-28e41844cc89) on using Infura.

If you prefer to use a different provider, here are some lists of other providers. Many of these providers support other EVM-compatible blockchains as well.

* https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/#popular-node-services
* https://github.com/arddluma/awesome-list-rpc-nodes-providers#ethereum
* https://ethereumnodes.com
* https://rpc.info/

Below are the Ethereum networks that Gateway currently supports.

### `mainnet` (mainnet)

**Default configuration parameters**

* `chainID`: 1
* `nodeURL`: https://rpc.ankr.com/eth
* `tokenListType`: URL
* `tokenListSource`: https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link 
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
* `tokenListType`: FILE
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
* `tokenListType`: URL
* `tokenListSource`: https://bridge.arbitrum.io/token-list-42161.json
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
* `tokenListType`: URL
* `tokenListSource`: https://bridge.arbitrum.io/token-list-421611.json
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
* `tokenListType`: URL
* `tokenListSource`: https://raw.githubusercontent.com/ethereum-optimism/ethereum-optimism.github.io/master/optimism.tokenlist.json
* `nativeCurrencySymbol`: ETH
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config ethereum.networks.optimism.<parameter>
```

## Avalanche  

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/avalanche)

📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/avalanche.yml)

For more information on the public Avalanche RPC endpoints, visit https://docs.avax.network/apis/avalanchego/public-api-server.

Below are the Avalanche networks that Gateway currently supports.

### `avalanche` (mainnet)

**Default configuration parameters**

* `chainID`: 43114
* `nodeURL`: https://rpc.ankr.com/avalanche
* `tokenListType`: URL
* `tokenListSource`: https://raw.githubusercontent.com/pangolindex/tokenlists/main/pangolin.tokenlist.json
* `nativeCurrencySymbol`: AVAX
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config avalanche.networks.avalanche.<parameter>
```

### `fuji` (testnet)

**Default configuration parameters**

* `chainID`: 43113
* `nodeURL`: https://rpc.ankr.com/avalanche_fuji
* `tokenListType`: FILE
* `tokenListSource`: [Fuji token list](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/chains/avalanche/avalanche_tokens_fuji.json)
* `nativeCurrencySymbol`: AVAX
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config avalanche.networks.fuji.<parameter>
```


## Polygon

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/polygon)

📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/polygon.yml)

For more information on the public Polygon RPC endpoints, visit https://docs.polygon.technology/docs/develop/network-details/network/.

Below are the Polygon networks that Gateway currently supports.

### `mainnet` (mainnet)

**Default configuration parameters**

* `chainID`: 137
* `nodeURL`: https://rpc.ankr.com/polygon
* `tokenListType`: URL
* `tokenListSource`: https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.polygon.tokenlist.json
* `nativeCurrencySymbol`: MATIC
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config polygon.networks.mainnet.<parameter>
```

### `mumbai` (testnet)

**Default configuration parameters**

* `chainID`: 80001
* `nodeURL`: https://rpc.ankr.com/polygon_mumbai
* `tokenListType`: FILE
* `tokenListSource`: [Mumbai token list](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/chains/polygon/polygon_tokens_mumbai.json)
* `nativeCurrencySymbol`: MATIC
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config polygon.networks.mumbai.<parameter>
```

## Harmony

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/harmony)

Below are the Harmony networks that Gateway currently supports.

### `mainnet` (mainnet)

**Default configuration parameters**

* `chainID`: 1666600000
* `nodeURL`: https://rpc.ankr.com/harmony
* `tokenListType`: FILE
* `tokenListSource`: 'src/chains/harmony/harmony_tokens_sushiswap.json'
* `nativeCurrencySymbol`: ONE
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config harmony.networks.mainnet.<parameter>
```

### `testnet` (testnet)

**Default configuration parameters**

* `chainID`: 1666700000
* `nodeURL`: https://api.s0.b.hmny.io
* `tokenListType`: FILE
* `tokenListSource`: 'src/chains/harmony/harmony_tokens_sushiswap_testnet.json'
* `nativeCurrencySymbol`: ONE
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config harmony.networks.testnet.<parameter>
```
