## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports testnet
| [🔀 Perp Connector](#perp-connector) | Not available | 
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://www.polkadex.trade>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/polkadex/>
- **CoinGecko**: <https://www.coingecko.com/en/coins/polkadex>
- **API Docs**: <https://wiki.polkadot.network/docs/build-index>
- **Fees**: To be determined
- **Supported Countries**: Global 

## 🔑 How to Connect

### Generate API Keys



### Add Keys to Hummingbot

Run `connect polkadex` in order to enter your API keys:

```
Enter your polkadex seed phrase >>>
```

If connection is successful:

```
You are now connected to polkadex.
```

## 🔀 Spot Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `polkadex`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/polkadex>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

