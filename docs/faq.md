
See below for answers to frequently asked questions about:

* [Hummingbot software](#hummingbot-software)
* [Hummingbot Foundation](#hummingbot-foundation)
* [HBOT token](#hbot-token)

## Hummingbot software

### What type of software is Hummingbot?

Hummingbot is software that helps you build and run crypto trading bots, freely available at <https://github.com/hummingbot/hummingbot> under the open source Apache 2.0 license.

### Is Hummingbot a protocol or an exchange?

No, Hummingbot is open source client software that you install on a local machine that interacts with exchanges and protocols.

With many connectors and strategies being added all the time, Hummingbot is a constantly evolving publicly available codebase with frequent external contributors seeking to merge their changes into the `master` branch, which is released once a month and widely used by tens of thousands of individual and professional bot-runners globally.

### How do people use Hummingbot?

You can use Hummingbot to build any types of automated crypto trading bot, with the most common bot types being market making and arbitrage bots. Market making bots provide liquidity to a trading pair on an exchange, while arbitrage bots exploit price differences betweeen trading pairs on different exchanges.

Typically, users install the Docker image version on AWS or another cloud provider. Afterwards, they can add their API key or private keys to it, which allows them to configure and run one of Hummingbot's pre-built strategies on many different exchanges.

Since Hummingbot is an open, modular codebase, many developers and professional firms fork the codebase and use it for their own purposes.

### Why is Hummingbot open source?

1. **Trust and transparency**: Market makers need to keep their API keys, private keys, and strategy configuration private and secure, so which is why Hummingbot is a local software client, not a web-based platform. In addition, Hummingbot's open source codebase enables anyone to inspect and audit the code.

2. **Community maintenance**: Hummingbot's value proposition is that it connects to many different centralized and decentralized exchanges, along with pre-built strategy templates that enable users to run many different types of trading strategies. In order to scale the number of connectors and strategies, Hummingbot relies upon its open source community.

3. **Democratizing HFT**: From the beginning, our mission has been to democratize high-frequency trading with open source software.

### Why did you make Hummingbot available to the general public?

As we wrote in the original [Hummingbot whitepaper](https://hummingbot.io/hummingbot.pdf), market making is an important function critical to organic, efficient markets that should be decentralized to prevent the concentration risk that exists in traditional finance.

Later, we pioneered the concept of **decentralized market making** by writing the [Liquidity Mining whitepaper](https://hummingbot.io/liquidity-mining.pdf) and built the first such platform: [Hummingbot Miner](https://miner.hummingbot.io). Miner has turned into a successful, standalone business that provides liquidity to hundreds of tokens across multiple exchanges, powered by thousands of individual market makers running Hummingbot.

This has allowed CoinAlpha to spin off Hummingbot into a not-for-profit foundation, which is dedicated to keeping Hummingbot open source.

### What is market making?

Market making is the act of simultaneously creating buy and sell orders for an asset in a market. By doing so, a market maker acts as a liquidity provider, facilitating other market participants to trade by giving them the ability to fill the market maker's orders. Traditionally, market-making industry has been dominated by highly technical quantitative hedge funds and trading firms that have the infrastructure and intelligence to deploy sophisticated algorithms at scale.

Market makers play an important role in providing liquidity to financial markets, especially in the highly fragmented cryptocurrency industry. While large professional market makers fight over the most actively traded pairs on the highest volume exchanges, there exists a massive **long tail of smaller markets** who also need liquidity: tokens outside the top 10, smaller exchanges, decentralized exchanges, and new blockchains.

See [How does market making work?](https://blog.hummingbot.org/2020-09-what-is-market-making/) for more information.

### How does Hummingbot store my private keys and API keys?

Similar to wallet software, Hummingbot stores your private keys and API keys in encrypted form, using the password you enter when you first start Hummingbot. These keys are saved in your `/conf` folder.

Since Hummingbot is a local client, your private keys and API keys are as secure as the computer you are running them on. This is because the keys are used to create authorized instructions locally on the local machine, and only the instructions which have already been signed or authorized are sent out from the client.

### What does it cost for me to run Hummingbot?

Hummingbot is a free software, so you can download, install, and run it for free.

Transactions from Hummingbot are normal transactions conducted on exchanges; therefore when operating Hummingbot, you would be subject to each exchange’s fees (e.g. maker, taker, and withdrawal fees), as you would if you were trading on that exchange normally (i.e. without Hummingbot).

There is no minimum amount of assets to use Hummingbot, but users should pay heed to exchange-specific minimum order sizes. We include links to the exchange's minimum order size page. This can be found in each exchange's page in [Exchange Connectors](/exchanges/).

### How do I use Hummingbot on a AMM decentralized exchange like Uniswap?

On an Automatic Market Maker (AMM) decentralized exchange, users deposit tokens into a pool to provide liquidity and earn LP tokens. Since AMM pools depend on arbitrage to keep prices in line with other venues, Hummingbot's [`amm-arb`](/strategies/amm-arbitrage) strategy allows users to run an arbitrage bot that may earn profits from exploiting price differences between the AMM and other exchanges.

## Hummingbot Foundation

### What does the Hummingbot Foundation do?

The Hummingbot Foundation is a not-for-profit organization established in the Cayman Islands. The Foundation’s mission is to democratize high-frequency trading by enabling decentralized maintenance and community governance over the open-source Hummingbot code repository.

Below are its main roles and responsibilities:

* **Maintenance**: Appoint and compensate **maintainers** who maintain Hummingbot exchange connectors by fixing bugs, resolving API changes, and adding features.
* **Bounties**: Enable the community to sponsor bounties that reward community contributors for building new connectors, features, and enhancements
* **Governance:** Enable the community to steer the evolution of the codebase by prioritizing work on Github issues and pull requests

Since Hummingbot is not a blockchain protocol, but rather open source client software run locally on individual client devices that interacts with protocols and exchanges, the Foundation governance system aims to fits into the existing Hummingbot open source software release process, which has been used to handle thousands of Github issues and pull requests created by the community over the past three years.

### How is the Hummingbot Foundation sustainable?

A large part of Hummingbot’s value comes from the number of connectors it supports and its overall usage, which can be measured by the aggregate trading activity that Hummingbot users supply to connected exchanges and protocols. The Foundation has fee share agreements and other partnerships with these exchanges and protocols that rebate fees based on usage, tracked at the API header level.

Meanwhile, community developers can maintain Hummingbot components of the codebase and extend the toolset to more markets and asset types, keeping maintenance costs low.

In addition, the Foundation plans to charge bounty administration fees to administer, review and merge the development work performed by bounty contributors.

Based on the source of income above, the Foundation is projected to be self-sustainable at inception. Over time, we expect this margin to increase as volume and fees generated grow as the Hummingbot user base expands.

### Who runs the Hummingbot Foundation?

A five-person Board of Directors provides oversight over the Foundation and oversees staff who manage day-to-day operations. This board is elected by HBOT token holders every 12 months.

In addition, the Foundation has a Chief Operating Officer and Chief Finance Officer, who collectively manage partnerships with exchanges, negotiate contracts with maintainers, and oversee the Foundation’s budget and finances.

The Foundation also employs staff who administer the governance system, respond to users on Discord, and handle other day-to-day operations of maintaining Hummingbot, including:

* Review pull requests and issues linked to proposals
* Communicate and coordinate with sponsors, maintainers, and contributors
* Package monthly releases into Docker containers for various environments
* Maintain and update documentation

### Why is the Hummingbot Foundation domiciled in the Cayman Islands?

For the past 20 years, the Cayman Islands has been one of the preferred global jurisdictions for the incorporation of new securitizations, special purpose vehicles, and other new organizations. In 2017, the Cayman Islands introduced the Foundation Company structure, a flexible structure that allows a limited liability legal entity to operate similar to a civil law foundation, steered by a decentralized set of participants. The Hummingbot Foundation uses this structure.

See [What is a Cayman Foundation Company?](https://www.zedra.com/news-events/news/what-is-a-cayman-foundation-company/) from Zedra, our corporate services provider in the Cayman Islands.

### How do I apply for a job with the Hummingbot Foundation?

Post a message with your CV to one of the Foundation staff on [Discord](https://discord.gg/hummingbot).

## HBOT token

### What is the HBOT token?

The Hummingbot Governance Token (HBOT) is the medium of governance for the Hummingbot open source ecosystem. It is a standard Ethereum ERC-20 token with a fixed total supply of 1,000,000 HBOT tokens.

### What can I do with the HBOT token?

HBOT is a governance token that give holders control over the Hummingbot codebase, the HBOT community treasury, and the Hummingbot Foundation. For instance, holders can:

* Approve all pull requests to the Hummingbot codebase
* Propose architectural changes and steer the roadmap
* Allocate the HBOT community treasury
* Appoint maintainers for exchange connectors who share in fees rebated from that exchange
* Elect Foundation board of directors

HBOT token holders make these decisions by creating proposals and voting with their token balances. One HBOT equals one vote, and voting does not consume any tokens.

### Will voting with HBOT cost gas or incur other transaction fees?

No. All Hummingbot Foundation proposals are on [Snapshot](https://snapshot.org/#/), which lets HBOT holders vote by signing messages using their HBOT token balance to vote on issues without paying gas. Snapshots are recorded to IPFS to generate a permanent record.

### How do I know that I'm using the correct HBOT token?

To prevent HBOT token holders from being scammed by fraudulent versions of the token, unverified pools/DEXs, or incorrect coin listings, we maintain a compilation of verified HBOT-related pages from [Reputable Sources](/hbot/#reputable-information-sources). This does not constitute investment advice or a recommendation for any platform or market listed.

### Does the Foundation plan to list HBOT on (any crypto exchange)?

Please see [Reputable Sources](/hbot/#reputable-information-sources) for information about venues where HBOT may be traded.

### How does the Foundation plan to distribute remaining HBOT tokens?

The Foundation plans to distribute the remaining 36 million tokens (36% of total supply) to Hummingbot users over the 4 years after inception across fixed [Epochs](/governance/epochs). The goal is to distribute tokens to developers who contribute improvements to the codebase, and users of the Hummingbot software on connected exchanges and market making platforms.

See [Hummingbot Governance Proposals](/governance/proposals) for more information on the categories of HBOT grants.

### I was an early user of Hummingbot. Am I eligible to claim HBOT tokens?

The Hummingbot Foundation is grateful to everyone who has used Hummingbot, found bugs, and contributed to the codebase in the past. However, for the Retroactive Distribution, the Foundation decided to allocate tokens only to two types of historical activity: 1) Github code contributors and 2) users of the Hummingbot Miner platform. We chose these two types because past activity can be verified through public commit history and Miner API keys, respectively.

Other than those listed in the [HBOT announcement](/news/hbot), there are no other eligible HBOT recipients.

### What if I accidentally used an exchange address to claim HBOT tokens?

If you accidentally entered a Binance.com deposit address to claim your tokens, here is how you may be able to retrieve those tokens:

* Log into Binance.com
* In the Wallet section -> Deposit Crypto, there is a "deposit hasn't arrived?" section
* Select "Search" and "Deposited an Unlisted coin"
* Select "Submit Appeal" and enter the transaction details

## Reporting

### How does data reporting work?

Unless users turn it off, instances of the Hummingbot software send the following metrics to a Hummingbot Foundation server every 15 minutes:

* Aggregated trade volume
* Exchange where the trades occurred
* Version of Hummingbot software used
* Device and system information
* InstanceID (an anonymous, randomly-generated unique identifier)

All data collected will be used exclusively by Hummingbot Foundation for reporting purposes only, and we will never sell this data to any third party.

### Why do you collect this data?

To sustain development of the Hummingbot client, Hummingbot Foundation enters into fee share partnerships with exchanges. These partners need actionable data to convince their stakeholders and community members that a Hummingbot partnership is worthwhile. Their most common requests include total volume traded and number of users.

After a partnership has been established, we rely upon the exchange to remit fees honestly back to us. In the past, we have entered into agreements that were not honored by the exchange, which diverts scarce resources away from the Hummingbot community. By openly publishing both reported volumes as well as fees shared for each exchange (see [Monthly Reports](./index.md#monthly-reports)), we hope to use the power of transparency to incentivize exchanges to honor their agreements.

### How do I configure or turn off this feature?

In `conf/conf_client.yml`, find the following section:

```yaml
# Whether to enable aggregated order and trade data collection
anonymized_metrics_mode:
  anonymized_metrics_interval_min: 15.0
```

Changing the parameter above to `anonymized_metrics_interval_min: 0.0` disables data reporting. You may also adjust the interval if you would rather send data on a slower or faster interval. 15 minutes was chosen and tested as a reasonable interval for an active trading Hummingbot instance.

### How can I be sure that this is the only data Hummingbot collects?

The Hummingbot codebase is 100% open source and publicly auditable on Github. Feel free to review the code for yourself and post publicly on our [Discord](https://discord.gg/hummingbot) or [official forum](https://forum.hummingbot.org/) what you found. We’ve always been open and honest with our community members and you’ll find that this case is no different.
