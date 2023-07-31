!!! tip "Support Hummingbot"
    Hummingbot Foundation has a fee share partnership with Binance. When you use our software to trade on Binance, a custom API header tells Binance that the trade was executed using Hummingbot, so they share a portion of your fees with us, at no cost to you. To support us, create an account using our [Binance referral link](https://www.binance.com/en/register?ref=FQQNNGCD) or [Binance Futures referral link](https://www.binance.com/en/futures/ref?code=hummingbot) and enter that account's API keys into Hummingbot! Thanks for your support! 🙏

## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (CEX)
- **Market Type**: Central Limit Order Book (CLOB)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)
- **Maintainer**: Hummingbot Foundation

Currently, Binance is a **Gold** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means that Hummingbot Foundation maintains the components below and continually improves them to add more functionality. Gold connectors serve as the "gold standard" template for all other connectors of that type.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | ✅ | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | ✅ | 

## ℹ️ Exchange Info

- **Website**: <https://www.binance.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/binance/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/binance>
- **Fees**: <https://www.binance.com/en/fee/schedule>
- **Supported Countries**: <https://www.binance.com/en/support/faq/115003824812>

## 🔑 How to Connect

### Generate API Keys

!!! note
    This section provides a step-by-step guide that helps you generate exchange API keys for use with Hummingbot. All information is sourced from the exchange website.

**Step 1**

Log in to your Binance account and click **Profile** - **[API Management](https://www.binance.com/en/my/settings/api-management)**

   ![Step 1](binance/binance-api1.png)

**Step 2**

Click **Create API**. Please note that before creating an API Key, you need to:

   - Enable [two-factor authentication (2FA)](https://www.binance.com/en/support/faq/account-functions?c=1&navId=1#11) on your account.
   - Make a deposit of any amount to activate your account.

   ![Step 2](binance/binance-api2.png)

Select **System generated** as your preferred API Key type. For more details on self-generated API Keys, please refer to [How to Generate an RSA Key Pair to Send API Requests on Binance](https://www.binance.com/en/support/faq/2b79728f331e43079b27440d9d15c5db).

   ![Step 3](binance/binance-api3.png)

Enter a label/name for your API Key.

   ![Step 4](binance/binance-api4.png)

**Step 3**

Verify your request with 2FA devices.

   ![Step 5](binance/binance-api5.png)

   [![Step 6](binance/binance-api6.png)](binance/binance-api6.png)

Your API Key is now created. Do not disclose your API Key, Secret Key (HMAC), or Private Key (RSA) to anyone to avoid asset losses. If you forget your Secret Key, you'll need to delete the API and create a new one.

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect binance`:

```
>>> connect binance

Enter your binance API key >>>
Enter your binance secret key >>>
```

If connection is successful:

```
You are now connected to binance
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `binance`
- **Connection Type**: WebSocket
- **API Docs**: <https://binance-docs.github.io/apidocs/spot/en/>
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/binance

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect binance_paper_trade` instead of `connect binance`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `binance_perpetual`
- **Connection Type**: WebSocket
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/binance_perpetual

### Usage

From inside the Hummingbot client, run `connect binance_perpetual`:

```
>>> connect binance_perpetual

Enter your binance_perpetual API key >>>
Enter your binance_perpetual secret key >>>
```

If connection is successful:

```
You are now connected to binance_perpetual
```

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

This perp exchange offers a paper trading mode: <https://testnet.binancefuture.com>

Afer you create an account and create the API keys, you can enter them by using the `connect binance_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts. 

## 🕯 Spot Candles Feed
*OHLCV candles data collector from spot markets*

- **ID**: `binance`
- **Supported Intervals**: 1s | 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 3d | 1w | 1M
- **API Docs**: <https://binance-docs.github.io/apidocs/futures/en/>
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/binance_spot_candles

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="binance",
                                        trading_pair="ETH-USDT",
                                        interval="1m", max_records=50)
```

See [candles_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/candles_example.py) for more details.

## 🕯 Perp Candles Feed
*OHLCV candles data collector from perpetual futures markets*

- **ID**: `binance_perpetual`
- **Supported Intervals**: 1s | 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 3d | 1w | 1M
- **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/binance_perpetual_candles

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="binance_perpetual",
                                        trading_pair=trading_pair,
                                        interval="3m", max_records=50)
```

See [candles_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/candles_example.py) for more details.
