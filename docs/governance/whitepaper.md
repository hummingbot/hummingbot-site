# Hummingbot Foundation Governance

*Originally posted on December 17, 2021, last modified on August 17, 2022*

## Overview
The Hummingbot Foundation (the “Foundation”) is a not-for-profit organization established in the Cayman Islands. The Foundation’s mission is to democratize high-frequency trading by enabling decentralized maintenance and community governance over the open-source Hummingbot code repository.

Hummingbot is software that helps you build and run automated trading strategies (“bots”), freely and publicly available under the Apache 2.0 open source license at https://github.com/hummingbot/hummingbot.

Launched in April 2019, Hummingbot’s latest v0.46.0 release spans 1.8 million lines of code across 12,625 commits from 112 unique code contributors, and it contains over 30 different exchange/blockchain connectors and 14 strategy templates. Approximately 1100 Github users have forked the Hummingbot codebase for their own use.

### Principles
Below are the core principles that underpin Hummingbot’s development:

* **Open Source**: The Hummingbot codebase is publicly available, auditable, and free
* **Modular**: Hummingbot modules can be independently built, used, and maintained by community members
* **Extensible**: Users can use Hummingbot to create any automated trading strategy on every exchange and blockchain
* **All Levels**: Hummingbot is designed for use by individuals and professionals alike

### Ecosystem

The Hummingbot Foundation’s primary role is to coordinate the ongoing maintenance and improvement of the open source Hummingbot codebase via a decentralized set of actors: **Exchanges**, **Contributors**, and **Users**.

![](./flywheel.png)

* **Exchanges** are centralized or decentralized exchanges, blockchain protocols, other other organizations who enter into fee share and/or other referral agreements with Hummingbot Foundation based on user trading volume. See [Polls](polls.md) for more information about the Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector.

* **Contributors** are individual developers and firms that build and maintain Hummingbot components. Contributors submit their work as pull requests to the official Github repository, and they are paid [bounties](/maintenance/bounties/) when that work has been merged and included in an official release. Bounties may be funded by either Hummingbot Foundation or other community members.

* **Users** are individual and professional traders who install and use the Hummingbot open source software, released every month, to run trading bots. The volume they generate on partner exchanges sustains the operations of Hummingbot Foundation.

### Governance

The Foundation will administer a system that will empower holders of the Hummingbot Governance Token (“HBOT”) to govern Hummingbot. The sole use case for HBOT Tokens will be to empower holders to decide how the Hummingbot codebase changes over time through voting on proposals. 

All pull requests, or proposed code changes to the Github code repository, will need to be submitted as a Pull Request Proposal and be approved by HBOT holders in order to be merged into the codebase and included in an official release. 

In addition, HBOT holders will be able to create and vote on Improvement Proposals that direct the Foundation to implement architectural changes or prioritize specific enhancements or bug fixes. HBOT holders will also be able to create and vote on Governance Proposals that modify aspects of the governance system or allocate funding toward grant programs. Development work that results from an approved grant or Improvement Proposal also will need to undergo the pull request approval process in order to be merged into the **development** branch.

Pull requests will be continually approved and merged through the month. Approximately once per month, the development branch of the codebase will be cloned onto the master branch of the codebase, which will subsequently be packaged into an official release in various formats for different operating systems.

## Foundation
In order to enable decentralized maintenance and democratic governance of the Hummingbot codebase, the Foundation plans to engage in the following functions:

* Own the Hummingbot software license and maintain commit access to the Hummingbot code repository;
* Enter into connector maintenance agreements and other partnerships with sponsors;
* Administer the HBOT governance system and process;
* Implement pull request, improvement, and governance proposals approved by HBOT holders;
* Publish official Hummingbot releases, update Hummingbot documentation, and support the user base; and
* Manage the treasury of HBOT token and other assets.

### Sources of funds

#### Exchange fee share agreements

Hummingbot exchange connectors integrate with the API of a cryptocurrency exchange in order to expose standardized data format and endpoints to Hummingbot strategies (automated processes that interact with exchange APIs) that are created and configured by Users. Since exchange APIs vary widely, these connectors allow anyone to run bots across multiple exchanges without requiring engineering time on low-level exchange API integrations. 

Thus far, CoinAlpha has built many of the connectors in the Hummingbot codebase, and it has agreements and contracts with many of the connected exchanges that rebate a portion of fees incurred by Users, measured via unique identifiers in API requests executed with the Hummingbot software, to CoinAlpha. 

In the future, the Foundation plans to negotiate and enter into similar agreements with new exchanges for connectors. To support the Foundation and the Hummingbot community, CoinAlpha also plans to remit to the Foundation all income from its existing agreements, or assign them to the Foundation. The Foundation anticipates using this income to compensate community Maintainers for their services.

#### Administration of bounties, grants, and hackathons

One of the Foundation’s primary responsibilities will be to work with Sponsors seeking to fund specific work items such as new connectors, new strategies, or enhancements or fixes to existing components (bounties), as well as others who want to fund more work in more general areas such as strategies for new assets or exchange types (grants and hackathons).

The Foundation may charge Sponsors a fee in order to administer the programs, liaise with Contributors, and review/merge the resulting development work.

### Roles

#### Board of Directors
Similar to the Linux and Apache Foundations, the Foundation’s Board of Directors will provide oversight over the Foundation and its staff, as well as manage the HBOT multi-sig wallet. All transfers of HBOT from the wallet will be approved by a majority of the Board.

The initial 5-person Board of Directors will be elected by HBOT holders. Board members will serve 12-month terms and will not receive any compensation for Board service. No more than a maximum of 2 Board members will be full-time employees and/or directors of the same outside entity, such as CoinAlpha.

#### Staff

The Foundation plans to employ a Chief Financial Officer (CFO) who will oversee the Foundation’s budget and finances and a Chief Operating Officer (COO) who will represent the Foundation in executing partnerships with Sponsors and contracts with Maintainers.

In addition, the Foundation plans to employ engineering, project management, community management, and quality assurance personnel who will handle the day-to-day operations of maintaining the Hummingbot codebase and the HBOT governance system, such as:

* Coordinating with Sponsors, Maintainers, and Contributors;
* Reviewing and process pull requests linked to approved Pull Request Proposals;
* Assigning approved Improvement Proposals to Maintainers;
* Moderating discussions on official community channels;
* Packaging monthly releases into Docker containers for various environments;
* Publishing metrics on volume, usage, and fees shared by connectors; and
* Maintaining and updating the Foundation website and documentation site.

## Governance

The HBOT governance system will allow holders to propose and approve changes to the Hummingbot codebase and the Hummingbot Foundation governance process.

### Process
The Hummingbot Foundation expects to use Snapshot for effecting HBOT governance. All proposals will be found on the official Hummingbot Snapshot hosted at https://snapshot.org/#/hbot.eth.

### Proposal types

There will initially be three types of proposals, and each type will have different initial governance parameters:

| Proposal Type           | Pull Request            | Improvement             | Governance              |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| Minimum HBOT Balance    | 1                       | 10,000                  | 50,000                  |
| Quorum Percentage       | 1% of HBOT circulating supply | 3% of HBOT circulating supply | 10% of HBOT circulating supply |
| Approval Threshold      | >50% of tokens voted    | >50% of tokens voted    | >50% of tokens voted    |
| Vote Duration           | 7 days                  | 7 days                 | 7 days                 |

HBOT token holdings entitles the holder to an equivalent amount of votes, including any fractional token amounts. 

#### Pull Request Proposal (PRP)

A Pull Request Proposal (PRP) will be a proposal linked to an open pull request in the Hummingbot code repository. Each PRP will go through the process below:

1. A Github pull request is created by any community member; 
2. Any HBOT holder with at least 1 HBOT voting power creates a PRP in Snapshot linked to the pull request;
3. The Foundation performs a preliminary review (e.g., for sufficient documentation, adequate unit tests, and the inclusion of developer contact information) and adds the results to the issue;
4. The community has 7 days to discuss, review, and vote on the PRP;
5. If at least 1% of the total circulating supply of HBOT tokens have voted (either directly or via delegation) and at least 50% of votes approve, the Foundation labels the Github pull request as “approved”;
6. The Foundation performs a final review and merges the pull request into the development branch; and
7. If the pull request is linked to a bounty or grants program, the Foundation directs the sponsor to release funds to the developer and invoices the sponsor for administration fees.

During either the preliminary or the final review, the Foundation may unilaterally reject a proposal (e.g., to prevent a security vulnerability or merge conflict) as long as it communicates the rationale behind the decision to the community. It is anticipated that such authority would be used sparingly and in legitimate circumstances. If the community disagrees with the Foundation’s decision to reject a proposal, the community has the power to replace the Foundation’s directors with more like-minded directors to ensure that the community’s directives are followed. 

#### Improvement Proposal (IP)

An Improvement Proposal (IP) will be a proposal linked to an issue in the Hummingbot Github repository that specifies a proposed improvement to a component of the Hummingbot codebase. While there will be no formal restriction on what types of Improvement Proposals can be created, the Foundation expects that the community will approve proposals that benefit the Hummingbot user base as a whole, either by fixing a critical bug, adding a key new feature, or making a necessary refactor of the architecture.

Each IP will go through the process below:

1. A Github issue is created by any community member; 
2. Any HBOT holder with at least 10,000 HBOT voting power creates an IP in Snapshot linked to the issue;
3. The community has 7 days to discuss, review, and vote on the IP;
4. If at least 3% of the total circulating supply of HBOT tokens have voted (either directly or via delegation) and at least 50% of votes approve, Foundation labels Github issue as “approved”;
5. The Foundation assigns the issue to the Maintainer of the affected component, or if there is no Maintainer for the affected component, assigns the issue to a Certified Maintainer or creates a bounty funded by HBOT tokens to incentivize Contributors; and
6. After the Maintainer or Contributor completes the development work to resolve the IP, they submit a pull request that goes through the Pull Request Proposal process outlined above.

#### Governance Proposal (GP)

A Governance Proposal (GP) will be a proposal linked to an issue in the Hummingbot Github repository that specifies either a proposed modification to the Foundation governance system, or a proposed distribution of HBOT tokens from the treasury for a community activity such as a grant. 

Each GP will go through the process below:

1. A Github issue is created by any community member; 
2. Any HBOT holder with at least 50,000 HBOT voting power creates a GP in Snapshot linked to the issue;
The community has 7 days to discuss, review, and vote on the GP;
3. If at least 10% of the total circulating supply of HBOT tokens have voted (either directly or via delegation) and at least 66 2/3% of votes approve, the Foundation labels Github issue as “approved”; and
4. The Foundation implements the proposed change or initiative, after which, the Github issue is closed.

Aspects of the Foundation governance system that Governance Proposals may modify will include approval thresholds, quorum thresholds, board of director elections, and Maintainer elections. GPs may not modify the Foundation bylaws, HBOT token distribution and issuance mechanics, or HBOT total supply.

## Maintainers

Hummingbot is a constantly evolving codebase that is continually improved to accommodate new exchanges, assets, and strategies, as well as to improve performance and reliability. To ensure that different components in the codebase can be properly maintained, the Foundation plans to enter into agreements with third-party individuals and firms to act as Maintainers for specific components. 

While Maintainer agreements will likely differ based on component type, the responsibilities of each Maintainer will be similar. Maintainers will be responsible for proactively fixing bugs, updating their component for any API changes, and implementing approved Improvement Proposals related to their component. For each connector and strategy, the Maintainer and their contact information will be published in the Hummingbot documentation.

Maintainers initially will be set by the Foundation for specified terms and will be re-elected by HBOT voting afterwards. In addition, HBOT holders will be able to submit Governance Proposals at any time to direct the Foundation to re-assign or remove a Maintainer.

#### Connectors

Exchange connectors are packages of code that link Hummingbot's trading engine with live information from different cryptocurrency exchanges. They interact with a given exchange's API, such as by gathering order book data and sending and cancelling trades. 

Similarly, blockchain connectors link Hummingbot to a given blockchain protocol and expose standardized endpoints that enable Users’ strategies to interact with wallets, nodes, and smart contracts on that protocol.

Each connector has an assigned Maintainer listed on its respective Hummingbot documentation page, and all newly added connectors will have an assigned Maintainer. Certain connectors will have maintenance agreements that rebate a portion of fees incurred or fixed maintenance payments to the Foundation, and the Foundation may share these fees with the Maintainer. 

#### Strategies

Strategies are miniature computer programs that execute orders and trade on one or more exchanges. Strategies use the standard functions exposed by each connector so that strategy developers can focus on trading logic rather than data connectivity.

Certain strategies will have a Maintainer responsible for fixing bugs and implementing Improvement Proposals related to the strategy. These strategy Maintainers will be listed on a strategy’s respective Hummingbot documentation page. Strategy Maintainers will generally not be compensated, either because the strategy will be community-submitted or because the Maintainer will derive other benefits from performing maintenance. For instance, CoinAlpha may be the Maintainer for certain Hummingbot strategies because Users use them to earn rewards on CoinAlpha’s Miner platform.

#### Certified Maintainers

To ensure maintenance and upkeep of the entire codebase, the Foundation may enter into master services agreements (MSA) with certain third-party individuals and firms that will be known as “Certified Maintainers.” Each MSA will set a fixed hourly rate for two labor categories: Development (DEV) and Quality Assurance (QA). The Foundation expects to publish a list of Certified Maintainers on its website along with these hourly rates. 

Certified Maintainers will provide engineering services to the Foundation on an as-needed basis. For approved Improvement Proposals for components that do not have a dedicated Maintainer, the Foundation may elect to assign the related Github issue to a Certified Maintainer. 

In order to be compensated for their work on an Improvement Proposal, Certified Maintainers will need to submit a pull request that is approved via the PRP process. For transparency, the Foundation will require that Certified Maintainers specify in the pull request the number of DEV and QA hours worked along with their total compensation requested from the Foundation.

## Bounties, hackathons and grants

### Bounties and hackathons
One of the main activities of the Foundation will be enabling third party Sponsors to fund bounties and hackathons that compensate developers for submitting pull requests, such as feature enhancements, bug fixes, and new connectors/strategies, to the open source Hummingbot codebase. Sponsors are expected to comprise exchanges, blockchain protocols, trading firms, and other institutions who use Hummingbot or benefit from usage on their platforms.

Pull requests linked to bounties and hackathons will go through the same Pull Request Process as other pull requests. The Foundation will charge a fee to Sponsors to administer these pull requests. 

### Grants

One of the primary ways that Foundation will distribute tokens to Hummingbot Users is through grant programs that reward developers to make contributions to the codebase. These grant programs will aim to incentivize contributions similar to the launch contributions described in the [Hummingbot Foundation announcement](/news/foundation), which include a new strategy template that enables Users to run triangular arbitrage, a web-based graphical interface for the Hummingbot client, and webhooks that enable TradingView integration.

The Foundation expects that a significant portion of the HBOT tokens that will be allocated over the next 4 years (36% of total tokens) will be allocated toward grants to facilitate similar contributions. In 2022, the Foundation will begin accepting applications for HBOT token grants. Once accepted, developers will need to issue a pull request and have it merged via the governance system in order to receive grant funds.

## Conclusion

The initial governance framework described above is intended to lay the groundwork for a viable governance system that will enable the Hummingbot community to decide how the Hummingbot codebase evolves, while allowing developers to maintain and contribute to the codebase. The Foundation hopes and expects that the community will improve and expand upon this initial governance framework as the community sees fit in order to meet the needs of a growing, diversified user base.

