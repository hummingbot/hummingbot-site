# PancakeSwap

## 🛠 Connector Info

- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/pancakeswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/development/src/templates/pancakeswap.yml>

| Component | Status | Notes |
| --------- | ------ | ----- |
| [Router Connector](#router-connector) | ✅ | Smart Router |
| [AMM Connector](#amm-connector) | ✅ | V2 Pools |
| [CLMM Connector](#clmm-connector) | ✅ | V3 Pools |

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

The connector includes automatic WSOL (Wrapped SOL) handling and full support for Token-2022 standard tokens and NFT position tracking.

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

- `/connectors/pancakeswap/router/quote-swap`
- `/connectors/pancakeswap/router/execute-quote`
- `/connectors/pancakeswap/router/execute-swap`

## AMM Endpoints
*Integration to PancakeSwap V2 classic AMM pools*

- `/connectors/pancakeswap/amm/quote-swap`
- `/connectors/pancakeswap/amm/execute-swap`
- `/connectors/pancakeswap/amm/pool-info`
- `/connectors/pancakeswap/amm/position-info`
- `/connectors/pancakeswap/amm/quote-liquidity`
- `/connectors/pancakeswap/amm/add-liquidity`
- `/connectors/pancakeswap/amm/remove-liquidity`

## CLMM Endpoints
*Integration to PancakeSwap V3 concentrated liquidity pools*

- `/connectors/pancakeswap/clmm/quote-swap`
- `/connectors/pancakeswap/clmm/execute-swap`
- `/connectors/pancakeswap/clmm/pool-info`
- `/connectors/pancakeswap/clmm/position-info`
- `/connectors/pancakeswap/clmm/positions-owned`
- `/connectors/pancakeswap/clmm/quote-position`
- `/connectors/pancakeswap/clmm/open-position`
- `/connectors/pancakeswap/clmm/close-position`
- `/connectors/pancakeswap/clmm/add-liquidity`
- `/connectors/pancakeswap/clmm/remove-liquidity`
- `/connectors/pancakeswap/clmm/collect-fees`

For more info, run Gateway in development mode and go to <http://localhost:15888> in your browser to see detailed documentation for each endpoint.