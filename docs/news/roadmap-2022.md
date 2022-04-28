*April 28, 2022*

Since Hummingbot Foundation was incepted at the beginning of the year, we have been busy hiring staff, taking over the monthly Hummingbot release cycle, and building processes that enable the HBOT token holder community to govern the Hummingbot codebase.

In this post, we want to inform the broader Hummingbot community about the milestones that the Foundation aims to accomplish for the rest of 2022, as well as the initiatives that we plan to start in the second half of the year.

As a recap, in December 2021, we established Hummingbot Foundation as an independent, not-for-profit Cayman Islands foundation company that controls write access over the [Github code repository for Hummingbot](https://github.com/hummingbot/hummingbot), the leading open source framework to build and run crypto trading bots. 

Hummingbot Foundation’s primary goal is to enable Hummingbot to be maintained and improved by a decentralized set of community maintainers and contributors. The Foundation utilizes an off-chain governance system powered by HBOT token holders, who vote on various types of proposals that decide how the Hummingbot codebase evolves, how the HBOT treasury is allocated, and how the Foundation is governed.

The Foundation sustains day-to-day operations from exchange partnerships that rebate fees based on the level of trading activity conducted through their respective connectors, tracked via custom headers at the API request level. We match each exchange partner with a dedicated community maintainer who builds and maintains a connector (low-level integration with the exchange’s WebSocket/REST API) and earns a share of the fees rebated by the exchange. This scalable, community-driven maintenance model allows the Hummingbot codebase to support every exchange in the world while ensuring a high bar for code quality while keeping maintenance costs low.

![](/assets/img/foundation-biz-model.jpg)

In each of the first 3 months of operation, the Foundation recorded a net profit. See [Reporting](https://hummingbot.org/reporting/) for more details.

Below, we list the key roadmap themes that the Foundation will work toward during the remainder of 2022 in order to further the Hummingbot mission of making high-frequency trading open source and accessible to everyone in the world.

## 2022 Roadmap Themes

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

Hummingbot’s new Gateway-V2 module, which has been merged to `development`, is stateless middleware library, written primarily in Typescript, that maps various DEX smart contract methods, APIs, and SDKs on various blockchains into standardized REST trading endpoints that can be utilized by the Python-based Hummingbot trading client or any other trading system. It allows developers from different DEX communities to “plug in” their DEXs into the broader Hummingbot community of arbitrageurs and market makers by adding lightweight connectors to Gateway. 

CoinAlpha has contributed the initial Ethereum and Avalanche DEX connectors, while separate teams from the Solana, Cosmos, Harmony, Near, and Polkadot ecosystems are building support for their respective chain families, as well as connectors for the DEXs on those chains. After Gateway is merged to Hummingbot’s `master` branch and included in the upcoming May release, we expect many more DEXs and chains to be supported. 

- Ship Gateway in May release
- Launch 20+ DEX connectors by end of 2022
- Support 10+ Layer 1 and Layer 2 blockchains  by end of 2022

### 📓 Improve documentation

Adding documentation of various types, from how-to-guides to FAQs to developer tutorials, as as well in a well-organized and easily discoverable manner, is a critically important part of growing any open source project, especially one like Hummingbot that is maintained by a global maintainer community.

- Version docs by release
- Add Community Resources section to docs
- Move Foundation-related news into a new Blog section
- Expand developer docs for building CEX and DEX connectors
- Expand developer docs for creating Scripts
- Expand guides, videos and other how-to content that explain how to use new Hummingbot features

### 👨‍👨‍👧‍👦 Grow developer community

Hummingbot has a modular architecture that allows developers to independently maintain and improve different components, and we are continually refactoring the codebase in order to make it more accessible to new developers.

For example, Hummingbot’s new [Scripts](https://www.notion.so/How-to-Create-a-Script-b789c9fe1f97492cbc4673ae0ed55632) component lets users create automated trading strategies that use the full power of Hummingbot exchange connectors in simple Python snippets without having to re-compile the code or add configuration templates. We believe that this new feature will unlock the creative potential within the Hummingbot user community, and we plan on organizing hackathons that reward the community for creating useful Script examples that can be added to the codebase.

- Ship Scripts in May release
- Run 2+ hackathons that reward users for creating Scripts
- Launch Hummingbot developer certification program
- Refactor codebase to pure Python

### 🚀 Launch project DAOs

Currently, Hummingbot Foundation has 11 full-time staff who manage day-to-day operations, support the developer community, answer questions from users, publishes monthly releases, and manages the HBOT governance system. However, like other decentralized autonomous organizations (DAOs), the Foundation plans to outsource much of the work needed to maintain and improve Hummingbot to the community via community-driven *project DAOs*, incentivized through HBOT grants, rather than adding more full-time staff.

The first of these project DAOs are [Technical Review DAO](https://snapshot.org/#/hbot.eth/proposal/0x4480a6868355b8f4ad3dfcfa5d3e8bb043175bb8b250549433e5ba3360af536f), a 5-person collective that earns HBOT tokens for reviewing Github pull requests attached to Pull Request Proposals, and [ONE Liquidity DAO](https://talk.harmony.one/t/liquidity-dao-q1-2022-term-1-progress-report/15179), a 7-person collective that earns Harmony ONE and HBOT tokens for promoting and providing liquidity to the Harmony blockchain.

The next project DAOs will likely be community-led initiatives that focus on building new areas of the Hummingbot codebase. We are currently gathering community interest in areas such as [options](https://commonwealth.im/hummingbot-foundation/discussion/4234-for-discussion-options-dao) and [NFT bots](https://commonwealth.im/hummingbot-foundation/discussion/3401-nft-bots). Please reply to the related forum threads if you are interested in participating.

- Continue supporting Technical Review DAO
- Continue supporting ONE Liquidity DAO
- Launch 3+ new project DAOs by end of 2022