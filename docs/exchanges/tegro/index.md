## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.1 | Yes | Supports `MARKET` order type | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built |

## ℹ️ Exchange Info

- **Website**: <https://www.tegro.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/tegro/>
- **API Docs**: <https://tegro.readme.io/>
- **Fees**: To be determined
- **Supported Countries**: Worldwide

## 🔑 How to Connect

From inside the Hummingbot client, run `connect tegro`:

```
>>> connect tegro

Enter your public API key >>>
Enter your private secret key >>>
Enter your preferred chain >>>
```

If connection is successful:

```
You are now connected to tegro
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `tegro`
- **Connection Type**: WebSocket
- **API Docs**: <https://tegro.readme.io/reference/introduction-1/>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/tegro)** 

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect tegro_paper_trade` instead of `connect tegro`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.