# Hummingbot Gateway

!!! warning "DEX / Blockchain Experience Needed"
    Since running DEX trading bots successfully is more complex and entails more specialized blockchain engineering than running CEX bots, we recommend Gateway for users with prior blockchain engineering or DEX trading experience.

## What is Gateway?

Hummingbot Gateway is open source API middleware that helps the Hummingbot client to connect to decentralized exchanges (DEX) on various blockchain networks. 

Gateway manages interfacing with DEX connectors and exposes standard REST API endpoints for trading and liquidity-related functionality on these DEXs.

Essentially, Gateway is a light web server that enables Hummingbot to send and receive data from different blockchain protocols and provides an easier entry point for external devs to build connectors to other protocols.

## Gateway Connector Maintenance

Like other connectors, Gateway DEX connectors require ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as well as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains certain reference connectors as the standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

## Connector Governance

Each quarter, [Connector Polls](/governance/polls) allocates HBOT bounties toward the top exchanges and determines which exchanges should be included in the codebase for the next quarterly [Epoch](/governance/epochs.md). See the **Connectors** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.


## Adding New Gateway Connectors

Like other connectors, Gateway connectors may be contributed by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

For developers building Gateway connectors, see [Building AMM Connectors](/gateway/legacy/adding-dex-connectors). See [Contribution Guidelines](/developers/contributions/) for more information.
