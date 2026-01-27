# Hummingbot API Quickstart

This guide walks you through deploying the Hummingbot API on a cloud server and setting up Condor for Telegram-based control.

For source installation, API endpoints, and advanced configuration, see [Hummingbot API Documentation](../hummingbot-api/index.md).

## What You'll Set Up

By the end of this guide, you'll have:

- **Hummingbot API** - REST API backend for bot management and trading (port 8000)
- **Condor** - Telegram bot for monitoring and controlling Hummingbot API from mobile and desktop

This setup is best for managing multiple bot instances on a cloud server (AWS, Digital Ocean, etc.) with mobile access via Telegram.

## Prerequisites

Hummingbot API can be installed on any Mac or Linux-based system. For long-running bot operation, we recommend deploying to a cloud server (AWS, Google Cloud, Digital Ocean, etc.) for 24/7 uptime.

### System Requirements

| **Component**        | **Specifications**                                     |
|----------------------|-------------------------------------------------------|
| **Operating System** | Linux x64 or ARM (Ubuntu 20.04+, Debian 10+)          |
| **Memory**           | 4 GB RAM minimum                                       |
| **Storage**          | 10 GB SSD                                              |
| **CPU**              | 2 vCPUs minimum                                        |

### Cloud Server Setup

=== "AWS EC2"
    1. Launch an EC2 instance with **Ubuntu 22.04 LTS**
    2. Choose instance type: **t3.medium** (2 vCPU, 4 GB RAM) or larger
    3. Configure security group to allow inbound traffic on ports **22** (SSH), **8000** (API), and **8501** (Dashboard)
    4. Connect via SSH:
    ```bash
    ssh -i your-key.pem ubuntu@your-instance-ip
    ```

=== "Google Cloud"
    1. Create a Compute Engine VM with **Ubuntu 22.04 LTS**
    2. Choose machine type: **e2-medium** (2 vCPU, 4 GB RAM) or larger
    3. Configure firewall rules to allow TCP ports **22**, **8000**, and **8501**
    4. Connect via SSH:
    ```bash
    gcloud compute ssh your-instance-name
    ```

=== "Digital Ocean"
    1. Create a Droplet with **Ubuntu 22.04 LTS**
    2. Choose size: **Basic $24/mo** (2 vCPU, 4 GB RAM) or larger
    3. Connect via SSH:
    ```bash
    ssh root@your-droplet-ip
    ```

### Install Docker

Once connected to your server, install Docker:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

## Installation

=== "One-Line Install (Recommended)"

    Run this single command to install Hummingbot API:

    ```bash
    curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash -s -- --api
    ```

    This will clone the repository, prompt you for credentials, and start all services automatically.

=== "Manual Install"

    Clone the repository, run the setup script, and deploy:

    ```bash
    git clone https://github.com/hummingbot/hummingbot-api.git
    cd hummingbot-api
    ./setup.sh
    make deploy
    ```

The setup script will:

1. Prompt you for API credentials (default: `admin`/`admin`)
2. Generate the `.env` configuration file
3. Start all services via Docker Compose

## Access Your Platform

After setup completes, you can interact with Hummingbot API through:

| Interface | Description |
|-----------|-------------|
| **Condor** | Telegram bot for mobile/desktop control (setup below) |
| **MCP** | Connect AI assistants like Claude, ChatGPT, Gemini ([setup guide](../mcp/installation.md)) |
| **Swagger UI** | Interactive API docs at <http://localhost:8000/docs> |

!!! note "Cloud Servers"
    If using a cloud server or VPS, replace `localhost` with your server's IP address. Configure firewall rules to allow inbound connections on port **8000**.

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
