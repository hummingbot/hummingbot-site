# `cross-exchange-mining`

## 📁 Strategy Info

* Folder: [/hummingbot/strategy/cross_exchange_mining](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/cross_exchange_mining)
* Configs: [cross_exchange_mining_config_map_pydantic.py](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_mining/cross_exchange_mining_config_map_pydantic.py)
* Maintainer: [bsmeaton](https://github.com/bsmeaton)

## 🏆 Strategy Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=COMMUNITY&color=green)

Community strategies have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## 📝 Summary

The Cross Exchange Mining strategy creates buy or sell limit orders on a maker exchange at a spread wider than that of the taker exchange. Filling of the order on the maker exchange triggers a balancing of the portfolio on the taker exchange at an advantageous spread (The difference between the two spreads being equal to the `min_profitability`) thereby creating profit.

The strategy tracks the amount of base asset across the taker and maker exchanges for `order_amount` and continually seeks to rebalance and maintain assets, thereby reducing any exposure risk whereby the user has too much quote or base asset in falling or rising markets.

## 🏦 Exchanges supported

* SPOT CLOB CEX

## 🛠️ Strategy configs

| Parameter                    | Type        | Default     | Prompt New? | Prompt                                                 |
|------------------------------|-------------|-------------|-------------|--------------------------------------------------------|
| `maker_market`               | string      |             | True        | Enter your maker spot connector (Exchange) |
| `taker_market`               | string      |             | True        | Enter your taker connector (Exchange/AMM) |
| `maker_market_trading_pair`  | string      |             | True        | Enter the token trading pair you would like to trade on `[maker_market]`|
| `taker_market_trading_pair`  | string      |             | True        | Enter the token trading pair you would like to trade on `[taker_market]`|
| `min_profitability`          | decimal     |             | True        | What is the minimum profitability for you to make a trade? (Enter 1 to indicate 1%)|
| `order_amount`               | decimal     |             | True        | What is the amount of `base_asset` per order?|
| `slippage_buffer`            | decimal     | 5           | True        | How much buffer do you want to add to the price to account for slippage for taker orders?  |
| `balance_adjustment_duration`| decimal     | 5           | True        | Time interval between subsequent portfolio rebalances?  |
| `min_prof_tol_low`           | decimal     | 0.05        | True        | What percentage below the min profitability do you want to cancel the set order?  |
| `min_prof_tol_high`          | decimal     | 0.05        | True        | What percentage above the min profitability do you want to cancel the set order?  |
|`volatility_buffer_size`      | decimal     | 120         | True        | The period in seconds to calulate volatility over?  |
| `min_prof_adj_timer`         | decimal     | 3600        | True        | Time interval to adjust min profitability over by using results of previous trades in last 24 hrs?  |
| `min_order_amount`           | decimal     | 0           | True        | What is the minimum order amount required for bid or ask orders?  |
| `rate_curve`                 | decimal     | 1           | True        | Multiplier for rate curve for the adjustment of min profitability based on previous trades over last 24 hrs?  |
| `trade_fee`                  | decimal     | 0.25        | True        | Complete trade fee covering both taker and maker trades?  |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/cross_exchange_mining/cross_exchange_mining.py)

The strategy operates by maintaining the 'order amount' base balance across the taker and maker exchanges. The strategy sets buy or sell limit orders on the maker exchanges, these orders are set when sufficient quote or base balance exists on the taker exchange in order to be able to complete or balance the trade on the taker exchange when a limit order on the maker exchange is filled.

The strategy can balance trades immediately when an imbalance in base asset is detected and although the taker trade will be acted upon immediately after an imbalance is detected subsequent balances will be spaced by at least the `balance_adjustment_duration` variable, just to ensure the balances are updated and recorded before the balance is retried erroneously. In this way the strategy will exactly maintain the 'order amount' in terms of base currency across the exchanges selling base currency when a surplus exists or buying base currency if short.

The strategy seeks to make profit in a similar way that cross exchange market making operates. by placing a wide spread on the maker exchange that when filled will allow the user to buy back base currency at a lower price on the taker exchange (In case of a sell order fill on the maker exchange) or sell base currency at a higher price on the taker exchange in case of buy order filled on the maker exchange. The difference in price between these two transactions should be the `min_profitability` variable. Setting this variable to a higher value will result in less trade fills due to a larger spread on the maker exchange but also a greater profitability per transaction and vise versa.

When an order is set with a spread that meets the `min_profitability` variable at that time it is then monitored each tick. The theoretical profitability of the trade will vary over time as orders on the taker orderbook changes meaning the cost of balancing the filled trade will constantly change. The order is cancelled and reset back at the `min_profitability` amount when the profitability either drops below the ``min_profitability` minus min_prof_tol_low point or rises above the `min_profitability` plus `min_prof_tol_high` point.

In addition to this basic logic a leading and lagging adjustment to the `min profitability` figure is made during the strategy run.

**Short term, Leading adjustment:**

The strategy looks at the current volatility in the maker market to adjust the `min profitability` figure described above. The function looks at the standard deviation of the currency pair prices across a time window equal to `volatility_buffer_size`. The standard deviation figure is then converted by taking the three sigma percentage away from the mid price over that range and adding it to the `min profitability`. In this way a higher volatility or standard deviation figure would increase the min profitbaility creating a larger spread and reducing risk during periods of volatility. The adjustment is set for a time period equal to the `volatility_buffer_size` unless a higher volatility adjustment is calculated in which case its set at the higher adjustment rate and timer reset.

**Long term, Lagging adjustment:**

The strategy looks at the previous trades completed and balancing trades in order to understand the success of the strategy at producing profit. The strategy will again adjust the 'min_profitability' figure by widening the spread if the user is losing money and tightening the spread if the trades are too profitable. This is due to the strategy aiming to essentially provide a break even portfolio to maximise mining rewards, hence the name `cross_exchange_mining`.

The previous trades in the users `hummingbot/data` file are read by the strategy at intervals equal to the `min_prof_adj_timer` when this function is called it looks at trades recorded within the last 24 hours in the file and based on timestamp seeks to match the filled maker and taker orders that make up a full balanced trade.

The strategy uses the `trade_fee` variable in this calculation to take into account the amount of money paid to the both exchanges during these trades, the calculation returns the average profitability of the trades and balance pairs completed in the previous 24 hours. This figure is then converted into an adjustment. a 0% profitability (Based on order amount) would lead to 0 adjustment.

Positive or negative percentages made are converted into an adjutsment using the relationship `(Percentage * rate_curve)**3 + min_profitability`. The cubed figure exponentially penalises large profit or loss percentages gained thereby greatly reducing the min_profitability (In case of large gains) or greatly increasing the min_profitability figure (In case of large losses). The `rate_curve` variable acts to provide a multiplier for this adjustment it is reccomended to keep this in the 0.5-1.5 range with the higher it is set the more the min_profitability adjustment is affected by previous trades.

From a personal perspective I have used the [XEMM strategy](/strategies/cross-exchange-market-making) for a number of years and my motivation for this strategy comes not from improving how effective the strategy is at making money but it is to increase the reliability of the strategy in maintaining a hedged position of base assets even during wild market swings. The code is entirely rewritten from the XEMM strategy aimed at making a more logical progression and removing elements that I find add complexity, reducing reliability without benefitting the user.

The strategy is intended for use with the same pairs on both taker and maker centralised exchanges. The strategy utilises market trades to fill on taker side.
