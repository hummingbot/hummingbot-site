
## 📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/harmony)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/harmony.yml)

## ℹ️ Chain Info

* Website: <https://www.harmony.one/>
* CoinMarketCap: <https://coinmarketcap.com/currencies/one/>
* CoinGecko: <https://www.coingecko.com/en/coins/one>

## 🕸️ Supported Networks

Below are the Harmony networks that Gateway currently supports.

### `mainnet` (Harmony mainnet)

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

### `testnet` (Harmony testnet)

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
