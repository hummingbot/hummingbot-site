## 📁 [Chain folder](https://github.com/hummingbot/gateway/tree/master/src/chains/cosmos)

## 📁 [Config template](https://github.com/hummingbot/gateway/tree/master/src/templates/cosmos.yml)

## ℹ️ Chain Info

* Website: <https://cosmos.network/>
* CoinMarketCap: <https://coinmarketcap.com/currencies/cosmos/>
* CoinGecko: <https://www.coingecko.com/en/coins/cosmos-hub>

## 🕸️ Supported Networks

Below are the Cosmos networks that Gateway currently supports.

### `mainnet` (bsc mainnet)

**Default configuration parameters**

* `chainID`: 56
* `nodeURL`: <https://cosmos-mainnet-rpc.allthatnode.com:26657>
* `tokenListType`: `URL`
* `tokenListSource`: <https://cosmos-chain-registry-list.vercel.app/list.json>
* `nativeCurrencySymbol`: ATOM
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:

```
gateway config cosmos.networks.mainnet.<parameter>
```

### `testnet`

**Default configuration parameters**

* `chainID`: 97
* `nodeURL`: <https://cosmos-testnet-rpc.allthatnode.com:26657>
* `tokenListType`: `URL`
* `tokenListSource`:  <https://cosmos-chain-registry-list.vercel.app/list.json>
* `nativeCurrencySymbol`: ATOM
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:

```
gateway config cosmos.networks.testnet.<parameter>
```
