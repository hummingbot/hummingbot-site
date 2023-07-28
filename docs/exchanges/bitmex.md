# Bitmex

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Bitmex that shares some of your fees when you trade on Bitmex using Hummingbot, at no cost to you. To support us, create an account using our [Bitmex referral link](https://www.bitmex.com/register). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.bitmex.com/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/bitmex/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/bitmex
- **API docs**: https://www.bitmex.com/api/explorer/
- **Fees**: https://www.bitmex.com/wallet/fees/spot
- **Supported countries**: Please refer to BitMEX's terms of service or contact their support for information on supported countries.

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bitmex)

### Usage

From inside the Hummingbot client, run `connect bitmex`:

```
>>> connect bitmex

Enter your bitmex API key >>>
Enter your bitmex secret key >>>
```

If connection is successful:

```
You are now connected to bitmex
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bitmex_paper_trade` instead of `connect bitmex`.

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
