
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

- **Website**: <https://www.sushi.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/sushiswap/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/sushiswap>
- **Fees**: https://docs.sushiswap.fi/products/limit-order#is-there-any-transaction-fee

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum | `mainnet`, `arbitrum_one` `goerli` 
| `avalanche | `avalanche`, `fuji` 
| `binance smart chain | `mainnet`, `testnet` 
| `harmony | `mainnet` 
| `polygon | `mainnet`, `mumbai` 

From inside the Hummingbot client, run `gateway connect sushiswap` in order to connect your wallet:
 
```
Which chain do you want sushiswap to connect to? (ethereum, binance-smart-chain, polygon) >>> 
Which network do you want sushiswap to connect to? (mainnet, mumbai) >>>
Enter your polygon-mainnet private key >>>>
```

If connection is successful (polygon-mainnet):
```
The sushiswap connector now uses wallet [pubKey] on polygon-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `sushiswap`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.sushi.com/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/sushiswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/sushiswap.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `sushiswap_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="sushiswap_harmony_mainnet",
        trading_pairs={"WETH-WONE", "WBTC-WONE"},
        order_amount_in_base=Decimal("1"),
    )
```