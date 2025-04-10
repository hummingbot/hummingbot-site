# Adding a New DEX Connector

This guide provides a comprehensive walkthrough for integrating a new decentralized exchange (DEX) connector into Hummingbot's Gateway middleware. We'll use the Raydium connector as an example to demonstrate the implementation process.

## Prerequisites

Before starting, ensure you have:

1. Familiarity with TypeScript/JavaScript development
2. Understanding of the DEX's protocol and SDK
3. Access to the DEX's testnet/mainnet for testing
4. Basic knowledge of REST API development
5. Understanding of [Gateway's architecture](../new/index.md)

## Requirements

A connector must implement a set of routes that match one or more [Trading Schemas](./schemas.md). Connectors implementing these schemas must:

1. Expose all required routes defined in the corresponding schema
2. Import and use the request/response TypeScript types from the schema files
3. Structure each route in a self-contained file that includes:
   - Route handler function
   - Request validation logic
   - Business logic for the specific DEX/protocol
   - Error handling
4. Follow the naming conventions and parameter structures defined in the schema
5. Return responses that strictly conform to the response type definitions
6. Add comprehensive unit tests
7. Add detailed documentation

For reference implementations, see existing connectors in the [`src/connectors`](https://github.com/hummingbot/gateway/tree/core-2.5/src/connectors) directory.

## Implementation Steps

### 0. Install Gateway from Source

First, install and run Gateway from source - see [installation](./installation.md). 

Afterwards, follow the steps below to develop a Gateway connector:

### 1. Create Configuration Template

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

### 2. Create Configuration Schema

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

### 3. Create Connector Files

📁 **Folder** [`gateway/src/connectors`](https://github.com/hummingbot/gateway/tree/core-2.5/src/connectors)

Create a new directory for your connector with the following structure:

```
connectors/
└── raydium/
    ├── raydium.config.ts      # Configuration and constants
    ├── raydium.ts            # Core connector logic
    ├── amm-routes/           # AMM-specific routes
    └── clmm-routes/          # CLMM-specific routes
```

### 4. Add Routes for Each Schema

Create a file for each route.

### 5. Register Connector Routes

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

Add the new connector routes to Gateway:

📁 **File** [`gateway/src/app.ts`](https://github.com/hummingbot/gateway/tree/core-2.5/src/app.ts)

```typescript
{ name: 'raydium/clmm', description: 'Raydium CLMM connector endpoints' },
{ name: 'raydium/amm', description: 'Raydium AMM connector endpoints' },
```

## 6. Perform manual testing

1. **Unit Tests**
   - Create comprehensive test suites for each route
   - Test edge cases and error conditions
   - Ensure proper validation of inputs
   - Verify response formats

## 7. Add connector tests

3. **Manual Testing**
   - Test each route using the Swagger UI
   - Verify responses match schema definitions
   - Test with different network conditions
   - Validate error messages

## 8. Add documentation

1. **Code Documentation**
   - Add JSDoc comments to all functions
   - Document complex business logic
   - Include examples where helpful
   - Document error conditions

2. **User Documentation**
   - Create a connector guide
   - Document configuration options
   - Provide usage examples
   - List supported networks and tokens

3. **Add to Site Index**

📁 **File** [`hummingbot-site: mkdocs.yml`](https://github.com/hummingbot/hummingbot-site/blob/main/mkdocs.yml)

```yaml
- Gateway Connectors:
    - Gateway Connectors: gateway/index.md
    - DEXs:
      - Raydium: gateway/exchanges/raydium.md
```
