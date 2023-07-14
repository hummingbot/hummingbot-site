## Introduction to Smart Components

[Smart Components](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/smart_components) are tools you can use to create automatic, standalone logic for any Script.

### The Basics of SmartComponentBase

`SmartComponentBase` is a base class you can use to build smart components that interact with the market in your own way. It helps manage trades and react to market events.

Here's what you need to know about `SmartComponentBase`:

- **Setup**: When you make a `SmartComponentBase` instance, it needs a strategy, a list of connectors, and an optional update frequency. The strategy guides the bot's trading, the connectors are the markets the bot works in, and the update frequency is how often the bot updates its status.

- **Event Handlers**: `SmartComponentBase` uses `SourceInfoEventForwarder` objects to handle different trading events.

- **Control Loop**: This is a loop that runs when you make a `SmartComponentBase` instance. It updates the bot's status at your set frequency and can start and stop methods.

- **Market Interaction**: `SmartComponentBase` has methods for placing orders, checking prices, checking balances, and more.

- **Event Processing**: There are methods for handling different types of events. These methods aren't built into the base class, so you have to implement them in a subclass.

`SmartComponentBase` is designed to be subclassed. It's a key part of the Hummingbot library and helps create automated trading strategies.

### Introduction to Position Executor

The first Smart Component is the [PositionExecutor](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/position_executor/position_executor.py). It's part of the Directional Framework that was introduced in version [1.13.0](/release-notes/1.13.0/#directional-framework). It works with [Candles Feed](./candles-feed.md) to help users create TA-based strategies.

The PositionExecutor uses a strategy and `PositionConfig` as input. `PositionConfig` is a new data type that has the information needed to start a directional position on an exchange. We plan to expand this to spot exchanges in the future.

You can learn how to use this feature in a recent [community call](/#community-calls):

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/X63rACPjtUE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Getting Started with PositionExecutor

`PositionExecutor` inherits from `SmartComponentBase` and uses its basic functions for exchange interactions. When you create an instance, it needs a strategy and a `PositionConfig`.

The `PositionExecutor` checks if at least one of the `take_profit`, `stop_loss`, or `time_limit` parameters in `PositionConfig` is set. If not, it gives an error. It also checks if `time_limit_order_type` and `stop_loss_order_type` are market orders, as it currently only supports market orders for these parameters.

#### Features of PositionExecutor

`PositionExecutor` has many properties that give information about the current trade, including:

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

#### Using PositionExecutor

`PositionExecutor` has several methods to control and monitor the trading position:

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


In summary, `PositionExecutor` is a complex class for managing trading positions in the Hummingbot library. It has many features for controlling and monitoring trades, making it a key part of automated trading strategies.