## What are AMM Connectors?

Automated Market Maker (AMM) connectors integrate into a decentralized exchange's Javascript SDK or smart contracts, enabling standardized transaction placement and blockchain data fetching from the perspective of Hummingbot strategies. They standardize interactions with the idiosyncratic APIs offered by these platforms, for purposes such as gathering order book and blockchain data, as well as sending and cancelling transactions and orders.

AMM connectors allow users to create [Strategies](/strategies) and [Scripts](/scripts) that can operate on different decentralized exchanges without modification.

## AMM Connector Types

Currently, Hummingbot supports AMM connectors that use REST-based interactions with blockchain networks and their automated market maker (AMM) and CLOB DEXs, intermediated by the [Gateway](/gateway) middleware. Each connector is a folder in [`src/connectors`](https://github.com/hummingbot/gateway/tree/main/src/connectors). See [AMM Connectors](/dex-connectors) for more information about AMM connectors.

## AMM Connector Maintenance

AMM connectors require ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as well as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains each reference connector standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

## AMM Connector Governance

Each quarter, the [AMM Connector Poll](/governance/polls) allocates HBOT bounties toward the top AMM connectors and determines which connectors should be included in the codebase going forward.

Connectors may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

Polls also decide which connectors should be included in the codebase for the next quarterly [Epoch](../governance/epochs.md).

## Building and Contributing AMM Connectors

For developers building and contributing AMM connectors, see the pages below for each connector standard:

* [Building AMM Connectors](/gateway/adding-dex-connectors)

Developers may submit connectors for inclusion into the Hummingbot codebase via a [New Connector Proposal](/governance/proposals) that contains the link to a valid Github pull request. If the proposal is approved by HBOT holders, Hummingbot Foundation will review and merge the pull request into the codebase.

See [Contribution Guidelines](/developers/contributions/) for the process to get connectors and other pull requests merged into the codebase.

## AMM Connector Standards

For AMM connectors in the Gateway module to be compatible with Hummingbot strategies, they need to support the API endpoints required by the connector classes listed in [`/hummingbot/hummingbot/connector/gateway`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/gateway).
