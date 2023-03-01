# `quickswap`

## 📁 Connector Info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/quickswap](https://github.com/hummingbot/gateway/tree/main/src/connectors/quickswap)
* Configs: [/gateway/src/templates/quickswap.yml](https://github.com/hummingbot/gateway/blob/development/src/templates/quickswap.yml)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://quickswap.exchange/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/quickswap/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/quickswap>
* API docs: <https://docs.quickswap.exchange/reference/>
* Fees:  <https://docs.quickswap.exchange>

## 🕸️ Supported Chains and Networks

* `polygon`: `mainnet`, `mumbai`

## 🔑 Setup

Run `gateway connect quickswap` in order to connect your wallet:

```
Which chain do you want quickswap to connect to? (polygon) >>>
Which network do you want quickswap to connect to? (mainnet, mumbai) >>>
Enter your polygon-mainnet private key >>>>
```

If connection is successful:

```
The quickswap connector now uses wallet [pubKey] on polygon-mainnet
```
