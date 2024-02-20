## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | Not available
| [🕯 AMM Data Feed](#amm-data-feed) | Not available

## ℹ️ Exchange Info

- **Website**: <https://vertexprotocol.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/vertex-protocol/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/vertex-protocol-spot>
- **API Docs**: <https://vertex-protocol.gitbook.io/docs/getting-started/overview>
- **Fees**: <https://vertex-protocol.gitbook.io/docs/basics/fees>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `arbitrum_one`, `arbitrum_goerli` 

From inside the Hummingbot client, run `gateway connect vertex` in order to connect your wallet:
 
```
Enter your Arbitrum private key >>>
Enter your Arbitrum wallet address >>>
```

If connection is successful:
```
You are now connected to vertex.
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `vertex`
- **Connection Type**: REST
- **API Docs**: <https://vertex-protocol.gitbook.io/docs/getting-started/overview>
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/vertex>
- **Default Configs**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/vertex/vertex_constants.py>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect vertex_testnet` instead of `connect vertex`.


