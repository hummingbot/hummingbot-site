## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes |
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.1 | Yes | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | ✅ | v2.1 | Yes | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | ✅ |
| [🕯 Perp Candles Feed](#perp-candles-feed) | ✅ |


## ℹ️ Exchange Info

- **Website**: [https://lighter.xyz](https://lighter.xyz/)
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/lighter/?type=perpetual>
- **Referral**: <https://app.lighter.xyz/referrals>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/lighter>
- **Fees**: <https://docs.lighter.xyz/trading/trading-fees>

## 🔑 How to Connect

### Generate API Keys

    Note: your L1 wallet address is you public address

**Step 1**

Log in to your lighter account and navigate to [Homepage](https://lighter.xyz).

[![Screen 1](ligher-login-1.png)](ligher-login-1.png)

[![Screen 2](ligher-login-2.png)](ligher-login-2.png)

[![Screen 3](ligher-login-3.png)](ligher-login-3.png)

**Step 2**

Click **Create New API Key**.

[![Settings page](settings-1.png)](settings-1.png)

Configure your API key:

- Select Generate New Api Key

[![Lighter Apikey generation](ligher-apikey.png)](ligher-apikey.png)

**Step 3**

- Select Generate

[![Lighter Apikey Creation](ligher-key-creation.png)](ligher-key-creation.png)

- Click Confirm if using metamask

[![Lighter Apikey Creation](ligher-key-creation2.png)](ligher-key-creation2.png)

- On successfull creation

[![Lighter Apikey Creation](ligher-key-created.png)](ligher-key-created.png)

**Step 4**

Go to asset page after making deposit

[![Asset Configuration](ligher-asset-1.png)](ligher-asset-1.png)

Select network for deposit

[![Asset Configuration](ligher-asset-2.png)](ligher-asset-2.png)

**Step 5**

Move funds to between Perps and Spot

[![Asset Transfer](ligher-transfer-1.png)](ligher-transfer-1.png)


### Connecting to Hummingbot

## 🔀  Spot Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `lighter`
- **Connection Type**: WebSocket
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/lighter)**

### Usage

From inside the Hummingbot client, run `connect lighter`:

```
>>> connect lighter

Enter your Lighter L1 wallet address >>>
Enter your Lighter account index (leave blank to use the main account for your L1 address) >>>
Enter your Lighter API key index >>>
Enter your Lighter API private key >>>
Enter your Lighter account limit(Standard/Premium/Plus/Builder) >>>
```

If connection is successful:

```
You are now connected to lighter
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `lighter_perpetual`
- **Connection Type**: WebSocket
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/lighter_perpetual)**

### Usage

From inside the Hummingbot client, run `connect lighter_perpetual`:

```
>>> connect lighter_perpetual

Enter your Lighter L1 wallet address >>>
Enter your Lighter account index (leave blank to use the main account for your L1 address) >>>
Enter your Lighter API key index >>>
Enter your Lighter API private key >>>
Enter your Lighter account limit(Standard/Premium/Plus/Builder) >>>
```

If connection is successful:

```
You are now connected to lighter_perpetual
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way