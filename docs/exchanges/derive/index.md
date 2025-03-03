## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**Dex**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.1 | Yes | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | ✅ | v2.1 | Yes | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | |
| [📓 Connector Guide](/academy-content/using-derive-with-hummingbot/) | ✅ | 

## ℹ️ Exchange Info

- **Website**: <https://www.derive.xyz>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/derive/>
- **CoinGecko**: <https://www.coingecko.com/en/coins/derive>
- **Fees**: <https://docs.derive.xyz/reference/fees-1>
- **Derive referral link:** <https://docs.derive.xyz/docs/referral-rewards-program>

## 🔑 About Rate Limits

- Reach out to exchange in regards rate limits

    ![API](rate-limit-api1.png)

    ![API](rate-limit-api9.png)

- **Derive Rate Limit:**  <https://docs.derive.xyz/reference/rate-limits>

## 🔑 How to Connect

### Generate API Keys

- Connect

    ![API](derive-api2.png)

- Click Home tab

    ![API](derive-api3.png)

- Click Developers tab

    ![API](derive-api3.png)

- Register your session KEY (i.e your public address e.g metamask)

    ![API](derive-api4.png)

- Input a Name and your public address

    ![API](derive-api5.png)

- Click Register button to exit. Now you can use your new Session Key.

    ![API](derive-api6.png)

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect derive`:

- Input a Derive address as Derive Wallet address

    ![API](derive-api8.png)

- Input your Subaccount ID
  
    ![API](derive-api7.png)

```
>>> connect derive

Enter Your Derive Wallet address >>>

Enter your wallet private key >>>

Enter your Subaccount ID >>>

```

If connection is successful:

```
You are now connected to derive
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `derive`
- **Connection Type**: WebSocket
- **API Docs**: <https://derive-docs.github.io/apidocs/spot/en/>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/derive)** 

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect derive_paper_trade` instead of `connect derive`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `derive_perpetual`
- **Connection Type**: WebSocket
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/derive_perpetual)** 

### Usage

From inside the Hummingbot client, run `connect derive_perpetual`:

- Input a Derive address as DerivePerpetual Wallet address

    ![API](derive-api8.png)

- Input your Subaccount ID
  
    ![API](derive-api7.png)

```
>>> connect derive_perpetual

Enter Your DerivePerpetual Wallet address >>>
Enter your wallet private key >>>
Enter your Subaccount ID >>>

```

If connection is successful:

```
You are now connected to derive_perpetual
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

This perp exchange offers a paper trading mode: <https://testnet.derivefuture.com>

Afer you create an account and create the API keys, you can enter them by using the `connect derive_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts.
