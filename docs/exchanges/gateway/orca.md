# Orca

## 🛠 Connector Info

  - **Folder**: [https://github.com/hummingbot/gateway/tree/development/src/connectors/orca](https://github.com/hummingbot/gateway/tree/development/src/connectors/orca)
  - **Default Configs**: [https://github.com/hummingbot/gateway/blob/development/src/templates/orca.yml](https://github.com/hummingbot/gateway/blob/development/src/templates/orca.yml)

| Component | Status | Notes |
| --------- | ------ | ----- |
| [AMM Connector](https://www.google.com/search?q=%23amm-connector) | ✅ | Legacy Pools |
| [CLMM Connector](https://www.google.com/search?q=%23clmm-connector) | ✅ | Whirlpools (V3) |

## ℹ️ Exchange Info

  - **Website**: [https://www.orca.so/](https://www.orca.so/)
  - **CoinMarketCap**: [https://coinmarketcap.com/exchanges/orca/](https://coinmarketcap.com/exchanges/orca/)
  - **CoinGecko**: [https://www.coingecko.com/en/exchanges/orca](https://www.coingecko.com/en/exchanges/orca)
  - **Fees**: [https://docs.orca.so/reference/fees](https://www.google.com/search?q=https://docs.orca.so/reference/fees)
  - **API Docs**: [https://docs.orca.so/](https://docs.orca.so/)

## 🔑 How to Connect

Orca operates exclusively on the Solana blockchain. To transact on Orca, you must configure a Solana wallet within Gateway.

| Chain | Networks |
| ----- | -------- |
| `solana` | `mainnet-beta`, `devnet` |

### Solana

Orca's primary liquidity pools are "Whirlpools," which utilize concentrated liquidity (CLMM) technology similar to V3 pools on EVM chains.

**To connect your Solana wallet:**

1.  Run the Gateway connect command:


```bash
gateway connect solana
```

2.  Follow the prompts to either:

      - Import an existing wallet using your private key
      - Generate a new Solana wallet

3.  Select your network:

      - `mainnet-beta` for production trading
      - `devnet` for testing

The connector includes automatic WSOL (Wrapped SOL) handling and support for the Token-2022 standard.

## Configuration

Configure Orca settings in `/conf/connectors/orca.yml`.

Below are the Orca configuration parameters and their default values:

```yaml
# Global settings for Orca
# Default slippage percentage for swaps (2%)
slippagePct: 2

# For each swap, the maximum number of hops to consider
maximumHops: 4
```

## CLMM Endpoints

*Integration to Orca Whirlpools (concentrated liquidity)*

  - `/connectors/orca/clmm/quote-swap`
  - `/connectors/orca/clmm/execute-swap`
  - `/connectors/orca/clmm/pool-info`
  - `/connectors/orca/clmm/position-info`
  - `/connectors/orca/clmm/positions-owned`
  - `/connectors/orca/clmm/quote-position`
  - `/connectors/orca/clmm/open-position`
  - `/connectors/orca/clmm/close-position`
  - `/connectors/orca/clmm/add-liquidity`
  - `/connectors/orca/clmm/remove-liquidity`
  - `/connectors/orca/clmm/collect-fees`

For more info, run Gateway in development mode and go to [http://localhost:15888](https://www.google.com/search?q=http://localhost:15888) in your browser to see detailed documentation for each endpoint.
