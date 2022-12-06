## 📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/avalanche)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/avalanche.yml)

## ℹ️ Chain Info

* Website: <https://www.avax.network/>
* CoinMarketCap: <https://coinmarketcap.com/currencies/avalanche/>
* CoinGecko: <https://www.coingecko.com/en/coins/avalanche>

## 🕸️ Supported Networks

### `avalanche` (mainnet)

**Default configuration parameters**

* `chainID`: 43114
* `nodeURL`: <https://rpc.ankr.com/avalanche>
* `tokenListType`: URL
* `tokenListSource`: <https://raw.githubusercontent.com/pangolindex/tokenlists/main/pangolin.tokenlist.json>
* `nativeCurrencySymbol`: AVAX
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:

```
gateway config avalanche.networks.avalanche.<parameter>
```

### `fuji` (testnet)

**Default configuration parameters**

* `chainID`: 43113
* `nodeURL`: <https://rpc.ankr.com/avalanche_fuji>
* `tokenListType`: FILE
* `tokenListSource`: [Fuji token list](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/chains/avalanche/avalanche_tokens_fuji.json)
* `nativeCurrencySymbol`: AVAX
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:

```
gateway config avalanche.networks.fuji.<parameter>
```
