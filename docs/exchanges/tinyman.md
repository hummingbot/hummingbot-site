# `tinyman`

## 📁 Connector Info


* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/tinyman](https://github.com/hummingbot/gateway/tree/development/src/connectors/tinyman)
* Configs: [/gateway/src/templates/tinyman.yml](https://github.com/hummingbot/gateway/tree/development/src/templates/tinyman.yml)

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://app.tinyman.org/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/tinyman/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/tinyman>
* API docs: <https://docs.tinyman.org/>

## 🕸️ Supported Chains and Networks

* [Algorand](/chains/algorand) : `mainnet`, `testnet`

## 🔑 Connection

Run `gateway connect tinyman` in order to connect your wallet:

```
Which chain do you want tinyman to connect to? (algorand) >>> algorand
Which network do you want tinyman to connect to? (mainnet, testnet) >>> mainnet
Enter your algorand-mainnet private key >>>>
```

If connection is successful:

```
The tinyman connector now uses wallet [pubKey] on algorand-mainnet
```