
!!! note
    This connector is available in **Gateway Legacy (v2.2)**. For installation instructions, refer to the [Installation Guide](../../gateway/legacy/installation.md).

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://quickswap.exchange>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/quickswap/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/quickswap>
- **Fees**: QuickSwap charges a 0.3% fee for swapping tokens, which is distributed among liquidity providers on a pro-rata basis.

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `polygon` | `mainnet`, `mumbai` 

From inside the Hummingbot client, run `gateway connect quickswap` in order to connect your wallet:
 
```
Which chain do you want quickswap to connect to? (polygon) >>> 
Which network do you want quickswap to connect to? (mainnet, mumbai) >>>
Enter your polygon-mainnet private key >>>>
```

If connection is successful (polygon-mainnet):
```
The quickswap connector now uses wallet [pubKey] on polygon-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `quickswap`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.quickswap.exchange/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/quickswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/quickswap.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `quickswap_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="quickswap_polygon_mainnet",
        trading_pairs={"USDC-WETH", "WMATIC-WETH"},
        order_amount_in_base=Decimal("1"),
    )
```