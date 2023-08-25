## What are Executors?

Coming soon.

## Executor Types

### Position Executor

This component receives as input the strategy and `PositionConfig`, a new data type that includes the information needed to start a directional position on a perpetuals exchange that utilizes the [triple barrier method](https://www.mlfinlab.com/en/latest/labeling/tb_meta_labeling.html) popularized in [Advances in Financial Machine Learning](https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086) by Martin Prado.

In future releases, we aim to extend this component to spot exchanges.

Watch this recording from a recent [community call](/#community-calls) to learn how to use this feature:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/X63rACPjtUE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Class Initializer

The `PositionExecutor` class inherits from `SmartComponentBase`, which provides basic functionalities for interacting with exchanges.

When an instance of `PositionExecutor` is created, it expects two arguments:

- `strategy`: an instance of `ScriptStrategyBase` that defines the trading strategy.
- `position_config`: an instance of `PositionConfig` that includes parameters such as trading pair, amount, entry price, etc.

The class initializer checks if at least one of the `take_profit`, `stop_loss`, or `time_limit` parameters in `position_config` is set. If not, it raises an error. It also checks if `time_limit_order_type` and `stop_loss_order_type` are market orders, as it currently only supports market orders for these parameters.

It also initializes several instance variables related to order tracking.

#### Class Properties

The `PositionExecutor` class includes many properties that return important information about the current trade. Some of these properties include:

- `executor_status`: The current status of the executor.
- `is_closed`: Whether the executor is closed.
- `is_perpetual`: Whether the position is perpetual.
- `position_config`: The configuration of the position.
- `exchange`: The exchange where the position is taken.
- `trading_pair`: The trading pair of the position.
- `amount`: The amount of the position.
- `filled_amount`: The amount of the order that has been filled.
- `entry_price`: The price at which the position was entered.
- `trailing_stop_config`: The configuration for trailing stop.
- `close_price`: The price at which the position was closed.
- `trade_pnl`: The profit and loss of the trade.
- `trade_pnl_quote`: The profit and loss of the trade in quote currency.
- `net_pnl_quote`: The net profit and loss of the trade in quote currency.
- `net_pnl`: The net profit and loss of the trade.
- `cum_fee_quote`: The cumulative fee in quote currency.
- `end_time`: The time when the position will be closed.
- `side`: The side of the trade (buy or sell).
- `open_order_type`: The type of the open order.
- `take_profit_order_type`: The type of the take profit order.
- `stop_loss_order_type`: The type of the stop loss order.
- `time_limit_order_type`: The type of the time limit order.
- `stop_loss_price`: The price at which the stop loss order will be triggered.
- `take_profit_price`: The price at which the take profit order will be triggered.
- `open_order`: The open order.
- `close_order`: The close order.
- `take_profit_order`: The take profit order.

#### Instance Methods

`PositionExecutor` class includes several instance methods to control and monitor the trading position:

- `take_profit_condition`: Returns whether the take profit condition has been met.
- `stop_loss_condition`: Returns whether the stop loss condition has been met.
- `time_limit_condition`: Returns whether the time limit condition has been met.
- `on_start`: Checks the budget when the position is started.
- `on_stop`: Handles actions when the position is stopped.
- `control_task`: Controls the task based on the executor status.
- `control_open_order`: Controls the open order.
- `place_open_order`: Places the open order.
- `control_open_order_expiration`: Controls the expiration of the open order.
- `control_barriers`: Controls the stop loss and take profit barriers.
- `place_close_order`: Places the close order.
- `control_stop_loss`: Controls the stop loss order.
- `control_take_profit`: Controls the take profit order.
- `control_time_limit`: Controls the time limit order.
- `place_take_profit_limit_order`: Places the take profit limit order.
- `renew_take_profit_order`: Renews the take profit order.
- `remove_take_profit`: Removes the take profit order.
- `early_stop`: Executes an early stop of the position.
- `process_order_created_event`: Processes the order created event.
- `process_order_completed_event`: Processes the order completed event.
- `process_order_canceled_event`: Processes the order cancelled event.
- `process_order_filled_event`: Processes the order filled event.
- `process_order_failed_event`: Processes the order failed event.
- `to_format_status`: Formats the status of the position.
- `trailing_stop_condition`: Checks the trailing stop condition.
- `activation_price_condition`: Checks the activation price condition.
- `update_trailing_stop_price`: Updates the trailing stop price.
- `check_budget`: Checks the budget for opening a position.
- `adjust_order_candidate`: Adjusts the order candidate.

Overall, `PositionExecutor` is a sophisticated class for managing trading positions in the Hummingbot library. It offers a wide range of features to control and monitor trades, making it a key component of automated trading strategies.

### Arbitrage Executors

Coming soon.

## Smart Components?

[Smart Components](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/smart_components) are tools you can use to create automatic, standalone logic for any Script.

The first Smart Component is the [PositionExecutor](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/position_executor/position_executor.py), part of the Directional Framework introduced in version [1.13.0](/release-notes/1.13.0/#directional-framework) that combines this feature along with [Candles Feed](./candles-feed.md) to let users create TA-based strategies.

### Base Class

`SmartComponentBase` is a base class you can use to build smart components that interact with the market in your own way. It helps manage trades and react to market events.

Here are some key points about the `SmartComponentBase` class:

- **Initialization**: When an instance of the class is created, it takes in a strategy, a list of connectors, and an optional update interval. The strategy is an instance of `ScriptStrategyBase` and it dictates the overall trading strategy of the bot. The connectors are names of the exchanges or markets the bot will operate in. The update interval is a float value that determines how often the control loop of the component updates (default is 0.5 seconds). 

- **Event Forwarders**: The class uses `SourceInfoEventForwarder` objects to process various types of events related to trading, such as orders being created, filled, canceled, completed, or failed. These forwarders are used to handle events generated from the different markets the bot is operating in.

- **Control Loop**: The class contains a control loop (a coroutine named `control_loop`) that is started when an instance is created. This loop continues running until it's terminated and while it's running, it calls the `control_task` method at the update interval defined during initialization. The control loop changes the status of the component and calls `on_start` and `on_stop` methods when it starts and stops respectively.

- **Market Interactions**: The class has methods to interact with the markets, such as placing an order (`place_order`), getting the price of a trading pair (`get_price`), retrieving the order book (`get_order_book`), checking the balance of an asset (`get_balance`), getting available balance (`get_available_balance`), and getting active orders (`get_active_orders`).

- **Event Processing**: There are also methods to process different types of events that the forwarders handle. These are `process_order_completed_event`, `process_order_created_event`, `process_order_canceled_event`, `process_order_filled_event`, and `process_order_failed_event`. These methods are currently not implemented in the base class and are expected to be implemented in a subclass.

This class is designed to be subclassed, with subclasses providing specific implementations for things like the `control_task` method and the event processing methods. It's a key component of the Hummingbot library, providing a foundation for creating sophisticated, automated trading strategies.
