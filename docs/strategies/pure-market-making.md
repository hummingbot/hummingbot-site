# `pure_market_making`

## 📁 Strategy Info

* Folder: [/hummingbot/strategy/pure_market_making](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/pure_market_making)
* Configs: [pure_market_making_config_map.py](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/pure_market_making/pure_market_making_config_map.py)
* Maintainer: Hummingbot Foundation

## 🏆 Strategy Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=CORE&color=yellow)

Core strategies are maintained and continually improved by Hummingbot Foundation. Foundation staff focuses on testing these strategies and rewards users who answer questions related to these strategies on Discord.

## 📝 Summary

This strategy allows Hummingbot users to run a market making strategy on a single trading pair on a `spot` exchanges.

It places limit buy (bid) and limit sell (ask) orders on the order book at prices relative to the mid-price with spreads equal to `bid_spread` and `ask_spread`. Every `order_refresh_time` seconds, the strategy replaces existing orders with new orders with refreshed spreads and order amounts.

In addition, the strategy contains a number of parameters to enable traders to control how orders are placed relative to their inventory position, use prices from a different order book, etc.

## 🏦 Supported Exchange Types

* SPOT CLOB CEX

## 🛠️ Strategy configs

| Parameter                    | Type        | Default     | Prompt      |
|------------------------------|-------------|-------------|-------------|
| `exchange`                   | string      |             | Enter your maker spot connector |
| `market`                     | string      |             | Enter the token trading pair you would like to trade on [exchange] |
| `bid_spread`                 | decimal     |             | How far away from the mid price do you want to place the first bid order? |
| `ask_spread`                 | decimal     |             | How far away from the mid price do you want to place the first ask order? |
| `minimum_spread`             | decimal     | -100        | At what minimum spread should the bot automatically cancel orders? |
| `order_refresh_time`         | float       |             | How often do you want to cancel and replace bids and asks (in seconds)? |
| `max_order_age`              | float       | 1800        | How often do you want to cancel and replace bids and asks with the same price (in seconds)? |
| `order_refresh_tolerance_pct`| decimal     | 0           | Enter the percent change in price needed to refresh orders at each cycle |
| `order_amount`               | decimal     |             | What is the amount of [base_asset] per order? |
| `price_ceiling`              | decimal     | -1          | Enter the price point above which only sell orders will be placed |
| `price_floor`                | decimal     | -1          | Enter the price below which only buy orders will be placed |
| `moving_price_band_enabled`  | bool        | False       | Would you like to enable moving price floor and ceiling? (Yes/No)  |
| `price_ceiling_pct`          | decimal     | 1           | Enter a percentage to the current price that sets the price ceiling. Above this price, only sell orders will be placed  |
| `price_band_refresh_time`    | float       | 86400       | After this amount of time (in seconds), the price bands are reset based on the current price  |
| `ping_pong_enabled`          | bool        | False       | Would you like to use the ping pong feature and alternate between buy and sell orders after fills? |
| `order_levels`               | int         | 1           | How many orders do you want to place on both sides? |
| `order_level_amount`         | decimal     | 0           | How much do you want to increase or decrease the order size for each additional order? |
| `order_level_spread`         | decimal     | 0           | Enter the price increments (as percentage) for subsequent orders? |
| `inventory_skew_enabled`     | bool        | False       | Would you like to enable inventory skew? |
| `inventory_target_base_pct`  | decimal     | 50          | What is your target base asset percentage? |
| `inventory_range_multiplier` | decimal     | 50          | What is your tolerable range of inventory around the target, expressed in multiples of your total order size? |
| `inventory_price`            | decimal     | 1           | What is the price of your base asset inventory? |
| `filled_order_delay`         | decimal     | 60          | How long do you want to wait before placing the next order if your order gets filled (in seconds)? |
| `hanging_orders_enabled`     | bool        | False       | Do you want to enable hanging orders? |
| `hanging_orders_cancel_pct`  | decimal     | 10          | At what spread percentage (from mid price) will hanging orders be canceled?|
| `order_optimization_enabled` | bool        | False       | Do you want to enable best bid ask jumping? |
| `ask_order_optimization_depth`| decimal    | 0           | How deep do you want to go into the order book for calculating the top ask, ignoring dust orders on the top (expressed in base asset amount)?|
| `bid_order_optimization_depth`| decimal    | 0           | How deep do you want to go into the order book for calculating the top bid, ignoring dust orders on the top (expressed in base asset amount)?|
| `price_source`               | string      | current_market| Which price source to use? (current_market/external_market/custom_api) |
| `price_type`                 | string      | mid_price   | Which price type to use? (mid_price/last_price/last_own_trade_price/best_bid/best_ask/inventory_cost) |
| `price_source_exchange`      | string      |             | Enter external price source exchange name |
| `price_source_market`        | string      |             | Enter the token trading pair on [price_source_exchange] |
| `price_source_custom_api`    | string      |             | Enter pricing API URL |
| `custom_api_update_interval` | float       | 5           | Enter custom API update interval in second (default: 5.0, min: 0.5) |
| `add_transaction_costs`      | bool        | False       | Do you want to add transaction costs automatically to order prices? |
| `take_if_crossed`            | bool        | False       | Do you want to take the best order if orders cross the orderbook? |
| `order_override`             | bool        |             |
| `should_wait_order_cancel_confirmation` | bool |     | Should the strategy wait to receive a confirmation for orders cancelation before creating a new set of orders? (Not waiting requires enough available balance) (Yes/No) |
| `bid_order_level_spreads`    | decimal     |         | Enter the spreads (as percentage) for all bid spreads e.g 1,2,3,4 to represent 1%,2%,3%,4%. The number of levels set will be equal to minimum lengths of bid_order_level_spreads and bid_order_level_amounts   |
| `ask_order_level_spreads`    | decimal     |         | Enter the spreads (as percentage) for all ask spreads e.g 1,2,3,4 to represent 1%,2%,3%,4%. The number of levels set will be equal to minimum lengths of ask_order_level_spreads and ask_order_level_amounts   |
| `bid_order_level_amounts`    | decimal     |         | Enter the amount for all bid amounts. The number of levels set will be equal to the minimum length of bid_order_level_spreads and bid_order_level_amounts   |
| `ask_order_level_amounts`    | decimal     |         |Enter the amount for all ask amounts. The number of levels set will be equal to the minimum length of ask_order_level_spreads and ask_order_level_amounts   |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/pure_market_making/pure_market_making.pyx)

!!! note "Approximation only"
    The description below is a general approximation of this strategy. Please inspect the strategy code in **Trading Logic** above to understand exactly how it works.

### Architecture

The built-in pure market making strategy in Hummingbot periodically requests limit order proposals from configurable order pricing and sizing plugins, and also periodically refreshes the orders by cancelling existing limit orders.

Here's a high level view of the logic flow inside the built-in pure market making strategy.

![Figure 5: Pure market making strategy logical flowchart](/assets/img/pure-mm-flowchart.svg)

The pure market making strategy operates in a tick-by-tick manner. Each tick is typically 1 second, although it can be programmatically modified to longer or shorter durations.

At each tick, the pure market making strategy would first query the order filter plugin whether to proceed or not. Assuming the answer is yes, then it'll query the order pricing and sizing plugins and calculate whether and what market making orders it should emit. At the same time, it'll also look at any existing limit orders it previously placed on the market and decide whether it should cancel those.

The process repeats over and over at each tick, causing limit orders to be periodically placed and cancelled according to the proposals made by the order pricing and sizing plugins.

### Refreshing Orders

For each limit order that was emitted by the pure market making strategy, an expiry timestamp would be generated for that order and the order will be tracked by the strategy. The time until expiry for new orders is configured via the `order_refresh_time` parameter.

After an order's expiration time is reached, the pure market making strategy will create a cancel order proposal for that order.

### Executing Order Proposals

After collecting all the order pricing, sizing and cancel order proposals from plugins and the internal refresh order logic - the pure market making strategy logic will merge all of the proposals and execute them.

### Example Order Flow

Below is a hypothetical example of how the pure market making strategy works for a few clock ticks.

* At clock tick `t`, there may be existing limit orders on both the bid and ask sides, and both have not yet expired. The proposed sizes for new orders will be 0, and there will be no cancel order proposals. So the strategy will do nothing for this clock tick.
* At clock tick `t+1`, the limit bid order has expired. The strategy will then generate a cancel order proposal for the expired bid order. The cancellation will then be send to the exchange and executed.
* At clock tick `t+2`, the strategy loops through its trading logic and notices there's no longer an order at the bid side. So it'll propose a non-zero order size for a new bid order. Let's assume the existing ask order hasn't expired yet, so no cancellation proposals will be generated at this clock tick. At the execution phase, the strategy will simply create a bid order calculated from the current market mid-price. Thus the bid order is refreshed.

This cycle of order creation and order cancellation will repeat again and again for as long as the strategy is running. If a limit order is completely filled by a market order, the strategy will simply refresh it at the next clock tick.

## ℹ️ More Resources

:fontawesome-solid-book: [What is market making?](https://blog.hummingbot.org/2020-09-what-is-market-making/): A blog post that explains the basics of market making.

:fontawesome-brands-youtube: [How to set up a simple pure market making bot on Binance](https://www.youtube.com/watch?v=La7E6uudOYY): Learn how to create pure market making bot on Binance exchange.

:fontawesome-brands-youtube: [Trader Sharing: Pure Market Making with cgambit](https://www.youtube.com/watch?v=3RKMlCWzRhw): Eagle Club member and top Hummingbot Miner earner `cgambit` shares his tips and insights on pure market making.

:fontawesome-solid-book: [Pure Market Making (PMM) Strategy](https://blog.hummingbot.org/academy-level-2-c-beginner-strategy-1-pure-market-making-pmm-strategy/): Use Pure Market Making Strategy but set dynamic bid/ask orders based on TradingView indicators which trigger alerts to Telegram and change the bid/ask orders using inventory skew or spreads-adjusted.

*Check out [Hummingbot Academy](https://hummingbot.io/academy) for more resources related to this strategy and others!*
