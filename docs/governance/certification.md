# Exchange Certification

Hummingbot's Exchange Certification program is a community-driven process that selects certain exchanges in the Hummingbot codebase to be **certified**. Certified exchanges are clearly differentiated from non-certified exchanges in the Hummingbot client and documentation, get developer bounties to fund bug fixes and improvements, priority support, and other benefits.

This enables Hummingbot Foundation to focus its scarce engineering, QA, and support bandwidth/resources on certified exchanges and their connectors. See [Support Hummingbot](/support-hummingbot) for more details on how this benefits users.

## Certified Exchanges

### Epoch 2

Per this [Snapshot poll](https://snapshot.org/#/hbot.eth/proposal/0x1f84875fb764d697a106e07fa5a7b6584a418cf5634aa94f4d9a8c5852455f4e) and [related forum topic](https://forum.hummingbot.org/t/epoch-2-proposal-exchange-certification-program/127), the HBOT community selected the following exchanges to be certified for Epoch 2:

* [Binance](/exchanges/binance/) and [Binance Perpetual](/exchanges/binance-perpetual/)
* [Kucoin](/exchanges/kucoin/)
* [AscendEx](/exchanges/ascend-ex/)
* [Gate.io](/exchanges/gate-io/)
* [ByBit](/exchanges/bybit/) and [ByBit Perpetual](/exchanges/bybit-perpetual/)
* [OKX](/exchanges/okx/)
* [HitBTC](/exchanges/hitbtc/)
* [Huobi](/exchanges/huobi/)
* FTX (removed from codebase)

## Certification Benefits

**Documentation**

* Certified exchanges are featured in the Hummingbot Github code repository, DockerHub image repository, and documentation
* Certified exchanges are featured within the Hummingbot client software, i.e. `connect` command
* The Foundation will create and maintain dedicated landing pages and API integration guides for certified exchanges in the Hummingbot website
* Foundation-created blog posts, YouTube videos, and other content will feature trading strategies on certified exchanges

**Engineering**

* The Foundation will assess and create [bounties](/maintenance/bounties) for bugs on certified exchange connectors
* The Foundation will create and bounties for improvements, upgrades, and new features related to certified exchanges

**Support & QA**

* Foundation community managers and engineers will prioritize supporting users who need help trading or developing on certified exchanges

* Foundation QA will perform in-depth testing on pull requests related to certified exchanges, versus basic testing on pull requests related to non-certified exchanges

* Foundation QA will run long-term testing bots on certified exchange connectors to pro-actively spot issues

**Partnership**

* Foundation will partner with certified exchanges to promote trading competitions, referral programs, hackathons, developer bootcamps, and other mutually beneficial partnerships to the Hummingbot community.

## Certification Process

### Requirements

To be eligible for certification, an exchange must meet the requirements below:

* Working exchange connector in the `master` branch of the Hummingbot codebase
* Active fee share agreement or broker program partnership with Hummingbot Foundation
* Process to track and report fees shared to the Hummingbot Foundation on a regular basis, at a minimum every month

### Onboarding

To start the certification process, a new exchange should follow these steps:

1. Complete the information required in this form: [https://forms.gle/8qohLTBF1Gsgko1f6](https://forms.gle/8qohLTBF1Gsgko1f6)
2. Contact `operations@hummingbot.org` to schedule a first meeting and to create a Telegram group chat where all conversations will be handled in the future
3. Enter into fee share agreement
3. Integrate brokerID into a working Hummingbot connector and confirm validity

After the new non-certified exchange met all the above mentioned requirements, they will be eligible for certification voting in the next Epoch, or in the current one if an HGP is submitted and approved.

### Voting

At the beginning of each [Epoch](/governance/epochs), the Foundation will organize a [Hummingbot Governance Proposal](/governance/proposals#hgp) that allows HBOT holders to vote to select which qualified exchanges should be certified for the upcoming Epoch. To assist HBOT holders in making this determination, the Foundation will provide information for each qualified exchange:

* Partnership information, such as percentage of fees shared, eligibility criteria, and benefits to users
* Historical fee volume shared with the Foundation
* Historical trading volume reported to the Foundation

During the Epoch, any HBOT holder may submit an HGP to add or remove an exchange as Certified. If the proposal is approved, the Foundation will make the corresponding adjustments with the following two monthly releases.
