This guide provides a comprehensive walkthrough for integrating a new decentralized exchange (DEX) connector into Hummingbot's Gateway middleware. We'll use the Raydium connector as an example to demonstrate the implementation process.

## Prerequisites

Before starting, ensure you have:

1. Familiarity with TypeScript/JavaScript development
2. Understanding of the DEX's protocol and SDK
3. Understanding of the blockchain wallet and node architecture where the DEX resides
4. Access to testnet/mainnet networks for testing
5. Understanding of the [new Gateway architecture](./new/index.md)

## Requirements

A connector must implement a set of routes that match one or more [Schemas](./schemas.md). Connectors implementing these schemas must:

1. Expose all required routes defined in the corresponding schema
2. Import and use the request/response TypeScript types from the schema files
3. Structure each route in a self-contained file that includes route handler function, request validation logic, business logic for the specific DEX/protocol, and error handling
4. Follow the naming conventions and parameter structures defined in the schema
5. Return responses that strictly conform to the response type definitions
6. Add comprehensive unit tests
7. Add detailed documentation

For reference implementations, see existing connectors in the [`src/connectors`](https://github.com/hummingbot/gateway/tree/core-2.5/src/connectors) directory.

## 0. Install Gateway from Source

First, install and run Gateway from source - see [installation](./installation.md). 

Afterwards, follow the steps below to develop a Gateway connector:

## 1. Create Configuration Template

📁 **Folder** [`gateway/src/templates`](https://github.com/hummingbot/gateway/tree/core-2.5/src/templates)

Create a template in the templates folder and name it `<exchange_name>.yml`. This file defines the configurations needed for connecting to the exchange.

Example configuration for Raydium:

```yaml
# settings for AMM routes
amm:
  # how much the execution price is allowed to move unfavorably
  allowedSlippage: '1/100'
  # predefined pools
  pools:
    RAY-SOL: 'AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA'
    SOL-USDC: '58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2'
    RAY-USDC: '6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'
    # ... other pools ...

# settings for CLMM routes
clmm:
  # how much the execution price is allowed to move unfavorably
  allowedSlippage: '1/100'
  # predefined pools
  pools:
    SOL-USDC: '3ucNos4NbumPLZNWztqGHNFFgkHeRMBQAVemeeomsUxv'
    RAY-USDC: '61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht'
    # ... other pools ...
```

## 2. Create Configuration Schema

📁 **Folder** [`gateway/src/services/schema`](https://github.com/hummingbot/gateway/tree/core-2.5/src/services/schema)

Create a schema that validates your configuration template. Name it `<exchange_name>-schema.json`. This ensures type safety and validation of configuration values.

Example schema for Raydium:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "amm": {
      "type": "object",
      "properties": {
        "allowedSlippage": { "type": "string" },
        "pools": {
          "type": "object",
          "additionalProperties": { "type": "string" }
        }
      },
      "required": ["allowedSlippage", "pools"]
    },
    "clmm": {
      "type": "object",
      "properties": {
        "allowedSlippage": { "type": "string" },
        "pools": {
          "type": "object",
          "additionalProperties": { "type": "string" }
        }
      },
      "required": ["allowedSlippage", "pools"]
    }
  },
  "required": ["amm", "clmm"]
}
```

## 3. Create Connector Files

📁 **Folder** [`gateway/src/connectors`](https://github.com/hummingbot/gateway/tree/core-2.5/src/connectors)

Create a new directory for your connector with the following structure:

```
connectors/
└── raydium/
    ├── raydium.config.ts     # Configuration types and values loaded from raydium.yml
    ├── raydium.utils.ts      # Shared constants and helper functions
    ├── raydium.ts            # Core connector logic that handles Raydium SDK initialization and Solana chain interactions
    ├── amm-routes/           # AMM-specific routes
    └── clmm-routes/          # CLMM-specific routes
```

The `raydium.config.ts` file defines the TypeScript interfaces and configuration values for the config file that you created earlier. Meanwhiel, the `raydium.utils.ts` file contains shared constants and helper functions used across the connector validation functions (`isValidClmm`, `isValidAmm`, `isValidCpmm`).

The `raydium.ts` file serves as the core connector class that handles all interactions with the Raydium SDK and Solana blockchain. It implements a singleton pattern to ensure only one instance exists per network. Key responsibilities include:
- Initializing the Raydium SDK with proper network configuration and wallet connection
- Managing pool information retrieval for both AMM and CLMM pools
- Handling position management for CLMM pools
- Providing utility methods for slippage calculation and pool discovery
- Implementing chain-specific operations like token balance checks and transaction handling

The class provides methods for:
- Pool information retrieval (`getAmmPoolInfo`, `getClmmPoolInfo`)
- Position management (`getPositionInfo`, `getClmmPosition`)
- Pool type detection (`getPoolType`)
- Slippage calculation (`getSlippagePct`)

## 4. Add Routes for Each Schema

For each schema type, create the following route files:

### Swap Routes

For DEX aggregators like Jupiter, add these swap routes in a `/routes` or `/swap-routes` folder:

- `routes/quote-swap.ts`: Implements the GET `/quote-swap` endpoint
- `routes/execute-swap.ts`: Implements the POST `/execute-swap` endpoint

Since AMM and CLMM DEX connectors implement the Swap schema, create these files in their respective route folders:

- `amm-routes/quote-swap.ts`: Implements the GET `/quote-swap` endpoint
- `amm-routes/execute-swap.ts`: Implements the POST `/execute-swap` endpoint
- `clmm-routes/quote-swap.ts`: Implements the GET `/quote-swap` endpoint
- `clmm-routes/execute-swap.ts`: Implements the POST `/execute-swap` endpoint

Example structure for `amm-routes/quote-swap.ts`:
```typescript
import { GetSwapQuoteRequest, GetSwapQuoteResponse } from '@hummingbot/gateway/schemas/trading-types/swap-schema';

export async function getQuoteSwap(request: GetSwapQuoteRequest): Promise<GetSwapQuoteResponse> {
  // Implementation logic here
  return {
    // Response matching GetSwapQuoteResponse type
  };
}
```

### AMM Routes
Create these files in an `amm-routes/` subdirectory:

- `pool-info.ts`: Implements GET `/pool-info`
- `quote-liquidity.ts`: Implements GET `/quote-liquidity`
- `add-liquidity.ts`: Implements POST `/add-liquidity`
- `remove-liquidity.ts`: Implements POST `/remove-liquidity`

Example structure for `pool-info.ts`:
```typescript
import { GetPoolInfoRequest, PoolInfo } from '@hummingbot/gateway/schemas/trading-types/amm-schema';

export async function getPoolInfo(request: GetPoolInfoRequest): Promise<PoolInfo> {
  // Implementation logic here
  return {
    // Response matching PoolInfo type
  };
}
```

### CLMM Routes
Create these files in a `clmm-routes/` subdirectory:

- `pool-info.ts`: Implements GET `/pool-info`
- `positions-owned.ts`: Implements GET `/positions-owned`
- `position-info.ts`: Implements GET `/position-info`
- `quote-position.ts`: Implements GET `/quote-position`
- `open-position.ts`: Implements POST `/open-position`
- `add-liquidity.ts`: Implements POST `/add-liquidity`
- `remove-liquidity.ts`: Implements POST `/remove-liquidity`
- `collect-fees.ts`: Implements POST `/collect-fees`
- `close-position.ts`: Implements POST `/close-position`

Example structure for `position-info.ts`:
```typescript
import { GetPositionInfoRequest, PositionInfo } from '@hummingbot/gateway/schemas/trading-types/clmm-schema';

export async function getPositionInfo(request: GetPositionInfoRequest): Promise<PositionInfo> {
  // Implementation logic here
  return {
    // Response matching PositionInfo type
  };
}
```

For each route file:

1. Import the appropriate request/response types from the schema
2. Implement the route handler function with proper typing
3. Add input validation
4. Implement the business logic for interacting with the DEX
5. Handle errors appropriately
6. Return responses that strictly match the schema types

## 5. Register Connector Routes

Update GET `/connectors` route:

📁 **File** [`gateway/src/connectors/connector.routes.ts`](https://github.com/hummingbot/gateway/tree/core-2.5/src/connectors/connectors.routes.ts)

```typescript
{
    name: 'raydium/amm',
    trading_types: ['amm', 'swap'],
    available_networks: RaydiumConfig.config.availableNetworks,
},
{
    name: 'raydium/clmm',
    trading_types: ['clmm', 'swap'],
    available_networks: RaydiumConfig.config.availableNetworks,
},
```

Add the new connector routes to Gateway's `app.ts`:

📁 **File** [`gateway/src/app.ts`](https://github.com/hummingbot/gateway/tree/core-2.5/src/app.ts)

```typescript
{ name: 'raydium/clmm', description: 'Raydium CLMM connector endpoints' },
{ name: 'raydium/amm', description: 'Raydium AMM connector endpoints' },
```

## 6. Perform Manual Testing

- Run in dev mode and test each route using the Swagger UI at <https://localhost:15888/docs>
- Verify responses match schema definitions
- Test with different tokens, pools, and amounts
- Handle common errors with appropriate Fastify responses and error messages

## 7. Add Unit Tests

!!! warning
    Reference implementations coming soon

 - Create comprehensive test suites for each route
 - Test edge cases and error conditions
 - Ensure proper validation of inputs
 - Verify response formats

## 8. Add Documentation

 - Add a connector documentation page similar to [Raydium](/exchanges/gateway/raydium)
 - Include exchange-specific information on setting up wallets, accessing markets, etc
 - Describe configuration options and supported networks
 - Document known issues and custom endpoints
 - Add the page to the list of Gateway DEXs in [`mkdoc.yml`](https://github.com/hummingbot/hummingbot-site/blob/main/mkdocs.yml)

## 9. (Optional) Propose for Inclusion in Hummingbot

New Gateway DEX connectors may be contributed by community members via [New Connector Proposals](/governance/proposals). To propose your connector for inclusion in the official Hummingbot codebase:

1. Submit a pull request with your connector code to the [Hummingbot Gateway repository](https://github.com/hummingbot/gateway)
2. Create a corresponding pull request to the [Hummingbot Site repository](https://github.com/hummingbot/hummingbot-site) with documentation for your connector
3. Create a New Connector Proposal following the [governance](/governance/proposals) process, which requires a minimum HBOT token balance to submit

If approved, the Hummingbot Foundation will review and merge your connector into the official codebase in a future release.
