## What are Connectors?

Connectors are packages of code that link Hummingbot's internal trading engine with real-time and historical data from different cryptocurrency exchanges and blockchains, via WebSocket and/or REST API. They standardize interactions with the idiosyncratic APIs offered by these platforms, for purposes such as gathering order book and blockchain data, as well as sending and cancelling transactions and orders.

Connectors allow users to create [Strategies](/strategies) and [Scripts](/scripts) that can operate on different exchanges and blockchains without modification.

## Supported Exchanges and Blockchains

Hummingbot maintains connectors to the following types of platforms:

* [**CEX**](/cex-connectors/): Centralized exchanges take custody of user assets, i.e. Binance, Gate.io, Kucoin, etc.
* [**DEX**](/dex-connectors/): Decentralized exchanges are platforms in which user assets are stored non-custodially in smart contracts, i.e. Uniswap, dYdX, PancakeSwap, etc.
* [**Chain**](/chains/): L1/L2 blockchain networks such as Ethereum, Polygon, Arbitrum, etc.

Quarterly [Polls](/governance/polls) allow the Hummingbot community to rank the supported CEXs, DEXs and Chains in the codebase. This process allocates HBOT tokens toward connector maintenance, which are listed in the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing). The Foundation uses these allocations to assign developer [Bounties](/bounties) to address Github issues reported by users.

Polls also decide which connectors should be included in the codebase for the next quarterly [Epoch](../governance/epochs.md).

## Connector Standards

Currently, Hummingbot supports three connector standards, each which define how the code encapsulated in a connector folder should offer standardized API endpoints and hook into the Hummingbot client.

* `spot`: WebSocket-based connectors to spot order book-based markets offered by an exchange, which may be centralized (CEX) or decentralized (DEX). Each connector is a folder in the [`hummingbot/connector/exchange`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange) folder.

* `perp`: WebSocket-based connectors to perpetual futures order book-based markets offered by an exchange, which may be centralized (CEX) or decentralized (DEX). Each connector is a folder in the [`hummingbot/connector/derivative`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative) folder. By convention, these connector names end in `_perpetual`.

* `gateway`: REST-based Connectors to blockchain networks and their automated market maker (AMM) and CLOB DEXs, intermediated by the [Gateway](/gateway) middleware.  Each Gateway connector is a folder in the Gateway repository, either in [connectors](https://github.com/hummingbot/gateway/tree/main/src/connectors) or [chains](https://github.com/hummingbot/gateway/tree/main/src/chains).

## Connector Maintenance

Connectors requires ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as wel as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains each reference connector standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

## Building and Contributing Connectors

For developers building and contributing connectors, see the pages below for each connector standard:

* [Building Spot Connectors](/developers/connectors/spot-connector-checklist)
* [Building Perp Connectors](/developers/connectors/perp-connector-checklist)
* [Building Gateway Connectors](/gateway/adding-dex-connectors)

Developers may submit connectors for inclusion into the Hummingbot codebase via a [New Connector Proposal](/governance/proposals) that contains the link to a valid Github pull request. If the proposal is approved by HBOT holders, Hummingbot Foundation will review and merge the pull request into the codebase.

See [Contribution Guidelines](/developers/contributions/) for the process to get connectors and other pull requests merged into the codebase.
