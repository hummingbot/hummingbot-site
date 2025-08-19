# Raydium

## Overview

Raydium is a comprehensive DEX on Solana offering both Standard AMM pools (similar to Uniswap V2) and Concentrated Liquidity pools (CLMM) for more capital-efficient liquidity provision.

**Chain:** Solana  
**Trading Types:** AMM, CLMM  
**Networks:** mainnet-beta, devnet

## Features

### Standard AMM (V2)
- Traditional x*y=k constant product pools
- Simple LP token mechanism
- Automatic 50/50 rebalancing
- Pool-wide fee distribution
- Single-click liquidity provision

### Concentrated Liquidity (CLMM)
- Custom price ranges for liquidity
- Up to 500x capital efficiency
- Position NFTs for tracking
- Individual fee collection
- Multiple positions per pool

## Configuration

Configure Raydium settings in `/conf/connectors/raydium.yml`:

```yaml
allowedSlippage: 1.0
gasLimitEstimate: 500000
ttl: 30
programIds:
  amm: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"
  clmm: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
```

### Configuration Parameters

- **allowedSlippage**: Maximum acceptable price slippage percentage
- **gasLimitEstimate**: Estimated compute units for transactions
- **ttl**: Time-to-live for quotes in seconds
- **programIds**: Raydium program IDs for AMM and CLMM

## Standard AMM Operations

### Pool Information
`POST /connectors/raydium/amm/pool-info`

Returns information about a Standard AMM pool.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `poolId`: Pool address

**Response:**
- Token reserves
- Pool share price
- Fee percentage
- Total liquidity

### Position Information
`POST /connectors/raydium/amm/position-info`

Gets current liquidity position in a pool.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address
- `poolId`: Pool address

### Quote Swap
`POST /connectors/raydium/amm/quote-swap`

Gets a quote for swapping through Standard AMM pools.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `base`: Base token symbol
- `quote`: Quote token symbol
- `amount`: Trade amount
- `side`: "BUY" or "SELL"

### Execute Swap
`POST /connectors/raydium/amm/execute-swap`

Executes a swap through Standard AMM pools.

**Request Parameters:**
Same as quote-swap, plus:
- `address`: Wallet address
- `slippage`: Optional slippage override

### Quote Liquidity
`POST /connectors/raydium/amm/quote-liquidity`

Calculates token amounts for liquidity provision.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `poolId`: Pool address
- `baseAmount`: Base token amount (optional)
- `quoteAmount`: Quote token amount (optional)

### Add Liquidity
`POST /connectors/raydium/amm/add-liquidity`

Adds liquidity to a Standard AMM pool.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address
- `poolId`: Pool address
- `baseAmount`: Base token amount
- `quoteAmount`: Quote token amount

### Remove Liquidity
`POST /connectors/raydium/amm/remove-liquidity`

Removes liquidity from a Standard AMM pool.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address
- `poolId`: Pool address
- `liquidity`: LP token amount to remove

## CLMM Operations

### Pool Information
`POST /connectors/raydium/clmm/pool-info`

Returns detailed information about a CLMM pool.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `poolId`: Pool address

**Response:**
- Current price and tick
- Liquidity distribution
- Fee tier
- Pool parameters

### List Owned Positions
`POST /connectors/raydium/clmm/positions-owned`

Returns all CLMM positions owned by an address.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address

### Position Information
`POST /connectors/raydium/clmm/position-info`

Gets detailed information about a specific CLMM position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `positionId`: Position NFT address

### Quote Position
`POST /connectors/raydium/clmm/quote-position`

Calculates parameters for opening a new CLMM position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `poolId`: Pool address
- `lowerPrice`: Lower price bound
- `upperPrice`: Upper price bound
- `baseAmount`: Base token amount
- `quoteAmount`: Quote token amount

### Open Position
`POST /connectors/raydium/clmm/open-position`

Creates a new concentrated liquidity position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address
- `poolId`: Pool address
- `lowerPrice`: Lower price bound
- `upperPrice`: Upper price bound
- `baseAmount`: Base token amount
- `quoteAmount`: Quote token amount

### Add Liquidity to Position
`POST /connectors/raydium/clmm/add-liquidity`

Adds liquidity to an existing CLMM position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address
- `positionId`: Position NFT address
- `baseAmount`: Additional base tokens
- `quoteAmount`: Additional quote tokens

### Remove Liquidity from Position
`POST /connectors/raydium/clmm/remove-liquidity`

Removes liquidity from a CLMM position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address
- `positionId`: Position NFT address
- `liquidity`: Amount to remove

### Collect Fees
`POST /connectors/raydium/clmm/collect-fees`

Collects earned fees from a CLMM position.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address
- `positionId`: Position NFT address

### Close Position
`POST /connectors/raydium/clmm/close-position`

Closes a CLMM position and withdraws all assets.

**Request Parameters:**
- `chain`: "solana"
- `network`: Network name
- `connector`: "raydium"
- `address`: Wallet address
- `positionId`: Position NFT address

## Trading Strategies

### Standard AMM Strategies

#### Passive Liquidity Provision
Best for long-term holders:
- Add equal values of both tokens
- Earn fees from all trades
- No active management required
- Subject to impermanent loss

#### Range Trading
Profit from price oscillations:
- Add liquidity at local highs
- Remove at local lows
- Capture fees plus price movements

### CLMM Strategies

#### Narrow Range
Maximum fee concentration:
- Set tight bounds around current price
- Highest fee earnings when active
- Requires frequent rebalancing
- Best for stable pairs

#### Wide Range
Balanced approach:
- Broader price coverage
- Lower fee concentration
- Less rebalancing needed
- Good for volatile pairs

#### Just-In-Time (JIT)
Advanced strategy:
- Add liquidity before large trades
- Remove after trade execution
- Capture maximum fees
- Requires monitoring tools

## Fee Tiers

### Standard AMM
- Fixed 0.25% trading fee
- 0.22% to liquidity providers
- 0.03% to Raydium treasury

### CLMM Pools
Multiple fee tiers available:
- 0.01% - Stable pairs
- 0.05% - Correlated pairs
- 0.25% - Standard pairs
- 1.00% - Exotic pairs

## Best Practices

### For Standard AMM
1. **Initial Liquidity**: Add balanced amounts to avoid price impact
2. **Timing**: Add during low volatility periods
3. **Monitoring**: Track impermanent loss regularly
4. **Diversification**: Spread across multiple pools

### For CLMM
1. **Range Selection**: 
   - Narrow for stable pairs (±5%)
   - Medium for normal pairs (±20%)
   - Wide for volatile pairs (±50%)

2. **Position Management**:
   - Monitor price regularly
   - Rebalance when price exits range
   - Compound fees periodically

3. **Risk Management**:
   - Set stop-loss levels
   - Use multiple positions
   - Consider hedging strategies

## Technical Details

- **GitHub**: [Gateway Raydium Connector](https://github.com/hummingbot/gateway/tree/development/src/connectors/raydium)
- **Documentation**: [Raydium Docs](https://docs.raydium.io/)
- **SDK**: [Raydium SDK](https://github.com/raydium-io/raydium-sdk)
- **Default Config**: [raydium.yml template](https://github.com/hummingbot/gateway/blob/development/src/templates/raydium.yml)

## Troubleshooting

### Common Issues

**"Pool not found" errors:**
- Verify pool exists on selected network
- Check pool ID is correct
- Ensure tokens are in correct order

**"Insufficient liquidity" errors:**
- Try smaller trade amounts
- Check pool depth
- Consider using CLMM pools

**Position management issues:**
- Ensure position NFT is owned
- Check wallet has authority
- Verify position is still open

**Transaction failures:**
- Increase compute units in config
- Check SOL balance for fees
- Verify token approvals