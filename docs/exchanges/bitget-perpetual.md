## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: [CoinAlpha](https://coinalpha.com)

Currently, Bitget Perpetual is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.bitget.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/bitget/>
- **CoinGecko**: https://www.coingecko.com/en/exchanges/bitget
- **API Docs**: https://bitgetlimited.github.io/apidoc/en/spot/#welcome
- **Fees**: https://www.bitget.com/academy/en/article-details/Fee-Structure-and-Fee-Calculations-on-Bitget
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect bitget_perpetual`:

```
Enter your bitget_perpetual API key >>>
Enter your bitget_perpetual secret key >>>
Enter your bitget_perpetual user id >>>
```

If connection is successful:

```
You are now connected to bitget_perpetual
```

## 🔀 Perp Connector
*Integration to spot markets API endpoints*

- **ID**: `bitget_perpetual`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bitget_perpetual

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading


