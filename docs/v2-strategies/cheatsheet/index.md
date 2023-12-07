## **DManV3 - Mean Reversion**

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

```Python
from decimal import Decimal
from typing import Dict

from hummingbot.connector.connector_base import ConnectorBase
from hummingbot.core.data_type.common import OrderType, PositionAction, PositionSide
from hummingbot.data_feed.candles_feed.candles_factory import CandlesConfig
from hummingbot.smart_components.controllers.dman_v3 import DManV3, DManV3Config
from hummingbot.smart_components.strategy_frameworks.data_types import ExecutorHandlerStatus, TripleBarrierConf
from hummingbot.smart_components.strategy_frameworks.market_making.market_making_executor_handler import (
    MarketMakingExecutorHandler,
)
from hummingbot.smart_components.utils.distributions import Distributions
from hummingbot.smart_components.utils.order_level_builder import OrderLevelBuilder
from hummingbot.strategy.script_strategy_base import ScriptStrategyBase


class DManV3MultiplePairs(ScriptStrategyBase):
    # Account configuration
    exchange = "binance"
    trading_pairs = ["ETH-USDT"]
    leverage = 10

    # Candles configuration
    candles_exchange = "binance"
    candles_interval = "1h"
    candles_max_records = 300
    bollinger_band_length = 200
    bollinger_band_std = 3.0

    # Orders configuration
    order_amount = Decimal("25")
    n_levels = 5
    start_spread = 0.5  # percentage of the bollinger band (0.5 means that the order will be between the bollinger mid-price and the upper band)
    step_between_orders = 0.3  # percentage of the bollinger band (0.1 means that the next order will be 10% of the bollinger band away from the previous order)

    # Triple barrier configuration
    stop_loss = Decimal("0.01")
    take_profit = Decimal("0.03")
    time_limit = 60 * 60 * 6
    trailing_stop_activation_price_delta = Decimal("0.008")
    trailing_stop_trailing_delta = Decimal("0.004")

    # Advanced configurations
    side_filter = True
    dynamic_spread_factor = True
    dynamic_target_spread = False
    smart_activation = False
    activation_threshold = Decimal("0.001")

    # Applying the configuration
    order_level_builder = OrderLevelBuilder(n_levels=n_levels)
    order_levels = order_level_builder.build_order_levels(
        amounts=order_amount,
        spreads=Distributions.arithmetic(n_levels=n_levels, start=start_spread, step=step_between_orders),
        triple_barrier_confs=TripleBarrierConf(
            stop_loss=stop_loss, take_profit=take_profit, time_limit=time_limit,
            trailing_stop_activation_price_delta=trailing_stop_activation_price_delta,
            trailing_stop_trailing_delta=trailing_stop_trailing_delta),
    )
    controllers = {}
    markets = {}
    executor_handlers = {}

    for trading_pair in trading_pairs:
        config = DManV3Config(
            exchange=exchange,
            trading_pair=trading_pair,
            order_levels=order_levels,
            candles_config=[
                CandlesConfig(connector=candles_exchange, trading_pair=trading_pair,
                              interval=candles_interval, max_records=candles_max_records),
            ],
            bb_length=bollinger_band_length,
            bb_std=bollinger_band_std,
            side_filter=side_filter,
            dynamic_spread_factor=dynamic_spread_factor,
            dynamic_target_spread=dynamic_target_spread,
            smart_activation=smart_activation,
            activation_threshold=activation_threshold,
            leverage=leverage,
        )
        controller = DManV3(config=config)
        markets = controller.update_strategy_markets_dict(markets)
        controllers[trading_pair] = controller

    def __init__(self, connectors: Dict[str, ConnectorBase]):
        super().__init__(connectors)
        for trading_pair, controller in self.controllers.items():
            self.executor_handlers[trading_pair] = MarketMakingExecutorHandler(strategy=self, controller=controller)

    @property
    def is_perpetual(self):
        """
        Checks if the exchange is a perpetual market.
        """
        return "perpetual" in self.exchange

    def on_stop(self):
        if self.is_perpetual:
            self.close_open_positions()
        for executor_handler in self.executor_handlers.values():
            executor_handler.stop()

    def close_open_positions(self):
        # we are going to close all the open positions when the bot stops
        for connector_name, connector in self.connectors.items():
            for trading_pair, position in connector.account_positions.items():
                if trading_pair in self.markets[connector_name]:
                    if position.position_side == PositionSide.LONG:
                        self.sell(connector_name=connector_name,
                                  trading_pair=position.trading_pair,
                                  amount=abs(position.amount),
                                  order_type=OrderType.MARKET,
                                  price=connector.get_mid_price(position.trading_pair),
                                  position_action=PositionAction.CLOSE)
                    elif position.position_side == PositionSide.SHORT:
                        self.buy(connector_name=connector_name,
                                 trading_pair=position.trading_pair,
                                 amount=abs(position.amount),
                                 order_type=OrderType.MARKET,
                                 price=connector.get_mid_price(position.trading_pair),
                                 position_action=PositionAction.CLOSE)

    def on_tick(self):
        """
        This shows you how you can start meta controllers. You can run more than one at the same time and based on the
        market conditions, you can orchestrate from this script when to stop or start them.
        """
        for executor_handler in self.executor_handlers.values():
            if executor_handler.status == ExecutorHandlerStatus.NOT_STARTED:
                executor_handler.start()

    def format_status(self) -> str:
        if not self.ready_to_trade:
            return "Market connectors are not ready."
        lines = []
        for trading_pair, executor_handler in self.executor_handlers.items():
            lines.extend(
                [f"Strategy: {executor_handler.controller.config.strategy_name} | Trading Pair: {trading_pair}",
                 executor_handler.to_format_status()])
        return "\n".join(lines)
```

## Perp Script Example

```Python
from decimal import Decimal
from typing import Dict

from hummingbot.connector.connector_base import ConnectorBase
from hummingbot.core.data_type.common import OrderType, PositionAction, PositionSide
from hummingbot.data_feed.candles_feed.candles_factory import CandlesConfig
from hummingbot.smart_components.controllers.dman_v3 import DManV3, DManV3Config
from hummingbot.smart_components.strategy_frameworks.data_types import ExecutorHandlerStatus, TripleBarrierConf
from hummingbot.smart_components.strategy_frameworks.market_making.market_making_executor_handler import (
    MarketMakingExecutorHandler,
)
from hummingbot.smart_components.utils.distributions import Distributions
from hummingbot.smart_components.utils.order_level_builder import OrderLevelBuilder
from hummingbot.strategy.script_strategy_base import ScriptStrategyBase


class DManV3MultiplePairs(ScriptStrategyBase):
    # Account configuration
    exchange = "binance_perpetual"
    trading_pairs = ["ETH-USDT"]
    leverage = 10

    # Candles configuration
    candles_exchange = "binance_perpetual"
    candles_interval = "1h"
    candles_max_records = 300
    bollinger_band_length = 200
    bollinger_band_std = 3.0

    # Orders configuration
    order_amount = Decimal("25")
    n_levels = 5
    start_spread = 0.5  # percentage of the bollinger band (0.5 means that the order will be between the bollinger mid-price and the upper band)
    step_between_orders = 0.3  # percentage of the bollinger band (0.1 means that the next order will be 10% of the bollinger band away from the previous order)

    # Triple barrier configuration
    stop_loss = Decimal("0.01")
    take_profit = Decimal("0.03")
    time_limit = 60 * 60 * 6
    trailing_stop_activation_price_delta = Decimal("0.008")
    trailing_stop_trailing_delta = Decimal("0.004")

    # Advanced configurations
    side_filter = True
    dynamic_spread_factor = True
    dynamic_target_spread = False
    smart_activation = False
    activation_threshold = Decimal("0.001")

    # Applying the configuration
    order_level_builder = OrderLevelBuilder(n_levels=n_levels)
    order_levels = order_level_builder.build_order_levels(
        amounts=order_amount,
        spreads=Distributions.arithmetic(n_levels=n_levels, start=start_spread, step=step_between_orders),
        triple_barrier_confs=TripleBarrierConf(
            stop_loss=stop_loss, take_profit=take_profit, time_limit=time_limit,
            trailing_stop_activation_price_delta=trailing_stop_activation_price_delta,
            trailing_stop_trailing_delta=trailing_stop_trailing_delta),
    )
    controllers = {}
    markets = {}
    executor_handlers = {}

    for trading_pair in trading_pairs:
        config = DManV3Config(
            exchange=exchange,
            trading_pair=trading_pair,
            order_levels=order_levels,
            candles_config=[
                CandlesConfig(connector=candles_exchange, trading_pair=trading_pair,
                              interval=candles_interval, max_records=candles_max_records),
            ],
            bb_length=bollinger_band_length,
            bb_std=bollinger_band_std,
            side_filter=side_filter,
            dynamic_spread_factor=dynamic_spread_factor,
            dynamic_target_spread=dynamic_target_spread,
            smart_activation=smart_activation,
            activation_threshold=activation_threshold,
            leverage=leverage,
        )
        controller = DManV3(config=config)
        markets = controller.update_strategy_markets_dict(markets)
        controllers[trading_pair] = controller

    def __init__(self, connectors: Dict[str, ConnectorBase]):
        super().__init__(connectors)
        for trading_pair, controller in self.controllers.items():
            self.executor_handlers[trading_pair] = MarketMakingExecutorHandler(strategy=self, controller=controller)

    @property
    def is_perpetual(self):
        """
        Checks if the exchange is a perpetual market.
        """
        return "perpetual" in self.exchange

    def on_stop(self):
        if self.is_perpetual:
            self.close_open_positions()
        for executor_handler in self.executor_handlers.values():
            executor_handler.stop()

    def close_open_positions(self):
        # we are going to close all the open positions when the bot stops
        for connector_name, connector in self.connectors.items():
            for trading_pair, position in connector.account_positions.items():
                if trading_pair in self.markets[connector_name]:
                    if position.position_side == PositionSide.LONG:
                        self.sell(connector_name=connector_name,
                                  trading_pair=position.trading_pair,
                                  amount=abs(position.amount),
                                  order_type=OrderType.MARKET,
                                  price=connector.get_mid_price(position.trading_pair),
                                  position_action=PositionAction.CLOSE)
                    elif position.position_side == PositionSide.SHORT:
                        self.buy(connector_name=connector_name,
                                 trading_pair=position.trading_pair,
                                 amount=abs(position.amount),
                                 order_type=OrderType.MARKET,
                                 price=connector.get_mid_price(position.trading_pair),
                                 position_action=PositionAction.CLOSE)

    def on_tick(self):
        """
        This shows you how you can start meta controllers. You can run more than one at the same time and based on the
        market conditions, you can orchestrate from this script when to stop or start them.
        """
        for executor_handler in self.executor_handlers.values():
            if executor_handler.status == ExecutorHandlerStatus.NOT_STARTED:
                executor_handler.start()

    def format_status(self) -> str:
        if not self.ready_to_trade:
            return "Market connectors are not ready."
        lines = []
        for trading_pair, executor_handler in self.executor_handlers.items():
            lines.extend(
                [f"Strategy: {executor_handler.controller.config.strategy_name} | Trading Pair: {trading_pair}",
                 executor_handler.to_format_status()])
        return "\n".join(lines)
```

## **DmanV2 - Market Making**

## Key Configs
## Spot Script Example
## Perp Script Example

## **Directional**

## Key Configs

- directional_strategy_name (str): The name of the strategy.

- trading_pair (str): The trading pair to be traded.

- exchange (str): The exchange to be used for trading.

- order_amount_usd (Decimal): The amount of the order in USD.

- leverage (int): The leverage to be used for trading.

## Spot Script Example

```Python
from decimal import Decimal

from hummingbot.data_feed.candles_feed.candles_factory import CandlesConfig, CandlesFactory
from hummingbot.strategy.directional_strategy_base import DirectionalStrategyBase


class RSI(DirectionalStrategyBase):

 directional_strategy_name: str = "RSI"
    # Define the trading pair and exchange that we want to use and the csv where we are going to store the entries
    trading_pair: str = "ETH-USDT"
    exchange: str = "binance"
    order_amount_usd = Decimal("40")
    leverage = 1

    # Configure the parameters for the position
    stop_loss: float = 0.0075
    take_profit: float = 0.015
    time_limit: int = 60 * 1
    trailing_stop_activation_delta = 0.004
    trailing_stop_trailing_delta = 0.001
    cooldown_after_execution = 10

    candles = [CandlesFactory.get_candle(CandlesConfig(connector=exchange, trading_pair=trading_pair, interval="3m", max_records=1000))]
    markets = {exchange: {trading_pair}}

    def get_signal(self):
        """
        Generates the trading signal based on the RSI indicator.
        Returns:
            int: The trading signal (-1 for sell, 0 for hold, 1 for buy).
        """
        candles_df = self.get_processed_df()
        rsi_value = candles_df.iat[-1, -1]
        if rsi_value > 70:
            return -1
        elif rsi_value < 30:
            return 1
        else:
            return 0

    def get_processed_df(self):
        """
        Retrieves the processed dataframe with RSI values.
        Returns:
            pd.DataFrame: The processed dataframe with RSI values.
        """
        candles_df = self.candles[0].candles_df
        candles_df.ta.rsi(length=7, append=True)
        return candles_df

    def market_data_extra_info(self):
        """
        Provides additional information about the market data to the format status.
        Returns:
            List[str]: A list of formatted strings containing market data information.
        """
        lines = []
        columns_to_show = ["timestamp", "open", "low", "high", "close", "volume", "RSI_7"]
        candles_df = self.get_processed_df()
        lines.extend([f"Candles: {self.candles[0].name} | Interval: {self.candles[0].interval}\n"])
        lines.extend(self.candles_formatted_list(candles_df, columns_to_show))
        return lines    

```

## Perp Script Example

```Python
from decimal import Decimal

from hummingbot.data_feed.candles_feed.candles_factory import CandlesConfig, CandlesFactory
from hummingbot.strategy.directional_strategy_base import DirectionalStrategyBase


class RSI(DirectionalStrategyBase):

 directional_strategy_name: str = "RSI"
    # Define the trading pair and exchange that we want to use and the csv where we are going to store the entries
    trading_pair: str = "ETH-USDT"
    exchange: str = "binance_perpetual"
    order_amount_usd = Decimal("40")
    leverage = 10

    # Configure the parameters for the position
    stop_loss: float = 0.0075
    take_profit: float = 0.015
    time_limit: int = 60 * 1
    trailing_stop_activation_delta = 0.004
    trailing_stop_trailing_delta = 0.001
    cooldown_after_execution = 10

    candles = [CandlesFactory.get_candle(CandlesConfig(connector=exchange, trading_pair=trading_pair, interval="3m", max_records=1000))]
    markets = {exchange: {trading_pair}}

    def get_signal(self):
        """
        Generates the trading signal based on the RSI indicator.
        Returns:
            int: The trading signal (-1 for sell, 0 for hold, 1 for buy).
        """
        candles_df = self.get_processed_df()
        rsi_value = candles_df.iat[-1, -1]
        if rsi_value > 70:
            return -1
        elif rsi_value < 30:
            return 1
        else:
            return 0

    def get_processed_df(self):
        """
        Retrieves the processed dataframe with RSI values.
        Returns:
            pd.DataFrame: The processed dataframe with RSI values.
        """
        candles_df = self.candles[0].candles_df
        candles_df.ta.rsi(length=7, append=True)
        return candles_df

    def market_data_extra_info(self):
        """
        Provides additional information about the market data to the format status.
        Returns:
            List[str]: A list of formatted strings containing market data information.
        """
        lines = []
        columns_to_show = ["timestamp", "open", "low", "high", "close", "volume", "RSI_7"]
        candles_df = self.get_processed_df()
        lines.extend([f"Candles: {self.candles[0].name} | Interval: {self.candles[0].interval}\n"])
        lines.extend(self.candles_formatted_list(candles_df, columns_to_show))
        return lines    

```

## **Configuring Candles**

## Initializing Candles

```python
class InitializingCandlesExample(ScriptStrategyBase):
    candles = CandlesFactory.get_candle("binance", "BTC-USDT", "3m")
    ...
```

## Configs

```python
CandlesFactory.get_candle(connector_name: str, trading_pair: str, interval:str = "1m", max_records:int = 500)
```
    - connector_name: Identifies the data source, like binance or binance_perpetual.
    - trading_pair: The trading pair in 'BASE-QUOTE' format, e.g., BTC-USDT.
    - interval: The time interval between candles.
    - max_records: Maximum number of candles to store.


## Using multiple candles

For scripts / strategies that require multiple candle intervals or trading pairs we can initialize separate instances:

```python
class InitializingCandlesExample(ScriptStrategyBase):
    candles_1 = CandlesFactory.get_candle("binance", "BTC-USDT", "3m")
    candles_2 = CandlesFactory.get_candle("binance_perpetual", "ETH-USDT", "1m")
    ...
```

## Accessing indicators

```python
candles_df.ta.rsi(length=14, append=True)
candles_df.ta.bbands(length=20, std=2, append=True)
candles_df.ta.ema(length=14, offset=None, append=True)
```

## Displaying candles in `status`

```Python
def format_status(self) -> str:
```
This method is designed to display the status of your trading strategy, including the latest candlestick data.

Here's how you can modify the method to display the one-hour candlestick data for ETH-USDT

```Python
def format_status(self) -> str:  
    if not self.ready_to_trade:
        return "Market connectors are not ready."

    lines = ["\n############################################ Market Data ############################################\n"]
    if self.eth_1h_candles.is_ready:
        candles_df = self.eth_1h_candles.candles_df
        # Format timestamp
        candles_df["timestamp"] = pd.to_datetime(candles_df["timestamp"], unit="ms").dt.strftime('%Y-%m-%d %H:%M:%S')
        # Select relevant columns for display
        display_columns = ["timestamp", "open", "high", "low", "close"]
        formatted_df = candles_df[display_columns].tail()  # Display last few records
        # Format the dataframe as a string for display
        lines.append("One-hour Candles for ETH-USDT:")
        lines.append(formatted_df.to_string(index=False))
        lines.append("\n-----------------------------------------------------------------------------------------------------------\n")
    else:
        lines.append("  One-hour candle data is not ready.")

    return "\n".join(lines)

```


## **Order Level Builder**

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

```python
order_level_builder = OrderLevelBuilder(n_levels=5)
order_levels = order_level_builder.build_order_levels(
    amounts=order_amount,
    spreads=Distributions.arithmetic(n_levels=5, start=0.5, step=0.3),
    # ... other configurations
)
```

## **PositionExecutor**

## Triple Barrier Configuration

- `stop_loss`: Determines the stop-loss percentage.
- `take_profit`: Sets the take-profit percentage.
- `time_limit`: Establishes a time limit for the trade.
- `trailing_stop_activation_price_delta`: Specifies the delta for activating a trailing stop.
- `trailing_stop_trailing_delta`: Sets the trailing delta for the trailing stop.


## Limit vs market order

The `PositionExecutor` requires `market_orders` for time_limit and stop_loss