# Condor: Telegram Interface for Hummingbot

Condor is a powerful Telegram bot that provides a mobile-friendly interface to interact with your Hummingbot trading infrastructure. It allows you to monitor portfolios, manage trading bots, execute trades on both centralized (CEX) and decentralized (DEX) exchanges, and configure your entire trading setup—all from Telegram.

## 🌟 Key Features

- **📊 Portfolio Dashboard** - Real-time portfolio tracking with PnL indicators, holdings breakdown, and graphical analysis
- **🤖 Bot Monitoring** - Monitor and manage Hummingbot trading bots with live status and metrics
- **💱 CEX/CLOB Trading** - Place orders, manage positions, and configure leverage on centralized exchanges
- **🔄 DEX Trading** - Execute token swaps and manage liquidity positions via Gateway
- **⚙️ Configuration** - Complete system configuration through Telegram menus
- **🔐 Security** - User ID whitelist and credential protection

## 🏗️ Architecture

Condor acts as a secure bridge between your Hummingbot instances and the Telegram platform. It translates user commands from Telegram into API requests that your Hummingbot instances understand.

### System Architecture

```
Telegram User
     ↓
Condor Bot
     ↓
     ├─→ Hummingbot Backend API → Trading Bots
     ├─→ Gateway → DEX Protocols (Uniswap, Jupiter, etc.)
     └─→ GPT-4o + MCP (future AI features)
```

### Integration Points

#### Hummingbot Backend API
- Portfolio data aggregation
- Bot status and control
- Order and position management
- Exchange connectivity

#### Gateway
- DEX token swaps
- Liquidity pool management
- Wallet management
- Multi-chain support

### Project Structure

```
condor/
├── main.py                     # Entry point
├── servers.py                  # Server manager
├── handlers/                   # Command handlers
│   ├── __init__.py
│   ├── portfolio.py            # Portfolio dashboard
│   ├── bots/                   # Bot monitoring
│   │   ├── __init__.py
│   │   ├── menu.py
│   │   └── controller_handlers.py
│   ├── cex/                    # CEX/CLOB trading
│   │   ├── __init__.py
│   │   ├── trade.py
│   │   ├── orders.py
│   │   └── positions.py
│   ├── dex/                    # DEX trading
│   │   ├── __init__.py
│   │   ├── swap.py
│   │   ├── liquidity.py
│   │   └── pools.py
│   └── config/                 # Configuration
│       ├── __init__.py
│       ├── servers.py
│       ├── api_keys.py
│       └── gateway/            # Gateway management
│           ├── __init__.py
│           ├── menu.py
│           ├── deployment.py
│           ├── wallets.py
│           ├── connectors.py
│           ├── networks.py
│           ├── pools.py
│           └── tokens.py
├── utils/                      # Utilities
│   ├── auth.py
│   ├── telegram_formatters.py
│   ├── portfolio_graphs.py
│   └── trading_data.py
└── data/                       # Persistence
    └── condor_bot_data.pickle
```


### Core Components

1.  **Telegram Interface**: The user-facing component running on Telegram clients, handling user input and displaying interactive menus.
2.  **Command Handlers**: The logic layer that processes specific commands (e.g., `/portfolio`, `/bots`) and determines the appropriate action.
3.  **API Integration Layer**: A secure communication module that interacts with the Hummingbot Backend API using standard REST protocols.
4.  **Data Processing Utilities**: Helper functions that format raw data from Hummingbot into clear, readable messages and visualizations (charts/graphs).

## 🚀 Why Use Condor?

*   **Accessibility**: Manage your bots on the go without needing SSH access or complex terminal commands.
*   **Simplicity**: Abstract away technical complexities with intuitive menus and buttons.
*   **Efficiency**: Quickly react to market changes by managing positions and bots instantly.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/SVBdmJTZB2M?si=H15J1_Sk4ec3M7D8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>