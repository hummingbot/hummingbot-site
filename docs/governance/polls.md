The Hummingbot open source codebase contains [connectors](/exchanges) to various CEXs, DEXs and blockchain networks where users can execute automated trading strategies. The connected exchanges and networks are constantly changing and upgrading. In order to accommodate API changes, new product and order types, and other changes, each connector requires ongoing maintenance and engineering work.

Polls allow HBOT holders decide how maintenance bandwidth and development bounties are allocated toward the connectors in the codebase.

## Poll Types

Each quarterly [epoch](/governance/epochs), HBOT voters vote on three types of Polls:

* [CEX Connectors](/cex-connectors/): Centralized exchanges like Binance, Gate.io, Kucoin, etc.
* [DEX Connectors](/dex-connectors): Decentralized exchanges like dYdX, Uniswap, etc
* [Chain Connectors](/chains): L1 and L2 blockchain networks such as Ethereum, Polygon, Arbitrum, etc.

## What Polls Decide

Each Connector Poll decides for the upcoming each epoch:

### Reference Connector

The #1 vote-getting connector is **Gold**, which serves as the reference template for all other connectors of that type for architectural improvements. The Foundation maintains for this connector and attempts improve them by keeping up with exchange/chain upgrades and adding new functionalities.

### Bounties Budget

The #2, #3, and #4 vote-getting choices are the **Silver** connectors, which along with Gold connectors are allocated bounties that incentivize community members to fix bugs and create content for them.

Each epoch, the Foundation allocates a quarterly Bounties Budget to Gold and Silver connectors to fund maintenance and improvements. 400K HBOT are allocated to each Gold connector, and 100K HBOT is allocated to each Silver connector. Bug bounties and Improvement Proposals for these connectors draw upon this budget. If a connector's Bounties Budget is not fully used during the epoch, it does not carry over to the following epoch.

Unit tests for Gold and Silver connectors are run with each merge, which ensures that the connectors work. In addition, the Foundation by running long-term testing bots for their connectors and providing HBOT rewards to users who answer community questions related to them.

### Inclusion Threshold

Each connector in the codebase requires ongoing maintenance, documentation and testing. The Foundation regularly reviews new and existing connectors for security issues and breaking changes to ensure that they do not cause issues for other users. Without a way to maintain a high level of connector quality, the Hummingbot codebase may descend into an unusable spaghetti codebase.

In each Poll, a connector needs to garner a minimum amount of HBOT voting power to meet the **Connector Inclusion Threshold**. Otherwise, the connector will be removed from the codebase in the following monhthly release.

Currently, the Connector Inclusion Threshold is **200,000 HBOT**.

## Polls Process

During the first week of each quarter, the Foundation will create Hummingbot Governance Proposals in the [HBOT Snapshot sub-space](https://snapshot.org/#/hbot.eth) for each poll.

Each poll lasts for 7 days, and any Ethereum wallet holding HBOT tokens at poll creation may vote. 1 HBOT token equals 1 vote.

Afterwards, the Foundation will implement the approved changes in the subsequent monthly release.
