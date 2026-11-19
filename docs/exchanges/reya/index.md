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
2. **Account ID** — the perpetual account to trade, of type `MAINPERP` or `SUBPERP`. `GET https://api.reya.xyz/v2/wallet/{address}/accounts` lists a wallet's accounts, including its spot accounts.
3. **Signer Private Key** — the private key of the owner wallet, or of an API wallet enabled for it. An API wallet lets the bot trade without the owner wallet's key.

When you connect and when the connector starts, it checks that an API wallet signer is enabled for the owner wallet, so `connect` reports a signer that cannot trade for the account. Use the signer for one bot at a time: Reya rejects signed requests whose nonce is lower than one it has already accepted.

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

Reya accepts reduce-only orders only as immediate-or-cancel. A `MARKET` order that closes a position is sent reduce-only. A `LIMIT` or `LIMIT_MAKER` order that closes a position rests as a plain good-till-cancel order, so if the position is closed some other way first, it can open a position in the other direction when it fills.

### Position Modes

This connector supports the following position modes:

- One-way

Leverage is a local setting that sizes orders, up to the market's maximum; Reya margins the whole account.

### Balances, Positions and Funding

- The `balance` command shows the account's margin balance in rUSD. The available balance is the account's free collateral, less the initial margin of the bot's resting orders, because Reya does not reserve margin for them.
- Positions show Reya's unrealized PnL at the mark price. While Reya cannot value the account, for example because a mark price is stale, positions still update and keep their last unrealized PnL.
- Funding accrues continuously into the account balance. Reya reports what each position paid or received per UTC hour, and the connector logs each payment once Reya publishes it, a few minutes after the hour ends.
