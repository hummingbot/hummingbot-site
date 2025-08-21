## What are Connectors?

Connectors are packages of code that link Hummingbot's internal trading engine with real-time and historical data from different cryptocurrency exchanges and blockchains, via WebSocket and/or REST API. They standardize interactions with the idiosyncratic APIs offered by these platforms, for purposes such as gathering order book and blockchain data, as well as sending and cancelling transactions and orders.

## CLOB Connectors

CLOB (Central Limit Order Book) connectors integrate into a CLOB exchange's WebSocket API, enabling standardized order placement/cancellation and order book data fetching from the perspective of Hummingbot strategies. These connectors work with both centralized exchanges (CEX) and decentralized exchanges (DEX) that utilize a central limit order book model. 

See [CLOB Connectors](./clob.md) for a list of the current CLOB connectors in Hummingbot

## Gateway DEX Connectors

Gateway connectors establish and maintain connections to automated market maker (AMM) DEXs and other protocols on various blockchain networks, interfaces with their Javascript SDKs, and exposes standard REST API endpoints for trading and liquidity provision-related actions on these DEXs.

See [Gateway](/gateway) for comprehensive documentation about Gateway, including supported DEX connectors, API commands, and configuration.

## Connector Maintenance

CLOB connectors requires ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as wel as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains certain reference connectors to maintain an updated standard and leverages community-based developers to maintain other connectors to the same standard. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

## Connector Governance

Hummingbot Foundation governance lets HBOT holders which exchanges are supported by the open source codebase.

New connectors may be contributed by community members via [New Connector Proposals](/governance/proposals), which require a pull request with the connector code to the Hummingbot Github repo, along with a minimum HBOT balance to create.

For existing connectors, quarterly [Exchange Connector Polls](/governance/polls) allocates HBOT bounties toward top exchanges and determines which exchanges should be included in the codebase going forward. See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.
