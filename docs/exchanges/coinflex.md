---
tags:
- spot exchange connector
---

# `CoinFLEX`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/coinflex)

## ℹ️ Exchange Info

**CoinFLEX** 
[Website](https://coinflex.com/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/coinflex/) | [CoinGecko](https://www.coingecko.com/en/exchanges/coinflex)

* API docs: https://docs.coinflex.com/#change-log
* Transaction fees: https://coinflex.com/fees/
* Minimum order size: 
* Creating API keys: https://coinflex.com/api/
* Referral link: 

## 👷 Maintenance

* Release added: [1.3.0](/release-notes/1.3.0/) by TheHolyRoger
* Maintainer: TheHolyRoger

## 🔑 Connection

Run `connect coinflex` in order to enter your API keys:
 
```
Enter your CoinFLEX API key >>>
Enter your CoinFLEX secret API key >>>
```

If connection is successful:
```
You are now connected to CoinFLEX.
```

## 🪙 Fees

Hummingbot assumes 0.020% maker fees and 0.070% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/coinflex/coinflex_utils.py#L15)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).