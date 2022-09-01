An exchange connector integrates with the API of a crypto exchange to enable high-frequency, two-way communication between the Hummingbot client and the exchange.

## Exchange types

Hummingbot exchange connectors try to standardize trading logic and order types across many different exchanges. Connectors are designed to handle specific exchange types:

* [Spot](spot): Connectors to central limit order book (CLOB) exchanges that trade **spot** markets
* [Perp](perp): Connectors to central limit order book (CLOB) exchanges that trade **perpetual swap** markets

!!! note "DEX support"
    Hummingbot connects to both centralized and decentralized exchanges (DEX). Certain DEX connectors like dYdX and Loopring are in the primary Hummingbot codebase, while other DEX connectors like Uniswap are in Gateway. See [Gateway](/gateway) for a list of those exchanges.

## Connector certification

Since Hummingbot is an open source codebase, connectors vary in quality and level of updates. To maintain a higher standard of quality for a subset of connectors, Hummingbot Foundation utilizes the [Exchange Certification](/maintenance/certification) program to allow the community to vote for which connectors the Foundation focuses its time/effort on maintaining.

In addition, the Foundation will prioritize creating [bug bounties](/maintenance/bounties) for bugs related to certified exchanges and work with each certified exchange on partnerships to promote usage of their connectors.

## Adding connectors

Developers may submit connectors for review by the Hummingbot Foundation team. Please note the [Contribution Guidelines](/developers/contributions/).

Exchanges and other institutions can visit the [official Hummingbot website](https://hummingbot.io), maintained by CoinAlpha, to discuss different ways to build and maintain connectors.
