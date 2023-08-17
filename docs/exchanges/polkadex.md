## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** [CoinAlpha](https://coinalpha.com)

Currently, Polkadex is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports testnet
| [🔀 Perp Connector](#perp-connector) | Not available | 
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://www.polkadex.trade>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/polkadex/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/polkadex>
- **API Docs**: <https://wiki.polkadot.network/docs/build-index>
- **Fees**: To be determined
- **Supported Countries**: Global 

## 🔑 How to Connect

### Generate API Keys



### Add Keys to Hummingbot

Run `connect polkadex` in order to enter your API keys:

```
Enter your polkadex seed phrase >>>
```

If connection is successful:

```
You are now connected to polkadex.
```

## 🔀 Spot Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `polkadex`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/polkadex>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

This exchange offers a staging (testnet) mode: <https://testnet.polkadex.trade/>

While users can trade on testnet using the link above, it is not currently supported in Hummingbot.