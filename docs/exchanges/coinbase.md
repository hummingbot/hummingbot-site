# Coinbase

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Coinbase that shares some of your fees when you trade on Coinbase using Hummingbot, at no cost to you. To support us, create an account using our [Coinbase referral link](https://www.coinbase.com/join). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.coinbase.com/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/coinbase-exchange/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/coinbase_exchange
- **API docs**: <https://docs.pro.coinbase.com/>
- **Fees**: <https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees>
- **Supported countries**: Available in 100+ countries

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/coinbase)

### Usage

From inside the Hummingbot client, run `connect coinbase`:

```
>>> connect coinbase

Enter your coinbase API key >>>
Enter your coinbase secret key >>>
```

If connection is successful:

```
You are now connected to coinbase
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect coinbase_paper_trade` instead of `connect coinbase`.

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

