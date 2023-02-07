# `hitbtc`

## 📁 Connector Info

* Type: SPOT CLOB CEX
* Folder: [/hummingbot/connector/exchange/hitbtc](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/hitbtc)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://hitbtc.com/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/hitbtc/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/hitbtc>
* API docs: <https://api.hitbtc.com/>
* Transaction fees: <https://hitbtc.com/fee-tier>

## 🔑 Connection

Run `connect hitbtc` in order to enter your API keys:

```
Enter your hitbtc API key >>>
Enter your hitbtc secret API key >>>
```

If connection is successful:

```
You are now connected to hitbtc.
```

## 🪙 Fees

Hummingbot assumes 0.1% maker fees and 0.25% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/hitbtc/hitbtc_utils.py#L25)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
