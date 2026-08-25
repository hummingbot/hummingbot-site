Hummingbot is an community-driven, open source Python framework for building automated market making and algorithmic trading bots, maintained by [Hummingbot Foundation](../about/index.md).

It is designed to be modular and extensible, allowing users to automate any trading strategy on any exchange and blockchain.

## Getting Started

New here? Use the guide below to find the product, experience level, and reading order that matches what you're trying to do—rather than reading every page in order.

### Which path is right for you?

| Your situation | Recommended path | Why |
|---|---|---|
| New to algo trading, want AI to help build and run strategies | **[Condor](../condor/index.md)** | Guided setup, Telegram/web UI, AI does the strategy reasoning |
| Want full manual control, comfortable with CLI/YAML, no AI dependency | **[Hummingbot Client](../installation/hummingbot-client.md)** | Precise control, lighter footprint, proven V1/V2 strategies |
| Already running Client, want to add AI agents or manage many bots | **[Condor](../condor/index.md)** (add Hummingbot API on top) | Keep existing strategies, layer on multi-agent management |
| Building custom connectors or strategies | **[Hummingbot Client from source](../client/installation.md)** + [Strategies](../strategies/index.md) | Dev-focused, upstream contribution path |
| Running as a team or fund managing many bots/agents | **[Condor](../condor/index.md)** + [Hummingbot API](../hummingbot-api/index.md), deployed remotely | Multi-agent orchestration, Tailscale-secured access |

!!! tip "New here?"
    Start with **Condor**—the AI assistant handles most of the setup and strategy reasoning for you. You can always add the standalone Client later for manual control over a specific strategy.

### By experience level

**Condor track**

| Level | Goal | Reading path | Time |
|-------|------|---------------|------|
| Beginner | Get Condor running and place your first AI-assisted trade | [Condor Quickstart](../installation/condor.md) → [Telegram](https://condor.hummingbot.org/getting-started/telegram) → [First Agent](https://condor.hummingbot.org/getting-started/first-agent) | ~30–45 min |
| Beginner, no Telegram | Same, driven entirely from the browser dashboard | [Condor Quickstart](../installation/condor.md#telegram-or-local) (Local mode) → [Web Dashboard](https://condor.hummingbot.org/getting-started/web-dashboard) → [First Agent](https://condor.hummingbot.org/getting-started/first-agent) | ~30–45 min |
| Intermediate | Add real credentials, run Bots/Executors alongside Agents, track P&L | [Credentials](https://condor.hummingbot.org/getting-started/credentials) → [Web Dashboard](https://condor.hummingbot.org/getting-started/web-dashboard) → [Bots vs. Executors vs. Routines](https://condor.hummingbot.org/learning-path#what-do-you-want-condor-to-do) → [Sessions](https://condor.hummingbot.org/getting-started/sessions) | ~1–2 hrs |
| Advanced | Deploy remotely/production, manage multiple agents, secure with Tailscale | [Tailscale setup](../hummingbot-api/tailscale.md) → [Trading Agents Architecture](https://condor.hummingbot.org/trading-agents/architecture) → [Agent Builder](https://condor.hummingbot.org/trading-agents/agent-builder) | ~2–4 hrs |

For the full Condor-specific breakdown, see the [Condor Learning Path](https://condor.hummingbot.org/learning-path).

**Client track**

| Level | Goal | Reading path | Time |
|-------|------|---------------|------|
| Beginner | Install the client and paper trade a strategy | [Client Quickstart](../installation/hummingbot-client.md) → paper trade `simple_pmm` → [hbot CLI](../client/hbot-cli.md) | ~30–45 min |
| Intermediate | Go live with a strategy, use a Controller | [Connect Exchange](../client/connect.md) → [Controllers](../strategies/v2-strategies/controllers/index.md) → [Strategy V2 Walkthrough](../strategies/v2-strategies/walkthrough.md) → [Config Files](../client/config-files.md) | ~1–2 hrs |
| Advanced | Build custom scripts/connectors, contribute upstream | [Scripts Cheatsheet](../strategies/scripts/cheatsheet.md) → [Building CLOB Connectors](../connectors/connectors/index.md) → [Building Gateway Connectors](../connectors/gateway-connectors/index.md) → [Contribution Guidelines](../community/contributions.md) | ~3+ hrs |

### By use case

1. **AI trades for me, starting today** — [Condor Quickstart](../installation/condor.md) → [Telegram](https://condor.hummingbot.org/getting-started/telegram) → [First Agent](https://condor.hummingbot.org/getting-started/first-agent)
2. **Test everything locally before risking capital** — [Condor Quickstart](../installation/condor.md) (local, **no Tailscale needed**) or [Client paper trading](../installation/hummingbot-client.md#step-4-run-a-paper-trading-strategy)
3. **Use Condor without a Telegram account** — [Condor Quickstart → Local mode](../installation/condor.md#telegram-or-local), then drive everything from the [web dashboard](https://condor.hummingbot.org/getting-started/web-dashboard)
4. **Run a proven market-making strategy with full manual control** — [Hummingbot Client Quickstart](../installation/hummingbot-client.md) → [Strategies](../strategies/index.md)
5. **Deploy to a VPS/cloud server for 24/7 uptime** — [Hummingbot API Installation](../hummingbot-api/installation.md) → [Tailscale](../hummingbot-api/tailscale.md) (**required**) → [Securing Condor and Hummingbot API with Tailscale](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md)
6. **Manage multiple bots or agents across a team** — [Condor](https://condor.hummingbot.org) + [Hummingbot API](../hummingbot-api/index.md), remote/Tailscale deployment
7. **Build a custom strategy or connector** — [Strategies](../strategies/index.md) → [Building CLOB Connectors](../connectors/connectors/index.md) → [Building Gateway Connectors](../connectors/gateway-connectors/index.md)
8. **Automate alerts/reports without LLM or API cost** — [Routines (Condor)](https://condor.hummingbot.org/routines/overview) or [Market Data Collector (Client)](../client/global-configs/data-collector.md)

### Did it install correctly?

Both Condor and Hummingbot API ship a `make doctor` — a read-only check of
dependencies, configuration, credentials, port exposure, Tailscale, and whether
the two can actually reach and authenticate with each other. Run it from each
repo's directory after installing, and any time something stops working.

### Do I need Tailscale?

| Situation | Tailscale needed? |
|-----------|--------------------|
| Testing locally, Condor and Hummingbot API on one machine | No |
| Same VPS, both services together | Optional, still recommended |
| Different machines (for example, laptop + VPS) | **Yes** |
| Team or multiple devices need access | **Yes** |

See [Tailscale](../hummingbot-api/tailscale.md) for setup, or the [full walkthrough](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md) for security context and screenshots.

--8<-- "docs/includes/condor-feedback.md"

!!! note "For Developers"
    If you're a developer looking to build custom strategies or exchange connectors, see [Source Installation](../client/installation.md) for Hummingbot Client or [Hummingbot API Installation](../hummingbot-api/installation.md) for the API.

Afterwards, check out the **Academy** category in the [Hummingbot Blog](../academy/index.md) for blog posts and step-by-step tutorials on how to use Hummingbot.

## Strategies

A Hummingbot [strategy](../strategies/index.md) automates an algorithmic trading strategy based on a configuration file, allowing the template containing the strategy logic to be defined publicly, while users can keep their configurations private.

As of the 2.0 release, the framework offers two ways to create Hummingbot strategies:

* [Scripts](../strategies/scripts/index.md): Scripts are the entry point for all Hummingbot strategies. A script's `on_tick` method defines the actions taken each clock tick, and it provides access to core Hummingbot components like connectors. They can range in complexity from a simple Python file that contains all strategy logic to a launcher script launches multiple Controllers, each defining a separate sub-strategy. 

* [Controllers](../strategies/v2-strategies/controllers/index.md): Controllers define a modularized strategy using components such as Executors, enabling backtesting and faciliates multi-bot deployment using Dashboard.

In the past, there were legacy strategy templates ([V1 Strategies](../strategies/v1-strategies/index.md)), the original Hummingbot strategies that are more rigid and less customizable than those built using the new Strategy V2 framework.

## Connectors

Hummingbot connectors standardize trading logic and order types across different types of exchanges and blockchain networks, so that strategies can access standardized methods that work across all connectors of that type.

Each connector's code is contained in modularized folders in the Hummingbot and/or Gateway codebases:

- [CLOB Connectors](../exchanges/index.md): Connectors to central limit order book (CLOB) centralized and decentralized exchanges
- [AMM DEX Connectors](../gateway/connectors.md): Connectors to automated market maker (AMM) decentralized exchanges and aggregators

## Official Code Repositories

All Hummingbot Foundation code is maintained and stored in repositories in the official [Github](https://github.com/hummingbot) and [DockerHub](https://hub.docker.com/r/hummingbot/) organization accounts. These are the only code repositories used to release official versions of Hummingbot.  Please download Hummingbot and Hummingbot-related software from only these official sources.

The Hummingbot framework is comprised of multiple code repositories, hosted on the [Hummingbot Foundation Github](https://github.com/hummingbot), that are maintained by the Foundation alongside individual community members. All code is open sourced under the Apache 2.0 or MIT licenses.

Hummingbot started as a command line interface (CLI) tool. The recommended entry point is now **[`hbot`](../client/hbot-cli.md)** for automation and scripts; the [interactive client](../client/index.md) remains available for manual use and Gateway/DEX workflows. 

Today, the framework comprises companion modules to assist with other aspects of crypto algorithmic trading:

* [Gateway](../gateway/index.md): Middleware to interact with AMM connectors and other DeFi protocols on various blockchains
* [Dashboard](../dashboard/index.md): A web-based user interface for deploying multi-bot trading strategies
* [Hummingbot API](https://github.com/hummingbot/hummingbot-api): Comprehensive API that exposes trading and bot deployment endpoints for Dashboard and other clients
* [Hummingbot MCP](https://github.com/hummingbot/mcp): Model Context Protocol (MCP) server that lets you use AI assistants to interact with Hummingbot API
* [Quants Lab](https://github.com/hummingbot/quants-lab): A sandbox for users to conduct research and backtest trading strategies using Python notebooks


## Getting Help

If you encounter issues or have questions, here’s how you can get assistance:

- Consult our [FAQ](../faq.md), [Troubleshooting Guide](../troubleshooting.md), or [Glossary](../glossary/index.md).

- To report bugs or suggest features, submit a [Github issue](https://github.com/hummingbot/hummingbot/issues/new/choose).

- Join our [Discord community](https://discord.gg/hummingbot) and ask questions in the **#support** channel.

We pledge that we will not use the information/data your provide us for trading purposes nor share them with third parties.

## Learn Market Making in Botcamp

To gain a deeper understanding of Hummingbot strategies along with access to the latest Hummingbot framework updates, check out [Botcamp](https://www.botcamp.xyz), the official training and [certification](../community/certification.md) program for Hummingbot.

Operated by the people behind Hummingbot Foundation, Botcamp offers bootcamps and courses that teach you how to design and deploy advanced algo trading and market making strategies using Hummingbot's Strategy V2 framework.
