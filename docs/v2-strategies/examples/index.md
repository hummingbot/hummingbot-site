<!-- - [`MACD_BB V1`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/macd_bb_v1.py) introduces a simple directional strategy that uses MACD and Bollinger Bands indicators
- [`DMan-V1`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v1.py) introduces a market making strategy that utilizes Candles indicators to dynamically set spreads
- [`DMan-V2`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v2.py) utilizes additional indicators to dynamically shift the mid price
- [`DMan-V3`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v3.py) utilizes Bollinger Band-based indicators and introduces new parameters like `side_filter` and `smart_activation`, allowing it be used in more flexible ways -->

The sample controllers in the codebase are paired with scripts that show how they can be configured and run:

## Directional Strategies

Directional strategies create [Position Executors](/v2-strategies/executors/#positionexecutor) based on long/short signals generated from [Candles](/v2-strategies/candles/) indicators. They inherit from the [DirectionalTrading](https://github.com/hummingbot/hummingbot/blob/e30406a2d41f1f9c741c29f449f477ab9ad7e4e5/hummingbot/smart_components/strategy_frameworks/directional_trading/directional_trading_controller_base.py) strategy base class.

Here are the current V2 directional strategies:

### Bollinger

A simple directional strategy that uses Bollinger Bands to construct long/short signals.

**Code:**

- [Controller](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/smart_components/controllers/bollinger_v1.py)
- [Script Example - configurable](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_directional-trading_bollinger_v1.py)

**Configs:**

- `bb_length`: number of candle intervals used to calculate Bollinger Band length
- `bb_std`: number of standard deviations used to set Bollinger Band width
- `bb_long_threshold`: threshold for long positions in relation to the Bollinger Band
- `bb_short_threshold`: threshold for short positions in relation to the Bollinger Band

```python
class BollingerV1Config(DirectionalTradingControllerConfigBase):
    strategy_name = "bollinger_v1"
    bb_length: int = Field(default=100, ge=20, le=400)
    bb_std: float = Field(default=2.0, ge=2.0, le=3.0)
    bb_long_threshold: float = Field(default=0.0, ge=-1.0, le=0.2)
    bb_short_threshold: float = Field(default=1.0, ge=0.8, le=2.0)
```

### MACD-BB

A simple directional strategy that uses Mean Average Convergence Divergence (MACD) and Bollinger Bands to construct long/short signals.

**Code:**

- [Controller](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/smart_components/controllers/macd_bb_v1.py)
- [Script Example - configurable](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_directional-trading_macd_bb_v1.py)
- [Script Example - perp](https://gist.github.com/david-hummingbot/40c295109d19933fd8336335e057a433)
- [Script Example - spot](https://gist.github.com/david-hummingbot/f9332923faac2fb5485eb7a80eb0d08d)

**Configs:**

- `bb_length`: number of candle intervals used to calculate Bollinger Band length
- `bb_std`: number of standard deviations used to set Bollinger Band width
- `bb_long_threshold`: threshold for long positions in relation to the Bollinger Band
- `bb_short_threshold`: threshold for short positions in relation to the Bollinger Band
- `macd_fast`: indicates the fast period in the MACD indicator
- `macd_slow`: indicates the slow period in the MACD indicator
- `macd_signal`: signal period in the MACD indicator
- `std_span`: standard deviation over a specified span of candle intervals

```python
class MACDBBV1Config(DirectionalTradingControllerConfigBase):
    strategy_name: str = "macd_bb_v1"
    bb_length: int = Field(default=100, ge=20, le=1000)
    bb_std: float = Field(default=2.0, ge=0.5, le=4.0)
    bb_long_threshold: float = Field(default=0.0, ge=-3.0, le=0.5)
    bb_short_threshold: float = Field(default=1.0, ge=0.5, le=3.0)
    macd_fast: int = Field(default=21, ge=2, le=100)
    macd_slow: int = Field(default=42, ge=30, le=1000)
    macd_signal: int = Field(default=9, ge=2, le=100)
    std_span: Optional[int] = None
```

### Trend Follower

A simple trend-following strategy that uses Simple Moving Average (SMA) and Bollinger Bands to construct long/short signals.

**Code:**

- [Controller](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/smart_components/controllers/trend_follower_v1.py)
- [Script Example - configurable](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_directional-trading_trend_follower_v1.py)

**Configs:**

- `sma_fast`: number of candle intervals used to calculate the fast SMA
- `sma_slow`: number of candle intervals used to calculate the slow SMA
- `bb_length`: number of candle intervals used to calculate Bollinger Band length
- `bb_std`: number of standard deviations used to set Bollinger Band width
- `bb_threshold`: threshold for creating positions in relation to the Bollinger Band

```python
class TrendFollowerV1Config(DirectionalTradingControllerConfigBase):
    strategy_name: str = "trend_follower_v1"
    sma_fast: int = Field(default=20, ge=10, le=150)
    sma_slow: int = Field(default=100, ge=50, le=400)
    bb_length: int = Field(default=100, ge=20, le=200)
    bb_std: float = Field(default=2.0, ge=2.0, le=3.0)
    bb_threshold: float = Field(default=0.2, ge=0.1, le=0.5)
```


## Market Making Strategies

Market making strategies create and manage a set of [Position Executors](/v2-strategies/executors/#positionexecutor) that place orders around a fixed mid price. They inherit from the [MarketMaking](https://github.com/hummingbot/hummingbot/blob/e30406a2d41f1f9c741c29f449f477ab9ad7e4e5/hummingbot/smart_components/strategy_frameworks/market_making/market_making_controller_base.py) strategy base class. 

### DmanV1


### DmanV2

A simple market making strategy that uses Natural Average True Range (NATR) to set spreads dynamically.

**Code:**

- [Controller](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/smart_components/controllers/dman_v1.py)
- [Script Example - configurable](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_dman_v1_with_config.py)
- [Script Example - spot](https://gist.github.com/david-hummingbot/6d7348d062a009645f3761dc704e7e85)
- [Script Example - perp](https://gist.github.com/david-hummingbot/e113fc4e0dcdf101507f875467040040)

**Configs:**

- `macd_fast`: indicates the fast period in the MACD indicator
- `macd_slow`: indicates the slow period in the MACD indicator
- `macd_signal`: signal period in the MACD indicator
- `natr_length`: sets the length for the NATR indicator
- `candles_config`: list of candlesticks used for generating signals

```python
	  strategy_name: str = "dman_v2"
    macd_fast: int = 12
    macd_slow: int = 26
    macd_signal: int = 9
    natr_length: int = 14
    candles_config: List[CandlesConfig]
```

### DmanV3

- Description:  Mean reversion strategy with Grid execution using Bollinger Bands indicator to make spreads dynamic and shift the mid-price.
- **Key Configs**
    - `bb_length`: number of periods used for Bollinger Bands calculation
    - `bb_std`: number of standard deviations used to set Bollinger Band width
    - `side_filter`: restricts order placement to only one side of the order book
    - `smart_activation`: allows the controller to place orders conditionally rather than immediately, based on specific market conditions
    - `activation_threshold`: sets the threshold for smart activation
    - `dynamic_spread_factor`: enables dynamic adjustment of the spread factor
    - `dynamic_target_spread`: allows dynamic targeting of spreads
- Sample Setting
    - Not backtestable yet

```python
    strategy_name: str = "dman_v3"
    bb_length: int = 100
    bb_std: float = 2.0
    side_filter: bool = False
    smart_activation: bool = False
    activation_threshold: Decimal = Decimal("0.001")
    dynamic_spread_factor: bool = True
    dynamic_target_spread: bool = False
```

- Spot Script Example - v2_market-making_dman_v3_multiple_pairs.py
    - https://gist.github.com/david-hummingbot/357ed947bd5e8e15473026d74727a9f5
- Perp Script Example - v2_market-making_dman_v3_multiple_pairs.py
    - https://gist.github.com/david-hummingbot/3653664a4d27e82177d27e34b26d7e91

### DmanV4

- Description: Directional Market Making Strategy making use of NATR indicator to make spreads dynamic and shift the mid-price.
- **Key Configs**
    - `bb_length:` number of periods used for Bollinger Bands calculation
    - `bb_std:` number of standard deviations used to set Bollinger Band width
    - `smart_activation:` allows the controller to place orders conditionally rather than immediately, based on specific market conditions
    - `activation_threshold:` sets the threshold for smart activation
    - `price_band:` enables or disables the price band functionality.
    - `price_band_long_filter:` sets the multiplier for the upper limit of the price band for long (buy) positions
    - `price_band_short_filter:` sets the multiplier for the lower limit of the price band for short (sell) positions
    - `dynamic_target_spread:` allows dynamic targeting of spreads
    - `dynamic_spread_factor:` enables dynamic adjustment of the spread factor
- Sample Setting
    - Backtesting development in progress

```python
  	strategy_name: str = "dman_v4"
    bb_length: int = 100
    bb_std: float = 2.0
    smart_activation: bool = False
    activation_threshold: Decimal = Decimal("0.001")
    price_band: bool = False
    price_band_long_filter: Decimal = Decimal("0.8")
    price_band_short_filter: Decimal = Decimal("0.8")
    dynamic_target_spread: bool = False
    dynamic_spread_factor: bool = True
```

