## 🛠 Connector Info

- **Exchange Type**: Centralized Exchange (**CEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.0 | Yes | |
| [🔀 Perp Connector](#perp-connector) | ✅ | v2.0 | Yes | |
| [🕯 Spot Candles Feed](#spot-candles-feed) | ✅ | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | ✅ | 

## ℹ️ Exchange Info

- **Website**: <https://www.bitget.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/bitget/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/bitget>
- **API Docs**: <https://bitgetlimited.github.io/apidoc/en/spot/#welcome>
- **Fees**: <https://www.bitget.com/academy/en/article-details/Fee-Structure-and-Fee-Calculations-on-Bitget>
- **Supported Countries**: Not available

## 🔑 How to Connect

### Generate API Keys

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect bitget`:

```
Enter your bitget API key >>>
Enter your bitget secret key >>>
Enter your bitget passphrase >>>
```

If connection is successful:

```
You are now connected to bitget
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `bitget`
- **Connection Type**: WebSocket
- **API Docs**: <https://bitgetlimited.github.io/apidoc/en/spot/#welcome>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/bitget)** 

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect bitget_paper_trade` instead of `connect bitget`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `bitget_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bitget_perpetual>

### Usage

From inside the Hummingbot client, run `connect bitget_perpetual`:

```
Enter your bitget_perpetual API key >>>
Enter your bitget_perpetual secret key >>>
Enter your bitget_perpetual passphrase >>>
```

If connection is successful:

```
You are now connected to bitget_perpetual
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

## 🕯 Spot Candles Feed
*OHLCV candles data collector from spot markets*

- **ID**: `bitget`
- **Supported Intervals**: 1m | 5m | 15m | 30m | 1h | 4h | 6h | 12h | 1d | 1w
- **API Docs**: <https://bitgetlimited.github.io/apidoc/en/spot/#welcome>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/bitget_spot_candles)** 

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="bitget",
                                        trading_pair="ETH-USDT",
                                        interval="1m", max_records=50)
```

See [candles_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/candles_example.py) for more details.

## 🕯 Perp Candles Feed
*OHLCV candles data collector from perpetual futures markets*

- **ID**: `bitget_perpetual`
- **Supported Intervals**: 1m | 5m | 15m | 30m | 1h | 4h | 6h | 12h | 1d | 1w
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/bitget_perpetual_candles)** 

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="bitget_perpetual",
                                        trading_pair=trading_pair,
                                        interval="1m", max_records=50)
```

See [candles_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/candles_example.py) for more details.