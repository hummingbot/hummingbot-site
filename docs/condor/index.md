# Condor

**Condor** is an open source harness for building and running autonomous **Trading Agents**. It connects LLM-powered decision-making to deterministic trade execution via the [Hummingbot API](../hummingbot-api/index.md), enabling traders to deploy AI agents that can observe markets, reason about strategy, and execute trades across 50+ exchanges and blockchains.

!!! note "Full Documentation"
    The complete Condor documentation has moved to a dedicated site. Visit **[docs.hummingbot.org/condor](https://docs.hummingbot.org/condor)** for full installation guides, Trading Agents Standard specification, and API reference.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/SVBdmJTZB2M?si=H15J1_Sk4ec3M7D8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is Condor?

Condor implements a two-layer architecture that separates probabilistic reasoning from deterministic execution:

- **Agentic Layer**: LLM-powered reasoning using the OODA loop (Observe, Orient, Decide, Act)
- **Execution Layer**: Deterministic infrastructure for positions, executors, and risk enforcement via Hummingbot API

Where Hummingbot lets one person do the work of a team, Condor lets one person manage a *swarm* of autonomous agents—each observing markets, adapting to conditions, and executing strategies independently.

## Key Features

| Feature | Description |
|---------|-------------|
| **Trading Agents** | AI-powered agents that make decisions each tick using LLMs (Claude, Gemini, Codex) |
| **Executors** | Self-contained trading operations with standardized P&L tracking |
| **Positions** | Virtual portfolio tracking for spot, perp, and LP positions |
| **Bots** | Docker containers for long-running market making and grid trading |
| **Routines** | Deterministic workflows for indicators, webhooks, and alerts |
| **Multi-Interface** | Telegram bot, web dashboard, and CLI access with session continuity |

## Quick Start

Install Condor with a single command:

```bash
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/refs/heads/main/setup.sh | bash
```

This script clones the repository, installs dependencies, and prompts you for your Telegram Bot Token and User ID to configure the Telegram interface.

## Resources

| Resource | Link |
|----------|------|
| Full Documentation | [docs.hummingbot.org/condor](https://docs.hummingbot.org/condor) |
| GitHub Repository | [github.com/hummingbot/condor](https://github.com/hummingbot/condor) |
| Discord Support | [#condor-feedback](https://discord.gg/hummingbot) |
| Hummingbot API | [Hummingbot API Docs](../hummingbot-api/index.md) |
