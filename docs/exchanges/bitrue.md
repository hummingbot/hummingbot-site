## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.1 | Yes | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | Not available | 
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://www.bitrue.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/bitrue/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/bitrue>
- **API Docs**: <https://www.bitrue.com/api-docs#change-log-2023-06-14>
- **Fees**: <https://support.bitrue.com/hc/en-001/articles/360045151354-Trading-Fees-on-Bitrue>
- **Supported Countries**: Available to customers worldwide, except for countries with service restrictions such as Iran, North Korea Sanctions, Ukraine,. Russia, Cuba, Syria etc.

## 🔑 How to Connect

### Generate API Keys

- Login to your Bitrue account on your computer.

- Hover on your profile icon and click API from the dropdown menu

- Click Get API key and Create a API name ( ex. Hummingbot_Bitrue), click Create API key button

- Pass the authentication part and click Confirm

- Go to your email Inbox and verify New API Creation by following the link in the email

- Write somewhere your API key and Secret and give Not Limited to any IP access restriction and click Save Settings

- Copy/paste your API Key and API Secret

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect bitrue`:

```
Enter your bitrue API key >>>
Enter your bitrue secret key >>>
```

If connection is successful:

```
You are now connected to bitrue
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `bitrue`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bitrue>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bitrue_paper_trade` instead of `connect bitrue`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.




