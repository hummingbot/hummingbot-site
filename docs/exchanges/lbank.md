---
tags:
- spot exchange connector
---

# `lbank`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/lbank)

## ℹ️ Exchange Info

**lbank.info** [Website](https://www.lbank.info/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/lbank/) | [CoinGecko](https://www.coingecko.com/en/exchanges/lbank)

* API Docs: https://www.lbank.info/en-US/docs/index.html#introduction
* Transaction fees: https://www.lbank.info/fees.html
* Minimum order size: https://api.lbkex.com/v1/accuracy.do (Check via Postman)
* Creating API keys: https://support.lbank.site/hc/en-gb/articles/360009402813-How-to-create-API-

## 👷 Maintenance

* Release added: [1.10.0](/release-notes/1.10.0/) by CoinAlpha
* Maintainer: 

## 🔑 Connection

Run `connect lbank` in order to enter your API keys:
 
```
Enter your LBank API key >>>
Enter your LBank secret key >>>
```

If connection is successful:
```
You are now connected to LBank.
```

## 🪙 Fees

Hummingbot assumes 0.1% maker fees and 0.1% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/lbank/lbank_utils.py)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).