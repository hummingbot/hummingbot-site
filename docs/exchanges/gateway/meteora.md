# Meteora

!!! tip "Hackathon Sponsor"
    Meteora is a sponsor of the [Agent Builders Cup](../../release-notes/2.16.0.md#agent-builders-cup-hackathon), a Hummingbot strategy hackathon with a \$20,000 total prize pool. Build an agent that trades on Meteora and apply to the Meteora team at [botcamp.xyz/hackathons](https://www.botcamp.xyz/hackathons)!

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

## v2.18.0 Updates

- **Position listing errors**: `positions-owned` reports the RPC error when the read fails, instead of returning an empty list
- **Wide range cleanup**: when a wide DLMM open fails on its first liquidity chunk, Gateway closes the empty position it created

## CLMM Endpoints
*Integration to Meteora's Dynamic Liquidity Market Maker (DLMM)*

Since [v2.17.0](../../release-notes/2.17.0.md#unified-trading-route-surface), Gateway serves every connector through the unified `/trading` routes. Pass `connector=meteora` and `chainNetwork` (for example `solana-mainnet-beta`) with each request.

- `/trading/clmm/quote-swap`
- `/trading/clmm/execute-swap`
- `/trading/clmm/fetch-pools`
- `/trading/clmm/pool-info`
- `/trading/clmm/position-info`
- `/trading/clmm/positions-owned`
- `/trading/clmm/quote-liquidity`
- `/trading/clmm/open`
- `/trading/clmm/close`
- `/trading/clmm/add`
- `/trading/clmm/remove`
- `/trading/clmm/collect-fees`

For more info, run Gateway in development mode and go to <http://localhost:15888> in your browser to see detailed documentation for each endpoint.