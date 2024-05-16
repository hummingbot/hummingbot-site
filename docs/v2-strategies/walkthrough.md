Below, we provide a walkthrough to illustrate the StrategyV2 framework, which we recommend for new users who want to understand how the framework works.

![simple](diagrams/9.png)

## What we'll cover

In this example, we'll show you how to configure and run a simple directional trading strategy using the [v2_directional_rsi.py](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_directional_rsi.py) starter script.

This strategy executes trades on a spot or perpetual exchange based on the RSI signals from the [Market Data Provider](/v2-strategies/data/), creating buy actions when the RSI is below a low threshold (indicating oversold conditions) and sell actions when the RSI is above a high threshold (indicating overbought conditions).  

After each trade, the strategy utilizes the [Position Executor](/v2-strategies/executors/positionexecutor/) component, which uses a triple barrier configuration to manage the P&L of the position or filled order.

## Create script config

[![script config](../diagrams/21.png)](../diagrams/21.png)

First, let's create a script config file that defines the key strategy parameters.

Launch Hummingbot and execute the command below to generate your script configuration:

```shell
create --script-config v2_directional_rsi
```

This command auto-completes with the subset of configurable scripts from the local `/scripts` directory.

You'll be prompted to specify the strategy parameters, which are then saved in a YAML file within the `conf/scripts` directory:

```python
Exchange where the bot will trade >> hyperliquid_perpetual
Trading pair where the bot will trade >> ETH-USD
Candles exchange used to calculate RSI >> binance_perpetual
Candles trading pair used to calculate RSI >> ETH-USDT
Candle interval (e.g. 1m for 1 minute) >> 1m
Number of candles used to calculate RSI (e.g. 60) >> 60
RSI lower bound to enter long position (e.g. 30) >> 30
RSI upper bound to enter short position (e.g. 70) >> 70
Order amount in quote asset >> 30
Leverage (e.g. 10 for 10x) >> 10
Position mode (HEDGE/ONEWAY) >> ONEWAY
Enter a new file name for your configuration >> conf_v2_directional_rsi_1.yml
```

## Run the script 

[![controller](../diagrams/22.png)](../diagrams/22.png)

Execute the command below to start the script:

```shell
start --script v2_directional_rsi.py --conf conf_v2_directional_rsi_1.yml
```

The strategy makes a series of market checks and initializes the market data provider. Afterwards, it should start placing orders for both pairs. 

## Check status and performance

Run the [Status](/client/status/) command to see the status (asset balances, active orders and positions) of the running strategy:

[![status](../diagrams/23.png)](../diagrams/23.png)

After there have been trades, you can use the [History](/client/history) to see your bot's performance.

## Next steps

We encourage you check out [Dashboard](/dashboard), the new entry point for Hummingbot users that will be officially launched at the [Hummingbot 2.0 launch event](https://lu.ma/ieyvhcft).

Also, see [Walkthrough - Controller](./walkthrough-controller.md) to learn how to run scripts that deploy strategies as [Controllers](/v2-strategies/controllers).
