!!! tip "Support Hummingbot"
    Hummingbot Foundation has a fee share partnership with Bybit. When you use our software to trade on Bybit, a custom API header tells Bybit that the trade was executed using Hummingbot, so they share a portion of your fees with us, at no cost to you. To support us, just enter your API keys into Hummingbot and run bots! Thanks for your support! 🙏

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.1 | Yes | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | ✅ | v2.1 | Yes | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://www.bybit.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/bybit/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/bybit>
- **API Docs**: <https://bybit-exchange.github.io/docs/v5/intro>
- **Fees**: <https://learn.bybit.com/en/bybit-guide/bybit-trading-fees/>
- **Supported Countries**: Available to customers worldwide, except for countries with service restrictions such as the U.S, Singapore, Cuba, Crimea, Sevastopol, Iran, Syria, North Korea, Sudan, Mainland China.

## 🔑 How to Connect

### Generate API Keys

- Log in to your Bybit account or Sign Up for a Bybit account.

- Click on your account icon at the top right corner of the screen, and select API from the drop-down menu.

- Navigate to the API Management tab and click on Create New Key.

- Select System-generated API Keys.

- Select API Transaction, and name the API key.

- Set the permissions for the API key (e.g., account information, order placement, position information) and click on Submit

- Copy the API key and secret, and save them somewhere safe.

- Log in to the third-party application and link the saved API. 

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect bybit`:

```
Enter your bybit API key >>>
Enter your bybit secret key >>>
```

If connection is successful:

```
You are now connected to bybit
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `bybit`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bybit>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bybit_paper_trade` instead of `connect bybit`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `bybit_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bybit_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way
- Hedge

### Paper Trading

This perp exchange offers a paper trading mode: <https://testnet.bybit.com/en-US/trade/spot/BTC/USDT>

Afer you create an account and create the API keys, you can enter them by using the `connect bybit_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts. 

