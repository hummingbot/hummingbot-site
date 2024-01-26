## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v1.0 | No | |
| [🔀 Perp Connector](#perp-connector) | Not built |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://ndax.io/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/ndax/>
- **CoinGecko**: 
- **API Docs**: <https://apidoc.ndax.io/>
- **Fees**: <https://ndax.io/fees>
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys

1. Log into your NDAX account and click the user icon
2. Select API from the dropdown menu
3. Choose the account you want to create API Keys for
4. Click Create API Keys

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect ndax`:

```
Enter your ndax user ID (uid) >>>
Enter the name of the account you want to use >>>
Enter your ndax API key >>>
Enter your ndax secret key >>>
```

If connection is successful:

```
You are now connected to ndax.
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `ndax`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/ndax>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect ndax_paper_trade` instead of `connect ndax`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.
```
