## What is a Hummingbot Strategy?

![](../v2-strategies/diagrams/8.png)

Like a computer program, an algorithmic trading strategy is a set of automated processes that executes repeatedly:

- **Data Collection**: Gathering real-time data from various sources
- **Data Processing**: Analyzing data to identify patterns and make decisions
- **Order Execution**: Placing and cancelling orders based on processed data

A Hummingbot strategy loads market data directly from centralized and decentralized exchanges, adaptable to the unique features of each trading venue's WebSocket/REST APIs and nodes.

Each [clock tick](../global-configs/clock-tick.md), a strategy loads real-time order book snapshots, user balances, order status and other real-time data from trading pairs on these venues and executes the logic defined in the strategy, parametrized by a pre-defined user configuration.

To run a strategy, a user selects a strategy template, defines its input parameters in a [Config File](../client/config-files.md), and starts it with the `start` command in the Hummingbot client or via the command line with [Strategy Autostart](/global-configs/strategy-autostart/).

## Current Hummingbot Strategies

When it launched in 2019, Hummingbot pioneered the concept of configurable templates for algo trading strategies, such as market making strategies based on the Avellaneda & Stoikov paper.

Initially, strategies were confined to individual bots, complicating the management and scaling across various scenarios, and they lacked the capability to use historical market data, which forced traders to rely solely on real-time data. Furthermore, technical barriers, such as a deep prerequisite knowledge of foundational classes and Cython, hindered easy access to market data, while limited backtesting tools restricted evaluations against historical data.

starting in 2023, Hummingbot Foundation began to iteratively introduce a new framework, called **StrategyV2**. The new framework allows you to build powerful, dynamic strategies using Lego-like components. To learn more, check out [Architecture](../v2-strategies/index.md).

There are two current ways that Hummingbot strategies can be defined:

[Scripts](/scripts): A simple Python file that contains all strategy logic. If the script uses new components like Candles and Executors, then it may be referred to as a "V2 Script".

[Controllers](/v2-strategies/controllers/): Strategy logic is abstracted into a Controller, allowing a loader script to deploy and manage multiple Controller configurations.

| Script                                                                | Controller                                                                 |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| The strategy is relatively simple                                                    | You want to manage the risk and diversify your portfolio in different controllers           |
| The logic is very standard across different trading pairs                             | The strategy is complex and you want to isolate the decision making                         |
| The strategy only trades on one trading pair                                          | You want to try multiple configs in the same bot                                            |
| You are getting started with Executors and you want a simple way to code your strategy | The strategy trades on multiple trading pairs                                               |
| Prototype a strategy                                                                  | You are familiar with the Strategy V2 and how the controllers interact with it              |

Controllers are designed to add another layer of abstraction and circumvent the limit of Hummingbot to only run one strategy per bot instance. You can think of that as the most powerful and advanced setup that Hummingbot currently provides.

## V1 Strategies

Users can access the legacy V1 strategy templates at [V1 Strategies](../v1-strategies/index.md).

