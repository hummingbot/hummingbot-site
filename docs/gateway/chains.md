Gateway provides standardized access to multiple blockchain networks, enabling wallet management, transaction execution, and node RPC interactions. Each chain integration is customized to handle the specific requirements and features of that blockchain.

Gateway currently supports the following blockchain architectures:

## Ethereum

Gateway's Ethereum integration supports the Ethereum mainnet and all EVM-compatible Layer 1 and Layer 2 blockchains as **networks**. These networks share the same basic architecture, allowing for unified handling of wallets, transactions, and smart contract interactions.

| Network      | Description               | Chain ID   | Native Token |
|--------------|---------------------------|------------|--------------|
| mainnet      | Ethereum Mainnet          | 1          | ETH          |
| arbitrum     | Arbitrum One              | 42161      | ETH          |
| optimism     | Optimism                  | 10         | ETH          |
| base         | Base                      | 8453       | ETH          |
| polygon      | Polygon                   | 137        | MATIC        |
| bsc          | BNB Chain                 | 56         | BNB          |
| avalanche    | Avalanche C-Chain         | 43114      | AVAX         |
| celo         | Celo                      | 42220      | CELO         |
| unichain     | Unichain                  | 130        | ETH          |
| robinhoodchain | Robinhood Chain         | 4663       | ETH          |
| sepolia      | Sepolia (Testnet)         | 11155111   | ETH          |
| robinhoodchain-testnet | Robinhood Chain (Testnet) | 46630 | ETH        |

### Chain Configuration

Each chain and network can be configured in Gateway through YAML configuration files:

- Template: `/src/templates/chains/ethereum.yml`
- User Configs Location: `/conf/chains/ethereum.yml`

```yaml
defaultNetwork: mainnet
defaultWallet: '<ethereum-wallet-address>'
```

### Network Configuration

- Template: `/src/templates/chains/ethereum.yml`
- User Configs : `/conf/chains/ethereum/mainnet.yml`

```yaml
chainID: 1
nodeURL: https://eth.llamarpc.com
nativeCurrencySymbol: ETH
minGasPrice: 0.1
```

### API Endpoints

All EVM chains share the same API structure:

- `GET /chains/ethereum/status` - Chain connection and block status
- `GET /chains/ethereum/tokens` - Token information
- `POST /chains/ethereum/balances` - Wallet balances
- `POST /chains/ethereum/allowances` - Token allowances
- `POST /chains/ethereum/approve` - Approve token spending
- `POST /chains/ethereum/wrap` - Wrap native token
- `POST /chains/ethereum/unwrap` - Unwrap to native token
- `POST /chains/ethereum/poll` - Poll transaction status
- `POST /chains/ethereum/estimate-gas` - Estimate transaction gas

## Solana

Gateway's Solana integration provides access to the Solana blockchain and other networks that utilize the Solana Virtual Machine.

| Network      | Description                | Native Token |
|--------------|----------------------------|--------------|
| mainnet-beta | Solana Mainnet             | SOL          |
| devnet       | Solana Devnet (Testnet)    | SOL          |

### Chain Configuration

Each chain and network can be configured in Gateway through YAML configuration files:

- Template: `/src/templates/chains/solana.yml`
- User Configs Location: `/conf/chains/solana.yml`

```yaml
defaultNetwork: mainnet-beta
defaultWallet: '<solana-wallet-address>'
```

### Network Configuration

- Template: `/src/templates/chains/solana.yml`
- User Configs: `/conf/chains/solana/mainnet-beta.yml`

```yaml
nodeURL: "https://api.mainnet-beta.solana.com"
commitment: "confirmed"
skipPreflight: false
preflightCommitment: "confirmed"
maxFee: 0.01
priorityFee: 0.00001
```

### Sending Transactions

Starting with [v2.18.0](../release-notes/2.18.0.md#solana-sends-preflight-and-rebroadcast), Gateway simulates every Solana transaction before sending it and rebroadcasts it every 2 seconds until it confirms or its blockhash expires.

| Response | Meaning | Safe to retry? |
|----------|---------|----------------|
| `400` with the program's reason | Preflight refused the transaction. Nothing was sent and no fee was paid. | Yes, after fixing the cause |
| `429 RATE_LIMITED` | The RPC rate-limited the request before the transaction was broadcast. | Yes |
| `504 TRANSACTION_TIMEOUT` with a signature | The transaction was broadcast but not confirmed in time. It may still land. | Check the signature first |

### API Endpoints

All Solana networks share the same API structure:

- `GET /chains/solana/status` - Chain connection and slot status
- `GET /chains/solana/tokens` - SPL token information
- `POST /chains/solana/balances` - Wallet SOL and token balances
- `GET /chains/solana/transactions` - A wallet's recent activity, classified (mainnet-beta only)
- `POST /chains/solana/wrap` - Wrap SOL
- `POST /chains/solana/unwrap` - Unwrap to SOL
- `POST /chains/solana/poll` - Poll transaction status
- `POST /chains/solana/estimate-gas` - Estimate transaction fees

## Chain Schema

Gateway implements a standardized schema for chain operations across all supported blockchains. These schemas define the structure of requests and responses for common blockchain operations.

### Status Check
Returns chain connection status and current block/slot information.

**Request Schema:**
```json
{
  "network": "string (optional)" // Network identifier (e.g., "mainnet", "mainnet-beta")
}
```

**Response Schema:**
```json
{
  "chain": "string",           // Chain name (e.g., "ethereum", "solana")
  "network": "string",         // Network identifier
  "rpcUrl": "string",          // Current RPC endpoint, scheme and host only (the path and any API key are removed)
  "currentBlockNumber": 12345, // Current block number or slot
  "nativeCurrency": "string"   // Native token symbol (e.g., "ETH", "SOL")
}
```

### Token Information
Retrieves token metadata including addresses and decimals.

**Request Schema:**
```json
{
  "network": "string (optional)",           // Network identifier
  "tokenSymbols": "string | string[] (optional)" // Single symbol or array of symbols/addresses
}
```

**Response Schema:**
```json
{
  "tokens": [
    {
      "symbol": "string",   // Token symbol
      "address": "string",  // Token contract address
      "decimals": 6,        // Token decimals
      "name": "string"      // Token full name
    }
  ]
}
```

### Balance Query
Fetches wallet balances for native and specified tokens.

**Request Schema:**
```json
{
  "network": "string (optional)",      // Network identifier
  "address": "string (optional)",      // Wallet address to query
  "tokens": ["string"] (optional)",    // Array of token symbols or addresses
  "fetchAll": false                    // Fetch all tokens in wallet, not just those in token list
}
```

**Response Schema:**
```json
{
  "balances": {
    "USDC": 1234.56          // Key follows the request (see below), balance as number
  },
  "tokens": [
    {
      "key": "USDC",         // The name this balance has in "balances"
      "symbol": "USDC",      // Token symbol where known, otherwise null
      "address": "string",   // Token address; null for the native currency
      "balance": 1234.56
    }
  ]
}
```

Starting with [v2.18.0](../release-notes/2.18.0.md#balances-keyed-by-what-you-asked-for), each balance is keyed by the name it was requested with:

| Request | Key in `balances` |
|---------|-------------------|
| A symbol (`USDC`) | The token list symbol |
| An address or mint | That address, exactly as sent |
| `tokens` omitted | Each token's symbol |

Use the `tokens` list to find the symbol and address behind any key.

Native and wrapped tokens are separate balances on every chain. `SOL` and `ETH` return the native balance. `WSOL`, `WETH`, or the wrapped token's address return the wrapped token balance.

### Wallet Activity
Returns a wallet's recent transactions, each classified by what it did. Added in v2.18.0 for Solana `mainnet-beta`; other networks and chains are not supported.

`GET /chains/solana/transactions`

**Request Schema (query parameters):**
```json
{
  "network": "string (optional)",   // Must be "mainnet-beta"
  "address": "string",              // Wallet whose activity to read
  "limit": 25,                      // Signatures to inspect, newest first (1-100)
  "before": "string (optional)",    // A signature; pass the previous page's cursor to page back
  "includeOther": false             // Also return transactions that are neither a known DEX call nor a balance change
}
```

**Response Schema:**
```json
{
  "network": "string",
  "address": "string",
  "transactions": [
    {
      "signature": "string",
      "slot": 12345,
      "blockTime": 1234567890 | null,
      "ok": true,                     // false if the transaction failed on-chain
      "kind": "string",               // close_position | remove_liquidity | collect_fees | add_liquidity |
                                      // open_position | swap | withdraw | deposit | other
      "protocol": "string | null",    // e.g. "meteora/clmm", "raydium/amm", "jupiter/router"
      "actions": [],                  // Every DEX instruction recognised in the transaction
      "changes": [                    // What the wallet's balances did, fee excluded
        { "mint": "string", "symbol": "string | null", "decimals": 6, "amount": "string" }
      ],
      "feeLamports": 5000 | null
    }
  ],
  "scanned": 25,                      // Signatures inspected
  "cursor": "string | null"           // Pass as "before" for the next page
}
```

!!! note
    Each request reads one transaction per signature inspected, so a `limit` of 100 makes about 100 RPC calls. Use a dedicated [RPC provider](rpc.md) if you call this route often.

### Transaction Polling
Polls the status of a submitted transaction.

**Request Schema:**
```json
{
  "network": "string (optional)",         // Network identifier
  "signature": "string",                  // Transaction signature/hash
  "tokens": ["string"] (optional)",       // Token symbols/addresses for balance change calculation
  "walletAddress": "string (optional)"    // Wallet address for balance change calculation
}
```

**Response Schema:**
```json
{
  "currentBlock": 12345,              // Current block number
  "signature": "string",              // Transaction signature
  "txBlock": 12340 | null,            // Block where transaction was included
  "txStatus": 0 | 1 | -1,             // 0=PENDING, 1=CONFIRMED, -1=FAILED
  "fee": 0.001 | null,                // Transaction fee paid
  "tokenBalanceChanges": {            // Optional: token balance changes
    "TOKEN": 100.5                    // Change amount for each token
  },
  "txData": {} | null,                // Additional transaction data
  "error": "string (optional)"        // Error message if failed
}
```

### Gas/Fee Estimation
Estimates transaction fees for the network.

**Request Schema:**
```json
{
  "network": "string (optional)"  // Network identifier
}
```

**Response Schema:**
```json
{
  "feePerComputeUnit": 0.000001,  // Fee per compute unit or gas unit
  "denomination": "string",       // Unit denomination ("lamports" for Solana, "gwei" for Ethereum)
  "computeUnits": 200000,          // Default compute units/gas limit used for calculation
  "feeAsset": "string",            // Native currency symbol (ETH, SOL, etc.)
  "fee": 0.002,                    // Total estimated fee using default limits
  "timestamp": 1234567890          // Unix timestamp of estimate
}
```

### Transaction Status Enum
All chains use a standardized transaction status enum:

- `0` = **PENDING**: Transaction submitted but not yet confirmed
- `1` = **CONFIRMED**: Transaction successfully confirmed on-chain
- `-1` = **FAILED**: Transaction failed or was rejected

## Adding New Networks

Gateway's modular architecture makes it easy to add support for new EVM- and SVM-based blockchain networks.

1. **Create network configuration file:**
   ```yaml
   # /conf/chains/ethereum/mynetwork.yml
   nodeURL: "https://rpc.mynetwork.com"
   chainId: 12345
   nativeCurrencySymbol: "MYT"
   minGasPrice: 0.1
   ```

2. **Add token list:**
Create `/conf/tokens/ethereum/mynetwork.json` with supported tokens

3. **Update connectors**
Update each supported connector's configuration file (i.e. `uniswap.config.ts`) to include the new network
