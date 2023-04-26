# `pancakeswap`

## 📁 Connector info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/pancakeswap](https://github.com/hummingbot/gateway/tree/main/src/connectors/pancakeswap)
* Configs: [/gateway/src/templates/pancakeswap.yml](https://github.com/hummingbot/gateway/tree/main/src/templates/pancakeswap.yml)
* Maintainer: Hummingbot Foundation

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: https://pancakeswap.finance/
* CoinMarketCap: https://coinmarketcap.com/currencies/pancakeswap/
* CoinGecko: https://www.coingecko.com/en/exchanges/pancakeswap
* API docs: https://github.com/pancakeswap/pancake-info-api/blob/develop/v2-documentation.md
* SDK: https://github.com/pancakeswap/pancake-frontend/tree/develop/packages/swap-sdk

## 🕸️ Supported Chains and Networks

* [BNB Chain](/chains/bnb-chain): `mainnet`, `testnet`

## 🔑 Connection

Run `gateway connect pancakeswap` in order to connect your wallet:

```
Which chain do you want pancakeswap to connect to? (binance-smart-chain) >>>
Which network do you want pancakeswap to connect to? (mainnet, testnet) >>>
Enter your binance-smart-chain-mainnet private key >>>>
```

If connection is successful:
```
The pancakeswap connector now uses wallet [pubKey] on binance-smart-chain-mainnet
```
