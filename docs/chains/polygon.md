## 📁 [Chain folder](https://github.com/hummingbot/gateway/tree/main/src/chains/polygon)

## 📁 [Config template](https://github.com/hummingbot/gateway/tree/main/src/templates/polygon.yml)

## ℹ️ Chain Info

* Website: <https://polygon.technology/>
* CoinMarketCap: <https://coinmarketcap.com/currencies/polygon/>
* CoinGecko: <https://www.coingecko.com/en/coins/polygon>

For more information on the public Polygon RPC endpoints, visit <https://docs.polygon.technology/docs/develop/network-details/network/>.

## 🕸️ Supported Networks

Below are the Polygon networks that Gateway currently supports.

### `mainnet` (Polygon mainnet)

**Default configuration parameters**

* `chainID`: 137
* `nodeURL`: <https://rpc.ankr.com/polygon>
* `tokenListType`: `FILE`
* `tokenListSource`: `src/chains/polygon/polygon_tokens_mainnet.json`
* `nativeCurrencySymbol`: MATIC
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:

```
gateway config polygon.networks.mainnet.<parameter>
```

### `mumbai` (testnet)

**Default configuration parameters**

* `chainID`: 80001
* `nodeURL`: <https://rpc.ankr.com/polygon_mumbai>
* `tokenListType`: `FILE`
* `tokenListSource`: [Mumbai token list](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/chains/polygon/polygon_tokens_mumbai.json)
* `nativeCurrencySymbol`: MATIC
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:

```
gateway config polygon.networks.mumbai.<parameter>
```
