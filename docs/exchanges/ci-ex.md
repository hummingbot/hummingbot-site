---
tags:
- spot exchange connector
---

# `ciex`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/ciex)

## ℹ️ Exchange Info

**Bittrex** 
[Website](https://ci-ex.com/en_US/)) | [CoinMarketCap] | [CoinGecko]

* API docs: 
* Transaction fees: 
* Minimum order size: 
* Creating API keys: 

## 👷 Maintenance

* Release added: [1.12.0](/release-notes/1.12.0/) by CoinAlpha
* Maintainer: [CoinAlpha](https://coinalpha.com)

## 🔑 Connection

Run `connect ciex` in order to enter your API keys:
 
```
Enter your CI-EX API key >>>
Enter your CI-EX secret key >>>
```

If connection is successful:
```
You are now connected to ciex.
```

## 🪙 Fees

Hummingbot assumes 0.75% maker fees and 0.75% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/bittrex/bittrex_utils.py#L9)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).