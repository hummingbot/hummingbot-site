# Hummingbot API Installation

**The central hub for running Hummingbot trading bots** - now with AI assistant integration via MCP (Model Context Protocol).

The Hummingbot API provides a comprehensive trading platform with three ways to interact:

1. **🤖 MCP (AI Assistant)** - Control your trading with Claude, ChatGPT, or Gemini using natural language
2. **📊 Dashboard** - Visual web interface for bot management and monitoring
3. **🔧 Swagger UI** - Full REST API access for developers and power users

!!! warning "Secure your API before going live"
    Hummingbot API can place orders, read balances, and manage bots. **Do not expose port 8000 on a public IP** for production use.

    AI assistants (MCP, Condor agents, and similar tools) make this surface area easier to reach—and easier to misuse if the API is reachable from the open internet. Automated scanners and credential attacks against trading APIs are common on cloud VPSes.

    **For production deployments, enable [Tailscale](tailscale.md) during setup** (answer **`y`** when prompted). Tailscale puts your API on a private encrypted network so only your devices can connect—whether the API runs on a VPS or on the same machine as Condor. Strong API passwords are required, but **network isolation is what keeps production setups off the public attack surface**.

    For a full walkthrough with Condor, see the [Tailscale security guide](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md).

## Prerequisites

- **Docker** and Docker Compose installed
- **Git** for cloning the repository
- Python 3.12+ and Conda (for source installation only)
- Exchange API keys (can be added after installation)
- **[Tailscale](https://tailscale.com) account** (free tier is enough) — **required for production**; create an [auth key](https://login.tailscale.com/admin/settings/keys) and enable [MagicDNS](https://login.tailscale.com/admin/dns) before you install

## Do I Need Tailscale?

| Situation | Tailscale needed? |
|-----------|--------------------|
| Testing locally on one machine | No |
| Same VPS, API and clients together | Optional, still recommended |
| Different machines (for example, laptop + VPS) | **Yes** |
| A team or multiple devices need access | **Yes** |

If you're just testing locally, skip ahead—the Quick Start below works without Tailscale. See [Tailscale](tailscale.md) for setup when you need it.

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

**Tailscale** (required for production):

- When asked **Use Tailscale for secure private networking?**, answer **`y`**
- Paste your **`tskey-auth-...`** key from the [Tailscale admin console](https://login.tailscale.com/admin/settings/keys)
- The default hostname is **`hummingbot-api`** (MagicDNS)—clients on your tailnet reach the API at `http://hummingbot-api:8000`

!!! note "Same machine is fine"
    Tailscale works when API and Condor run on **one host**. You still get a stable hostname and avoid publishing port 8000 publicly. See [Tailscale setup details](tailscale.md).

If the script finishes but something did not come up (for example Docker was not running, or a step failed), open a terminal, go into the API folder the script created, and run:

```bash
cd hummingbot-api
make setup
make deploy
```

That applies your `.env` again and brings the full stack up with Docker Compose.

On the **same machine** as the installer, the API is available at `http://localhost:8000`. On your **tailnet**, use `http://hummingbot-api:8000` with your API username and password.

## Verify Installation

Once installed, you can verify the API is running:

### Check API status

On the host:

```bash
curl http://localhost:8000/
```

You should receive a JSON response such as `{"name":"Hummingbot API","version":"1.0.1","status":"running"}`.

If Tailscale is enabled, confirm the sidecar joined your tailnet:

```bash
cd hummingbot-api
make tailscale-status
```

From another device on the same Tailscale account:

```bash
curl -u YOUR_USERNAME:YOUR_PASSWORD http://hummingbot-api:8000/
```

### Access API documentation

Open your browser and navigate to:

- Interactive API docs: `http://localhost:8000/docs` (on the host) or `http://hummingbot-api:8000/docs` (from a tailnet device)
- Alternative API docs: `http://localhost:8000/redoc` or `http://hummingbot-api:8000/redoc`

## Configuration

The installer creates a **`.env`** file inside **`hummingbot-api/`**. Edit it, then run **`make deploy`** again so containers pick up changes.

Common variables (see **`config.py`** in the [hummingbot-api](https://github.com/hummingbot/hummingbot-api) repo for the full list and nested settings):

- **`USERNAME`** / **`PASSWORD`** — HTTP Basic Auth for the REST API  
- **`CONFIG_PASSWORD`** — encrypts bot credential files at rest  
- **`DATABASE_URL`** — PostgreSQL connection string. When the API runs **inside Docker**, `docker-compose.yml` overrides this to use the Compose service hostname **`postgres`** (not the container name `hummingbot-postgres`). For **`make run`** on your host against Compose-backed Postgres, use **`localhost`** in `.env`.  
- **`BROKER_*`** — EMQX / MQTT. Compose overrides **`BROKER_HOST`** to **`emqx`** for the API container; keep **`localhost`** in `.env` for local dev with **`make run`**.  
- **`GATEWAY_URL`** — Hummingbot Gateway (default `http://localhost:15888`).  

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
| Cannot reach API via Tailscale | Enable **MagicDNS**; run **`make tailscale-status`**; see [Tailscale troubleshooting](tailscale.md#common-issues) |
| API still reachable on public IP | Remove port **8000** from your cloud provider firewall / security group |
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

For production deployments, review [Tailscale](tailscale.md) and confirm port **8000** is not open on your public firewall.
