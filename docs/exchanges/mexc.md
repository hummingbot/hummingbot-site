# `mexc`

## 📁 Connector Info

* Type: SPOT CLOB CEX
* Folder: [/hummingbot/connector/exchange/mexc](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/mexc)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://www.mexc.com/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/mxc/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/mexcglobal>
* API docs: <https://mxcdevelop.github.io/APIDoc/>
* Transaction fees: <https://www.mexc.com/fee>

## 🔑 Connection

Run `connect mexc` in order to enter your API keys:

```
Enter your MEXC API key >>>
Enter your MEXC secret API key >>>
```

If connection is successful:

```
You are now connected to MEXC.
```

## 🪙 Fees

Hummingbot assumes 0.2% maker fees and 0.2% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/mexc/mexc_utils.py#L15)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
