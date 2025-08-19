
!!! note
    This connector is being migrated to the new Gateway architecture. Currently available in Gateway Legacy (v2.2) only. See [Gateway Installation](/gateway/installation) for setup instructions.

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://tinyman.org>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/tinyman/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/tinyman>
- **Fees**: <https://docs.tinyman.org/fees>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `algorand` | `mainnet`, `testnet` 

From inside the Hummingbot client, run `gateway connect tinyman` in order to connect your wallet:
 
```
Which chain do you want tinyman to connect to? (algorand) >>> algorand
Which network do you want tinyman to connect to? (mainnet, testnet) >>> mainnet
Enter your algorand-mainnet private key >>>>
```

If connection is successful:

```
The tinyman connector now uses wallet [pubKey] on algorand-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `tinyman`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.tinyman.org/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/tinyman>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/tinyman.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `tinyman_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="tinyman_algorand_mainnet",
        trading_pairs={"USDC-ALGO", "USDC-USDT"},
        order_amount_in_base=Decimal("1"),
    )
```