---
tags:
- spot exchange connector
---

# `coinflex`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/coinflex)

## ℹ️ Exchange Info

**CoinFLEX**
[Website](https://coinflex.com/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/coinflex/) | [CoinGecko](https://www.coingecko.com/en/exchanges/coinflex)

* Creating API keys: https://coinflex.com/api/
* API docs: https://docs.coinflex.com/#change-log
* On-boarding: https://coinflex.com/support/how-do-i-complete-identity-verification-to-increase-my-withdrawal-limits/
* Minimum order size: https://coinflex.com/support/updates-on-perp-funding-cycle-tick-size-changes/

## 👷 Maintenance

* Release added: [1.3.0](/release-notes/1.3.0/) by [TheHolyRoger](https://github.com/TheHolyRoger)
* Maintainer: [TheHolyRoger](https://github.com/TheHolyRoger)

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

https://coinflex.com/fees/

Hummingbot assumes 0% maker fees and 0.08% taker fees.

| VIP tier | Spot Maker | Spot Taker | Perp Maker | Perp Taker |
| -------- | ---------- | ---------- | ---------- | ---------- |
|    4     |     0%     |    0.057%  |   -0.017%  |   0.057%   |
|    5     |     0%     |    0.051%  |   -0.021%  |   0.051%   |
|    6     |     0%     |    0.040%  |   -0.030%  |   0.040%   |

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).


## ℹ️ More Resources

:fontawesome-solid-star: **VIP Trial for Hummingbot users**

We can offer Hummingbot members a 2 months trial of either VIP4-5-6 (depending on targeted volumes). 

VIP4: all Hummingbot community
VIP5: if targeted 30d volume is > $20m
VIP6: if targeted 30d volume is > $100m

Must demonstrate proof/screenshot of past history of volume. 
Please direct message: https://t.me/Phil_Flex or https://t.me/kennyclutch

Subject to CoinFLEX discretion after 2 months trial.

:fontawesome-solid-book: [Bitcoin.com Exchange is now live and powered by CoinFLEX](https://coinflex.com/blog/coinflex-and-bitcoin-com-complete-30-million-deal-to-bring-crypto-yield-and-exchange-products-to-25-million-wallets/)

