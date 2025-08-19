# Meteora

## Overview

Meteora implements a Dynamic Liquidity Market Maker (DLMM) model using discrete price bins instead of continuous price curves, providing zero slippage within bins and dynamic fee adjustment.

**Chain:** Solana  
**Trading Types:** CLMM  
**Networks:** mainnet-beta, devnet

## Features

- Bin-based liquidity concentration for precise pricing
- Dynamic fee tiers that adjust with market volatility
- Zero slippage within active bins
- Flexible liquidity distribution strategies
- Volatility-adjusted fee mechanism
- Multiple position management per pool

## Configuration

Configure Meteora settings in `/conf/connectors/meteora.yml`:

```yaml
allowedSlippage: 1.0
gasLimitEstimate: 400000
ttl: 30
programId: "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo"
```

### Configuration Parameters

- **allowedSlippage**: Maximum acceptable price slippage percentage
- **gasLimitEstimate**: Estimated compute units for transactions
- **ttl**: Time-to-live for quotes in seconds
- **programId**: Meteora DLMM program ID (chain-specific)

## DLMM Model Explained

Meteora's Dynamic Liquidity Market Maker uses a bin-based approach:

1. **Price Bins**: Liquidity is organized into discrete price bins rather than continuous ranges
2. **Zero Slippage**: Trades within a single bin experience zero price impact
3. **Dynamic Fees**: Fees automatically adjust based on market volatility
4. **Flexible Shapes**: LPs can create various liquidity distribution patterns

## API Endpoints

### Pool Operations

#### Get Pool Information
`POST /connectors/meteora/clmm/pool-info`

Returns detailed information about a specific DLMM pool.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `poolId`: Pool address

**Response:**
- Pool configuration and parameters
- Current bin information
- Fee tier and volatility data
- Token reserves

#### Fetch Available Pools
`POST /connectors/meteora/clmm/fetch-pools`

Lists available DLMM pools for a token pair.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `base`: Base token symbol
- `quote`: Quote token symbol

### Position Management

#### List Owned Positions
`POST /connectors/meteora/clmm/positions-owned`

Returns all DLMM positions owned by an address.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `address`: Wallet address

#### Get Position Information
`POST /connectors/meteora/clmm/position-info`

Returns detailed information about a specific position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `positionId`: Position NFT address

#### Quote New Position
`POST /connectors/meteora/clmm/quote-position`

Calculates parameters for opening a new position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `poolId`: Pool address
- `lowerBin`: Lower bin ID
- `upperBin`: Upper bin ID
- `baseAmount`: Base token amount
- `quoteAmount`: Quote token amount

#### Open Position
`POST /connectors/meteora/clmm/open-position`

Creates a new DLMM position with specified parameters.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `address`: Wallet address
- `poolId`: Pool address
- `lowerBin`: Lower bin ID
- `upperBin`: Upper bin ID
- `baseAmount`: Base token amount
- `quoteAmount`: Quote token amount

### Liquidity Operations

#### Add Liquidity
`POST /connectors/meteora/clmm/add-liquidity`

Adds liquidity to an existing position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `address`: Wallet address
- `positionId`: Position NFT address
- `baseAmount`: Additional base token amount
- `quoteAmount`: Additional quote token amount

#### Remove Liquidity
`POST /connectors/meteora/clmm/remove-liquidity`

Removes liquidity from a position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `address`: Wallet address
- `positionId`: Position NFT address
- `liquidity`: Amount of liquidity to remove

### Trading Operations

#### Quote Swap
`POST /connectors/meteora/clmm/quote-swap`

Gets a quote for swapping tokens through DLMM pools.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `base`: Base token symbol
- `quote`: Quote token symbol
- `amount`: Trade amount
- `side`: "BUY" or "SELL"

#### Execute Swap
`POST /connectors/meteora/clmm/execute-swap`

Executes a swap through DLMM pools.

**Request Parameters:**
Same as quote-swap, plus:
- `address`: Wallet address
- `slippage`: Optional slippage override

### Fee Management

#### Collect Fees
`POST /connectors/meteora/clmm/collect-fees`

Collects earned fees from a position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `address`: Wallet address
- `positionId`: Position NFT address

#### Close Position
`POST /connectors/meteora/clmm/close-position`

Closes a position and withdraws all liquidity and fees.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "meteora"
- `address`: Wallet address
- `positionId`: Position NFT address

## Liquidity Strategies

### Concentrated Strategy
Focus liquidity in narrow bin ranges for maximum fee earning:
- Set bins close to current price
- Higher fee earnings when price is in range
- Requires active management

### Wide Range Strategy
Distribute liquidity across many bins:
- Lower fee concentration
- Less rebalancing needed
- Better for volatile pairs

### Bid-Ask Strategy
Place liquidity on both sides of current price:
- Capture fees from both directions
- Natural rebalancing as price moves
- Good for range-bound markets

## Best Practices

1. **Bin Selection**:
   - Tighter bins for stable pairs
   - Wider bins for volatile pairs
   - Consider fee tier when selecting range

2. **Position Management**:
   - Monitor bin activity regularly
   - Rebalance when price moves out of range
   - Collect fees periodically to compound

3. **Risk Management**:
   - Understand impermanent loss risks
   - Diversify across multiple positions
   - Use stop-loss strategies for volatile pairs

## Technical Details

- **GitHub**: [Gateway Meteora Connector](https://github.com/hummingbot/gateway/tree/development/src/connectors/meteora)
- **Documentation**: [Meteora DLMM Docs](https://docs.meteora.ag/dlmm)
- **Default Config**: [meteora.yml template](https://github.com/hummingbot/gateway/blob/development/src/templates/meteora.yml)

## Troubleshooting

### Common Issues

**"Bin not found" errors:**
- Verify bin IDs are valid for the pool
- Check that bins have sufficient liquidity
- Ensure bins are within valid range

**Position creation failures:**
- Check wallet has enough tokens and SOL
- Verify bin range is valid
- Ensure pool is active

**Fee collection issues:**
- Confirm fees have accrued
- Check position is still open
- Verify wallet permissions