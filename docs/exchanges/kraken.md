# `kraken`

## 📁 Connector Info

* Type: SPOT CLOB CEX
* Folder: [/hummingbot/connector/exchange/kraken](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/kraken)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://www.kraken.com/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/kraken/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/kraken>
* API docs: <https://docs.kraken.com/rest/>
* Transaction fees: <https://www.kraken.com/features/fee-schedule>

## 🔑 Connection

Run `connect kraken` in order to enter your API keys:

```
Enter your Kraken API key >>>
Enter your Kraken secret key >>>
```

If connection is successful:

```
You are now connected to kraken.
```

## 🪙 Fees

Hummingbot assumes 0.16% maker fees and 0.26% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/kraken/kraken_utils.py#L16)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
