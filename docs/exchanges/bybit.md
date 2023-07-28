# Bybit

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Bybit that shares some of your fees when you trade on Bybit using Hummingbot, at no cost to you. To support us, create an account using our [Bybit referral link](https://www.bybit.com/). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.bybit.com/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/bybit/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/bybit
- **API docs**: https://bybit-exchange.github.io/docs/v5/intro
- **Fees**: <https://help.bybit.com/hc/en-us/articles/360039261154-Taker-s-Fee-and-Maker-s-Rebate-Calculation>
- **Supported countries**: Available to customers worldwide, except for countries with service restrictions such as the U.S, Singapore, Cuba, Crimea, Sevastopol, Iran, Syria, North Korea, Sudan, Mainland China.

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bybit)

### Usage

From inside the Hummingbot client, run `connect bybit`:

```
>>> connect bybit

Enter your bybit API key >>>
Enter your bybit secret key >>>
```

If connection is successful:

```
You are now connected to bybit
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bybit_paper_trade` instead of `connect bybit`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bybit_perpetual)

### Usage

From inside the Hummingbot client, run `connect bybit_perpetual`:

```
>>> connect bybit_perpetual

Enter your bybit_perpetual API key >>>
Enter your bybit_perpetual secret key >>>
Enter your bybit_perpetual user id >>>
```

If connection is successful:

```
You are now connected to bybit_perpetual
```


### Order Types

- `LIMIT`
- `MARKET`


### Position Modes

- One-way
- Hedge

### Testnet



## 🕯 Spot Candles Feed
*Collect historical OHCLV data from this exchange's spot markets*



### Usage





## 🕯 Perp Candles Feed
*Collect historical OHCLV data from this exchange's perp markets*


### Usage



## How to create API keys

