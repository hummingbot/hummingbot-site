To make it easier for HBOT holders to participate in governance, Hummingbot Foundation organizes regularly polls conducted on Snapshot. Polls allow HBOT holders decide how the Foundation allocates its engineering bandwidth and HBOT developer bounties across the various components in the Hummingbot codebase.

There are four types of polls:

* **Priority Issues**: A monthly poll that prioritizes the top Github [open issues](https://github.com/hummingbot/hummingbot/issues) and [pull requests](https://github.com/hummingbot/hummingbot/pulls) that the Foundation should address.

* **CEX Connectors**: A quarterly poll that define the level of maintenance that the Foundation spends on each [centralized exchange](/exchanges/) connector

* **DEX Connectors**: A quarterly poll that define the level of maintenance that the Foundation spends on each [decentralized exchange](/gateway/) connector

* **Core Strategies**: A quarterly poll that defines which [strategies](/strategies) should be Core (officially maintained by the Foundation) versus Community (maintained by community members).

## Polls Process

The first Polls begin in January 2023.

During the first week of each month, the Foundation will create Hummingbot Governance Proposals in the [HBOT Snapshot space](https://snapshot.org/#/hbot.eth) for each poll. In the first month of each quarter, there will be 4 polls, while the second and third months only have one poll for Priority Issues.

Each poll uses the [Quadratic Voting](https://docs.snapshot.org/proposals/voting-types) voting type on Snapshot:

> Each voter may spread voting power across any number of choices. The results are calculated [quadratically](https://en.wikipedia.org/wiki/Quadratic_voting), so the number of individual voters matters more than the voting power contributed. 

Each poll lasts for one week. Afterwards, the Foundation will implement the changes to the exchange and strategy tiers in the subsequent monthly release.

## Minimum Voting Power

In the quarterly Connectors and Core Strategies polls, each choice needs to garner a minimum amount of HBOT voting power to meet the Minimum Voting Power threshold. Otherwise, the exchange connector or strategy will be removed from the codebase in the following release.

Currently, the Minimum Voting Power is **100,000 HBOT**.

## Types of Polls

### Priority Issues

* A monthly poll that selects the top **five (5)** open issues and pull requests that the Foundation prioritizes
* One week before the poll start date, the Foundation will create a Discord thread to let the community nominate new open Github issues and pull requests. All open Github issue and pull request are open for nomination.
* If an issue or pull request is not resolved by the end of the month, it is automatically nominated in the following month's poll
* Prioritization means that the Foundation will focus on resolving these issues and pull requests chosen by the community, above any other non-bug issues, including Pull Request Proposals.

### CEX Connectors

* A quarterly poll that places [centralized exchange connectors](/exchanges/) into Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector.
* The choices for this poll are the current centralized exchanges which have spot or perpetual connectors in the codebase, i.e. Binance, Coinbase, Kucoin, etc.
* After the poll ends, the top choice is the **Gold** exchange for the following quarterly epoch. The Foundation will be the official maintainer for this exchange's spot and perpetual connectors, and the Foundation's own engineering team will build and maintain these connectors and improve them by keeping up with exchange upgrades and mapping new functionality added via API. These connectors serve as the "gold standard" template for all other connectors of that type.
* The #2, #3, and #4 choices are the **Silver** exchanges. The Foundation will be the official maintainer for this exchange's spot and perpetual connectors as well. However, these exchanges' connectors will be maintained via community developer bounties, tracking improvements made to the Gold exchange connectors.
* The Foundation supports Gold and Silver CEXs by running long-term testing bots for their connectors and providing HBOT rewards to users who answer community questions related to them.
* Any other exchange that meets the Minimum Voting Power threshold is a **Bronze** exchange. The Foundation does not maintain these exchanges' connectors nor will we allocate bounties for them, but they may be maintained by a member of the community.
* Note that HBOT holders can force the Foundation to fix a bug or review a pull request related to a Bronze exchange using the Priority Issues poll or Pull Request Proposal.
* Exchanges that don't meet the Minimum Voting Power threshold will be removed from the codebase.

### DEX Connectors

* A quarterly poll that places [decentralized exchange connectors](/gateway/) into Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector.
* The choices for this poll are the current decentralized exchanges which have connectors in the Gateway or Hummingbot client codebase, i.e. Uniswap, dYdX, PancakeSwap, etc.
* DEXs with instances on different chains are considered a single exchange 
* Similar to CEX Connectors, this poll selects Gold (top 1), Silver (top 2-4), and Bronze DEXs based on voting power received. DEXs that don't meet the Minimum Voting Power threshold will be removed from the codebase.
* The Foundation will treat the Gold DEX Connector as the "gold standard" and map all of its swap and liquidity provision endpoints and support instances on all major chains. For the Silver DEXs, we will utilize HBOT developer bounties to fund improvements and fixes.
* The Foundation supports Gold and Silver DEXs by running long-term testing bots for their connectors and providing HBOT rewards to users who answer community questions related to them.

### Core Strategies

* A quarterly poll that defines which [strategies](/strategies) should be Core (officially maintained by the Foundation) versus Community (maintained by community members or not maintained).
* The choices for this poll are the current strategies in the codebase.
* After the poll ends, the top **three (3)** strategies in the codebase are considered the Core strategies for the following quarterly epoch. The Foundation will be the official maintainer for these strategies, prioritize updates and fixes to them, abd maintain their documentation pages.
* The Foundation supports Core strategies by running long-term testing bots for them and providing HBOT rewards to users who answer community questions related to them.
* Any other strategy that meets the Minimum Voting Power threshold is a **Community** strategy. The Foundation does not maintain these strategies nor will we allocate bounties for them, but they may be maintained by a member of the community.
* Note that HBOT holders can force the Foundation to fix a bug or review a pull request related to a Community strategy using the Priority Issues poll or Pull Request Proposal.
* Strategies that don't meet the Minimum Voting Power threshold will be removed from the codebase.
