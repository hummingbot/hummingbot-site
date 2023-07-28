# Bitfinex

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Bitfinex that shares some of your fees when you trade on Bitfinex using Hummingbot, at no cost to you. To support us, create an account using our [Bitfinex referral link](https://www.bitfinex.com/register). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.bitfinex.com/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/bitfinex/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/bitfinex
- **API docs**: https://docs.bitfinex.com/docs
- **Fees**: https://www.bitfinex.com/fees
- **Supported countries**: Over 52 countries

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bitfinex)

### Usage

From inside the Hummingbot client, run `connect bitfinex`:

```
>>> connect bitfinex

Enter your bitfinex API key >>>
Enter your bitfinex secret key >>>
```

If connection is successful:

```
You are now connected to bitfinex
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bitfinex_paper_trade` instead of `connect bitfinex`.

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
