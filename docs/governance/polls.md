The Hummingbot open source codebase contains [connectors](/exchanges) to exchanges (both centralized exchanges as well as decentralized exchanges on blockchain networks) where users can execute automated trading strategies. In order to accommodate changes in exchange API structure, new market and order types, and other exchange-side changes, connectors require ongoing maintenance and engineering work.

Polls allow HBOT holders decide how Hummingbot Foundation allocates development bounties to the connectors in the codebase, as well as which connectors should be included in the codebsae.

## Poll Types

Each quarterly epoch, HBOT voters vote on three types of Polls:

* CEX Connectors: Centralized exchanges like Binance, Gate.io, Kucoin, etc.
* DEX Connectors: Decentralized exchanges like dYdX, Uniswap, etc
* Chain Connectors: L1 and L2 blockchain networks such as Ethereum, Polygon, Arbitrum, etc.

## Impact on Connector Maintenance

The Hummingbot Foundation maintains the #1 vote-getting connector of each type (**Gold**), which acts as a standardized "gold standard" template for others of that type. The #2, #3, and #4 vote-getting choices are the **Silver** connectors, which are maintained by the Foundation via developer bounties that tracks improvements made to the Gold connectors.

Unit tests for Gold and Silver connectors are run with each merge, which ensures that the connectors work. In addition, the Foundation by running long-term testing bots for their connectors and providing HBOT rewards to users who answer community questions related to them.

## Bounties Budget

Each epoch, the Foundation allocates a quarterly Bounties Budget to Gold and Silver connectors to fund maintenance and improvements. 400K HBOT are allocated to each Gold connector, and 100K HBOT is allocated to each Silver connector. Bug bounties and Improvement Proposals for these connectors draw upon this budget. If a connector's Bounties Budget is not fully used during the epoch, it does not carry over to the following epoch.

The Foundation will be the official maintainer for this exchange's spot and perpetual connectors, and the Foundation's own engineering team will build and maintain these connectors and improve them by keeping up with exchange upgrades and mapping new functionality added via API. These connectors serve as the "gold standard" template for all other connectors of that type.

## Polls Process

During the first week of each quarter, the Foundation will create Hummingbot Governance Proposals in the [HBOT Snapshot sub-space](https://snapshot.org/#/hbot.eth) for each poll.

Each poll lasts for 7 days, and any Ethereum wallet holding HBOT tokens at poll creation may vote. 1 HBOT token equals 1 vote.

Afterwards, the Foundation will implement the approved changes in the subsequent monthly release.

## Minimum Voting Power

In eacch Poll, each choice needs to garner a minimum amount of HBOT voting power to meet the Minimum Voting Power threshold. Otherwise, the exchange connector or strategy will be removed from the codebase in the following release.

Connecor that don't meet the Minimum Voting Power threshold will be removed from the codebase.

Currently, the Minimum Voting Power is **200,000 HBOT**.

## Active Polls

### CEX Connectors

* A quarterly poll that places [centralized exchange connectors](/exchanges/) into Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector.
* The choices for this poll are the current centralized exchanges which have spot or perpetual connectors in the codebase, i.e. Binance, Coinbase, Kucoin, etc.
* After the poll ends, the top choice is the **Gold** exchange for the following quarterly epoch. 
* The #2, #3, and #4 choices are the **Silver** exchanges. The Foundation will be the official maintainer for this exchange's spot and perpetual connectors as well. However, these exchanges' connectors will be maintained via community developer bounties, tracking improvements made to the Gold exchange connectors.
* Any other exchange that meets the Minimum Voting Power threshold is a **Bronze** exchange. The Foundation does not maintain these exchanges' connectors nor will we allocate bounties for them, but they may be maintained by a member of the community.
* Note that HBOT holders can force the Foundation to fix a bug or review a pull request related to a Bronze exchange using the Priority Issues poll or Pull Request Proposal.

### DEX Connectors

* A quarterly poll that places [decentralized exchange connectors](/gateway/) into Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector.
* The choices for this poll are the current decentralized exchanges which have connectors in the Gateway or Hummingbot client codebase, i.e. Uniswap, dYdX, PancakeSwap, etc.
* DEXs with instances on different chains are considered a single exchange 
* Similar to CEX Connectors, this poll selects Gold (top 1), Silver (top 2-4), and Bronze DEXs based on voting power received. DEXs that don't meet the Minimum Voting Power threshold will be removed from the codebase.
* The Foundation will treat the Gold DEX Connector as the "gold standard" and map all of its swap and liquidity provision endpoints and support instances on all major chains. For the Silver DEXs, we will utilize HBOT developer bounties to fund improvements and fixes.
* The Foundation supports Gold and Silver DEXs by running long-term testing bots for their connectors and providing HBOT rewards to users who answer community questions related to them.
