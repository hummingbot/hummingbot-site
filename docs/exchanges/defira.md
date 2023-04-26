# `defira`

## 📁 Connector Info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/defira](https://github.com/hummingbot/gateway/tree/main/src/connectors/defira)
* Configs: [/gateway/src/templates/defira.yml](https://github.com/hummingbot/gateway/tree/main/src/templates/defira.yml)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://defira.com>
* CoinMarketCap: <https://coinmarketcap.com/currencies/defira/>
* CoinGecko: <https://www.coingecko.com/en/coins/fira>
* API docs: <https://docs.defira.com/>

## 🕸️ Supported Chains and Networks

* [Harmony](/chains/harmony): `mainnet`, `testnet`

## 🔑 Connection

Run `gateway connect defira` in order to connect your wallet:

```
Which chain do you want defira to connect to? (harmony) >>>
Which network do you want defira to connect to? (mainnet, testnet) >>>
Enter your harmony-mainnet private key >>>>
```

If connection is successful:

```
The defira connector now uses wallet [pubKey] on harmony-mainnet
```