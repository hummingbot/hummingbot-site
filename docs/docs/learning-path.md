# Learning Path

New to the Hummingbot ecosystem? Use this page to find the product, experience level, and reading order that matches what you're trying to do—rather than reading every page in order.

## Which path is right for you?

| Your situation | Recommended path | Why |
|---|---|---|
| New to algo trading, want AI to help build and run strategies | **[Condor](../condor/index.md)** | Guided setup, Telegram/web UI, AI does the strategy reasoning |
| Want full manual control, comfortable with CLI/YAML, no AI dependency | **[Hummingbot Client](../installation/hummingbot-client.md)** | Precise control, lighter footprint, proven V1/V2 strategies |
| Already running Client, want to add AI agents or manage many bots | **[Condor](../condor/index.md)** (add Hummingbot API on top) | Keep existing strategies, layer on multi-agent management |
| Building custom connectors or strategies | **[Hummingbot Client from source](../client/installation.md)** + [Strategies](../strategies/index.md) | Dev-focused, upstream contribution path |
| Running as a team or fund managing many bots/agents | **[Condor](../condor/index.md)** + [Hummingbot API](../hummingbot-api/index.md), deployed remotely | Multi-agent orchestration, Tailscale-secured access |

!!! tip "New here?"
    Start with **Condor**—the AI assistant handles most of the setup and strategy reasoning for you. You can always add the standalone Client later for manual control over a specific strategy.

## By experience level

### Condor track

| Level | Goal | Reading path | Time |
|-------|------|---------------|------|
| Beginner | Get Condor running and place your first AI-assisted trade | [Condor Quickstart](../installation/condor.md) → [Telegram](https://condor.hummingbot.org/getting-started/telegram) → [First Agent](https://condor.hummingbot.org/getting-started/first-agent) | ~30–45 min |
| Intermediate | Add real credentials, run Bots/Executors alongside Agents, track P&L | [Credentials](https://condor.hummingbot.org/getting-started/credentials) → [Web Dashboard](https://condor.hummingbot.org/getting-started/web-dashboard) → [Bots vs. Executors vs. Routines](https://condor.hummingbot.org/learning-path#what-do-you-want-condor-to-do) → [Sessions](https://condor.hummingbot.org/getting-started/sessions) | ~1–2 hrs |
| Advanced | Deploy remotely/production, manage multiple agents, secure with Tailscale | [Tailscale setup](../hummingbot-api/tailscale.md) → [Trading Agents Architecture](https://condor.hummingbot.org/trading-agents/architecture) → [Agent Builder](https://condor.hummingbot.org/trading-agents/agent-builder) | ~2–4 hrs |

For the full Condor-specific breakdown, see the [Condor Learning Path](https://condor.hummingbot.org/learning-path).

### Client track

| Level | Goal | Reading path | Time |
|-------|------|---------------|------|
| Beginner | Install the client and paper trade a strategy | [Client Quickstart](../installation/hummingbot-client.md) → paper trade `simple_pmm` → [hbot CLI](../client/hbot-cli.md) | ~30–45 min |
| Intermediate | Go live with a strategy, use a Controller | [Connect Exchange](../client/connect.md) → [Controllers](../strategies/v2-strategies/controllers/index.md) → [Strategy V2 Walkthrough](../strategies/v2-strategies/walkthrough.md) → [Config Files](../client/config-files.md) | ~1–2 hrs |
| Advanced | Build custom scripts/connectors, contribute upstream | [Scripts Cheatsheet](../strategies/scripts/cheatsheet.md) → [Building CLOB Connectors](../connectors/connectors/index.md) → [Building Gateway Connectors](../connectors/gateway-connectors/index.md) → [Contribution Guidelines](../community/contributions.md) | ~3+ hrs |

## By use case

1. **AI trades for me, starting today** — [Condor Quickstart](../installation/condor.md) → [Telegram](https://condor.hummingbot.org/getting-started/telegram) → [First Agent](https://condor.hummingbot.org/getting-started/first-agent)
2. **Test everything locally before risking capital** — [Condor Quickstart](../installation/condor.md) (local, **no Tailscale needed**) or [Client paper trading](../installation/hummingbot-client.md#step-4-run-a-paper-trading-strategy)
3. **Run a proven market-making strategy with full manual control** — [Hummingbot Client Quickstart](../installation/hummingbot-client.md) → [Strategies](../strategies/index.md)
4. **Deploy to a VPS/cloud server for 24/7 uptime** — [Hummingbot API Installation](../hummingbot-api/installation.md) → [Tailscale](../hummingbot-api/tailscale.md) (**required**) → [Securing Condor and Hummingbot API with Tailscale](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md)
5. **Manage multiple bots or agents across a team** — [Condor](https://condor.hummingbot.org) + [Hummingbot API](../hummingbot-api/index.md), remote/Tailscale deployment
6. **Build a custom strategy or connector** — [Strategies](../strategies/index.md) → [Building CLOB Connectors](../connectors/connectors/index.md) → [Building Gateway Connectors](../connectors/gateway-connectors/index.md)
7. **Automate alerts/reports without LLM or API cost** — [Routines (Condor)](https://condor.hummingbot.org/routines/overview) or [Market Data Collector (Client)](../client/global-configs/data-collector.md)

## Do I need Tailscale?

| Situation | Tailscale needed? |
|-----------|--------------------|
| Testing locally, Condor and Hummingbot API on one machine | No |
| Same VPS, both services together | Optional, still recommended |
| Different machines (for example, laptop + VPS) | **Yes** |
| Team or multiple devices need access | **Yes** |

See [Tailscale](../hummingbot-api/tailscale.md) for setup, or the [full walkthrough](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md) for security context and screenshots.

## Getting help

- [FAQ](../faq.md), [Troubleshooting Guide](../troubleshooting.md), or [Glossary](../glossary/index.md)
- [Github issues](https://github.com/hummingbot/hummingbot/issues/new/choose) for bugs or feature requests
- [Discord community](https://discord.gg/hummingbot), **#support** channel

--8<-- "docs/includes/condor-feedback.md"
