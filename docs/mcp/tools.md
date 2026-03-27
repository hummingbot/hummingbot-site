# MCP Tools Reference

This page describes MCP capabilities at the **router/functionality level** to avoid tool-name drift as the MCP server evolves.

For exact callable tool names and schemas in your environment, inspect the MCP server descriptor and use your client’s tool discovery.

## Authentication and Security

- All MCP operations map to Hummingbot API routes that are protected by HTTP Basic Auth.
- In local development only, `DEBUG_MODE=true` may disable API auth.
- Treat MCP as a privileged interface: never expose credentials in prompts or logs.

## Core MCP Capability Groups

### Accounts

Typical operations:

- List accounts (`GET /accounts/`)
- Add/delete account (`POST /accounts/add-account`, `POST /accounts/delete-account`)
- Add/delete connector credentials (`POST /accounts/add-credential/...`, `POST /accounts/delete-credential/...`)
- Manage Gateway wallets

### Portfolio

Typical operations:

- Current portfolio snapshot (`POST /portfolio/state`)
- Portfolio history (`POST /portfolio/history`)
- Token/account distribution (`POST /portfolio/distribution`, `GET /portfolio/accounts-distribution`)

### Trading

Typical operations:

- Place order (`POST /trading/orders`)
- Cancel order (`POST /trading/{account}/{connector}/orders/{client_order_id}/cancel`)
- List active orders (`POST /trading/orders/active`)
- Search order/trade history (`POST /trading/orders/search`, `POST /trading/trades`)
- Positions, funding payments, leverage, and position-mode management

!!! note
    There is no dedicated `close-position` endpoint. Position closure is done by placing the appropriate counter-order.

### Market Data

Typical operations:

- Prices, candles, historical candles, order book, price-for-volume
- Funding info
- Active feed/status settings

### Rate Oracle

Typical operations:

- List sources
- Get/update oracle config
- Fetch single or batch rates

### Bot Orchestration

Typical operations:

- Start/stop named bots
- Query bot status/history and MQTT health
- Retrieve run records and aggregate stats

### Executors

Typical operations:

- Create executor (`POST /executors/`)
- Search/filter executors (`POST /executors/search`)
- Summary/performance/logs/positions
- Stop executor (`POST /executors/{executor_id}/stop`)

### Scripts and Controllers

Typical operations:

- List/get/create/update/delete script/controller files
- List/get/create/update/delete YAML configs
- Fetch config templates

### Gateway and DEX

Typical operations:

- Gateway container lifecycle (`/gateway/start|stop|restart|status|logs`)
- Gateway config/connectors/tokens/pools/wallets
- Swap quote/execute
- CLMM pools/positions/liquidity actions
- Raw Gateway passthrough via `/gateway-proxy/{path}`

### Archived Bots

Typical operations:

- Read archived DB status, summary, performance
- Query trades/orders/controllers/positions from archived runs

## Pagination and Error Model

- Search/list MCP calls commonly return paginated envelopes:

```json
{
  "total": 100,
  "page": 1,
  "items_per_page": 20,
  "data": []
}
```

- Common API-level errors surfaced through MCP: `400`, `404`, `500`, `503`.

## Best Practice

- Prefer MCP tool discovery over hardcoding tool names in prompts or automation.
- When in doubt, cross-check endpoint behavior in [API Routers](../hummingbot-api/routers.md).
