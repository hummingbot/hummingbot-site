# `bybit`

**Support Hummingbot by creating an account using our [referral link](https://www.bybit.com/register)!** 🙏🙏🙏

## ℹ️ Info

- Type: Centralized
- Website: <https://www.bybit.com>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/bybit/>
- CoinGecko: <https://www.coingecko.com/en/exchanges/bybit>
- API docs: <https://bybit-exchange.github.io/docs/v5/intro>
- Fees: <https://help.bybit.com/hc/en-us/articles/360039261154-Taker-s-Fee-and-Maker-s-Rebate-Calculation>
- Supported countries: 

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
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bybit)

### How to Connect

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
- `MARKET`



### Candles Feed

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bybit_paper_trade` instead of `connect bybit`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bybit_perpetual)

### How to Connect

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

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way
- Hedge

### Candles Feed



### Testnets
