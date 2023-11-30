![](./cover.webp)

Hummingbot is an open source framework for building high-frequency market making and algorithmic trading bots, maintained by [Hummingbot Foundation](./foundation.md) and supported by key [sponsors and backers](./sponsors.md).

Our mission is to make sophisticated trading strategies and technology accessible to everyone and to level the playing field for traders around the globe Here are the core principles that underpin Hummingbot’s development:

* **Open Source**: The Hummingbot codebase is publicly available, auditable, and free
* **Modular**: Hummingbot modules can be independently built, used, and maintained by community members
* **Extensible**: Users can use Hummingbot to create any trading strategy on any exchange and blockchain
* **All Levels**: Hummingbot is designed for use by individuals and professionals alike

## History

Hummingbot was originally built and open sourced by [CoinAlpha](https://coinalpha.com) in April 2019. Hummingbot pioneered a modular architecture that allowed external developers to contribute new exchange connectors and trading strategies into a shared, community-maintained codebase. Read the original [Hummingbot whitepaper](/blog/hummingbot-whitepaper/) and the [origin story](/blog/from-hedge-fund-to-market-making-bot-the-hummingbot-origin-story/) blog post for more details.

Later, the Hummingbot team wrote the [Liquidity Mining whitepaper](/blog/liquidity-mining-whitepaper/) that described an economic model for decentralized market making and subsequently launched the [Miner liquidity mining platform](/blog/introducing-liquidity-mining-a-marketplace-for-market-makers/).

In December 2021, CoinAlpha [spun off](/blog/introducing-the-hummingbot-foundation/) the Hummingbot Foundation as a new open source entity that maintains the Hummingbot Github repository and administers a decentralized, community-driven governance system utilizing the [HBOT token](/blog/introducing-the-hummingbot-governance-token-hbot/).

Today, Hummingbot is a bazaar-style open source project with many contributors and users around the world, both individual and professional.

## Community Calls

Each month, we livestream one or more community calls on our [Discord](https://discord.gg/hummingbot) server. Afterwards, we post recordings on our [YouTube](https://youtube.com/c/hummingbot) channel.

Check out the [Hummingbot Calendar](https://www.notion.so/hummingbot-foundation/5c767683f80b45c4934aa8cf755a2ff5?v=4dd057ac162f49c9813e11cec0688204&pvs=4) for links to these monthly calls and other upcoming events.

## Community Channels

For security purposes, ensure that you use only the official channels below to access Hummingbot content and code:

* [Newsletter](https://hummingbot.substack.com): Our weekly newsletter contains news, upcoming events, and updates about contributions from the global Hummingbot community
* [Discord](https://discord.gg/hummingbot): Discord is the primary hub for the Hummingbot community - announcements, user support, trading strategies, connectors, and other discussions. Official announcements are only posted in the **#announcements** channel.
* [Youtube](https://www.youtube.com/c/hummingbot): Our YouTube account contains videos that teach you how to use Hummingbot, livestreams of community calls, and interviews with members of the Hummingbot community.
* [Twitter](https://twitter.com/_hummingbot): We post regular news and updates on our Twitter account.

!!! danger "No DMs"
    Hummingbot Foundation team members will never initiate direct messages to users. If a random user imitating the core team or any of the community members sends you a DM don't hesitate to report it in our official Discord channel.

## Public Resources

We maintain and keep updated the following boards, sheets and other resources:

* [Reported Volumes](https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52): A public dashboard of the aggregated, anonymized trade volumes that Hummingbot clients report.

* [HBOT Tracker](https://docs.google.com/spreadsheets/u/2/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing): A public Google Sheet maintained by the Foundation, this shows you the real-time HBOT circulating supply, approved proposals, active bounties, and HBOT distributions.

* [Hummingbot Calendar](https://hummingbot-foundation.notion.site/5c767683f80b45c4934aa8cf755a2ff5?v=4dd057ac162f49c9813e11cec0688204): Upcoming release dates, monthly polls, community calls, and other events.

* [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1): A public Github board for bug fixes and proposed enhancements with development bounties attached to them.

* [Pull Request Status](https://github.com/orgs/hummingbot/projects/1): A public Github board for active pull requests that are being voted on, reviewed, and merged.

## Code Repositories

All Hummingbot Foundation code is located in the official Github and DockerHub accounts. Below are the only code repositories used to release official versions of Hummingbot and to communicate news and updates to HBOT token holders. Please download Hummingbot and Hummingbot-related software from only these official sources.

### Github

The Foundation Github organization is located at <https://github.com/hummingbot>. Its repositories include:

* [`hummingbot`](https://github.com/hummingbot/hummingbot): Hummingbot core client and CEX connectors
* [`gateway`](https://github.com/hummingbot/gateway): DEX connector middleware
* [`dashboard`](https://github.com/hummingbot/dashboard): Hummingbot Dashboard control center app
- [`deploy-examples`](https://github.com/hummingbot/deploy-examples): Deployment examples
* [`hummingbot-site`](https://github.com/hummingbot/hummingbot-site): Hummingbot website and documentation site
* [`awesome-hummingbot`](https://github.com/hummingbot/awesome-hummingbot): All the awesome Hummingbot links
* [`community-tools`](https://github.com/hummingbot/community-tools): Tools and resources created by the Hummingbot community

### DockerHub

Our [DockerHub](https://hub.docker.com/r/hummingbot/) publishes Docker images for:

  * `hummingbot`: `master` (latest) and `development` images of [Hummingbot](https://github.com/hummingbot/hummingbot) starting with version 1.5.0
  * `gateway`: `main` (latest) and `development` images of [Gateway](https://github.com/hummingbot/gateway) starting with version 1.13.0
