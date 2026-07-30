# MCP Tools Reference

This page describes MCP capabilities at the **router/functionality level** to avoid tool-name drift as the MCP server evolves.

For exact callable tool names and schemas in your environment, inspect the MCP server descriptor and use your client’s tool discovery.

## Authentication and Security

- All MCP operations map to Hummingbot API routes that are protected by HTTP Basic Auth.
- Treat MCP as a privileged interface: never expose credentials in prompts or logs.
- For production, run the API behind [Tailscale](../hummingbot-api/tailscale.md) so MCP clients connect over a private network.

## Core MCP Capability Groups

### Accounts

Typical operations:

- List accounts (`GET /accounts/`)
- Add/delete account (`POST /accounts/add-account`, `POST /accounts/delete-account`)
- Add/delete connector credentials (`POST /accounts/add-credential/...`, `POST /accounts/delete-credential/...`)
- Manage Gateway wallets (`GET /accounts/gateway/wallets`, `POST /accounts/gateway/add-wallet`, `POST /accounts/gateway/wallet/set-default`)

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

- Prices, candles, historical candles, order book helpers, VWAP estimates
- Tickers and cross-rates (`GET /market-data/tickers`, `POST /market-data/rates`, `GET /market-data/rate/{trading_pair}`)
- Funding info, pool prices, order book feed diagnostics/restart
- Active feed/status settings

### Bot Orchestration

Typical operations:

- Start/stop named bots; deploy V2 scripts and controllers
- Query bot status/history and MQTT health
- Controller performance (latest/history)
- Bot-run records, stats, and deletion
- Stop-and-archive workflows

### Executors

Typical operations:

- Create executor (`POST /executors/`)
- Search/filter executors (`POST /executors/search`)
- Summary, performance, logs, positions
- List executor types and config schemas (`GET /executors/types/available`, `GET /executors/types/{type}/config`)
- Stop executor (`POST /executors/{executor_id}/stop`)

### Scripts and Controllers

Typical operations:

- List/get/create/update/delete script/controller files
- List/get/create/update/delete YAML configs
- Fetch and validate config templates
- Live controller config updates on running bots

### Backtesting

Typical operations:

- Synchronous backtest (`POST /backtesting/run`)
- Async backtest tasks (`POST /backtesting/tasks`, poll `GET /backtesting/tasks/{task_id}`)

### Gateway and DEX

Typical operations:

- Gateway container lifecycle (`/gateway/start|stop|restart|status|logs`)
- Network/token/pool CRUD (`/gateway/networks/...`)
- RPC provider API keys (`/gateway/apiKeys`)
- Swap quote/execute and swap history (`/gateway/swap/...`, `/gateway/swaps/...`)
- CLMM open/add/remove/close/collect-fees (`/gateway/clmm/...`)

Gateway uses **HTTPS + mTLS**; there is no `/gateway-proxy` passthrough router.

### Archived Bots, Storage, and System

Typical operations:

- Read archived DB status, summary, performance, trades, orders, executors, positions
- Disk usage for bot directories (`GET /storage/`)
- Host resource metrics (`GET /system/resources`)

### WebSocket Streaming

MCP may expose WebSocket-backed streaming for market data and executors:

- `WS /ws/market-data` — candles, order book, trades
- `WS /ws/executors` — executor summaries, performance, positions, bot status, logs

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

- Common API-level errors surfaced through MCP: `400`, `401`, `404`, `422`, `500`, `503`.

## Best Practice

- Prefer MCP tool discovery over hardcoding tool names in prompts or automation.
- When in doubt, cross-check endpoint behavior in [API Routers](../hummingbot-api/routers.md) or live Swagger at `/docs`.
