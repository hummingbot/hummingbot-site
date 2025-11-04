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
   - **Dashboard**: For web-based visual interface

3. **Gateway**: Optional passphrase for DEX trading

### What Gets Installed

**Core services** (always installed):

- ✅ **Hummingbot API** (port 8000) - REST API backend
- ✅ **PostgreSQL** - Database for trading data
- ✅ **EMQX** - Message broker for real-time communication
- ✅ **Swagger UI** (port 8000/docs) - API documentation

**Optional services** (enable during setup):

- 📊 **Dashboard** (port 8501) - Web interface

### After Setup

**1. Access Swagger UI** (Default)

The API documentation is immediately available:

- URL: <http://localhost:8000/docs>
- Use the username/password you configured
- Test all API endpoints directly

**2. Connect AI Assistant** (Optional)

After setup, you can connect AI assistants to control Hummingbot with natural language.

See the **[MCP Installation Guide](/mcp/installation/)** for complete instructions on connecting:

- **Claude Code** (recommended) - One-line CLI setup
- **Gemini CLI** - Google's AI terminal agent
- **Codex CLI** - OpenAI's coding assistant
- **Claude Desktop** - GUI application

**3. Access Dashboard** (If Enabled)

If you enabled Dashboard during setup:

- URL: <http://localhost:8501>
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

### Database Connection Issues

If you encounter PostgreSQL database connection errors (such as "role 'hbot' does not exist" or "database 'hummingbot_api' does not exist"), use the automated fix script:

```bash
chmod +x fix-database.sh
./fix-database.sh
```

This script will:
1. Check if PostgreSQL is running
2. Verify that the `hbot` user and `hummingbot_api` database exist
3. Automatically fix any missing configuration
4. Test the connection to ensure everything works

#### "role 'postgres' does not exist" Error

If you see errors like `FATAL: role "postgres" does not exist` in the PostgreSQL logs:

**Cause**: The PostgreSQL container is configured to create only the `hbot` user (via `POSTGRES_USER=hbot`). The default `postgres` superuser is NOT created. This error occurs when something tries to connect using the default `postgres` username.

**Solutions**:

1. **Always specify the correct user** when connecting:
   ```bash
   # Correct - use hbot user
   docker exec -it hummingbot-postgres psql -U hbot -d hummingbot_api

   # Incorrect - tries to use 'postgres' user (doesn't exist)
   docker exec -it hummingbot-postgres psql
   ```

2. **If you need the postgres superuser** (not recommended), you can create it:
   ```bash
   docker exec -it hummingbot-postgres psql -U hbot -d postgres -c "CREATE ROLE postgres WITH SUPERUSER LOGIN PASSWORD 'your-password';"
   ```

3. **Complete database reset** (⚠️ deletes all data):
   ```bash
   docker compose down -v
   ./setup.sh
   ```

#### Manual Database Verification

If you prefer to check manually:

```bash
# Check if containers are running
docker ps | grep -E "hummingbot-postgres|hummingbot-broker"

# Check PostgreSQL logs
docker logs hummingbot-postgres

# Verify database connection (use hbot user, not postgres)
docker exec -it hummingbot-postgres psql -U hbot -d hummingbot_api

# List all database users
docker exec -it hummingbot-postgres psql -U hbot -d postgres -c "\du"
```

#### "database 'hbot' does not exist" During Setup

If you see this error during `./setup.sh`:

```
⚠️  Database initialization may be incomplete. Running manual initialization...
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  database "hbot" does not exist
❌ Failed to initialize database.
```

**Cause**: The setup script tried to connect to a database named `hbot` (the username) instead of `hummingbot_api` (the actual database name). This was a bug in older versions of setup.sh.

**Solution**:

1. **Update setup.sh**: Pull the latest version with the fix:
   ```bash
   git pull origin main
   ```

2. **Or manually fix the database**:
   ```bash
   # The database already exists, just verify it
   docker exec hummingbot-postgres psql -U hbot -d postgres -c "\l"

   # You should see 'hummingbot_api' in the list
   # Test connection
   docker exec hummingbot-postgres psql -U hbot -d hummingbot_api -c "SELECT version();"
   ```

3. **If database doesn't exist**, run the fix script:
   ```bash
   chmod +x fix-database.sh
   ./fix-database.sh
   ```

**Prevention**: This issue is fixed in the latest version of setup.sh. The script now correctly specifies `-d postgres` when running manual initialization.

#### Complete Database Reset

If you need to start fresh (⚠️ this will delete all data):

```bash
# Stop all containers and remove volumes
docker compose down -v

# Restart setup
./setup.sh
```

### EMQX Broker Issues

If bots can't connect to the broker:

```bash
# Check EMQX status
docker logs hummingbot-broker

# Restart EMQX
docker compose restart emqx

# Access EMQX dashboard (if needed)
# http://localhost:18083
# Default credentials: admin/public
```

### Port Conflicts

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

### Common Issues

**Issue**: API won't start - "Database connection failed"
- **Solution**: Run `./fix-database.sh` to repair the database configuration

**Issue**: Bot containers won't start
- **Solution**: Check Docker daemon is running and you have sufficient resources

**Issue**: Can't access API at localhost:8000
- **Solution**: Verify the API container is running: `docker ps | grep hummingbot-api`

**Issue**: Authentication fails
- **Solution**: Check your USERNAME and PASSWORD in the `.env` file

**Issue**: Old bot data causing conflicts
- **Solution**: Clean up old volumes: `docker compose down -v` (⚠️ deletes data)

### Development Issues

For source installation issues:

```bash
# Clean conda environment
make uninstall
make install

# Check logs
make run
```

## Support & Documentation

- **API Documentation**: Available at <http://localhost:8000/docs> when running
- **Detailed Examples**: Check the `CLAUDE.md` file for comprehensive API usage examples
- **Issues**: Report bugs and feature requests through the project's issue tracker
- **Database Troubleshooting**: Use `./fix-database.sh` for automated fixes

## Next Steps

After installation, proceed to the [Quickstart Guide](/hummingbot-api/quickstart) to learn how to:

- Add exchange credentials
- View your portfolio
- Place your first order
