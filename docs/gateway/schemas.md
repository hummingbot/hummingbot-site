Gateway implements standardized API schemas that define the request and response structure for different types of trading operations. These schemas ensure consistency across connectors and make it easier to integrate new DEXs into the Hummingbot ecosystem.

## Chain Schemas

Gateway provides standardized endpoints for interacting with different blockchain networks. Currently supported chains include Solana and Ethereum.

### Chain Routes

For each supported chain (`{chain_name}` = `solana` or `ethereum`), the following endpoints are available:

#### GET `/{chain_name}/status`
Gets the current status and health of the blockchain connection.

#### GET `/{chain_name}/tokens`
Retrieves information about available tokens on the network.

#### POST `/{chain_name}/balances`
Gets token balances for a specified wallet address.

#### POST `/{chain_name}/poll`
Polls for updates or transaction status on the network.

#### POST `/{chain_name}/estimate-gas`
Estimates the gas (transaction fee) for a transaction.

## Connector Schemas

Gateway currently supports the following connector schemas:

* **Swap**: For taker-only DEXs and DEX aggregators
* **AMM**: For Automated Market Maker DEXs (like Raydium Standard and Uniswap V2 pools)
* **CLMM**: For Concentrated Liquidity Market Maker DEXs (like Raydium Concentrated and Uniswap V3 pools)

The schema files are located in the [`src/schemas/trading-types`](https://github.com/hummingbot/gateway/tree/core-2.5/src/schemas/trading-types) directory of the Gateway repository.

### GET /connectors

You can view all available connectors and their supported trading types by making a GET request to the `/connectors` endpoint:
```json
{
  "connectors": [
    {
      "name": "jupiter",
      "trading_types": [
        "swap"
      ],
      "available_networks": [
        {
          "chain": "solana",
          "networks": [
            "mainnet-beta",
            "devnet"
          ]
        }
      ]
    },
    {
      "name": "raydium/amm",
      "trading_types": [
        "amm",
        "swap"
      ],
      "available_networks": [
        {
          "chain": "solana",
          "networks": [
            "mainnet-beta",
            "devnet"
          ]
        }
      ]
    },
    {
      "name": "raydium/clmm",
      "trading_types": [
        "amm",
        "swap"
      ],
      "available_networks": [
        {
          "chain": "solana",
          "networks": [
            "mainnet-beta",
            "devnet"
          ]
        }
      ]
    }
  ]
}
```

### Swap Schema

All DEX connectors should implement the Swap schema, which defines endpoints for fetching price quotes and executing swaps.


See [swap-schema](https://github.com/hummingbot/gateway/blob/core-2.5/src/schemas/trading-types/swap-schema.ts) for details.

#### GET `/quote-swap`

* Purpose: Get price quotes for swaps on taker-only DEXs and DEX aggregators
* Request Type: `GetSwapQuoteRequest`
* Response Type: `GetSwapQuoteResponse`

#### POST `/execute-swap`

* Purpose: Execute swaps on taker-only DEXs and DEX aggregators
* Request Type: `ExecuteSwapRequest`
* Response Type: `ExecuteSwapResponse`

### AMM Schema

The AMM schema defines standard endpoints for managing liquidity positions on AMM (Automated Market Maker) DEXs, like [Raydium Standard](https://raydium.io/liquidity-pools/?tab=standard) and Uniswap V2 pools.

In addition to the Swap routes above, an AMM DEX connector should define the following additional routes. See [amm-schema](https://github.com/hummingbot/gateway/blob/core-2.5/src/schemas/trading-types/amm-schema.ts) for details.

#### GET `/pool-info`
Gets information about a specific AMM pool including token addresses, fees, prices, and liquidity amounts. Request Type: `GetPoolInfoRequest`, Response Type: `PoolInfo`

#### GET `/quote-liquidity`
Gets a quote for adding liquidity to an AMM pool, calculating the optimal token amounts based on current pool state. Request Type: `QuoteLiquidityRequest`, Response Type: `QuoteLiquidityResponse`

#### POST `/add-liquidity`
Adds liquidity to an AMM pool by depositing both base and quote tokens. Request Type: `AddLiquidityRequest`, Response Type: `AddLiquidityResponse`

#### POST `/remove-liquidity`
Removes liquidity from an AMM pool and receives back both base and quote tokens. Request Type: `RemoveLiquidityRequest`, Response Type: `RemoveLiquidityResponse`

### CLMM Schema

The CLMM (Concentrated Liquidity Market Maker) schema defines endpoints for managing positions and liquidity in concentrated liquidity pools, like [Raydium Concentrated](https://raydium.io/liquidity-pools/?tab=concentrated) and Uniswap V3/V4 pools.

In addition to the Swap routes above, a CLMM DEX connector should define the following additional routes. See [clmm-schema](https://github.com/hummingbot/gateway/blob/core-2.5/src/schemas/trading-types/clmm-schema.ts) for details.

#### GET `/pool-info`
Gets detailed information about a CLMM pool including token addresses, fees, current tick, and liquidity distribution. Request Type: `GetPoolInfoRequest`, Response Type: `PoolInfo`

#### GET `/positions-owned`
Retrieves all liquidity positions owned by a specific wallet address in CLMM pools. Request Type: Not specified in schema, Response Type: Array of `PositionInfo`

#### GET `/position-info`
Gets detailed information about a specific liquidity position including token amounts, fee earnings, and price range. Request Type: `GetPositionInfoRequest`, Response Type: `PositionInfo`

#### GET `/quote-position`
Gets a quote for opening a new liquidity position, calculating token amounts based on the specified price range. Request Type: `QuotePositionRequest`, Response Type: `QuotePositionResponse`

#### POST `/open-position`
Creates a new liquidity position in a CLMM pool with specified price range and token amounts. Request Type: `OpenPositionRequest`, Response Type: `OpenPositionResponse`

#### POST `/add-liquidity`
Adds more liquidity to an existing CLMM position within its current price range. Request Type: `AddLiquidityRequest`, Response Type: `AddLiquidityResponse`

#### POST `/remove-liquidity`
Removes liquidity from an existing CLMM position, withdrawing tokens based on the specified percentage. Request Type: `RemoveLiquidityRequest`, Response Type: `RemoveLiquidityResponse`

#### POST `/collect-fees`
Collects accumulated trading fees earned by a liquidity position in a CLMM pool. Request Type: `CollectFeesRequest`, Response Type: `CollectFeesResponse`

#### POST `/close-position`
Closes an existing CLMM position, removing all remaining liquidity and collecting any unclaimed fees. Request Type: `ClosePositionRequest`, Response Type: `ClosePositionResponse`
