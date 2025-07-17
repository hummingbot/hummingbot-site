# Installation

This guide covers all available installation methods for Hummingbot API.

## Prerequisites

- Docker and Docker Compose installed (for Docker installation)
- Python 3.10+ and Conda (for source installation)
- Exchange API keys for trading

## Install with Docker (Recommended)

The easiest way to get started with Hummingbot API is using Docker.

### 1. Clone the repository

```bash
git clone https://github.com/hummingbot/hummingbot-api
cd hummingbot-api
```

### 2. Run the setup script

```bash
./setup.sh
```

The setup script will:

- Prompt you to set API authentication credentials (username/password)
- Configure the database and message broker connections
- Create a `.env` file with all necessary configurations
- Start required Docker containers (PostgreSQL, EMQX)
- Pull the latest Hummingbot Docker image

Default credentials if you press Enter: `admin` / `admin`

### 3. Start the API

```bash
./run.sh
```

This pulls the required Docker images and runs Hummingbot API using Docker Compose and the configuration defined in the `docker-compose.yml` file.

The API will be accessible at `http://localhost:8000`. You can view the interactive Swagger UI documentation at `http://localhost:8000/docs`.

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
