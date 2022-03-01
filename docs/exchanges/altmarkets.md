---
tags:
- spot exchange connector
- ⛏️ Miner exchange
---

# `AltMarkets.io`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/altmarkets)

## ℹ️ Exchange Info

**AltMarkets.io** 
[Website](https://v2.altmarkets.io/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/altmarkets/) | [CoinGecko](https://www.coingecko.com/en/exchanges/altmarkets)

* API docs: https://app.swaggerhub.com/apis-docs/Altmarkets/PublicApi/2.3.12
* Transaction fees: https://v2.altmarkets.io/fees
* Minimum order size: 
* Creating API keys: 
* Referral link: 

## 👷 Maintenance

* Release added: [1.1.0](/release-notes/1.1.0/) by TheHolyRoger
* Maintainer: TheHolyRoger

## 🔑 Connection

Run `connect altmarkets` in order to enter your API keys:
 
```
Enter your AltMarkets API key >>>
Enter your AltMarkets secret API key >>>
```

If connection is successful:
```
You are now connected to altmarkets.
```

## 🪙 Fees

Hummingbot assumes 0.250% maker fees and 0.250% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/altmarkets/altmarkets_utils.py#L15)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).