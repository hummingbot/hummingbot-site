# `avellaneda_market_making`

## 📁 Strategy Info

* Folder: [/hummingbot/strategy/avellaneda_market_making](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/avellaneda_market_making)
* Configs: [avellaneda_market_making_config_map_pydantic.py](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/avellaneda_market_making/avellaneda_market_making_config_map_pydantic.py)
* Maintainer: None

## 🏆 Strategy Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=COMMUNITY&color=green)

Community strategies have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## 📝 Summary

This strategy implements a market making strategy described in the classic paper [High-frequency Trading in a Limit Order Book](https://people.orie.cornell.edu/sfs33/LimitOrderBook.pdf) written by Marco Avellaneda and Sasha Stoikov. It allows users to directly adjust the `risk_factor` (`gamma`) parameter described in the paper. It also features an order book liquidity estimator calculating the trading intensity parameters (`alpha` and `kappa`) automatically. Additionally, the strategy implements an order size adjustment algorithm and its `order_amount_shape_factor` (`eta`) parameter as described in [Optimal High-Frequency Market Making](http://stanford.edu/class/msande448/2018/Final/Reports/gr5.pdf). The strategy is implemented to be used either in fixed timeframes or to be ran indefinitely.

## 🏦 Exchanges supported

* SPOT CLOB CEX

## 🛠️ Strategy configs

| Parameter                    | Type        | Default     | Prompt      |
|------------------------------|-------------|-------------|-------------|
| `exchange`                   | string      |             | Enter your maker spot connector |
| `market`                     | string      |             | Enter the token trading pair you would like to trade on `exchange`|
| `execution_timeframe`        | string      |             | Choose execution timeframe ( `infinite` / `from_date_to_date` / `daily_between_times` ) |
| `start_time`                 | string      |             | Please enter the start date and time (YYYY-MM-DD HH:MM:SS) OR Please enter the start time (HH:MM:SS) |
| `end_time`                   | string      |             | Please enter the end date and time (YYYY-MM-DD HH:MM:SS) OR Please enter the end time (HH:MM:SS) |
| `order_amount`               | decimal     |             | What is the amount of `base_asset` per order?|
| `order_optimization_enabled` | bool        |  True       | Do you want to enable best bid ask jumping? |
| `risk_factor`                | decimal     |  Computed   | Enter risk factor (𝛾) |
| `order_amount_shape_factor`  | decimal     |  Computed   | Enter order amount shape factor (η) |
| `min_spread`                 |             |  0          | Enter minimum spread limit (as % of mid price) |
| `order_refresh_time`         | decimal     |             | How often do you want to cancel and replace bids and asks (in seconds)? |
| `max_order_age`              | decimal     |  1800       | How long do you want to cancel and replace bids and asks with the same price (in seconds)? |
| `order_refresh_tolerance_pct`| decimal     |  0          | Enter the percent change in price needed to refresh orders at each cycle |
| `filled_order_delay`         | decimal     |  60         | How long do you want to wait before placing the next order if your order gets filled (in seconds)? |
| `inventory_target_base_pct`  | decimal     |  50         | What is the inventory target for the base asset? |
| `add_transaction_costs`      | decimal     |  False      | Do you want to add transaction costs automatically to order prices? (Yes/No) |
| `volatility_buffer_size`     | decimal     |  200        | Enter amount of ticks that will be stored to calculate volatility |
| `trading_intensity_buffer_size` | decimal     |  200        | Enter amount of ticks that will be stored to estimate order book liquidity? |
| `order_level_mode`               | int         |  1          | How many orders do you want to place on both sides? |
| `level_distances`            | decimal     |  0          | How far apart in % of optimal spread should orders on one side be? |
| `order_override`             | json        |             |  |
| `hanging_orders_mode`     | bool        |  False      | How do you want to handle hanging orders? (track_hanging_orders/ignore_hanging_orders) |
| `should_wait_order_cancel_confirmation` |  bool |  True       | Should the strategy wait to receive a confirmation for orders cancellation before creating a new set of orders? (Not waiting requires enough available balance) (Yes/No) |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/avellaneda_market_making/avellaneda_market_making.pyx)

!!! note "Approximation only"
    The description below is a general approximation of this strategy. Please inspect the strategy code in **Trading Logic** above to understand exactly how it works.

### Overview

The strategy continuously calculates optimal positioning of a market maker's buy and sell limit orders within an order book, based on the following information:

* **Current order book liquidity**
* **Asset price volatility**
* **Desired portfolio allocation (target inventory)**
* **Trading session timeframe**
* **Risk factor (user choice)**

There is two main values that are calculated by the model, based on the factors mentioned above:

* **Reservation price**: A price different from the market mid price, that will be used as reference to create orders.
* **Optimal spread**: The best possible spread from the *reservation price* where the orders will be created.

Compared to the previous version these parameters were removed:

* `parameters_based_on_spread`
* `max_spread`
* `vol_to_spread_multiplier`
* `volatility_sensibility`
* `inventory_risk_aversion`
* `order_book_depth_factor`
* `closing_time`

Parameter `min_spread` has a different meaning, parameter `risk_factor` is being used differently in the calculations and therefore attains a different range of values.

#### Reservation Price

The farther the current inventory is from the desired asset allocation (as defined by the `inventory_target_base_pct` parameter), the greater the distance between **reservation price** and the market mid price. The strategy skews the probability of either buy or sell orders being filled, depending on the difference between the current inventory and the `inventory_target_base_pct`.

For example, If the strategy needs an asset to be sold to reach the `inventory_target_base_pct` value, sell orders will be placed closer to the mid price than buy orders.

#### Optimal Spreads

The **Optimal spread** values (which defines at what price each order will be created) is a function of the **order book liquidity**, **asset price volatility** and **trading session timeframe**. Each factor have an influence on the value calculated:

* Low order book liquidity = Smaller optimal spread value
* Low price volatility = Smaller optimal spread value
* Time closer to the end of the trading session = Smaller optimal spread value

#### Risk Factor

The final piece of information that influence both **Reservation price** and **Optimal Spread** values is the `risk_factor` (`gamma`).

This value is defined by the user, and it represents how much inventory risk he is willing to take.

The closer the `risk_factor` is to **zero**, the more symmetrical will be orders will be created, and the **Reservation price** will be pretty much equal to the market mid price.

In that case, the user is taking more inventory risk, because there will be no skew on the orders positions aiming to reach the `inventory_target_base_pct`.

The higher the value, the more aggressive the strategy will be to reach the `inventory_target_base_pct`, increasing the distance between the **Reservation price** and the market mid price.

It's a unit-less parameter, that can be set to any non-zero value as necessary, depending on the inventory risk the user is willing to take.

> NOTE: The `risk_factor` is defined relative to the instant volatility of the asset given in absolute price values. For all assets the values `risk_factor` can attain should be roughly within the same range, however there can be a few exceptions where the parameter would require a significantly different value to start having an effect on the **Reservation price** and on the **Optimal Spread**
> As an example, for asset A, a `risk_factor = 1` can already have a noticeable effect, while for asset B, the `risk_factor` must be at least around 10 to have any noticeable effect.
> The only way to find a value for the `risk_factor` is to experiment with different values and see it's effects on the **Reservation price** and the **Optimal spread**.
> Based on our experience common values of this parameter are between 1 and 20, however it is unrestricted on the upper side, therefore if necessary its value can be even 100 or 1000, although it's not very common.

Given the right market conditions and the right `risk_factor`, it's possible that the optimal spread will be wider than the absolute price of the asset, or that the reservation price will by far away from the mid price, in both cases resulting in the optimal bid price to be lower than or equal to 0. If this happens neiher buy or sell will be placed. To prevent it from happening, users can set the `risk_factor` to a lower value.

In setting the `risk_factor` it's important to observe the reservation price in regards to the mid price. If the user wishes the spread between these two prices to be wider, the risk factor should be set to a higher value. The further away the reservation price is from the mid price, the more aggressive the strategy is in pursuing its target portfolio allocation, because orders on one side will be far more likely to be filled than on the other.

![Figure 1: Risk factor adjustment flow chart ](/assets/img/avellaneda_risk_factor.svg)

#### ETA (Order size adjustment)

If users choose to set the `eta` parameter, order sizes will be adjusted to further optimize the strategy behavior in regards to the current and desired portfolio allocation.

With a value of `eta = 1`, buy and sell orders will have the same size. A different value will create assymetrical order sizes, with the goal to reach the `inventory_target_pct` faster.

#### Order levels

Users have an option to layer orders on both sides. If more than 1 `order_levels` are chosen, multiple buy and sell limit orders will be created on both sides, with predefined price distances from each other, with the levels closest to the reservation price being set to the optimal bid and ask prices. This price distance between levels is defined as a percentage of the optimal spread calculated by the strategy. The percentage is given as the `level_distances` parameter. Given that optimal spreads tend to be tight, the `level_distances` values should be in general in tens or hundreds of percents.

### Trading logic flow

![Figure 2: Strategy flow chart](/assets/img/avellaneda.svg)

| Step                               | Meaning                                                                                                     |
|------------------------------------|-------------------------------------------------------------------------------------------------------------|
| **Are buffers filled?**            | Are instant volatility indicator and trading intensity indicator buffers full?                              |
| **Are characteristics estimated?** | Are order book liquidity / trading intensity parameter estimations available?                               |
| **Is infinite timeframe?**         | Is the trading session set to be `infinite` or constrained to `from_date_to_date` or `daily_between_times`? |
| **Are multiple levels defined?**   | Is value of `order_levels` higher than 1?                                                                   |
| **Is minimum spread defined?**     | Is value of `min_spread` higher than 0?                                                                     |

### Timeframes

The original Avellaneda-Stoikov model was designed to be used for market making on stock markets, which have defined trading hours. The assumption was that the market maker wants to end the trading day with the same inventory he started.

Since cryptocurrency markets are open 24/7, there is no "closing time", and the strategy should also be able run indefinitely, based on an infinite timeframe.

> NOTE: Avellaneda-Stoikov also considered the possibility of running the model on an infinite timeframe

The strategy allows three possible timeframes to be used:

* `infinite` - No closing time for the trading session is considered
* `from_date_to_date` - The strategy will begin trading on the `start_time` (YYYY-MM-DD HH:MM:SS) and stop at the `end_time` (YYYY-MM-DD HH:MM:SS), as one single trading session.
* `daily_between_times` - The strategy will run as multiple trading sessions, and every day will begin to trade at `start_time` (HH:MM:SS) and stop at `end_time` (HH:MM:SS)

For the `infinite` timeframe the equations used to calculate the reservation price and the optimal spread are slightly different, because the strategy doesn't have to take into account the time left until the end of a trading session.

Both the `start_time` and the `end_time` parameters are defined to be in the local time of the computer on which the client is running. For the `infinite` timeframe these two parameters have no effect.

### Asset Characteristics Estimation

The strategy calculates the reservation price and the optimal spread based on measurements of the current asset volatility and the order book liquidity. The asset volatility estimator is implemented as the `instant_volatility` indicator, the order book liquidity estimator is implemented as the `trading_intensity` indicator.

Before any estimates can be given, both estimators need to have their buffers filled. By default the lengths of these buffers are set to be 200 ticks. In case of the `trading_intensity` estimator only order book snapshots different from preceding snapshots count as valid ticks. Therefore the strategy may take longer than 200 seconds (in case of the default length of the buffer) to start placing orders.

The `trading_intensity` estimator is designed to be consistent with ideas outlined in the Avellaneda-Stoikov paper. The `instant_volatility` estimator defines volatility as a deviation of prices from one tick to another in regards to a zero-change price action.

### Minimum Spread

The `minimum_spread` parameter is optional, it has no effect on the calculated reservation price and the optimal spread. It serves as a hard limit below which orders won't be placed, if users  choose to ensure that buy and sell orders won't be placed too close to each other, which may be detrimental to the market maker's earned fees. The minimum spread is given by the `minimum_spread` parameter as a percentage of the mid price. By default its value is 0, therefore the strategy places orders at optimal bid and ask prices.

### References

* [High-frequency Trading in a Limit Order Book - Avellaneda, Stoikov](https://people.orie.cornell.edu/sfs33/LimitOrderBook.pdf)
* [Optimal High-Frequency Market Making - Fushimi, Rojas, Herman](http://stanford.edu/class/msande448/2018/Final/Reports/gr5.pdf)

## ℹ️ More Resources

:fontawesome-solid-book: [A comprehensive guide to Avellaneda & Stoikov’s market-making strategy](../academy-content/posts/guide-to-the-avellaneda-stoikov-strategy/index.md): A comprehensive walkthrough of the classic avellaneda market making strategy that is based on a famous classic academic paper.

:fontawesome-solid-book: [Avellaneda strategy: A technical deep dive](../academy-content/posts/technical-deep-dive-into-the-avellaneda-stoikov-strategy/index.md): We explain how we modified the original Avellaneda-Stoikov model for the cryptocurrency industry, as well as how we simplified the calculation of key parameters (Greeks).
