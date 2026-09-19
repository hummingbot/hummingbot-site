## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes |
| --------- | ------ | ----- |
| 🔀 Spot Connector | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | Production only; USD-margined |
| 🕯 Spot Candles Feed | Not available |
| 🕯 Perp Candles Feed | Not available |

## ℹ️ Exchange Info

- **Website**: <https://kalshi.com>
- **API Docs**: <https://docs.kalshi.com/getting_started/quick_start_authenticated_requests>
- **Fees**: <https://help.kalshi.com/en/articles/16071417-perps-fees-explained>
- **Contract specs (BTC)**: <https://help.kalshi.com/en/articles/15357587-btc-perpetual-futures-contract-specifications>
- **Supported Countries**: See [Kalshi terms](https://kalshi.com/terms)

Kalshi is a CFTC-regulated US exchange. This connector trades Kalshi's **margin (perpetual) markets**, not event contracts. Markets are quoted, margined, and settled in **USD**.

## 🔑 How to Connect

You need two values from Kalshi:

1. **API Key ID** — a UUID shown when the key is created (for example `a952bcbe-ec3b-4b5b-b8f9-11dae589608c`)
2. **RSA private key** — PEM text downloaded as a `.key` file; Kalshi cannot show it again

### Generate API Keys

1. Log in at <https://kalshi.com>.
2. Open **Account & security** → **API Keys** (also at <https://kalshi.com/account/profile>).
3. Click **Create Key** / **Create New API Key**.
4. Save both values immediately:
   - **API Key ID** — displayed on screen
   - **Private Key** — downloaded as a `.key` file (PEM, `BEGIN RSA PRIVATE KEY` or `BEGIN PRIVATE KEY`)

!!! warning
    The private key is shown only once. Store it securely before closing the page. If you lose it, create a new API key.

See [Kalshi: API Keys](https://docs.kalshi.com/getting_started/api_keys) for the official steps.

### Connecting to Hummingbot

From inside the Hummingbot client, run `connect kalshi_perpetual`:

```
>>> connect kalshi_perpetual

Enter your Kalshi Perpetual API key ID >>>
Enter your Kalshi Perpetual RSA private key (PEM) >>>
```

Paste the **full PEM**, including the `BEGIN` / `END` lines. Hummingbot re-wraps a key whose line breaks were lost when pasted into the single-line prompt.

If connection is successful:

```
You are now connected to kalshi_perpetual
```

!!! note
    Kalshi also runs a demo environment. This connector is **production only** (`https://external-api.kalshi.com`). There is no `kalshi_perpetual_testnet` command.

## 🔀 Perp Connector

*Integration to perpetual futures markets API endpoints*

- **ID**: `kalshi_perpetual`
- **Connection Type**: REST + WebSocket (every WebSocket handshake is signed, including public market data)
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/kalshi_perpetual)**

### Usage

Use `kalshi_perpetual` as the connector name in V2 strategies, scripts, and Condor. Trading pairs are Hummingbot-style `{BASE}-USD`, mapped from Kalshi tickers `KX{BASE}PERP`:

| Kalshi ticker | Hummingbot pair |
| ------------- | --------------- |
| `KXBTCPERP` | `BTC-USD` |

Kalshi quotes prices **per contract**. Hummingbot converts to underlying units using each market's `contract_size` (BTC is **0.0001 BTC per contract**). Strategy amounts are in BTC (or the market's base), not contract counts.

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT` — good-till-canceled
- `LIMIT_MAKER` — post-only
- `MARKET` — Kalshi has no native market order; sent as an immediate-or-cancel limit priced **5%** through the book

### Position Modes

This connector supports the following position modes:

- One-way

### Leverage

Kalshi has no per-order leverage setting. Initial margin (and therefore leverage) comes from each market's published rates and **decreases as notional grows**. The connector:

- Caps executor/order leverage at Kalshi's max for that side and size, so orders Kalshi would reject for margin are not approved
- Rejects a configured leverage higher than Kalshi currently allows on the pair

Check the Kalshi UI or [BTC contract specs](https://help.kalshi.com/en/articles/15357587-btc-perpetual-futures-contract-specifications) for the current cap (BTC perps are typically up to **6x**).

### Fees and Funding

Default Hummingbot fee schema is the **base volume tier**: **5 bps maker / 12 bps taker**, charged on **USD notional** (not posted margin), on both open and close. Higher volume tiers are cheaper — see [Perps Fees Explained](https://help.kalshi.com/en/articles/16071417-perps-fees-explained).

Funding is separate from fees. Payments settle every **8 hours** (12:00 AM, 8:00 AM, and 4:00 PM ET). The connector polls funding history on that cadence.

### Close orders (`reduce_only`)

Kalshi rejects `reduce_only` unless time-in-force is immediate, so only **MARKET** (IOC) closes send it. Resting **LIMIT** / **LIMIT_MAKER** closes (take-profits, limit-chasers) are emulated:

- A close is rejected before send if there is no position left to reduce
- After each position refresh, resting closes whose position is gone are cancelled so they cannot open the opposite side

A close larger than the position is not capped (several executors can share one net one-way position). A resting close can still fill between the position emptying and the next refresh.

### Rate Limits

Perps traffic uses separate **Read** and **Write** token buckets (Basic tier): **200 read tokens/s** and **100 write tokens/s**. Most calls cost **10** tokens. Balance requests with available-margin computation cost **50**. See [Kalshi rate limits](https://docs.kalshi.com/getting_started/rate_limits).
