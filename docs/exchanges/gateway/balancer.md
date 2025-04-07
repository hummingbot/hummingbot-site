
!!! note
    This connector is available in **Gateway Legacy (v2.2)**. For installation instructions, refer to the [Installation Guide](../legacy/installation.md).

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://balancer.fi>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/balancer/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/balancer>
- **Fees**: Variable depending on pool

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `mainnet` |
| `avalanche` | `avalanche` |
| `polygon` | `mainnet` |


From inside the Hummingbot client, run `gateway connect balancer` to connect your wallet:

```
Which chain do you want balancer to connect to? (ethereum) >>>
Which network do you want balancer to connect to? (mainnet, kovan) >>>
Enter your ethereum-mainnet private key >>>>
```

If the connection is successful:

```
The balancer connector now uses wallet [pubKey] on ethereum-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `balancer`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.balancer.fi>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/balancer>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/balancer.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/chain/allowances`


For more info, run Gateway and go to <https://localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `balancer_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="balancer_ethereum_mainnet",
        trading pairs={"BAL-ETH", "ETH-USDT"},
        order_amount_in base=Decimal("1"),
    )
```
```
