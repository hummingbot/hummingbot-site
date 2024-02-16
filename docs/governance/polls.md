The Hummingbot open source codebase contains [Connectors](../exchanges/index.md) to various CEXs, DEXs and blockchain networks where users can execute automated trading strategies. The connected exchanges and networks are constantly changing and upgrading. 

Each connector in the codebase requires ongoing maintenance, documentation and testing. The Foundation regularly reviews both new and existing connectors for security issues and breaking changes to ensure that they do not cause issues for other users. Without a way to maintain a high level of connector quality, the Hummingbot codebase may descend into an unusable spaghetti codebase.

Therefore, Polls allow HBOT holders to allocate maintenance bandwidth in the form of HBOT bounties toward the connectors in the codebase, as well as decide which connectors should be included going forward.

!!! note
    Prior to [HGP-50](https://snapshot.org/#/hbot.eth/proposal/0xc13f3b9fdaded22d1ce0b5528c9146fb2a762c41deed88e6c64e798465414738), polls ranked connectors into Gold, Silver, and Bronze tiers. Afterwards, Polls allocate HBOT bounties among the connectors based on their pro-rata voting share, subject tor with a maximum allocation cap.

## Current Poll Parameters

| Parameter                                       | Value              |
|-------------------------------------------------|--------------------|
| Connector Polls per Epoch                       | 3 (CEX, DEX, Chain)|
| Bounty Allocation per Poll                      | 1,000,000 HBOT     |
| Connectors Receiving Allocation                 | 4                  |
| Bounty Allocation Cap                           | 800,000 HBOT       |
| Connector Inclusion Threshold                   | 200,000 HBOT       |


### Connector Polls per Epoch

Each quarterly [epoch](epochs.md), HBOT voters vote on **three (3)** types of Polls:

* [CEX Connectors](../cex-connectors/index.md): Centralized exchanges like Binance, Kucoin, etc
* [DEX Connectors](../dex-connectors/index.md): Decentralized exchanges like dYdX, Uniswap, etc
* [Chain Connectors](../chains/index.md): Layer 1 blockchains such as Ethereum, BNB Chain, etc

### Bounty Allocation per Poll

Polls allocate a fixed pool of **1,000,000 HBOT** among the top exchanges for each Poll based on their pro-rata voting share. This per-exchange amount would be a public HBOT maintenance bounty allocation which the Foundation uses to fund bounties assigned to community developers for bug fixes and upgrades related to that exchange's Hummingbot connectors. 

### Connectors Receiving Allocation

For each poll, the top **four (4)** exchanges, ranked by number of HBOT votes, receive bounty allocations, based on their pro-rata voting share.

### Bounty Allocation Cap

The maximum allocation per exchange or chain is **800,000 HBOT**. 

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

### Connector Inclusion Threshold

In each Poll, a connector needs to receive at least **200,000 HBOT** in aggregate votes. Otherwise, the exchange's connectors will be removed from the Hummingbot codebase in the following monthly release.

## Polls Process

During the first week of each quarter, the Foundation will create Hummingbot Governance Proposals in the [HBOT Snapshot sub-space](https://snapshot.org/#/hbot.eth) for each poll.

Each poll lasts for 14 days, and any Ethereum wallet holding HBOT tokens at poll creation may vote. 1 HBOT token equals 1 vote.

Afterwards, the Foundation will implement the approved changes in the subsequent monthly release.
