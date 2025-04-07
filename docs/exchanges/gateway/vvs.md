
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

- **Website**: <https://vvs.finance>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/vvs-finance/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/vvs_finance>
- **Fees**: <https://docs.vvs.finance/product-guides/limit-order#is-there-any-transaction-fee>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `cronos` | `mainnet` 

From inside the Hummingbot client, run `gateway connect vvs` in order to connect your wallet:

```
Which chain do you want vvs to connect to? (cronos) >>>
Which network do you want vvs to connect to? (mainnet) >>>
Enter your cronos-mainnet private key >>>>
```

If connection is successful:

```
The vvs connector now uses wallet [pubKey] on cronos-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `vvs`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.vvs.finance/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/vvs>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/vvs.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `vvs_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="vvs_cronos_mainnet",
        trading_pairs={"WCRO-USDT", "VVS-USDC"},
        order_amount_in_base=Decimal("1"),
    )
```