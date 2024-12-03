## What are AMM Connectors?

Automated Market Maker (AMM) connectors integrate into a decentralized exchange's Javascript SDK or smart contracts, enabling standardized transaction placement and blockchain data fetching from the perspective of Hummingbot strategies.

All AMM connectors reside in [Gateway](/gateway), API middleware that helps Hummingbot clients interact with decentralized exchanges (DEXs) on various blockchain networks.

Each connector is a folder in [`src/connectors`](https://github.com/hummingbot/gateway/tree/main/src/connectors).

## AMM Connector Maintenance

AMM connectors require ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as well as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains certain reference connectors as the standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

## AMM Connector Governance

Each quarter, [Connector Poll](/governance/polls) allocates HBOT bounties toward the top AMM connectors and determines which AMM connectors should be included in the codebase going forward.

AMM connectors may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

See the **Connectors** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

Polls also decide which connectors should be included in the codebase for the next quarterly [Epoch](../governance/epochs.md).

## Building AMM Connectors

For developers building AMM connectors, see [Building AMM Connectors](/gateway/adding-dex-connectors).

See [Contribution Guidelines](/developers/contributions/) for how to get your pull requests merged into the codebase.
