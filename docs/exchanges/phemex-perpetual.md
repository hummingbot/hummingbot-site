## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** 

Currently, Phemex is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). They are not maintained by the Hummingbot Foundation but may be maintained by a community member.

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | v2.0 | Yes | Supports testnet |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://phemex.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/phemex/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/phemex_futures>
- **API Docs**: <https://phemex-docs.github.io/>
- **Fees**: <https://phemex.com/getting-started/trading-fee>
- **Supported Countries**: <https://phemex.com/terms-of-service> 

## 🔑 How to Connect

### Generate API Keys

- Log in to Phemex.com and hover over your Account name on the top right corner of the page.

- Click on API Management.

- Click the Create New API Key button on the top right side of the page.

- Choose either High Rate Limit API entry or Default API entry.

- Enter a Name and IP address.

- Select the desired level of Permission and click Confirm.

- Enter the Email Verification Code sent to you by Phemex.

NOTE: The API Key will only display one time, please make sure to copy and save it carefully.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Mmm6kQ-Ifs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect phemex_perpetual` in Hummingbot in order to connect your wallet:

```
Enter your phemex_perpetual API key >>>
Enter your phemex_perpetual secret key >>>
```

If connection is successful:

```
You are now connected to phemex_perpetual.
```


## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `phemex_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/phemex_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way
- Hedge

### Paper Trading

This exchange offers a staging (testnet) mode: <https://testnet.phemex.com/>

While users can trade on testnet using the link above, it is not currently supported in Hummingbot.