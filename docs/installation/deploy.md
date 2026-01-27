# Deploy Repository

The [Deploy](https://github.com/hummingbot/deploy) repository provides one-line installation scripts for setting up Hummingbot components on any Mac or Linux system.

**GitHub Repository**: [github.com/hummingbot/deploy](https://github.com/hummingbot/deploy)

## One-Line Install

Run this single command to install Hummingbot API:

```bash
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash -s -- --api
```

This command:

1. Downloads the setup script from the Deploy repository
2. Detects your operating system and architecture
3. Checks for required dependencies (Docker, Git, etc.)
4. Clones the Hummingbot API repository
5. Prompts for credentials
6. Starts all services via Docker Compose

## Installation Output

Here's what you'll see when running the install command:

```
   ██████╗ ██████╗ ███╗   ██╗██████╗  ██████╗ ██████╗
  ██╔════╝██╔═══██╗████╗  ██║██╔══██╗██╔═══██╗██╔══██╗
  ██║     ██║   ██║██╔██╗ ██║██║  ██║██║   ██║██████╔╝
  ██║     ██║   ██║██║╚██╗██║██║  ██║██║   ██║██╔══██╗
  ╚██████╗╚██████╔╝██║ ╚████║██████╔╝╚██████╔╝██║  ██║
   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝

  Hummingbot Deploy Installer
```

### System Detection

The installer automatically detects your system:

```
[INFO] Detected OS: darwin, Architecture: arm64
[OK] Sufficient disk space available (94840MB)
[INFO] Checking for dependencies...
[OK] All dependencies (git, curl, docker, docker-compose, make) are already installed.
[OK] Docker daemon is running
[INFO] Using Docker Compose plugin
```

### Repository Setup

The script clones and configures the Hummingbot API:

```
[INFO] Starting Hummingbot API standalone installation...
[OK] Installation directory: /Users/feng/hummingbot-api

Installing Hummingbot API:
[INFO] Cloning Hummingbot API repository...
Cloning into 'hummingbot-api'...
remote: Enumerating objects: 131, done.
remote: Counting objects: 100% (131/131), done.
remote: Compressing objects: 100% (125/125), done.
remote: Total 131 (delta 11), reused 36 (delta 2), pack-reused 0 (from 0)
Receiving objects: 100% (131/131), 252.19 KiB | 2.12 MiB/s, done.
Resolving deltas: 100% (11/11), done.
```

### Credential Setup

You'll be prompted to set your credentials:

```
[INFO] Setting up Hummingbot API (running: make setup)...

Hummingbot API Setup

[INFO] OS=Darwin ARCH=arm64
[OK] Docker detected: Docker version 29.1.3, build f52814d
[OK] Docker Compose detected: Docker Compose version v5.0.1

API username [default: admin]:
API password [default: admin]:
Config password [default: admin]:

.env created successfully!
```

### Docker Deployment

The installer pulls Docker images and starts all services:

```
[INFO] Deploying Hummingbot API (running: make deploy)...
docker compose up -d
[+] Pulling hummingbot/hummingbot-api:latest
 ✔ Image hummingbot/hummingbot-api:latest Pulled
 ✔ Network hummingbot-api_emqx-bridge     Created
 ✔ Container hummingbot-broker            Created
 ✔ Container hummingbot-postgres          Created
 ✔ Container hummingbot-api               Created
```

### Installation Complete

```
════════════════════════════════════════
[OK] Hummingbot API Installation Complete!
════════════════════════════════════════

Installation Summary:
[INFO] Installation directory: /Users/feng/hummingbot-api
[INFO] Hummingbot API is installed and running

Next Steps:
[INFO] Check API status: cd /Users/feng/hummingbot-api && docker compose ps
[INFO] View logs: cd /Users/feng/hummingbot-api && docker compose logs -f

To upgrade in the future:
[INFO] Run: cd /Users/feng/hummingbot-api && git pull && make deploy
```

## Next Steps

After installation completes:

1. **Add Condor** - Set up the Telegram interface for mobile control. See the [Hummingbot API Quickstart](./hummingbot-api.md#add-condor-telegram-interface) for instructions.

2. **Access Swagger UI** - Open <http://localhost:8000/docs> to explore the API endpoints.

3. **Connect MCP** - Enable AI assistants like Claude to control your bots. See [MCP Installation](../mcp/installation.md).

## Installation Options

The Deploy script supports different installation modes:

| Flag | Description |
|------|-------------|
| `--api` | Install Hummingbot API only (recommended) |
| `--client` | Install Hummingbot Client only |
| (no flag) | Interactive mode - prompts for selection |

### Examples

```bash
# Install Hummingbot API
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash -s -- --api

# Install Hummingbot Client
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash -s -- --client

# Interactive mode (choose during install)
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash
```

## Troubleshooting

### Docker Not Running

If you see an error about Docker not running:

```bash
# Start Docker Desktop (macOS/Windows)
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
