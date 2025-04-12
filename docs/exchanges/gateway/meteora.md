## 🛠 Connector Info

* **Chain**: [Solana](/gateway/chains/solana)
* **Available Networks**: `mainnet-beta`, `devnet`

| Connectors | Route Schemas | Notes | 
| --------- | ------ | ----- |
| `meteora/clmm` | Swap, CLMM | Supports Meteora DLMM pools |

See [Route Schemas](/gateway/schemas) for more information about the endpoints defined by each connector.

## ℹ️ Exchange Info

- **Website**: <https://app.meteora.ag>
- **DefiLlama**: <https://defillama.com/protocol/meteora>
- **DEXScreener**: <https://dexscreener.com/solana/meteora>
- **GeckoTerminal**: <https://www.geckoterminal.com/solana/meteora/pools>
- **SDK Docs**: <https://github.com/MeteoraAg/dlmm-sdk>

## 🔑 How to Connect

!!! warning
    This connection interface is likely to change in future releases as we continue to improve the Gateway architecture.

From inside the Hummingbot client, run `gateway connect meteora/clmm`:

```
Which Solana network do you want meteora/clmm to connect to? (mainnet-beta) >>> mainnet-beta
Enter your solana_mainnet-beta private key >>>>
```

If connection is successful:
```
The meteora/clmm connector now uses wallet [pubKey] on solana-mainnet-beta
```

## ⚙️ Connector Configs

* Connector Folder: [/gateway/src/connectors/meteora](https://github.com/hummingbot/gateway/tree/development/src/connectors/meteora)
* Config Schema: [/gateway/src/services/schema/meteora-schema.json](https://github.com/hummingbot/gateway/tree/development/src/services/schema/meteora-schema.json)

Upon Gateway setup, a default `meteora.yml` configuration file matching the schema is created in your `conf` folder based on the [template](https://github.com/hummingbot/gateway/tree/development/src/templates/meteora.yml) below:

```yaml
# how much the execution price is allowed to move unfavorably from the trade
# execution price. It uses a rational number for precision.
allowedSlippage: '1/100'

# predefined pools
pools:
  SOL-USDC: '5rCf1DM8LjKTw4YqhnoLcngyZYeNnQqztScTogYHAS6'
  TRUMP-USDC: '9d9mb8kooFfaD3SctgZtkxQypkshx6ezhbKio89ixyy2'
  JITOSOL-SOL: 'BoeMUkCLHchTD31HdXsbDExuZZfcUppSLpYtV3LZTH6U'
  USDT-USDC: 'ARwi1S4DaiTG5DX7S4M4ZsrXqpMD1MrTmbu9ue2tpmEq'
```

### Slippage

- Defines the price slippage allowed when quoting and executing a swap
- `allowedSlippage: '1/100'` means 1% price movement allowed

### Pool Addresses

- These addresses are required for Hummingbot strategies to interact with the correct pools when trading on CLMM exchanges
- Add your frequently used pairs to the configuration for easy access in strategies
- Format: `TOKEN1-TOKEN2: 'pool_address'`
- Example: `SOL-USDC: '5rCf1DM8LjKTw4YqhnoLcngyZYeNnQqztScTogYHAS6'`

### Strategy Type

When opening positions or adding liquidity to Meteora DLMM pools, you can specify a strategy type as an optional parameter. The default strategy is `SpotImbalanced` (0).

Available Meteora DLMM strategy types:
```
    SpotImBalanced = 0,
    CurveImBalanced = 1,
    BidAskImBalanced = 2,
    SpotBalanced = 3,
    CurveBalanced = 4,
    BidAskBalanced = 5
```
