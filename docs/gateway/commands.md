# Gateway API Commands

Gateway provides a comprehensive REST API for interacting with blockchain networks and decentralized exchanges. This page documents all available API endpoints organized by category.

## Base URL

- **Development mode**: `http://localhost:15888`
- **Production mode**: `https://localhost:15888`
- **API Documentation**: Access interactive Swagger docs at `/docs`

## Configuration Routes

### GET `/config`
Get configuration settings for a specific namespace or all configurations.

**Query Parameters:**
- `namespace` (optional): Configuration namespace (e.g., `server`, `ethereum-mainnet`, `solana-mainnet-beta`, `uniswap`)

**Example Request:**
```bash
curl http://localhost:15888/config?namespace=solana-mainnet-beta
```

### POST `/config/update`
Update a specific configuration value.

**Request Body:**
```json
{
  "namespace": "solana-mainnet-beta",
  "path": "maxFee",
  "value": 0.01
}
```

### GET `/config/chains`
Returns a list of available blockchain networks supported by Gateway.

**Response:**
```json
{
  "chains": [
    {
      "chain": "ethereum",
      "networks": ["mainnet", "arbitrum", "optimism", "base", "sepolia"]
    },
    {
      "chain": "solana",
      "networks": ["mainnet-beta", "devnet"]
    }
  ]
}
```

### GET `/config/connectors`
Returns a list of available DEX connectors and their supported networks.

**Response:**
```json
{
  "connectors": [
    {
      "name": "jupiter",
      "trading_types": ["router"],
      "chain": "solana",
      "networks": ["mainnet-beta", "devnet"]
    },
    {
      "name": "raydium",
      "trading_types": ["amm", "clmm"],
      "chain": "solana",
      "networks": ["mainnet-beta", "devnet"]
    }
  ]
}
```

### GET `/config/namespaces`
Returns a list of all configuration namespaces available in Gateway.

## Wallet Management Routes

### GET `/wallet`
Get all wallets across different chains.

**Query Parameters:**
- `showHardware` (boolean, default: true): Include hardware wallets in response

**Response:**
```json
[
  {
    "chain": "solana",
    "walletAddresses": ["7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi"],
    "hardwareWalletAddresses": ["82SggYRE2Vo4jN4a2pk3aQ4SET4ctafZJGbowmCqyHx5"]
  }
]
```

### POST `/wallet/add`
Add a new wallet using a private key.

**Request Body:**
```json
{
  "chain": "solana",
  "privateKey": "<your-private-key>",
  "setDefault": true
}
```

### POST `/wallet/add-hardware`
Add a hardware wallet (Ledger).

**Request Body:**
```json
{
  "chain": "solana",
  "address": "82SggYRE2Vo4jN4a2pk3aQ4SET4ctafZJGbowmCqyHx5",
  "setDefault": false
}
```

### DELETE `/wallet/remove`
Remove a wallet by its address.

**Request Body:**
```json
{
  "chain": "solana",
  "address": "7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi"
}
```

### POST `/wallet/setDefault`
Set a wallet as default for a specific chain.

**Request Body:**
```json
{
  "chain": "ethereum",
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f2BDf8"
}
```

## Token Management Routes

### GET `/tokens`
List tokens from token lists with optional filtering.

**Query Parameters:**
- `chain` (optional): Blockchain network (e.g., `ethereum`, `solana`)
- `network` (optional): Network name (e.g., `mainnet`, `mainnet-beta`)
- `search` (optional): Search term for filtering tokens

### POST `/tokens`
Add a new token to a token list.

**Request Body:**
```json
{
  "chain": "ethereum",
  "network": "mainnet",
  "token": {
    "name": "USD Coin",
    "symbol": "USDC",
    "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "decimals": 6
  }
}
```

### GET `/tokens/{symbolOrAddress}`
Get a specific token by symbol or address.

### DELETE `/tokens/{address}`
Remove a token from a token list by address.

## Pool Management Routes

### GET `/pools`
List all liquidity pools with optional filtering.

**Query Parameters:**
- `chain`: Blockchain network
- `network`: Network name
- `connector`: DEX connector name
- `poolId` (optional): Specific pool ID

### POST `/pools`
Add a new liquidity pool.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "connector": "raydium",
  "pool": {
    "id": "pool_id",
    "baseToken": "SOL",
    "quoteToken": "USDC",
    "fee": 0.003
  }
}
```

### DELETE `/pools/{poolId}`
Remove a pool from the list.

## Chain-Specific Routes

### Ethereum/EVM Routes (`/chains/ethereum`)

#### GET `/chains/ethereum/status`
Get chain connection status and current block number.

**Query Parameters:**
- `network`: Network name (e.g., `mainnet`, `arbitrum`)

#### GET `/chains/ethereum/tokens`
Get token information for specific tokens.

**Query Parameters:**
- `network`: Network name
- `tokenSymbols`: Comma-separated token symbols

#### POST `/chains/ethereum/balances`
Get wallet token balances.

**Request Body:**
```json
{
  "network": "mainnet",
  "address": "0x...",
  "tokenSymbols": ["ETH", "USDC", "USDT"]
}
```

#### POST `/chains/ethereum/allowances`
Check ERC20 token allowances for a spender.

**Request Body:**
```json
{
  "network": "mainnet",
  "address": "0x...",
  "spender": "0x...",
  "tokenSymbols": ["USDC", "USDT"]
}
```

#### POST `/chains/ethereum/approve`
Approve ERC20 token spending.

**Request Body:**
```json
{
  "network": "mainnet",
  "address": "0x...",
  "spender": "0x...",
  "token": "USDC",
  "amount": "1000000"
}
```

#### POST `/chains/ethereum/wrap`
Wrap native ETH to WETH.

**Request Body:**
```json
{
  "network": "mainnet",
  "address": "0x...",
  "amount": "1.5"
}
```

#### POST `/chains/ethereum/unwrap`
Unwrap WETH to native ETH.

**Request Body:**
```json
{
  "network": "mainnet",
  "address": "0x...",
  "amount": "1.5"
}
```

#### POST `/chains/ethereum/poll`
Poll transaction status by hash.

**Request Body:**
```json
{
  "network": "mainnet",
  "txHash": "0x..."
}
```

#### POST `/chains/ethereum/estimate-gas`
Estimate gas for a transaction.

### Solana Routes (`/chains/solana`)

#### GET `/chains/solana/status`
Get chain connection status and current slot.

**Query Parameters:**
- `network`: Network name (`mainnet-beta` or `devnet`)

#### GET `/chains/solana/tokens`
Get SPL token information.

**Query Parameters:**
- `network`: Network name
- `tokenSymbols`: Comma-separated token symbols

#### POST `/chains/solana/balances`
Get wallet SPL token balances.

**Request Body:**
```json
{
  "network": "mainnet-beta",
  "address": "7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi",
  "tokenSymbols": ["SOL", "USDC", "RAY"]
}
```

#### POST `/chains/solana/poll`
Poll transaction status by signature.

**Request Body:**
```json
{
  "network": "mainnet-beta",
  "txHash": "transaction_signature"
}
```

#### POST `/chains/solana/estimate-gas`
Estimate transaction fees.

## DEX Connector Routes

### Router Operations (DEX Aggregators)

Router operations are available for DEX aggregators like Jupiter, 0x, and Uniswap Smart Order Router.

#### POST `/connectors/{dex}/router/quote-swap`
Get a swap quote from the DEX aggregator.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "base": "SOL",
  "quote": "USDC",
  "amount": "1.0",
  "side": "SELL",
  "slippage": 0.01
}
```

#### POST `/connectors/{dex}/router/execute-swap`
Execute a swap without a pre-fetched quote.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "base": "SOL",
  "quote": "USDC",
  "amount": "1.0",
  "side": "SELL",
  "slippage": 0.01
}
```

#### POST `/connectors/{dex}/router/execute-quote`
Execute a pre-fetched quote (more efficient).

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "quoteId": "quote_id_from_quote_swap"
}
```

### AMM Operations (V2-style Pools)

AMM operations are available for DEXs like Uniswap V2 and Raydium Standard pools.

#### POST `/connectors/{dex}/amm/pool-info`
Get detailed information about an AMM pool.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "poolId": "pool_address"
}
```

#### POST `/connectors/{dex}/amm/position-info`
Get information about a liquidity position.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "poolId": "pool_address"
}
```

#### POST `/connectors/{dex}/amm/quote-swap`
Get a swap quote from an AMM pool.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "poolId": "pool_address",
  "base": "SOL",
  "quote": "USDC",
  "amount": "1.0",
  "side": "SELL"
}
```

#### POST `/connectors/{dex}/amm/execute-swap`
Execute a swap through an AMM pool.

#### POST `/connectors/{dex}/amm/quote-liquidity`
Get a quote for adding/removing liquidity.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "poolId": "pool_address",
  "baseAmount": "10.0",
  "quoteAmount": "1000.0"
}
```

#### POST `/connectors/{dex}/amm/add-liquidity`
Add liquidity to an AMM pool.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "poolId": "pool_address",
  "baseAmount": "10.0",
  "quoteAmount": "1000.0",
  "slippage": 0.01
}
```

#### POST `/connectors/{dex}/amm/remove-liquidity`
Remove liquidity from an AMM pool.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "poolId": "pool_address",
  "percentage": 50
}
```

### CLMM Operations (V3-style Concentrated Liquidity)

CLMM operations are available for DEXs like Uniswap V3, Raydium CLMM, and Meteora DLMM.

#### POST `/connectors/{dex}/clmm/pool-info`
Get information about a concentrated liquidity pool.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "poolId": "pool_address"
}
```

#### POST `/connectors/{dex}/clmm/positions-owned`
Get all positions owned by a wallet.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address"
}
```

#### POST `/connectors/{dex}/clmm/position-info`
Get detailed information about a specific position.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "positionId": "position_nft_id"
}
```

#### POST `/connectors/{dex}/clmm/quote-position`
Get a quote for opening a new position.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "poolId": "pool_address",
  "lowerPrice": "95.0",
  "upperPrice": "105.0",
  "baseAmount": "10.0"
}
```

#### POST `/connectors/{dex}/clmm/open-position`
Open a new concentrated liquidity position.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "poolId": "pool_address",
  "lowerPrice": "95.0",
  "upperPrice": "105.0",
  "baseAmount": "10.0",
  "quoteAmount": "1000.0"
}
```

#### POST `/connectors/{dex}/clmm/add-liquidity`
Add liquidity to an existing position.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "positionId": "position_nft_id",
  "baseAmount": "5.0",
  "quoteAmount": "500.0"
}
```

#### POST `/connectors/{dex}/clmm/remove-liquidity`
Remove liquidity from a position.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "positionId": "position_nft_id",
  "percentage": 25
}
```

#### POST `/connectors/{dex}/clmm/collect-fees`
Collect accumulated trading fees.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "positionId": "position_nft_id"
}
```

#### POST `/connectors/{dex}/clmm/close-position`
Close a position and withdraw all liquidity.

**Request Body:**
```json
{
  "chain": "solana",
  "network": "mainnet-beta",
  "address": "wallet_address",
  "positionId": "position_nft_id"
}
```

## Error Handling

All endpoints return standard HTTP status codes:

- `200 OK`: Request successful
- `400 Bad Request`: Invalid request parameters
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

Error responses include a message field:
```json
{
  "error": "Error message",
  "message": "Detailed error description"
}
```

## Rate Limiting

Gateway implements rate limiting to prevent abuse:
- Default: 100 requests per minute per IP
- Configurable in `server.yml`

## Authentication

In production mode (HTTPS), Gateway requires SSL certificates that match those used by the Hummingbot client. The passphrase used to encrypt wallets must be provided when starting Gateway.