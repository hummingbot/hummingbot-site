## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.bittrex.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/bittrex/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/bittrex>
- **API Docs**: <https://bittrex.github.io/api/v3>
- **Fees**: <https://www.bittrex.com/fees>
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect bittrex`:

```
Enter your bittrex API key >>>
Enter your bittrex secret key >>>
```

If connection is successful:

```
You are now connected to bittrex
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `bittrex`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bittrex>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bittrex_paper_trade` instead of `connect bittrex`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.
