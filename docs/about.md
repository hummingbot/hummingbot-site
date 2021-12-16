The Hummingbot Foundation is a not-for-profit organization established in the Cayman Islands. The Foundation’s mission is to democratize high-frequency trading by enabling decentralized maintenance and community governance over the open-source Hummingbot code repository.

## Principles

Below are the core principles that underpin Hummingbot’s development:

* **Open Source**: The Hummingbot codebase is publicly available, auditable, and free
* **Modular**: Hummingbot modules can be independently built, used, and maintained by community members
* **Extensible**: Users can use Hummingbot to create any automated trading strategy on every exchange and blockchain
* **All Levels**: Hummingbot is designed for use by individuals and professionals alike

## Purpose

### Decentralized Maintenance

The primary purpose of Hummingbot Foundation is to enable a decentralized, bazaar-style model of software development for the Hummingbot codebase.

In Eric Raymond's 1997 essay [The Cathedral and the Bazaar](https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar), he described the model used by the open source Linux operating system project:

>Linus Torvalds’s style of development—release early and often, delegate everything you can, be open to the point of promiscuity—came as a surprise. No quiet, reverent cathedral-building here—rather, the Linux community seemed to resemble a great babbling **bazaar** of differing agendas and approaches ... out of which a coherent and stable system could seemingly emerge only by a succession of miracles.

Today, Linux is the world's dominant operating system, powering virtually every website and the majority of mobile devices. Similar to Linux, Hummingbot’s modular architecture allows connectors to [exchanges](/exchanges) and blockchain [protocols](/protocols), as well as [strategy templates](/strategies), to be built independently, making it easy for independent, community developers to contribute and maintain individual components.

See [Maintenance](/maintenance) for more details.

### Decentralized Governance

Hummingbot Foundation is also an experiment in decentralized governance. All pull requests, or proposed code changes to the Github code repository, will need to be submitted as a Pull Request Proposal and be approved by HBOT holders in order to be merged into the codebase and included in an official release.

In addition, HBOT holders will be able to create and vote on Improvement Proposals that direct the Foundation to implement architectural changes or prioritize specific enhancements or bug fixes. HBOT holders will also be able to create and vote on Governance Proposals that modify aspects of the governance system or allocate funding toward grant programs. Development work that results from an approved grant or Improvement Proposal also will need to undergo the pull request approval process in order to be merged into the development branch.

Pull requests will be continually approved and merged through the month. Approximately once per month, the development branch of the codebase will be cloned onto the master branch of the codebase, which will subsequently be packaged into an official release in various formats for different operating systems.

The medium of governance is the Hummingbot Governance Token (HBOT), a standard ERC-20 token with a fixed total supply. The sole use case for HBOT is to empower holders to decide how the Hummingbot codebase changes over time through proposals. 

See [Governance](/governance) for more details.

## Board of Directors

The Board of Directors provides oversight over the foundation and its staff, and it also manages the HBOT treasury in a multi-signature wallet. All wallet transactions must be signed by a majority of the board.

The current board members are:

| Name              | Title                          | Ethereum address                             |
|-------------------|--------------------------------|----------------------------------------------|
| Michael Feng      | CEO, CoinAlpha            | `0xfC17747C89E93E2deeAdA88419e857a907A20313` |
| Gene Cheon        | CFO, Hummingbot Foundation     |  |
| Brett Gibson      | Initialized Capital, CoinAlpha Director | `0x64b8457C3977a2f8ca7D7C00b0435aED27CA34C3` |
| Arthur Cheong     | DeFiance Capital           |  |
| Howard Chu        | Hummingbot user and Eagle Club member            |  |

## History

Hummingbot is the leading open source software for building market making and arbitrage bots. Launched in April 2019, Hummingbot served the cryptocurrency market’s need for liquidity by enabling anyone to become a liquidity provider. Because Hummingbot pioneered a modular architecture that allowed external developers to contribute new exchange connectors and trading strategies, it has scaled into a bazaar-style open source project with many contributors and users around the world, both individual and professional.

Hummingbot was originally built and opensourced by CoinAlpha, Inc, a startup based in Mountain View, California. CoinAlpha is backed by [Initialized Capital](https://initialized.com/), [Bain Capital Ventures](https://www.baincapitalventures.com/), [Defiance Capital](https://www.defiance.capital/), and other leading crypto and fintech investors.

CoinAlpha runs businesses that support the Hummingbot ecosystem, such as:

* [Hummingbot Miner](https://miner.hummingbot.io): a decentralized market making platform where Hummingbot users can run market making bots on centralized exchanges to earn token rewards from token issuers who seek a decentralized, community-based alternative to hiring market makers for liquidity services
* [Hummingbot Pro](/developers/architecture/#hummingbot-pro-preview): a forthcoming module that combines a Cython-based backtesting engine plugin, access to historical order book data, and associated services/support aimed at professional and institutional Hummingbot users.

In October 2021, CoinAlpha [announced](/news/foundation) plans to launch the Hummingbot Foundation, a new open source foundation that maintains the Hummingbot Github repository and administers a decentralized, community-driven system of software development. 

The Hummingbot Foundation was established in December 2021.
