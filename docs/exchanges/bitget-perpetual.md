# `bitget_perpetual`

**Support Hummingbot by creating an account using our [referral link](https://www.bitget.com/en/invite-register?invite_code=xxxxxx)!** 🙏🙏🙏

## ℹ️ Info

- Type: Centralized
- Website: <https://www.bitget.com>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/bitget/>
- CoinGecko: https://www.coingecko.com/en/exchanges/bitget
- API docs: https://bitgetlimited.github.io/apidoc/en/spot/#welcome
- Fees: https://www.bitget.com/academy/en/article-details/Fee-Structure-and-Fee-Calculations-on-Bitget
- Supported countries: 

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

HBOT holders voted this exchange into the Bronze tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.

**Maintainer:** [CoinAlpha](https://coinalpha.com)

## 💰 Rewards
*Competitions and other programs that incentivize Hummingbot users to use this exchange*

**Current and Upcoming**



**Past**



## 📺 Content
*Videos and guides that show how to use Hummingbot with this exchange*



## How to create API keys



## 🔀 Spot Connector
*Integration to exchange's spot markets API*


### How to Connect



### Order Types




### Candles Feed

### Paper Trading



## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bitget_perpetual)

### How to Connect

From inside the Hummingbot client, run `connect bitget_perpetual`:

```
>>> connect bitget_perpetual

Enter your bitget_perpetual API key >>>
Enter your bitget_perpetual secret key >>>
Enter your bitget_perpetual user id >>>
```

If connection is successful:

```
You are now connected to bitget_perpetual
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
