# Installation Overview

The Hummingbot ecosystem consists of several repositories that work together to provide a complete algorithmic trading platform. This page provides an overview of each component and links to their installation guides.

## Hummingbot Ecosystem

```
┌─────────────────────────────────────────────────────────────────┐
│                        User Interfaces                          │
├───────────────────┬─────────────────────┬───────────────────────┤
│      Condor       │         MCP         │       Dashboard       │
│   (Telegram UI)   │     (AI Agents)     │ (Web UI, deprecated)  │
└─────────┬─────────┴──────────┬──────────┴───────────┬───────────┘
          │                    │                      │
          └────────────────────┼──────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Hummingbot API                           │
│              REST API for bot management & trading              │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│       Core Components (can be run standalone without API)       │
│                                                                 │
│  ┌─────────────────────────────┐   ┌─────────────────────────┐  │
│  │     Hummingbot Client       │──►│         Gateway         │  │
│  │   (CLI, CLOB Connectors)    │   │   (AMM DEX Connectors)  │  │
│  └─────────────────────────────┘   └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                         Quants Lab                              │
│        Standalone research environment for backtesting,         │
│             data collection, and strategy analysis              │
│                               │                                 │
│                               ▼                                 │
│                      Hummingbot Library                         │
│          Python package for data and backtesting tools          │
└─────────────────────────────────────────────────────────────────┘
```

## Repository Overview

| Repository | Description | Quickstart | Source Install |
|------------|-------------|------------|----------------|
| [**Deploy**](https://github.com/hummingbot/deploy) | One-line installation scripts for Hummingbot components | [Deploy Guide](./deploy.md) | - |
| [**Hummingbot API**](https://github.com/hummingbot/hummingbot-api) | REST API backend for managing bots, portfolios, and trading | [Quickstart](./hummingbot-api.md) | [Source](../hummingbot-api/installation.md) |
| [**Hummingbot Client**](https://github.com/hummingbot/hummingbot) | Core trading client with CLI interface for CEX trading | [Quickstart](./hummingbot-client.md) | [Source](../client/installation.md) |
| [**Gateway**](https://github.com/hummingbot/gateway) | DEX middleware for Uniswap, PancakeSwap, Raydium, and 30+ DEXs | - | [Installation](../gateway/installation.md) |
| [**Condor**](https://github.com/hummingbot/condor) | Telegram bot for monitoring and controlling Hummingbot instances | [via API Quickstart](./hummingbot-api.md) | [Source](../condor/installation.md) |
| [**MCP Server**](https://github.com/hummingbot/mcp) | Connects AI assistants (Claude, Gemini, ChatGPT) to Hummingbot | - | [Installation](../mcp/installation.md) |
| [**Dashboard**](https://github.com/hummingbot/dashboard) | Web-based UI for bot management (deprecated, use Condor) | - | [GitHub](https://github.com/hummingbot/dashboard) |
| [**Quants Lab**](https://github.com/hummingbot/quants-lab) | Research environment for backtesting and strategy analysis | - | [GitHub](https://github.com/hummingbot/quants-lab) |

## Recommended Paths

### Hummingbot Client

The legacy CLI-based trading client. Best for:

- **Getting started** - Most users begin here to learn Hummingbot
- **Local usage** - Running on your local machine
- **V1 strategies** - Pure Market Making, Cross-Exchange Market Making, etc.
- **Single instance** - Running one bot at a time

[**Hummingbot Client Quickstart →**](./hummingbot-client.md)

### Hummingbot API

The modern REST API backend for managing multiple bots. Best for:

- **Multiple instances** - Deploy and manage many bots simultaneously
- **Production environments** - Running on cloud servers (AWS, Digital Ocean, etc.)
- **Modern interfaces** - Use Condor (Telegram) or AI agents via MCP
- **Portfolio management** - Track balances across all exchanges in one place

[**Hummingbot API Quickstart →**](./hummingbot-api.md)

### Developers

For developers who want to add/customize exchange connectors, extend strategies, or otherwise modify the Hummingbot codebase:

**Source Installation**

- [Hummingbot Client from Source](../client/installation.md#source-installation) - Install the core trading client for development
- [Gateway from Source](../gateway/installation.md#source-installation) - Install the DEX connector middleware for development

**Building Connectors**

- [Building CLOB Connectors](../connectors/connectors/index.md) - Add new CEX/DEX order book connectors to Hummingbot Client
- [Building Gateway Connectors](../connectors/gateway-connectors/index.md) - Add new AMM DEX connectors to Gateway

**API Development**

- [Hummingbot API Developer Guide](../hummingbot-api/quickstart.md) - Use the REST API with curl or Python client
