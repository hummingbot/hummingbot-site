## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.0 | Yes | |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.btcmarkets.net/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/btc-markets/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/btcmarkets>
- **API Docs**: <https://docs.btcmarkets.net/v3/>
- **Fees**: <https://www.btcmarkets.net/fees>
- **Supported Countries**: Primarily Australia

## 🔑 How to Connect

### Generate API Keys


### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect btc_markets`:

```
Enter your btc_markets API key >>>
Enter your btc_markets secret key >>>
```

If connection is successful:

```
You are now connected to btc_markets
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `btc_markets`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/btc_markets>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect btc_markets_paper_trade` instead of `connect btc_markets`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.