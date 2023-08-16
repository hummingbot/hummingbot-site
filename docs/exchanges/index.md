## What are Connectors?

Hummingbot connectors standardize trading logic and order types across different types of exchanges and blockchain networks. Each connector's code is contained in modularized folders in the Hummingbot and/or Gateway codebases.

### Connector Types

* [**CEX**](/cex-connectors/): Centralized exchanges take custody of user assets, i.e. Binance, Gate.io, Kucoin, etc.
* [**DEX**](/dex-connectors/): Decentralized exchanges are platforms in which user assets are stored non-custodially in smart contracts, i.e. Uniswap, dYdX, PancakeSwap, etc.
* [**Chain**](/chains/): L1/L2 blockchain networks such as Ethereum, Polygon, Arbitrum, etc.

## Connector Maintenance

Exchange connectors may have a maintainer who is responsible for ongoing maintenance: fixing bugs, addressing user issues, and keeping up with exchange API and Hummingbot connector standard updates. Specifically, maintainer responsibilities include:

* Addressing user Github issues and pull requests related to the connector
* Keeping the connector updated for changes to the exchange API and Hummingbot connector standard for that exchange type
* Keeping the connector's documentation page updated

Hummingbot Foundation is the maintainer for the Gold and Silver connectors, while community members may maintain other connectors. For instance, [CoinAlpha](https://coinalpha.com) maintains a number of Bronze connectors in the codebase. Individual developers and exchanges may register with us to be assigned the maintainer role for other Bronze connectors.

## Connector Tiers

Quarterly [Polls](/governance/polls) allow the Hummingbot community to vote using HBOT tokens to rank the connectors for each type into **Gold, Silver, and Bronze tiers**. This decides which connectors should be included in the codebase for the next quarter, and whether they are maintained by Hummingbot Foundation.

### Gold

The Gold connector is the top vote-getting connector in the Poll. This connector is maintained by Hummingbot Foundation and are continually improved, serving as the "gold standard" template for all other connectors of that type.

### Silver

The next three vote-getting connectors form the Silver tier. These connectors are maintained by Hummingbot Foundation via community developer bounties, tracking improvements made to the Gold connectors.

### Bronze

Bronze connectors are those which have received votes that exceed the Connector Inclusion Threshold (currently 100,000 HBOT Tokens) in the prior quarter's Poll. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## Contributing Connectors

Developers may submit connectors via a [New Connector Proposals](/governance/proposals) that contains the link to the pull request. If the proposal is approved, Hummingbot Foundation will review and merge the pull request into the codebase.

See [Contribution Guidelines](/developers/contributions/) for the process to get pull requests merged into the codebase.
