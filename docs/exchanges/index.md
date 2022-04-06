An exchange connector integrates with the API of a crypto exchange to enable high-frequency, two-way communication between the Hummingbot client and the exchange.

## Exchange types

Hummingbot exchange connectors try to standardize trading logic and order types across many different exchanges. Connectors are designed to handle specific exchange types:

* [Spot](spot): Connectors to central limit order book (CLOB) exchanges that trade **spot** markets
* [Perp](perp): Connectors to central limit order book (CLOB) exchanges that trade **perpetual swap** markets
* [AMM](amm): Connectors to automatic market maker (**AMM**) decentralized exchanges

!!! note "Centralized vs decentralized exchanges"
    Hummingbot connects to both centralized and decentralized exchanges. Centralized exchanges require users to enter API keys, while decentralized exchanges require users to connect their wallets to the underlying blockchain [protocols](/protocols).

In the future, Hummingbot aims to extend support to other exchange and asset types. Developers interested in forking Hummingbot to support other types of exchanges can discuss with the community on the **#dev** channels in the Hummingbot Discord.

## Status

Connectors may vary in quality. The Hummingbot Foundation QA team keeps a rough indicator of each connector's working status:

* <span style="color:green; font-size:20px">⬤</span> Connector appears to be working properly.
* <span style="color:yellow; font-size:20px">⬤</span> Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/issues) related to this exchange.
* <span style="color:red; font-size:20px">⬤</span> Connector does not seem to work.

## Maintainer

Connector maintainers are responsible for fixing bugs and updating the connector when the exchange API or the Hummingbot connector spec changes.

## Adding connectors

Developers may submit connectors for review by the Hummingbot Foundation team. Please note the [Contribution Guidelines](/developers/contributions/).

Exchanges and other institutions can visit the [official Hummingbot website](https://hummingbot.io), maintained by CoinAlpha, to discuss different ways to build and maintain connectors.
