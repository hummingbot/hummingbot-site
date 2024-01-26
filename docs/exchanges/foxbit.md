# `foxbit`

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.0  | Yes | |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 


## ℹ️ Exchange Info

- **Website**: <https://www.foxbit.com.br/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/foxbit/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/foxbit>
- **API Docs**: <https://docs.foxbit.com.br/rest/v3/> and <https://docs.foxbit.com.br/ws/v2/>
- **Fees**: <https://foxbit.com.br/taxas/>
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys



### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect foxbit`:

```
Enter your foxbit API key >>>
Enter your foxbit secret key >>>
Enter your foxbit User ID >>>
```

If connection is successful:

```
You are now connected to foxbit
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `foxbit`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/foxbit>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`


### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect foxbit_paper_trade` instead of `connect foxbit`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.
