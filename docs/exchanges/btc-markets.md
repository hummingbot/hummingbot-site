# BTC_Markets

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with BTC_Markets that shares some of your fees when you trade on BTC_Markets using Hummingbot, at no cost to you. To support us, create an account using our [BTC_Markets referral link](https://btcmarkets.net/createaccount). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.btcmarkets.net/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/btc-markets/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/btc-markets
- **API docs**: <https://docs.btcmarkets.net/v3/>
- **Fees**: https://www.btcmarkets.net/fees
- **Supported countries**: Primarily Australia

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/btc_markets)

### Usage

From inside the Hummingbot client, run `connect btc_markets`:

```
>>> connect btc_markets

Enter your btc_markets API key >>>
Enter your btc_markets secret key >>>
```

If connection is successful:

```
You are now connected to btc_markets
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect btc_markets_paper_trade` instead of `connect btc_markets`.

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
