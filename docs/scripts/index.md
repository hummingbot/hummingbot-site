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

## Base Classes

Scripts that use the Strategy V2 framework inherit from the [StrategyV2Base](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/strategy/strategy_v2_base.py) class. These scripts allow the user to create a config file with parameters.

Other scripts, including simple examples and older scripts, inherit from the [ScriptStrategyBase](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/strategy/script_strategy_base.py) class. These scripts define their parameters in the script code and do not expose config parameters.

## PMM Scripts (deprecated)

[PMM Scripts](/scripts/pmm-scripts/) were an early experiment to let users customize Hummingbot, but they can only be used with the Pure Market Making V1 strategy.

While the [examples](https://github.com/hummingbot/hummingbot/tree/master/pmm_scripts) remain in the codebase, this feature are no longer maintained.
