!!! note
    The information below are for developers building `spot` and `perp` connectors that integrate directly into the Hummingbot client. For information on developing `gateway` connectors that use [Gateway](/gateway), see [Building Gateway Connectors](/gateway/adding-dex-connectors).

## Exchange API Requirements

See [Exchange API Requirements](/developers/connectors/build) for what the exchange API requirements needed to support the latest Hummingbot spot and perp connector standards.

## Building Connectors

To gain a deeper understanding for how Hummingbot connectors work, we recommend reading the following engineering posts from Hummingbot's original technical founder:

- [Hummingbot Architecture - Part 1](../../blog/posts/hummingbot-architecture-part-1/index.md)
- [Hummingbot Architecture - Part 2](../../blog/posts/hummingbot-architecture-part-2/index.md)

The following pages offer more details on various components and classes of a connector:

- [Connector Architecture](/developers/connectors/architecture/): Overview of how a connector works
- [Order Lifecycle and Market Events](/developers/connectors/architecture/order_lifecycle): How a connector handles the lifecycle of an order
- [Handling Rate Limits with API Throttler](/developers/connectors/api_throttler): Using the `AsyncThrottler` class to handle exchange rate limits
- [Debug and Testing Connectors](/developers/connectors/debug): Various ways to test and debug a connector

## Spot Connectors

Spot connectors provide WebSocket and REST-based integrations to spot order book-based markets offered by an exchange, which may be centralized (CEX) or decentralized (DEX). Each connector is a folder in the [`hummingbot/connector/exchange`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange) folder.

* [Spot Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Spot-Connector-v2-1-1cc43830938445c9974f43ef861d59f1): Use this template to build `spot` connectors that conform to the latest standard, which allows the connector to be used with [V2 Strategies](/strategies). 
* [Spot Connector Developer Checklist](/developers/connectors/spot-connector-checklist/): Similar to the Notion Template, this page provides a checklist of the key steps and the main components and functionalities of each class
* [Spot Connector QA Checklist](/developers/connectors/test/): Our QA team will conducts these tests before approving `spot` connectors

## Perp Connectors

Perp connectors provide WebSocket and REST-based integrations to perpetual futures order book-based markets offered by an exchange, which may be centralized (CEX) or decentralized (DEX). Each connector is a folder in the [`hummingbot/connector/derivative`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative) folder. By convention, these connector names end in `_perpetual`.

* [Perp Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Perp-Connector-v2-1-57d8391eb54c40929f77067355fd551e): Use this template to build `perp` connectors that conform to the latest standard, which allows the connector to be used with [V2 Strategies](/strategies).
* [Perp Connector Developer Checklist](/developers/connectors/perp-connector-checklist/): Similar to the Notion Template, this page provides a checklist of the key steps and the main components and functionalities of each class
* [Perp Connector QA Checklist](/developers/connectors/test-perp/): Our QA team will conducts these tests before approving `perp` connectors

## Contributing Connectors

Introducing an exchange connector into the Hummingbot code base requires a mutual commitment from both the Hummingbot Foundation team and the contributing developers to maintaining a high standard of code quality and software reliability.

We encourage and welcome new connector contributions from the community, subject to the guidelines and expectations outlined below.

- [x] **Connector folder**: A folder that contains a complete set of connector files based off of the examples above.
- [x] **Adherence to standard**: Connector should pass both the Developer and QA Checklist for its type
- [x] **Unit tests:** The pull request should pass code coverage checks
- [x] **Documentation**: Accompanying documentation pull request to [`hummingbot-site`](https://github.com/hummingbot/hummingbot-site) repo
- [x] **Inline code comments** Particularly for any code that is materially different from the templates

Here is an overview of the process to get a new connector merged into the codebase:

1. Fork the [Hummingbot](https://github.com/hummingbot/hummingbot) or [Gateway](https://github.com/hummingbot/gateway) repositories and add a `spot` or `perp` connector that fulfills the respective requirements above.
2. Submit a pull request with the connector to the `development` branch in Github, following the [Contribution Guidelines](../contributions.md).
3. Submit a [New Connector Proposal](/governance/proposals) in the [Hummingbot NCP Snapshot](https://snapshot.org/#/hbot-ncp.eth)

## Additional Resources

For questions, please visit the **#developer-chat** channel on our [Discord](https://discord.gg/hummingbot).