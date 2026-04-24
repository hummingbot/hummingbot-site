## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes |
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports testnet |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built |
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built |

## ℹ️ Exchange Info

- **Website**: <https://app.lighter.xyz/>
- **Explorer**: <https://app.lighter.xyz/explorer>
- **CoinGecko (Spot)**: <https://www.coingecko.com/en/exchanges/lighter-spot>
- **CoinGecko (Perp)**: <https://www.coingecko.com/en/exchanges/lighter>
- **API Docs**: <https://apidocs.lighter.xyz/docs/get-started>
- **Fees**: <https://docs.lighter.xyz/trading/trading-fees>
- **Supported Countries**: Not available

## 🔑 How to Connect

### How to Create Lighter API Keys

1. **Log in** to your Lighter account at <https://app.lighter.xyz/>.

2. In the top menu, go to **Tools -> API Keys**.

3. Click **Generate API Key** and enter your desired **API Key Index**.

    !!! note
        Indexes 0-3 are reserved (Desktop and Mobile). You can create up to 251 keys per account using **indexes 4-254**.

4. Click **Generate**, then **sign the request** in your connected wallet.

5. The dashboard will display your **API Key Index**, **Public Key**, and **Private Key**.

    !!! warning
        Save your **Private Key** somewhere safe immediately - it is only shown once. Only use it in trusted environments.

    - Remember your **API Key Index** - you will need it when connecting.

### Find Your Account Index

Your **Account Index** is required to connect. To find it:

- Click your wallet address in the **top-right corner** of the Lighter app.
- Click **Explorer** - your Account Index will be shown on the account page.
- Alternatively, open the explorer directly at <https://app.lighter.xyz/explorer> and search using your L1 wallet address.

### Add Keys to Hummingbot

!!! note
    The same API keys can be used for both spot and perpetual trading.

From inside the Hummingbot client, run `connect lighter` (or `connect lighter_perpetual` for perp):

```
Enter your API Key Index >>>
Enter your Account Index >>>
Enter your Private Key >>>
```

If connection is successful, your Public Key will be displayed to verify the correct credentials are used:

```
You are now connected to lighter.
Public Key: <your_public_key>
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `lighter`
- **Connection Type**: WebSocket
- **API Docs**: <https://github.com/elliottech/lighter-python/tree/main/docs>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/lighter)**

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

This exchange offers a testnet environment. After creating an account and API keys on the Lighter testnet, connect using `connect lighter_testnet` inside the Hummingbot client.

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `lighter_perpetual`
- **Connection Type**: WebSocket
- **API Docs**: <https://apidocs.lighter.xyz/docs/get-started>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/lighter_perpetual)**

### Usage

From inside the Hummingbot client, run `connect lighter_perpetual`:

```
Enter your API Key Index >>>
Enter your Account Index >>>
Enter your Private Key >>>
```

If connection is successful, your Public Key will be displayed to verify the correct credentials are used:

```
You are now connected to lighter_perpetual.
Public Key: <your_public_key>
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading

This exchange offers a testnet environment. After creating an account and API keys on the Lighter testnet, connect using `connect lighter_perpetual_testnet` inside the Hummingbot client.


