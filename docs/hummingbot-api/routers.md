# API Routers

Reference for Hummingbot API **v1.0.1** REST and WebSocket routes. The live OpenAPI spec at `http://localhost:8000/docs` is always authoritative when in doubt.

## Request/Response Conventions

- **Root:** `GET /` returns API name, version, and status — **no authentication required**.
- **Authentication:** All REST routers below use **HTTP Basic Auth** (`Authorization: Basic …`). WebSocket routes authenticate separately (see [WebSocket](#websocket)).
- **Trailing slashes:** `redirect_slashes=False` — paths with trailing slashes (for example `/docker/pull-image/`) must match exactly.
- **Pagination:** Search/list endpoints commonly return:

```json
{
  "total": 100,
  "page": 1,
  "items_per_page": 20,
  "data": []
}
```

- **Error responses:** Typical HTTP codes are `400`, `401`, `404`, `422`, `500`, and `503`.
- **CORS:** Restricted by default to localhost origins. Configure production origins with `CORS_ALLOW_ORIGINS` or `CORS_ALLOW_ORIGIN_REGEX` in `.env`.

!!! note "Removed routers"
    The `/rate-oracle` and `/gateway-proxy` routers were removed. Use **Market Data** endpoints (`/market-data/tickers`, `/market-data/rates`) for prices and cross-rates. Gateway is accessed directly through the `/gateway` router (mTLS).

## 🐳 Docker (`/docker`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/docker/running` | Check whether the Docker daemon is reachable |
| `GET` | `/docker/available-images/` | List available Hummingbot Docker images |
| `GET` | `/docker/active-containers` | Return currently running bot containers |
| `GET` | `/docker/exited-containers` | Return stopped containers |
| `POST` | `/docker/clean-exited-containers` | Remove exited containers in bulk |
| `POST` | `/docker/remove-container/{container_name}` | Remove one container (with optional archiving) |
| `POST` | `/docker/stop-container/{container_name}` | Stop a running container |
| `POST` | `/docker/start-container/{container_name}` | Start a stopped container |
| `POST` | `/docker/pull-image/` | Trigger image pull *(async; poll status)* |
| `GET` | `/docker/pull-status/` | Check current image-pull progress/status |

## 💳 Accounts (`/accounts`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/accounts/` | List configured API account names |
| `GET` | `/accounts/{account_name}/credentials` | List connector credentials for an account |
| `POST` | `/accounts/add-account?account_name=...` | Create a new account namespace |
| `POST` | `/accounts/delete-account?account_name=...` | Delete an existing account namespace |
| `POST` | `/accounts/add-credential/{account_name}/{connector_name}` | Add/update connector credentials |
| `POST` | `/accounts/delete-credential/{account_name}/{connector_name}` | Remove connector credentials |
| `GET` | `/accounts/gateway/wallets` | List saved Gateway wallets |
| `POST` | `/accounts/gateway/add-wallet` | Import a Gateway wallet (externally generated key) |
| `POST` | `/accounts/gateway/wallet/set-default` | Set the default Gateway wallet |
| `DELETE` | `/accounts/gateway/{chain}/{address}` | Remove a Gateway wallet by chain/address |

!!! warning "Removed wallet endpoints (Gateway v2.15.1+)"
    Server-side wallet creation, send, and private-key export endpoints were removed for security. Wallets must be imported with `POST /accounts/gateway/add-wallet`.

## 🔌 Connectors (`/connectors`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/connectors/` | List available connector names |
| `GET` | `/connectors/{connector_name}/config-map` | Return required config keys for a connector |
| `GET` | `/connectors/{connector_name}/trading-rules` | Return trading rules for one or more pairs |
| `GET` | `/connectors/{connector_name}/order-types` | Return supported order types |

## 📊 Portfolio (`/portfolio`)

All main portfolio data endpoints use **POST + JSON body**.

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/portfolio/state` | Fetch current balances/valuations across accounts/connectors |
| `POST` | `/portfolio/history` | Fetch historical portfolio snapshots over a time range |
| `POST` | `/portfolio/distribution` | Fetch token-level distribution across holdings |
| `GET` | `/portfolio/accounts-distribution` | Fetch account-level allocation breakdown |

`POST /portfolio/state` body:

```json
{
  "account_names": ["string"],
  "connector_names": ["string"],
  "skip_gateway": false,
  "refresh": false
}
```

`POST /portfolio/history` also supports `start_time`, `end_time`, and `interval` (`5m | 15m | 30m | 1h | 4h | 12h | 1d`).

## 💹 Trading (`/trading`)

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/trading/orders` | Place a new trade/order request |
| `POST` | `/trading/{account_name}/{connector_name}/orders/{client_order_id}/cancel` | Cancel one order by client ID |
| `POST` | `/trading/positions` | Query open perpetual positions |
| `POST` | `/trading/orders/active` | List in-flight active orders |
| `POST` | `/trading/orders/search` | Search historical orders with filters/pagination |
| `POST` | `/trading/trades` | Query historical trades/fills |
| `GET` | `/trading/{account_name}/{connector_name}/position-mode` | Get current position mode |
| `POST` | `/trading/{account_name}/{connector_name}/position-mode` | Set position mode (`HEDGE`/`ONEWAY`) |
| `POST` | `/trading/{account_name}/{connector_name}/leverage` | Set leverage for a connector/pair context |
| `POST` | `/trading/funding-payments` | Query funding payment history |

!!! note
    There is no `POST /trading/close-position` endpoint. Close positions by placing a counter-order via `POST /trading/orders` using the correct `position_action`.

## 📈 Market Data (`/market-data`)

Replaces the former `/rate-oracle` router. Tickers and cross-rates use a shared ticker pool; the global quote token is read from `conf_client.yml` (`global_token.global_token_name`, default `USDT`).

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/market-data/candles` | Get live/cached candles for a connector/pair |
| `POST` | `/market-data/historical-candles` | Fetch historical OHLCV candles over a time range |
| `GET` | `/market-data/active-feeds` | List currently active data-feed subscriptions |
| `GET` | `/market-data/settings` | Return market-data service configuration/timeouts |
| `GET` | `/market-data/available-candle-connectors` | List connectors with candle support |
| `POST` | `/market-data/prices` | Get latest prices for one or more trading pairs |
| `GET` | `/market-data/tickers` | Get all cached ticker prices |
| `GET` | `/market-data/tickers/{connector_name}` | Get tickers for one connector |
| `POST` | `/market-data/rates` | Fetch cross-rates for a list of trading pairs |
| `GET` | `/market-data/rate/{trading_pair}` | Get cached rate for one pair |
| `GET` | `/market-data/pool-prices` | Get AMM/CLMM pool prices via Gateway |
| `POST` | `/market-data/funding-info` | Get perpetual funding information |
| `POST` | `/market-data/order-book` | Get order book snapshot/depth |
| `POST` | `/market-data/order-book/price-for-volume` | Estimate price for target fill volume |
| `POST` | `/market-data/order-book/volume-for-price` | Estimate volume for a target price |
| `POST` | `/market-data/order-book/price-for-quote-volume` | Estimate price for target quote volume |
| `POST` | `/market-data/order-book/quote-volume-for-price` | Estimate quote volume for a target price |
| `POST` | `/market-data/order-book/vwap-for-volume` | VWAP estimate for target volume |
| `POST` | `/market-data/trading-pair/add` | Add a trading pair to the order book feed |
| `POST` | `/market-data/trading-pair/remove` | Remove a trading pair from the order book feed |
| `GET` | `/market-data/order-book/diagnostics/{connector_name}` | Order book feed diagnostics |
| `POST` | `/market-data/order-book/restart/{connector_name}` | Restart order book feed for a connector |

## 🤖 Bot Orchestration (`/bot-orchestration`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/bot-orchestration/status` | Get status for all managed bots |
| `GET` | `/bot-orchestration/mqtt` | Check MQTT bridge/broker connectivity |
| `GET` | `/bot-orchestration/controller-performance-latest` | Latest controller performance snapshots |
| `GET` | `/bot-orchestration/controller-performance-history` | Historical controller performance |
| `GET` | `/bot-orchestration/{bot_name}/status` | Get status for one bot |
| `GET` | `/bot-orchestration/{bot_name}/history` | Get performance/history for one bot |
| `POST` | `/bot-orchestration/start-bot` | Start a bot instance from script+config |
| `POST` | `/bot-orchestration/stop-bot` | Stop a running bot instance |
| `GET` | `/bot-orchestration/bot-runs` | List historical bot-run records |
| `GET` | `/bot-orchestration/bot-runs/stats` | Get aggregate bot-run statistics |
| `GET` | `/bot-orchestration/bot-runs/{bot_run_id}` | Get one bot-run record |
| `DELETE` | `/bot-orchestration/bot-runs/{bot_run_id}` | Delete a bot-run record |
| `POST` | `/bot-orchestration/stop-and-archive-bot/{bot_name}` | Stop a bot and archive its data |
| `POST` | `/bot-orchestration/deploy-v2-controllers` | Deploy a V2 controller-based bot |
| `POST` | `/bot-orchestration/deploy-v2-script` | Deploy a V2 script-based bot |

`StartBotAction` body:

```json
{
  "bot_name": "my_bot",
  "log_level": "INFO",
  "script": "v2_with_controllers.py",
  "conf": "conf_v2_with_controllers_my_config.yml",
  "async_backend": false
}
```

`StopBotAction` body:

```json
{
  "bot_name": "my_bot",
  "skip_order_cancellation": false,
  "async_backend": false
}
```

## ⚙️ Executors (`/executors`)

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/executors/` | Create a new executor instance |
| `POST` | `/executors/search` | Search/filter executors with pagination |
| `GET` | `/executors/summary` | Get aggregate executor summary |
| `GET` | `/executors/performance` | Get detailed performance metrics |
| `GET` | `/executors/{executor_id}` | Get executor details |
| `GET` | `/executors/{executor_id}/logs` | Get logs for an executor |
| `POST` | `/executors/{executor_id}/stop` | Stop one executor |
| `GET` | `/executors/types/available` | List available executor types |
| `GET` | `/executors/types/{executor_type}/config` | Get config schema for an executor type |
| `GET` | `/executors/positions/summary` | Summary of held positions across executors |
| `GET` | `/executors/positions/orphaned` | Terminated executors that may still own an on-chain position |
| `GET` | `/executors/positions/{connector_name}/{trading_pair}` | Position detail for a connector/pair |
| `DELETE` | `/executors/positions/{connector_name}/{trading_pair}` | Clear a tracked position |

Supported executor types include `position_executor`, `dca_executor`, `grid_executor`, `arbitrage_executor`, `twap_executor`, `xemm_executor`, and `lp_executor`.

## 🧩 Scripts (`/scripts`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/scripts/` | List available script files |
| `GET` | `/scripts/configs/` | List script config YAML files |
| `GET` | `/scripts/configs/{config_name}` | Read one script config |
| `POST` | `/scripts/configs/{config_name}` | Create/update one script config |
| `DELETE` | `/scripts/configs/{config_name}` | Delete one script config |
| `GET` | `/scripts/{script_name}` | Read one script source file |
| `POST` | `/scripts/{script_name}` | Create/update one script source file |
| `DELETE` | `/scripts/{script_name}` | Delete one script source file |
| `GET` | `/scripts/{script_name}/config/template` | Get script config template/schema |

## 🎛️ Controllers (`/controllers`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/controllers/` | List available controllers |
| `GET` | `/controllers/configs/` | List controller config YAML files |
| `GET` | `/controllers/configs/{config_name}` | Read one controller config |
| `POST` | `/controllers/configs/{config_name}` | Create/update one controller config |
| `DELETE` | `/controllers/configs/{config_name}` | Delete one controller config |
| `GET` | `/controllers/{controller_type}/{controller_name}` | Read one controller source |
| `POST` | `/controllers/{controller_type}/{controller_name}` | Create/update controller source |
| `DELETE` | `/controllers/{controller_type}/{controller_name}` | Delete one controller source |
| `GET` | `/controllers/{controller_type}/{controller_name}/config/template` | Get controller config template/schema |
| `POST` | `/controllers/{controller_type}/{controller_name}/config/validate` | Validate a controller config |
| `GET` | `/controllers/bots/{bot_name}/configs` | List controller configs for a running bot |
| `POST` | `/controllers/bots/{bot_name}/{controller_name}/config` | Update a controller config on a running bot |

## 🔄 Backtesting (`/backtesting`)

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/backtesting/run` | Run a backtest synchronously and return results |
| `POST` | `/backtesting/tasks` | Submit an async backtest task |
| `GET` | `/backtesting/tasks` | List async backtest tasks |
| `GET` | `/backtesting/tasks/{task_id}` | Get async backtest task status/results |
| `DELETE` | `/backtesting/tasks/{task_id}` | Cancel/delete an async backtest task |

Synchronous runs return results in the same response (`executors`, `processed_data`, `results`).

## 🌐 Gateway (`/gateway`)

Gateway communication uses **HTTPS + mTLS**. Set `GATEWAY_URL=https://localhost:15888` (or `https://gateway:15888` in Docker). `CONFIG_PASSWORD` encrypts credentials and serves as the Gateway mTLS passphrase.

### Container & infrastructure

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/gateway/status` | Get Gateway service/container status |
| `POST` | `/gateway/start` | Start Gateway |
| `POST` | `/gateway/stop` | Stop Gateway |
| `POST` | `/gateway/restart` | Restart Gateway |
| `GET` | `/gateway/logs` | Read Gateway logs |
| `GET` | `/gateway/connectors` | List available Gateway connectors |
| `GET` | `/gateway/connectors/{connector_name}` | Get one connector config |
| `POST` | `/gateway/connectors/{connector_name}` | Update one connector config |
| `GET` | `/gateway/apiKeys` | List RPC provider API keys |
| `POST` | `/gateway/apiKeys` | Add/update RPC provider API keys |
| `GET` | `/gateway/chains` | List supported chains |
| `GET` | `/gateway/pools` | List pools *(deprecated — use `/gateway/networks/{network_id}/pools`)* |
| `GET` | `/gateway/networks` | List Gateway networks |
| `GET` | `/gateway/networks/{network_id}` | Get network config |
| `POST` | `/gateway/networks/{network_id}` | Update network config |
| `GET` | `/gateway/networks/{network_id}/tokens` | List tokens for a network |
| `POST` | `/gateway/networks/{network_id}/tokens` | Add/update a token |
| `POST` | `/gateway/networks/{network_id}/tokens/save/{token_address}` | Save token from template |
| `DELETE` | `/gateway/networks/{network_id}/tokens/{token_address}` | Remove a token |
| `GET` | `/gateway/networks/{network_id}/pools` | List pools for a network |
| `POST` | `/gateway/networks/{network_id}/pools` | Add/update a pool |
| `POST` | `/gateway/networks/{network_id}/pools/save/{pool_address}` | Save pool from template |
| `DELETE` | `/gateway/networks/{network_id}/pools/{pool_address}` | Remove a pool |

### Gateway Swaps (`/gateway`)

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/gateway/swap/quote` | Get DEX swap quote |
| `POST` | `/gateway/swap/execute` | Execute DEX swap |
| `POST` | `/gateway/swap/execute-quote` | Execute a quote from `/swap/quote` by its `quote_id` |
| `GET` | `/gateway/swaps/{transaction_hash}/status` | Poll swap transaction status |
| `POST` | `/gateway/swaps/search` | Search swap history |
| `GET` | `/gateway/swaps/summary` | Aggregate swap statistics |

### Gateway CLMM (`/gateway`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/gateway/clmm/pool-info` | Get CLMM pool info |
| `GET` | `/gateway/clmm/pools` | List CLMM pools |
| `POST` | `/gateway/clmm/open` | Open a new CLMM position |
| `POST` | `/gateway/clmm/add` | Add liquidity to a position |
| `POST` | `/gateway/clmm/remove` | Remove liquidity from a position |
| `POST` | `/gateway/clmm/close` | Close a CLMM position |
| `POST` | `/gateway/clmm/collect-fees` | Collect fees from a position |
| `POST` | `/gateway/clmm/positions_owned` | List owned CLMM positions |
| `GET` | `/gateway/clmm/positions/{position_address}/events` | Get position event history |
| `POST` | `/gateway/clmm/quote-position` | Quote a candidate position before opening or adding |
| `POST` | `/gateway/clmm/create-pool` | Create a new (empty) CLMM pool |
| `GET` | `/gateway/clmm/position-info` | Get a single CLMM position by address |
| `POST` | `/gateway/clmm/positions/search` | Search CLMM positions |

### Gateway AMM (`/gateway`)

Full-range (constant-product) liquidity, parallel to the CLMM router above.

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/gateway/amm/pool-info` | Pool reserves, price and base fee, by pool address |
| `GET` | `/gateway/amm/position-info` | A wallet's aggregate liquidity in a pool, plus a per-position breakdown |
| `POST` | `/gateway/amm/positions-owned` | List a wallet's AMM positions across pools (Meteora DAMM v2 only) |
| `POST` | `/gateway/amm/quote-liquidity` | Quote a two-sided liquidity deposit |
| `POST` | `/gateway/amm/add-liquidity` | Add two-sided liquidity to a pool |
| `POST` | `/gateway/amm/remove-liquidity` | Remove liquidity from a pool |
| `POST` | `/gateway/amm/create-pool` | Create and seed a new AMM pool |
| `POST` | `/gateway/amm/events/search` | Search recorded AMM liquidity writes, newest first |
| `POST` | `/gateway/amm/positions/search` | Search tracked AMM positions, newest first |

## 🗄️ Archived Bots (`/archived-bots`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/archived-bots/` | List archived bot databases |
| `DELETE` | `/archived-bots/{db_path}` | Delete an archived bot database |
| `GET` | `/archived-bots/{db_path}/status` | Get high-level archive status |
| `GET` | `/archived-bots/{db_path}/summary` | Get summary metrics from an archive |
| `GET` | `/archived-bots/{db_path}/performance` | Get performance analysis from an archive |
| `GET` | `/archived-bots/{db_path}/trades` | Query archived trades |
| `GET` | `/archived-bots/{db_path}/orders` | Query archived orders |
| `GET` | `/archived-bots/{db_path}/executors` | Query archived executor records |
| `GET` | `/archived-bots/{db_path}/controllers` | Query archived controller state snapshots |
| `GET` | `/archived-bots/{db_path}/positions` | Query archived position records |

## 💾 Storage (`/storage`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/storage/` | Disk usage report for `bots/` directories |

## 🖥️ System (`/system`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/system/resources` | Host CPU, RAM, and disk metrics |

## WebSocket

WebSocket routes handle their own authentication (not covered by the REST `Depends(auth_user)` middleware). Failed auth closes with code `4001`.

**Authentication methods:**

1. `Authorization: Basic …` header
2. Query param `?token=<base64(user:pass)>`
3. Query params `?username=...&password=...`

### `/ws/market-data`

Stream candles, order book snapshots, and trades.

```json
{"action": "subscribe", "type": "candles", "connector": "binance", "trading_pair": "BTC-USDT", "interval": "1m", "update_interval": 1.0}
```

Subscription types: `candles`, `order_book`, `trades`.

### `/ws/executors`

Stream executor summaries, performance, positions, logs, and bot status.

Subscription types: `executors`, `executor_detail`, `executor_summary`, `performance`, `positions`, `executor_logs`, `bot_status`, `all_bots_status`.

Both endpoints support `{"action": "ping"}` / `{"type": "pong"}` and periodic heartbeat messages.
