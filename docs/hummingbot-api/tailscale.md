# Tailscale

**Tailscale is the recommended way to secure the connection between Condor and Hummingbot API** when they run on different machines—for example Condor on your laptop and the API on a cloud server.

[Tailscale](https://tailscale.com) is a simple VPN that connects your devices into a private network only you can access. A **free plan** is available and is enough for typical personal setups.

After setup, your devices can reach the API at **`http://hummingbot-api:8000`** (with your API username and password)—**without** opening port 8000 to the public internet.

!!! tip "New to Tailscale or Condor?"
    For a full walkthrough with security tips and Condor screenshots, see the [Condor and Hummingbot API Tailscale guide](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md).

## What you get

- A **private link** between your machines (encrypted, like a small VPN)
- A **stable name** (`hummingbot-api`) instead of remembering IP addresses
- **No need** to expose the API on your VPS public firewall for normal use

Tailscale handles the network. You still need a **strong API username and password**.

## Setup (Docker — most users)

### 1. Create a Tailscale auth key

1. Sign up at [tailscale.com](https://tailscale.com)
2. Open **[Settings → Keys](https://login.tailscale.com/admin/settings/keys)** and click **Generate auth key**
3. Check **Reusable** if you will connect more than one machine (for example API server + laptop)
4. Copy the key (starts with `tskey-auth-`)

Also turn on **[MagicDNS](https://login.tailscale.com/admin/dns)** in the Tailscale admin console so `hummingbot-api` resolves by name.

### 2. Install the API and enable Tailscale

On your **API server**, run the installer:

```bash
curl -fsSL https://raw.githubusercontent.com/hummingbot/deploy/main/setup.sh | bash -s -- --hummingbot-api
```

When asked **Enable Tailscale?**, answer **`y`** and paste your auth key.

If the API is already installed on this server, go to your `hummingbot-api` folder, run `make setup`, answer **`y`** to Tailscale, then continue with **Deploy** below.

### 3. Deploy

```bash
cd hummingbot-api
make deploy
```

### 4. Connect from another device

Any device that should reach the API (Condor, your browser, MCP) must:

1. Be on the **same Tailscale account** (install Tailscale and sign in, or use the same auth key during setup)
2. Use **`http://hummingbot-api:8000`** with your API login

Condor walks you through this during its own install—see the [blog guide](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md).

## Check that it works

On the **API server**:

```bash
make tailscale-status
```

You should see **`hummingbot-api`** in the peer list, **and** port `8000` listed
under the `tailscale serve` status printed below it. Both matter: joining the
tailnet is not the same as being reachable on it. With `API_BIND` at its
`127.0.0.1` default, the sidecar's `tailscale serve` forward is the only thing
carrying the tailnet's port 8000 to the API. (If you set `API_BIND` to this
node's tailscale IP instead, the API binds onto the tailnet directly and no
serve forward is involved — `make doctor` recognises that case and skips the
check.)

For the full picture — containers, ports, credentials, tailnet and serve status
in one pass — run:

```bash
make doctor
```

From **another device** on Tailscale (replace with your username and password):

```bash
curl -u YOUR_USERNAME:YOUR_PASSWORD http://hummingbot-api:8000/
```

If that returns a response, the API is reachable on your private network.

## Common issues

| Problem | Try this |
|---------|----------|
| Name `hummingbot-api` does not work | Enable **MagicDNS** in [Tailscale DNS settings](https://login.tailscale.com/admin/dns) |
| Auth key rejected | Key must start with `tskey-auth-`; generate a new one if it expired |
| Connection refused | On the server, run `make doctor` — it distinguishes "not on the tailnet" from "on the tailnet but port 8000 is not proxied" |
| `tailscale status` looks fine but nothing connects | Port 8000 is not being served. Confirm `tailscale-serve.json` is mounted into the sidecar, then `make deploy` again |
| Login fails (401) | Use the same username/password as in the API `.env` |
| Still reachable on public IP | Remove port **8000** from your cloud provider’s firewall / security group |

## Security reminders

- Use **strong** API and config passwords during setup. `make doctor` fails the
  check if `PASSWORD` or `CONFIG_PASSWORD` is left at a well-known default.
- Do not share your Tailscale auth key
- Leave **`API_BIND`** unset (it defaults to `127.0.0.1`). Setting it to
  `0.0.0.0` publishes port 8000 on every interface *in addition to* the tailnet,
  which undoes most of what Tailscale is here for. If you need the API bound
  directly rather than proxied, use this node's tailscale IP —
  `API_BIND=100.x.y.z` — not a wildcard.
- The MQTT broker requires a password and denies every topic outside `hbot/#`
  and `hummingbot-api/response/#`. Keep `BROKER_DASHBOARD_PASSWORD` distinct
  from `BROKER_PASSWORD`: the latter is written into every bot instance, and the
  dashboard grants full broker admin. `make emqx-audit` prints what the broker
  is actually configured to allow.
- PostgreSQL and EMQX are published on loopback only and never need to be on
  the tailnet.

---

??? info "Technical reference (developers)"
    ### How it works

    With `TAILSCALE_ENABLED=true`, `make deploy` runs:

    ```bash
    docker compose -f docker-compose.yml -f docker-compose.tailscale.yml up -d
    ```

    A **Tailscale sidecar** container (`hummingbot-tailscale`) joins your tailnet with `network_mode: host`. The API's port 8000 is published on loopback only by default (`API_BIND` in `.env`). The sidecar's declarative serve config (`tailscale-serve.json`, mounted as `TS_SERVE_CONFIG`) forwards the tailnet IP's `:8000` to `127.0.0.1:8000` — that forward is what makes the API reachable, and it is why the API ends up on the tailnet *and nowhere else*.

    For **source / dev**, `make run` connects Tailscale on the host (if enabled), then starts EMQX, Postgres, and `uvicorn --reload`.

    ### `.env` variables

    | Variable | Description |
    |----------|-------------|
    | `TAILSCALE_ENABLED` | `true` to enable Tailscale in `make deploy` / `make run` |
    | `TAILSCALE_AUTH_KEY` | Auth key (`tskey-auth-...`) |
    | `TAILSCALE_HOSTNAME` | MagicDNS name (default: `hummingbot-api`) |
    | `API_BIND` | Host interface Docker publishes port 8000 on. Defaults to `127.0.0.1`. Set to this node's tailscale IP to bind onto the tailnet directly instead of via the serve forward |
    | `DB_BIND` | The same, for Postgres (`5432`). Defaults to `127.0.0.1` |

    ### Source install

    ```bash
    make install   # prompts for Tailscale during setup
    make run
    ```

    ### MCP

    Use the MagicDNS hostname instead of `localhost`:

    ```bash
    claude mcp add --transport stdio hummingbot -- \
      docker run --rm -i \
      -e HUMMINGBOT_API_URL=http://hummingbot-api:8000 \
      -v hummingbot_mcp:/root/.hummingbot_mcp \
      hummingbot/hummingbot-mcp:latest
    ```

    ### Makefile

    | Target | Behavior |
    |--------|----------|
    | `make deploy` | Docker stack; Tailscale overlay when enabled |
    | `make run` | Dev mode with optional Tailscale |
    | `make tailscale-status` | Shows `tailscale status` **and** `tailscale serve status` |
    | `make doctor` | Read-only check of deps, `.env`, containers, port exposure, Tailscale and API auth |
    | `make emqx-audit` | Prints the broker's listeners, auth, ACL and any rule-engine rules |
    | `make emqx-auth-reset` | Rotates the broker credentials by recreating the EMQX state volume |

    ### Logs

    ```bash
    docker compose logs hummingbot-api
    docker compose logs hummingbot-tailscale
    ```

## See also

- [Installation](installation.md)
- [Condor + API guide (operators)](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md)
- [GitHub — Tailscale section](https://github.com/hummingbot/hummingbot-api#secure-connection-via-tailscale)
