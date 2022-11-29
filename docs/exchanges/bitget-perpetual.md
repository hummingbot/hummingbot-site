---
tags:
- perp exchange connector
---

# `bitget_perpetual`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bitget_perpetual)

## ℹ️ Exchange Info

**Bitget Perpetual** [Website](https://www.bitget.com/en/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/bitget/) | [CoinGecko](https://www.coingecko.com/en/exchanges/bitget)

* API docs: https://bitgetlimited.github.io/apidoc/en/spot/#welcome
* Transaction fees: https://www.bitget.com/academy/en/article-details/Fee-Structure-and-Fee-Calculations-on-Bitget
* Creating API keys: https://bitget.zendesk.com/hc/en-us/articles/360038968251-API-Creation-Guide
* Trading rules: https://www.bitget.com/en/mix/introduction/fundsRate
* Leverage and margin: https://bitget.zendesk.com/hc/en-us/articles/360059291091-Bitget-Coin-%E2%93%82-Futures-Leverage-and-Risk-Management / https://bitget.zendesk.com/hc/en-us/articles/360058884232-Bitget-Coin-%E2%93%82-Futures-Margin

## 👷 Maintenance

* Release added: [1.10.0](/release-notes/1.10.0/) by [CoinAlpha](https://coinalpha.com)
* Maintainer: [CoinAlpha](https://coinalpha.com)

## 🔑 Connection

Run `connect bitget_perpetual` in order to enter your API keys:
 
```
Enter your Bitget Perpetual API key >>>
Enter your Bitget Perpetual secret key >>>
```

If connection is successful:
```
You are now connected to Bitget Perpetual.
```

## 🪙 Fees

Hummingbot assumes 0.2% maker fees and 0.6% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/derivative/bitget_perpetual/bitget_perpetual_utils.py)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).