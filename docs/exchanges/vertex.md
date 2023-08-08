## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** 

Currently, Vertex is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://vertex.finance>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/vertex-finance/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/vertex-finance>
- **Fees**: https://docs.vertex.finance/product-guides/limit-order#is-there-any-transaction-fee

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

## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `vertex`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://github.com/Carry-So/vertexswap-sdk>
- **Folder**: https://github.com/hummingbot/gateway/tree/main/src/connectors/vertex
- **Default Configs**: https://github.com/hummingbot/gateway/blob/main/src/templates/vertex.yml

### Endpoints

- `/amm/price`
- `/amm/trade`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `vertex_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="vertex_ethereum_arbitrum_one",
        trading_pairs={"PAIR1-PAIR2", "PAIR3-PAIR4"},
        order_amount_in_base=Decimal("1"),
    )
```