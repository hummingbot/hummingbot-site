HBOT holders can vote on three types of proposals:

* [**Pull Request Proposal (PRP)**](#prp): a proposal linked to an open pull request in the Hummingbot code repository. The community votes if the linked Pull Request should be added to the main codebase;
* [**Hummingbot Improvement Proposal (HIP)**](#hip): a proposal that allocates HBOT tokens for a developer bounty to improve a component in the Hummingbot codebase.
* [**Hummingbot Governance Proposal (HGP)**](#hgp): a proposal that modifies the Foundation governance system or allocates HBOT tokens for larger initiatives such as partnerships, hackathons, and other community programs.

Each proposal type has different Governance Parameters:

| Proposal Type                | Pull Request              | Improvement             | Governance               |
| ---------------------------- | ------------------------- | ----------------------- | ------------------------ |
| Snapshot                     | <https://snapshot.org/#/hbot-prp.eth> | <https://snapshot.org/#/hbot-ip.eth> | <https://snapshot.org/#/hbot.eth> |
| Vote Duration                | 7 days                    | 7 days                 | 7 days                  |
| Min HBOT Balance             | 1                         | 10,000                  | 50,000                   |
| Quorum Percentage            | 0.1% of HBOT circulating supply | 3% of HBOT circulating supply | 10% of HBOT circulating supply |
| Approval Threshold           | >50% of tokens approved   | >50% of tokens approved | >50% of tokens approved  |

The budget for HIPs and HGPs draws upon the HBOT budget for each [Epoch](/governance/epochs).

## PRP

<a href="https://snapshot.org/#/hbot-prp.eth" target="_blank" class="md-button md-button--primary">:fontawesome-solid-vote-yea: Vote on PRPs!</a>

As a community-maintained open source project the Hummingbot codebase sees [pull requests](https://github.com/hummingbot/hummingbot/pulls) from community members daily. However, it takes time and effort to review pull requests to the Hummingbot codebase, Hummingbot Foundation uses HBOT voting to decide if a pull request should be reviewed for acceptance into the codebase.

To request that your pull request be reviewed, first submit a pull request to the Hummingbot Github repository that follows the [Contribution Guidelines](/developers/contributions/#5-create-a-pull-request).

Afterwards, submit a Pull Request Proposal on the [PRP Snapshot](https://snapshot.org/#/hbot-prp.eth). To submit a PRP, you will need at least 1 [HBOT token](/hbot) in your Ethereum wallet. The proposal submitter may promote discussion of the pull request on Discord **#governance** channel and the [Hummingbot Forum](https://forum.hummingbot.org/).

If the PRP is approved after the Vote Duration and the Quorum Percentage is met, then the Foundation will add the pull request to the Review Board and initiate a **Review**.

In the Review process, the Foundation will assign a Reviewer, generally an experienced Hummingbot community developer, to conduct a technical code review, check for conflicts with other parts of the Hummingbot codebase, and approve or reject the pull request. In addition, the Foundation QA team will test the submitted pull request to ensure that it fulfills its stated intention.

If the PRP fails to meet the approval thresholds at the end of the Voting Period, it will be rejected. Afterwards, the Foundation will close the related pull request in the Hummingbot repository. However, the developer is free to create a new pull request and a new PRP at a subsequent date.

To be considered valid, a PRP should contain the following fields:

* **Title**: Title should start with `PRP` followed by its count, along with a concise description
* **Description**: Detailed explanation of the improvement requested or work proposed
* **Github pull request**: Link to the Github pull request

See [Maintenance](/maintenance) for a more information.

## HIP

<a href="https://snapshot.org/#/hbot-ip.eth" target="_blank" class="md-button md-button--primary">:fontawesome-solid-vote-yea: Vote on HIPs!</a>

Many proposed improvements to the Hummingbot codebase are large, complex, and/or entail many hours of work by an experienced developer. These are cases where development bounties that compensate the developer for their time are appropriate.

Hummingbot Improvement Proposals (HIP) allow HBOT token holders to propose improvements or fixes to the Hummingbot codebase and allocate tokens from the associated [Epoch's](/governance/epochs) Dev Grant Budget for developer bounties.

Before creating an HIP, we recommend creating a thread in the [Hummingbot forum](https://forum.hummingbot.org/) under the **Improvements** category. If there appears to be quorum of community members who support the improvement, anyone can create a Hummingbot Improvement Proposal to propose that the Foundation allocate a quantity of HBOT tokens as a bounty, paid to an assigned developer when a pull request containing the improvement is merged into the development branch.

Potential improvements can be divided into 2 categories:

* Existing work: Creating a bounty for an existing developer to harder some existing work for merge into the Hummingbot codebase
* New work: Creating a bounty to be assigned to a new developer for a new improvement to the Hummingbot codebase

See [this forum thread](https://forum.hummingbot.org/t/epoch-2-proposed-governance-changes-part-2/123#improvements-foundation-bounty-5) for examples of potential improvements going through the process.

To be considered valid, a HIP should contain the following fields:

* **Title**: Title should start with `HIP`, followed by its count, along with a concise description
* **Linked HGP:**  Linked HGP, if any
* **Description**: Detailed explanation of the improvement requested or work proposed
* **HBOT Allocation**: Proposed allocation and justification

See [Maintenance](/maintenance) for a more information.

## HGP

<a href="https://snapshot.org/#/hbot.eth" target="_blank" class="md-button md-button--primary">:fontawesome-solid-vote-yea: Vote on HGPs!</a>

Hummingbot Governance Proposals (HGP) allows HBOT token holders to re-elect the Board of Directors, elect certified exchanges and other community members, decide how the HBOT treasury assets are distributed, and adjust aspects of the Foundation governance system.

!!! note "Governance Proposals vs Improvement Proposals"
    Governance Proposals (HGP) are designed to allocate HBOT budget toward broad themes that benefit the overall Hummingbot user base, enabling any developer to request grants for it afterwards, or community initiatives that enable diverse teams to apply. Unlike HIPs, developers cannot request HBOT in a HGP for exclusive work that prevents contribution by other community developers.

It is a good practice to discuss proposals with the community before opening it for voting. Proponents should create a thread in the [Hummingbot Forum](https://forum.hummingbot.org/) and share it in the **#governance** channel in [Discord](https://discord.hummingbot.io) to encourage ample discussion.

To be considered valid, a HIP should contain the following fields:

* **Title**: Title should start with `HGP`, followed by category and count, along with a concise description
* **Category code** See below
* **Description**: Detailed explanation of the proposed initiative
* **HBOT Allocation** (if required): Proposed allocation and justification

HGPs fall under one of the following categories:

### Dev Grant Budget (DG)

Defined for each [epoch](/governance/epochs) at inception, this is a pool of tokens that the community can authorize via [HIPs](#hip) for bounties to fund development work performed by community contributors that that benefit the Hummingbot ecosystem.

Starting in Epoch 2, anyone can submit a HIP to fund a bounty out of this budget; a pre-existing HGP authorizing a specific allocation is no longer required.

### Liquidity Distributions (LD)

Since Hummingbot is a decentralized community of liquidity providers that aims to democratize market making, HBOT tokens should be distributed to people who use the Hummingbot software to provide liquidity.

Liquidity Distribution proposals should distribute tokens to users who 1) generate verified trading activity or liquidity via Hummingbot exchange connectors or on platforms like [Miner](https://miner.hummingbot.io) where the preponderance of users use Hummingbot.

All proposals in this category should contain detailed information about the platform and its trading metrics, along with an explanation for how the proposal will maximize HBOT distribution to Hummingbot users.

### Community Work (CW)

Initiatives that compensate community members for performing needed functions needed to maintain an open source software project and support its user base, such as:

* Finding bugs and creating Github issues for them
* Reviewing Github pull requests and bug fixes
* Providing technical support to users on Discord
* Writing documentation, guides, and other content that explain how to use Hummingbot

For approved Community Work Initiative with roles to be filled by community members, the first post-approval step will be an announcement thread in the [forum](https://forum.hummingbot.org/), where community members can present their qualifications and apply for the roles.

All proposals in this category should contain clear goals, define expected impact on the Hummingbot community, and outline the metrics that the community should use to gauge whether the initiative is successful.

### Governance Changes (GC)

This category covers all changes related to the Hummingbot Foundation governance process permissible for HBOT token holders to to adjust under Foundation bylaws.

All proposals in this category should contain an explicit description of what to change in the governance process, along with a clear explanation for why the change is needed.
