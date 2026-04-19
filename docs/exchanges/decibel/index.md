## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes |
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available |
| [🕯 Perp Candles Feed](#perp-candles-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://app.decibel.trade/>
- **Testnet**: <https://testnet-decibel.vercel.app/>
- **API Docs**: <https://docs.decibel.trade/>
- **Fees**: <https://docs.decibel.trade/for-traders/fees>
- **Supported Networks**: Aptos (mainnet, testnet)
- **Supported Wallets**: Any EVM, Solana, or Aptos wallet

## 🔑 Getting Keys Ready

In order to start trading, you would need the following parts ready:

1. **Main Wallet Public Key** — the public key (address) of your Aptos account connected to Decibel exchange
2. **API Wallet Private Key** — the private key of your dedicated API wallet created on Decibel
3. **API Key** — API key generated on [Geomi](https://geomi.dev/) for accessing Decibel's API
4. **Gas Station API Key** — Gas Station API key generated on Geomi for sponsored transactions

It all starts with the "Connect Wallet" button, so you could login and have your wallet connected.

Once connected, your **Main Wallet Public Key** (Aptos address) will be visible in the top right corner, near the "Deposit" button.

> [!NOTE]
> If you connect with a Solana or EVM wallet, an Aptos wallet will be generated for you automatically. The Aptos address is what you need as the Main Wallet Public Key.

### API Wallet

Navigate to the [API Wallet page](https://app.decibel.trade/api) on Decibel. Here you can create a dedicated API wallet. Click to generate a new API wallet — this will give you an **API Wallet Private Key**. Keep this key secure, as it is used to sign transactions on your behalf.

The API wallet delegates trading permissions from your main wallet, allowing the bot to trade without exposing your main wallet's private key.

### Geomi API Key

Decibel's API access is handled via [Geomi](https://geomi.dev/).

1. Go to [Geomi](https://geomi.dev/) and create an account (or sign in)
2. Create a new project (or use the default project)
3. Inside your project, navigate to the API resources section to generate an **API Key**
4. Copy the generated API key — this is your **API Key**

This API key is used as a Bearer token for all REST and WebSocket authentication with Decibel's API.

### Gas Station API Key

Decibel uses Geomi's Gas Station to sponsor gas fees on behalf of users, so you don't need APT to transact.

1. On [Geomi](https://geomi.dev/), navigate to the Gas Station resource within your project
2. Create a Gas Station for your selected network (mainnet or testnet)
3. Follow the setup instructions from the [Decibel Gas Station Quickstart](https://docs.decibel.trade/quickstart/gas-station#setup)
4. Once created, copy the **Gas Station API Key** from your dashboard

> [!NOTE]
> If you already have APT-funded wallets, you can skip the Gas Station setup and omit the Gas Station API key. However, for most users, the Gas Station is required to pay for transaction fees on Aptos.

## 🔀 Perp Connector

*Integration to perpetual futures markets API endpoints*

- **ID**: `decibel_perpetual`
- **Connection Type**: REST / WebSocket (on-chain transactions via Aptos)
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/decibel_perpetual>


### Usage

From inside the Hummingbot client, run `connect decibel_perpetual`:

```
>>> connect decibel_perpetual

```

```
Enter your Decibel Perpetual API Wallet Private Key (hex format, with or without 0x prefix) >>>
Enter your Decibel Perpetual Main Wallet Public Key >>>
Enter your Decibel Perpetual API Key from geomi.dev (required for all API access) >>>
Enter your Decibel Perpetual Gas Station API Key from geomi.dev (required for sponsored transactions) >>>
```

If connection is successful:

```
You are now connected to decibel_perpetual.
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Rate Oracle

The connector comes with its own rate oracle implementation. You can use it by using the following command:

```
config rate_oracle_source decibel_perpetual
```

Make sure to set global token name to `USDC` as `USDC` is the main quote token for trading on Decibel

```
config global_token.global_token_name USDC
```

### Paper Trading (Decibel Testnet)

This perp exchange offers a testnet mode: <https://testnet-decibel.vercel.app/>

> [!NOTE]
> Please note that Testnet is a separate environment from Mainnet. It has different URL, different balances and you would need to generate new API keys (API Wallet) for it.
>
> You would also need to set up a separate API Key and Gas Station API Key on Geomi for the testnet environment.
> Testnet provides free funds for testing purposes.

After you create an account and create the API keys, you can enter them by using the `connect decibel_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts.

```
connect decibel_perpetual_testnet
```

## 🕯 Perp Candles Feed

*OHLCV candles data collector from perpetual futures markets*

- **ID**: `decibel_perpetual`
- **Supported Intervals**: 1m | 15m | 1h | 4h | 1d (missing intervals are interpolated using the last known close price)
- **Max Records**: 1000 candles per request
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/decibel_perpetual_candles)**

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="decibel_perpetual",
                                        trading_pair=trading_pair,
                                        interval="15m", max_records=50)
```
