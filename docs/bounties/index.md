Hummingbot is a community-driven open source project that provides standardized exchange connectors and a strategy framework that enables the development of custom algorithmic trading strategies that can run on any compatible exchange. While the Foundation maintains the core Hummingbot framework and the reference connectors for each type, the project relies on community developers to build and maintain other connectors, along with other modules.

## What are Bounties?

The Foundation utilizes bounties to fund the maintenance and development of the Hummingbot open source codebase. Bounties are tasks with associated rewards that community developers can claim and complete to earn HBOT tokens. These bounties cover various aspects of the project, including bug fixes, new connectors, strategy development, documentation, and codebase improvements.

Bounties are categorized by type (Bug Fix, Connector, Custom Strategy, etc.) and have suggested pricing guidelines based on complexity and effort required. For example, a simple bug fix might be valued at $125-625, while developing a complex DEX CLOB Perpetual connector could earn up to $6,250. See [Pricing & Payments](./pricing.md) for detailed information on bounty valuations, fees, and payment methods.

Community developers can browse available bounties on the [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1), apply to work on them, and submit their completed work for review. Once approved and merged, developers receive the bounty payment in HBOT tokens. This system creates a sustainable ecosystem where community members are incentivized to contribute to the project's growth and maintenance.

If you're interested in contributing to Hummingbot by working on bounties, see [Lifecycle of a Bounty](./lifecycle.md) for a detailed walkthrough of the process from application to payment, and check out the [Bounty Contributors Guide](./contributors.md) for best practices.

## External Bounties

Using the same process, Hummingbot Foundation also manages bounties for external sponsors seeking to build and maintain their own exchange connectors. For more information, see:

If you are want to get a custom algorithmic strategy or Hummingbot connector built by a professional-grade developer, Hummingbot Foundation can help you navigate the entire development process. This includes:

- Posting the bounty on [Bounties Board](https://github.com/orgs/hummingbot/discussions/categories/bounties)
- Assigning a qualified community developer and monitoring their progress
- Reviewing the code to ensure the connector meets the acceptance criteria and other requirements
- Performing automated and manual testing (quality assurance)
- Paying the developer when the pull request is merged

To initiate the process, please post a create a new [Github Issue](https://github.com/hummingbot/hummingbot/issues/new/choose) and choose the **Bounty Request** template. You may also contact the Foundation team members on [Discord](https://discord.gg/hummingbot) to discuss your bounty.

## Bounties Board

[Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1), a Kanban-style public Github project, is the source of truth for the status of all Hummingbot bounties, including both Foundation and community-created bounties.

![bounty](./bounty-board.png)

The columns in the board include:

- **Open**: Open bounties that contributors can apply to work on
- **Assigned**: Issue has been assigned to a contributor, who is expected to submit a pull request resolving it
- **Submitted**: A pull request resolving the issue has been submitted by the assigned contributor
- **Merged**: Pull request has been merged to the `development` branch (or published publicly in the case of content)
- **Paid**: Contributor has been paid and the bounty is considered done
