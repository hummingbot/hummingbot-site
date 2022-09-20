## What are exchange connectors?

Exchange connectors are packages of code that link Hummingbot's internal trading algorithms with live information from different cryptocurrency exchanges. They interact with a given exchange's API, such as by gathering order book data and sending and cancelling trades.

## CEX Connector Development Checklist

For spot exchanges, we have a **Notion template** available which you can use as a checklist for developing the connector and it should help you understand the main components and functionalities of each class. You can view the template [here](https://hummingbot-foundation.notion.site/CEX-Connector-Development-6506b85ea96a430b8448216b0429cb02)

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

1. Build a spot or perp connector that fulfills the requirements listed in the [Build process](./build) and the [QA Testing process](./test).

2. Submit a pull request with the connector to the `development` branch in Github, following the [Contribution Guidelines](/developers/contributions/).

3. Submit a Pull Request Proposal (PRP) in the [Hummingbot PRP Snapshot](https://snapshot.org/#/hbot-prp.eth). In particular, the PRP should identify a dedicated maintainer who will be responsible for fixing bugs and applying updates.

Only connectors

## Additional resources

For questions, please visit the **#developer-chat** channel on our [Discord](https://discord.hummingbot.io) or post your question under the **Connectors** topic in the [official forum](https://forum.hummingbot.org/).
