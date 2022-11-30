*April 28, 2022*

Since Hummingbot Foundation was incepted at the beginning of the year, we have been busy hiring staff, taking over the monthly Hummingbot release cycle, and building processes that enable the HBOT token holder community to govern the Hummingbot codebase.

In this post, we want to inform the broader Hummingbot community about the milestones that the Foundation aims to accomplish and the initiatives we aim to start for the remainder of the year.

As a recap, Hummingbot Foundation was established in December 2021 as an independent, not-for-profit Cayman Islands foundation company that controls write access over the official [Github code repository](https://github.com/hummingbot/hummingbot) for Hummingbot, the leading open source framework to build and run crypto trading bots.

## Mission

The Foundation's long-term mission is to democratize high-frequency trading (HFT) with Hummingbot, an open source, professional-grade, Python-based client with standardized, low-latency connectors to every centralized and decentralized exchange, a high-frequency trading engine that supports all the major product and order types, and a robust library of community-created trading strategies and scripts.

To accomplish this at scale, the Foundation utilizes a bazaar-style model of software development that relies upon a decentralized set of community **maintainers**, developers who build and maintain individual exchange [connectors](/exchanges) or [strategies](/strategies).

Since the Foundation is a decentralized autonomous organization (DAO) governed by HBOT token holders, we utilize an [off-chain governance system](https://snapshot.org/#/hbot.eth) that enables HBOT holders to vote without paying gas on [proposals](/governance/proposals/) that decide how the Hummingbot codebase evolves, how the HBOT treasury is allocated, and how the Foundation is governed.

## Business Model

Sustaining day-to-day operation are exchange partnerships that rebate fees based on the level of trading activity conducted through their respective connectors, tracked via custom headers at the API request level.

![](/assets/img/foundation-biz-model.jpg)

We match each exchange partner with a dedicated community maintainer who builds and maintains a connector (low-level integration with the exchange’s WebSocket/REST API) and earns a share of the fees rebated by the exchange. This scalable, community-driven maintenance model allows the Hummingbot codebase to support every exchange in the world while ensuring a high bar for code quality while keeping maintenance costs low.

In each of the first 3 months of operation, the Foundation recorded a net profit. See [Reporting](https://hummingbot.org/reporting/) for more details.

## 2022 Roadmap Themes

Below, we list the key roadmap themes that the Foundation will work toward during the remainder of 2022 in order to further the Hummingbot mission of making high-frequency trading open source and accessible to everyone in the world.

### 🤝 Scale exchange-maintainer partnerships

Maintaining reliable, fast HFT-quality integrations across the exchange landscape is a key plank of Hummingbot’s value proposition. Matching exchanges with dedicated maintainers from our global developer community is the only scalable way to connect every exchange in the world. Since the Foundation’s primary source of funds are exchange fee rebates from user trading activity, growing the number of exchange partners and ensuring that each exchange has dedicated maintenance is critical to the Foundation’s future success.

- Document the maintainer onboarding process
- Document the exchange onboarding process
- Fill open maintainer slots for Bitfinex, HitBTC, and other exchanges with fee share agreements
- Roll out a new color-coded Connector Status system that informs the community which exchange connectors have dedicated maintainers and are working properly versus others which do not
- Ship 10+ new exchange connectors by end of 2022
- Onboard 5+ new maintainers by end of 2022
- Publish dashboard of reported volume by exchange from `heartbeat`

### 🔗 Expand DEX connectors

Hummingbot’s new [Gateway-V2 module](/developers/gateway), which was recently merged to Hummingbot's public `development` branch, is a stateless middleware library, written primarily in Typescript, that maps various DEX smart contract methods, APIs, and SDKs on various blockchains into standardized REST trading endpoints that can be utilized by the Python-based Hummingbot trading client or any other trading system. It allows developers from different DEX communities to “plug in” their DEXs into the broader Hummingbot community of arbitrageurs and market makers by adding lightweight connectors to Gateway.

CoinAlpha has contributed the initial Ethereum and Avalanche DEX connectors, while separate teams from the Solana, Cosmos, Harmony, Near, and Polkadot ecosystems are building support for their respective chain families, as well as connectors for the DEXs on those chains. After Gateway is merged to Hummingbot’s `master` branch and included in the upcoming May release, we expect many more DEXs and chains to be supported.

- Ship Gateway in May release
- Launch 20+ DEX connectors by end of 2022
- Support 10+ Layer 1 and Layer 2 blockchains  by end of 2022

### 📓 Improve documentation

Adding documentation of various types, from how-to-guides to FAQs to developer tutorials (and in a well-organized and easily discoverable manner) is a critically important part of growing any open source project at scale, especially one like Hummingbot that is maintained by a global maintainer community.

To improve our documentation, we plan to begin versioning documentation by release, add sections that enable community members to contribute content and resources, as well as content bounties that use HBOT tokens to incentivize creation of how-to guides, videos and other Hummingbot-related content.

- Version docs by release
- Add Community Resources section to docs
- Move Foundation-related news into a new Blog section
- Expand developer docs for building CEX and DEX connectors
- Expand developer docs for creating Scripts
- Launch content bounties

### 👨‍👨‍👧‍👦 Grow developer community

Hummingbot has a modular architecture that allows developers to independently maintain and improve different components, and we are continually refactoring the codebase in order to make it more accessible to new developers.

For example, Hummingbot’s new [Scripts](/scripts/getting-started) component lets users create automated trading strategies that use the full power of Hummingbot exchange connectors in simple Python snippets without having to re-compile the code or add configuration templates. We believe that this new feature will unlock the creative potential within the Hummingbot user community, and we plan on organizing hackathons that reward the community for creating useful Script examples that can be added to the codebase.

- Ship Scripts in May release
- Run 2+ hackathons that reward users for creating Scripts
- Launch Hummingbot developer certification program
- Refactor codebase to pure Python

### 🚀 Launch project DAOs

Currently, Hummingbot Foundation has 11 full-time staff who manage day-to-day operations, support the developer community, answer questions from users, publishes monthly releases, and manages the HBOT governance system. However, like other decentralized autonomous organizations (DAOs), the Foundation plans to outsource much of the work needed to maintain and improve Hummingbot to the community via community-driven *project DAOs*, incentivized through HBOT grants, rather than adding more full-time staff.

The first of these project DAOs are [Technical Review DAO](https://snapshot.org/#/hbot.eth/proposal/0x4480a6868355b8f4ad3dfcfa5d3e8bb043175bb8b250549433e5ba3360af536f), a 5-person collective that earns HBOT tokens for reviewing Github pull requests attached to Pull Request Proposals, and [ONE Liquidity DAO](https://talk.harmony.one/t/liquidity-dao-q1-2022-term-1-progress-report/15179), a 7-person collective that earns Harmony ONE and HBOT tokens for promoting and providing liquidity to the Harmony blockchain.

The next project DAOs will likely be community-led initiatives that focus on building new areas of the Hummingbot codebase. We are currently gathering community interest in areas such as options and NFT bots.

- Continue supporting Technical Review DAO
- Continue supporting ONE Liquidity DAO
- Launch 3+ new project DAOs by end of 2022
