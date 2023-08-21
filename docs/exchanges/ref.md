## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** [CoinAlpha](https://coinalpha.com)

Currently, Ref Finance is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://ref.finance>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/ref-finance/>
- **Fees**: <https://docs.ref.finance/concepts/advanced-topics/01-fees>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `near`| `mainnet`, `testnet`|

From inside the Hummingbot client, run `gateway connect ref_finance` in order to connect your wallet:
 
```
Which chain do you want ref-finance to connect to? (near) >>> 
Which network do you want ref-finance to connect to? (mainnet, testnet) >>>
Enter your near-mainnet private key >>>>
```

If connection is successful (near-mainnet):
```
The ref-finance connector now uses wallet [pubKey] on near-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `ref`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.ref.finance/reference/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/ref>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/ref.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`

For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `ref_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: Not specified

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="ref_near_mainnet",
        trading_pairs={"USDC.e-AURORA", "USDT.e-USDC.e"},
        order_amount_in_base=Decimal("1"),
    )
```
