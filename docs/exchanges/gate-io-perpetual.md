---
tags:
- perp exchange connector
---

# `gate_io perpetual`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/gate_io_perpetual)

## 📝 Signup

* Hummingbot referral link - <https://www.gate.io/signup/5868285>
* Sign up with Gate.io using Hummingbot's referral link for a 10% discount off trading fees!

## ℹ️ Exchange Info

**gate_io**
[Website](https://www.gate.io/en/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/gate-io/) | [CoinGecko](https://www.coingecko.com/en/exchanges/gate-io)

* API docs: <https://www.gate.io/docs/apiv4/en/index.html>
* Transaction fees: <https://www.gate.io/fee>
* Minimum order size: <https://support.gate.io/hc/en-us/articles/360000808414-What-is-minimum-order-size>-
* Creating API keys: <https://support.gate.io/hc/en-us/articles/900000114363-What-are-APIKey-and-APIV4keys-for>-

## 👷 Maintenance

* Release added: [1.10.0](/release-notes/1.10.0/) by [yancong001](https://github.com/yancong001)
* Maintainer: Hummingbot Foundation

## 🔑 Connection

Run `connect gate_io` in order to enter your API keys:

```
Enter your gate_io_perpetual API key >>>
Enter your gate_io_perpetual secret key >>>
Enter your gate_io_perpetual user id >>>
```

If connection is successful:

```
You are now connected to gate_io_perpetual
```

## 🪙 Fees

Hummingbot assumes 0.015% maker fees and 0.05% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/connector/derivative/gate_io_perpetual/gate_io_perpetual_utils.py)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
