
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

- **Website**: <https://mm.finance>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/mm-finance/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/mm_finance>
- **Fees**: <https://mmfinance.gitbook.io/>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `cronos` | `mainnet`

From inside the Mad Meerkat client, run `gateway connect madmeerkat` in order to connect your wallet:
 
```
Which chain do you want mad_meerkat to connect to? (cronos) >>>
Which network do you want mad_meerkat to connect to? (mainnet) >>>
Enter your cronos-mainnet private key >>>>
```

If connection is successful:

```
The mad_meerkat connector now uses wallet [pubKey] on cronos-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `mad_meerkat`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://github.com/madmeerkatburrow/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/mad_meerkat>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/mad_meerkat.yml>

### Endpoints

- `/amm/price`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `mad_meerkat_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="madmeerkat_cronos_mainnet",
        trading_pairs={"MMF-USD", "WCRO-MMF"},
        order_amount_in_base=Decimal("1"),
    )
```