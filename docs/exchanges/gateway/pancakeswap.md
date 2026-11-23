# PancakeSwap

## 🛠 Connector Info

- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/pancakeswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/development/src/templates/pancakeswap.yml>

| Component | Status | Notes |
| --------- | ------ | ----- |
| [Router Connector](#router-endpoints) | ✅ | Smart Router |
| [AMM Connector](#amm-endpoints) | ✅ | V2 Pools |
| [CLMM Connector](#clmm-endpoints) | ✅ | V3 Pools |

## ℹ️ Exchange Info

- **Website (EVM)**: <https://pancakeswap.finance>
- **Website (Solana)**: <https://solana.pancakeswap.finance/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/pancakeswap/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/pancakeswap>
- **Fees**: <https://docs.pancakeswap.finance/products/pancakeswap-exchange/pancakeswap-pools#trading-fees>
- **API Docs**: <https://developer.pancakeswap.finance/>

## 🔑 How to Connect

PancakeSwap operates on multiple blockchain networks including EVM-compatible chains and Solana.

| Chain | Networks |
| ----- | -------- |
| `ethereum` | `bsc`, `mainnet`, `arbitrum`, `base` |
| `solana` | `mainnet-beta`, `devnet` |

### EVM Chains

For EVM-based networks (BNB Chain, Ethereum, Arbitrum, Base), see [Gateway Connect](../../gateway/commands.md#gateway-connect) for instructions on connecting your wallet to Gateway.

### Solana

For Solana networks, you'll need to configure a Solana wallet. PancakeSwap on Solana uses the same concentrated liquidity (CLMM) technology as V3 pools on EVM chains.

**To connect your Solana wallet:**

1. Run the Gateway connect command:
```
gateway connect solana
```

2. Follow the prompts to either:
   - Import an existing wallet using your private key
   - Generate a new Solana wallet

3. Select your network:
   - `mainnet-beta` for production trading
   - `devnet` for testing

The connector includes automatic WSOL (Wrapped SOL) handling and full support for Token-2022 standard tokens and NFT position tracking. On Solana, use `connector=pancakeswap-sol`.

**v2.18.0 Updates:**

- **Withdrawals without a wrapped-SOL account**: removing liquidity, collecting fees, and closing a position no longer fail when the wallet has no wrapped-SOL token account. Gateway creates the token accounts it needs in the same transaction (PR [#745](https://github.com/hummingbot/gateway/pull/745))
- **Preflight and rebroadcast**: PancakeSwap transactions on Solana go through the same [send path](../../gateway/chains.md#sending-transactions) as every other Solana connector

## Configuration

Configure PancakeSwap settings in `/conf/connectors/pancakeswap.yml`.

Below are the PancakeSwap configuration parameters and their default values:
```yaml
# Global settings for PancakeSwap
# Default slippage percentage for swaps (2%)
slippagePct: 2

# For each swap, the maximum number of hops to consider
maximumHops: 4
```

## Router Endpoints
*Integration to PancakeSwap's Smart Router for optimal trade execution*

Since [v2.17.0](../../release-notes/2.17.0.md#unified-trading-route-surface), Gateway serves every connector through the unified `/trading` routes. Pass `connector=pancakeswap` and `chainNetwork` (for example `ethereum-mainnet`) with each request.

- `/trading/router/quote-swap`
- `/trading/router/execute-quote`
- `/trading/router/execute-swap`

## AMM Endpoints
*Integration to PancakeSwap V2 classic AMM pools*

- `/trading/amm/quote-swap`
- `/trading/amm/execute-swap`
- `/trading/amm/pool-info`
- `/trading/amm/position-info`
- `/trading/amm/quote-liquidity`
- `/trading/amm/add`
- `/trading/amm/remove`

## CLMM Endpoints
*Integration to PancakeSwap V3 concentrated liquidity pools*

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