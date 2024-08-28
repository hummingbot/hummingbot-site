## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v1.0 | No | |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.coinbase.com/>
- **Coinbase Advanced Trade is not listed - Exchange is the institutional trading platform for Coinbase**
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/coinbase-exchange/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/coinbase-exchange>
- **API Docs**: <https://docs.cloud.coinbase.com/advanced-trade-api/docs>
- **Fees**: <https://www.coinbase.com/advanced-fees> (Requires an account)
- **Supported Countries**: Available in 100+ countries

## 🔑 How to Connect

### Generate API Keys
- From trading platform -> `More`-> `Advanced API` -> `Create API Key` -> `Trading Key`
- Select permissions for the API key (e.g. `View` and `Trade`)

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect coinbase_advanced_trade`:

```
Enter your coinbase_advanced_trade API key >>>
Enter your coinbase_advanced_trade secret key >>>
```

If connection is successful:

```
You are now connected to coinbase_advanced_trade
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `coinbase_advanced_trade`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/coinbase_advanced_trade>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT` (`LIMIT_MAKER`: Coinbase rejection rate is high, currently same as `LIMIT`)

### Paper Trading

Not available
