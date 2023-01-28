# `coinbase_pro`

## 📁 Connector Info

* Type: PERP CLOB CEX
* Folder: [/hummingbot/connector/exchange/coinbase_pro](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/coinbase_pro)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://pro.coinbase.com/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/coinbase-exchange/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/coinbase-exchange>
* API docs: <https://docs.pro.coinbase.com/>
* Transaction fees: <https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees>

## 🔑 Connection

Run `connect coinbase_pro` in order to enter your API keys:

```
Enter your Coinbase Pro API key >>>
Enter your Coinbase Pro secret API key >>>
```

If connection is successful:

```
You are now connected to coinbase_pro.
```

## 🪙 Fees

Hummingbot assumes 0.5% maker fees and 0.5% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/coinbase_pro/coinbase_pro_utils.py#L8)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
