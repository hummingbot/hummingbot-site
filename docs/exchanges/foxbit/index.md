## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes |
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.0  | Yes | |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available  |
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available  |


## ℹ️ Exchange Info

- **Website**: <https://www.foxbit.com.br/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/foxbit/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/foxbit>
- **API Docs**: <https://docs.foxbit.com.br/rest/v3/> and <https://docs.foxbit.com.br/ws/v2/>
- **Fees**: <https://foxbit.com.br/taxas/>
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys

**Docs**: <https://ajuda.foxbit.com.br/docs/exchange/minha-conta/o-que-e-api-key-e-como-utilizar/>

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect foxbit`:

```
Enter your Foxbit API key >>>
Enter your Foxbit API secret >>>
Enter your Foxbit User Id >>>
```

If connection is successful:

```
You are now connected to foxbit
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `foxbit`
- **Connection Type**: REST / WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/foxbit>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`