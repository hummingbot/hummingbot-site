In Hummingbot's V2 strategy framework, the **Controller** serves as a central component that drives the strategy's actions and decisions. It is primarily responsible for three critical tasks:

1. Fetching data from different sources such as [Candles](./candles-feed.md)
2. Computing signals and based on the fetched data
3. Instructing [Executors](./executors.md) on how to respond to signals

## DMan Controllers

The DMan V1, V2, and V3 controllers, while sharing a common foundation in market making strategies, differ significantly in their technical approach and configuration. `DMan V1` focuses on using the `NATR` (Normalized Average True Range) indicator for dynamic spread calculations. In contrast, `DMan V2` integrates both `NATR and MACD` (Moving Average Convergence Divergence) indicators, enhancing its strategy with a more complex analysis for price and spread adjustments. `DMan V3`, on the other hand, adopts `Bollinger Bands` as its core technical tool, diverging from the NATR-centric approach of V1 and the combined NATR and MACD method of V2. Each version represents an evolution in strategy complexity and market analysis techniques, catering to varying levels of trading scenarios and customization needs.

## DManV1

### **Configs Section**

```Python
class DManV1Config(MarketMakingControllerConfigBase):
    strategy_name: str = "dman_v1"
    natr_length: int = 14
```

- `strategy_name:` A string variable set to "dman_v1", indicating the name of the strategy.

- `natr_length:` An integer indicating the length of the NATR (Normalized Average True Range) indicator used in the strategy.


### **Standard Methods**

#### `get_processed_data`

```Python
def get_processed_data(self):
    """
    Gets the price and spread multiplier from the last candlestick.
    """
    candles_df = self.candles[0].candles_df
    natr = ta.natr(candles_df["high"], candles_df["low"], candles_df["close"], length=self.config.natr_length) / 100
    candles_df["spread_multiplier"] = natr
    candles_df["price_multiplier"] = 0.0
    return candles_df
```

The `get_processed_data` method is pivotal in the DMan V1 controller, focusing on processing the latest candlestick data. It calculates the Normalized Average True Range (NATR) indicator, using it to derive the `spread_multiplier` for dynamic spread calculations. Additionally, it initializes a `price_multiplier` column, setting it to default values. This method is crucial for users who aim to tailor the data processing aspect of the strategy, especially in modifying how the spread is calculated.


#### `early_stop_condition`

```Python
def early_stop_condition(self, executor: PositionExecutor, order_level: OrderLevel) -> bool:
    """
    If an executor has an active position, should we close it based on a condition.
    """
    return False
```

The `early_stop_condition` method is designed to determine whether an active trading position should be closed early based on specific conditions. In its current implementation, it always returns `False`, indicating no early stop condition is set by default. However, this method offers flexibility for users to implement custom conditions for early stopping, allowing the strategy to adapt to different trading scenarios or risk management requirements.


#### `cooldown_condition`

```Python
def cooldown_condition(self, executor: PositionExecutor, order_level: OrderLevel) -> bool:
    """
    After finishing an order, the executor will be in cooldown for a certain amount of time.
    This prevents the executor from creating a new order immediately after finishing one and execute a lot
    of orders in a short period of time from the same side.
    """
    if executor.close_timestamp and executor.close_timestamp + order_level.cooldown_time > time.time():
        return True
    return False
```

In the `cooldown_condition` method, the focus is on managing the cooldown period for the executor after completing an order. This method checks if the executor should be paused from creating a new order immediately after completing a previous one. It uses the `close_timestamp` and `cooldown_time` to prevent frequent order execution from the same side, thereby controlling the order execution frequency and potentially avoiding market impact or strategy exploitation.



#### `get_position_config`

```Python
def get_position_config(self, order_level: OrderLevel) -> PositionConfig:
    """
    Creates a PositionConfig object from an OrderLevel object.
    Here you can use technical indicators to determine the parameters of the position config.
    """
    close_price = self.get_close_price(self.config.exchange, self.config.trading_pair)
    amount = order_level.order_amount_usd / close_price
    price_multiplier, spread_multiplier = self.get_price_and_spread_multiplier()
    price_adjusted = close_price * (1 + price_multiplier)
    side_multiplier = -1 if order_level.side == TradeType.BUY else 1
    order_price = price_adjusted * (1 + order_level.spread_factor * spread_multiplier * side_multiplier)
    if order_level.triple_barrier_conf.trailing_stop_trailing_delta and order_level.triple_barrier_conf.trailing_stop_trailing_delta:
        trailing_stop = TrailingStop(
            activation_price_delta=order_level.triple_barrier_conf.trailing_stop_activation_price_delta,
            trailing_delta=order_level.triple_barrier_conf.trailing_stop_trailing_delta,
        )
    else:
        trailing_stop = None
    position_config = PositionConfig(
        timestamp=time.time(),
        trading_pair=self.config.trading_pair,
        exchange=self.config.exchange,
        side=order_level.side,
        amount=amount,
        take_profit=order_level.triple_barrier_conf.take_profit,
        stop_loss=order_level.triple_barrier_conf.stop_loss,
        time_limit=order_level.triple_barrier_conf.time_limit,
        entry_price=Decimal(order_price),
        open_order_type=order_level.triple_barrier_conf.open_order_type,
        take_profit_order_type=order_level.triple_barrier_conf.take_profit_order_type,
        trailing_stop=trailing_stop,
        leverage=self.config.leverage
    )
    return position_config
```

The `get_position_config` method plays a key role in constructing a `PositionConfig` object from an `OrderLevel` object. It incorporates several steps, including calculating the trading amount based on the closing price, adjusting the order price using price and spread multipliers, and setting up a trailing stop if required. This method is essential for setting up trading positions, enabling customization of the trading configuration according to the specifics of the strategy or market conditions.

---

## DManV2

### Configs Section

```Python
class DManV2Config(MarketMakingControllerConfigBase):
    strategy_name: str = "dman_v2"
    macd_fast: int = 12
    macd_slow: int = 26
    macd_signal: int = 9
    natr_length: int = 14
```

 - `strategy_name`: Set to "dman_v2", indicating the strategy's name.

 - `macd_fast`, `macd_slow`, `macd_signal`: Parameters for the MACD (Moving Average Convergence Divergence) indicator.

 - `natr_length`: Length of the NATR (Normalized Average True Range) indicator, used for spread dynamics.

### **Standard Methods**

#### `refresh_order_condition`

```Python
def refresh_order_condition(self, executor: PositionExecutor, order_level: OrderLevel) -> bool:
    """
    Checks if the order needs to be refreshed.
    You can reimplement this method to add more conditions.
    """
    if executor.position_config.timestamp + order_level.order_refresh_time > time.time():
        return False
    return True
```        

The `refresh_order_condition` method in DMan V2 checks if a current order needs to be refreshed. It compares the sum of the `position_config` timestamp and `order_refresh_time` against the current time. If the current time surpasses this sum, the method returns `True`, signaling a need for order refresh. This allows for dynamic order management based on time conditions.

#### `early_stop_condition`

```Python
def early_stop_condition(self, executor: PositionExecutor, order_level: OrderLevel) -> bool:
    """
    If an executor has an active position, should we close it based on a condition.
    """
    return False
```

The `early_stop_condition` method is designed to determine if an active trading position should be closed early based on predefined conditions. In the DMan V2 implementation, it returns `False`, indicating no default early stop condition. This method provides a template for users to implement custom early stop conditions, tailored to specific trading strategies or risk management protocols.


#### `cooldown_condition`

```Python
def cooldown_condition(self, executor: PositionExecutor, order_level: OrderLevel) -> bool:
    """
    After finishing an order, the executor will be in cooldown for a certain amount of time.
    This prevents the executor from creating a new order immediately after finishing one and execute a lot
    of orders in a short period of time from the same side.
    """
    if executor.close_timestamp and executor.close_timestamp + order_level.cooldown_time > time.time():
        return True
    return False
```

The `cooldown_condition` method manages the cooldown period for the executor after an order is completed. It checks if the executor is within the cooldown time post-order completion, based on `close_timestamp` and `cooldown_time`. This prevents immediate re-creation of orders after completion, maintaining controlled order execution and strategy efficacy.

#### `get_processed_data`

```Python
def get_processed_data(self):
    """
    Gets the price and spread multiplier from the last candlestick.
    """
    candles_df = self.candles[0].candles_df
    natr = ta.natr(candles_df["high"], candles_df["low"], candles_df["close"], length=self.config.natr_length) / 100
    macd_output = ta.macd(candles_df["close"], fast=self.config.macd_fast, slow=self.config.macd_slow, signal=self.config.macd_signal)
    macd = macd_output[f"MACD_{self.config.macd_fast}_{self.config.macd_slow}_{self.config.macd_signal}"]
    macdh = macd_output[f"MACDh_{self.config.macd_fast}_{self.config.macd_slow}_{self.config.macd_signal}"]
    macd_signal = - (macd - macd.mean()) / macd.std()
    macdh_signal = macdh.apply(lambda x: 1 if x > 0 else -1)
    max_price_shift = natr / 2
    price_multiplier = (0.5 * macd_signal + 0.5 * macdh_signal) * max_price_shift
    candles_df["spread_multiplier"] = natr
    candles_df["price_multiplier"] = price_multiplier
    return candles_df
```

The `get_processed_data` is a key method in DMan V2, processing the latest candlestick data to calculate price and spread multipliers. It combines NATR and MACD indicators for dynamic spread calculation and mid-price shifting. This method is crucial for the strategy’s responsiveness to market conditions, making it a central point for users looking to modify the strategy’s data processing logic.

#### `get_position_config`

```Python
def get_position_config(self, order_level: OrderLevel) -> PositionConfig:
    """
    Creates a PositionConfig object from an OrderLevel object.
    Here you can use technical indicators to determine the parameters of the position config.
    """
    close_price = self.get_close_price(self.config.exchange, self.config.trading_pair)
    amount = order_level.order_amount_usd / close_price
    price_multiplier, spread_multiplier = self.get_price_and_spread_multiplier()
    price_adjusted = close_price * (1 + price_multiplier)
    side_multiplier = -1 if order_level.side == TradeType.BUY else 1
    order_price = price_adjusted * (1 + order_level.spread_factor * spread_multiplier * side_multiplier)
    if order_level.triple_barrier_conf.trailing_stop_trailing_delta and order_level.triple_barrier_conf.trailing_stop_trailing_delta:
        trailing_stop = TrailingStop(
            activation_price_delta=order_level.triple_barrier_conf.trailing_stop_activation_price_delta,
            trailing_delta=order_level.triple_barrier_conf.trailing_stop_trailing_delta,
        )
    else:
        trailing_stop = None
    position_config = PositionConfig(
        timestamp=time.time(),
        trading_pair=self.config.trading_pair,
        exchange=self.config.exchange,
        side=order_level.side,
        amount=amount,
        take_profit=order_level.triple_barrier_conf.take_profit,
        stop_loss=order_level.triple_barrier_conf.stop_loss,
        time_limit=order_level.triple_barrier_conf.time_limit,
        entry_price=Decimal(order_price),
        open_order_type=order_level.triple_barrier_conf.open_order_type,
        take_profit_order_type=order_level.triple_barrier_conf.take_profit_order_type,
        trailing_stop=trailing_stop,
        leverage=self.config.leverage
    )
    return position_config
```

The `get_position_config` method in DMan V2 is essential for configuring trading positions. It calculates the trading amount based on the closing price, adjusts the order price using price and spread multipliers, and sets up a trailing stop if applicable. The method's ability to craft a detailed `PositionConfig` object makes it vital for aligning trading positions with the strategy’s market and risk parameters.


---

## DManV3

### **Configs Section**

```Python
class DManV3Config(MarketMakingControllerConfigBase):
    strategy_name: str = "dman_v3"
    bb_length: int = 100
    bb_std: float = 2.0
```

  - `strategy_name`: Set to "dman_v3", specifying the strategy's name.

  - `bb_length`: Length parameter for the Bollinger Bands indicator.

  - `bb_std`: Standard deviation parameter for the Bollinger Bands indicator.


### **Standard Methods**

#### `refresh_order_condition`

```Python
def refresh_order_condition(self, executor: PositionExecutor, order_level: OrderLevel) -> bool:
    """
    Checks if the order needs to be refreshed.
    You can reimplement this method to add more conditions.
    """
    if executor.position_config.timestamp + order_level.order_refresh_time > time.time():
        return False
    return True
```

The `refresh_order_condition` method in DMan V3 assesses whether an existing order needs to be updated. It checks if the sum of the order's timestamp and the refresh time is less than the current time. If so, it returns `True`, indicating the order should be refreshed. This mechanism is key for ensuring orders remain relevant and timely in the trading strategy.


#### `early_stop_condition`

```Python
def early_stop_condition(self, executor: PositionExecutor, order_level: OrderLevel) -> bool:
    """
    If an executor has an active position, should we close it based on a condition.
    """
    return False
```

In DMan V3, the `early_stop_condition` method determines if an active position should be closed early based on specific criteria. The default implementation returns `False`, indicating no early stop condition is set. This method provides a foundation for implementing customized early stop conditions, catering to various trading strategies and risk management approaches.

#### `cooldown_condition`

```Python
def cooldown_condition(self, executor: PositionExecutor, order_level: OrderLevel) -> bool:
    """
    After finishing an order, the executor will be in cooldown for a certain amount of time.
    This prevents the executor from creating a new order immediately after finishing one and execute a lot
    of orders in a short period of time from the same side.
    """
    if executor.close_timestamp and executor.close_timestamp + order_level.cooldown_time > time.time():
        return True
    return False

```

The `cooldown_condition` method in DMan V3 manages the cooldown period for executors after an order completion. It checks if the current time is within the cooldown period defined by the `close_timestamp` and `cooldown_time`. This condition helps in regulating the frequency of order creation and execution, crucial for maintaining a disciplined trading approach.


#### `get_processed_data`

```Python
def get_processed_data(self):
    """
    Gets the price and spread multiplier from the last candlestick.
    """
    candles_df = self.candles[0].candles_df
    bbp = ta.bbands(candles_df["close"], length=self.config.bb_length, std=self.config.bb_std)
    candles_df["spread_multiplier"] = bbp[f"BBB_{self.config.bb_length}_{self.config.bb_std}"] / 200
    candles_df["price_multiplier"] = bbp[f"BBM_{self.config.bb_length}_{self.config.bb_std}"]
    return candles_df
```

`get_processed_data` is a central method in DMan V3, where it extracts price and spread multipliers from the latest candlestick data. It utilizes Bollinger Bands to calculate these multipliers, which are then applied to the trading strategy. This method's role in adapting to market conditions through technical indicators makes it a critical component of the strategy's design.

#### `get_position_config`

```Python
def get_position_config(self, order_level: OrderLevel) -> PositionConfig:
        """
        Creates a PositionConfig object from an OrderLevel object.
        Here you can use technical indicators to determine the parameters of the position config.
        """
        close_price = self.get_close_price(self.config.exchange, self.config.trading_pair)

        amount = order_level.order_amount_usd / close_price
        price_multiplier, spread_multiplier = self.get_price_and_spread_multiplier()
        side_multiplier = -1 if order_level.side == TradeType.BUY else 1

        order_spread_multiplier = order_level.spread_factor * spread_multiplier * side_multiplier
        order_price = price_multiplier * (1 + order_spread_multiplier)
        if order_level.triple_barrier_conf.trailing_stop_trailing_delta and order_level.triple_barrier_conf.trailing_stop_trailing_delta:
            trailing_stop = TrailingStop(
                activation_price_delta=order_level.triple_barrier_conf.trailing_stop_activation_price_delta,
                trailing_delta=order_level.triple_barrier_conf.trailing_stop_trailing_delta,
            )
        else:
            trailing_stop = None
        position_config = PositionConfig(
            timestamp=time.time(),
            trading_pair=self.config.trading_pair,
            exchange=self.config.exchange,
            side=order_level.side,
            amount=amount,
            take_profit=order_level.triple_barrier_conf.take_profit,
            stop_loss=order_level.triple_barrier_conf.stop_loss,
            time_limit=order_level.triple_barrier_conf.time_limit,
            entry_price=Decimal(order_price),
            open_order_type=order_level.triple_barrier_conf.open_order_type,
            take_profit_order_type=order_level.triple_barrier_conf.take_profit_order_type,
            trailing_stop=trailing_stop,
            leverage=self.config.leverage
        )
        return position_config
```

The `get_position_config` method in DMan V3 is vital for configuring trading positions. It calculates the amount of trade based on the closing price and utilizes price and spread multipliers to determine the order price. Additionally, it may set up a trailing stop based on the strategy's parameters. This method's ability to tailor `PositionConfig` objects to specific trading conditions is key to the strategy’s effectiveness.


---

## Available Controllers 

As of Hummingbot version [1.22.0](../release-notes/1.22.0.md), there are currently 5 different controllers in the Hummingbot codebase

- [dman_v1](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v1.py)

- [dman_v2](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v2.py)

- [dman_v3](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v3.py)  

- [bollingrid](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/bollingrid.py)  

- [macd_bb_v1](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/macd_bb_v1.py)  