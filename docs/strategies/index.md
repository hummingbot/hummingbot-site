# Introduction to Hummingbot Strategies V2 

![](../v2-strategies/diagrams/8.png)

## What is a Strategy?

Like a computer program, an algorithmic trading strategy is a set of automated processes that executes repeatedly:

- **Data Collection**: Gathering real-time data from various sources
- **Data Processing**: Analyzing data to identify patterns and make decisions
- **Order Execution**: Placing and cancelling orders based on processed data

A Hummingbot strategy loads a set of [connectors](../exchanges/index.md) that integrate into different centralized and decentralized exchanges, adaptable to the unique features of each trading venue's WebSocket/REST APIs and nodes.

Each [clock tick](../global-configs/clock-tick.md), a strategy loads real-time order book snapshots, user balances, order status and other real-time data from trading pairs on these venues and executes the logic defined in the strategy, parametrized by a pre-defined user configuration.

To run a strategy, a user selects a **base strategy**, defines its input parameters in a [config file](../client/config-files.md), and uses the `start` command in the Hummingbot client to run it. 

We encourage users to create their own custom strategies and / or extend the existing examples.

## Strategies V2

!!! warning
    The Strategies V2 framework is undergoing significant refactoring improvements to enhance usability for developers. Stay updated with the latest changes by following the **#v2-strategies-framework** channel on Discord.

### Why Strategies V2?

The development of the Strategies V2 framework was motivated by the need to overcome several challenges and limitations of the previous strategy implementation:

- **Scalability Issues:** Initially, each trading strategy was limited to a single bot, complicating management and scalability across various strategies and scenarios.

- **Lack of Historical Data Support:** Earlier strategies couldn't leverage historical market data, requiring traders to wait for real-time data accumulation before trading.

- **Complex Order and Event Tracking:** Managing multiple orders across different pairs and exchanges was cumbersome, especially when adjusting strategies in response to market changes.

- **Explainability and Improvement Challenges:** The lack of clear action-outcome correlations made it difficult to analyze and improve strategy performance.

- **Repetitive Behavior Implementation:** Common behaviors, like order refreshing in market making, were often redundantly implemented, leading to inefficiencies.

- **Technical Barriers to Market Data Access:** The necessity for a deep understanding of foundational classes and the use of Cython obscured type hints and steepened the learning curve.

- **Limited Backtesting Capabilities:** The original framework's lack of comprehensive backtesting tools restricted strategy evaluation against historical data.

[Learn more about V2 Strategy Architecture](../v2-strategies/)

---

### How to Get Started

For newcomers, the journey begins with the [V2 Script](../scripts/index.md), a Python file that outlines configuration parameters and connects users with their strategies. For more advanced users who want to run multiple strategies in a single bot or use different trading pairs / configs, check out the Advanced Strategies walkthrough below. 

**Generating a Configuration File**

To create a configuration file for your script, execute:

```shell
create --script-config [SCRIPT_FILE]
```

This command auto-completes with scripts from the local `/scripts` directory that are configurable. You'll be prompted to specify strategy parameters, which are then saved in a YAML file within the `conf/scripts` directory. To run the script, use:

```shell
start --script [SCRIPT_FILE] --conf [SCRIPT_CONFIG_FILE]
```

Auto-complete will suggest config files from the local `/conf/scripts` directory.


[Strategies V2 Walkthrough: Running Simple vs. Advanced Strategies](../v2-strategies/walkthrough.md)

---

<div class="grid cards" markdown>

-   ## 🎓 Learn Strategy Development in Botcamp

    ---

    To gain a deeper understanding of Hummingbot strategies along with access to the latest framework updates, sign up for [Botcamp](/botcamp), which teaches you how to design, backtest and deploy advanced algo trading and market making strategies using Hummingbot.

</div>
