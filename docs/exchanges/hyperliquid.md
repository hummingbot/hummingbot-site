## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 
| [📓 Connector Guide](/academy-content/using-hyperliquid-vaults-with-hummingbot/) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://app.hyperliquid.xyz/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/hyperliquid/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/hyperliquid>
- **API Docs**: <https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api>
- **Fees**: <https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees>
- **Supported Countries**: Not available

## 🔑 How to Connect

### Vault Guide

See the [Hyperliquid Vault Guide](/academy-content/using-hyperliquid-vaults-with-hummingbot/) for more details on how to use Hyperliquid VauLts.

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect hyperliquid_perpetual` in Hummingbot in order to connect your wallet:

```
Enter your Arbitrum wallet address >>>
Enter your Arbitrum wallet private key >>>
```

If connection is successful:

```
You are now connected to hyperliquid_perpetual.
```


## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `hyperliquid_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/hyperliquid_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading

This perp exchange offers a paper trading mode: <https://app.hyperliquid-testnet.xyz/trade>

Afer you create an account and create the API keys, you can enter them by using the `connect hyperliquid_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts. 

