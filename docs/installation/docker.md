We recommend installing Hummingbot using Docker for the simplest, easiest installation method. This page covers both the **recommended Hummingbot API setup** (which includes MCP AI assistant integration and Dashboard) and the standalone client-only installation.

## Install Docker Compose

Hummingbot uses [Docker Compose](https://docs.docker.com/compose/), a tool for defining and running multi-container Docker applications.

=== "macOS"
    Install Docker Desktop from the [official Docker website](https://docs.docker.com/desktop/install/mac-install/)


=== "Linux"
    1. **Desktop Users**:
       Install Docker Desktop from [official site](https://docs.docker.com/desktop/install/linux-install/)

    2. **Headless Servers** (VPS like AWS EC2 or Digital Ocean):
       ```bash
       curl -fsSL https://get.docker.com -o get-docker.sh
       sh get-docker.sh
       ```


=== "Windows"
    !!! note "Prerequisites"
        - Docker Desktop installed
        - WSL2 enabled
        - Ubuntu distribution installed

    **Always run commands in:**
    Ubuntu Terminal (Start Menu → Ubuntu)

## Installation (Recommended: Hummingbot API)

!!! tip "Recommended Installation Method"
    **This is the official and recommended way to run Hummingbot**. It provides the complete platform with AI assistant integration, web dashboard, and full API access.

The Hummingbot API provides a comprehensive trading platform with three ways to interact:

1. **🤖 MCP (AI Assistant)** - Control your trading with Claude, ChatGPT, or Gemini using natural language
2. **📊 Dashboard** - Visual web interface for bot management and monitoring
3. **🔧 Swagger UI** - Full REST API access for developers and power users

### Quick Setup

Clone the Hummingbot API repository and run the setup script:

```bash
git clone https://github.com/hummingbot/hummingbot-api.git
cd hummingbot-api
chmod +x setup.sh
./setup.sh
```

This single command sets up:

- **Hummingbot API** (port 8000) - Core trading backend
- **PostgreSQL** - Database for trading data
- **EMQX Broker** - Message broker for real-time bot communication
- **Dashboard** (port 8501) - Web interface (optional)

### Connect an AI Assistant (Optional)

After setup, you can connect AI assistants to control Hummingbot with natural language.

See the **[MCP Installation Guide](/mcp/installation/)** for complete instructions on connecting:

- **Claude Code** (recommended) - One-line CLI setup
- **Gemini CLI** - Google's AI terminal agent
- **Codex CLI** - OpenAI's coding assistant
- **Claude Desktop** - GUI application
- **Docker MCP Catalog** - Visual setup via Docker Desktop

#### Alternative Access Methods

Instead of (or in addition to) AI assistants:

- **Dashboard**: http://localhost:8501 (if enabled during setup)
- **Swagger UI**: http://localhost:8000/docs (always available)

### What You Get

The Hummingbot API installation provides:

- **Multi-Bot Management**: Deploy and control multiple Hummingbot instances
- **Portfolio Tracking**: Real-time balance and performance monitoring across all exchanges
- **Strategy Management**: Create, test, and deploy trading strategies
- **Gateway Integration**: Manage DEX trading through the API (no separate installation needed)
- **AI-Powered Trading**: Natural language commands through MCP
- **Web Interface**: Visual dashboard for common tasks
- **Full API Access**: REST API for custom integrations

📚 **Full Documentation**: [Hummingbot API README](https://github.com/hummingbot/hummingbot-api)

---

## Installation (Client Only - Advanced)

!!! warning "Advanced Users Only"
    This installation method is for **advanced users** who want to run the standalone Hummingbot client without the API infrastructure. Most users should use the [Hummingbot API installation](#installation-recommended-hummingbot-api) above.

These instructions help you launch the standalone Hummingbot client only.

### Clone Hummingbot Repo

Open a terminal and run the following commands to clone the Hummingbot Github repo and enter the root folder:

```bash
  git clone https://github.com/hummingbot/hummingbot.git
  cd hummingbot
```

### Launch Hummingbot 

```bash
  docker compose up -d
```

This will start to download the `latest` Hummingbot image if it's not already on your system. 

### Attach to Instance

The `-d` flag runs Hummingbot in detached mode. Attach to it by running the command:


```bash
  docker attach hummingbot
```

You should now see the Hummingbot welcome screen:

![welcome screen](/assets/img/welcome.png)

To get started with Hummingbot, check out the following pages and guides:

* [Basic Features](/client/)
* [V2 Strategy Walkthough](/v2-strategies/walkthrough/)
* [Hummingbot FAQ](/faq/)

## Dev Branch | Older Versions

If you need to install the development branch or an older version of Hummingbot, follow these steps:

### **Development Branch**
To use the latest development version, browse to the `hummingbot` folder and open the `docker-compose.yml` file using any text editor. Look for the `image` field, and replace `latest` with `development`.

```bash
    image: hummingbot/hummingbot:development
```


### **Previous Versions**
To install a specific older version, replace the image field with the desired version. The version tags will follow this format: `version-x.x.x` 
For example, to install version 2.0.0, replace the image field with:

```bash
image: hummingbot/hummingbot:version-2.0.0
```

---

## Gateway: Required for DEX Trading

!!! tip "Gateway Management via Hummingbot API"
    **If you used the [recommended Hummingbot API installation](#installation-recommended-hummingbot-api)**, Gateway is managed directly through the API - no separate installation required!

    Use natural language commands via MCP:

    - "Start Gateway in development mode with passphrase 'admin'"
    - "Check Gateway status"
    - "Stop Gateway"

    Or use the API's `manage_gateway_container` tool programmatically. See the [Hummingbot API README](https://github.com/hummingbot/hummingbot-api) for details.

!!! warning "Gateway Required for DEX Trading"
    Gateway is essential to trade on these supported decentralized exchanges:

    - Uniswap (Ethereum)
    - PancakeSwap (BNB Chain)
    - Trader Joe (Avalanche)
    - dYdX (Starkware)
    - And [30+ others](/gateway/exchanges)

[Gateway](/gateway) acts as middleware that enables Hummingbot to interact with blockchain-based decentralized exchanges.

**For standalone client users**: If you installed the [standalone Hummingbot client](#installation-client-only-advanced) (not the Hummingbot API), follow the instructions in [Gateway - Installation](/gateway/installation) to install Gateway separately.
