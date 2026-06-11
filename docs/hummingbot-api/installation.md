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

Use this when you are deploying **Hummingbot API** on its own machine (for example a **VPS** or another **remote server**), or any time you **only** need the API and database stack and **not** Condor. **Docker** must be installed and running on that server before you run the command:

```bash
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash -s -- --hummingbot-api
```

The installer clones the **`hummingbot-api`** repository (next to where you ran the command), runs **`make setup`**, pulls the latest images, and runs **`make deploy`**. That **starts all Docker services** for you—the API, PostgreSQL, and EMQX (MQTT broker)—so you normally do **not** need to start containers by hand.

The setup script may prompt you for:

**Credentials** (required):

- API username and password (HTTP Basic Auth for the REST API)
- Config password (used to encrypt bot credentials at rest)

If the script finishes but something did not come up (for example Docker was not running, or a step failed), open a terminal, go into the API folder the script created, and run:

```bash
cd hummingbot-api
make setup
make deploy
```

That applies your `.env` again and brings the full stack up with Docker Compose.

The API will be accessible at `http://localhost:8000`.

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

The installer creates a **`.env`** file inside **`hummingbot-api/`**. Edit it, then run **`make deploy`** again so containers pick up changes.

Common variables (see **`config.py`** in the [hummingbot-api](https://github.com/hummingbot/hummingbot-api) repo for the full list and nested settings):

- **`USERNAME`** / **`PASSWORD`** — HTTP Basic Auth for the REST API  
- **`CONFIG_PASSWORD`** — encrypts bot credential files at rest  
- **`DATABASE_URL`** — PostgreSQL connection string. When the API runs **inside Docker**, `docker-compose.yml` overrides this to use the Compose service hostname **`postgres`** (not the container name `hummingbot-postgres`). For **`make run`** on your host against Compose-backed Postgres, use **`localhost`** in `.env`.  
- **`BROKER_*`** — EMQX / MQTT. Compose overrides **`BROKER_HOST`** to **`emqx`** for the API container; keep **`localhost`** in `.env` for local dev with **`make run`**.  
- **`GATEWAY_URL`** — Hummingbot Gateway (default `http://localhost:15888`).  
- **`DEBUG_MODE`** — set to `true` only for **local** development to disable API Basic Auth (**never** in production).

Optional tuning (market-data intervals, Logfire, AWS, etc.) maps to nested settings in **`config.py`** (for example `MARKET_DATA_*`). Prefer defaults unless you have a specific need.

## Troubleshooting

### Database (PostgreSQL)

1. **Check services** (from `hummingbot-api/`):

   ```bash
   docker compose ps
   docker compose logs -f postgres
   docker compose logs -f hummingbot-api
   ```

2. **Connect with the right user** — the image creates user **`hbot`** and database **`hummingbot_api`** (`POSTGRES_USER` / `POSTGRES_DB` in `docker-compose.yml`). Use:

   ```bash
   docker exec -it hummingbot-postgres psql -U hbot -d hummingbot_api
   ```

   If you run `docker exec ... psql` **without** `-U hbot`, PostgreSQL may try the **`postgres`** role and you can see **`role "postgres" does not exist`** — that is expected; always pass **`-U hbot`**.

3. **Full reset** (⚠️ deletes Postgres volume data):

   ```bash
   cd hummingbot-api
   docker compose down -v
   make deploy
   ```

   Recreate **`.env`** with **`make setup`** first if you need new credentials.

There is **no** `fix-database.sh` in the current **hummingbot-api** tree; use the commands above.

### EMQX (MQTT broker)

Service **`emqx`**, container name **`hummingbot-broker`**:

```bash
docker logs hummingbot-broker
docker compose restart emqx
```

Dashboard: [http://localhost:18083](http://localhost:18083) (default login is often **`admin`** / **`public`** — confirm in EMQX docs).

### Port `8000` already in use

**Docker:** in `docker-compose.yml`, change the published port for `hummingbot-api`, e.g.:

```yaml
services:
  hummingbot-api:
    ports:
      - "8001:8000"
```

**`make run` (dev):** this repo does **not** ship a `run.sh`. The **`Makefile`** `run` target starts Postgres + EMQX then runs **`uvicorn main:app --reload`**. To use another port, add **`--port 8001`** to that `uvicorn` line or run Uvicorn yourself after `docker compose up emqx postgres -d`.

### Common issues

| Symptom | What to try |
|--------|----------------|
| API or DB errors | `docker compose ps` and `docker compose logs` for **`hummingbot-api`** and **`postgres`** |
| Broker / bots cannot connect | `docker compose restart emqx`; check **`hummingbot-broker`** logs |
| Cannot open `http://localhost:8000` | `docker ps` and confirm **`hummingbot-api`** is **running** |
| HTTP auth fails | Match **`USERNAME`** / **`PASSWORD`** in `.env` to what clients send |
| Stale or corrupt data | `docker compose down -v` then **`make deploy`** (⚠️ wipes DB volume) |

### Development (`make install` / `make run`)

```bash
make uninstall
make install
make run
```

## Support & documentation

- **Interactive API docs:** [http://localhost:8000/docs](http://localhost:8000/docs) when the stack is running  
- **Repository README:** [hummingbot-api](https://github.com/hummingbot/hummingbot-api)  
- **Issues:** [github.com/hummingbot/hummingbot-api/issues](https://github.com/hummingbot/hummingbot-api/issues)  

## Next Steps

After installation, proceed to the [Developer Guide](quickstart.md) to learn how to:

- Add exchange credentials
- View your portfolio
- Place your first order
