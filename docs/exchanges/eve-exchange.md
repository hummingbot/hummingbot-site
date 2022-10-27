---
tags:
- spot exchange connector
---

# `eve exchange`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/eve)

## ℹ️ Exchange Info

**Eve Exchange**
[Website](https://eve.exchange/) | [CoinMarketCap] | [CoinGecko]

* API docs:
* Transaction fees:
* Minimum order size:
* Creating API keys:

## 👷 Maintenance

* Release added: [1.9.0](/release-notes/1.9.0) by CoinAlpha
* Maintainer:

## 🔑 Connection

Run `connect eve` in order to enter your API keys:

```
Enter your EVE API key >>>
Enter your EVE secret key >>>
Enter your EVE user ID >>>
```

If connection is successful:

```
You are now connected to EVE.
```

## 🪙 Fees

Hummingbot assumes 0% maker fees and 0% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/eve/eve_utils.py#L11)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
