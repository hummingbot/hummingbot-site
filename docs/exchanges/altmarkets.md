## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: None

Currently, Altmarkets is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | Not built |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: https://v2.altmarkets.io/
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/altmarkets/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/altmarkets>
- **API Docs**: https://app.swaggerhub.com/apis-docs/Altmarkets/PublicApi/2.3.12
- **Fees**: https://v2.altmarkets.io/fees
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys


### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect altmarkets`:

```
Enter your altmarkets API key >>>
Enter your altmarkets secret key >>>
```

If connection is successful:

```
You are now connected to altmarkets
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `altmarkets`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/altmarkets

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect altmarkets_paper_trade` instead of `connect altmarkets`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.
```
