# Gemini

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component                            | Status | V2 Strategies | Notes |
|--------------------------------------|--------|---------------|-------|
| [🔀 Spot Connector](#spot-connector) | ✅      | Yes           |
| 🔀 Perp Connector                    | Not available |

## ℹ️ Exchange Info

- **Website**: <https://www.gemini.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/gemini/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/gemini>
- **API Docs**: <https://docs.gemini.com/>
- **Fees**: <https://www.gemini.com/fees>

## 🔑 How to Connect

### Generate API Keys

1. Log in to your account at <https://exchange.gemini.com>.
2. Go to **Settings** → **API** (<https://exchange.gemini.com/settings/api>).
3. Click **Create a new API Key** and select the **Primary** scope.
4. Enable the **Trading** permission for the key.
5. Copy the **API Key** and **API Secret** — the secret is only shown once, so save it securely.

### Connecting to Hummingbot

From inside the Hummingbot client, run `connect gemini`:

```
>>> connect gemini

Enter your Gemini API key >>>
Enter your Gemini API secret >>>
```

If connection is successful:

```
You are now connected to gemini
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `gemini`
- **Connection Type**: REST v1 + WebSocket (Gemini Fast API)
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/gemini)**

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

!!! note
    Gemini has no native market order type, so `MARKET` orders are emulated as immediate-or-cancel limit orders priced aggressively through the book.
