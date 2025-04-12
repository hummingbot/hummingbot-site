!!! note
    This chain has been upgraded to the **Gateway New (v2.5+)** architecture. For installation instructions, refer to the [Installation Guide](../installation.md).

## ℹ️ Chain Info

* **Website**: <https://solana.com/>
* **Block Explorer**: <https://solscan.io/>
* **CoinMarketCap**: <https://coinmarketcap.com/currencies/solana/>
* **CoinGecko**: <https://www.coingecko.com/en/coins/solana>
* **DefiLlama**: <https://defillama.com/chain/Solana>

## ⚙️ Chain Configs

* **Chain Folder**: [/gateway/src/chains/solana](https://github.com/hummingbot/gateway/tree/development/src/chains/solana)
* **Config Schema**: [/gateway/src/services/schema/solana-schema.json](https://github.com/hummingbot/gateway/tree/development/src/services/schema/solana-schema.json)

Upon Gateway setup, a default `solana.yml` configuration file matching the schema is created in your `conf` folder based on the [template](https://github.com/hummingbot/gateway/tree/development/src/templates/solana.yml) below:

```yaml
networks:
  mainnet-beta:
    nodeURL: https://api.mainnet-beta.solana.com
    tokenListType: FILE
    tokenListSource: /home/gateway/conf/lists/solana.json
    nativeCurrencySymbol: SOL
  devnet:
    nodeURL: https://api.devnet.solana.com
    tokenListType: FILE
    tokenListSource: /home/gateway/conf/lists/solana-devnet.json
    nativeCurrencySymbol: SOL

# Default compute units for a transaction used to estimate gasPrice
defaultComputeUnits: 200000

# Floor percentile of recent priority fee samples used to estimate gasPrice for a transaction
basePriorityFeePct: 90

# Multiplier for increasing priority fee on retry
priorityFeeMultiplier: 2

# Maximum priority fee in SOL
maxPriorityFee: 0.01

# Minimum priority fee in SOL
minPriorityFee: 0.0001

# Retry interval in milliseconds
retryIntervalMs: 500

# Number of retry attempts
retryCount: 10
```

### Networks

The Solana integration supports multiple networks, each with its own configuration for Node RPC endpoint, token list source and format, and native currency symbol.

- `nodeURL`: The RPC endpoint for the Solana mainnet
- `tokenListType`: How token information is sourced (FILE or URL)
- `tokenListSource`: Location of the token list file or URL
- `nativeCurrencySymbol`: The native currency symbol (SOL)

!!! warning "RPC Rate Limits"
    The default Solana mainnet RPC endpoint (`https://api.mainnet-beta.solana.com`) is heavily rate-limited, so we **strongly recommend** using a dedicated RPC provider such as [Helius](https://helius.dev/), [Triton](https://triton.one/), [QuickNode](https://www.quicknode.com/chains/sol), or [Alchemy](https://www.alchemy.com/solana) for production use to ensure more reliable transaction processing and higher throughput.

### Token Lists

Token lists provide essential mapping between token symbols and their on-chain address and decimals. 

You can customize the default token list for each network by editing the specified file located in [`conf/lists/`](https://github.com/hummingbot/gateway/blob/main/src/templates/lists/).

### Priority Fees

- `defaultComputeUnits`: The base compute budget allocated for transaction gas estimation if not defined by the transaction endpoint.
- `basePriorityFeePct`: Sets the percentile of recent priority fees to use as a baseline. A higher value (e.g., 90) means you'll pay more to ensure faster transaction processing, while a lower value (e.g., 50) may result in slower processing but lower costs.
- `priorityFeeMultiplier`: Controls how much to increase the priority fee each cycle. A multiplier of 2 means the fee doubles after `retryCount` attempts.
- `maxPriorityFee`: The maximum priority fee in SOL you're willing to pay. This prevents spending too much on priority fees during high network congestion.
- `minPriorityFee`: The minimum priority fee in SOL (1 SOL = 1e9 lamports) to pay for any transaction.
- `retryIntervalMs`: Determines how long to wait between retry attempts when a transaction has not yet been confirmed. Set this to a value (e.g., 500ms) that gives the node enough time to process previous attempts.
- `retryCount`: Specifies the maximum number of times to retry a transaction before increasing priority fees.

