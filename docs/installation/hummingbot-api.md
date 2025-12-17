# Hummingbot API Quickstart

The [Hummingbot API](https://github.com/hummingbot/hummingbot-api) provides a REST API backend for managing multiple Hummingbot instances, portfolios, and trading operations. It's ideal for production deployments on cloud servers.

## What You'll Set Up

By the end of this guide, you'll have:

- **Hummingbot API** - REST API backend for bot management and trading (port 8000)
- **Condor** - Telegram bot for monitoring and controlling Hummingbot API from mobile and desktop

This setup is best for managing multiple bot instances on a cloud server (AWS, Digital Ocean, etc.) with mobile access via Telegram.

## Prerequisites

### Install Docker

=== "macOS"
    Install Docker Desktop from the [official Docker website](https://docs.docker.com/desktop/install/mac-install/)

=== "Linux"
    **Desktop Users:**
    Install Docker Desktop from [official site](https://docs.docker.com/desktop/install/linux-install/)

    **Headless Servers** (VPS like AWS EC2 or Digital Ocean):
    ```bash
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    ```

=== "Windows"
    !!! note "Prerequisites"
        - Docker Desktop installed
        - WSL2 enabled
        - Ubuntu distribution installed

    **Always run commands in:** Ubuntu Terminal (Start Menu → Ubuntu)

## Installation

Clone the repository and run the setup script:

```bash
git clone https://github.com/hummingbot/hummingbot-api.git
cd hummingbot-api
chmod +x setup.sh
./setup.sh
```

The setup script will:

Prompt you for credentials (default: `admin`/`admin`)

Start all services

```bash
make deploy
```

## Access Your Platform

After setup completes:

| Interface | URL | Description |
|-----------|-----|-------------|
| **Swagger UI** | <http://localhost:8000/docs> | Interactive API documentation (always available) |
| **Dashboard** | <http://localhost:8501> | Web interface (if enabled during setup) |

!!! note "Cloud Servers"
    If using a cloud server or VPS, replace `localhost` with your server's IP address. Configure firewall rules to allow inbound connections to ports 8000 and 8501.

## Add Condor Telegram Interface

[Condor](https://github.com/hummingbot/condor) is a Telegram bot that lets you monitor and control your Hummingbot instances from your phone. It's the recommended interface for managing bots deployed with Hummingbot API.

### Create a Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/botfather)
2. Send `/newbot` and follow the prompts to create your bot
3. Copy the **bot token** (looks like `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Get Your Telegram User ID

You'll need your Telegram User ID to authorize yourself:

1. Search for [@userinfobot](https://t.me/userinfobot) on Telegram
2. Send `/start` - it will reply with your User ID (a number like `123456789`)

### Install Condor

```bash
git clone https://github.com/hummingbot/condor.git
cd condor
./setup-environment.sh
```

The setup script will prompt you for:

- `TELEGRAM_TOKEN`: Your bot token from BotFather
- `AUTHORIZED_USERS`: Your Telegram User ID (comma-separated for multiple users)

### Start Condor

```bash
docker compose up -d
```

### Connect to Your Bot

1. Open your bot in Telegram and send `/start`
2. Use `/config` → **API Servers** to connect to your Hummingbot API (default: `localhost:8000`)
3. Use `/config` → **API Keys** to add exchange credentials
4. Use `/config` → **Gateway** to enable DEX trading (optional)

For detailed Condor usage, see [Condor Documentation](../condor/index.md).

## Other Interfaces

- **[MCP Server](../mcp/installation.md)** - Connect AI assistants (Claude, Gemini, ChatGPT) to control Hummingbot
- **[Dashboard](../dashboard/index.md)** - Web interface (deprecated, use Condor instead)

## Start Trading

- **[Developer Guide](../hummingbot-api/quickstart.md)** - Use the REST API directly with curl or Python client

## Troubleshooting

### Check Container Status

```bash
docker compose ps
```

### View Logs

```bash
docker compose logs -f hummingbot-api
```

### Restart Services

```bash
docker compose down
docker compose up -d
```

### Reset Installation

To start fresh, remove all containers and volumes:

```bash
docker compose down -v
./setup.sh
```

!!! warning "Deploy Repo Deprecated"
    The [Deploy](https://github.com/hummingbot/deploy) repository is deprecated. Use Hummingbot API instead.
