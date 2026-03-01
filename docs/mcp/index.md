# Hummingbot MCP & Skills

This section covers two ways to connect AI assistants to Hummingbot:

- **[MCP Server](./index.md)** — A running server that implements the [Model Context Protocol](https://modelcontextprotocol.io), letting Claude, Gemini, and ChatGPT control your trading infrastructure via natural language
- **[Skills](./skills.md)** — Self-contained agent capabilities installable via `npx`, providing commands and scripts for any AI agent framework including [OpenClaw](https://openclaw.ai)

---

# Hummingbot MCP Server

The Hummingbot MCP Server is an interface to [Hummingbot API](../hummingbot-api/index.md) that enables AI assistants like Claude, Gemini, and ChatGPT to control your trading infrastructure using natural language.

**GitHub Repository**: [github.com/hummingbot/mcp](https://github.com/hummingbot/mcp)

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/eq8EfiOEcFM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is MCP?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) is an open-source standard for connecting AI applications to external systems. Using MCP, AI applications like Claude or ChatGPT can connect to data sources, tools, and workflows—enabling them to access key information and perform tasks.

The Hummingbot MCP Server implements this protocol to give AI assistants access to:

- **Data sources**: Portfolio balances, order history, market prices, funding rates
- **Tools**: Place orders, manage positions, execute swaps, deploy bots
- **Workflows**: Multi-step trading operations, strategy deployment, liquidity management

## Example Conversations

Once configured, you can interact naturally with your AI assistant:

```
You: Show me my portfolio balances across all exchanges
AI: I'll check your portfolio balances using the Hummingbot MCP server...
```

```
You: Buy 0.1 BTC on Binance at market price
AI: I'll place a market buy order for 0.1 BTC...
```

```
You: What's the funding rate on ETH perpetual?
AI: Let me check the current funding rate...
```

```
You: Open a long position on SOL-USDT with a 2% stop loss and 5% take profit
AI: I'll create a Position Executor with those parameters...
```

```
You: Add liquidity to the SOL-USDC pool on Meteora with $500, auto-rebalancing when out of range
AI: I'll create an LP Executor with the lp_rebalancer controller...
```

## Getting Started

1. **[Install the MCP Server](./installation.md)** - Set up and connect to your AI assistant
2. **[Explore Available Tools](./tools.md)** - Learn about the trading and portfolio management tools
3. **[Browse Skills](./skills.md)** - Install agent skills for OpenClaw, Claude Code, and other frameworks

## Supported AI Assistants

- **Claude Code** (CLI)
- **Claude Desktop**
- **Gemini CLI**
- **Codex CLI**

See the [Installation Guide](./installation.md) for setup instructions for each assistant.
