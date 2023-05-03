# `bybit`

## 📁 Connector Info

* Type: SPOT CLOB CEX
* Folder: [/hummingbot/connector/exchange/bybit](https://github.com/hummingbot/hummingbot/tree/development/hummingbot/connector/exchange/bybit)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://www.bybit.com/en-US/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/bybit/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/bybit>
* API docs: <https://bybit-exchange.github.io/docs/v5/intro>
* Transaction fees: <https://help.bybit.com/hc/en-us/articles/360039261154-Taker-s-Fee-and-Maker-s-Rebate-Calculation>

## 🔑 Connection

Run `connect bybit` in order to enter your API keys:

```
Enter your Bybit API key >>>
Enter your Bybit secret key >>>
```

If connection is successful:

```
You are now connected to Bybit.
```

## 🪙 Fees

Hummingbot assumes -0.1% maker fees and 0.1% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/connector/exchange/bybit/bybit_utils.py#L10)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
