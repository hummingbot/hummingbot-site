# `hbot` CLI

`hbot` is the **recommended command-line interface** for running Hummingbot. It is fully non-interactive and scriptable — ideal for automation, CI, and agent-driven workflows.

The classic **interactive client** (`docker attach hummingbot`) is still available for learning and manual use. See [Commands and Shortcuts](commands-shortcuts.md) for that interface.

!!! note "Gateway / DEX workflows"
    `hbot` does **not** include `gateway` commands yet. For DEX wallet setup, swaps, and LP management, use the [interactive client's Gateway commands](commands-shortcuts.md#gateway-commands) or [Hummingbot API](../hummingbot-api/index.md).

## Install

=== "Docker (recommended)"

    ```bash
    git clone https://github.com/hummingbot/hummingbot.git
    cd hummingbot
    make setup
    make deploy
    make link-cli    # installs the host `hbot` command
    hbot --version
    ```

    `make link-cli` installs a wrapper that runs `hbot` inside the Docker container via `docker exec`. Your `conf/`, `data/`, and `logs/` directories are bind-mounted into the container.

=== "Source"

    ```bash
    git clone https://github.com/hummingbot/hummingbot.git
    cd hummingbot
    make install     # creates conda env + compiles extensions
    conda activate hummingbot
    hbot --version
    ```

    For development, `make run` still launches the **interactive** client. Use `hbot` directly for the non-interactive CLI.

## Quickstart

```bash
# 1. Connect an exchange
hbot connect hyperliquid_perpetual --fields     # see required key fields
hbot connect hyperliquid_perpetual              # add keys (prompts or --keys-stdin)
hbot balance                                    # confirm funds

# 2. Create a strategy config
hbot create pmm_simple --name conf_eth.yml \
  --set connector_name=hyperliquid_perpetual --set trading_pair=ETH-USD

# Already have a config? Load it instead:
# hbot import conf_eth.yml

# 3. Start and monitor
hbot start
hbot status
hbot logs -f          # Ctrl-C to stop following

# 4. Tune, review, stop
hbot config buy_spreads 0.001    # live for controllers (~10s)
hbot history
hbot stop
```

One-shot alternative:

```bash
hbot deploy pmm_simple \
  --set connector_name=hyperliquid_perpetual --set trading_pair=ETH-USD
```

## Mental model

### One bot per install

Each Hummingbot install runs **one bot at a time**. To run multiple bots, use separate installs or containers. Pass `--replace` to stop the current bot and start a different one.

### Three config types

| Type | Folder | Description |
| --- | --- | --- |
| `v1-strategy` | `conf/strategies/` | Classic V1 strategy configs |
| `v2-script` | `conf/scripts/` | V2 script configs |
| `controller` | `conf/controllers/` | V2 controller configs (fields can be tuned live) |

Config file names are unique across the three folders, so `hbot start conf_eth.yml` auto-detects the type. Use `--v1-strategy`, `--v2-script`, or `--controller` only when a name collides across folders.

### Loaded config

`create` and `import` load a config without starting it. `start` with no argument runs the loaded config. The pointer is stored in `data/bot/loaded.json`.

**Controllers** cannot run standalone — `start` auto-generates a tiny V2 loader script. You only manage the controller config file.

### Global vs strategy config

`hbot config` shows and edits:

- **Global settings** in `conf/conf_client.yml` (rate oracle, log level, paper trade, etc.)
- **Strategy settings** in the loaded config file, when one is loaded

Global keys win on name collision. Use dotted keys for nested globals, e.g. `hbot config mqtt_bridge.mqtt_host localhost`.

## Commands

| Command | Description |
| --- | --- |
| `connect [connector]` | List connections, or add API keys (`--fields`, `--all`, `--keys-stdin`, `--replace`) |
| `balance [connector]` | Balances and USD value; perps show positions inline (`--units-only`, `--json`) |
| `create <strategy>` | Create a config (`--set key=value`, `--with-defaults`, `--name`) |
| `import <config>` | Load an existing config |
| `config [key] [value]` | Show or edit global + loaded strategy config (`--json`) |
| `deploy <target>` | Create/load config and start in one step (same flags as `create` + `start`) |
| `start [config]` | Start a bot (`--replace`, `--foreground`, `--timeout`, `--json`) |
| `stop` | Graceful stop, cancels orders (`--force`, `--timeout`) |
| `status` | Run state, live status, recent error count (`--json`) |
| `logs [name]` | Tail log file (`-n/--lines`, `-f/--follow`, `--json`) |
| `history [name]` | PnL, fees, volume per market (`--days`) |
| `doctor` | Health check: keystore, clock skew, disk, stale state (exit 0 = healthy) |
| `update` | Update software (`--check` to preview; Docker must `docker compose pull`) |

Run `hbot <command> -h` for full option lists.

## Passwords

The keystore password encrypts connector API keys. **Never pass it on the command line.**

- Set `HBOT_PASSWORD` in the environment, or
- Pipe it with `--password-stdin`:

```bash
printf '%s' "$PW" | hbot start conf_eth.yml --password-stdin
```

On a new install, the **first** password you provide (during `connect`, `balance`, or `start`) becomes your keystore password — same as the interactive client's first launch.

## Output and exit codes

Commands emit compact **Markdown** on stdout (tables for lists, key-value blocks for records). Run/observe commands also accept **`--json`** for machine-readable output.

| Code | Meaning |
| --- | --- |
| 0 | Success |
| 1 | Generic error |
| 2 | Not found (bot/config/file) |
| 3 | Not running |
| 4 | Config error (bad/missing config, value, or password) |
| 5 | Timeout |

Branch on exit codes in scripts, not on stdout text.

## Docker modes

### Host CLI → container (default with `make link-cli`)

By default, `make deploy` starts the interactive client. For an **idle hbot host**, uncomment in `docker-compose.yml`:

```yaml
# command: tail -f /dev/null
```

Then:

```bash
make deploy
make link-cli
hbot connect binance
hbot start conf_my_bot.yml
```

The compose file should set `init: true` so bot processes are reaped correctly when started via `docker exec`.

### One dedicated bot per container

For orchestration (one container = one bot), use `--foreground` so the bot is the container's main process:

```yaml
services:
  bot:
    image: hummingbot/hummingbot
    environment:
      - HBOT_PASSWORD
    volumes:
      - ./conf:/home/hummingbot/conf
      - ./data:/home/hummingbot/data
      - ./logs:/home/hummingbot/logs
    command: hbot start conf_my_bot.yml --foreground
```

Without `--foreground`, `hbot start` detaches and the container would exit immediately.

Do not run `hbot` and the interactive client in the same container — they share one `conf/`/`data/`/`logs/` tree.

## Files and state

```
conf/
├── conf_client.yml          # global settings (hbot config)
├── strategies/              # V1 configs
├── scripts/                 # V2 script configs
├── controllers/             # V2 controller configs
└── connectors/              # encrypted API keys

data/
├── bot/                     # current bot: bot.pid, status.json, loaded.json
└── <config_stem>.sqlite     # trades database

logs/
└── logs_<config_stem>.log   # structured log
```

- `status` reads `data/bot/status.json` (updated every few seconds while running)
- `history` reads the SQLite trades DB
- `logs` tails `logs/logs_<name>.log`
- Review a **stopped** bot later: `hbot history conf_eth` or `hbot logs conf_eth`

## Paper trade

Paper trading is configured globally in `conf/conf_client.yml` under `paper_trade`, not via `hbot start --paper` (proposed but not shipped). See [Paper Trade](global-configs/paper-trade.md).

In the interactive client, use `balance paper` to manage paper balances. Select `{exchange}_paper_trade` as your connector when creating a strategy.

## Not in `hbot` v1

These interactive-client commands are **deferred** from `hbot` v1:

| Deferred | Alternative in v1 |
| --- | --- |
| `gateway …` | Interactive client or Hummingbot API |
| `ticker`, `rate`, `book`, `rules` | Exchange public APIs; running bot prices in `status` |
| `export` | Open the SQLite DB directly |
| `mqtt` | Hummingbot API bot orchestration |
| `connect --remove` | Edit encrypted connector files manually |

Proposed future commands: `start --paper`, `backtest`, `bots` (list past runs), `export`.

## Related

- [Hummingbot Client Quickstart](../installation/hummingbot-client.md)
- [Commands and Shortcuts](commands-shortcuts.md) — interactive client
- [Config Files](config-files.md)
- [Start and Stop Strategy](start-stop.md)
- [Client Installation](installation.md)
