
!!! note
    This connector is being migrated to the new Gateway architecture. Currently available in Gateway Legacy (v2.2) only. See [Gateway Installation](/gateway/installation) for setup instructions.

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | ✅ |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://etcswap.org>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/etcswap-v3>
- **Fees**: <https://docs.etcswap.org/blog/intro-to-gas-optimization#in-practice-storage-packing>
- **ProtocolContract List** <https://github.com/etcswap>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum-classic` | `mainnet`

From inside the Hummingbot client, run `gateway connect etcswap` in order to connect your wallet:

```
Which chain do you want etcswap to connect to? (ethereum-classic) >>> 
Which network do you want etcswap to connect to? (mainnet) >>>
Enter your ethereum-classic-mainnet private key >>>>
```

If connection is successful (ethereum-classic-mainnet):
```
The etcswap connector now uses wallet [pubKey] on ethereum-classic-mainnet
```

## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `etcswap`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.etcswap.org/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/etcswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/etcswap.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/amm/estimateGas`

For more info, run Gateway and go to https:localhost:8080 in your browser to see detailed documentation for each endpoint.

## 3️⃣ Range AMM Connector
*Integration to this DEX's concentrated liquidity range provision endpoints*

- **ID**: `etcswaplp`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.etcswap.org/sdk/v3/overview>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/etcswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/etcswap.yml>

### Endpoints

- `/amm/liquidity/price`
- `/amm/liquidity/add`
- `/amm/liquidity/remove`
- `/amm/liquidity/position`
- `/amm/liquidity/collect_fees`

For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `etcswap_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="etcswap_ethereum-classic_mainnet",
        trading_pairs={"ETC-USDC", "WETH-DAI"},
        order_amount_in_base=Decimal("1"),
    )
```