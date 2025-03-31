## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://hydration.net/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/hydration>
- **Fees**: <https://docs.hydration.net/products/trading/fees/>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `polkadot` | `mainnet`, `testnet` 

From inside the Hummingbot client, run `gateway connect hydration` in order to connect your wallet:

```
Which chain do you want hydration to connect to? (polkadot) >>> polkadot
Which network do you want hydration to connect to? (mainnet, testnet) >>> mainnet
Enter your polkadot-mainnet private key >>>>
```

If connection is successful:

```
The hydration connector now uses wallet [pubKey] on polkadot-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `hydration`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://hydration.net/docs>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/hydration>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/hydration.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `hydration_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="hydration_polkadot_mainnet",
        trading_pairs={"USDC-HDX", "USDC-USDT"},
        order_amount_in_base=Decimal("1"),
    )
```