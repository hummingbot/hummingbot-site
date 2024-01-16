A config file allows you to define the parameters used in a YAML file. Later, you can modify the values of this file, share it with others, and and import it into your strategy.

## Where config files are stored

These configuration files created and used by Hummingbot are saved in the [`/conf`](https://github.com/hummingbot/hummingbot/tree/master/conf) directory of your instance, which you can edit directly with a standard text editor.

* `conf/scripts`: config files for V2 strategies and scripts
* `conf/strategies`: config files for V1 strategies

## Script config files

Starting in v1.24.0, [Scripts](/scripts) can define a `ScriptConfig` class that defines configuration parameters that users can store in a YAML file.

Both [V2 Scripts](/v2-strategies/v2-scripts) used to control V2 Strategies as well as more basic scripts can add this class. For example, here are the first few lines in the [sample script](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_dman_v3_with_config.py) which runs the DManV3 strategy:

```python
class DManV3ScriptConfig(BaseClientModel):
    script_file_name: str = Field(default_factory=lambda: os.path.basename(__file__))

    # Account configuration
    exchange: str = Field("binance_perpetual", client_data=ClientFieldData(prompt_on_new=True, prompt=lambda mi: "Enter the name of the exchange where the bot will operate (e.g., binance_perpetual):"))
    trading_pairs: str = Field("DOGE-USDT,INJ-USDT", client_data=ClientFieldData(prompt_on_new=True, prompt=lambda mi: "List the trading pairs for the bot to trade on, separated by commas (e.g., BTC-USDT,ETH-USDT):"))
    leverage: int = Field(20, client_data=ClientFieldData(prompt_on_new=True, prompt=lambda mi: "Set the leverage to use for trading (e.g., 20 for 20x leverage):"))
```

### Creating script config files

To create a V2 configuration file for a script, run `create` and add the `--script-config` flag. In the auto-complete dropdown, only the configurable scripts located in the [/scripts](https://github.com/hummingbot/hummingbot/tree/master/scripts) 
folder will be shown.

![](./create-script-config-autocomplete.png)

Afterwards, you will be presented with prompts and default values defined in the config class above.

![](./create-script-config.png)

The last prompt will ask you to enter a name for the config file, which is saved in `conf/scripts`.

### Starting configurable scripts

Run `start` with both `--script` and `--conf` flags to run a script with a configuration file.

![](./start-script-config.png)

## V1 Strategy config files

### Creating V1 config files

Run `create` command without the `--script-config` flag to create a [V1 Strategy](/v1-strategies) config file. The autocomplete command will display a list of the available V1 strategies, each one a folder in the [/hummingbot/strategy](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy) folder.

Next, answer the prompts to configure your bot's behavior depending on the strategy you want to use.

The last prompt will ask you to enter a name for the config file. You can also specify the name of your file at the beginning by running `create [file_name]` command.

![](/assets/img/create-file-name.png)

### Import an existing config file

1. Run `import` command
2. Enter the name of your strategy config file

![](/assets/img/import-command.png)

You can also skip the prompt by running `import [file_name]` command.

![](/assets/img/import-file-name.png)

**Sample usage**

```
>>>`import conf_pure_mm_1.yml`
Configuration from conf_pure_mm_1.yml file is imported.

Preliminary checks:
 - Exchange check: All connections confirmed.
 - Strategy check: All required parameters confirmed.
 -All checks: Confirmed.

Enter "start" to start market making

>>> start

```

### Config file templates

While Scripts are single files that contain the types and messages for their parameters, V1 Strategies have a separate pre-defined template configuration file defined by the strategy author. 

Each V1 strategy template can be found here: [Config Templates](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/templates).

