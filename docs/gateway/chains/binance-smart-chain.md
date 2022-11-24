This page contains notes about connecting Gateway to the Binance Smart Chain.

## Binance Smart Chain

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/binance-smart-chain)

📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/binance-smart-chain.yml)

Below are the Binance Smart Chain networks that Gateway currently supports.

### `mainnet` (bsc mainnet)

**Default configuration parameters**

* `chainID`: 56
* `nodeURL`: https://bsc-dataseed1.binance.org/
* `tokenListType`: URL
* `tokenListSource`: https://gateway.pinata.cloud/ipfs/QmdKy1K5TMzSHncLzUXUJdvKi1tHRmJocDRfmCXxW5mshS
* `nativeCurrencySymbol`: BNB
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config binance-smart-chain.networks.mainnet.<parameter>
```

### `testnet` (bsc testnet)

**Default configuration parameters**

* `chainID`: 97
* `nodeURL`: https://data-seed-prebsc-1-s1.binance.org:8545/
* `tokenListType`: FILE
* `tokenListSource`: src/chains/binance-smart-chain/bep20_tokens_testnet.json
* `nativeCurrencySymbol`: BNB
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:
```
gateway config binance-smart-chain.networks.testnet.<parameter>
```