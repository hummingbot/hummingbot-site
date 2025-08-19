# Jupiter

## Overview

Jupiter is Solana's leading DEX aggregator, providing best-price swaps by routing through multiple liquidity sources including Raydium, Orca, Meteora, and others.

**Chain:** Solana  
**Trading Types:** Router  
**Networks:** mainnet-beta, devnet

## Features

- Automatic route optimization across all major Solana DEXs
- Token list integration for verified tokens
- Priority fee suggestions for faster transactions
- Transaction versioning support (Legacy and V0)
- MEV protection through direct routing

## Configuration

Configure Jupiter settings in `/conf/connectors/jupiter.yml`:

```yaml
allowedSlippage: 1.0  # Maximum slippage percentage
gasLimitEstimate: 300000
ttl: 30  # Quote time-to-live in seconds
referrerAddress: null  # Optional referrer address for fees
```

### Configuration Parameters

- **allowedSlippage**: Maximum acceptable price slippage (e.g., 1.0 = 1%)
- **gasLimitEstimate**: Estimated compute units for transactions
- **ttl**: Time-to-live for quotes in seconds
- **referrerAddress**: Optional address to receive referral fees

## API Endpoints

### Router Operations

#### Get Quote and Swap
`POST /connectors/jupiter/router/quote-swap`

Gets an optimal swap quote and optionally executes it in one call.

**Request Parameters:**
- `chain`: "solana"
- `network`: "mainnet-beta" or "devnet"
- `connector`: "jupiter"
- `address`: Wallet address
- `base`: Base token symbol
- `quote`: Quote token symbol
- `amount`: Amount to trade (in base units)
- `side`: "BUY" or "SELL"
- `slippage`: Optional slippage override

**Response:**
- `base`/`quote`: Token symbols
- `amount`: Input amount
- `expectedOut`: Expected output amount
- `price`: Execution price
- `priceImpact`: Estimated price impact
- `route`: Routing path details
- `txHash`: Transaction hash (if executed)

#### Execute Swap
`POST /connectors/jupiter/router/execute-swap`

Executes a swap directly without pre-fetching a quote.

**Request Parameters:**
Same as quote-swap

**Response:**
- Transaction details including hash and confirmation status

#### Execute Quote
`POST /connectors/jupiter/router/execute-quote`

Executes a previously fetched quote.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "jupiter"
- `address`: Wallet address
- `quote`: Quote object from quote-swap

**Response:**
- Transaction execution details

## Usage Examples

### Basic Swap

```python
# Get quote for swapping 1 SOL to USDC
response = gateway.quote_swap(
    chain="solana",
    network="mainnet-beta",
    connector="jupiter",
    address=wallet_address,
    base="SOL",
    quote="USDC",
    amount="1.0",
    side="SELL"
)
```

### Execute with Custom Slippage

```python
# Execute swap with 0.5% slippage
response = gateway.execute_swap(
    chain="solana",
    network="mainnet-beta",
    connector="jupiter",
    address=wallet_address,
    base="USDC",
    quote="SOL",
    amount="100",
    side="SELL",
    slippage=0.005
)
```

## Best Practices

1. **Quote Freshness**: Jupiter quotes are valid for the TTL period (default 30 seconds). Execute quotes promptly to avoid slippage.

2. **Slippage Settings**: 
   - Use 0.5-1% for liquid pairs (SOL/USDC)
   - Use 1-3% for medium liquidity pairs
   - Use 3-5% for low liquidity or volatile pairs

3. **Priority Fees**: Jupiter automatically suggests appropriate priority fees based on network congestion.

4. **Error Handling**: Common errors include:
   - "No route found" - No liquidity path exists
   - "Slippage exceeded" - Price moved beyond tolerance
   - "Insufficient balance" - Check token and SOL balances

## Technical Details

- **GitHub**: [Gateway Jupiter Connector](https://github.com/hummingbot/gateway/tree/development/src/connectors/jupiter)
- **API Documentation**: [Jupiter V6 API](https://station.jup.ag/docs/apis/swap-api)
- **Default Config**: [jupiter.yml template](https://github.com/hummingbot/gateway/blob/development/src/templates/jupiter.yml)

## Troubleshooting

### Common Issues

**"No route found" errors:**
- Verify tokens are valid on the selected network
- Check that sufficient liquidity exists
- Try smaller trade amounts

**Transaction failures:**
- Ensure wallet has enough SOL for fees
- Increase slippage tolerance during volatile periods
- Check compute unit limits in configuration

**Quote expiration:**
- Reduce time between quote and execution
- Use execute-quote pattern for better reliability