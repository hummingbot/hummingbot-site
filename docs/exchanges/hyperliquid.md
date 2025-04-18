!!! tip "Foundation Sponsor"
    Hyperliquid is a [sponsor](/about/sponsors) of Hummingbot Foundation, so when you use Hummingbot to run bots on Hyperliquid, you're supporting the Foundation and our mission to democratize algo trading with open source software.

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | ✅ | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | ✅ | 
| [📓 Connector Guide](../blog/posts/using-hyperliquid-vaults-with-hummingbot/index.md) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://app.hyperliquid.xyz/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/hyperliquid/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/hyperliquid>
- **API Docs**: <https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api>
- **Fees**: <https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees>
- **Supported Countries**: Not available

## 🔑 How to Connect

!!! tip
    See the [Hyperliquid Vault Guide](../blog/posts/using-hyperliquid-vaults-with-hummingbot/index.md) for more details on how to use Hyperliquid VauLts.

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect hyperliquid` in Hummingbot in order to connect your wallet:

```
Enter your Arbitrum wallet address >>>
Enter your Arbitrum wallet private key >>>
```

If connection is successful:

```
You are now connected to hyperliquid.
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `hyperliquid`
- **Connection Type**: WebSocket
- **API Docs**: <https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/hyperliquid)** 

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`



## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `hyperliquid_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/hyperliquid_perpetual>


### Usage

From inside the Hummingbot client, run `connect hyperliquid_perpetual`:

```
>>> connect hyperliquid_perpetual

```

```
Enter your Arbitrum wallet address >>>
Enter your Arbitrum wallet private key >>>
```

If connection is successful:

```
You are now connected to hyperliquid_perpetual
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

This perp exchange offers a paper trading mode: <https://app.hyperliquid-testnet.xyz/trade>

Afer you create an account and create the API keys, you can enter them by using the `connect hyperliquid_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts. 

## 🕯 Spot Candles Feed
*OHLCV candles data collector from spot markets*

- **ID**: `hyperliquid`
- **Supported Intervals**: 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 1w | 1M
- **API Docs**: <https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/hyperliquid_spot_candles)** 

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="hyperliquid",
                                        trading_pair="ETH-USDC",
                                        interval="1m", max_records=50)
```


## 🕯 Perp Candles Feed
*OHLCV candles data collector from perpetual futures markets*

- **ID**: `hyperliquid_perpetual`
- **Supported Intervals**: 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 1w | 1M
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/hyperliquid_perpetual_candles)** 

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="hyperliquid_perpetual",
                                        trading_pair=trading_pair,
                                        interval="3m", max_records=50)
```


