# `loopring`

## 📁 Connector Info

* Type: SPOT CLOB DEX
* Folder: [/hummingbot/connector/exchange/loopring](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/loopring)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://loopring.io/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/loopring-exchange/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/loopring>
* API docs: <https://docs.loopring.io/>
* Transaction fees: <https://blogs.loopring.org/loopring-exchange-faq/>

## 🔑 Connection

Run, `connect loopring` in Hummingbot in order to enter your API keys:

```
Enter your Loopring account id >>>
Enter the Loopring exchange address >>>
Enter your Loopring private key >>>
Enter your loopring api key >>>
```

If connection is successful:

```
You are now connected to loopring.
```

## 🪙 Fees

Hummingbot assumes 0% maker fees and 0.2% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/loopring/loopring_utils.py#L11)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
