## What is a strategy?

In the world of algorithmic trading, a strategy refers to a pre-defined set of rules and processes that define what an automated trading bot does.

A Hummingbot strategy is a program that executes a set of instructions every **clock tick**: fetching data, constructing signals, and deciding what orders/transactions to execute on various exchanges and blockchains:

* **Data Collection**: At the beginning of each clock tick, the strategy collects data from various sources. This could be market data, past trading data, or any other relevant information.
* **Data Processing**: Once the data is collected, the strategy processes it. This involves analyzing the data, identifying patterns, and making decisions based on pre-defined rules or algorithms.
* **Order Execution**: Based on the processed data, the strategy then executes orders. This could involve buying, selling, or holding assets.

Since Hummingbot [connectors](/exchanges) standarize how orders and trades are created for each CEX and DEX, strategies can be designed to be exchange-agnostic. However, there may be advantages to customizing a strategy for a particular venue's idiosyncrasies.

## Creating strategies with Hummingbot

Hummingbot offers its users several methods to create and customize strategies. These are:

* [V1 Strategies](/v1-strategies): These are templatized programs that provide a structured environment for your trading strategy. They expose a set of user-defined parameters, allowing you to customize the strategy's behavior without needing to dive deep into the code.
* [V2 Strategies](/v2-strategies): Representing the latest and most advanced way to create strategies in Hummingbot, V2 strategies are built using composable elements known as "controllers" and "executors". These elements can be mixed and matched, offering a modular approach to strategy creation. This means you can easily reuse parts of your strategies in different configurations, making the development process faster and more efficient.
* [Scripts](/scripts): For those who are looking for a lightweight solution, Hummingbot provides scripting support. These are single-file strategies that are quick to implement and can be an excellent starting point for those new to algorithmic trading.
* [PMM Scripts (deprecated)](../scripts/pmm-scripts.md): PMM Scripts were an early experiment to let users customize Hummingbot, but they can only be used with the PMM strategy.