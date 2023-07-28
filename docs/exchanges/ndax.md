# NDAX

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with NDAX that shares some of your fees when you trade on NDAX using Hummingbot, at no cost to you. To support us, create an account using our [NDAX referral link](https://www.ndax.io/register?inviteCode=123456). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: https://www.ndax.io/
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/ndax/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/ndax>
- **API docs**: https://apidoc.ndax.io/
- **Fees**: <https://ndax.io/fees>
- **Supported countries**: Canada

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

- **Tier**: Bronze
- **Maintainer**: [CoinAlpha](https://coinalpha.com)

HBOT holders voted this exchange into the **Bronze** tier for the current [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/ndax)

### Usage

Run `connect ndax` in order to enter your API keys:

```
Enter your ndax user ID (uid) >>>
Enter the name of the account you want to use >>>
Enter your ndax API key >>>
Enter your ndax secret key >>>
```

If connection is successful:

```
You are now connected to ndax.
```


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect ndax_paper_trade` instead of `connect ndax`.

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

To get started with NDAX's API, you need to have an NDAX account. Once you have an account, you can generate an API key from your account settings. To generate API keys, follow these steps:

- Log in to your NDAX account.
- Click on your username in the top right corner of the page and select "API Keys."
- Click on "Generate new API key."
- Name your API key, select the permissions you want to grant it, and click on "Generate API key."

Once you've generated your API keys, you can use them to authenticate your API requests. 