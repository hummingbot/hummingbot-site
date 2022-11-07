---
tags:
- spot exchange connector
---

# `BTC Markets`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/btc_markets)

##  ℹ️ Exchange Info

**BTC Markets**
[Website](https://www.btcmarkets.net/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/btc-markets/) | [CoinGecko](https://www.coingecko.com/en/exchanges/btcmarkets)

* API docs: https://docs.btcmarkets.net/v3/
* Transaction fees: https://www.btcmarkets.net/fees
* Minimum order size: https://docs.btcmarkets.net/doc/#tag/Market-Data-APIs/paths/~1v3~1markets/get
* Creating API keys: https://support.btcmarkets.net/hc/en-us/articles/360046326934-How-to-Access-and-Generate-Your-API-Keys-

## 👷 Maintenance

* Release added: [1.10.0](/release-notes/1.10.0) by CoinAlpha
* Maintainer: [vdmerweandre](https://github.com/vdmerweandre)

## 🔑 Connection

Run `connect btc_markets` in order to enter your API keys:

```
Enter your BTC MARKETS API key >>>
Enter your BTC MARKETS secret key >>>
```

If connection is successful:

```
You are now connected to BTC MARKETS.
```

## 🪙 Fees

https://www.btcmarkets.net/fees

| Markets  | Spot Maker | Spot Taker |
| -------- | ---------- | ---------- |
| BTC pairs|  -0.05%    |    0.2%    |
| AUD pairs|   0.85%    |    0.85%   |

Hummingbot assumes 0.85% maker fees and 0.85% taker fees as the default, intitial fees, then it will dynamically update the fees periodically based on trading volume ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/btc_markets/btc_markets_utils.py#L11)).
