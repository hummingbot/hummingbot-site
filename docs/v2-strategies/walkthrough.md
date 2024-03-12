# Strategies V2 Use Cases


| **Strategies V2 Simple**                                                                 | **Strategies V2 + Controller**                                                                 |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| The strategy is relatively simple                                                    | You want to manage the risk and diversify your portfolio in different controllers           |
| The logic is very standard across different trading pairs                             | The strategy is complex and you want to isolate the decision making                         |
| The strategy only trades on one trading pair                                          | You want to try multiple configs in the same bot                                            |
| You are getting started with executors and you want a simple way to code your strategy | The strategy trades on multiple trading pairs                                               |
| Prototype a strategy                                                                  | You are familiar with the Strategy V2 and how the controllers interact with it              |




## Simple Strategy V2 

![simple](diagrams/9.png)

In this example, we'll show you how to create a script config and run the [**v2_simple_directional_rsi.py**](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_simple_directional_rsi.py) strategy. This strategy executes trades based on the RSI indicator's signals, creating buy actions when the RSI is below a low threshold (indicating oversold conditions) and sell actions when the RSI is above a high threshold (indicating overbought conditions). 

It also includes logic to stop actions based on the opposite signals. It also incorporates a risk management approach using a **triple barrier configuration**, which includes stop loss, take profit, and a time limit for each trade.


### Create script config

To create a script configuration file for the **v2_simple_directional_rsi.py** script, launch Hummingbot and execute:

[![script config](../diagrams/21.png)](../diagrams/21.png)


```shell
create --script-config v2_simple_directional_rsi
```

```shell
Enter markets in format exchange1.tp1,tp2:exchange2.tp1,tp2 >> binance_perpetual.JASMY-USDT,RLC-USDT
Enter the RSI period >> 14
Enter the RSI low >> 30
Enter the RSI high >> 70
Enter the interval >> 3m
Enter the amount of quote asset to be used per order >> 30
Enter the leverage >> 20
Enter the position mode (HEDGE/ONEWAY): >> HEDGE
Enter the stop loss >> 0.03
Enter the take profit >> 0.01 
Enter the time limit in seconds >> 2700
Enter a new file name for your configuration >> conf_v2_simple_directional_rsi_1.yml
```

This command auto-completes with scripts from the local `/scripts` directory that are configurable. You'll be prompted to specify strategy parameters, which are then saved in a YAML file within the `conf/scripts` directory. 


### Run the script 

[![controller](../diagrams/22.png)](../diagrams/22.png)

```shell
start --script v2_simple_directional_rsi.py --conf conf_v2_simple_directional_rsi_1.yml
```

The bot should now be running and start placing orders for both pairs. Run the **status** command to see the bot status.

```
status --live
```

---

## Strategies V2 + Controller(s)

![advanced](diagrams/11.png)


In this scenario, let's say we want to create a single bot that manages two distinct trading pairs on **Binance Perpetual**, each configured with unique buy and sell spreads. To achieve this, we can utilize the [**v2_generic_with_controllers.py**](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_generic_with_controllers.py) script alongside the [**pmm_simple.py**](https://github.com/hummingbot/hummingbot/blob/development/controllers/market_making/pmm_simple.py) controller. The initial step involves generating a separate controller configuration for each trading pair.


### Create the controller configs

[![controller](../diagrams/15.png)](../diagrams/15.png)

```shell
create --controller-config market.making.pmm_simple
```

```shell

Enter the name of the exchange to trade on >> binance_perpetual
Enter the name of the trading pair to trade on >> WLD-USDT
Enter the total amount in quote asset to use for trading >> 100
Enter a comma-separated list of buy spreads >> 0.01, 0.02
Enter a comma-separated list of sell spreads >> 0.01, 0.02
Enter the refresh time in seconds for executors >> 20
Set the leverage to use for trading >> 20
Enter the stop loss >> 0.03
Enter the take profit >> 0.02 
Enter the time limit in seconds >> 2700
Enter the order type for taking profit >> LIMIT
Enter the trailing stop as activation_price, trailing_delta >> 0.013, 0.003
Enter a file name for your configuration >> conf_market_making.pmm_simple_1.yml

```

This will create the **conf_market_making.pmm_simple_1.yml** controller config file under the **conf/controllers** folder 

Repeat the steps to create a new controller config, but this time, use **MYRO-USDT** as the trading pair. 

Also, adjust the buy and sell spreads to **0.02, 0.05**, and **0.02, 0.05**, respectively. Save this modified configuration under the file name **conf_market_making.pmm_simple_2.yml**

You should now have two controller config files: 

```shell
conf_market_making.pmm_simple_1.yml
conf_market_making.pmm_simple_2.yml
```

### Create the generic script config

[![script-config](../diagrams/16.png)](../diagrams/16.png)

```
create --script-config v2_generic_with_controllers

```



```python
Enter controller configurations >>> conf_market_making.pmm_simple_1.yml, conf_market_making.pmm_simple_2.yml
Enter a new file name for your configuration >>> conf_v2_generic_with_controllers_1.yml

```

### Start the script 

[![script-config](../diagrams/17.png)](../diagrams/17.png)

```
start --script v2_generic_with_controllers.py --conf conf_v2_generic_with_controllers_1.yml
```

The bot should now be running and start placing orders for both pairs. Run the **status** command to see the bot status.

```
status --live
```

[![status](../diagrams/20.png)](../diagrams/20.png)

### Changing Configs

Let's say we want to modify the script config and add a third controller config that we created using the **dman_v3** directional controller. 

Open a terminal and make sure you are inside the Hummingbot folder and then enter the command below: 

```
nano conf/scripts/conf_v2_generic_with_controllers_1.yml
```

[![script-config](../diagrams/18.png)](../diagrams/18.png)

```shell
markets: {}
candles_config: []
controllers_config:
- conf_market_making.pmm_simple_1.yml
- conf_market_making.pmm_simple_2.yml
config_update_interval: 60
script_file_name: v2_generic_with_controllers.py
```

This will open up nano - a Linux text editor.  Add **-conf_directional_trading.dman_v3_1.yml** or whatever you named your controller config file to the list of controller configs then press <kbd>CTRL</kbd> + <kbd>O</kbd> to save, then <kbd>CTRL</kbd> + <kbd>X</kbd> to exit.

If you don't have or are not familiar with **nano** you can also use **VSCode** or any other text / IDE editor you are familiar with. Just browse to the **/conf/scripts** folder to edit the script config file. 


Let's say we want to modify the controller configs to increase / decrease the spreads or adjust the refresh time. The controller config files are under the **conf/controllers** folder within Hummingbot so if using nano again as our text editor we can open a terminal, browse to the Hummingbot folder then enter the command below:

```
nano conf/controllers/conf_market_making.pmm_simple_1.yml
```

[![script-config](../diagrams/19.png)](../diagrams/19.png)

```shell
id: EsRCab7Lw3CwqtBe524QvzG5i7ZDWJzoX787ZncknFoy
controller_name: pmm_simple
controller_type: market_making
candles_config: []
connector_name: binance_perpetual
trading_pair: WLD-USDT
total_amount_quote: 100.0
buy_spreads:
- 0.01
- 0.02
sell_spreads:
- 0.01
- 0.02
buy_amounts_pct: null
sell_amounts_pct: null
executor_refresh_time: 20
cooldown_time: 15
leverage: 20
position_mode: HEDGE
stop_loss: 0.03
take_profit: 0.02
time_limit: 2700
take_profit_order_type: 2
trailing_stop:
  activation_price: 0.013
  trailing_delta: 0.003


```


Just replace the **conf_market_making.pmm_simple_1.yml** with the actual controller config name you want to modify. Make the necessary changes you want here then press <kbd>CTRL</kbd> + <kbd>O</kbd> to save, then <kbd>CTRL</kbd> + <kbd>X</kbd> to exit.

One cool feature of the new Strategies V2 framework is that the configs are **dynamic** so let's say you made changes to the buy / ask spreads, once you save the changes you'll see the spreads change on the next refresh. 