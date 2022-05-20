See the following examples located in the [`/scripts`](https://github.com/hummingbot/hummingbot/tree/development/scripts) for how to:

- Place orders
- Listen to order book events
- Use the rate oracle
- Call exchange APIs
- Process the events produced by the connectors related to the orders lifecycle

## `dca_example`

Code: https://github.com/hummingbot/hummingbot/blob/development/scripts/dca_example.py

The "Hello World" script. This example shows how to set up a simple strategy to buy a token on fixed (dollar) amount on a regular basis.

## `buy_dip_example`

Code: https://github.com/hummingbot/hummingbot/blob/development/scripts/buy_dip_example.py

This strategy buys ETH (with BTC) when the ETH-BTC drops 5% below 50 days moving average (of a previous candle). It demonstrates:
- How to call Binance REST API for candle stick data
- How to incorporate external pricing source (Coingecko) into the strategy
- How to listen to order filled event
- How to structure order execution on a more complex strategy
