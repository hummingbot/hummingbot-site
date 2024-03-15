Scripts are the entry point for Hummingbot strategies. They enable Hummingbot users to build customized strategies using the [Strategy V2](/strategies) framework, and access the full power of Hummingbot exchange connectors in a few lines of Python code.

!!! note Restart Hummingbot
     Should your script run into an error, it's crucial that you exit Hummingbot entirely, correct or debug the faulty script, and then restart Hummingbot. The stop command won't rectify the issue in case of an error. To get back on track, a complete shutdown and subsequent relaunch of Hummingbot is required.

## Script Examples

See [Script Examples](examples.md) for a list of the current sample scripts in the Hummingbot codebase. These examples show you how to:

- Execute V2 strategies
- Download order book data
- Download historical candles data
- Place orders
- Use the rate oracle
- Call exchange APIs
- And much more!

We welcome new sample script contributions from users! To submit a contribution, please follow the [Contribution Guidelines](../developers/contributions.md).

## Script Configuration Files

Scripts can be created both with and without [config files](/client/config-files/).

To create a configuration file for your script, execute:

```shell
create --script-config [SCRIPT_FILE]
```

This command auto-completes with scripts from the local `/scripts` directory that are configurable. You'll be prompted to specify strategy parameters, which are then saved in a YAML file within the `conf/scripts` directory. To run the script, use:

```shell
start --script [SCRIPT_FILE] --conf [SCRIPT_CONFIG_FILE]
```

Auto-complete will suggest config files from the local `/conf/scripts` directory.

## Developing Scripts

### Base Classes

Scripts that use the Strategy V2 framework inherit from the [StrategyV2Base](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/strategy/strategy_v2_base.py) class. These scripts allow the user to create a config file with parameters.

Other scripts, including simple examples and older scripts, inherit from the [ScriptStrategyBase](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/strategy/script_strategy_base.py) class. These scripts define their parameters in the script code and do not expose config parameters.

### Config Parameters (V2 only)

To add parameters, extend the `StrategyV2ConfigBase` class to defines a set of configuration parameters that are stored in a config file. Questions marked `prompt_on_new` are displayed wben the config file is created from the client.

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

This method acts as the script's heartbeat, is called regularly, and is responsible for starting [executor handlers](../executor-handlers/) if they have not been started already. It allows the strategy to adapt to new market conditions in real time.

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

## PMM Scripts (deprecated)

[PMM Scripts](/scripts/pmm-scripts/) were an early experiment to let users customize Hummingbot, but they can only be used with the Pure Market Making V1 strategy.

While the [examples](https://github.com/hummingbot/hummingbot/tree/master/pmm_scripts) remain in the codebase, this feature are no longer maintained.


