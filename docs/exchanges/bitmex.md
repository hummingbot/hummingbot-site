!!! tip "Support Hummingbot"
    Hummingbot Foundation has a fee share partnership with MEXC. When you use our software to trade on MEXC, a custom API header tells MEXC that the trade was executed using Hummingbot, so they share a portion of your fees with us, at no cost to you. To support us, just enter your API keys into Hummingbot and run bots! Thanks for your support! 🙏

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: 

HBOT holders voted BitMEX into the **Bronze** tier for the current [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built | 

## ℹ️ Exchange Info

- **Website**: https://www.bitmex.com/
- **CoinMarketCap**: https://coinmarketcap.com/exchanges/bitmex/
- **CoinGecko**: https://www.coingecko.com/en/exchanges/bitmex
- **API Docs**: https://www.bitmex.com/api/explorer/
- **Fees**: https://www.bitmex.com/wallet/fees/spot
- **Supported Countries**: 

## 🔑 How to Connect

### Generate API Keys



### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect bitmex`:

```
Enter your bitmex API key >>>
Enter your bitmex secret key >>>
```

If connection is successful:

```
You are now connected to bitmex
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `bitmex`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bitmex

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bitmex_paper_trade` instead of `connect bitmex`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

---

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `bitmex_perpetual`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bitmex_perpetual

### Usage

From inside the Hummingbot client, run `connect bitmex_perpetual`:

```
Enter your bitmex_perpetual API key >>>
Enter your bitmex_perpetual secret key >>>
```

If connection is successful:
```
You are now connected to bitmex_perpetual.
```
### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading

This perp exchange offers a paper trading mode: https://testnet.bitmex.com/app/trade/XBTUSD

Afer you create an account and create the API keys, you can enter them by using the `connect bitmex_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts. 
