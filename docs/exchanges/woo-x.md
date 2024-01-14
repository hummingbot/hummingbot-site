## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer**: [Woo X](https://woo.org/)

Currently, Woo X is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This
means Hummingbot Foundation does not maintain the components below, but community members may
submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add
enhancements to them.

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector)       | ✅    | v2.0 | Yes         | Supports `MARKET` order type 
| [🔀 Perp Connector](#perp-connector)       | Not available |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available |
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available |

## ℹ️ Exchange Info

- **Website**: <https://woo.org/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/wootrade/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/woo-network>
- **API Docs**: <https://docs.woo.org/>
- **Fees**: <https://support.woo.org/hc/en-001/articles/4404611795353--Spot-Margin-Trading-Fees>
- **Supported Countries**: Available to customers worldwide, except for countries with service restrictions such as
  Cuba, Crimea, Sevastopol, Iran, Syria, North Korea, Sudan, Mainland
  China. <https://support.woo.org/hc/en-001/articles/4403838052761--List-of-unsupported-countries-regions>

## 🔑 How to Connect

### Generate API Keys

1. Log in to your Woo X account or Sign Up for a Woo X account.
2. Click on your account icon in the top right corner of the screen, and select Subaccounts and API from the drop-down menu.
3. Navigate to the Subaccounts and API tab and click on Create API.
4. Set a description for the API key (e.g. Hummingbot).
5. Check the "Enable Trading" permission and click on Create API.
6. Copy the API key, secret, and application ID, then save them in a safe place.
7. Log in to the third-party application and link the saved API.

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect woo_x`:

```
Enter your Woo X API key >>>
Enter your Woo X secret API key >>>
Enter your Woo X application ID >>>
```

If connection is successful:

```
You are now connected to Woo X
```

## 🔀 Spot Connector

*Integration to spot markets API endpoints*

- **ID**: `woo_x`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/development/hummingbot/connector/exchange/woo_x>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

### Paper Trading

This exchange offers a paper trading mode: <https://x.staging.woo.org/en/trade/BTC_USDT>

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect woo_x_testnet`
instead of `connect woo_x`.

After you create an account and create the API keys, you can enter them by using the `connect woo_x_testnet` command
within the Hummingbot client. Once connected, you should be able to use the testnet with the available spot strategies /
scripts. 
