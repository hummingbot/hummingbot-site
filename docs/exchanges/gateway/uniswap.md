# Uniswap

## Overview

Uniswap is the most comprehensive DEX protocol, supporting V2 AMM pools, V3 concentrated liquidity, and Universal Router for optimal trade execution across Ethereum and EVM-compatible chains.

**Chain:** Ethereum and EVM-compatible chains  
**Trading Types:** Router, AMM, CLMM  
**Networks:** mainnet, arbitrum, optimism, base, polygon, avalanche, bsc, celo

## Features

### Uniswap V2 (AMM)
- Classic constant product (x*y=k) pools
- ERC-20 LP tokens
- 0.3% default fee tier
- Simple liquidity provision
- Automatic rebalancing

### Uniswap V3 (CLMM)
- Concentrated liquidity positions
- Multiple fee tiers (0.01%, 0.05%, 0.3%, 1%)
- Position NFTs (ERC-721)
- Range orders capability
- Up to 4000x capital efficiency

### Universal Router
- Aggregates V2, V3, and other protocols
- Multi-hop routing optimization
- Permit2 integration for gasless approvals
- Gas-optimized execution
- MEV protection

## Configuration

Configure Uniswap settings in `/conf/connectors/uniswap.yml`:

```yaml
allowedSlippage: 1.0
gasLimitEstimate: 300000
ttl: 600
contractAddresses:
  mainnet:
    uniswapV2RouterAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    uniswapV3RouterAddress: "0xE592427A0AEce92De3Edee1F18E0157C05861564"
    uniswapV3NftManagerAddress: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88"
    universalRouterAddress: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD"
  arbitrum:
    uniswapV2RouterAddress: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24"
    uniswapV3RouterAddress: "0xE592427A0AEce92De3Edee1F18E0157C05861564"
    uniswapV3NftManagerAddress: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88"
    universalRouterAddress: "0x5E325eDA8064b456f4781070C0738d849c824258"
```

### Configuration Parameters

- **allowedSlippage**: Maximum acceptable price slippage percentage
- **gasLimitEstimate**: Estimated gas limit for transactions
- **ttl**: Time-to-live for quotes in seconds
- **contractAddresses**: Network-specific contract addresses

## Router Operations (Universal Router)

### Quote Swap
`POST /connectors/uniswap/router/quote-swap`

Gets optimal swap route across all Uniswap versions.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `base`: Base token symbol
- `quote`: Quote token symbol
- `amount`: Trade amount
- `side`: "BUY" or "SELL"

**Response:**
- Optimal route details
- Expected output
- Price impact
- Gas estimate

### Execute Swap
`POST /connectors/uniswap/router/execute-swap`

Executes swap through Universal Router.

**Request Parameters:**
Same as quote-swap, plus:
- `address`: Wallet address
- `slippage`: Optional slippage override

### Execute Quote
`POST /connectors/uniswap/router/execute-quote`

Executes a previously fetched quote.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `quote`: Quote object from quote-swap

## AMM Operations (V2)

### Pool Information
`POST /connectors/uniswap/amm/pool-info`

Returns V2 pool information.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `base`: Base token symbol
- `quote`: Quote token symbol

**Response:**
- Token reserves
- Pool share price
- Total liquidity
- Fee percentage (0.3%)

### Position Information
`POST /connectors/uniswap/amm/position-info`

Gets current LP token balance and value.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `base`: Base token symbol
- `quote`: Quote token symbol

### Quote Swap
`POST /connectors/uniswap/amm/quote-swap`

Gets quote for V2 pool swap.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `base`: Base token symbol
- `quote`: Quote token symbol
- `amount`: Trade amount
- `side`: "BUY" or "SELL"

### Execute Swap
`POST /connectors/uniswap/amm/execute-swap`

Executes swap through V2 pools.

**Request Parameters:**
Same as quote-swap, plus:
- `address`: Wallet address
- `slippage`: Optional slippage override

### Quote Liquidity
`POST /connectors/uniswap/amm/quote-liquidity`

Calculates token amounts for adding liquidity.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `base`: Base token symbol
- `quote`: Quote token symbol
- `baseAmount`: Base token amount (optional)
- `quoteAmount`: Quote token amount (optional)

### Add Liquidity
`POST /connectors/uniswap/amm/add-liquidity`

Adds liquidity to V2 pool.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `base`: Base token symbol
- `quote`: Quote token symbol
- `baseAmount`: Base token amount
- `quoteAmount`: Quote token amount

### Remove Liquidity
`POST /connectors/uniswap/amm/remove-liquidity`

Removes liquidity from V2 pool.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `base`: Base token symbol
- `quote`: Quote token symbol
- `liquidity`: LP token amount

## CLMM Operations (V3)

### Pool Information
`POST /connectors/uniswap/clmm/pool-info`

Returns V3 pool information.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `base`: Base token symbol
- `quote`: Quote token symbol
- `fee`: Fee tier (100, 500, 3000, 10000)

**Response:**
- Current price and tick
- Liquidity distribution
- Fee tier
- Pool statistics

### List Owned Positions
`POST /connectors/uniswap/clmm/positions-owned`

Returns all V3 positions owned by address.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address

### Position Information
`POST /connectors/uniswap/clmm/position-info`

Gets detailed V3 position information.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `tokenId`: Position NFT ID

### Quote Position
`POST /connectors/uniswap/clmm/quote-position`

Calculates parameters for new V3 position.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `base`: Base token symbol
- `quote`: Quote token symbol
- `fee`: Fee tier
- `lowerPrice`: Lower price bound
- `upperPrice`: Upper price bound
- `baseAmount`: Base token amount
- `quoteAmount`: Quote token amount

### Open Position
`POST /connectors/uniswap/clmm/open-position`

Creates new V3 position.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `base`: Base token symbol
- `quote`: Quote token symbol
- `fee`: Fee tier
- `lowerPrice`: Lower price bound
- `upperPrice`: Upper price bound
- `baseAmount`: Base token amount
- `quoteAmount`: Quote token amount

### Add Liquidity
`POST /connectors/uniswap/clmm/add-liquidity`

Adds liquidity to existing V3 position.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `tokenId`: Position NFT ID
- `baseAmount`: Additional base tokens
- `quoteAmount`: Additional quote tokens

### Remove Liquidity
`POST /connectors/uniswap/clmm/remove-liquidity`

Removes liquidity from V3 position.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `tokenId`: Position NFT ID
- `liquidity`: Amount to remove

### Collect Fees
`POST /connectors/uniswap/clmm/collect-fees`

Collects earned fees from V3 position.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `tokenId`: Position NFT ID

### Close Position
`POST /connectors/uniswap/clmm/close-position`

Closes V3 position completely.

**Request Parameters:**
- `chain`: "ethereum"
- `network`: Network name
- `connector`: "uniswap"
- `address`: Wallet address
- `tokenId`: Position NFT ID

## Fee Tiers

### V2 Pools
- Fixed 0.3% fee on all trades
- 100% to liquidity providers

### V3 Pools
Multiple fee tiers for different pair types:
- **0.01% (1 bp)**: Stable pairs (USDC/USDT)
- **0.05% (5 bp)**: Correlated pairs (ETH/stETH)
- **0.3% (30 bp)**: Standard pairs (ETH/USDC)
- **1% (100 bp)**: Exotic pairs

## Network Support

### Mainnet Ethereum
- Full V2, V3, and Universal Router support
- Highest liquidity depth
- All fee tiers available

### Layer 2 Networks

#### Arbitrum
- Lower gas costs
- Fast transaction finality
- Growing liquidity

#### Optimism
- OP token incentives
- Strong DeFi ecosystem
- Low fees

#### Base
- Coinbase ecosystem integration
- New pools with incentives
- Growing adoption

### Other EVM Chains

#### Polygon
- Very low fees
- MATIC incentives
- Good for small trades

#### BSC
- BNB pairs focus
- High-speed trading
- Alternative liquidity

#### Avalanche
- AVAX ecosystem
- Fast finality
- Cross-chain bridges

## Trading Strategies

### Arbitrage
Use Universal Router for:
- Cross-version arbitrage (V2 vs V3)
- Multi-hop optimization
- MEV protection

### Liquidity Provision

#### V2 Strategy
Best for:
- Passive income seekers
- Long-term holders
- Simple management

#### V3 Narrow Range
Best for:
- Active managers
- Stable pairs
- High fee capture

#### V3 Wide Range
Best for:
- Volatile pairs
- Less management
- Risk reduction

## Best Practices

### Gas Optimization
1. Use Universal Router for best routes
2. Batch transactions when possible
3. Set appropriate gas limits
4. Use Permit2 for approvals

### Position Management
1. **V2 Pools**: Monitor impermanent loss
2. **V3 Pools**: 
   - Rebalance when out of range
   - Collect fees regularly
   - Use multiple positions for hedging

### Risk Management
1. Understand impermanent loss
2. Check pool liquidity depth
3. Monitor gas costs on L1
4. Use stop-loss strategies

## Technical Details

- **GitHub**: [Gateway Uniswap Connector](https://github.com/hummingbot/gateway/tree/development/src/connectors/uniswap)
- **V2 Docs**: [Uniswap V2 Documentation](https://docs.uniswap.org/protocol/V2/introduction)
- **V3 Docs**: [Uniswap V3 Documentation](https://docs.uniswap.org/protocol/introduction)
- **Universal Router**: [Universal Router Docs](https://docs.uniswap.org/protocol/universal-router/overview)
- **Default Config**: [uniswap.yml template](https://github.com/hummingbot/gateway/blob/development/src/templates/uniswap.yml)

## Troubleshooting

### Common Issues

**"Pool not found" errors:**
- Verify pool exists for fee tier (V3)
- Check token addresses are correct
- Ensure sufficient liquidity exists

**"Insufficient liquidity" errors:**
- Try different fee tiers (V3)
- Use Universal Router for aggregation
- Reduce trade size

**Gas estimation failures:**
- Increase gas limit in config
- Check wallet ETH balance
- Verify token approvals

**Position NFT issues:**
- Confirm NFT ownership
- Check NFT is not listed/locked
- Verify position still exists