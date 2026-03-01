![](../diagrams/10.png)

**Controllers** are the production-grade building block of the Strategy V2 framework. They define reusable, modular sub-strategies that are more configurable and robust than standalone scripts — ideal for long-running deployments and multi-strategy setups.

A controller interfaces with the `MarketDataProvider` (OrderBook, Trades, Candles) and emits `ExecutorActions` that instruct the parent script to create or stop executors. Controllers are **not started directly** — they are loaded by the special [`v2_with_controllers.py`](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_with_controllers.py) script, which can run multiple controllers simultaneously in a single bot instance.

!!! tip "Controllers vs Scripts"
    Use **controllers** when you need:
    - Multiple strategies running in parallel (e.g., market making on 5 pairs)
    - Production-grade, config-driven deployments
    - Strategy logic that's reusable and independently testable

    Use **scripts** for simpler, single-pair strategies or when learning the framework. 

## Base Classes

Currently, the controller base classes available are:

* [controller_base.py](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/controller_base.py): Defines `ControllerBase`
* [directional_trading_controller_base.py](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/smart_components/controllers/directional_trading_controller_base.py): Designed for indicator-based directional strategies, inherits from `ControllerBase`
* [market_making_controller_base.py](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/smart_components/controllers/market_making_controller_base.py): Designed for two-side market making strategies, inherits from `ControllerBase`

## Directional Trading Controllers

These strategies aim to profit from predicting the market's direction (up or down) and takes positions based on signals indicating the future price movement.

Suitable for strategies that rely on market trends, momentum, or other indicators predicting price movements. 

Customizing signal generation (`get_signal`) allows users to change various analytical models to generate trade signals and determine the conditions under which trades should be executed or stopped.

- [bollinger_v1](https://github.com/hummingbot/hummingbot/blob/development/controllers/directional_trading/bollinger_v1.py)
- [macd_bb_v1](https://github.com/hummingbot/hummingbot/blob/development/controllers/directional_trading/macd_bb_v1.py)
- [trend_follower_v1](https://github.com/hummingbot/hummingbot/blob/development/controllers/directional_trading/trend_follower_v1.py)
- [dman_v3](https://github.com/hummingbot/hummingbot/blob/development/controllers/directional_trading/dman_v3.py)

## Market Making Controllers

These strategies provide liquidity by placing buy and sell orders near the current market price, aiming to profit from the spread between these orders.

Customization involves defining how price levels are selected (`get_levels_to_execute`), how orders are priced and sized (`get_price_and_amount`), and when orders should be refreshed or stopped early.

User may also adjust the strategy based on market depth, volatility, and other market conditions to optimize spread and order placement.

- [pmm_simple](https://github.com/hummingbot/hummingbot/blob/development/controllers/market_making/pmm_simple.py)
- [pmm_dynamic](https://github.com/hummingbot/hummingbot/blob/development/controllers/market_making/pmm_dynamic.py)
- [dman_maker](https://github.com/hummingbot/hummingbot/blob/development/controllers/market_making/dman_maker.py)
- [dman_maker_v2](https://github.com/hummingbot/hummingbot/blob/master/controllers/market_making/dman_maker_v2.py)


## Other Controllers

- [xemm_multiple_levels](https://github.com/hummingbot/hummingbot/blob/master/controllers/generic/xemm_multiple_levels.py)
- [arbitrage_controller](https://github.com/hummingbot/hummingbot/blob/master/controllers/generic/arbitrage_controller.py)
- [grid_strike](https://github.com/hummingbot/hummingbot/blob/master/controllers/generic/grid_strike.py)
- [lp_rebalancer](https://github.com/hummingbot/hummingbot/blob/development/controllers/generic/lp_rebalancer.py) *(new in v2.13.0)* — Automated liquidity provision on CLMM DEXs. Manages LP positions via the `lp_executor`, auto-rebalancing when price moves out of range.
