The Strategy V2 framework is built on a foundation of interlocking components that can be combined with one another to create powerful trading strategies. 

The most important components to understand are:

* **Script**: Defines the strategy logic using the components below
* [**Executors**](./executors/index.md): Components that manages orders and positions based on pre-defined user settings, ensuring that orders are placed, modified, or canceled according to the strategy's instructions.
* [**Controllers**](./controllers/index.md): Defines a trading strategy based on a controller base class.
* [**Market Data Provider**](./data/index.md): Provides access to exchange market data such as historical OHCLV [Candles](./candles/index.md), order book data, and trades.

## StrategyV2 Script

[![](./diagrams/14.png)](./diagrams/14.png)

The entry point for StrategyV2 is a Hummingbot script that inherits from the [StrategyV2Base](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/strategy/strategy_v2_base.py) class. See [Sample Scripts](/v2-strategies/examples) for examples.

### Script Configs

To add user-defined parameters to your script, extend the `StrategyV2ConfigBase` class to defines a set of configuration parameters that are stored in a config file. Questions marked `prompt_on_new` are displayed wben the config file is created from the client.

```python
    markets: Dict[str, Set[str]] = Field(
        default="binance_perpetual.JASMY-USDT,RLC-USDT",
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: (
                "Enter markets in format 'exchange1.tp1,tp2:exchange2.tp1,tp2':"
            )
        )
    )
    candles_config: List[CandlesConfig] = Field(
        default="binance_perpetual.JASMY-USDT.1m.500:binance_perpetual.RLC-USDT.1m.500",
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: (
                "Enter candle configs in format 'exchange1.tp1.interval1.max_records:"
                "exchange2.tp2.interval2.max_records':"
            )
        )
    )
```

### `on_tick` method

This method acts as the strategy's heartbeat, is called regularly, and allows the strategy to adapt to new market conditions in real time.

```python
def on_tick(self):
    for executor_handler in self.executor_handlers.values():
        if executor_handler.status == ExecutorHandlerStatus.NOT_STARTED:
            executor_handler.start()
```

### `format_status` method

This overrides the standard `status` function and provides a formatted string representing the current status of the strategy, including the name, trading pair, and status of each executor.

Users can customize this function to display their custom strategy variables.

```python
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

!!! tip Learn to Develop Algo Trading Strategies
    To gain a deeper understanding of Hummingbot strategies along with access to the latest framework updates, sign up for [Botcamp](https://www.botcamp.xyz), which teaches you how to design and deploy advanced algo trading and market making strategies using Hummingbot's Strategy V2 framework.
