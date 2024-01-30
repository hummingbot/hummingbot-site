## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://dydx.exchange>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/dydx/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/dydx_perpetual>
- **API Docs**: <https://dydxprotocol.github.io/v3-teacher/>
- **Fees**: <https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx>
- **Supported Countries**: <https://help.dydx.exchange/en/articles/4798063-location-restrictions> 

## 🔑 How to Connect

### Generate API Keys

Create API credentials and a STARK private key using the dYdX documentation:

* [Recover Default API Credentials](https://dydxprotocol.github.io/v3-teacher/#recover-default-api-credentials)
* [Derive StarkKey](https://help.dydx.exchange/en/articles/4797307-what-is-a-stark-key)

Alternatively, you can follow these steps to get the required credentials:

1. From the dYdX exchange, right-click anywhere on your web browser, and select **Inspect** to open Developer Tools
2. Go to Application > Local Storage > <https://trade.dydx.exchange>
3. Select **STARK_KEY_PAIRS** and click the drop-down next to your wallet address to get the stark private key
4. Select **API_KEY_PAIRS** and click the drop-down next to your wallet address to get the API key, secret key, and passphrase

### Add Keys to Hummingbot

You will need the following to connect Hummingbot to `dydx_perpetual`:

* API key
* API secret key
* Passphrase
* Account number: set this value to `0`
* Stark private key

From inside the Hummingbot client, run `connect dydx_perpetual` in Hummingbot in order to connect your wallet:

```
Enter your dydx_perpetual API key >>>
Enter your dydx_perpetual secret key >>>
Enter your dydx_perpetual passphrase >>>
```

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `dydx_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/dydx_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading

This exchange offers a staging (testnet) mode: <https://trade.stage.dydx.exchange/portfolio/overview>

While users can trade on testnet using the link above, it is not currently supported in Hummingbot.