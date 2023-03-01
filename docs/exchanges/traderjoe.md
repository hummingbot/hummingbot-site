# `traderjoe`

## 📁 Connector Info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/traderjoe](https://github.com/hummingbot/gateway/tree/main/src/connectors/traderjoe)
* Configs: [/gateway/src/templates/traderjoe.yml](https://github.com/hummingbot/gateway/tree/main/src/templates/traderjoe.yml)
* Maintainer: [CoinAlpha](https://coinalpha.com)

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://traderjoexyz.com/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/traderjoe/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/traderjoe>
* API docs: <https://docs.traderjoexyz.com/>
* SDK: <https://github.com/traderjoe-xyz/joe-sdk>

## 🕸️ Supported Chains and Networks

* `avalanche`: `avalanche`, `fuji`

## 🔑 Connection

Run `gateway connect traderjoe` in order to connect your wallet:

```
Which chain do you want traderjoe to connect to? (avalanche) >>>
Which network do you want traderjoe to connect to? (avalanche, fuji) >>>
Enter your avalanche-avalanche private key >>>>
```

If connection is successful:

```
The traderjoe connector now uses wallet [pubKey] on avalanche-avalanche
```