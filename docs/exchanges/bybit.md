---
tags:
- spot exchange connector
---

# `bybit`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/development/hummingbot/connector/exchange/bybit)

## ℹ️ Exchange Info

**Bybit** [Website](https://www.bybit.com/en-US/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/bybit/) | [CoinGecko](https://www.coingecko.com/en/exchanges/bybit)

* API docs: https://bybit-exchange.github.io/docs/inverse/#t-introduction
* Transaction fees: https://help.bybit.com/hc/en-us/articles/360039261154-Taker-s-Fee-and-Maker-s-Rebate-Calculation
* Creating API keys: https://help.bybit.com/hc/en-us/articles/360039749613-How-to-create-a-new-API-key-
* Trading rules: https://www.bybit.com/en-US/contract-rules

## 👷 Maintenance

* Release added: [1.5.0](/release-notes/1.5.0/) by Hummingbot Foundation
* Maintainer:

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