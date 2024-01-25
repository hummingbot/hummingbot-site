## What are connectors?

Connectors are packages of code that link Hummingbot's internal trading engine with real-time and historical dat from different cryptocurrency exchanges and blockchains, via both WebSocket and REST API. They standardize interactions with the idiosyncratic APIs offered by these platforms, for purposes such as gathering order book or blockdhain data and sending and cancelling trades. 

Connectors enables users to create [strategies](/strategies) that can operate on different exchanges and blockchains without modification.

## Types of Connectors

Currently, Hummingbot supports three types of connectors, each one standardizing a specific type of market:

* `spot`: Connectors to spot order book-based markets offered by an exchange, which may be centralized (CEX) or decentralized (DEX). Each connector is a folder in the [`hummingbot/connector/exchange`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange) folder. 

* `perpetual`: Connectors to perpetual futures order book-based markets offered by an exchange, which may be centralized (CEX) or decentralized (DEX). Each connector is a folder in the [`hummingbot/connector/derivative`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative) folder. By convention, these connectors end in `_perpetual`.

* `gateway`: Connectors to blockchain networks and their automated market maker (AMM) and CLOB DEXs. The [`hummingbot/connector/gateway`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange) folder contains the sub-types of markets that are supported. Each Gateway connector is a folder in the [Gateway](/gateway) repository, either in [connectors](https://github.com/hummingbot/gateway/tree/main/src/connectors) or [chains](https://github.com/hummingbot/gateway/tree/main/src/chains).

## CEX Connector Development Checklist

For spot exchanges, we have a [**Notion template**](https://hummingbot-foundation.notion.site/CEX-Connector-Development-6506b85ea96a430b8448216b0429cb02) available which you can use as a checklist for developing the connector and it should help you understand the main components and functionalities of each class. 

## Templates

You can find the existing connectors [here](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector).
Note that each folder contained here marks different exchange connector types. These should serve as a template for creating a new exchange connector.

Building a new exchange connector requires conforming to the template code to the new exchange's APIs, identifying and handling any differences in functions/behaviors, and testing the new exchange connector on that exchange.

!!! note "The Gold Standard"
    We recommend referring to the [Binance Spot](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/binance) and the [Bybit Perpetual](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/bybit_perpetual) connectors as the most up-to-date connector implementations in the codebase.

## Exchange connector requirements

Introducing an exchange connector into the Hummingbot code base requires a mutual commitment from the Hummingbot team and community developers to maintaining a high standard of code quality and software reliability.

We encourage and welcome contributions from the community, subject to the guidelines and expectations outlined below.

1. **Connector folder**: A folder that contains a complete set of connector files based off of the examples above.
2. **Unit tests:** Tests that cover at least 80% of the new code — see the tests in the connectors above.
3. **Inline code comments** (particularly for any code that is materially different from the templates)
4. **Documentation**: Documentation that contains useful information about the exchange for bot users

### Process overview

1. Build a spot or perp connector that fulfills the requirements listed in the [API Checklist](spot-connector-checklist.md) and the [QA Testing process](test.md).

2. Submit a pull request with the connector to the `development` branch in Github, following the [Contribution Guidelines](../contributions.md).

3. Submit a New Connector Proposal (NCP) in the [Hummingbot NCP Snapshot](https://snapshot.org/#/hbot-ncp.eth). In particular, the PRP should identify a dedicated maintainer who will be responsible for fixing bugs and applying updates.

Only connectors

## Additional resources

For questions, please visit the **#developer-chat** channel on our [Discord](https://discord.hummingbot.io) 