
!!! note
    This connector is available in **Gateway Legacy (v2.2)**. For installation instructions, refer to the [Installation Guide](../../gateway/legacy/installation.md).


## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Automated Market Maker (**AMM**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | Not built |

## ℹ️ Exchange Info

- **Website**: [Curve.fi](https://curve.fi)
- **API Docs**: [Curve Documentation](https://docs.curve.fi)
- **Fees**: As of the latest update, each trade incurs a 0.04% trading fee for liquidity providers.


## 🔑 How to Connect

Create a wallet on one of the supported networks below:


| Chain | Networks | 
| ----- | -------- |
| `avalanche` | `avalanche` 
| `ethereum` | `mainnet`, `arbitrum`, `optimism`
| `polygon` | `mainnet` 
|

From inside the Hummingbot client, run `gateway connect curve` in order to connect your wallet:
 
```
Which chain do you want openocean to connect to? (avalanche, ethereum, polygon) >>>
Which network do you want openocean to connect to? (mainnet) >>>
Enter your polygon-mainnet private key >>>>
```

If connection is successful:

```
The curve connector now uses wallet [pubKey] on polygon-mainnet
```


## 🔀 AMM Connector
*Integration to AMM liquidity pools and swapping functionalities*

- **ID**: `curve`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: [Curve API Documentation](https://docs.curve.fi)
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/curve>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/curve.yml>

### Endpoints

`/amm/price`
`/amm/trade`

For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.