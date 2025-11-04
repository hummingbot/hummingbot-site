# Hummingbot API Installation

**The central hub for running Hummingbot trading bots** - now with AI assistant integration via MCP (Model Context Protocol).

The Hummingbot API provides a comprehensive trading platform with three ways to interact:

1. **🤖 MCP (AI Assistant)** - Control your trading with Claude, ChatGPT, or Gemini using natural language
2. **📊 Dashboard** - Visual web interface for bot management and monitoring
3. **🔧 Swagger UI** - Full REST API access for developers and power users

## Prerequisites

- **Docker** and Docker Compose installed
- **Git** for cloning the repository
- Python 3.10+ and Conda (for source installation only)
- Exchange API keys (can be added after installation)

## Quick Start (Docker - Recommended)

Clone the repository and run the setup script:

```bash
git clone https://github.com/hummingbot/hummingbot-api.git
cd hummingbot-api
chmod +x setup.sh
./setup.sh
```

### Setup Process

The script will prompt you for:

1. **Credentials** (required):
   - Config password (for encrypting bot credentials)
   - API username and password

2. **Optional Services**:
   - **MCP server**: For AI assistant integration
   - **Dashboard**: For web-based visual interface

3. **Gateway**: Optional passphrase for DEX trading

### What Gets Installed

**Core services** (always installed):

- ✅ **Hummingbot API** (port 8000) - REST API backend
- ✅ **PostgreSQL** - Database for trading data
- ✅ **EMQX** - Message broker for real-time communication
- ✅ **Swagger UI** (port 8000/docs) - API documentation

**Optional services** (enable during setup):

- 🤖 **MCP Server** - For AI assistant integration
- 📊 **Dashboard** (port 8501) - Web interface

### After Setup

**1. Access Swagger UI** (Default)

The API documentation is immediately available:
- URL: http://localhost:8000/docs
- Use the username/password you configured
- Test all API endpoints directly

**2. Connect AI Assistant** (If MCP Enabled)

If you enabled MCP, see the **[MCP Installation Guide](/mcp/installation/)** for instructions on connecting:

- **Claude Code** (recommended) - One-line CLI setup
- **Gemini CLI** - Google's AI terminal agent
- **Codex CLI** - OpenAI's coding assistant
- **Claude Desktop** - GUI application

**3. Access Dashboard** (If Enabled)

If you enabled Dashboard during setup:
- URL: http://localhost:8501
- Use the same username/password from setup

## Install from Source (for Developers)

If you're developing or contributing to Hummingbot API, you can install from source.

### 1. Clone and setup

```bash
git clone https://github.com/hummingbot/hummingbot-api
cd hummingbot-api
./setup.sh
```

### 2. Install dependencies

```bash
make install
```

This will:

- Create a conda environment named `hummingbot-api`
- Activate the environment
- Install all required dependencies
- Set up pre-commit hooks

### 3. Start the API in development mode

```bash
./run.sh --dev
```

This starts the Broker and Postgres DB containers and runs the API using `uvicorn` with auto-reload enabled for development.

The API will be accessible at `http://localhost:8000`.

## Install Python Client

The [Hummingbot API Client](https://github.com/hummingbot/hummingbot-api-client) is a Python library that provides a convenient interface for interacting with the Hummingbot API.

### Install via pip

```bash
pip install hummingbot-api-client
```

### Basic usage

```python
import asyncio
from hummingbot_api_client import HummingbotAPIClient

# Create client instance
client = HummingbotAPIClient(
    base_url="http://localhost:8000",
    username="admin",
    password="admin"
)

# Use the client
async def main():
    accounts = await client.list_accounts()
    print(accounts)

asyncio.run(main())
```

## Verify Installation

Once installed, you can verify the API is running:

### Check API health

```bash
curl http://localhost:8000/health
```

### Access API documentation

Open your browser and navigate to:
- Interactive API docs: `http://localhost:8000/docs`
- Alternative API docs: `http://localhost:8000/redoc`

## Configuration

The installation creates a `.env` file with your configuration. You can modify these settings:

- `API_USERNAME` and `API_PASSWORD`: API authentication credentials
- `DATABASE_URL`: PostgreSQL connection string
- `MQTT_HOST`, `MQTT_PORT`: EMQX message broker settings
- `HUMMINGBOT_IMAGE`: Docker image to use for bots

## Troubleshooting

### Docker issues

If Docker containers fail to start:

```bash
# Stop all containers
docker-compose down

# Remove volumes and restart
docker-compose down -v
./setup.sh
./run.sh
```

### Port conflicts

If port `8000` is already in use on your system, you can change it by modifying the configuration depending on your setup:

#### **Docker**

Update the `ports` mapping in your `docker-compose.yml` file to use a different external port. For example, to use port `8001` instead:

```yaml
services:
  hummingbot-api:
    ports:
      - "8001:8000"  # Maps local port 8001 to container's port 8000
```

#### **Running from Source**

Edit the `./run.sh` script to include the `--port` flag in the `uvicorn` command. For example, to run on port `8001`:

```bash
if [[ "$1" == "--dev" ]]; then
    echo "Running API from source..."
    # Start dependencies and launch API with uvicorn
    docker compose up emqx postgres -d
    source "$(conda info --base)/etc/profile.d/conda.sh"
    conda activate hummingbot-api
    uvicorn main:app --reload --port 8001
fi
```

Make sure the new port you choose is not already in use.

### Development issues

For source installation issues:

```bash
# Clean conda environment
make uninstall
make install

# Check logs
make run
```

## Next Steps

After installation, proceed to the [Quickstart Guide](/hummingbot-api/quickstart) to learn how to:

- Add exchange credentials
- View your portfolio
- Place your first order
