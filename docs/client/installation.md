# Hummingbot Client Installation

This page provides detailed installation instructions for the Hummingbot Client, including both Docker and source installation methods.

For a quick Docker-based setup, see the [Hummingbot Client Quickstart](../installation/hummingbot-client.md).

## System Requirements

| **Component**        | **Specifications**                                     |
|----------------------|-------------------------------------------------------|
| **Operating System** | Linux x64 or ARM (Ubuntu 20.04+, Debian 10+), macOS, Windows (WSL2) |
| **Memory**           | 4 GB RAM per instance                                 |
| **Storage**          | 5 GB HDD space per instance                           |
| **CPU**              | at least 1 vCPU per instance / controller             |

## Choose Your Installation Method

| Method | Best For | Requirements |
|--------|----------|--------------|
| **[Docker](#docker-installation)** | Quick setup, isolated environment | Docker installed |
| **[Source](#source-installation)** | Developers, code modifications | Python, Anaconda |

---

## Docker Installation

### Prerequisites

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

### Install and Run

Clone the repository and run setup:

```bash
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
make setup
make deploy
```

Attach to the running container:

```bash
docker attach hummingbot
```

You should see the Hummingbot welcome screen:

![welcome screen](../assets/img/welcome.png)

### Docker Commands

| Command | Description |
|---------|-------------|
| `make setup` | Configure environment (prompts for Gateway) |
| `make deploy` | Start Hummingbot in background |
| `docker attach hummingbot` | Attach to running instance |
| `docker compose down` | Stop Hummingbot |
| `docker compose logs -f` | View logs |
| `docker pull hummingbot/hummingbot:latest` | Update to latest version |

### Detach Without Stopping

Press <kbd>Ctrl</kbd> + <kbd>P</kbd> then <kbd>Ctrl</kbd> + <kbd>Q</kbd> to detach from Docker without stopping the bot.

### Development or Older Versions

Edit `docker-compose.yml` and change the `image` field:

```yaml
# Development branch
image: hummingbot/hummingbot:development

# Specific version (e.g., 2.0.0)
image: hummingbot/hummingbot:version-2.0.0
```

Then restart:

```bash
docker compose down
docker compose up -d
```

---

## Source Installation

### Prerequisites

=== "macOS"
    **Install Xcode Command Line Tools:**
    ```bash
    xcode-select --install
    ```

    **Install Anaconda:**

    We recommend the full Anaconda distribution (not Miniconda) to avoid dependency conflicts.

    *Graphical Installer:*
    Visit [anaconda.com/download](https://www.anaconda.com/download) and download for your Mac type.

    *Command Line (Intel):*
    ```bash
    curl -O https://repo.anaconda.com/archive/Anaconda3-2024.10-1-MacOSX-x86_64.sh
    bash Anaconda3-2024.10-1-MacOSX-x86_64.sh
    ```

    *Command Line (Apple Silicon M1/M2/M3):*
    ```bash
    curl -O https://repo.anaconda.com/archive/Anaconda3-2024.10-1-MacOSX-arm64.sh
    bash Anaconda3-2024.10-1-MacOSX-arm64.sh
    ```

=== "Linux"
    **Install System Packages:**
    ```bash
    sudo apt update && sudo apt upgrade -y && sudo apt install -y gcc build-essential
    ```

    **Install Anaconda:**
    ```bash
    curl -O https://repo.anaconda.com/archive/Anaconda3-2025.06-0-Linux-x86_64.sh
    bash ~/Anaconda3-2025.06-0-Linux-x86_64.sh
    ```

=== "Windows"
    **Install WSL2 and Ubuntu:**
    ```bash
    wsl --install -d Ubuntu
    ```

    Once installed, open Ubuntu terminal and follow the Linux instructions above.

    !!! note
        Run all commands in Ubuntu terminal, not Windows Command Prompt or PowerShell.

### Install and Run

Clone the repository:

```bash
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
```

Install the environment and dependencies:

```bash
./install
```

Activate the environment:

```bash
conda activate hummingbot
```

Compile the code:

```bash
./compile
```

Launch Hummingbot:

```bash
./start
```

![launch from source](../assets/img/launch-from-source.gif)

### Development or Older Versions

**Development Branch:**
```bash
git checkout development
git pull origin development
```

**Specific Version:**
```bash
git tag                    # List available versions
git checkout v2.1.0        # Switch to specific version
```

---

## Folder Structure

Your Hummingbot installation contains:

```
hummingbot/
├── conf/
│   ├── connectors/    # Exchange API keys (encrypted)
│   ├── strategies/    # Strategy config files
│   └── scripts/       # Script config files
├── logs/              # Log files
├── data/              # Trade databases and CSV files
└── scripts/           # Custom scripts
```

| Folder | Description |
|--------|-------------|
| `/conf/connectors` | Exchange API keys encrypted by your [password](./password.md) |
| `/conf/strategies` | Strategy configs created with `create` command |
| `/conf/scripts` | Script configs created with `create --script-config` |
| `/logs` | Log files from your trading sessions |
| `/data` | SQLite databases and CSV trade history |
| `/scripts` | Add custom scripts here for use with `start` command |

---

## Running in Background

### Docker

Press <kbd>Ctrl</kbd> + <kbd>P</kbd> then <kbd>Ctrl</kbd> + <kbd>Q</kbd> to detach without stopping.

Re-attach with:
```bash
docker attach hummingbot
```

### Source (using screen)

Start a screen session:
```bash
screen -S hummingbot
```

Run Hummingbot:
```bash
conda activate hummingbot
./start
```

Detach: <kbd>Ctrl</kbd> + <kbd>A</kbd> then <kbd>Ctrl</kbd> + <kbd>D</kbd>

Re-attach:
```bash
screen -r hummingbot
```

List sessions:
```bash
screen -ls
```

---

## Exiting Hummingbot

Run the `exit` command to cancel all orders and close Hummingbot.

Use `exit -f` to force close in case of errors.

!!! tip
    You can also press <kbd>Ctrl</kbd> + <kbd>C</kbd> twice to exit.

---

## Gateway for DEX Trading

!!! warning "Gateway Required for DEX Trading"
    To trade on decentralized exchanges (Uniswap, PancakeSwap, Raydium, etc.), you need to install Gateway separately.

See [Gateway Installation](../gateway/installation.md) for setup instructions.

---

## Next Steps

- [Basic Features](./index.md) - Learn the Hummingbot CLI
- [V2 Strategy Walkthrough](../strategies/v2-strategies/walkthrough.md) - Create your first strategy
- [Hummingbot FAQ](../faq.md) - Common questions
- [Updating to New Versions](../installation/update.md) - Update your installation
