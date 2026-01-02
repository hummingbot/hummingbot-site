All governance decisions in the Hummingbot ecosystem flow through **Hummingbot Governance Proposals (HGP)**, a unified proposal type that covers all governance activities including:

* Approving pull requests and new connectors
* Allocating HBOT bounties for maintenance and improvements
* Adding or removing connectors from the codebase
* Electing the Board of Directors
* Making changes to the governance system

## Proposal Parameters

| Parameter | Value |
|-----------|-------|
| Snapshot Space | [hbot.eth](https://snapshot.org/#/hbot.eth) |
| Discussion Period | 2 days minimum |
| Vote Duration | 3 days |
| Minimum HBOT Balance | 200,000 |
| Quorum | 5,000,000 HBOT |
| Approval Threshold | >50% |

!!! note
    See the [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current Quorum Percentage, which is based on the HBOT circulating supply.

## Proposal Process

### 1. Discussion Phase (2+ days)

Before creating a proposal on Snapshot, proposers should start a discussion thread in the **#proposals** channel on [Discord](https://discord.gg/hummingbot). This allows the community to:

* Provide feedback on the proposal
* Suggest improvements or alternatives
* Gauge community support before voting

The discussion phase should last at least 2 days to give the community adequate time to review and comment.

### 2. Snapshot Vote (3 days)

After the discussion phase, the proposer can create the formal proposal on the [hbot.eth Snapshot space](https://snapshot.org/#/hbot.eth).

* Any wallet with at least **200,000 HBOT** can create a proposal
* Voting is gas-less and uses your HBOT token balance at the snapshot block
* 1 HBOT = 1 vote
* Proposals must reach the **5,000,000 HBOT** quorum and achieve **>50%** approval to pass

### 3. Implementation

If the proposal passes:

* **Pull requests**: The Foundation will review and merge the code into the codebase
* **Bounties**: The Foundation will create and manage the bounty assignment
* **Connector changes**: The Foundation will implement the changes in the next release
* **Governance changes**: The Foundation will update documentation and processes accordingly

If the proposal fails to meet the approval threshold or quorum, the proposer is free to revise and submit a new proposal.

## Proposal Template

To be considered valid, an HGP should contain the following fields:

* **Title**: Starts with `HGP` followed by a descriptive summary (e.g., `HGP-100: Add XYZ Exchange Connector`)
* **Description**: Detailed explanation of the proposed initiative, including:
    * What is being proposed
    * Why it benefits the Hummingbot community
    * Any relevant context or background
* **Github Link** (if applicable): Link to a [Github pull request](https://github.com/hummingbot/hummingbot/pulls) or [issue](https://github.com/hummingbot/hummingbot/issues)
* **HBOT Allocation** (if applicable): Proposed HBOT bounty amount and rationale

## Common Proposal Types

### Code Changes

For pull requests to the Hummingbot codebase:

* Link to the pull request with a detailed explanation of the changes
* The Foundation will conduct a technical code review and security audit before merging
* New connectors should include unit test coverage

### Bounties

For proposing development bounties:

* Describe the improvement or feature needed
* Specify the proposed HBOT bounty amount
* Optionally name a specific developer to assign the bounty to
* If no developer is named, the Foundation will publicize the bounty to the community

### Connector Management

For adding or removing connectors from the codebase:

* Explain why the connector should be added or removed
* For additions, include a link to the pull request with the connector code
* For removals, explain the rationale (e.g., low usage, maintenance burden, security concerns)

### Board Elections

The Foundation conducts annual Board of Directors elections via HGP. See [Board of Directors](board.md) for details on the election process.
