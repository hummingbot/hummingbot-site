Below, we provide a walkthrough to illustrate the StrategyV2 framework, which we recommend for new users who want to understand how the framework works. Afterwards, check out [Walkrough - Controller](./walkthrough-controller.md) to learn how to run scripts that use Controllers.

![simple](diagrams/9.png)

## What we'll cover

In this example, we'll show you how to configure and run a simple directional trading strategy using the [v2_simple_directional_rsi.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_simple_directional_rsi.py) starter script.

This strategy executes trades on a spot or perpetual exchange based on the RSI signals from the [Market Data Provider](/v2-strategies/data/), creating buy actions when the RSI is below a low threshold (indicating oversold conditions) and sell actions when the RSI is above a high threshold (indicating overbought conditions).  

After each trade, the strategy utilizes the [Position Executor](/v2-strategies/executors/positionexecutor/) component, which uses a triple barrier configuration to manage the P&L of the position or filled order.

## Create script config

[![script config](../diagrams/21.png)](../diagrams/21.png)

First, let's create a script config file that defines the key strategy parameters.

Launch Hummingbot and execute the command below to generate your script configuration:

```shell
create --script-config v2_simple_directional_rsi
```

This command auto-completes with the subset of configurable scripts from the local `/scripts` directory.

You'll be prompted to specify the strategy parameters, which are then saved in a YAML file within the `conf/scripts` directory:

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

## Run the script 

[![controller](../diagrams/22.png)](../diagrams/22.png)

Execute the command below to start the script:

```shell
start --script v2_simple_directional_rsi.py --conf conf_v2_simple_directional_rsi_1.yml
```

The strategy makes a series of market checks and initializes the market data provider. Afterwards, it should start placing orders for both pairs. 

Run the `status` command to see the status (asset balances, active orders and positions) of the running strategy:

[![status](../diagrams/23.png)](../diagrams/23.png)