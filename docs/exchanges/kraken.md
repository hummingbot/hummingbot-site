!!! tip "Support Hummingbot"
    Hummingbot Foundation has a fee share partnership with Kraken. When you use our software to trade on Kraken, a custom API header tells Kraken that the trade was executed using Hummingbot, so they share a portion of your fees with us, at no cost to you. To support us, just enter your API keys into Hummingbot and run bots! Thanks for your support! 🙏

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: None

Currently, Kraken is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.kraken.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/kraken/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/kraken>
- **API Docs**: <https://docs.kraken.com/rest/>
- **Fees**: <https://www.kraken.com/en-us/features/fee-schedule>
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect kraken`:

```
Enter your kraken API key >>>
Enter your kraken secret key >>>
```

If connection is successful:

```
You are now connected to kraken
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `kraken`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/kraken

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`


### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect kraken_paper_trade` instead of `connect kraken`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.


