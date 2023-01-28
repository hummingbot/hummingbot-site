# `ndax`

## 📁 Connector Info

* Type: SPOT CLOB DEX
* Folder: [/gateway/src/connectors/ndax](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/ndax)
* Maintainer: [CoinAlpha](https://coinalpha.com)

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://ndax.io/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/ndax/>
* CoinGecko:
* API docs: <https://ndaxlo.github.io/API/#introduction>
* SDK:

## 🔑 Connection

Run `connect ndax` in order to enter your API keys:

```
Enter your NDAX user ID (uid) >>>
Enter the name of the account you want to use >>>
Enter your NDAX API key >>>
Enter your NDAX secret key >>>
```

If connection is successful:

```
You are now connected to ndax.
```

## 🪙 Fees

Hummingbot assumes 0.2% maker fees and 0.2% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/ndax/ndax_utils.py#L14)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
