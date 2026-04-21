# Condor Quickstart

**Condor** is a Telegram-based interface for managing Trading Agents and executing trades across centralized and decentralized exchanges. It uses the Hummingbot API as its execution backend.

For full installation instructions, see the Condor documentation:

[:material-arrow-right: **Condor Documentation**](https://condor.hummingbot.org){ .md-button .md-button--primary }

## Quick Install

```bash
git clone https://github.com/hummingbot/condor.git
cd condor
make install
make run
```

The install script will prompt for:

- **Telegram Bot Token**: Create one via [@BotFather](https://t.me/botfather)
- **Telegram User ID**: Get yours via [@userinfobot](https://t.me/userinfobot)

## What Gets Installed

| Component | Description |
|-----------|-------------|
| **Condor** | Telegram bot for monitoring and control |
| **Hummingbot API** | REST API backend (port 8000) |
| **PostgreSQL** | Database for trading data |
| **EMQX** | Message broker for bot communication |

## Access Points

| Service | URL | Description |
|---------|-----|-------------|
| Telegram | Your bot | Primary interface |
| API | `http://localhost:8000` | REST API |
| Swagger | `http://localhost:8000/docs` | API documentation |

## Learn More

- [Condor Documentation](https://condor.hummingbot.org) - Full guides for Trading Agents, executors, and more
- [Hummingbot API Reference](../hummingbot-api/index.md) - API endpoints and developer guide
- [MCP Installation](../mcp/installation.md) - Connect AI assistants to Hummingbot API
