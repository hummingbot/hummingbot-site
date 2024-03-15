Scripts enable Hummingbot users to build customized strategies and access the full power of Hummingbot exchange connectors in a few lines of Python code.

Introduced in version [1.4.0](../release-notes/1.4.0.md), Script are light Python files that can be run and modified without re-compilation, so users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface.

Scripts can be created without configuration files, so only a single file is needed. Scripts can access all the raw data, events, and methods in Hummingbot connectors, as well as other features such as the Rate Oracle.

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

For newcomers, the journey begins with the [V2 Script](../scripts/index.md), a Python file that outlines configuration parameters and connects users with their strategies. 


## Generating a Script Configuration File

To create a configuration file for your script, execute:

```shell
create --script-config [SCRIPT_FILE]
```

This command auto-completes with scripts from the local `/scripts` directory that are configurable. You'll be prompted to specify strategy parameters, which are then saved in a YAML file within the `conf/scripts` directory. To run the script, use:

```shell
start --script [SCRIPT_FILE] --conf [SCRIPT_CONFIG_FILE]
```

Auto-complete will suggest config files from the local `/conf/scripts` directory.

## PMM Scripts (deprecated)

[PMM Scripts](/scripts/pmm-scripts/) were an early experiment to let users customize Hummingbot, but they can only be used with the Pure Market Making V1 strategy.

While the [examples](https://github.com/hummingbot/hummingbot/tree/master/pmm_scripts) remain in the codebase, this feature are no longer maintained.
