
## Components

The most important components to understand are:

* [**Script**](#strategyv2-script): Orchestrates the overall strategy logic. This is a standard [script](/scripts) that inherits from the `StrategyV2Base` class. 
* [**Executor**](./executors/index.md): Manages orders and positions based on pre-defined user settings, ensuring that orders are placed, modified, or canceled according to the strategy's instructions.
* [**Controller**](./controllers/index.md): Defines a trading strategy based on a strategy controller base class, i.e. Directional or Market Making.
* [**Market Data Provider**](./data/index.md): Single point of access to exchange market data such as historical OHCLV [Candles](./candles/index.md), order book data, and trades.

### Inheritance

One important information before we delve into the details of each strategy type and when to use which is to understand that they are all built on top of each other.

If we have a quick look together at the inheritance hierarchy this becomes obvious:

![](strategy-inheritance-hierarchy.png)

* **V1 Strategies**: here you can see that `StrategyBase` is the Cython part and `StrategyPyBase` is the root for all Python based strategies
* **Script Strategies**: `ScriptStrategyBase` builds on top of that and makes it a lot easier to create a simple strategy with nearly no code. This is still fully supported, but might be deprecated in the futures. Therefore it is highly recommended to use V2 Strategies for new implementations.
* **V2 Scripts**: `StrategyV2Base` inherits from `ScriptStrategyBase` which makes it technically a Script Strategy, but uses Executors for order management instead of the `buy()` / `sell()` methods. Controllers extend that even further as additional components that are loosely couple via an event queue. 

Please make sure to keep the structure in mind as this helps you a lot in learning how to code your own custom strategies.

## Walkthroughs

Check out [Walkthrough - Script](./walkthrough.md) and [Walkthrough - Controller](./walkthrough-controller.md) to learn how to create strategies.

