DManV3 - Mean Reversion

## Key Configs

### Orders Execution

- `exchange`: Specifies the exchange where the strategy will be executed.
- `trading_pairs`: Lists the trading pairs to be monitored and traded.
- `leverage`: Sets the leverage level for trades.

### Candles Exchange

- `candles_exchange`: Designates the exchange source for candle data.
- `candles_interval`: Defines the time interval for each candle.
- `candles_max_records`: Limits the number of candle records to be maintained.
- `bollinger_band_length`: Determines the length of the Bollinger Bands calculation.
- `bollinger_band_std`: Specifies the standard deviation multiplier for Bollinger Bands.

### Orders Configuration

- `order_amount`: Sets the default amount for each order.
- `n_levels`: Specifies the number of order levels to be created.
- `start_spread`: Defines the initial spread as a percentage of the Bollinger Band width.
- `step_between_orders`: Sets the increment between successive order levels, again as a percentage of the Bollinger Band width.



## Spot Script Example



## Perp Script Example

DmanV2 - Market Making

- Key Configs
- Spot Script Example
- Perp Script Example

Directional

- Key Configs
- Spot Script Example
- Perp Script Example

## Configuring Candles

- Instantiation
- Configs
- Using multiple candles
- Accessing indicators
- Displaying candles in `status`

## Order Level Builder

| Distribution | Description                        | Example                                                       |
|--------------|------------------------------------|---------------------------------------------------------------|
| Linear       | Evenly spaced spreads              | `Distributions.linear(n_levels=15, start=0.4, end=2.5)`      |
| Arithmetic   | Gradual spread increase            | `Distributions.arithmetic(n_levels=15, start=0.4, step=0.2)` |
| Geometric    | Exponential spread growth          | `Distributions.geometric(n_levels=15, start=0.4, ratio=1.2)` |
| Logarithmic  | Logarithmically increasing spreads | `Distributions.logarithmic(n_levels=15, base=10, scaling_factor=1.0, start=0.4)` |

Examples:

- DMan-V3:
    - 5 order levels
    - Starts at 50% of the Bollinger Band width
    - Incrementally increases by 30%

```
order_level_builder = OrderLevelBuilder(n_levels=5)
order_levels = order_level_builder.build_order_levels(
    amounts=order_amount,
    spreads=Distributions.arithmetic(n_levels=5, start=0.5, step=0.3),
    # ... other configurations
)
```

## PositionExecutor

### Triple Barrier Configuration

- `stop_loss`: Determines the stop-loss percentage.
- `take_profit`: Sets the take-profit percentage.
- `time_limit`: Establishes a time limit for the trade.
- `trailing_stop_activation_price_delta`: Specifies the delta for activating a trailing stop.
- `trailing_stop_trailing_delta`: Sets the trailing delta for the trailing stop.


## Limit vs market order

The `PositionExecutor` requires market orders for time_limit and stop_loss