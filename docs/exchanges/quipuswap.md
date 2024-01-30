## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** 

Currently, QuipuSwap is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://quipuswap.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/quipuswap>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/quipuswap>
- **Fees**: <https://story.madfish.solutions/quipuswap-farming-and-everything-you-need-to-know-about-it>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `tezos` | `mainnet` |

From inside the Hummingbot client, run `gateway connect quipuswap` in order to connect your wallet:
 
```
Which chain do you want quipuswap to connect to? (tezos) >>>
Which network do you want quipuswap to connect to? (mainnet) >>>
Do you want to continue to use node url 'https://rpc.tzbeta.net' for tezos-mainnet? (Yes/No) >>>
Enter your tezos-mainnet private key >>>
```

If connection is successful:

```
The quipuswap connector now uses wallet [pubKey] on tezos-mainnet
```


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `quipuswap`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.quipuswap.com>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/quipuswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/quipuswap.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/amm/estimateGas`

For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `quipuswap_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="quipuswap_tezos_mainnet",
        trading_pairs={"XTZ-USDT", "XTZ-DOGA"},
        order_amount_in_base=Decimal("1"),
    )
```