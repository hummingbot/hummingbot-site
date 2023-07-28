# Altmarkets

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Altmarkets that shares some of your fees when you trade on Altmarkets using Hummingbot, at no cost to you. To support us, create an account using our [Altmarkets referral link](https://altmarkets.io/register). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://v2.altmarkets.io/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/altmarkets/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/altmarkets
- **API docs**: https://app.swaggerhub.com/apis-docs/Altmarkets/PublicApi/2.3.12
- **Fees**: https://v2.altmarkets.io/fees
- **Supported countries**: Information not available

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/altmarkets)

### Usage

From inside the Hummingbot client, run `connect altmarkets`:

```
>>> connect altmarkets

Enter your altmarkets API key >>>
Enter your altmarkets secret key >>>
```

If connection is successful:

```
You are now connected to altmarkets
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect altmarkets_paper_trade` instead of `connect altmarkets`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*



### Usage


### Order Types


### Position Modes



### Testnet



## 🕯 Spot Candles Feed
*Collect historical OHCLV data from this exchange's spot markets*



### Usage





## 🕯 Perp Candles Feed
*Collect historical OHCLV data from this exchange's perp markets*


### Usage



## How to create API keys


