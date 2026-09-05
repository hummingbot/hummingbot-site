# Broker Security Update

The EMQX broker that carries traffic between Hummingbot API and your bot
instances **now requires authentication**. It previously accepted anonymous
connections, and published its ports on every interface.

If your deployment predates this change, **read this before updating** — bots
that were running fine will fail to reconnect until you redeploy them.

!!! danger "Was your broker reachable from the internet?"
    Port `1883` used to be published on `0.0.0.0`, so on a VPS without a
    restrictive cloud firewall it was reachable by anyone who scanned for it —
    with no password. An attacker on that port can read every bot's traffic and,
    through EMQX's rule engine, make the broker issue authenticated HTTP
    requests into services behind it.

    If your broker was exposed, updating is not enough on its own. See
    [If your broker was exposed](#if-your-broker-was-exposed) below.

## What changed

| | Before | Now |
|---|---|---|
| Authentication | Anonymous connections accepted | `BROKER_USERNAME` / `BROKER_PASSWORD` required |
| Topics | Stock allow-all | Deny-by-default ACL; only `hbot/#` and `hummingbot-api/response/#` |
| MQTT port `1883` | `0.0.0.0` | `127.0.0.1` |
| Dashboard `18083` | `0.0.0.0`, login `admin` / `public` | `127.0.0.1`, login `admin` / `BROKER_DASHBOARD_PASSWORD` |
| Other listeners | `8883`, `8083`, `8084`, `8081`, `61613` published | Not published — unused by this project |
| Credentials at setup | Literal `password` | Randomly generated |

`BROKER_DASHBOARD_PASSWORD` is deliberately a **separate** credential from
`BROKER_PASSWORD`. The latter is written into every bot instance's
`conf_client.yml`, so reusing it for the dashboard would mean one leaked bot
config granted full broker administration — including the rule engine — rather
than the scoped topic access the ACL intends.

## Updating an existing deployment

```bash
cd hummingbot-api
git pull origin main
make deploy
```

`make deploy` depends on `make emqx-auth`, which writes the credential bootstrap
file from your `.env`. Two things do **not** happen on their own:

### 1. Existing bot instances must be redeployed

A bot's broker credentials are written into its `conf_client.yml` when the
instance is **created**. Instances created before this change have empty MQTT
credentials baked in, and the broker now rejects them. Restarting such a bot
does not help — it has to be redeployed so the current credentials are written
in.

### 2. Changing a password in `.env` does nothing by itself

EMQX imports the bootstrap file only for accounts it does not already have, and
applies the dashboard password only on first initialization. Editing
`BROKER_PASSWORD` or `BROKER_DASHBOARD_PASSWORD` in `.env` and redeploying will
appear to work and change nothing.

To actually rotate them:

```bash
make emqx-auth-reset
```

!!! warning "`emqx-auth-reset` wipes the broker's state volume"
    That is how it forces the new credentials to be imported. It rotates
    **both** passwords together and discards the broker's stored state —
    retained messages, dashboard settings, and any rule-engine configuration.
    Bot instances need redeploying afterwards, as above.

## Verifying

```bash
make doctor
```

Checks credentials that are still at well-known defaults, which ports are on a
public interface, and whether the API answers an authenticated request. Then:

```bash
make emqx-audit
```

Prints the broker's listeners, authentication, authorization, ACL, and any
rule-engine rules, actions, connectors or bridges. That last part is the point:
a rule nobody added is how a compromised broker reaches other services, and it
survives restarts. On a healthy install the rules list is empty.

Use `make emqx-audit EMQX_CONTAINER=<name>` to check another deployment.

## If your broker was exposed

An update secures the broker going forward. It does not undo access someone
already had, and it does not remove anything they left behind.

1. **Audit for rule-engine persistence** — `make emqx-audit`. Any rule, action,
   connector or bridge you did not create should be treated as hostile. These
   survive restarts and a plain `make deploy`.
2. **Rotate broker credentials** — `make emqx-auth-reset`, then redeploy your
   bot instances.
3. **Rotate your exchange API keys.** Broker traffic carries live trading
   activity. Treat any key that was in use during the exposure as disclosed, and
   reissue it at the exchange.
4. **Confirm the ports are closed** — `make doctor` should report `1883`,
   `18083`, `5432` and `8000` on `127.0.0.1`. Close them in your cloud
   provider's firewall too; Docker's published ports bypass `ufw`, whose rules
   are evaluated after Docker's own.

Wiping and recreating a host you believe was compromised is the only way to be
certain of what is running on it, and is outside what any of these commands can
do for you.

## See also

- [Installation](installation.md) — the full `.env` reference, including `API_BIND` and `DB_BIND`
- [Tailscale](tailscale.md) — keeping the API off public interfaces entirely
- [Updating to New Versions](../installation/update.md)
