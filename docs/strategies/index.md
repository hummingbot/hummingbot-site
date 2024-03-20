![](../v2-strategies/diagrams/8.png)

## What is a Hummingbot Strategy?

Like a computer program, an algorithmic trading strategy is a set of automated processes that executes repeatedly:

- **Data Collection**: Gathering real-time data from various sources
- **Data Processing**: Analyzing data to identify patterns and make decisions
- **Order Execution**: Placing and cancelling orders based on processed data

A Hummingbot strategy loads market data directly from centralized and decentralized exchanges, adaptable to the unique features of each trading venue's WebSocket/REST APIs and nodes.

Each [clock tick](../global-configs/clock-tick.md), a strategy loads real-time order book snapshots, user balances, order status and other real-time data from trading pairs on these venues and executes the logic defined in the strategy, parametrized by a pre-defined user configuration.

To run a strategy, a user selects a base strategy template, defines its input parameters in a [config file](../client/config-files.md), and uses the `start` command in the Hummingbot client to run it. 

We encourage users to create their own custom strategies and/or extend the existing examples.

## Strategy V2

Hummingbot's new Strategy V2 framework allows you to build powerful, dynamic strategies using Lego-like components.

* [Architecture](../v2-strategies/index.md): Learn how to use key components like Executors and Controllers
* [Walkthrough](../v2-strategies/walkthrough.md): Detailed walkthroughs of simple and advanced Strategy V2 examples
* [Sample Scripts](../scripts/examples.md): Sample Strategy V2 scripts

!!! tip "Learn to Develop Algo Trading Strategies"
    To gain a deeper understanding of Hummingbot strategies along with access to the latest framework updates, sign up for [Botcamp](https://www.botcamp.xyz), which teaches you how to design and deploy advanced algo trading and market making strategies using Hummingbot's Strategy V2 framework.

## Strategy V1

The original Hummingbot [strategies](../v1-strategies/index.md) offer a structured, template-based environment with user-friendly parameters, but they are less customizable than those built using the Strategy V2 framework, whose development was motivated by the need to overcome several challenges and limitations of the previous strategy implementation:

- **Scalability Issues:** Initially, each trading strategy was limited to a single bot, complicating management and scalability across various strategies and scenarios.

- **Lack of Historical Data Support:** Earlier strategies couldn't leverage historical market data, requiring traders to wait for real-time data accumulation before trading.

- **Complex Order and Event Tracking:** Managing multiple orders across different pairs and exchanges was cumbersome, especially when adjusting strategies in response to market changes.

- **Explainability and Improvement Challenges:** The lack of clear action-outcome correlations made it difficult to analyze and improve strategy performance.

- **Repetitive Behavior Implementation:** Common behaviors, like order refreshing in market making, were often redundantly implemented, leading to inefficiencies.

- **Technical Barriers to Market Data Access:** The necessity for a deep understanding of foundational classes and the use of Cython obscured type hints and steepened the learning curve.

- **Limited Backtesting Capabilities:** The original framework's lack of comprehensive backtesting tools restricted strategy evaluation against historical data.
