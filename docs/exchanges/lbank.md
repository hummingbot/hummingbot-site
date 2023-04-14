# `lbank`

## 📁 Connector Info

* Type: SPOT CLOB DEX
* Folder: [/gateway/src/connectors/lbank](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/lbank)
* Maintainer: 

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://www.lbank.info/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/lbank/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/lbank>
* API docs: <https://www.lbank.info/en-US/docs/index.html#introduction>
* SDK:

## 🔑 Connection

Run `connect lbank` in order to enter your API keys:

```
Enter your LBank API key >>>
Enter your LBank secret key >>>
```

If connection is successful:

```
You are now connected to LBank.
```

## 🪙 Fees

Hummingbot assumes 0.1% maker fees and 0.1% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/lbank/lbank_utils.py)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
