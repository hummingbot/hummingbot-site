## What is a Hummingbot Strategy?

![](../strategies/v2-strategies/diagrams/8.png)

Like a computer program, an algorithmic trading strategy is a set of automated processes that executes repeatedly:

- **Data Collection**: Gathering real-time data from various sources
- **Data Processing**: Analyzing data to identify patterns and make decisions
- **Order Execution**: Placing and cancelling orders based on processed data

A Hummingbot strategy loads market data directly from centralized and decentralized exchanges, adaptable to the unique features of each trading venue's WebSocket/REST APIs and nodes.

Each [clock tick](../client/global-configs/clock-tick.md), a strategy loads real-time order book snapshots, user balances, order status and other real-time data from trading pairs on these venues and executes the logic defined in the strategy, parametrized by a pre-defined user configuration.

To run a strategy, a user selects a strategy template, defines its input parameters in a [Config File](../client/config-files.md), and starts it with the `start` command in the Hummingbot client or via the command line with [Strategy Autostart](../client/global-configs/strategy-autostart.md).

## Recommended Strategies: V2 Framework

Starting in 2023, Hummingbot Foundation began to iteratively introduce a new framework, called **Strategy V2**. The new framework allows you to build powerful, dynamic strategies using Lego-like components. **We highly recommend using the V2 Framework for all new strategies due to its enhanced modularity, flexibility, and scalability.** To learn more, check out [Architecture](../strategies/v2-strategies/index.md).

There are two current ways that Hummingbot strategies can be defined within the V2 Framework:

[Scripts](../strategies/scripts/index.md): A simple Python file that contains all strategy logic. We recommend starting with a script if you want a simple way to prototype your strategy.

[Controllers](../strategies/v2-strategies/controllers/index.md): Strategy logic is abstracted into a Controller, which may use Executors and other components for greater modularization. Controllers can be backtested and deployed using Dashboard, and a single loader Script may deploy and manage multiple Controller configurations.

Controllers are designed to add another layer of abstraction and circumvent the limit of Hummingbot to only run one strategy per bot instance. You can think of that as the most powerful and advanced setup that Hummingbot currently provides.

This table may help you decide whether to use a Script or Controller for your strategy:

| Script                                                                | Controller                                                                 |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| The strategy is relatively simple                                                    | You want to manage the risk and diversify your portfolio in different controllers           |
| The logic is very standard across different trading pairs                             | The strategy is complex and you want to isolate the decision making                         |
| The strategy only trades on one trading pair                                          | You want to try multiple configs in the same bot                                            |
| You are getting started with Executors and you want a simple way to code your strategy | The strategy trades on multiple trading pairs                                               |
| Prototype a strategy                                                                  | You are familiar with the Strategy V2 and how the controllers interact with it              |

## Legacy Strategies: V1 Framework

When it launched in 2019, Hummingbot pioneered the concept of configurable templates for algo trading strategies, such as market making strategies based on the Avellaneda & Stoikov paper.

These V1 strategies are still supported for users who prefer them or need to maintain older bots. However, new development and features are primarily focused on the V2 framework.

Users can access these legacy strategy templates at the [Strategies V1](../strategies/v1-strategies/index.md) page.

## Learn Algo Trading and Market Making

To gain a deeper understanding of Hummingbot strategies along with access to the latest Hummingbot framework updates, check out [Botcamp](https://www.botcamp.xyz), the official training and [certification](../community/certification.md) for Hummingbot.

Operated by the people behind Hummingbot Foundation, Botcamp offers bootcamps and courses that teach you how to design and deploy advanced algo trading and market making strategies using Hummingbot's Strategy V2 framework.