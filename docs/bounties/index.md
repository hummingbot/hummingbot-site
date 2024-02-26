Bounties are rewards (denominated in HBOT or other tokens) given out to community member for work that improves Hummingbot. They offer a platform for **Sponsors** seeking development work on exchange connectors, trading strategies, bug fixes, and related content/guides to connect with **Contributors**, experienced Hummingbot developers and traders capable of creating these solutions or content.

The bounty process creates a win-win situation where the community benefits from the expertise of diverse contributors, while individuals have the opportunity to earn rewards for their contributions. The goal is to help the Foundation and users to improve Hummingbot with help of Bounty Sponsors and allocate HBOT bounties across the connectors that users vote for.

Hummingbot Foundation oversees the entire Bounties process, from working with Sponsors to scope the bounty, finding and assigning the bounty to a qualified developer, performing engineering/QA review, and paying the developer. Since Bounties sprung out of an internal program that has rewarded 100+ unique contributors, the Foundation itself will continue to be an active Sponsor of bounties.

See below for step-by-step guides for Contributors and Sponsors:

* [Contributors](./contributors.md)
* [Sponsors](./sponsors.md)

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

* **Connector Pots**: Lists available HBOT allocations for each CEX, DEX and Chain connector, determined by voting in [Polls](../governance/polls.md).
* **Bounty Tracker**: Lists the status of in-progress and completed bounties

## Governance for New Connectors

[Connectors](/exchanges/) require maintenance, testing and documentation, so adding new ones to the codebase imposes a cost by everyone who uses Hummingbot. Therefore, new connectors that are merged into the `master` branch and included into official monthly releases require community voting.

In addition to building the connector, sponsors should note that connectors need to be proposed and voted on via a [New Connector Proposal](../governance/proposals.md) and voted each quarter in [Polls](../governance/polls.md). All voting takes place using HBOT tokens on [Snapshot](https://snapshot.org/#/hbot.eth).
