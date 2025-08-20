# Meteora

## 🛠 Connector Info

- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/meteora>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/development/src/templates/meteora.yml>

| Component | Status | Notes | 
| --------- | ------ | ----- |
| CLMM Connector | ✅ | Dynamic Liquidity Market Maker (DLMM) |

## ℹ️ Exchange Info

- **Website**: <https://meteora.ag>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/meteora/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/meteora>
- **Fees**: <https://docs.meteora.ag/dlmm/fees>
- **API Docs**: <https://docs.meteora.ag/dlmm/overview>

## 🔑 How to Connect

Meteora operates on Solana networks.

| Chain | Networks | 
| ----- | -------- |
| `solana` | `mainnet-beta`, `devnet` |

See [Gateway Connect](../../gateway/commands.md#gateway-connect) for instructions on connecting your wallet to Gateway.

## Configuration

Configure Meteora settings in `/conf/connectors/meteora.yml`.

Below are the Meteora configuration parameters and their default values:
```yaml
# Global settings for Meteora
# Default slippage percentage for swaps (e.g., 1 = 1%)
slippagePct: 1

# default DLMM strategy type for positions
# SpotImBalanced = 0,
# CurveImBalanced = 1,
# BidAskImBalanced = 2,
# SpotBalanced = 3,
# CurveBalanced = 4,
# BidAskBalanced = 5
strategyType: 0
```

## CLMM Endpoints
*Integration to Meteora's Dynamic Liquidity Market Maker (DLMM)*

- `/connectors/meteora/clmm/quote-swap`
- `/connectors/meteora/clmm/execute-swap`
- `/connectors/meteora/clmm/fetch-pools`
- `/connectors/meteora/clmm/pool-info`
- `/connectors/meteora/clmm/position-info`
- `/connectors/meteora/clmm/positions-owned`
- `/connectors/meteora/clmm/quote-position`
- `/connectors/meteora/clmm/open-position`
- `/connectors/meteora/clmm/close-position`
- `/connectors/meteora/clmm/add-liquidity`
- `/connectors/meteora/clmm/remove-liquidity`
- `/connectors/meteora/clmm/collect-fees`

For more info, run Gateway in development mode and go to <http://localhost:15888> in your browser to see detailed documentation for each endpoint.