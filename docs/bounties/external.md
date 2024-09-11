# External Bounties

For the past two years, Hummingbot Foundation has been using the Bounties system internally to fund the development of Hummingbot and Gateway. We are now expanding this to external bounty sponsors to enable them to crowdsource development from the Hummingbot community developers for their connectors and strategies.

!!! tip "Sponsoring Hummingbot Foundation"
    For leading protocols and exchanges who wish to build a long-term relationship with the Hummingbot community, we also offer a [Foundation Sponsorship](/about/sponsors/index.md) option. For more information about this option, please email <operations@hummingbot.org> or reach out to a Foundation team member on Discord.


## Eligible Bounties

The Foundation currently handles external bounties related to the following types of connectors and strategies:

### Issue Types

* 🐞 **Bug Fix**: Fix to a bug in the Hummingbot codebase
* 🏦 **New Connector**: A new [connector](/exchanges/) in the Hummingbot or Gateway codebases
* 🏦 **New Strategy**: A new [StrategyV2 Controller](/v2-strategies/controllers/index.md) (may not be open sourced)
* 🚀 **Connector Upgrade**: Update or improvement to an exchange connector
* 📺 **Connector Guides**: Guides that explain how to use an exchange connector

### Connector Types

* CLOB spot
* CLOB perp
* AMM

### Strategy Types

* Directional V2 Controller
* Market Making V2 Controller

!!! note "Other types of bounties"
    To standardize the process of bounties, we currently do not have a process for non-standardized exchange connectors, custom scripts, and other types of bounties not listed above.

## Services We Provide

### Bounty Management

The services we provide include:
- Posting the bounty on Github
- Finding a qualified community developer
- Monitoring the progress of the developer
- Engineering review to ensure the connector meets the requirements for the connector type
- Perform automated and manual testing of the connector to ensure it works as expected
- Paying the developer upon merging the pull request to the designated repository

See [Completed Bounties](/bounties/completed.md) for an idea of the current all-in market rate for various types of bounties.

For HBOT-denominated bounties, **90%** of the total bounty amount is paid out to the developer after the work has been completed, while the Foundation keeps the remaining **10%**. For stablecoin-denominated bounties, **80%** is paid out to the developer and **20%** is kept by the Foundation.

### Connector Maintenance (new connectors only)

The Foundation can also facilitate the governance and maintenance of an exchange connector after it has been built. To merge a connector into the Hummingbot codebase, a [New Connector Proposal](/governance/proposals) must be submitted and approved by the community. Quaterly voting in [Polls](/governance/polls) is required to keep the connector in the codebase. In addition, there
may be bug fixes, API changes, and other user-reported issues that require maintenance.

While sponsors always have the self-serve option to submit/approve a New Connector Proposal and handle maintenance, the Foundation can also facilitate the process. For a one-time $2000 fee, the Foundation can:

- Create a New Connector Proposal
- Announce the New Connector Proposal in Discord and coordinate community voting
- If approved, merge the connector pull request into the codebase
- Fund a 100,000 HBOT Connector Pot that can be used for maintenance bounties
- Create maintenance bounties using funds from the Connector Pot to address user-reported issues

After the Connector Pot has been depleted, sponsors may top up the pot with additional HBOT to continue having the Foundation facilitate maintenance of their connector.

## Payment Process

Contributors are paid only after the bounty fix has been verified and published. Afterwards, Foundation will include the bounty payment in its monthly bounty payout process and mark the bounty as Paid in both [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1) and [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing).

See [Lifecyle of a Bounty](./lifecycle.md) for more information.

## Bounty Wallets

In order to fund the bounty, sponsors should send the total bounty amount to a designated Foundation wallet:

* Ethereum Mainnet: [0x60D581aEa0644e74df60c7555e5166d32665d6b6](https://etherscan.io/address/0x60D581aEa0644e74df60c7555e5166d32665d6b6)
* Binance Smart Chain: [0xE517b826a26B439eCE92f3220628eC007049d915](https://bscscan.com/address/0xE517b826a26B439eCE92f3220628eC007049d915)
* Solana: [5bhQNYaDEwEqjcjsuRJRuGyqbchzcDtYK49e593Wuc8i](https://solscan.io/account/5bhQNYaDEwEqjcjsuRJRuGyqbchzcDtYK49e593Wuc8i)

Since HBOT is an Ethereum ERC-20 token only, any HBOT-denominated bounties must be sent to the Ethereum Mainnet wallet.
