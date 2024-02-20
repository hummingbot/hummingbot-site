## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** Hummingbot Foundation

Currently, CarbonDeFi is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component                                        | Status    | Notes |
| ------------------------------------------------ | --------- | ----- |
| [2️⃣ AMM Connector](#2-amm-connector)             | ✅        |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🔀 Spot Connector](#spot-connector)             | Not built |
| [🕯 AMM Data Feed](#amm-data-feed)                | Not built |

## ℹ️ Exchange Info

- **Website**: <https://carbondefi.xyz>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/carbon/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/carbon>
- **Fees**: <https://docs.carbondefi.xyz/carbon/introducing-carbon/fees-and-payments>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain      | Networks  |
| ---------- | --------- |
| `ethereum` | `mainnet` |

From inside the Hummingbot client, run `gateway connect carbonamm` in order to connect your wallet:

```
Which chain do you want carbonamm to connect to? (ethereum) >>>
Which network do you want carbonamm to connect to? (mainnet) >>>
Enter your ethereum-mainnet private key >>>>
```

If connection is successful (ethereum-mainnet):

```
The carbonamm connector now uses wallet [pubKey] on ethereum-mainnet
```

## 2️⃣ AMM Connector

_Integration to this DEX's swap pricing and execution endpoints_

- **ID**: `carbonamm`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.carbondefi.xyz/developer-guides/carbon-sdk>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/carbon>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/carbon.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/amm/estimateGas`

For more info, run Gateway and go to https:localhost:8080 in your browser to see detailed documentation for each endpoint.
