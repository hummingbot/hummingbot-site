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

You should see **`hummingbot-api`** in the list.

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
| Connection refused | On the server, run `make tailscale-status` and `make deploy` again |
| Login fails (401) | Use the same username/password as in the API `.env` |
| Still reachable on public IP | Remove port **8000** from your cloud provider’s firewall / security group |

## Security reminders

- Use **strong** API and config passwords during setup
- Do not share your Tailscale auth key

---

??? info "Technical reference (developers)"
    ### How it works

    With `TAILSCALE_ENABLED=true`, `make deploy` runs:

    ```bash
    docker compose -f docker-compose.yml -f docker-compose.tailscale.yml up -d
    ```

    A **Tailscale sidecar** container (`hummingbot-tailscale`) joins your tailnet. The API container is unchanged; clients on the tailnet reach port 8000 via the host’s Tailscale interface.

    For **source / dev**, `make run` connects Tailscale on the host (if enabled), then starts EMQX, Postgres, and `uvicorn --reload`.

    ### `.env` variables

    | Variable | Description |
    |----------|-------------|
    | `TAILSCALE_ENABLED` | `true` to enable Tailscale in `make deploy` / `make run` |
    | `TAILSCALE_AUTH_KEY` | Auth key (`tskey-auth-...`) |
    | `TAILSCALE_HOSTNAME` | MagicDNS name (default: `hummingbot-api`) |

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
    | `make tailscale-status` | Shows `tailscale status` |

    ### Logs

    ```bash
    docker compose logs hummingbot-api
    docker compose logs hummingbot-tailscale
    ```

## See also

- [Installation](installation.md)
- [Condor + API guide (operators)](../blog/posts/securing-condor-and-hummingbot-api-with-tailscale/index.md)
- [GitHub — Tailscale section](https://github.com/hummingbot/hummingbot-api#secure-connection-via-tailscale)
