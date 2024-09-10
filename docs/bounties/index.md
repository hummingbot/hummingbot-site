Hummingbot is a community-driven open source project that provides standardized exchange connectors and a strategy framework that enables the development of custom algorithmic trading strategies that can run on any compatible exchange. While the Foundation maintains the core Hummingbot framework and the reference connectors for each type, the project relies on community developers to build and maintain other connectors, along with other modules.

## What are Bounties?

The Foundation utilizes bounties, denominated in both HBOT and other tokens, to fund the maintenance and development of Hummingbot exchange connectors and custom strategies for users.

For external sponsors, Hummingbot Foundation manages bounties for a fee using the same process used to manage its own bounties. This offers a platform for exchanges, trading firms, and others seeking development work on exchange connectors, trading strategies, bug fixes, and related content/guides.

## Bounties Board

![bounty](./bounty-board.png)

[Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1), a Kanban-style public Github project, is the source of truth for the status of all Hummingbot bounties, including both Foundation and community-created bounties.

The columns in the board include:

- **Potential**: Potential bounties that may be sponsored
- **Open**: Open bounties that contributors can apply to work on
- **Assigned**: Issue has been assigned to a contributor, who is expected to submit a pull request resolving it
- **Submitted**: A pull request resolving the issue has been submitted by the assigned contributor
- **Merged**: Pull request has been merged to the `development` branch (or published publicly in the case of content)
- **Paid**: Contributor has been paid and the bounty is considered done

## HBOT Tracker

[HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) is a Google Sheet that contains a record of HBOT bounty allocations and distributions. Relevant tabs include:

* **Discord Leaderboard**: Leaderboard of users who earn HBOT for supporting the Discord community. See [Improvements to the Discord Support Program](/blog/improvements-to-the-discord-support-program) for more information.
* **Connector Pots**: Lists available HBOT allocations for each CEX, DEX and Chain connector, determined by voting in [Polls](../governance/polls.md).
* **Bounty Tracker**: Lists the status of in-progress and completed bounties

## Lifecycle of a Bounty

Hummingbot Foundation oversees the entire Bounties process, from working with sponsors to scope the bounty, finding and assigning the bounty to a qualified developer, performing engineering/QA review, and paying the developer. Since Bounties sprung out of an internal program that has rewarded 100+ unique contributors, the Foundation itself will continue to be an active sponsor of bounties.

See [Lifecycle of a Bounty](./lifecycle.md) for more information.

## Bounty Wallets

In order to fund the bounty, the Sponsor should send the total bounty amount to a designated Foundation wallet:

* Ethereum Mainnet: 0x60D581aEa0644e74df60c7555e5166d32665d6b6
* Binance Smart Chain: 0xE517b826a26B439eCE92f3220628eC007049d915

Since HBOT is an Ethereum ERC-20 token only, any HBOT-denominated bounties must be sent to the Ethereum Mainnet wallet.
