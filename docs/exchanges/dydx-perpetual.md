## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)
- **Maintainer:** Hummingbot Foundation

Currently, dYdX is a **Silver** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means that Hummingbot Foundation maintains the components below via [Bounties](/governance/bounties), tracking improvements made to the Gold exchange connectors of that type.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Perp Candles Feed](#perp-candles-feed) | ✅ | 

## ℹ️ Exchange Info

- **Website**: <https://dydx.exchange>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/dydx/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/dydx>
- **Fees**: <https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx>


## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `mainnet`, `goerli test network`

From inside the Hummingbot client, run `connect dydx_perpetual` in Hummingbot in order to connect your wallet:

You will need the following to connect Hummingbot to `dydx_perpetual`:

* API key
* API secret key
* Passphrase
* Account number: set this value to `0`
* Stark private key

## How to create API keys

API credentials and a stark private key can be obtained programmatically using their documentation:

* [Recover Default API Credentials](https://dydxprotocol.github.io/v3-teacher/#recover-default-api-credentials)
* [Derive StarkKey](https://help.dydx.exchange/en/articles/4797307-what-is-a-stark-key)

Alternatively, you can follow these steps to get the required credentials:

1. From the dydx Perpetuals exchange, right-click anywhere on your web browser, and select **Inspect** to open Developer Tools
2. Go to Application > Local Storage > <https://trade.dydx.exchange>
3. Select **STARK_KEY_PAIRS** and click the drop-down next to your wallet address to get the stark private key
4. Select **API_KEY_PAIRS** and click the drop-down next to your wallet address to get the API key, secret key, and passphrase

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `dydx_perpetual`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/dydx_perpetual

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading

This perp exchange offers a paper trading mode: https://trade.stage.dydx.exchange/portfolio/overview

Users can trade on the testnet using the link above, however the testnet is not compatible with Hummingbot