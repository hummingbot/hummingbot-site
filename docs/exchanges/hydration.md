!!! note
This connector has been upgraded to the **Gateway New (v2.5+)** standard and available in the current `development` branch. For installation instructions, refer to the [Installation & Setup](../../gateway/installation.md) page.

## ℹ️ Exchange Info

- **Fees**: <https://docs.hydration.net/products/trading/fees/>
- **Website**: <https://hydration.net/>
- **SDK Docs**: <https://github.com/galacticcouncil/sdk>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/hydration>
- **DefiLlama**: <https://defillama.com/protocol/hydration>
- **DEXScreener**: <https://dexscreener.com/polkadot/hydration>


| Connectors      | Route Schemas | Notes                                                     | 
|-----------------|---------------|-----------------------------------------------------------|
| `hydration/amm` | SWAP, AMM     | Supports Hydration Standard AMM pools and swap operations |


See [Route Schemas](/gateway/schemas) for more information about the endpoints defined by each connector.


| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |


## 🛠 Connector Info

* **Chain**: [Polkadot](/gateway/chains/polkadot)
* **Available Networks**: `mainnet`
* **Exchange Type**: Decentralized Exchange (DEX)
* **Market Type**: Automatic Market Maker (AMM)


## 🔑 How to Connect

| Chain | Networks | 
| ----- | -------- |
| `polkadot` | `mainnet`

!!! warning
This connection interface is likely to change in future releases as we continue to improve the Gateway architecture.

From inside the Hummingbot client, run `gateway connect hydration/amm` in order to connect your wallet:

```
Which chain do you want hydration to connect to? (polkadot) >>> polkadot
Which network do you want hydration to connect to? (mainnet) >>> mainnet
Enter your polkadot-mainnet mnemonic >>>>
```

If connection is successful:
```
The hydration connector now uses wallet [pubKey] on polkadot-mainnet
```


## ⚙️ Connector Configs
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `hydration`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://apidocs.bsx.fi/Hydration>
- **Folder**: [/gateway/src/connectors/hydration](https://github.com/hummingbot/gateway/tree/development/src/connectors/hydration)
- **Default Configs**: [/gateway/src/templates/hydration.yml](https://github.com/hummingbot/gateway/tree/development/src/templates/hydration.yml)
- **Config Schema**: [/gateway/src/services/schema/hydration-schema.json](https://github.com/hummingbot/gateway/tree/development/src/services/schema/hydration-schema.json)

Upon Gateway setup, a default `hydration.yml` configuration file matching the schema is created in your `conf` folder based on the [template](https://github.com/hummingbot/gateway/tree/development/src/templates/hydration.yml) below:

```yaml
allowedSlippage: '1/100'

```
### Slippage

- Defines the price slippage allowed when quoting and executing a swap
- `allowedSlippage: '1/100'` means 1% price movement allowed

### Pool Addresses

- These addresses are required for Hummingbot strategies to interact with the correct pools when trading on AMM
- Add your frequently used pairs to the configuration for easy access in strategies
- Format: `TOKEN1-TOKEN2: 'pool_address'`
- Example: `HDX-USDT: '7JRrXBpB1K2JUapwojTYLZPoMvLPMQUDyiEyJb5hj7wad1of'`
