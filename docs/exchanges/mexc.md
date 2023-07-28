# MEXC

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with MEXC that shares some of your fees when you trade on MEXC using Hummingbot, at no cost to you. To support us, create an account using our [MEXC referral link](https://www.mexc.com/register?inviteCode=123456). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.mexc.com/
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/mxc/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/mexcglobal>
- **API docs**: <https://mxcdevelop.github.io/apidocs/spot_v3_en/#introduction>
- **Fees**: <https://www.mexc.com/fees>
- **Supported countries**: Worldwide

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/mexc)

### Usage

From inside the Hummingbot client, run `connect mexc`:

```
>>> connect mexc

Enter your mexc API key >>>
Enter your mexc secret key >>>
```

If connection is successful:

```
You are now connected to mexc
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect mexc_paper_trade` instead of `connect mexc`.

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
