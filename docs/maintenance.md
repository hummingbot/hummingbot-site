The Hummingbot Foundation’s primary role is to coordinate the ongoing maintenance and improvement of the open source Hummingbot codebase via a decentralized set of actors: Sponsors, Contributors, Maintainers, and Users.

![](/assets/img/foundation-flywheel.webp)

* **Sponsors** are crypto exchanges, blockchain protocols, or trading firms who fund bounties to build and maintain Hummingbot components, such as connectors or strategies. Usage of these components benefit sponsors by increasing user adoption, activity, and transaction volume on their respective exchanges and blockchains.

* **Contributors** and **Maintainers** are individual developers and firms that build Hummingbot components and submit their work as pull requests to the official Github repository. Maintainers, who typically start as contributors, have ongoing responsibilities to maintain the components they build, either for free or for ongoing support fees.

* **Users** are individual and professional traders who install and use the Hummingbot open source software to run trading bots with their own capital. In the Hummingbot configuration, they may elect to report their aggregated, anonymized exchange-level trading volume, which the Foundation may publish.

## Connector maintenance agreements

Hummingbot [exchange connectors](/exchanges) integrate with the API of a cryptocurrency exchange in order to expose standardized data format and endpoints to Hummingbot strategies (automated processes that interact with exchange APIs) that are created and configured by Users. Since exchange APIs vary widely, these connectors allow anyone to run bots across multiple exchanges without requiring engineering time on low-level exchange API integrations. 

Similarly, Hummingbot connects to [blockchain protocols](/protocols) via its [Gateway](/developers/gateway) component, which enables users to run bots that bridge centralized and decentralized exchanges, or across different blockchains.

Maintaining connectors requires significant effort, since Hummingbot is a constantly evolving codebase and the cryptocurrency market landscape also changes rapidly. Connectors are continually improved to accommodate more asset types, as well to increase performance and reliability. In addition, exchange APIs are continually being updated. To ensure that each connector can be properly maintained, each connector has a **Maintainer**.

Certain exchanges and protocols act as **Sponsors** and have contractual agreements with the Foundation and its associates that rebate a portion of fees incurred by Users of the Hummingbot software, measured via unique identifiers in API request headers or blockchain transaction memo fields. These fees are remitted to the Foundation on a monthly basis and will be shared with the Maintainer of the connector. On a monthly basis, the Foundation will publish the total amount of fees shared from each Sponsor and how much was paid to Maintainers.

### Active agreements

| Connector                               | Type      | Amount  | Maintainer | 
|-----------------------------------------|-----------| ------- | ---------- |
| [AscendEx](/exchanges/ascendex)         | fee share | 40%     | CoinAlpha  |
| [Binance.com](/exchanges/binance)       | fee share | 30%     | CoinAlpha  |
| [BitMart](/exchanges/bitmart)           | fee share | 45%     | [srirambandi](https://github.com/srirambandi)|
| [CoinZoom](/exchanges/coinzoom)         | fee share | 40%     | [TheHolyRoger](https://github.com/TheHolyRoger)|
| [Digifinex](/exchanges/digifinex)       | fee share | 30%     |            |
| [KuCoin](/exchanges/kucoin)             | fee share | 30%     | CoinAlpha  |
| [Gate.io](/exchanges/ascendex)          | fee share | 20%     | CoinAlpha  |
| [HitBTC](/exchanges/hitbtc)             | fee share | 40%     | [TheHolyRoger](https://github.com/TheHolyRoger)|
| [Huobi](/exchanges/huobi)               | fee share | 40%     |            |
| [OkEx](/exchanges/okex)                 | fee share | 40%     |            |
| [ProBit](/exchanges/probit)             | fee share | 30%     |            |
| [NDAX](/exchanges/ndax)                 | monthly pmt| $500   |            |

## Bounties, grants, and hackathons

The Foundation’s also work with Sponsors seeking to fund specific work items such as new connectors, new strategies, or enhancements or fixes to existing components (bounties), as well as others who want to fund more work in more general areas such as strategies for new assets or exchange types (grants and hackathons).

The Foundation will charge Sponsors a fee in order to administer the program and coordinate with developers, and to faciliate the review/merge of the resulting development work.

### dYdX + Hummingbot Bounty Hunt

* **Sponsor**: [dYdX](https://dydx.exchange/)
* **Start date**: Aug 9, 2021
* **End date**: Oct 1, 2021
* **Total prize amount**: $15,000 (including tips)
* **Winners**: https://hummingbot.io/blog/dYdX-Bounty-Winner-Announcement

| Contributor                                        | Contribution                                               | Bounty   | Amount     |
|----------------------------------------------------|------------------------------------------------------------|--------- | ---------- |
| [leastchaos](https://github.com/leastchaos)        | [#4121](https://github.com/CoinAlpha/hummingbot/pull/4121) | Strategy | $10,000    |
| [cryptoulette](https://twitter.com/cryptoulette)   | [guide](https://docs.google.com/document/d/1CuMFk7DalTUUvpDkzI9-72nC8WFre3CW/edit?usp=sharing&ouid=106910946131072781869&rtpof=true&sd=true) + [video](https://www.youtube.com/watch?v=T1rsNcFD5Cw) | Content | $2,000 |

The winning [`hedge`](/strategies/hedge/) strategy was merged in version [0.45.0](/release-notes/0.45.0/).

### Open DeFi Hackathon

* **Sponsor**: [Open DeFi](https://opendefi.network/)
* **Start date**: May 3, 2021
* **End date**: May 23, 2021
* **Total prize amount**: $5,000 (including tips)
* **Winners post**: https://hummingbot.io/blog/2021-05-opendefi-hackathon-hummingbot-bounty-winner/

| Contributor                                        | Contribution                                               | Bounty   | Amount     |
|----------------------------------------------------|------------------------------------------------------------|--------- | ---------- |
| [squarelover](https://github.com/squarelover)      | [#3430](https://github.com/CoinAlpha/hummingbot/pull/3430) | Strategy | $2,000     |

The winning [`aroon-oscillator`](/strategies/aroon-oscillator/) strategy was merged in version [0.45.0](/release-notes/0.45.0/).

