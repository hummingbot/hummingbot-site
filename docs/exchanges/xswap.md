## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** [CoinAlpha](https://coinalpha.com)

Currently, XSWAP is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://xswap.com>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/xswap-protocol/>
- **CoinGecko**: <https://www.coingecko.com/en/coins/xswap-protocol>
- **Fees**: <https://docs.xswap.com/products/xswap-exchange/xswap-pools>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `xdc-chain` | `xinfin`, `apothem`

From inside the Hummingbot client, run `gateway connect xswap` in order to connect your wallet:

```
Which chain do you want xswap to connect to? (xdc-chain) >>>
Which network do you want xswap to connect to? (xinfin, apothem) >>>
Enter your xdc-chain-xinfin private key >>>>
```

If connection is successful:

```
The xswap connector now uses wallet [pubKey] on xdc-chain-xinfin
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `xswap`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://github.com/Carry-So/xsswap-sdk>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/xswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/xswap.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/chain/allowances`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `xswap_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="xswap_xdc_xinfin",
        trading_pairs={"XSP-WXDC", "WXDC-xUSDT"},
        order_amount_in_base=Decimal("1"),
    )
```