## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes |
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | Self-hosted Drift Gateway required
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available |
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available |

## ℹ️ Exchange Info

- **Website**: <https://drift.trade>
- **App**: <https://app.drift.trade>
- **API Docs**: <https://docs.drift.trade>
- **Drift Gateway**: <https://github.com/drift-labs/gateway>
- **Fees**: <https://docs.drift.trade/trading/trading-fees>
- **Supported Countries**: <https://docs.drift.trade/protocol/legal-and-regulations/terms-of-use>

## ⚙️ Install Instructions

The `drift_perpetual` connector talks to a **self-hosted Drift Gateway**
over REST/WebSocket — it does not embed the Solana SDK in the Hummingbot
process — so no special install flag is required. A standard Hummingbot
install is sufficient.

### Docker

Use the standard image in your `docker-compose.yml`:

```bash
image: hummingbot/hummingbot:latest
```

For the development branch:

```bash
image: hummingbot/hummingbot:development
```

### Source

```bash
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
./install
conda activate hummingbot
./compile
```

## 🔑 How to Connect to Drift

Drift is a Solana perpetuals DEX. Rather than handing Hummingbot your
Solana private key, you run the **Drift Gateway** alongside the bot. The
gateway holds the keypair (`DRIFT_GATEWAY_KEY`) and signs every
transaction; Hummingbot only talks to the gateway over loopback. This
keeps signing material out of the trading process.

### Run the Drift Gateway

1. **Fund a Drift account**:
   - Open <https://app.drift.trade>, connect your Solana wallet, and
     deposit collateral (USDC). Note the **sub-account id** you want the
     bot to trade (the default sub-account is `0`).

2. **Start the gateway**:
   - Follow <https://github.com/drift-labs/gateway>. Export your Solana
     keypair as `DRIFT_GATEWAY_KEY` and launch the gateway. It defaults
     to REST on `127.0.0.1:8080` and WebSocket on `127.0.0.1:1337`.

3. **Verify it is live**:
   - `curl http://127.0.0.1:8080/v2/markets` should return the perp
     market list. Keep the gateway running while Hummingbot trades.

### Add Connection to Hummingbot

You will need the following to connect Hummingbot to `drift_perpetual`:

* Drift Gateway host (default `127.0.0.1`)
* Drift Gateway REST port (default `8080`)
* Drift Gateway WS port (default `1337`)
* Drift sub-account id to trade (default `0`)

From inside the Hummingbot client, run `connect drift_perpetual`:

```
Enter the Drift Gateway host (default 127.0.0.1) >>>
Enter the Drift Gateway REST port (default 8080) >>>
Enter the Drift Gateway WS port (default 1337) >>>
Enter the Drift sub-account id to trade (default 0) >>>
```

No private key or secret phrase is entered into Hummingbot — the gateway
is the signer.

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `drift_perpetual`
- **Connection Type**: WebSocket + REST (self-hosted Drift Gateway; order
  book streamed from the hosted DLOB server)
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/drift_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

Drift is a cross-collateral, one-way book; hedge mode is not supported.
USDC is the settlement/collateral token.

### Paper Trading

Drift exposes a devnet that the gateway can target, but devnet trading is
not currently supported in Hummingbot. Use small live size to validate.
