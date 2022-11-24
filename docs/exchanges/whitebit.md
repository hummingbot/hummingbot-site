---
tags:
- spot exchange connector
---

# `whitebit`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/whitebit)

## ℹ️ Exchange Info

**whitebit.com** [Website](https://whitebit.com/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/whitebit/) | [CoinGecko](https://www.coingecko.com/en/exchanges/whitebit)

* API docs: https://whitebit-exchange.github.io/api-docs/docs/category/public
* Transaction fees: https://whitebit.com/fees
* Minimum order size: Equivalent value of 5.05 USDT
* Creating API keys: https://whitebit-exchange.github.io/api-docs/docs/Private/http-auth#how-to-use

## 👷 Maintenance

* Release added: [1.10.0](/release-notes/1.10.0/) by CoinAlpha
* Maintainer: 

## 🔑 Connection

Run `connect whitebit` in order to enter your API keys:
 
```
Enter your WhiteBit API key >>>
Enter your WhiteBit secret key >>>
```

If connection is successful:
```
You are now connected to WhiteBit.
```

## 🪙 Fees

Hummingbot assumes 0.1% maker fees and 0.1% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/whitebit/whitebit_utils.py)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).