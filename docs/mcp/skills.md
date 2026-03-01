# Hummingbot Skills

Hummingbot Skills are structured agent capabilities for AI assistants that provide commands, scripts, and documentation for managing the Hummingbot ecosystem. Each skill bundles everything an AI agent needs to perform a specific set of tasks — from deploying bots to managing LP positions.

**GitHub Repository**: [github.com/hummingbot/skills](https://github.com/hummingbot/skills)

Unlike MCP (which requires a running server), skills work with any AI assistant or agent framework by providing self-contained scripts and structured prompts that can be run directly against the Hummingbot API.

## Available Skills

| Skill | Description |
|-------|-------------|
| [`hummingbot`](https://github.com/hummingbot/skills/tree/main/skills/hummingbot) | Core skill: manage bots, strategies, connectors, and accounts |
| [`lp-agent`](https://github.com/hummingbot/skills/tree/main/skills/lp-agent) | LP position management for CLMM pools (Meteora, Raydium) with visualization and export |
| [`hummingbot-deploy`](https://github.com/hummingbot/skills/tree/main/skills/hummingbot-deploy) | Deploy and manage Hummingbot API stack via Docker |
| [`hummingbot-developer`](https://github.com/hummingbot/skills/tree/main/skills/hummingbot-developer) | Developer workflow: install, build, and run the full stack from source |
| [`hummingbot-heartbeat`](https://github.com/hummingbot/skills/tree/main/skills/hummingbot-heartbeat) | Hourly Hummingbot status updates (API, Gateway, bots, portfolio) delivered to Telegram or Discord |
| [`connectors-available`](https://github.com/hummingbot/skills/tree/main/skills/connectors-available) | Discover and test available exchange connectors |
| [`find-arbitrage-opps`](https://github.com/hummingbot/skills/tree/main/skills/find-arbitrage-opps) | Scan for arbitrage opportunities across CEX and DEX exchanges (Jupiter, Uniswap, PancakeSwap) |
| [`find-xemm-opps`](https://github.com/hummingbot/skills/tree/main/skills/find-xemm-opps) | Find Cross-Exchange Market Making opportunities via order book depth analysis and auto-generate strategy configs |

## Environment Variables

All skills authenticate against Hummingbot API using the same environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `HUMMINGBOT_API_URL` | `http://localhost:8000` | Hummingbot API base URL |
| `API_USER` | `admin` | API username |
| `API_PASS` | `admin` | API password |

Set these in your shell or a `.env` file before running any skill scripts:

```bash
export HUMMINGBOT_API_URL=http://localhost:8000
export API_USER=admin
export API_PASS=admin
```

---

## Install via npx (Claude Code / Cursor / Codex)

The recommended way to install skills for MCP-compatible AI coding agents is via `npx`:

```bash
npx skills add hummingbot/skills --yes
```

This installs all skills from the repository into your agent's skill directory. To install a specific skill only:

```bash
npx skills add hummingbot/skills/skills/lp-agent --yes
```

After installation, skills are available as agent commands (e.g., `/lp-agent run-strategy`).

---

## Install for OpenClaw

[OpenClaw](https://openclaw.ai) is a personal AI assistant platform that uses skills natively. Skills provide structured commands that OpenClaw's AI agent can execute on your behalf.

### Installing Skills

Install all Hummingbot skills into your OpenClaw workspace:

```bash
npx skills add hummingbot/skills --yes
```

Or install a specific skill:

```bash
npx skills add hummingbot/skills/skills/hummingbot --yes
```

Skills are installed to `~/.openclaw/workspace/.agents/skills/`.

### Using Skills in OpenClaw

Once installed, invoke skills using slash commands in your OpenClaw chat:

```
/hummingbot start
/lp-agent run-strategy
/hummingbot-deploy deploy-api
/hummingbot-developer verify-build
```

### lp-agent Skill

The `lp-agent` skill is purpose-built for managing liquidity positions on Solana CLMM pools (Meteora, Raydium). Use it to:

- Deploy and monitor LP executors via Hummingbot API
- Visualize position performance with interactive HTML dashboards
- Export position history to CSV for analysis

**Key commands:**

| Command | Description |
|---------|-------------|
| `run-strategy` | Start an LP strategy on a CLMM pool |
| `manage-positions` | List, stop, and inspect LP executors |
| `analyze-performance` | Generate a visual dashboard for a position |
| `export-data` | Export position history to CSV |
| `add-wallet` | Add a Solana wallet to Gateway |
| `setup-gateway` | Configure Gateway for DEX connectivity |

**Required setup:**

```bash
export HUMMINGBOT_API_URL=http://localhost:8000
export API_USER=admin
export API_PASS=admin
```

Then in OpenClaw:
```
/lp-agent setup-gateway
/lp-agent add-wallet
/lp-agent run-strategy
```

### hummingbot-developer Skill

The `hummingbot-developer` skill manages the full Hummingbot dev stack from source — useful when developing custom strategies or contributing to Hummingbot.

**Key commands:**

| Command | Description |
|---------|-------------|
| `start` | Check dev environment status |
| `install-all` | Install all three repos in order |
| `verify-build` | Verify builds are correct and in sync |
| `run-dev-stack` | Start full stack from source |
| `test-integration` | Smoke test the full stack |

---

## Creating Custom Skills

Skills follow a simple structure:

```
my-skill/
├── SKILL.md          # Skill definition: name, commands, instructions for the agent
└── scripts/          # Supporting scripts called by the agent
    ├── my_script.py
    └── my_script.sh
```

`SKILL.md` defines the skill's commands in YAML frontmatter and provides instructions the AI agent follows when a command is invoked. See the [hummingbot/skills repository](https://github.com/hummingbot/skills) for examples.

To contribute a skill, open a pull request against the `main` branch of [hummingbot/skills](https://github.com/hummingbot/skills).

---

## find-arbitrage-opps Skill

The `find-arbitrage-opps` skill scans for price discrepancies across CEX and DEX exchanges, including on-chain liquidity via Gateway.

**Features:**

- Compares prices across all connected CEX connectors in parallel
- **DEX support** via `--dex` flag: queries Jupiter (Solana), Uniswap (Ethereum), and PancakeSwap (BSC) through Hummingbot Gateway
- Smart chain-aware routing — Jupiter only queried for Solana tokens, Uniswap/PancakeSwap for Ethereum/BSC tokens
- Regional exchange filtering: `btc_markets` (AU-only) and `ndax` (CA-only) excluded by default with opt-in flags
- Outlier filtering (±20% from median) to remove stale or erroneous prices

**Usage:**

```bash
# CEX only
python scripts/find_arb_opps.py --base SOL --quote USDC

# Include DEX (Jupiter + Uniswap + PancakeSwap)
python scripts/find_arb_opps.py --base ETH --quote USDC --dex

# Filter to specific connectors
python scripts/find_arb_opps.py --base BTC --quote USDT --connectors binance,kraken,coinbase
```

---

## find-xemm-opps Skill

The `find-xemm-opps` skill identifies optimal exchange pairs for Cross-Exchange Market Making (XEMM) by analyzing live order book depth.

**What is XEMM?**

XEMM involves quoting on one exchange (maker) while hedging fills on another (taker). Best opportunities exist where:

- **Maker side**: wide bid-ask spread + shallow book = room to profit from quotes
- **Taker side**: tight spread + deep book = cheap and liquid hedge

**Features:**

- Fetches order book snapshots (depth 20) from all connectors in parallel
- Scores each exchange pair by: mid-price gap, spread ratio, depth ratio, and order book balance (B/A ratio)
- Penalizes imbalanced books (B/A > 2.0 or < 0.5) to filter risky opportunities
- Auto-suggests `xemm_multiple_levels` profitability levels based on taker spread
- `--create-config` flag saves a ready-to-deploy controller config to Hummingbot API

**Usage:**

```bash
# Scan for XEMM opportunities
python scripts/find_xemm_opps.py --base SOL --quote USDT,USDC

# Scan and auto-create a controller config
python scripts/find_xemm_opps.py --base ETH --quote USDT \
  --connectors binance,okx,kraken,mexc \
  --create-config --total-amount 500 --config-name my_eth_xemm
```

**Environment variables:**

```bash
export HUMMINGBOT_API_URL=http://localhost:8000
export API_USER=admin
export API_PASS=admin
```
