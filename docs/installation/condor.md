# Condor Quickstart

**Condor** is an open source harness for building and running autonomous **Trading Agents**. It connects LLM-powered decision-making to deterministic trade execution via the [Hummingbot API](../hummingbot-api/index.md), enabling traders to deploy AI agents that can observe markets, reason about strategy, and execute trades across 50+ exchanges and blockchains.

For full installation instructions, see the Condor documentation:

[:material-arrow-right: **Condor Documentation**](https://condor.hummingbot.org){ .md-button .md-button--primary }

!!! tip "Help shape Condor"
    Got Condor running? Tell us how install went, what's confusing, and what you need next. The survey takes **2 minutes** and directly shapes what we build next.

    **[Take the 2-minute survey →](https://forms.gle/7NpG3RtgfLrmpUNY8)**

## Quick Install

```bash
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash
```

The install script will prompt for:

- **How you will use Condor** — **Telegram** (a bot you drive from your phone, recommended) or **Local** (no Telegram at all; the web dashboard runs on that machine with no login). See [Telegram or Local?](#telegram-or-local) below.
- **Telegram Bot Token** and **Telegram User ID** (Telegram mode only): create the bot via [@BotFather](https://t.me/botfather), get your id via [@userinfobot](https://t.me/userinfobot)
- **Tailscale** (for production): When asked about securing the connection to Hummingbot API, answer **`y`** — see [Hummingbot API Tailscale guide](../hummingbot-api/tailscale.md)
- **AI model**: which model your Trading Agents think with. The wizard installs its CLI bridge for you, or you can skip and run `make pick-model` later.
- **Hummingbot API credentials**: an admin username, password, and config password. Required, with no defaults — they are written to both the API's `.env` and Condor's `config.yml` so the two sides match.

## Telegram or Local?

Both modes run the same agents, bots, routines, and web dashboard. Only the front end differs.

| | **Telegram** | **Local** |
|---|---|---|
| You need | A bot token and your Telegram user id | Nothing extra |
| How you drive it | Telegram commands, plus the dashboard via `/web` | The web dashboard at `http://localhost:8088` |
| Login | Telegram authenticates you | **None** — whoever reaches the port has full trading control |
| Network | Dashboard reachable from other devices | Binds `127.0.0.1`; that machine only |
| Best for | Almost everyone, especially a VPS | A laptop you are testing on |

!!! warning "Local mode has no login"
    It binds `127.0.0.1` so only that machine can reach it. Exposing it (`WEB_HOST=0.0.0.0`) puts full trading control in reach of anyone who can hit the port — only do that behind something that authenticates, such as Tailscale, an SSH tunnel, or an authenticating reverse proxy.

To switch modes later, re-run `make setup` and pick the other one. Your servers, credentials, preferences and agent history carry across.

## Check the Install

From the `condor` directory:

```bash
make doctor
```

A read-only pass over dependencies, `.env` and `config.yml`, the AI model, whether the dashboard is sitting on a public interface, Tailscale, and whether every configured Hummingbot API server is reachable and authenticating. `make doctor` in the `hummingbot-api` directory does the same for the execution layer.

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
| Telegram | Your bot | Primary interface (Telegram mode) |
| Web Dashboard | `http://localhost:8088` | Browser interface — `/web` issues a login link in Telegram mode; Local mode opens it directly |
| API | `http://localhost:8000` | REST API |
| Swagger | `http://localhost:8000/docs` | API documentation |

## Keeping It Updated

Updating is admin-only and available from both surfaces, over one shared engine:
**`/update`** in Telegram and **Settings → Updates** in the web dashboard. They
are two views of the same run — start it in one and watch it finish in the other
— so a **Local mode** install with no Telegram bot updates from the dashboard
panel without needing one.

It reports what Condor and the Hummingbot API are each running (for the API,
both its git checkout and its container image), then a preflight of blockers
with a way out where one exists, and warnings that never refuse.

Condor also checks in the background and tells the admin when something falls
behind — once per update rather than once per check, with a next step each
surface can actually take. `UPDATE_CHECK_INTERVAL` in `.env` tunes it (seconds,
default `3600`; `0` disables).

!!! note "An update asks you to relaunch"
    It lands the code, syncs dependencies and rebuilds the dashboard, then stops
    and asks you to restart it yourself:

    ```bash
    cd condor && make restart
    ```

    Condor is rarely the top of its own process tree — `make run`, a shell
    wrapper, a supervisor — so re-execing itself would race the parent into
    bringing a second Condor up on the same port and token.

## Learn More

- [Condor Documentation](https://condor.hummingbot.org) - Full guides for Trading Agents, executors, and more
- [Give Feedback](https://forms.gle/7NpG3RtgfLrmpUNY8) - 2-minute survey that shapes the Condor roadmap
- [Hummingbot API Reference](../hummingbot-api/index.md) - API endpoints and developer guide
- [Hummingbot API — Tailscale](../hummingbot-api/tailscale.md) - Recommended for production (private API access)
- [MCP Installation](../mcp/installation.md) - Connect AI assistants to Hummingbot API
