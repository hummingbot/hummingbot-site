# Raydium

## 🛠 Connector Info

- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/raydium>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/development/src/templates/raydium.yml>

| Component | Status | Notes | 
| --------- | ------ | ----- |
| AMM Connector | ✅ | Standard V2 Pools |
| CLMM Connector | ✅ | Concentrated Liquidity |

## ℹ️ Exchange Info

- **Website**: <https://raydium.io>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/raydium/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/raydium>
- **Fees**: <https://docs.raydium.io/raydium/trading/trade-and-swap>
- **API Docs**: <https://docs.raydium.io/raydium/trading/trade-and-swap>

## 🔑 How to Connect

Raydium operates on Solana networks.

| Chain | Networks | 
| ----- | -------- |
| `solana` | `mainnet-beta`, `devnet` |

See [Gateway Connect](../../gateway/commands.md#gateway-connect) for instructions on connecting your wallet to Gateway.

## Configuration

Configure Raydium settings in `/conf/connectors/raydium.yml`.

Below are the Raydium configuration parameters and their default values:
```yaml
# Global settings for Raydium
# Default slippage percentage for swaps (e.g., 1 = 1%)
slippagePct: 1
```

## v2.18.0 Updates

- **On-chain pool data**: AMM and CPMM pool info, quotes, and positions are read from chain instead of the Raydium API. An AMM quote makes 6 to 8 RPC calls, so use a dedicated [RPC provider](../../gateway/rpc.md) for frequent quoting.
- **Price impact**: AMM `priceImpactPct` was about 100x too high on SELL and wrong on BUY. Both are fixed. CPMM pools still report 0.
- **Exact liquidity**: CLMM `liquidity` is returned as a decimal string, so large values are no longer rounded.
- **Add liquidity (AMM v4)**: the side that does not limit the deposit may spend up to `slippagePct` more than the amount you pass.

See the [v2.18.0 release notes](../../release-notes/2.18.0.md#connector-updates_1) for the PRs.

## AMM Endpoints
*Integration to Raydium's Standard AMM pools*

Since [v2.17.0](../../release-notes/2.17.0.md#unified-trading-route-surface), Gateway serves every connector through the unified `/trading` routes. Pass `connector=raydium` and `chainNetwork` (for example `solana-mainnet-beta`) with each request.

- `/trading/amm/quote-swap`
- `/trading/amm/execute-swap`
- `/trading/amm/pool-info`
- `/trading/amm/position-info`
- `/trading/amm/quote-liquidity`
- `/trading/amm/add`
- `/trading/amm/remove`

## CLMM Endpoints
*Integration to Raydium's Concentrated Liquidity pools*

- `/trading/clmm/quote-swap`
- `/trading/clmm/execute-swap`
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