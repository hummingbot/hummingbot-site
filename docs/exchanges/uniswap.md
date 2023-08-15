## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)
- **Maintainer:** Hummingbot Foundation

Currently, Uniswap is a **Gold** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means that Hummingbot Foundation maintains the components below and continually improves them to add more functionality. Gold connectors serve as the "gold standard" template for all other connectors of that type.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | ✅ |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://uniswap.org>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/uniswap/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/uniswap>
- **Fees**: <https://docs.uniswap.org/concepts/protocol/fees>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `mainnet`, `arbitrum_one`, `optimism`, `goerli`
| `polygon` | `mainnet`, `mumbai`

From inside the Hummingbot client, run `gateway connect uniswap` in order to connect your wallet:

```
Which chain do you want uniswap to connect to? (ethereum, polygon) >>> 
Which network do you want uniswap to connect to? (mainnet, goerli, arbitrum_one) >>>
Enter your ethereum-mainnet private key >>>>
```

If connection is successful (ethereum-mainnet):
```
The uniswap connector now uses wallet [pubKey] on ethereum-mainnet
```

## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `uniswap`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.uniswap.org/sdk/v2/overview>
- **Folder**: https://github.com/hummingbot/gateway/tree/main/src/connectors/uniswap
- **Default Configs**: https://github.com/hummingbot/gateway/blob/main/src/templates/uniswap.yml

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/amm/estimateGas`

For more info, run Gateway and go to https:localhost:8080 in your browser to see detailed documentation for each endpoint.

## 3️⃣ Range AMM Connector
*Integration to this DEX's concentrated liquidity range provision endpoints*

- **ID**: `uniswaplp`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.uniswap.org/sdk/v3/overview>
- **Folder**: https://github.com/hummingbot/gateway/tree/main/src/connectors/uniswaplp
- **Default Configs**: https://github.com/hummingbot/gateway/blob/main/src/templates/uniswap.yml

### Endpoints

- `/amm/liquidity/price`
- `/amm/liquidity/add`
- `/amm/liquidity/remove`
- `/amm/liquidity/position`
- `/amm/liquidity/collect_fees`

For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `uniswap_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="uniswap_polygon_mainnet",
        trading_pairs={"WETH-USDC", "WETH-DAI"},
        order_amount_in_base=Decimal("1"),
    )
```