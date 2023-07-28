# Bitmart

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Bitmart that shares some of your fees when you trade on Bitmart using Hummingbot, at no cost to you. To support us, create an account using our [Bitmart referral link](https://www.bitmart.com/en?r=Hummingbot). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.bitmart.com/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/bitmart/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/bitmart
- **API docs**: https://www.bitmart.com/api-docs
- **Fees**: https://www.bitmart.com/fee/en
- **Supported countries**: Information not available

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bitmart)

### Usage

From inside the Hummingbot client, run `connect bitmart`:

```
>>> connect bitmart

Enter your bitmart API key >>>
Enter your bitmart secret key >>>
```

If connection is successful:

```
You are now connected to bitmart
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bitmart_paper_trade` instead of `connect bitmart`.

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
