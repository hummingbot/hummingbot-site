## What are Connectors?

Connectors are packages of code that link Hummingbot's internal trading engine with real-time and historical data from different cryptocurrency exchanges and blockchains, via WebSocket and/or REST API. They standardize interactions with the idiosyncratic APIs offered by these platforms, for purposes such as gathering order book and blockchain data, as well as sending and cancelling transactions and orders.

Connectors allow users to create [Strategies](/strategies) and [Scripts](/scripts) that can operate on different exchanges and blockchains without modification.

## Connector Types

Currently, Hummingbot supports three connector standards, each which define how the code encapsulated in a connector folder should offer standardized API endpoints and hook into the Hummingbot client.

* **CLOB Spot**: WebSocket-based connectors to an exchange's spot order book-based markets. Each connector is a folder in the [`hummingbot/connector/exchange`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange) folder.

* **CLOB Perp**: WebSocket-based connectors to an exchange's perpetual futures order book-based markets. Each connector is a folder in the [`hummingbot/connector/derivative`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative) folder. By convention, these connector names end in `_perpetual`.

* **AMM**: REST-based Connectors to blockchain networks and their automated market maker (AMM) and CLOB DEXs, intermediated by the [Gateway](/gateway) middleware. Each connector is a folder in [`src/connectors`](https://github.com/hummingbot/gateway/tree/main/src/connectors). See [AMM Connectors](/dex-connectors) for more information about AMM connectors.

## Connector Maintenance

Connectors requires ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as wel as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains each reference connector standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

## Connector Governance

Each quarter, [Connector Polls](/governance/polls) allocates HBOT bounties toward the top CEX connectors and determines which connectors should be included in the codebase going forward.

Connectors may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

Polls also decide which connectors should be included in the codebase for the next quarterly [Epoch](../governance/epochs.md).

## Building Connectors

For developers building CLOB connectors, see the pages below:

* [Building CLOB Spot Connectors](/developers/connectors/spot-connector-checklist)
* [Spot Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Spot-Connector-v2-1-1cc43830938445c9974f43ef861d59f1)
* [Building CLOB Perp Connectors](/developers/connectors/perp-connector-checklist)
* [Perp Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Perp-Connector-v2-1-57d8391eb54c40929f77067355fd551e)

See [Contribution Guidelines](/developers/contributions/) for the process to get your pull requests merged into the codebase.