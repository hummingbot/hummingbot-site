## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://openocean.finance>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/openocean/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/openocean_finance>
- **Fees**: <https://docs.openocean.finance/protocol/introduction/fees-overview>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `avalanche` | `avalanche` 
| `ethereum` | `mainnet` 
| `polygon` | `mainnet` 
| `harmony` | `mainnet` 
| `binance smart chain` | `mainnet` 
| `cronos` | `mainnet` 

From inside the Hummingbot client, run `gateway connect openocean` in order to connect your wallet:
 
```
Which chain do you want openocean to connect to? (avalanche, ethereum, polygon, harmony) >>>
Which network do you want openocean to connect to? (mainnet) >>>
Enter your polygon-mainnet private key >>>>
```

If connection is successful:

```
The openocean connector now uses wallet [pubKey] on polygon-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `openocean`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://openocean.finance/api/api-sdk/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/openocean>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/openocean.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `openocean_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="openocean_avalanche_avalanche",
        trading_pairs={"USDC-DAI", "USDC-ETH"},
        order_amount_in_base=Decimal("1"),
    )
```