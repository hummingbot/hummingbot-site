## What is a Hummingbot Strategy?

![](../v2-strategies/diagrams/8.png)

Like a computer program, an algorithmic trading strategy is a set of automated processes that executes repeatedly:

- **Data Collection**: Gathering real-time data from various sources
- **Data Processing**: Analyzing data to identify patterns and make decisions
- **Order Execution**: Placing and cancelling orders based on processed data

A Hummingbot strategy loads market data directly from centralized and decentralized exchanges, adaptable to the unique features of each trading venue's WebSocket/REST APIs and nodes.

Each [clock tick](../global-configs/clock-tick.md), a strategy loads real-time order book snapshots, user balances, order status and other real-time data from trading pairs on these venues and executes the logic defined in the strategy, parametrized by a pre-defined user configuration.

To run a strategy, a user selects a strategy template, defines its input parameters in a [Config File](../client/config-files.md), and starts it with the `start` command in the Hummingbot client or via the command line with [Strategy Autostart](/global-configs/strategy-autostart/).

We encourage users to create their own custom strategies and/or extend the existing examples.

## Flavors of Hummingbot Strategies

There are a variety of ways that Hummingbot strategies can be defined:

* [Script](#script): A simple Python file that contains all strategy logic
* [StrategyV2 Script](#strategyv2-script): A script that uses StrategyV2 components like Candles and Executors
* [StrategyV2 Controller](#strategyv2-controller): Strategy logic is abstracted into a Controller, allowing a loader script to deploy and manage multiple Controller configurations
* [Strategy V1](#strategy-v1): Legacy strategy templates that not customizable

### Script

A [Script](/scripts) are the entry point for Hummingbot strategies. They can range in complexity from a simple script that perform a single automated action to a script that loads multiple StrategyV2 controller configurations. A script's `on_tick` method defines the actions taken each clock tick, and it provides access to core Hummingbot components like connectors.

See [Script Examples](/scripts/examples) for a full list of the current sample scripts in the Hummingbot codebase. These examples show you how to:

- Execute V2 strategies
- Download order book data
- Download historical candles data
- Place orders
- Use the rate oracle
- Call exchange APIs
- And much more!

### StrategyV2 Script

Scripts that use StrategyV2 components such as the Market Data Providers and Executors. Stores parameters in a script config file.

Here are the StrategyV2 scripts in the [`/scripts`](https://github.com/hummingbot/hummingbot/tree/master/scripts) folder:

| Script | Description |
|--------|-------------|
| [v2_simple_directional_rsi.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_simple_directional_rsi.py) | Directional strategy using the RSI indicator |
| [v2_pmm_single_level.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_pmm_single_level.py) | Simple pure market making strategy using PositionExecutors |
| [v2_twap_multiple_pairs.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_twap_multiple_pairs.py) | Script that launches TWAPExecutors to buy/sell a block of tokens |
| [v2_xemm.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_xemm.py) | Script that launches XEMMExecutors to implement a cross-exchange market making strategy |
| [funding_rate_arb.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/funding_rate_arb.py) | Script that arbitrages funding rates across perpetual excahnges |

For more info, see [Walkthrough - StrategyV2 Script](../v2-strategies/walkthrough.md). This detailed walkthrough shows you how to use a StrategyV2 script to run a simple directional strategy.

### StrategyV2 Controller

Strategy logic is abstracted into a [Controller](../v2-strategies/controllers/index.md), allowing a loader script to deploy and manage multiple Controller configurations.

For more info,, see [Walkthrough - StrategyV2 Controller](../v2-strategies/walkthrough-controller.md). This shows you how to run the pure market making strategy using a StrategyV2 Controller, which lets you scale your operation more easily.

### Strategy V1

The [original Hummingbot strategies](../v1-strategies/index.md) offer structured templates for various strategies like pure market making and cross-exchange market making that accepts configure parameters, but they are more rigid and less customizable than those built using the StrategyV2 framework, 

## Motivation for the StrategyV2 Framework

When it launched in 2019, Hummingbot pioneered the concept of configurable templates for algo trading strategies, such as market making strategies based on the Avellaneda & Stoikov paper.

However, the original strategy framework design had a number of limitations. Initially, strategies were confined to individual bots, complicating the management and scaling across various scenarios, and they lacked the capability to use historical market data, which forced traders to rely solely on real-time data. Furthermore, technical barriers, such as a deep prerequisite knowledge of foundational classes and Cython, hindered easy access to market data, while limited backtesting tools restricted evaluations against historical data.

In response, starting in 2023, Hummingbot Foundation began to iteratively introduce a new framework, called StrategyV2. The new framework allows you to build powerful, dynamic strategies using Lego-like components. To learn more, check out [Architecture](../v2-strategies/index.md).

!!! tip "Learn to Develop Algo Trading Strategies"
    To gain a deeper understanding of how to build and deploy algo trading and market making strategies using Hummingbot's StrategyV2 framework, sign up for [Botcamp](https://www.botcamp.xyz), which offers courses and hands-on cohort-based professional training by the core Hummingbot maintainers.
