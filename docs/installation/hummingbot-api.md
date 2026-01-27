# Hummingbot API Quickstart

This guide walks you through deploying Hummingbot API and Condor using a one-line install script. By the end, you'll have your own private algorithmic trading server that can execute trades and run high-frequency strategies on any centralized or decentralized exchange—controlled from your phone or desktop via Telegram. Best of all, it's completely free and open source!

For source installation, API endpoints, and advanced configuration, see [Hummingbot API Documentation](../hummingbot-api/index.md).

## What You'll Set Up

By the end of this guide, you'll have:

- **Hummingbot API** - REST API backend for bot management and trading (port 8000)
- **Condor** (optional) - Telegram bot for monitoring and controlling Hummingbot API from mobile and desktop

## Prerequisites

### System Requirements

Hummingbot API can be installed on any Mac or Linux-based system. For long-running bot operation, we recommend deploying to a cloud server for 24/7 uptime.

| **Component**        | **Specifications**                                     |
|----------------------|-------------------------------------------------------|
| **Operating System** | Linux x64 or ARM (Ubuntu 20.04+, Debian 10+), macOS   |
| **Memory**           | 4 GB RAM minimum                                       |
| **Storage**          | 10 GB SSD                                              |
| **CPU**              | 2 vCPUs minimum                                        |

??? note "Cloud Server Setup"
    === "AWS EC2"
        1. Launch an EC2 instance with **Ubuntu 22.04 LTS**
        2. Choose instance type: **t3.medium** (2 vCPU, 4 GB RAM) or larger
        3. Configure security group to allow inbound traffic on ports **22** (SSH) and **8000** (API)
        4. Connect via SSH:
        ```bash
        ssh -i your-key.pem ubuntu@your-instance-ip
        ```

    === "Google Cloud"
        1. Create a Compute Engine VM with **Ubuntu 22.04 LTS**
        2. Choose machine type: **e2-medium** (2 vCPU, 4 GB RAM) or larger
        3. Configure firewall rules to allow TCP ports **22** and **8000**
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

### Docker

Docker is a containerization platform that packages applications and their dependencies into isolated containers. Hummingbot API runs as Docker containers for easy deployment and management.

Install Docker from the [official Docker website](https://docs.docker.com/get-docker/), or run this command on Linux:

```bash
curl -fsSL https://get.docker.com | sh
```

### Telegram (optional)

If you want to use Condor to control Hummingbot API via Telegram, you'll need to create a bot and get your user ID before running the install script.

**Create a Telegram Bot:**

[BotFather](https://t.me/botfather) is Telegram's official bot for creating and managing bots.

1. Open the link above or search for `@BotFather` in Telegram
2. Send `/newbot` and follow the prompts to name your bot (e.g., `@my_condor_bot`)
3. Copy the **bot token** (looks like `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

**Get Your Telegram User ID:**

[UserInfoBot](https://telegram.me/userinfobot) is a bot that tells you your Telegram user ID.

1. Open the link above or search for `@userinfobot` in Telegram
2. Send `/start` - it will reply with your User ID (a number like `123456789`)

**During Installation:**

The deploy script will prompt you for these values:

```
===================================
      Condor Bot Setup
===================================

Enter your Telegram Bot Token: 1234567890:ABCdefGHIjklMNOpqrsTUVwxyz

Enter your Telegram User ID (you will be the admin).
(Tip: Message @userinfobot on Telegram to get your ID)
Admin User ID: 123456789

Enter your OpenAI API Key (optional, for AI features).
Press Enter to skip if not using AI features.
OpenAI API Key:

✅ .env file created successfully!
✅ config.yml created successfully!

✅ Setup Complete! Environment and config files are ready.
==========================================================
🚀 RUN:   'make deploy' (Docker) or 'make run' (Local)
🤖 NEXT:  Open Telegram, use /servers to add API servers
==========================================================
```

## Installation

Run the Deploy script to install both Hummingbot API and Condor:

```bash
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash
```

!!! tip "API Only Installation"
    If you only want to install Hummingbot API without Condor, add the `--api` flag:
    ```bash
    curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash -s -- --api
    ```

### Deploy Script

Here's what you'll see when running the install script:

```
   ██████╗ ██████╗ ███╗   ██╗██████╗  ██████╗ ██████╗
  ██╔════╝██╔═══██╗████╗  ██║██╔══██╗██╔═══██╗██╔══██╗
  ██║     ██║   ██║██╔██╗ ██║██║  ██║██║   ██║██████╔╝
  ██║     ██║   ██║██║╚██╗██║██║  ██║██║   ██║██╔══██╗
  ╚██████╗╚██████╔╝██║ ╚████║██████╔╝╚██████╔╝██║  ██║
   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝

  Hummingbot Deploy Installer
```

#### Step 1: System Detection

The installer automatically detects your system and checks dependencies:

```bash
[INFO] Detected OS: darwin, Architecture: arm64
[OK] Sufficient disk space available (92947MB)
[INFO] Checking for dependencies...
[OK] All dependencies (git, curl, docker, docker-compose, make) are already installed.
[OK] Docker daemon is running
[INFO] Using Docker Compose plugin
[INFO] Starting new installation...
[OK] Installation directory: /home/user
```

#### Step 2: Condor Setup

The script clones and configures Condor:

```bash
Installing Condor Bot:
[INFO] Cloning Condor repository...
Cloning into 'condor'...
remote: Enumerating objects: 107, done.
remote: Counting objects: 100% (107/107), done.
remote: Compressing objects: 100% (101/101), done.
remote: Total 107 (delta 10), reused 35 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (107/107), 399.69 KiB | 2.15 MiB/s, done.
Resolving deltas: 100% (10/10), done.
[INFO] Running Condor setup script...
===================================
      Condor Bot Setup
===================================

Enter your Telegram Bot Token:
```

Enter the bot token you received from BotFather, then your Telegram User ID when prompted.

#### Step 3: Hummingbot API Setup

Next, the script installs Hummingbot API:

```bash
Installing Hummingbot API:
[INFO] Cloning Hummingbot API repository...
Cloning into 'hummingbot-api'...
[INFO] Setting up Hummingbot API (running: make setup)...

Hummingbot API Setup

[INFO] OS=Linux ARCH=x86_64
[OK] Docker detected: Docker version 29.1.3
[OK] Docker Compose detected: Docker Compose version v5.0.1

API username [default: admin]:
API password [default: admin]:
Config password [default: admin]:

.env created successfully!
```

Press Enter to accept the defaults or enter custom credentials.

#### Step 4: Docker Deployment

The installer pulls Docker images and starts all services:

```bash
[INFO] Deploying Hummingbot API (running: make deploy)...
docker compose up -d
[+] Pulling hummingbot/hummingbot-api:latest
 ✔ Image hummingbot/hummingbot-api:latest Pulled
 ✔ Network hummingbot-api_emqx-bridge     Created
 ✔ Container hummingbot-broker            Created
 ✔ Container hummingbot-postgres          Created
 ✔ Container hummingbot-api               Created
```

#### Step 5: Installation Complete

```bash
════════════════════════════════════════
[OK] Installation Complete!
════════════════════════════════════════

Installation Summary:
[INFO] Installation directory: /Users/feng/tmp/tmp
[INFO] Condor is installed and running

Next Steps:
[INFO] 1. Open Telegram and start a chat with @my_condor_bot
[INFO] 2. Use /config command to add Hummingbot API servers and manage access
[INFO] 3. Check Condor status: cd /Users/feng/tmp/tmp/condor && docker compose ps

Management Commands:
[INFO] View Condor logs: cd /Users/feng/tmp/tmp/condor && docker compose logs -f

To upgrade in the future:
[INFO] Run this script with --upgrade flag: bash bash --upgrade
```

## What Gets Installed

### Directory Structure

The installer creates two folders in your current directory with the Github repositories for Condor and Hummingbot API, respectively. These folders are where your bots' data and strategies are stored.

```bash
$ ls -al
drwxr-xr-x  condor          # Condor Telegram bot
drwxr-xr-x  hummingbot-api  # Hummingbot API server
```

### Docker Containers

Four containers are started automatically:

```bash
$ docker ps
CONTAINER ID   IMAGE                              PORTS                    NAMES
abc123         hummingbot/condor:latest           -                        condor
def456         hummingbot/hummingbot-api:latest   0.0.0.0:8000->8000/tcp   hummingbot-api
ghi789         postgres:16                        0.0.0.0:5432->5432/tcp   hummingbot-postgres
jkl012         emqx:5                             0.0.0.0:1883->1883/tcp   hummingbot-broker
```

| Container | Description |
|-----------|-------------|
| `condor` | Telegram bot interface |
| `hummingbot-api` | FastAPI server providing REST API (port 8000) |
| `hummingbot-postgres` | PostgreSQL database for trading data |
| `hummingbot-broker` | EMQX message broker for bot communication |

## Using Hummingbot API

After installation, you can interact with Hummingbot API through these interfaces:

### Condor

If you installed Condor, open your bot in Telegram (e.g., `@my_condor_bot`) and send `/start`. Then use `/servers` to connect to your Hummingbot API server.

For detailed setup instructions, see [Condor Documentation](../condor/index.md).

### MCP

Connect AI assistants like Claude, ChatGPT, or Gemini to control your trading infrastructure using natural language.

See the [MCP Installation Guide](../mcp/installation.md) for setup instructions.

### Swagger UI

Access the interactive API documentation at <http://localhost:8000/docs> to explore and test all available endpoints directly in your browser.

## Troubleshooting

### Docker Not Running

If you see an error about Docker not running:

```bash
# Start Docker Desktop (macOS)
open -a Docker

# Or start Docker daemon (Linux)
sudo systemctl start docker
```

### Permission Denied

If you encounter permission errors on Linux:

```bash
# Add your user to the docker group
sudo usermod -aG docker $USER

# Log out and back in, then retry
```

### Port Already in Use

If port 8000 is already in use:

```bash
# Check what's using the port
lsof -i :8000

# Stop the conflicting service or change the port in .env
```
