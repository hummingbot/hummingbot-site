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

## AMM Endpoints
*Integration to Raydium's Standard AMM pools*

- `/connectors/raydium/amm/quote-swap`
- `/connectors/raydium/amm/execute-swap`
- `/connectors/raydium/amm/pool-info`
- `/connectors/raydium/amm/position-info`
- `/connectors/raydium/amm/quote-liquidity`
- `/connectors/raydium/amm/add-liquidity`
- `/connectors/raydium/amm/remove-liquidity`

## CLMM Endpoints
*Integration to Raydium's Concentrated Liquidity pools*

- `/connectors/raydium/clmm/quote-swap`
- `/connectors/raydium/clmm/execute-swap`
- `/connectors/raydium/clmm/pool-info`
- `/connectors/raydium/clmm/position-info`
- `/connectors/raydium/clmm/positions-owned`
- `/connectors/raydium/clmm/quote-position`
- `/connectors/raydium/clmm/open-position`
- `/connectors/raydium/clmm/close-position`
- `/connectors/raydium/clmm/add-liquidity`
- `/connectors/raydium/clmm/remove-liquidity`
- `/connectors/raydium/clmm/collect-fees`

For more info, run Gateway in development mode and go to <http://localhost:15888> in your browser to see detailed documentation for each endpoint.