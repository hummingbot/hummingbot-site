---
tags:
- 
---
<!---  Add necessary connector tags above ie. "spot connector", "miner exchange" etc -->

# `Connector Name` <!--- Replace this with the actual connector name -->

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/) <!--- Replace Github link to connector folder -->

## 📝 Signup

* Hummingbot referral link - <!--- Add referral link if applicable -->
* Sign up with [connector_name] using Hummingbot's referral link for a [%_discount] discount off trading fees!

## ℹ️ Exchange Info

**Connector_Website.com** [Website](https://connector_website.com/) | [CoinMarketCap](https://coinmarketcap.com/exchanges//) | [CoinGecko](https://www.coingecko.com/en/exchanges) <!--- Add exchange website link as well as link to exchange page on CoinMarketCap and CoinGecko  -->

* API docs: <!--- Add link to API docs -->
* Transaction fees: <!--- Add link to transaction fees for exchange -->
* Minimum order size: <!--- Add link to docs specifying trading rules or that state the minimum order size -->
* Creating API keys: <!--- Add link to creating API docs -->

## 👷 Maintenance

* Release added: <!--- Add release number here as well as link to release notes ex. "[1.9.0](/release-notes/1.9.0/) by CoinAlpha" -->
* Maintainer: <!--- name of maintainer -->

## 🔑 Connection
<!--- enter the prompts below shown when running the `connect` command -->

Run `connect [exchange_name]` in order to enter your API keys:

```
Enter your  [exchange_name] API key >>>
Enter your [exchange_name] secret key >>>
```

If connection is successful:

```
You are now connected to [exchange_name].
```

## 🪙 Fees

Hummingbot assumes [%_fees] maker fees and [%_fees] taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/)). <!--- replace with maker / taker fees and add correct Github link to hardcoded fees -->

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
