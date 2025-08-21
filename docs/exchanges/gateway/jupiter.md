# Jupiter

## 🛠 Connector Info

- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/jupiter>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/development/src/templates/jupiter.yml>

| Component | Status | Notes | 
| --------- | ------ | ----- |
| Router Connector | ✅ | DEX Aggregator |

## ℹ️ Exchange Info

- **Website**: <https://jup.ag>
- **API Docs**: <https://station.jup.ag/docs/apis/swap-api>
- **Chain**: Solana
- **Networks**: `mainnet-beta`, `devnet`

## 🔑 How to Connect

Jupiter operates on Solana networks.

| Chain | Networks | 
| ----- | -------- |
| `solana` | `mainnet-beta`, `devnet` |

See [Gateway Connect](../../gateway/commands.md#gateway-connect) for instructions on connecting your wallet to Gateway.

## Configuration

Configure Jupiter settings in `/conf/connectors/jupiter.yml`.

Below are the Jupiter configuration parameters and their default values:
```yaml
# Default slippage percentage for swaps (as a decimal, e.g., 1 = 1%)
slippagePct: 1

# Priority level for swap transaction processing
# Options: medium, high, veryHigh
priorityLevel: 'veryHigh'

# Maximum priority fee in lamports (for dynamic priority fees)
# Used when priorityLevel is set and no explicit priorityFeeLamports is provided
maxLamports: 1000000

# Restrict routing to only go through 1 market
# Default: false (allows multi-hop routes for better prices)
onlyDirectRoutes: false

# Restrict routing through highly liquid intermediate tokens only
# Default: true (for better price and stability)
restrictIntermediateTokens: true

# Jupiter API key (optional)
# For free tier, leave empty (uses https://lite-api.jup.ag)
# For paid plans, generate key at https://portal.jup.ag (uses https://api.jup.ag)
apiKey: ''
```

## Router Endpoints
*Jupiter DEX aggregator for optimal swap routing across Solana*

- `/connectors/jupiter/router/quote-swap`
- `/connectors/jupiter/router/execute-quote`
- `/connectors/jupiter/router/execute-swap`

For more info, run Gateway in development mode and go to <http://localhost:15888> in your browser to see detailed documentation for each endpoint.