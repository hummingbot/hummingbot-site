See the following examples located in the [`/scripts`](https://github.com/hummingbot/hummingbot/tree/development/scripts) folder for how to:

- Place orders
- Listen to order book events
- Use the rate oracle
- Call exchange APIs
- Process the events produced by the connectors related to the orders lifecycle

## `adjusted_mid_price`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/adjusted_mid_price.py

**Author**: https://github.com/cmichaeltimmons

**Description**: This is an example of a pure market making strategy with an adjusted mid price.  The mid price is adjusted to the midpoint of a hypothetical buy and sell of a user defined {test_volume}.

## `buy_dip_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/development/scripts/buy_dip_example.py 

**Author**: https://github.com/aarmoa

**Description**: This script buys ETH (with BTC) when the ETH-BTC drops 5% below 50 days moving average (of a previous candle). It demonstrates:

- How to call Binance REST API for candle stick data
- How to incorporate external pricing source (Coingecko) into the strategy
- How to listen to order filled event
- How to structure order execution on a more complex strategy

## `buy_low_sell_high`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/buy_low_sell_high.py 

**Author**: https://github.com/Alkhalifah-blockchain

**Description**: N/A

## `buy_only_three_times_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/buy_only_three_times_example.py

**Author**: https://github.com/cardosofede

**Description**: This example places shows how to add a logic to only place three buy orders in the market, and uses an event to increase the counter and stop the strategy once the task is done.

## `dca_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/development/scripts/dca_example.py 

**Author**: https://github.com/cardosofede

**Description**: This script shows how to set up a simple strategy to buy a token on fixed (dollar) amount on a regular basis.

## `format_status_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/format_status_example.py 

**Author**: https://github.com/cardosofede

**Description**: This script shows how to add a custom format_status to a strategy and query the order book, and run the command `status --live`, once the strategy starts.

## `log_price_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/log_price_example.py 

**Author**: https://github.com/cardosofede

**Description**:  This script shows how to get the ask and bid of a market and log it to the console.

## `simple_pmm_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_pmm_example.py

**Author**: https://github.com/cardosofede

**Description**: This script implements a simple version of Hummingbot’s flagship pure market making strategy that will be useful as a baseline that lets other users build their own features on top of it.

## `simple_rsi_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_rsi_example.py

**Author**: https://github.com/cardosofede

**Description**: The script shows how to automate buys upon an overbought RSI signal and sell orders upon an oversold RSI signal.


## `simple_vwap_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_vwap_example.py

**Author**: https://github.com/cardosofede

**Description**: This example lets you create one VWAP in a market using a percentage of the sum volume of the order book until a spread from the mid price.

This example demonstrates:

- How to get the account balance
- How to get the bids and asks of a market
- How to code a "utility" strategy

## `simple_xemm_example`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_xemm_example.py

**Author**: https://github.com/mifeng

**Description**: A simplified version of the cross-exchange market making strategy, this bot makes a market on the maker pair and hedges any filled trades in the taker pair. If the spread (difference between maker order price and taker hedge price) dips below min_spread, the bot refreshes the order.

## `triangular_arbitrage`

**Code**: https://github.com/hummingbot/hummingbot/blob/master/scripts/triangular_arbitrage.py

**Author**: https://github.com/supervik

**Description**: This script executes arbitrage trades on 3 markets of the same exchange when a price discrepancy among those markets found.