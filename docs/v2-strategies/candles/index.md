![](../diagrams/4.png)

# Hummingbot Candles Component Guide

## Overview

The Candles component in Hummingbot is crucial for traders to generate and utilize OHLCV (Open, High, Low, Close, Volume) data. It combines historical and real-time data to create custom technical indicators, leveraging [pandas_ta](https://github.com/twopirllc/pandas-ta).

## Configuration and Usage Examples

### Instantiating Candles

To use the Candles component, instantiate it in your script. Here's how to set it up for a single market:

```python
from hummingbot.data_feed.candles_feed.candles_factory import CandlesConfig

# Configure the candles
conf = CandlesConfig(connector="binance", trading_pair="BTC-USDT", interval="5m", max_records=100)

# Example of using this configuration in a strategy
config = DManV3Config(candles_config=[conf])
```

#### Key Configuration Parameters:

- `connector`: The data source (e.g., `binance` or `binance_perpetual`).
- `trading_pair`: The trading pair (e.g., `BTC-USDT`).
- `interval`: Time interval between candles (e.g., `5m` for 5 minutes).
- `max_records`: Maximum number of candles to store.

### Using Multiple Candles

For strategies requiring multiple candle intervals or trading pairs, initialize separate instances:

```python
from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory, CandlesConfig

class InitializingCandlesExample(ScriptStrategyBase):
    # Configure two different sets of candles
    candles_config_1 = CandlesConfig(connector="binance", trading_pair="BTC-USDT", interval="3m")
    candles_config_2 = CandlesConfig(connector="binance_perpetual", trading_pair="ETH-USDT", interval="1m")

    # Initialize candles using the configurations
    candles_1 = CandlesFactory.get_candle(candles_config_1)
    candles_2 = CandlesFactory.get_candle(candles_config_2)
```

## Accessing Indicators and Displaying Status

### Adding Technical Indicators

Incorporate technical indicators to candle data for enhanced strategy insights:

```python
def format_status(self) -> str:
    # Ensure market connectors are ready
    if not self.ready_to_trade:
        return "Market connectors are not ready."
    lines = []
    if self.all_candles_ready:
        # Loop through each candle set
        for candles in [self.eth_1w_candles, self.eth_1m_candles, self.eth_1h_candles]:
            candles_df = candles.candles_df
            # Add RSI, BBANDS, and EMA indicators
            candles_df.ta.rsi(length=14, append=True)
            candles_df.ta.bbands(length=20, std=2, append=True)
            candles_df.ta.ema(length=14, offset=None, append=True)
            # Format and display candle data
            lines.extend([f"Candles: {candles.name} | Interval: {candles.interval}"])
            lines.extend(["    " + line for line in candles_df.tail().to_string(index=False).split("\n")])
    else:
        lines.append("  No data collected.")

    return "\n".join(lines)
```

### Displaying Candles in `status` Command

Modify the `format_status` method to display candlestick data:

```python
def format_status(self) -> str:
    # Check if trading is ready
    if not self.ready_to_trade:
        return "Market connectors are not ready."

    lines = ["\n############################################ Market Data ############################################\n"]
    # Check if the candle data is ready
    if self.eth_1h_candles.is_ready:
        # Format and display the last few candle records
        candles_df = self.eth_1h_candles.candles_df
        candles_df["timestamp"] = pd.to_datetime(candles_df["timestamp"], unit="ms").dt.strftime('%Y-%m-%d %H:%M:%S')
        display_columns = ["timestamp", "open", "high", "low", "close"]
        formatted_df = candles_df[display_columns].tail()
        lines.append("One-hour Candles for ETH-USDT:")
        lines.append(formatted_df.to_string(index=False))
    else:
        lines.append("  One-hour candle data is not ready.")

    return "\n".join(lines)
```

### Logging Candles Periodically

To log candle data in the `on_tick` method:

```python
def on_tick(self):
    self.logger().info(self.candles.candles_df)
```

### Relevant Scripts

Find practical examples of the Candles component in these Hummingbot scripts:

- [download_candles.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/download_candles.py)
- [candles_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_using_data_feeds/candles_example.py)
- [simple_directional_strategy_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_using_smart_components/directional_strategy_rsi_spot.py)

## Available Exchanges

The Candles component supports several exchanges:

### Spot Exchanges
- Binance (`binance_spot`)
- KuCoin (`kucoin`)
- Gate.io (`gate_io`)
- AscendEX (`ascendex`)

### Perpetual Exchanges
- Binance (`binance_perpetual`)
- KuCoin (`kucoin_perpetual`)
- Gate.io (`gate_io_perpetual`)


## Additional Key Methods and Properties

### `start` and `stop` Methods

Control the initiation and termination of the candle data stream.

### `is_ready` Property

Check if the candle data is complete and ready for use.

### `candles_df` Property

Access the DataFrame containing the latest candle data.

