## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Aggregator

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not Applicable |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://jup.ag>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/jupiter/>
- **Fees**: See [this page](https://station.jup.ag/guides/general/faq#does-jupiter-swap-charge-any-fees)

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `solana` | `mainnet-beta`, `devnet`

From inside the Hummingbot client, run `gateway connect jupiter` in order to connect your wallet:

```
Which chain do you want jupiter to connect to? (solana) >>> 
Which network do you want jupiter to connect to? (mainnet-beta, devnet) >>>
Enter your jupiter-mainnet-beta private key >>>>
```

If connection is successful (solana-mainnet-beta):
```
The jupiter connector now uses wallet [pubKey] on solana-mainnet-beta
```

## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `jupiter`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://station.jup.ag/docs/apis/swap-api>
- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/jupiter>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/development/src/templates/jupiter.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/amm/estimateGas`

For more information, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `jupiter_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="jupiter_solana_mainnet-beta",
        trading_pairs={"SOL-USDC", "SOL-WIF"},
        order_amount_in_base=Decimal("1"),
    )
```