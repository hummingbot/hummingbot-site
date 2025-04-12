!!! note
    This connector has been upgraded to the **Gateway New (v2.5+)** standard and available in the current `development` branch. For installation instructions, refer to the [Installation & Setup](../../gateway/installation.md) page.
    
## 🛠 Connector Info

* **Chain**: [Solana](/gateway/chains/solana)
* **Available Networks**: `mainnet-beta`, `devnet`

| Connectors | Route Schemas | Notes | 
| --------- | ------ | ----- |
| `raydium/clmm` | Swap, CLMM | Supports Raydium Concentrated pools |
| `raydium/amm` | Swap, AMM | Supports Raydium Standard AMM and CPMM pools |

See [Route Schemas](/gateway/schemas) for more information about the endpoints defined by each connector.

## ℹ️ Exchange Info

- **Website**: <https://raydium.io>
- **DefiLlama**: <https://defillama.com/protocol/raydium>
- **DEXScreener**: <https://dexscreener.com/solana/raydium>
- **GeckoTerminal**: <https://www.geckoterminal.com/solana/raydium/pools>
- **SDK Docs**: <https://github.com/raydium-io/raydium-sdk-V2>

## 🔑 How to Connect

!!! warning
    This connection interface is likely to change in future releases as we continue to improve the Gateway architecture.

From inside the Hummingbot client, run `gateway connect raydium/clmm` or `gateway connect raydium/amm`:

```
Which Solana network do you want raydium/clmm to connect to? (mainnet-beta) >>> mainnet-beta
Enter your solana_mainnet-beta private key >>>>
```

If connection is successful:
```
The raydium/clmm connector now uses wallet [pubKey] on solana-mainnet-beta
```

## ⚙️ Connector Configs

* Connector Folder: [/gateway/src/connectors/raydium](https://github.com/hummingbot/gateway/tree/development/src/connectors/raydium)
* Config Schema: [/gateway/src/services/schema/raydium-schema.json](https://github.com/hummingbot/gateway/tree/development/src/services/schema/raydium-schema.json)

Upon Gateway setup, a default `raydium.yml` configuration file matching the schema is created in your `conf` folder based on the [template](https://github.com/hummingbot/gateway/tree/development/src/templates/raydium.yml) below:

```yaml
# AMM (Automated Market Maker) settings
amm:
  allowedSlippage: '1/100'  # 1% maximum price movement
  pools:
    RAY-SOL: 'AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA'
    SOL-USDC: '58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2'
    RAY-USDC: '6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'
    WIF-SOL: 'EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx'
    POPCAT-SOL: 'FRhB8L7Y9Qq41qZXYLtC2nw8An1RJfLLxRF2x9RwLLMo'
    SOL-TRUMP: 'HKuJrP5tYQLbEUdjKwjgnHs2957QKjR2iWhJKTtMa1xs'
    LAYER-USDC: 'G6drsaPCR3pxsEmSTAc81kW1EL3kFAFwtSAkzUZXmgH3'

# CLMM (Concentrated Liquidity) settings
clmm:
  allowedSlippage: '1/100'  # 1% maximum price movement
  pools:
    SOL-USDC: '3ucNos4NbumPLZNWztqGHNFFgkHeRMBQAVemeeomsUxv'
    RAY-USDC: '61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht'
    SOL-USDT: '3nMFwZXwY1s1M5s8vYAHqd4wGs4iSxXE4LRoUMMYqEgF'
    SOL-RAY: '2AXXcN6oN9bBT5owwmTH53C7QHUXvhLeu718Kqt8rvY2'
    USDC-USDT: 'BZtgQEyS6eXUXicYPHecYQ7PybqodXQMvkjUbP4R8mUU'
    SOL-JITOSOL: '2uoKbPEidR7KAMYtY4x7xdkHXWqYib5k4CutJauSL3Mc'
    SOL-TRUMP: 'GQsPr4RJk9AZkkfWHud7v4MtotcxhaYzZHdsPCg9vNvW'
    LAYER-USDC: 'G6drsaPCR3pxsEmSTAc81kW1EL3kFAFwtSAkzUZXmgH3'
    TRUMP-USDC: '7XzVsjqTebULfkUofTDH5gDdZDmxacPmPuTfHa1n9kuh'
```

### Slippage

 - Defines the price slippage allowed when quoting and executing a swap
 - `allowedSlippage: '1/100'` means 1% price movement allowed

### Pool Addresses

 - These addresses are required for Hummingbot strategies to interact with the correct pools when trading on AMM and CLMM exchanges
 - Add your frequently used pairs to the configuration for easy access in strategies
 - Format: `TOKEN1-TOKEN2: 'pool_address'`
 - Example: `SOL-USDC: '3ucNos4NbumPLZNWztqGHNFFgkHeRMBQAVemeeomsUxv'`