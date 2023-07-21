# `bitmex`

**Support Hummingbot by creating an account using our [referral link](https://www.bitmex.com/register)!** 🙏🙏🙏

## ℹ️ Info

- Type: Centralized
- Website: <https://www.bitmex.com>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/bitmex/>
- CoinGecko: <https://www.coingecko.com/en/exchanges/bitmex>
- API docs: https://www.bitmex.com/api/explorer/
- Fees: https://www.bitmex.com/wallet/fees/spot
- Supported countries: Please refer to BitMEX's terms of service or contact their support for information on supported countries.

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
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bitmex)

### How to Connect

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



### Candles Feed

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bitmex_paper_trade` instead of `connect bitmex`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bitmex_perpetual)

### How to Connect

From inside the Hummingbot client, run `connect bitmex_perpetual`:

```
>>> connect bitmex_perpetual

Enter your bitmex_perpetual API key >>>
Enter your bitmex_perpetual secret key >>>
Enter your bitmex_perpetual user id >>>
```

If connection is successful:

```
You are now connected to bitmex_perpetual
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

