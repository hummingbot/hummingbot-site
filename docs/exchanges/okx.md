# `okx`

## 📁 Connector Info

* Type: SPOT CLOB CEX
* Folder: [/hummingbot/connector/exchange/okx](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/okx)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://www.okx.com/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/okx/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/okx>
* API docs: <https://www.okx.com/docs/en/>
* Hummingbot referral link - <https://www.okx.com/join/1931920>

## 🔑 Connection

Run `connect okex` in order to enter your API keys:

```
Enter your OKEx API key >>>
Enter your OKEx secret key >>>
Enter your OKEx passphrase key >>>
```

If connection is successful:

```
You are now connected to okex.
```

## 🪙 Fees

Hummingbot assumes 0.1% maker fees and 0.15% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/okex/okex_utils.py#L12)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
