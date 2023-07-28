# Huobi

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Huobi that shares some of your fees when you trade on Huobi using Hummingbot, at no cost to you. To support us, create an account using our [Huobi referral link](https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=25530615&invite_code=en9k2223). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.huobi.com/
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/huobi-global/>
- **CoinGecko**: https://www.coingecko.com/en/exchanges/huobi
- **API docs**: https://huobiapi.github.io/docs/spot/v1/en/
- **Fees**: <https://www.huobi.com/en-us/fee/>
- **Supported countries**: Worldwide

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/huobi)

### Usage

From inside the Hummingbot client, run `connect huobi`:

```
>>> connect huobi

Enter your huobi API key >>>
Enter your huobi secret key >>>
```

If connection is successful:

```
You are now connected to huobi
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect huobi_paper_trade` instead of `connect huobi`.

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
