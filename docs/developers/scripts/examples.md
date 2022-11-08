See the following examples located in the [`/scripts`](https://github.com/hummingbot/hummingbot/tree/development/scripts) folder for how to:

- Place orders
- Listen to order book events
- Use the rate oracle
- Call exchange APIs
- Process the events produced by the connectors related to the orders lifecycle


## `dca_example`

[:fontawesome-solid-code: Code](https://github.com/hummingbot/hummingbot/blob/development/scripts/dca_example.py)

**Author**: https://github.com/aarmoa

**Description**: This script shows how to set up a simple strategy to buy a token on fixed (dollar) amount on a regular basis.

## `buy_dip_example`

[:fontawesome-solid-code: Code](https://github.com/hummingbot/hummingbot/blob/development/scripts/buy_dip_example.py)

**Author**: https://github.com/aarmoa

**Description**: This script buys ETH (with BTC) when the ETH-BTC drops 5% below 50 days moving average (of a previous candle). It demonstrates:

- How to call Binance REST API for candle stick data
- How to incorporate external pricing source (Coingecko) into the strategy
- How to listen to order filled event
- How to structure order execution on a more complex strategy

## `simple_pmm_example`

[:fontawesome-solid-code: Code](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_pmm_example.py) | [Template](https://www.notion.so/hummingbot-foundation/Simple-PMM-63cc765486dd42228d3da0b32537fc92)

**Author**: https://github.com/cardosofede

**Botcamp cohort**: Sept 2022

**Description**: This script implements a simple version of Hummingbot’s flagship pure market making strategy that will be useful as a baseline that lets other users build their own features on top of it.

## `adjusted_mid_price`

[:fontawesome-solid-code: Code](https://github.com/hummingbot/hummingbot/blob/master/scripts/adjusted_mid_price.py) | [Template](https://hummingbot-foundation.notion.site/PMM-with-Adjusted-Midpoint-4259e7aef7bf403dbed35d1ed90f36fe)

**Author**: https://github.com/cmichaeltimmons

**Botcamp cohort**: Sept 2022

**Description**: This is an example of a pure market making strategy with an adjusted mid price.  The mid price is adjusted to the midpoint of a hypothetical buy and sell of a user defined {test_volume}.
