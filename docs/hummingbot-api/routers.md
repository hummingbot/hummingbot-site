# API Routers

This page summarizes the current Hummingbot API routers and endpoint patterns.

## Request/Response Conventions

- **Authentication:** All routes use HTTP Basic Auth. In local development, `DEBUG_MODE=true` disables auth.
- **Pagination:** Search/list endpoints commonly return:

```json
{
  "total": 100,
  "page": 1,
  "items_per_page": 20,
  "data": []
}
```

- **Error responses:** Typical HTTP codes are `400`, `404`, `500`, and `503`.
- **CORS:** API currently allows all origins (`*`). Restrict in production.

## 🐳 Docker (`/docker`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/docker/running` | Check whether the Docker daemon is reachable |
| `GET` | `/docker/available-images` | List available Hummingbot Docker images |
| `GET` | `/docker/active-containers` | Return currently running bot containers |
| `GET` | `/docker/exited-containers` | Return stopped containers |
| `POST` | `/docker/clean-exited-containers` | Remove exited containers in bulk |
| `POST` | `/docker/remove-container/{container_name}` | Remove one container (with optional archiving) |
| `POST` | `/docker/stop-container/{container_name}` | Stop a running container |
| `POST` | `/docker/start-container/{container_name}` | Start a stopped container |
| `POST` | `/docker/pull-image` | Trigger image pull *(async; poll status)* |
| `GET` | `/docker/pull-status` | Check current image-pull progress/status |

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
| `POST` | `/accounts/gateway/add-wallet` | Add a new Gateway wallet |
| `DELETE` | `/accounts/gateway/{chain}/{address}` | Remove a Gateway wallet by chain/address |

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

Most market data retrieval endpoints are **POST + JSON body**.

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/market-data/candles` | Get live/cached candles for a connector/pair |
| `POST` | `/market-data/historical-candles` | Fetch historical OHLCV candles over a time range |
| `GET` | `/market-data/active-feeds` | List currently active data-feed subscriptions |
| `GET` | `/market-data/settings` | Return market-data service configuration/timeouts |
| `GET` | `/market-data/available-candle-connectors` | List connectors with candle support |
| `POST` | `/market-data/prices` | Get latest prices for one or more trading pairs |
| `POST` | `/market-data/funding-info` | Get perpetual funding information |
| `POST` | `/market-data/order-book` | Get order book snapshot/depth |
| `POST` | `/market-data/order-book/price-for-volume` | Estimate price for target fill volume |

## 📉 Rate Oracle (`/rate-oracle`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/rate-oracle/sources` | List supported oracle sources |
| `GET` | `/rate-oracle/config` | Get current oracle source/quote settings |
| `PUT` | `/rate-oracle/config` | Update oracle configuration |
| `POST` | `/rate-oracle/rates` | Fetch rates for a list of trading pairs |
| `GET` | `/rate-oracle/rate/{trading_pair}` | Get cached rate for one pair |
| `GET` | `/rate-oracle/rate-async/{trading_pair}` | Fetch fresh (non-cached) rate for one pair |
| `GET` | `/rate-oracle/prices` | Get all cached oracle prices |

## 🤖 Bot Orchestration (`/bot-orchestration`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/bot-orchestration/status` | Get status for all managed bots |
| `GET` | `/bot-orchestration/mqtt` | Check MQTT bridge/broker connectivity |
| `GET` | `/bot-orchestration/{bot_name}/status` | Get status for one bot |
| `GET` | `/bot-orchestration/{bot_name}/history` | Get performance/history for one bot |
| `POST` | `/bot-orchestration/start-bot` | Start a bot instance from script+config |
| `POST` | `/bot-orchestration/stop-bot` | Stop a running bot instance |
| `GET` | `/bot-orchestration/bot-runs` | List historical bot-run records |
| `GET` | `/bot-orchestration/bot-runs/{bot_run_id}` | Get one bot-run record |
| `GET` | `/bot-orchestration/bot-runs/stats` | Get aggregate bot-run statistics |

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
| `GET` | `/executors/{executor_id}` | Get executor details |
| `GET` | `/executors/{executor_id}/logs` | Get logs for an executor |
| `POST` | `/executors/{executor_id}/stop` | Stop one executor |
| `GET` | `/executors/{executor_id}/performance` | Get detailed performance metrics |
| `GET` | `/executors/{executor_id}/positions` | Get positions linked to an executor |
| `GET` | `/executors/{executor_id}/positions/{position_id}/hold` | Get hold details for a position |

## 🧩 Scripts (`/scripts`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/scripts/` | List available script files |
| `GET` | `/scripts/configs` | List script config YAML files |
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
| `GET` | `/controllers/configs` | List controller config YAML files |
| `GET` | `/controllers/configs/{config_name}` | Read one controller config |
| `POST` | `/controllers/configs/{config_name}` | Create/update one controller config |
| `DELETE` | `/controllers/configs/{config_name}` | Delete one controller config |
| `GET` | `/controllers/{controller_type}/{controller_name}` | Read one controller source |
| `POST` | `/controllers/{controller_type}/{controller_name}` | Create/update controller source |
| `DELETE` | `/controllers/{controller_type}/{controller_name}` | Delete one controller source |
| `GET` | `/controllers/{controller_type}/{controller_name}/config/template` | Get controller config template/schema |

## 🔄 Backtesting (`/backtesting`)

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/backtesting/run-backtesting` | Run a backtest and return results synchronously |

Backtesting is synchronous and returns results in the same response (`executors`, `processed_data`, `results`).

## 🌐 Gateway (`/gateway`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/gateway/status` | Get Gateway service/container status |
| `POST` | `/gateway/start` | Start Gateway |
| `POST` | `/gateway/stop` | Stop Gateway |
| `POST` | `/gateway/restart` | Restart Gateway |
| `GET` | `/gateway/logs` | Read Gateway logs |
| `GET` | `/gateway/config` | Read Gateway config |
| `POST` | `/gateway/config` | Update Gateway config |
| `GET` | `/gateway/connectors` | List available Gateway connectors |
| `GET` | `/gateway/tokens` | List configured tokens |
| `GET` | `/gateway/pools` | List pools |
| `GET` | `/gateway/wallets` | List Gateway wallets |
| `POST` | `/gateway/swap/quote` | Get DEX swap quote |
| `POST` | `/gateway/swap/execute` | Execute DEX swap |
| `POST` | `/gateway/clmm/quote` | Get CLMM quote data |
| `POST` | `/gateway/clmm/pools` | Query CLMM pools |
| `POST` | `/gateway/clmm/positions` | Query CLMM positions |
| `POST` | `/gateway/clmm/add-liquidity` | Add CLMM liquidity |
| `POST` | `/gateway/clmm/remove-liquidity` | Remove CLMM liquidity |
| `POST` | `/gateway/clmm/collect-fees` | Collect CLMM fees |
| `GET` | `/gateway/clmm/balances` | Read CLMM-related balances |

## 🔀 Gateway Proxy (`/gateway-proxy`)

| Method | Path | Description |
| --- | --- | --- |
| `ANY` | `/gateway-proxy/{path:path}` | Forward authenticated requests to raw Gateway endpoints |

Forwards requests to `GATEWAY_URL` through the authenticated API layer.

## 🗄️ Archived Bots (`/archived-bots`)

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/archived-bots/` | List archived bot databases |
| `GET` | `/archived-bots/{db_path}/status` | Get high-level archive status |
| `GET` | `/archived-bots/{db_path}/summary` | Get summary metrics from an archive |
| `GET` | `/archived-bots/{db_path}/performance` | Get performance analysis from an archive |
| `GET` | `/archived-bots/{db_path}/trades` | Query archived trades |
| `GET` | `/archived-bots/{db_path}/orders` | Query archived orders |
| `GET` | `/archived-bots/{db_path}/controllers` | Query archived controller state snapshots |
| `GET` | `/archived-bots/{db_path}/positions` | Query archived position records |
