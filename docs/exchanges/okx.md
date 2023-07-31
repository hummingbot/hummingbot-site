!!! tip "Support Hummingbot"
    Hummingbot Foundation has a fee share partnership with OKX. When you use our software to trade on OKX, a custom API header tells OKX that the trade was executed using Hummingbot, so they share a portion of your fees with us, at no cost to you. To support us, just enter your API keys into Hummingbot and run bots! Thanks for your support! 🙏

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (CEX)
- **Market Type**: Central Limit Order Book (CLOB)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: None

Currently, OKX is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | Not built |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.okx.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/okx/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/okx>
- **API Docs**: <https://www.okx.com/docs/en/>
- **Fees**: https://www.okx.com/fees
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys

1. Log into your OKX account and click the user icon
2. Select API from the dropdown menu
3. Choose the account you want to create API Keys for
4. Click Create API Keys

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect okx`:

```
>>> connect okx

Enter your okx API key >>>
Enter your okx secret key >>>
Enter your okx passphrase >>>
```

If connection is successful:

```
You are now connected to okx.
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `okx`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/okx

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect okx_paper_trade` instead of `connect okx`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.
