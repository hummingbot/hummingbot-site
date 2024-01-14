!!! tip "Support Hummingbot"
    Hummingbot Foundation has a fee share partnership with HitBTC. When you use our software to trade on HitBTC, a custom API header tells HitBTC that the trade was executed using Hummingbot, so they share a portion of your fees with us, at no cost to you. To support us, just enter your API keys into Hummingbot and run bots! Thanks for your support! 🙏

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: None

Currently, HitBTC is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | V1.0 | No | |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.hitbtc.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/hitbtc/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/hitbtc>
- **API Docs**: <https://api.hitbtc.com/>
- **Fees**: <https://hitbtc.com/fee-tier>
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys



### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect hitbtc`:

```
Enter your hitbtc API key >>>
Enter your hitbtc secret key >>>
```

If connection is successful:

```
You are now connected to hitbtc
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `hitbtc`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/hitbtc>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`


### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect hitbtc_paper_trade` instead of `connect hitbtc`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.


