Bounties are rewards (denominated in HBOT or USDC) given out to community members for work that improves Hummingbot, such as supporting users on Discord and fulfilling devlopment bounties. They are the primary mechanism used by Hummingbot Foundation to maintain the Hummingbot codebase and support the community.

## External Bounties

Hummingbot Foundation can also facilitate and manage external bounties for external sponsors for a fee using the same process. This offers a platform for exchanges, trading firms, and others seeking development work on exchange connectors, trading strategies, bug fixes, and related content/guides.

The bounty process creates a win-win situation where the community benefits from the expertise of diverse contributors, while individuals have the opportunity to earn rewards for their contributions. The goal is to help the Foundation and users to improve Hummingbot with help of bounty sponsors and allocate HBOT bounties across the connectors that users vote for.

See the [Bounty Sponsors Guide](./contributors.md) for more information.

## For Contributors

![bounty](./bounty-board.png)

[Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1), a Kanban-style public Github project, is the source of truth for the status of all Hummingbot bounties, including both Foundation and community-created bounties.

The columns in the board include:

- **Potential**: Potential bounties that may be sponsored
- **Open**: Open bounties that contributors can apply to work on
- **Assigned**: Issue has been assigned to a contributor, who is expected to submit a pull request resolving it
- **Submitted**: A pull request resolving the issue has been submitted by the assigned contributor
- **Merged**: Pull request has been merged to the `development` branch (or published publicly in the case of content)
- **Paid**: Contributor has been paid and the bounty is considered done

See the [Bounty Contributors Guide](./contributors.md) to get started.

## Bounties Process

Hummingbot Foundation oversees the entire Bounties process, from working with sponsors to scope the bounty, finding and assigning the bounty to a qualified developer, performing engineering/QA review, and paying the developer. Since Bounties sprung out of an internal program that has rewarded 100+ unique contributors, the Foundation itself will continue to be an active sponsor of bounties.

* [Lifecycle of a Bounty](./lifecycle.md)
* [Bounty Pricing Guidance](./prices.md)
* [Discord Support Program](./discord.md)

## HBOT Tracker

[HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) is a Google Sheet that contains a record of HBOT bounty allocations and distributions. Relevant tabs include:

* **Discord Leaderboard**: Leaderboard of users who earn HBOT for supporting the Discord community. See [Improvements to the Discord Support Program](/blog/improvements-to-the-discord-support-program) for more information.
* **Connector Pots**: Lists available HBOT allocations for each CEX, DEX and Chain connector, determined by voting in [Polls](../governance/polls.md).
* **Bounty Tracker**: Lists the status of in-progress and completed bounties
