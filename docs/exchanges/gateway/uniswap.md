# Uniswap

## 🛠 Connector Info

- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/uniswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/development/src/templates/uniswap.yml>

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [Router Connector](#router-connector) | ✅ | Universal Router |
| [AMM Connector](#2-amm-connector) | ✅ | V2 Pools |
| [CLMM Connector](#3-clmm-connector) | ✅ | V3 Pools |

## ℹ️ Exchange Info

- **Website**: <https://app.uniswap.org>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/uniswap-v3/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/uniswap>
- **Fees**: <https://docs.uniswap.org/protocol/V2/concepts/advanced-topics/fees>
- **API Docs**: <https://docs.uniswap.org/sdk/v3/overview>

## 🔑 How to Connect

Uniswap operates on Ethereum and EVM-compatible networks.

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `mainnet`, `arbitrum`, `optimism`, `base`, `polygon`, `avalanche`, `bsc`, `celo`

See [Gateway Connect](../../gateway/commands.md#gateway-connect) for instructions on connecting your wallet to Gateway.

## Configuration

Configure Uniswap settings in `/conf/connectors/uniswap.yml`.

Below are the Uniswap configuration parameters and their default values:
```yaml
# Global settings for Uniswap
# Default slippage percentage for swaps (2%)
slippagePct: 2

# For each swap, the maximum number of hops to consider
maximumHops: 4
```

## Router Endpoints
*Integration to Uniswap's Universal Router for optimal trade execution*

- `/connectors/uniswap/router/quote-swap`
- `/connectors/uniswap/router/execute-quote`
- `/connectors/uniswap/router/execute-swap`

## AMM Endpoints
*Integration to Uniswap V2 classic AMM pools*

- `/connectors/uniswap/amm/quote-swap`
- `/connectors/uniswap/amm/execute-swap`
- `/connectors/uniswap/amm/pool-info`
- `/connectors/uniswap/amm/position-info`
- `/connectors/uniswap/amm/quote-liquidity`
- `/connectors/uniswap/amm/add-liquidity`
- `/connectors/uniswap/amm/remove-liquidity`

## CLMM Endpoints
*Integration to Uniswap V3 concentrated liquidity pools*

- `/connectors/uniswap/clmm/quote-swap`
- `/connectors/uniswap/clmm/execute-swap`
- `/connectors/uniswap/clmm/pool-info`
- `/connectors/uniswap/clmm/position-info`
- `/connectors/uniswap/clmm/positions-owned`
- `/connectors/uniswap/clmm/quote-position`
- `/connectors/uniswap/clmm/open-position`
- `/connectors/uniswap/clmm/close-position`
- `/connectors/uniswap/clmm/add-liquidity`
- `/connectors/uniswap/clmm/remove-liquidity`
- `/connectors/uniswap/clmm/collect-fees`

For more info, run Gateway in development mode and go to <http://localhost:15888> in your browser to see detailed documentation for each endpoint.