---
tags:
- market making
- ⛏️ Miner strategy
---

# `cross_exchange_market_making`

## 📁 [Strategy folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/cross_exchange_market_making)

## 📝 Summary

Also referred to as **liquidity mirroring** or **exchange remarketing**, this strategy allows you to make a market (creates buy and sell orders) on the `maker` exchange, while hedging any filled trades on a second, `taker` exchange. The strategy attempts places maker orders at spreads that are wider than taker orders by a spread equal to `min_profitability`.

Starting with the [1.7.0](/release-notes/1.7.0) release, this strategy now supports decentralized exchanges as the taker exchange. Follow the steps [here](/gateway/setup) to setup gateway and connect to a decentralized exchange. 

## 🏦 Exchanges supported

* [`spot` exchanges](/exchanges/spot)
* [`amm` exchanges](/gateway/exchanges/amm/)

## 👷 Maintenance

* Release added: [0.2.0](/release-notes/0.2.0/) by CoinAlpha
* Maintainer: CoinAlpha

## 🛠️ Strategy configs

[Config map](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_market_making/cross_exchange_market_making_config_map.py)

| Parameter                    | Type        | Default     | Prompt New? | Prompt                                                 |
|------------------------------|-------------|-------------|-------------|--------------------------------------------------------|
| `maker_market`               | string      |             | True        | Enter your maker spot connector |
| `taker_market`               | string      |             | True        | Enter your taker spot connector |
| `maker_market_trading_pair`  | string      |             | True        | Enter the token trading pair you would like to trade on `[maker_market]`|
| `taker_market_trading_pair`  | string      |             | True        | Enter the token trading pair you would like to trade on `[taker_market]`|
| `min_profitability`          | string      |             | True        | What is the minimum profitability for you to make a trade?|
| `order_amount`               | decimal     |             | True        | What is the amount of `base_asset` per order?|
| `adjust_order_enabled`       | bool        | True        | True        | Do you want to enable adjust order?|
| `order_refresh_mode`         | string      |             | True        | Select the order refresh mode (passive_order_refresh / active_order_refresh)? |
| `cancel_order_threshold`     | decimal     | 5           | False       | Do you want to enable active order canceling?|
| `limit_order_min_expiration` | decimal     | 130         | False       | How often do you want limit orders to expire (in seconds)?|
| `top_depth_tolerance`        | decimal     | 0           | False       | What is your top depth tolerance? (in `base_asset`)|
| `anti_hysteresis_duration`   | decimal     | 60          | False       | What is the minimum time interval you want limit orders to be adjusted? (in seconds)|
| `order_size_taker_volume_factor`| decimal  | 25          | False       | What percentage of hedge-able volume would you like to be traded on the taker market?|
| `order_size_taker_balance_factor`| decimal | 99.5        | False       | What percentage of asset balance would you like to use for hedging trades on the taker market?|
| `order_size_portfolio_ratio_limit`| decimal| 16.67       | False       | What ratio of your total portfolio value would you like to trade on the maker and taker markets?|
| `conversion_rate_mode` | string        |         | True       | Select the conversion rate mode (rate_oracle_conversion_rate/fixed_conversion_rate)|
| `taker_to_maker_base_conversion_rate`| decimal | 1       | False       | What percentage of asset balance would you like to use for hedging trades on the taker market?|
| `taker_to_maker_quote_conversion_rate`| decimal | 1      | False       | What percentage of asset balance would you like to use for hedging trades on the maker market?|
| `slippage_buffer`            | decimal     | 5           | True        | How much buffer do you want to add to the price to account for slippage for taker orders?  |
| `debug_price_shim`            | bool     | False           | False        | Do you want to enable the debug price shim for integration tests? If you don't know what this does you should keep it disabled.  |
| `gateway_transaction_cancel_interval`            | decimal     | 600           | True        | After what time should blockchain transactions be cancelled if they are not included in a block? (this only affects decentralized exchanges) (Enter time in seconds)  |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_market_making/cross_exchange_market_making.pyx)

!!! note "Approximation only"
    The description below is a general approximation of this strategy. Please inspect the strategy code in **Trading Logic** above to understand exactly how it works.

### Architecture

The cross exchange market making strategy performs market making trades between two markets: it emits limit orders to a less liquid, larger spread market; and emits market orders on a more liquid, smaller spread market whenever the limit orders were hit. This, in effect, sends the liquidity from the more liquid market to the less liquid market.

In Hummingbot code and documentation, we usually refer to the less liquid market as the "maker side" - since the cross exchange market making strategy is providing liquidity there. We then refer to the more liquid market as the "taker side" - since the strategy is taking liquidity there.

The cross exchange market making strategy's code is divided into two major parts:

 1. Order creation and adjustment

    Periodically creates and adjusts limit orders on the maker side.

 2. Hedging order fills

    Performs the opposite, hedging trade on the taker side, whenever a maker order has been filled.

### Order Creation and Adjustment

Here's a high-level view of the logical flow of the order creation and adjustment part. The overall logic of order creation and adjustment is pretty involved, but it can be roughly divided to the **Cancel Order Flow** and the **Create Order Flow**.

The cross exchange market making strategy regularly refreshes the limit orders it has on the maker side market by regularly cancelling old orders (or waiting for existing order to expire), and creating new limit orders. This process ensures the limit orders it has on the maker side are always of the correct and profitable prices.

![Figure 1: Order creation and adjustment flow chart](/assets/img/xemm-flowchart-1.svg)

The entry point of this logic flow is the `c_process_market_pair()` function in [`cross_exchange_market_making.pyx`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_market_making/cross_exchange_market_making.pyx).

### Cancel Order Flow

The cancel order flow regularly monitors all active limit orders on the maker side, to ensure they are all valid and profitable over time. If any active limit order becomes invalid (e.g. because the asset balance changed) or becomes unprofitable (due to market price changes), then it should cancel such orders.

![Figure 2: Cancel order flow chart](/assets/img/xemm-flowchart-2.svg)

#### Active order cancellation setting

The [`active_order_canceling`](/strategies/cross-exchange-market-making/) setting changes how the cancel order flow operates. `active_order_canceling` should be enabled when the maker side is a centralized exchange (e.g. Binance, Coinbase Pro), and it should be disabled when the maker side is a decentralized exchange.

When `active_order_canceling` is enabled, the cross exchange market making strategy would refresh orders by actively cancelling them regularly. This is optimal for centralized exchanges because it allows the strategy to respond quickly when, for example, market prices have significantly changed. This should not be chosen for decentralized exchanges that charge gas for cancelling orders (such as Radar Relay).

When `active_order_canceling` is disabled, the cross exchange market making strategy would emit limit orders that automatically expire after a predefined time period. This means the strategy can just wait for them to expire to refresh the maker orders, rather than having to cancel them actively. This is useful for decentralized exchanges because it avoids the potentially very long cancellation delays there, and it also does not cost any gas to wait for order expiration.

It is still possible for the strategy to actively cancel orders with `active_order_canceling` disabled, via the [`cancel_order_threshold`](/strategies/cross-exchange-market-making/) setting. For example, you can set it to -0.05 such that the strategy would still cancel a limit order on a DEX when it's profitability dropped below -5%. This can be used as a safety switch to guard against sudden and large price changes on decentralized exchanges.

#### Is hedging profitable?

Assuming active order canceling is enabled, the first check the strategy does with each active maker order is whether it is still profitable or not. The current profitability of an order is calculated assuming the order is filled and hedged on the taker market immediately.

If the profit ratio calculated for the maker order is less than the [`min_profitability`](/strategies/cross-exchange-market-making/) setting, then the order is canceled.

The logic of this check can be found in the function `c_check_if_still_profitable()` in [`cross_exchange_market_making.pyx`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_market_making/cross_exchange_market_making.pyx).

Otherwise, the strategy will go onto the next check.

#### Is there sufficient account balance?

The next check afterwards checks whether there's enough asset balance left to satisfy the maker order. If there is not enough balance left on the exchange, the order would be cancelled.

The logic of this check can be found in the function `c_check_if_sufficient_balance()` in [`cross_exchange_market_making.pyx`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_market_making/cross_exchange_market_making.pyx).

Otherwise, the strategy will go onto the next check.

#### Is the price correct?

Asset prices on both the maker side and taker side are always changing, and thus the optimal prices for the limit orders on the maker side would change over time as well.

The cross exchange market making strategy calculates the optimal pricing from the following factors:

 1. Current market order prices on the taker side.
 2. Current order book depth on the maker side.
 3. [`top_depth_tolerance`](/strategies/cross-exchange-market-making/) setting, which is applied to the order book depths on maker side.
 4. [`min_profitability`](/strategies/cross-exchange-market-making/) setting, which is applied to the market order prices on the taker side.

If the price of the active order is different from the optimal price calculated, then the order would be cancelled. Otherwise, the strategy would allow the order to stay.

The logic of this check can be found in the function `c_check_if_price_correct()` in [`cross_exchange_market_making.pyx`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_market_making/cross_exchange_market_making.pyx).

After all the active orders on make side have been checked, the strategy will proceed to the create order flow.

### Create Order Flow

After going through the cancel order flow, the cross exchange market making strategy would check and re-create any missing limit orders on the maker side.

![Figure 3: Cancel order flow chart](/assets/img/xemm-flowchart-3.svg)

The logic inside the create order flow is relatively straightforward. It checks whether there are existing bid and ask orders on the maker side. If any of the orders are missing, it will check whether it is profitable to create one at the moment. If it's profitable to create the missing orders, it will calculate the optimal pricing and size and create those orders.

The logic of the create order flow can be found in the function `c_check_and_create_new_orders()` in [`cross_exchange_market_making.pyx`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_market_making/cross_exchange_market_making.pyx).

### Hedging Order Fills

The cross exchange market making strategy would always immediately hedge any order fills from the maker side, regardless of how profitable the hedge is at the moment. The rationale is, it is more useful to minimize unnecessary exposure to further market risks for the users, than to wait speculatively for a profitable moment to hedge the maker order fill - which may never come.

![Figure 4: Hedging order fills flow chart](/assets/img/xemm-flowchart-4.svg)

The logic of the hedging order fill flow can be found in the function `c_did_fill_order()` and `c_check_and_hedge_orders()` in [`cross_exchange_market_making.pyx`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_market_making/cross_exchange_market_making.pyx).

## ℹ️ More Resources

:fontawesome-solid-book: [What is cross exchange market making?](https://hummingbot.io/blog/2020-09-what-is-cross-exchange-market-making)

:fontawesome-brands-youtube: [Cross Exchange Market Making with Jelle](https://www.youtube.com/watch?v=fEoEAbPoBGA)

:fontawesome-solid-book: [Use cross-exchange market making (XEMM) strategy to lower risk](https://hummingbot.io/academy-level-2-d-beginner-strategy-2-use-cross-exchange-market-making-xemm): The XMM strategy effectively reduces inventory risk. This article talks about how to proceed with XEMM in place.

:fontawesome-brands-youtube: [Cross Exchange Market Making Strategy in FTX | Hummingbot Live](https://www.youtube.com/watch?v=gwLjSe0t8K8): In this video, Paulo shows how to optimize a Cross Exchange Market-Making strategy in the FTX exchange connector using the Hummingbot app.

*Check out [Hummingbot Academy](https://hummingbot.io/en/academy) for more resources related to this strategy and others!*
