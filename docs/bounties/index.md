Hummingbot is a community-driven open source project that provides standardized exchange connectors and a strategy framework that enables the development of custom algorithmic trading strategies that can run on any compatible exchange. While the Foundation maintains the core Hummingbot framework and the reference connectors for each type, the project relies on community developers to build and maintain other connectors, along with other modules.

## What are Bounties?

The Foundation utilizes HBOT-denominated bounties to fund the maintenance and development of the Hummingbot open source codebase.

Using the same process, Hummingbot Foundation also manages bounties for external sponsors seeking to build and maintain their own exchange connectors. See [External Bounties](/bounties/external.md) and [Lifecycle of a Bounty](./lifecycle.md)for more information.

## Bounties Board

[Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1), a Kanban-style public Github project, is the source of truth for the status of all Hummingbot bounties, including both Foundation and community-created bounties.

![bounty](./bounty-board.png)

The columns in the board include:

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
