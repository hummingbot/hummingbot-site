# Exchange Certification

Hummingbot's Exchange Certification program is a community-driven process that selects certain exchanges in the Hummingbot codebase to be **certified**. Certified exchanges are clearly differentiated from non-certified exchanges in the Hummingbot client and documentation, get developer bounties to fund bug fixes and improvements, technical support, and other benefits.

This enables Hummingbot Foundation to focus its scarce engineering, QA, and support bandwidth/resources on certified exchanges and their connectors. See [Support Hummingbot](/support-hummingbot) for more details on how this benefits users.

## Certified Exchanges

### Epoch 2

Per this [Snapshot poll](https://snapshot.org/#/hbot.eth/proposal/0x1f84875fb764d697a106e07fa5a7b6584a418cf5634aa94f4d9a8c5852455f4e) and [related forum topic](https://hummingbot.discourse.group/t/epoch-2-proposal-exchange-certification-program/127), the HBOT community selected the following exchanges to be certified for Epoch 2:

* [Binance](/exchanges/binance/) and [Binance Perpetual](/exchanges/binance-perpetual/)
* [AscendEx](/exchanges/ascend-ex/)
* [Gate.io](/exchanges/gate-io/)
* [FTX](/exchanges/ftx/)
* [ByBit](/exchanges/bybit/) and [ByBit Perpetual](/exchanges/bybit-perpetual/)
* [OKX](/exchanges/okx/)
* [HitBTC](/exchanges/hitbtc/)
* [Huobi](/exchanges/huobi/)

## Process

### Requirements

To be eligible for certification, an exchange must meet the requirements below:

* Working exchange connector in the `master` branch of the Hummingbot codebase
* Active fee share agreement or broker program partnership with Hummingbot Foundation
* Process to track and report fees shared to the Hummingbot Foundation on a regular basis, at a minimum every month

## Voting

At the beginning of each [epoch](/governance/epochs), the Foundation will organize a HGP that allows HBOT holders to vote to select which qualified exchanges should be certified for the upcoming Epoch. To assist HBOT holders in making this determination, the Foundation will provide information for each qualified exchange:

* Partnership information, such as percentage of fees shared, eligibility criteria, and benefits to users
* Historical fee volume shared with the Foundation
* Historical trading volume reported to the Foundation

During the Epoch, any HBOT holder may submit an HGP to add or remove an exchange as Certified. If the proposal is approved, the Foundation will make the corresponding adjustments with the following two monthly releases.

### Benefits

**Documentation**

* Certified exchanges are featured in the Hummingbot Github code repository, DockerHub image repository, and documentation
* Certified exchanges are featured within the Hummingbot client software, i.e. connect, help commands
* The Foundation will create and maintain dedicated landing pages and API integration guides for certified exchanges in the Hummingbot website
* Foundation-created blog posts, YouTube videos, and other content will feature trading strategies on certified exchanges

**Engineering**

* The Foundation will only assess and create [bounties](/maintenance/bounties) for bugs on certified exchange connectors
* The Foundation will create and bounties for improvements, such as perpetuals support, related to certified exchanges

**Support & QA**

* Foundation community managers and engineers will only prioritize supporting users who need help trading or developing on certified exchanges

* Foundation QA will perform pro-active QA on certified exchange connector and perform in-depth testing on pull requests related to certified exchanges. QA will only perform basic testing on pull requests related to non-certified exchanges.

**Partnership**

* Foundation will partner with certified exchanges to promote trading competitions, referral programs, hackathons, developer bootcamps, and other mutually beneficial partnerships to the Hummingbot community.
