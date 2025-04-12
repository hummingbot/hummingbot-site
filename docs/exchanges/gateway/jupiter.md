# Jupiter

## 🛠 Connector Info

* **Chain**: [Solana](/gateway/chains/solana)
* **Available Networks**: `mainnet-beta`, `devnet`

| Connectors | Route Schemas | Notes | 
| --------- | ------ | ----- |
| `jupiter` | Swap | Jupiter DEX aggregator |

See [Route Schemas](/gateway/schemas) for more information about the endpoints defined by each connector.

## ℹ️ Exchange Info

- **Website**: <https://jup.ag>
- **DefiLlama**: <https://defillama.com/protocol/jupiter>
- **SDK Docs**: <https://dev.jup.ag/docs/swap-api/get-quote>

## 🔑 How to Connect

!!! warning
    This connection interface is likely to change in future releases as we continue to improve the Gateway architecture.

From inside the Hummingbot client, run `gateway connect jupiter`:

```
Which Solana network do you want jupiter to connect to? (mainnet-beta) >>> mainnet-beta
Enter your solana_mainnet-beta private key >>>>
```

If connection is successful:
```
The jupiter connector now uses wallet [pubKey] on solana-mainnet-beta
```

## ⚙️ Connector Configs

* Connector Folder: [/gateway/src/connectors/jupiter](https://github.com/hummingbot/gateway/tree/development/src/connectors/jupiter)
* Config Schema: [/gateway/src/services/schemas/jupiter-schema.json](https://github.com/hummingbot/gateway/tree/development/src/templates/jupiter.yml)

Upon Gateway setup, a default `jupiter.yml` configuration file matching the schema is created in your `conf` folder based on the [template](https://github.com/hummingbot/gateway/tree/development/src/templates/jupiter.yml) below:

```yaml
# how much the execution price is allowed to move unfavorably from the trade
# execution price. It uses a rational number for precision.
allowedSlippage: '1/100'

# Priority level for swap transaction processing
# Options: medium, high, veryHigh
priorityLevel: 'veryHigh'
```

### Slippage

- Defines the price slippage allowed when quoting and executing a swap
- `allowedSlippage: '1/100'` means 1% price movement allowed

### Priority Level

- Controls the transaction priority when executing swaps on Jupiter, subject to minimum and maximum fees defined in the [Solana](/gateway/chains/solana) config file
- Available options: `medium` (standard priority), `high` (faster execution), and `veryHigh` (highest priority)
