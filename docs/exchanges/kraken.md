# Kraken

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Kraken that shares some of your fees when you trade on Kraken using Hummingbot, at no cost to you. To support us, create an account using our [Kraken referral link](https://r.kraken.com/c/1310646/687155/10583). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.kraken.com/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/kraken/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/kraken
- **API docs**: <https://docs.kraken.com/rest/>
- **Fees**: <https://www.kraken.com/en-us/features/fee-schedule>
- **Supported countries**: Worldwide

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: 

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/kraken)

### Usage

From inside the Hummingbot client, run `connect kraken`:

```
>>> connect kraken

Enter your kraken API key >>>
Enter your kraken secret key >>>
```

If connection is successful:

```
You are now connected to kraken
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect kraken_paper_trade` instead of `connect kraken`.

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
