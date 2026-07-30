# Condor Quickstart

**Condor** is an open source harness for building and running autonomous **Trading Agents**. It connects LLM-powered decision-making to deterministic trade execution via the [Hummingbot API](../hummingbot-api/index.md), enabling traders to deploy AI agents that can observe markets, reason about strategy, and execute trades across 50+ exchanges and blockchains.

For full installation instructions, see the Condor documentation:

[:material-arrow-right: **Condor Documentation**](https://condor.hummingbot.org){ .md-button .md-button--primary }

## Quick Install

```bash
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash
```

The install script will prompt for:

- **Telegram Bot Token**: Create one via [@BotFather](https://t.me/botfather)
- **Telegram User ID**: Get yours via [@userinfobot](https://t.me/userinfobot)
- **Tailscale** (for production): When asked about securing the connection to Hummingbot API, answer **`y`** — see [Hummingbot API Tailscale guide](../hummingbot-api/tailscale.md)

## What Gets Installed

| Component | Description |
|-----------|-------------|
| **Condor** | AI harness with Telegram bot and web dashboard |
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
- [Hummingbot API — Tailscale](../hummingbot-api/tailscale.md) - Recommended for production (private API access)
- [MCP Installation](../mcp/installation.md) - Connect AI assistants to Hummingbot API
