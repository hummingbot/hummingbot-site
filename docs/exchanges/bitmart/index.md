!!! tip "Support Hummingbot"
    Hummingbot Foundation has a fee share partnership with Bitmart. When you use our software to trade on Bitmart, a custom API header tells Bitmart that the trade was executed using Hummingbot, so they share a portion of your fees with us, at no cost to you. To support us, just enter your API keys into Hummingbot and run bots! Thanks for your support! 🙏

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: None

Currently, Bitmart is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not built  | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not built  | 

## ℹ️ Exchange Info

- **Website**: <https://www.bitmart.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/bitmart/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/bitmart>
- **API Docs**: https://www.bitmart.com/api-docs
- **Fees**: https://www.bitmart.com/fee/en
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys

- Login

    ![API](bitmart-api1.png)

- Click Account tab

    ![API](bitmart-api2.png)

- Click Settings in the API tab

    ![API](bitmart-api3.png)

- Create your API KEY

    ![API](bitmart-api4.png)

- Create Successfully. The Secret Key will only be displayed once. Please copy and save.

    ![API](bitmart-api5.png)

- Click Confirm button to exit. Now you can use your new API.

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect bitmart`:

```
Enter your bitmart API key >>>
Enter your bitmart secret key >>>
```

If connection is successful:

```
You are now connected to bitmart
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `bitmart`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bitmart

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bitmart_paper_trade` instead of `connect bitmart`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.
