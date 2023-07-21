# `coinbase_pro`

**Support Hummingbot by creating an account using our [referral link](https://www.coinbase.com/join)!** 🙏🙏🙏

## ℹ️ Info

- Type: Centralized
- Website: <https://pro.coinbase.com/>
- CoinMarketCap: https://coinmarketcap.com/exchanges/coinbase-exchange/
- CoinGecko: https://www.coingecko.com/en/exchanges/coinbase_exchange
- API docs: <https://docs.pro.coinbase.com/>
- API version: 2
- Fees: <https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees>
- Supported countries: Over 100 countries


## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

HBOT holders voted this exchange into the Bronze tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.

**Maintainer:** 

## 💰 Rewards
*Competitions and other programs that incentivize Hummingbot users to use this exchange*

**Current and Upcoming**



**Past**



## 📺 Content
*Videos and guides that show how to use Hummingbot with this exchange*


## How to create API keys


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/coinbase_pro)

### How to Connect

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
- `MARKET`


### Candles Feed


### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect coinbase_paper_trade` instead of `connect coinbase`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.


## 🔀 Perp Connector
*Connector to perpetual futures markets*


### How to Connect


### Order Types



### Position Modes


### Candles Feed


### Testnets

