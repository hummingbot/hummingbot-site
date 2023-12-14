## Introduction

 Whereas V1 strategies were robust yet rigid, the Hummingbot V2 Strategies framework introduces modularity and flexibility, making it more accessible for users to adapt strategies according to their needs, even without extensive Python knowledge.

V2 strategies are:

* **Composable**: Designed with modularity at their core, V2 strategies empower users to create powerful, customized strategies with minimal changes to the provided templates.
* **Real-Time**: V2 strategies leverage real-time market data to dynamically adjust spreads and shift prices, resulting in strategies that are not only powerful but also highly adaptable. This means they can respond swiftly to market changes, optimizing for profitability and risk in ways that were not possible with the more static V1 strategies.
* **Backtestability**: An essential aspect of any trading strategy is the ability to test hypotheses. V2 strategies provide robust backtesting capabilities, allowing for extensive simulations with market data through the [Dashboard](../dashboard/index.md).

## Architecture

![](diagrams/1.png)

The V2 Strategies framework is built on a foundation of interlocking components that can be combined with one another to create powerful trading strategies. The most important components to understand are:

* [**V2 Script**](./v2-scripts/index.md): This is where users define the strategy's configuration. It acts as the starting point and interfaces with other components.
* [**Controller**](./controllers/index.md): The central hub of the strategy, the Controller receives input from the V2 Script and orchestrates the overall strategy, including the management and coordination of Executors.
* [**Candles**](./candles/index.md): Candles provide a structured form of historical and real-time market data, represented as OHLCV bars, which are essential for generating market analysis indicators.
* [**Executors**](./executors/index.md): V2 strategies place self-managing Executors and manage orders and positions. They encapsulate the order management logic, ensuring that orders are placed, modified, or canceled according to the strategy's instructions. Similarly, they manage position created when trading on perpetual exchanges.

These helper components stitch the framework together:

* [**Executor Handler**](./executor-handlers/index.md): This component acts as a bridge between the Controller and Executors, relaying commands and ensuring that actions are executed in accordance with the strategy's logic.
* [**Order Level Builder**](./order-levels/index.md): A utility within the V2 Script that facilitates the construction of order levels, which dictate how Executors are distributed and behave.

## Botcamp

To gain a deeper understanding of V2 Strategies and to access the latest framework updates, sign up for [Botcamp](/botcamp), which teaches you how to design, backtest and run these types of strategies.
