# Hummingbot API

**The central hub for running Hummingbot trading bots** - now with AI assistant integration via MCP (Model Context Protocol).

!!! note "Repository Update"
    The `backend-api` has been **renamed to `hummingbot-api`**, marking a major revamp of the codebase with improvements in architecture, modularity, and developer experience.

A comprehensive RESTful API framework for managing trading operations across multiple exchanges. The Hummingbot API provides a centralized platform to aggregate all your trading functionalities, from basic account management to sophisticated automated trading strategies.

**GitHub Repository**: [github.com/hummingbot/hummingbot-api](https://github.com/hummingbot/hummingbot-api)

!!! warning "Production security"
    Hummingbot API controls live trading. With **MCP**, **Condor agents**, and other AI tools now common, a reachable API is a high-value target—automated scans, brute-force attempts, and misconfigured clients can all lead to unauthorized trades.

    **Use [Tailscale](tailscale.md) for production** so the API stays on a private network (no public port 8000). HTTP Basic Auth is always on, but **Tailscale is the recommended way to keep the API off the public internet**, including when Condor and the API run on the same machine.

## Getting Started

- **[Installation](installation.md)** — Docker setup; **enable Tailscale when prompted for production**
- **[Tailscale](tailscale.md)** — Private tailnet access (recommended for VPS and remote Condor)
- **[Developer Guide](quickstart.md)** — Use the API with curl or Python to add credentials, view portfolios, and place orders
- **[Condor Quickstart](../installation/condor.md)** — Install Condor with Hummingbot API backend

## What is Hummingbot API?

The Hummingbot API is designed to be your central hub for trading operations, offering:

- **🤖 AI Assistant Integration**: Control your trading with natural language via MCP (Claude, ChatGPT, Gemini)
- **Multi-Exchange Account Management**: Create and manage multiple trading accounts across different exchanges
- **Portfolio Monitoring**: Real-time balance tracking and portfolio distribution analysis
- **Trade Execution**: Execute trades, manage orders, and monitor positions across all your accounts
- **Automated Trading**: Deploy and control Hummingbot instances with automated strategies
- **Strategy Management**: Add, configure, and manage trading strategies in real-time
- **Complete Flexibility**: Build any trading product on top of this robust API framework

Whether you're building a trading dashboard, implementing algorithmic strategies, or creating a comprehensive trading platform, the Hummingbot API provides all the tools you need.


## Architecture

```mermaid
graph TB
    subgraph "Clients"
        direction LR
        CUSTOM[Custom Apps]
        CONDOR[Condor<br/>Telegram Bot]
        AI[AI Agents]
    end

    subgraph "Hummingbot API"
        direction LR
        API["FastAPI<br/>Server<br/>"]
        PG[(PostgreSQL<br/>Database)]
        MQTT[EMQX<br/>Message Broker]
    end

    subgraph "Bots"
        BOTS[Hummingbot<br/>Instances]
    end

    subgraph "Exchanges"
        EX[Binance, OKX,<br/>Hyperliquid, etc.]
    end

    %% Client connections using API Client
    CONDOR -->|Hummingbot API Client| API

    %% Bot connections
    BOTS <-->|Commands & Updates| MQTT

    %% Exchange connections
    BOTS <-->|Trade & Data| EX
    API <-->|Trade & Data| EX

    %% Apply theme colors
    classDef clientStyle stroke:#5FFFD7,stroke-width:3px
    classDef apiStyle stroke:#00B1BB,stroke-width:3px
    classDef botsStyle stroke:#E549FF,stroke-width:3px

    class CONDOR clientStyle
    class API,PG,MQTT apiStyle
    class BOTS botsStyle
```

### Key Components

- **Server Infrastructure**:
    - FastAPI server providing RESTful API with HTTP Basic Authentication
    - PostgreSQL database for storing trading data, account info, and historical performance
    - EMQX message broker for real-time communication with bot instances
- **Exchange Connectors**: Built-in connectors for major CEXs and DEXs - trading and data fetching is accessible directly through the Hummingbot API or via bots that it deploys
- **Bot Instances**: Individual Hummingbot containers connected to different exchanges
- **Docker Management**: Orchestrates multiple Hummingbot container instances

## Ways to Interact with Hummingbot API

For new users, we strongly recommend using **Condor** for a mobile-friendly Telegram experience. For developers and advanced users, the **Swagger UI** and **MCP** provide more direct access to the API.

### Condor

Mobile and desktop control via Telegram.

- **Best for**: Users who want to monitor and control bots on the go
- **Advantages**: Access from any device with Telegram, real-time notifications, quick commands for common operations
- **Setup**: See [Condor Quickstart](../installation/condor.md)

### Swagger UI

Interactive REST API documentation and testing.

- **Best for**: Developers and power users who want full control
- **Advantages**: Complete API access, direct endpoint testing, integration development
- **Access**: <http://localhost:8000/docs>

### MCP

Natural language trading commands through Claude, ChatGPT, or Gemini.

- **Best for**: Users who prefer conversational interaction
- **Advantages**: Natural language commands, full access to all API features, complex multi-step operations made simple
- **Setup**: See [MCP Installation Guide](../mcp/installation.md)

## Use Cases

The Hummingbot API enables various trading applications:

- **Custom OEMS**: Build your own trading order execution management system spanning multiple exchanges
- **Trading Dashboards**: Build custom chat, web, and mobile interfaces for controlling bots
- **AI-Powered Trading**: Integrate with LLMs for agentic trading workflows
- **Risk Management Tools**: Build systems for monitoring and managing trading operations
- **Market Data Feeds**: Create real-time price and historical candles feeds for use with different applications

## API Endpoints

The Hummingbot API (**v1.0.1**) is organized into functional routers covering:

- 🐳 **Docker Management** - Container lifecycle and orchestration
- 💳 **Account Management** - Multi-exchange account configuration and Gateway wallets
- 🔌 **Connector Discovery** - Exchange connector information
- 📊 **Portfolio Management** - Real-time portfolio tracking and analytics
- 💹 **Trading Operations** - Order execution and position management
- 📈 **Market Data** - Candles, tickers, cross-rates, order books, and pool prices
- 🤖 **Bot Orchestration** - Deploy, start/stop, and archive trading bots
- ⚙️ **Executors** - In-process executor management (including `lp_executor`)
- 📋 **Strategy Management** - Controllers and scripts with live config updates
- 🔄 **Backtesting** - Sync and async strategy backtesting
- 📈 **Archived Bot Analytics** - Historical bot performance analysis
- 🌐 **Gateway** - Gateway container, networks, tokens, pools, and RPC keys
- 🔄 **Gateway Swaps** - DEX swap execution and monitoring
- 💧 **Gateway CLMM** - Concentrated liquidity position management
- 💾 **Storage** - Bot directory disk usage
- 🖥️ **System** - Host CPU/RAM/disk metrics
- 🔌 **WebSocket** - Real-time market data and executor streaming

For detailed endpoint documentation, see the **[API Routers Guide](routers.md)** or interactive Swagger at `http://localhost:8000/docs`.



## System Dependencies

The platform includes these essential services:

### PostgreSQL Database
Stores all trading data including:

- Orders and trade history
- Account states and balances
- Positions and funding payments
- Performance metrics

**Note:** The database is automatically initialized using environment variables. The included `init-db.sql` serves as a safety net.

### EMQX Message Broker
Enables real-time communication with trading bots:

- Receives live updates from running bots
- Sends commands to control bot execution
- Handles real-time data streaming

## Configuration

### Environment Variables
Key configuration options available in `.env`:

- **USERNAME/PASSWORD**: API Basic Auth credentials
- **CONFIG_PASSWORD**: Encrypts connector credentials and Gateway mTLS passphrase
- **BROKER_HOST/PORT/USERNAME/PASSWORD**: EMQX message broker settings
- **DATABASE_URL**: PostgreSQL connection string
- **GATEWAY_URL**: Gateway service URL — must use **`https://`** (default: `https://localhost:15888`; Docker: `https://gateway:15888`)
- **ACCOUNT_UPDATE_INTERVAL**: Balance update frequency (minutes)
- **MARKET_DATA_***: Feed cleanup, timeouts, WebSocket heartbeat, and ticker refresh intervals
- **CORS_ALLOW_ORIGINS / CORS_ALLOW_ORIGIN_REGEX**: Trusted browser origins (localhost-only by default)
- **TAILSCALE_ENABLED / TAILSCALE_AUTH_KEY / TAILSCALE_HOSTNAME**: Private tailnet access
- **BANNED_TOKENS**: Tokens excluded from portfolio calculations
- **LOGFIRE_ENVIRONMENT**: Observability environment tag (default: `dev`)
- **AWS_API_KEY/AWS_SECRET_KEY**: S3 archiving (optional)

### Bot Instance Structure
Each bot maintains its own isolated environment:
```
bots/instances/hummingbot-{name}/
├── conf/           # Configuration files
├── data/           # Bot databases and state
└── logs/           # Execution logs
```

## Authentication

The API uses HTTP Basic Authentication on all REST routes except `GET /`:

- Configure username and password during setup (`USERNAME` / `PASSWORD` in `.env`)
- Include credentials in the Authorization header for all requests
- Example: `Authorization: Basic <base64-encoded-credentials>`

WebSocket routes (`/ws/market-data`, `/ws/executors`) accept the same credentials via header, `?token=`, or `?username=&password=` query params.

`CONFIG_PASSWORD` encrypts stored connector keys and doubles as the Gateway mTLS passphrase — use a strong, unique value in production.

For production, pair strong credentials with **[Tailscale](tailscale.md)** so clients connect over a private tailnet instead of a public IP. See the [Tailscale security guide](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md) for a full walkthrough.

## API Client

A modern, asynchronous Python client is available for interacting with the Hummingbot API. This client is used by [Condor](../condor/index.md) and other interfaces as the interface layer for all API communications.

- **GitHub**: [hummingbot-api-client](https://github.com/hummingbot/hummingbot-api-client)
- **PyPI**: [pypi.org/project/hummingbot-api-client](https://pypi.org/project/hummingbot-api-client/)

### Installation
```bash
pip install hummingbot-api-client
```

### Usage Example
```python
from hummingbot_api_client import HummingbotAPIClient

# Initialize client
client = HummingbotAPIClient(
    base_url="http://localhost:8000",
    username="your-username",
    password="your-password"
)

# Get portfolio data
portfolio = await client.get_portfolio()

# Execute a trade
order = await client.create_order(
    connector="binance",
    trading_pair="BTC-USDT",
    order_type="limit",
    side="buy",
    amount=0.001,
    price=50000
)
```

## Related Resources

- [Condor](../condor/index.md) - Telegram interface for Hummingbot API
- [Tailscale](tailscale.md) - Recommended private access for production
- [API Client Documentation](https://github.com/hummingbot/hummingbot-api-client) - Python client library
- [Hummingbot Client](../client/index.md) - Core trading engine
