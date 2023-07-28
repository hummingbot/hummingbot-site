# HitBTC

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with HitBTC that shares some of your fees when you trade on HitBTC using Hummingbot, at no cost to you. To support us, create an account using our [HitBTC referral link](https://hitbtc.com/?ref_id=5a5b798c2035c). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://hitbtc.com/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/hitbtc/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/hitbtc
- **API docs**: https://api.hitbtc.com/
- **Fees**: <https://hitbtc.com/fee-tier>
- **Supported countries**: Worldwide

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/hitbtc)

### Usage

From inside the Hummingbot client, run `connect hitbtc`:

```
>>> connect hitbtc

Enter your hitbtc API key >>>
Enter your hitbtc secret key >>>
```

If connection is successful:

```
You are now connected to hitbtc
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect hitbtc_paper_trade` instead of `connect hitbtc`.

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

