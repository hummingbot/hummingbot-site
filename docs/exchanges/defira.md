## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** 

Currently, Defira is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://defira.com>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/defira/>
- **CoinGecko**: <https://www.coingecko.com/en/coins/fira>
- **Fees**: Defira charges a 0.3% fee for swapping tokens, which is distributed among liquidity providers on a pro-rata basis.

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `harmony` | `mainnet`, `testnet` 

From inside the Hummingbot client, run `gateway connect defira` in order to connect your wallet:
 
```
Which chain do you want defira to connect to? (harmony) >>>
Which network do you want defira to connect to? (mainnet, testnet) >>>
Enter your harmony-mainnet private key >>>>
```

If connection is successful:

```
The defira connector now uses wallet [pubKey] on harmony-mainnet
```

## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `defira`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.defira.com/>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/defira>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/defira.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`


For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `defira_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="defira_harmony_mainnet",
        trading_pairs={"PAIR1-PAIR2", "PAIR3-PAIR4"},
        order_amount_in_base=Decimal("1"),
    )
```
