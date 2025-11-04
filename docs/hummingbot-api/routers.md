# API Routers

The Hummingbot API is organized into several functional routers that provide comprehensive trading and management capabilities.

## 🐳 Docker Management (`/docker`)

Manage Docker containers and bot deployment lifecycle:

- Check Docker daemon status and health
- Pull new Docker images with async support
- Start, stop, and remove containers
- Monitor active and exited containers
- Clean up exited containers
- Archive container data locally or to S3
- Track image pull status and progress

**Key Endpoints:**

- `GET /docker/running` - Check if Docker daemon is running
- `GET /docker/available-images` - List available Docker images
- `GET /docker/active-containers` - Get all running containers
- `POST /docker/pull-image` - Pull new Docker images
- `POST /docker/start-container/{name}` - Start a container
- `POST /docker/stop-container/{name}` - Stop a container
- `POST /docker/remove-container/{name}` - Remove container and archive data

## 💳 Account Management (`/accounts`)

Create and manage trading accounts across multiple exchanges:

- Create and delete trading accounts
- Add/remove exchange credentials
- List available credentials per account
- Basic account configuration

**Key Endpoints:**

- `GET /accounts` - List all trading accounts
- `POST /accounts` - Create new trading account
- `PUT /accounts/{id}` - Update account credentials
- `DELETE /accounts/{id}` - Delete trading account
- `GET /accounts/{id}/balances` - Get account balances

## 🔌 Connector Discovery (`/connectors`)

Provides exchange connector information and configuration:

- List available exchange connectors
- Get connector configuration requirements
- Retrieve trading rules and constraints
- Query supported order types per connector

**Key Endpoints:**

- `GET /connectors` - List all available connectors
- `GET /connectors/{name}` - Get connector details
- `GET /connectors/{name}/trading-rules` - Get trading rules and limits
- `GET /connectors/{name}/markets` - List supported trading pairs

## 📊 Portfolio Management (`/portfolio`)

Centralized portfolio tracking and analytics across all accounts:

- **Real-time Portfolio State**: Current balances across all accounts
- **Portfolio History**: Time-series data with cursor-based pagination
- **Token Distribution**: Aggregate holdings by token across exchanges
- **Account Distribution**: Percentage-based portfolio allocation analysis
- **Advanced Filtering**: Filter by account names and connectors

**Key Endpoints:**

- `GET /portfolio/balances` - Get aggregated portfolio balances
- `GET /portfolio/performance` - Get portfolio performance metrics
- `GET /portfolio/distribution` - Get token distribution analysis
- `GET /portfolio/history` - Get historical portfolio data

## 💹 Trading Operations (`/trading`)

Enhanced with POST-based filtering and comprehensive order/trade management:

- **Order Placement**: Execute trades with advanced order types
- **Order Cancellation**: Cancel specific orders by ID
- **Position Tracking**: Real-time perpetual positions with PnL data
- **Active Orders**: Live order monitoring from connector in-flight orders
- **Order History**: Paginated historical orders with advanced filtering
- **Trade History**: Complete execution records with filtering
- **Funding Payments**: Historical funding payment tracking for perpetuals
- **Position Modes**: Configure HEDGE/ONEWAY modes for perpetual trading
- **Leverage Management**: Set and adjust leverage per trading pair

**Key Endpoints:**

- `POST /trading/orders` - Place new order
- `GET /trading/orders` - List active orders
- `DELETE /trading/orders/{id}` - Cancel order
- `GET /trading/positions` - Get open positions
- `GET /trading/history` - Get trade history
- `POST /trading/close-position` - Close a position

## 🤖 Bot Orchestration (`/bot-orchestration`)

Deploy, configure, and manage multiple bot instances:

- Monitor bot status and MQTT connectivity
- Deploy V2 scripts and controllers
- Start/stop bots with configurable parameters
- Stop and archive bots with background task support
- Retrieve bot performance history
- Real-time bot status monitoring

**Key Endpoints:**

- `GET /bot-orchestration/bots` - List all bot instances
- `POST /bot-orchestration/deploy` - Deploy new bot
- `PUT /bot-orchestration/bots/{id}/config` - Update bot configuration
- `POST /bot-orchestration/bots/{id}/start` - Start bot
- `POST /bot-orchestration/bots/{id}/stop` - Stop bot
- `GET /bot-orchestration/bots/{id}/status` - Get bot status

## 📋 Strategy Management

Manage trading strategies with two complementary systems:

### Controllers (`/controllers`)
Manage V2 strategy controllers:

- CRUD operations on controller files
- Controller configuration management
- Bot-specific controller configurations
- Template retrieval for new configs

**Key Endpoints:**

- `GET /controllers` - List available strategy controllers
- `POST /controllers/{name}/deploy` - Deploy strategy controller
- `PUT /controllers/{id}/config` - Update strategy parameters

### Scripts (`/scripts`)
Handle traditional Hummingbot scripts:

- CRUD operations on script files
- Script configuration management
- Configuration templates

**Key Endpoints:**

- `GET /scripts` - List available trading scripts
- `POST /scripts/run` - Execute trading script

## 📊 Market Data (`/market-data`)

Professional market data analysis and real-time feeds:

- **Price Discovery**: Real-time prices, funding rates, mark/index prices
- **Candle Data**: Real-time and historical candles with multiple intervals
- **Order Book Analysis**:
  - Live order book snapshots
  - Price impact calculations
  - Volume queries at specific price levels
  - VWAP (Volume-Weighted Average Price) calculations
- **Feed Management**: Active feed monitoring with automatic cleanup

**Key Endpoints:**
- `GET /market-data/ticker/{pair}` - Get current ticker data
- `GET /market-data/orderbook/{pair}` - Get order book snapshot
- `GET /market-data/candles/{pair}` - Get historical candles
- `GET /market-data/trades/{pair}` - Get recent trades
- `WS /market-data/stream` - Real-time market data stream

## 🔄 Backtesting (`/backtesting`)

Run strategy backtests with historical data:

- Run strategy backtests against historical data
- Support for controller configurations
- Customizable trade costs and resolution

**Key Endpoints:**

- `POST /backtesting/run` - Start new backtest
- `GET /backtesting/results/{id}` - Get backtest results
- `GET /backtesting/metrics/{id}` - Get performance metrics
- `POST /backtesting/optimize` - Run parameter optimization

## 📈 Archived Bot Analytics (`/archived-bots`)

Comprehensive analysis of stopped bot performance:

- List and discover archived bot databases
- Performance metrics and trade analysis
- Historical order and trade retrieval
- Position and executor data extraction
- Controller configuration recovery
- Support for both V1 and V2 bot architectures

**Key Endpoints:**

- `GET /archived-bots` - List all archived bot databases
- `GET /archived-bots/{bot_name}/performance` - Get bot performance metrics
- `GET /archived-bots/{bot_name}/orders` - Get historical orders
- `GET /archived-bots/{bot_name}/trades` - Get trade history

## 🌐 Gateway (`/gateway`)

Manage Gateway container and configure DEX trading infrastructure:

### Management

Control Gateway container lifecycle and configuration:

- Start, stop, and restart Gateway container
- Check Gateway status and health
- View Gateway logs
- List and configure DEX connectors
- Manage chains, networks, and pools
- Add and manage network tokens

**Key Endpoints:**

- `GET /gateway/status` - Get Gateway status
- `POST /gateway/start` - Start Gateway
- `POST /gateway/stop` - Stop Gateway
- `POST /gateway/restart` - Restart Gateway
- `GET /gateway/logs` - Get Gateway logs
- `GET /gateway/connectors` - List connectors
- `GET /gateway/connectors/{connector_name}` - Get connector config
- `POST /gateway/connectors/{connector_name}` - Update connector config
- `GET /gateway/chains` - List chains
- `GET /gateway/pools` - List pools
- `POST /gateway/pools` - Add pool
- `GET /gateway/networks` - List networks
- `GET /gateway/networks/{network_id}` - Get network config
- `POST /gateway/networks/{network_id}` - Update network config
- `GET /gateway/networks/{network_id}/tokens` - Get network tokens
- `POST /gateway/networks/{network_id}/tokens` - Add network token
- `DELETE /gateway/networks/{network_id}/tokens/{token_address}` - Delete network token

### Swap Operations

Execute and monitor DEX swaps on supported routers (Jupiter, 0x, etc.):

- Get swap quotes with price impact
- Execute swaps with slippage protection
- Track swap transaction status
- Search swap history with filters
- View swap summaries and analytics

**Key Endpoints:**

- `POST /gateway/swap/quote` - Get swap quote
- `POST /gateway/swap/execute` - Execute swap
- `GET /gateway/swaps/{transaction_hash}/status` - Get swap status
- `POST /gateway/swaps/search` - Search swaps
- `GET /gateway/swaps/summary` - Get swaps summary

### CLMM Operations

Manage concentrated liquidity market maker positions on DEXs:

- Browse and analyze CLMM pools
- Open liquidity positions with custom price ranges
- Close positions and withdraw liquidity
- Collect earned fees from positions
- Track position-owned assets
- View position events and history
- Search positions with filters

**Key Endpoints:**

- `GET /gateway/clmm/pool-info` - Get CLMM pool info
- `GET /gateway/clmm/pools` - Get CLMM pools
- `POST /gateway/clmm/open` - Open CLMM position
- `POST /gateway/clmm/close` - Close CLMM position
- `POST /gateway/clmm/collect-fees` - Collect fees from CLMM position
- `POST /gateway/clmm/positions_owned` - Get CLMM positions owned
- `GET /gateway/clmm/positions/{position_address}/events` - Get CLMM position events
- `POST /gateway/clmm/positions/search` - Search CLMM positions

## Authentication

All API endpoints require HTTP Basic Authentication. Include your configured credentials in all requests:

```bash
curl -u username:password http://localhost:8000/endpoint
```

Configure username and password during setup or update them in the `.env` file.

## Interactive Documentation

For detailed endpoint documentation and testing:

- **Swagger UI**: `http://localhost:8000/docs` - Interactive API testing
- **ReDoc**: `http://localhost:8000/redoc` - Alternative documentation view
