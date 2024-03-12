!!! warning
    The Strategies V2 framework is ongoing significant refactoring improvements that will make it easier for developers to use. To track the latest changes, refer to the **#v2-strategies-framework** channel in Discord.

## Introduction

 Whereas V1 strategies were robust yet rigid, the Hummingbot Strategies V2 framework introduces modularity and flexibility, making it more accessible for users to adapt strategies according to their needs, even without extensive Python knowledge.

V2 strategies are:

* **Composable**: Designed with modularity at their core, V2 strategies empower users to create powerful, customized strategies with minimal changes to the provided templates.
* **Real-Time**: V2 strategies leverage real-time market data to dynamically adjust spreads and shift prices, resulting in strategies that are not only powerful but also highly adaptable. This means they can respond swiftly to market changes, optimizing for profitability and risk in ways that were not possible with the more static V1 strategies.
* **Backtestability**: An essential aspect of any trading strategy is the ability to test hypotheses. V2 strategies provide robust backtesting capabilities, allowing for extensive simulations with market data through the [Dashboard](../dashboard/index.md).

## Architecture

![](diagrams/1.png)

The Strategies V2 framework is built on a foundation of interlocking components that can be combined with one another to create powerful trading strategies. The most important components to understand are:

* [**V2 Script**](./v2-scripts/index.md): This is where users define the strategy's configuration. It acts as the starting point and interfaces with other components.
* [**Controllers**](./controllers/index.md): The Controllers now have access to the MarketDataProvider and works like a sub-strategy which means users can now run a script using multiple controllers.  
* [**MarketDataProvider**](./candles/market-data.md): Simplifies access to market data which includes `Candles`, `OrderBook data` and `Trades`
* [**Executors**](./executors/index.md): V2 strategies place self-managing Executors and manage orders and positions. They encapsulate the order management logic, ensuring that orders are placed, modified, or canceled according to the strategy's instructions. Similarly, they manage position created when trading on perpetual exchanges.
* [**ExecutorOrchestrator**](./executor-handlers/index.md): This component simplifies creating, stopping, storing and reporting status of the executors for each controller.
