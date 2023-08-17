## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** 

Currently, Vertex is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | Not available
| [🕯 AMM Data Feed](#amm-data-feed) | Not available

## ℹ️ Exchange Info

- **Website**: <https://vertexprotocol.finance>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/vertex-protocol/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/vertexprotocol>
- **API Docs**: <https://vertex-protocol.gitbook.io/docs/getting-started/overview>
- **Fees**: <https://docs.vertexprotocol.finance/products/vertexprotocol-exchange/vertexprotocol-pools>

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
- **API Docs**: <https://docs.vertexprotocol-test.com/api>
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/vertex>
- **Default Configs**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/vertex/vertex_constants.py>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect vertex_testnet` instead of `connect vertex`.


