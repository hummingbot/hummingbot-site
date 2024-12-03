!!! tip "Support Hummingbot"
    Hummingbot Foundation has a fee share partnership with Hashkey Global. When you use our software to trade on Hashkey Global, a custom API header tells Hashkey Global that the trade was executed using Hummingbot, so they share a portion of your fees with us, at no cost to you. To support us, just enter your API keys into Hummingbot and run bots! Thanks for your support! 🙏

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

- **Website**: <https://global.hashkey.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/hashkey-global/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/hashkey-global>
- **API Docs**: <https://hashkeyglobal-apidoc.readme.io/reference/introduction>
- **Fees**: <https://support.global.hashkey.com/hc/en-us/articles/13199900083612-HashKey-Global-Fee-Structure>
- **Supported Countries**: <https://support.global.hashkey.com/hc/en-us/articles/13086918687004-Why-is-my-country-region-not-listed>

## 🔑 How to Connect

### Generate API Keys

- Log in to your Hashkey Global account or Sign Up for a Hashkey Global account.

- Click on your account icon at the top right corner of the screen, and select *API Management* from the drop-down menu.

- Navigate to the API Management tab and click *on Create API*.

- Input *API Note Name", and select *API Permissions" for your key, and enter the *IP Access Restriction*.

- Click *Confirm* and enter your authentication on the sub-window.

- Copy the API key and secret, and save them somewhere safe.

- Log in to the third-party application and link the saved API.

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect hashkey`:

```
Enter your Hashkey Global api >>>
Enter your Hashkey Global secret >>>
```

If connection is successful:

```
You are now connected to hashkey
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `hashkey`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/hashkey>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect hashkey_paper_trade` instead of `connect hashkey`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `hashkey_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/hashkey_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- Hedge

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect hashkey_perpetual_paper_trade` instead of `connect hashkey_perpetual`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.
