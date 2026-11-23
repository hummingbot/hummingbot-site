# Uniswap

## 🛠 Connector Info

- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/uniswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/development/src/templates/uniswap.yml>

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [Router Connector](#router-endpoints) | ✅ | Universal Router |
| [AMM Connector](#amm-endpoints) | ✅ | V2 Pools |
| [CLMM Connector](#clmm-endpoints) | ✅ | V3 Pools |

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
| `ethereum` | `mainnet`, `arbitrum`, `optimism`, `base`, `polygon`, `avalanche`, `bsc`, `celo`, `unichain`, `robinhoodchain`

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

## v2.18.0 Updates

- **Close position gas**: closing a CLMM position estimates its gas and adds a margin, instead of using a fixed 400,000 that some positions exceeded. If the contract would reject the close, Gateway answers `400` with the contract's reason. If the node cannot be reached, it answers `503`. In both cases nothing is sent (PR [#709](https://github.com/hummingbot/gateway/pull/709))

## Router Endpoints
*Integration to Uniswap's Universal Router for optimal trade execution*

Since [v2.17.0](../../release-notes/2.17.0.md#unified-trading-route-surface), Gateway serves every connector through the unified `/trading` routes. Pass `connector=uniswap` and `chainNetwork` (for example `ethereum-mainnet`) with each request.

- `/trading/router/quote-swap`
- `/trading/router/execute-quote`
- `/trading/router/execute-swap`

## AMM Endpoints
*Integration to Uniswap V2 classic AMM pools*

- `/trading/amm/quote-swap`
- `/trading/amm/execute-swap`
- `/trading/amm/pool-info`
- `/trading/amm/position-info`
- `/trading/amm/quote-liquidity`
- `/trading/amm/add`
- `/trading/amm/remove`

## CLMM Endpoints
*Integration to Uniswap V3 concentrated liquidity pools*

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