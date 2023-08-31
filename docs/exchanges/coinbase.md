## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: None

Currently, Coinbase is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.coinbase.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/coinbase-exchange/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/coinbase-exchange>
- **API Docs**: <https://docs.pro.coinbase.com/>
- **Fees**: <https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees>
- **Supported Countries**: Available in 100+ countries

## 🔑 How to Connect

### Generate API Keys


### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect coinbase`:

```
Enter your coinbase API key >>>
Enter your coinbase secret key >>>
```

If connection is successful:

```
You are now connected to coinbase
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `coinbase_pro`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/coinbase_pro>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect coinbase_paper_trade` instead of `connect coinbase`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.
