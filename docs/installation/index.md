# Hummingbot Installation

!!! tip "New to Hummingbot?"
    We recommend starting with the **[Hummingbot API](#quick-start-recommended-hummingbot-api)**, which provides a user-friendly Dashboard for managing your bots.

**The official and recommended way to run Hummingbot** is through the [Hummingbot API](https://github.com/hummingbot/hummingbot-api), which provides a comprehensive trading platform with three ways to interact:

- 🤖 **MCP (AI Assistant)** - Control your trading with Claude, ChatGPT, or Gemini using natural language
- 📊 **Dashboard** - Visual web interface for bot management and monitoring
- 🔧 **Swagger UI** - Full REST API access for developers and power users

For other installation options, see [Docker](docker.md) (client only) and [Source](source.md) (for developers).

## System Requirements

### **Cloud server or local machine** 

| **Component**        | **Specifications**                                     |
|----------------------|-------------------------------------------------------|
| **Operating System** | Linux x64 or ARM (Ubuntu 20.04+, Debian 10+)          | 
| **Memory**           | 4 GB RAM per instance                                 |
| **Storage**          | 5 GB HDD space per instance                           |
| **CPU**              | at least 1 vCPU per instance / controller             |


### **Docker Compose**

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
    

## Quick Start (Recommended: Hummingbot API)

The [Hummingbot API](https://github.com/hummingbot/hummingbot-api) is the official and recommended installation method, providing MCP AI assistant integration, Dashboard web interface, and full REST API access.

### Installation

Clone the repository and run the setup script:

```bash
git clone https://github.com/hummingbot/hummingbot-api.git
cd hummingbot-api
chmod +x setup.sh
./setup.sh
```

The setup script will:

- Prompt you for credentials (default: `admin`/`admin`)
- Ask if you want to enable Dashboard (optional web interface)
- Start all required Docker containers

### What Gets Installed

**Core services** (always installed):

- ✅ **Hummingbot API** (port 8000) - REST API backend
- ✅ **PostgreSQL** - Database for trading data
- ✅ **EMQX** - Message broker for real-time communication
- ✅ **Swagger UI** (port 8000/docs) - API documentation

**Optional services** (enable during setup):

- 📊 **Dashboard** (port 8501) - Web interface

### Access Your Platform

After setup completes:

- **Swagger UI**: <http://localhost:8000/docs> (always available)
- **Dashboard**: <http://localhost:8501> (if enabled)

!!! note "Cloud Servers"
    If you are using a cloud server or VPS, replace `localhost` with your server's IP address. Configure firewall rules to allow inbound connections to the necessary ports.

### Next Steps

After successfully installing the Hummingbot API, here are some next steps to get you started:

- **[Hummingbot API Quickstart Guide](../hummingbot-api/quickstart.md)**: Learn how to add exchange credentials, view your portfolio, and place your first market order.
- **[Hummingbot Dashboard](../dashboard/index.md)**: Use the graphical interface to manage your bots.

### Connect an AI Assistant (Optional)

After setup, you can connect AI assistants to control Hummingbot with natural language.

See the **[MCP Installation Guide](../mcp/installation.md)** for complete instructions on connecting:

- **Claude Code** (recommended) - One-line CLI setup
- **Gemini CLI** - Google's AI terminal agent
- **Codex CLI** - OpenAI's coding assistant
- **Claude Desktop** - GUI application
- **Docker MCP Catalog** - Visual setup via Docker Desktop

!!! warning "Deploy Repo is now deprecated"
    The [Deploy](https://github.com/hummingbot/deploy) repository is being deprecated in favor of the Hummingbot API installation above. Existing users should migrate to the Hummingbot API for continued support and new features.  

## Alternative Installation Methods

For advanced users and developers, we offer the following installation methods:

<div class="grid cards" markdown>

-   __[Docker Installation](./docker.md)__

    ---
    
    - 🐳 Containerized environment  
    - 🛡️ Simplest, easiest setup   
    - 🔄 Deploy multiple instances  
    - **For running the client as a standalone application**

    [Install via Docker →](./docker.md)

-   __[Source Installation](./source.md)__

    ---
    
    - 💻 Developer-friendly setup  
    - 🔧 Modify core codebase  
    - 🧪 Test unreleased features  
    - **For developers and contributors**

    [Install from Source →](./source.md)

</div>

