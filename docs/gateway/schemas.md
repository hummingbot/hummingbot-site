Gateway implements standardized API schemas that define the request and response structure for different types of trading operations. These schemas ensure consistency across connectors and make it easier to integrate new DEXs into the Hummingbot ecosystem.

## Current Connector Schemas

Gateway currently supports the following connector schemas:

* **Swap**: For taker-only DEXs and DEX aggregators
* **AMM**: For Automated Market Maker DEXs (like Uniswap V2)
* **CLMM**: For Concentrated Liquidity Market Maker DEXs (like Uniswap V3)

Connectors that match these schemas should expose the routes below and import/use request and response types from each schema.

The schema files are located in the [`src/schemas/trading-types`](https://github.com/hummingbot/gateway/tree/core-2.5/src/schemas/trading-types) directory of the Gateway repository.

## Future Connector Schemas

Gateway's roadmap includes plans to expand functionality beyond the current types. While not yet implemented, future connector types may include:

- **Lend**: For lending and borrowing assets on DeFi lending protocols
- **Stake**: For staking assets in various protocols
- **Bridge**: For transferring assets between different blockchain networks

These additional connector types are still in the planning phase and will be developed as the Hummingbot ecosystem continues to evolve.

## Swap Schema

All DEX connectors, including DEX aggregators like [Jupiter](https://jup.ag/), should implement the Swap schema, which defines endpoints for fetching price quotes and executing swaps.

See [swap-schema](https://github.com/hummingbot/gateway/blob/core-2.5/src/schemas/trading-types/swap-schema.ts) for details.

### GET `/quote-swap`

* Purpose: Get price quotes for swaps on taker-only DEXs and DEX aggregators
* Request Type: `GetSwapQuoteRequest`
* Response Type: `GetSwapQuoteResponse`

### POST `/execute-swap`

* Purpose: Execute swaps on taker-only DEXs and DEX aggregators
* Request Type: `ExecuteSwapRequest`
* Response Type: `ExecuteSwapResponse`

## AMM Schema

The AMM schema, which extends the Swap schema, defines standard endpoints for quoting, swapping, and managing liquidity on AMM (Automated Market Maker) DEXs, like Raydium Standard pools.

See [amm-schema](https://github.com/hummingbot/gateway/blob/core-2.5/src/schemas/trading-types/amm-schema.ts) for details.

### GET `/pool-info`
Gets information about a specific AMM pool including token addresses, fees, prices, and liquidity amounts. Request Type: `GetPoolInfoRequest`, Response Type: `PoolInfo`

### GET `/quote-liquidity`
Gets a quote for adding liquidity to an AMM pool, calculating the optimal token amounts based on current pool state. Request Type: `QuoteLiquidityRequest`, Response Type: `QuoteLiquidityResponse`

### GET `/quote-swap`
Gets a price quote for swapping tokens in an AMM pool, including expected output amount and price impact. Request Type: `GetSwapQuoteRequest`, Response Type: `GetSwapQuoteResponse`

### POST `/execute-swap`
Executes a token swap transaction in an AMM pool based on the quoted parameters. Request Type: `ExecuteSwapRequest`, Response Type: `ExecuteSwapResponse`

### POST `/add-liquidity`
Adds liquidity to an AMM pool by depositing both base and quote tokens. Request Type: `AddLiquidityRequest`, Response Type: `AddLiquidityResponse`

### POST `/remove-liquidity`
Removes liquidity from an AMM pool and receives back both base and quote tokens. Request Type: `RemoveLiquidityRequest`, Response Type: `RemoveLiquidityResponse`

## CLMM Schema

The CLMM (Concentrated Liquidity Market Maker) schema defines endpoints for managing positions and liquidity in concentrated liquidity pools, like Raydium CLMM pools.

See [clmm-schema](https://github.com/hummingbot/gateway/blob/core-2.5/src/schemas/trading-types/clmm-schema.ts) for details.

### GET `/pool-info`
Gets detailed information about a CLMM pool including token addresses, fees, current tick, and liquidity distribution. Request Type: `GetPoolInfoRequest`, Response Type: `PoolInfo`

### GET `/positions-owned`
Retrieves all liquidity positions owned by a specific wallet address in CLMM pools. Request Type: Not specified in schema, Response Type: Array of `PositionInfo`

### GET `/position-info`
Gets detailed information about a specific liquidity position including token amounts, fee earnings, and price range. Request Type: `GetPositionInfoRequest`, Response Type: `PositionInfo`

### GET `/quote-position`
Gets a quote for opening a new liquidity position, calculating token amounts based on the specified price range. Request Type: `QuotePositionRequest`, Response Type: `QuotePositionResponse`

### GET `/quote-swap`
Gets a price quote for swapping tokens in a CLMM pool, calculating the optimal route through available liquidity. Request Type: `GetSwapQuoteRequest`, Response Type: `GetSwapQuoteResponse`

### POST `/execute-swap`
Executes a token swap transaction in a CLMM pool using concentrated liquidity ranges. Request Type: `ExecuteSwapRequest`, Response Type: `ExecuteSwapResponse`

### POST `/open-position`
Creates a new liquidity position in a CLMM pool with specified price range and token amounts. Request Type: `OpenPositionRequest`, Response Type: `OpenPositionResponse`

### POST `/add-liquidity`
Adds more liquidity to an existing CLMM position within its current price range. Request Type: `AddLiquidityRequest`, Response Type: `AddLiquidityResponse`

### POST `/remove-liquidity`
Removes liquidity from an existing CLMM position, withdrawing tokens based on the specified percentage. Request Type: `RemoveLiquidityRequest`, Response Type: `RemoveLiquidityResponse`

### POST `/collect-fees`
Collects accumulated trading fees earned by a liquidity position in a CLMM pool. Request Type: `CollectFeesRequest`, Response Type: `CollectFeesResponse`

### POST `/close-position`
Closes an existing CLMM position, removing all remaining liquidity and collecting any unclaimed fees. Request Type: `ClosePositionRequest`, Response Type: `ClosePositionResponse`
