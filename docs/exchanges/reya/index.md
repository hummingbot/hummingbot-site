## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes |
| --------- | ------ | ----- |
| 🔀 Spot Connector | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet |
| 🕯 Spot Candles Feed | Not available |
| 🕯 Perp Candles Feed | Not available |

## ℹ️ Exchange Info

- **Website**: <https://reya.xyz/>
- **App**: <https://app.reya.xyz/>
- **API Docs**: <https://docs.reya.xyz/>
- **Supported Networks**: Reya Network (mainnet), Reya devnet (testnet)
- **Collateral**: rUSD; positions are cross-margined across the account

## 🔑 Getting Keys Ready

The connector trades one perpetual account of your wallet. You need:

1. **Owner Wallet Address** — the wallet that owns the Reya account
2. **Account ID** — the perpetual account to trade. `GET https://api.reya.xyz/v2/wallet/{address}/accounts` lists a wallet's accounts.
3. **Signer Private Key** — the private key of the owner wallet, or of an API wallet enabled for it. An API wallet lets the bot trade without the owner wallet's key.

The connector checks at startup that an API wallet signer is enabled for the owner wallet. Use the signer for one bot at a time: Reya rejects signed requests whose nonce is lower than one it has already accepted.

## 🔀 Perp Connector

*Integration to perpetual futures markets API endpoints*

- **ID**: `reya_perpetual` (testnet: `reya_perpetual_testnet`)
- **Connection Type**: REST / WebSocket
- **Trading Pair Format**: `BASE-RUSD`, for example `BTC-RUSD`
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/reya_perpetual>

### Usage

From inside the Hummingbot client, run `connect reya_perpetual`:

```
>>> connect reya_perpetual

Enter the private key of your Reya signer (the owner wallet or one of its API wallets) >>>
Enter the owner wallet address of the Reya account >>>
Enter the Reya perpetual account ID >>>
```

If connection is successful:

```
You are now connected to reya_perpetual.
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET` — sent as an immediate-or-cancel limit order priced 0.5% through the best price

Reya accepts reduce-only orders only as immediate-or-cancel, so orders that close a position must be `MARKET` orders, sent as reduce-only. A `LIMIT` order that closes a position is rejected; use market take-profit and stop-loss orders in strategies.

### Position Modes

This connector supports the following position modes:

- One-way

Leverage is a local setting that sizes orders, up to the market's maximum; Reya margins the whole account. Funding accrues continuously into the account balance, so the connector reports no separate funding payments.
