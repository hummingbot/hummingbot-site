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

## Hummingbot Strategy Frameworks

### Strategy V2

Hummingbot's Strategy V2 Framework represent the latest innovation in trading strategy development. These strategies are dynamic and composable, allowing non-technical users to build powerful strategies using Lego-like components.

* [Walkthrough](../v2-strategies/walkthrough.md)
* [Architecture](../v2-strategies/index.md)

### Strategy V1

The [original Hummingbot V1 strategies](../v1-strategies/index.md) offer a structured, template-based environment with user-friendly parameters, but they are less customizable than V2 strategies.

### Scripts

[Scripts](../scripts/index.md) provide a way to compose a lightweight, simple strategy in a single Python file.

---

<div class="grid cards" markdown>

-   ## 🎓 Learn Strategy Development in Botcamp

    ---

    To gain a deeper understanding of Hummingbot strategies along with access to the latest framework updates, sign up for [Botcamp](/botcamp), which teaches you how to design, backtest and deploy advanced algo trading and market making strategies using Hummingbot.

</div>
