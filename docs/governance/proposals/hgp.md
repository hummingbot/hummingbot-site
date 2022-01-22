## Summary

Hummingbot Governance Proposals (HGP) allows HBOT token holders to propose and vote on aspects related to the Hummingbot Foundation organization, processes, and treasury allocation. 

## Voting requirements

Since this type of proposal has the biggest impact on Foundation and may allocates a significant portion of the HBOT treasury,  it has the highest requirements for approval.

| Proposal Type                | Hummingbot Governance Proposal |
| ---------------------------- | ------------------------- |
| Snapshot                     | https://snapshot.org/#/hbot.eth |
| Min HBOT Balance to create   | 10,000                    |
| Quorum Percentage            | 3% of HBOT total supply   |
| Approval Threshold           | >50% of tokens approved   |
| Vote Duration                | 14 days                   |

## Before creating a HGP

It is a good practice to discuss proposals with the community before opening it for voting. Proponents should create a thread in [Commonwealth](https://commonwealth.im/hummingbot-foundation) and share it in the **#governance-chat** channel in [Discord](https://discord.hummingbot.io) to encourage ample discussion.

## Format

To be considered valid, a HGP must contain the following information:

- **Summary**: A succint summary of the proposal
- **Category**: See the Categories section below
- **Details**: Detailed explanation, including how it will be executed and how progress will be tracked
- **Milestones**: Key milestones that may be used to track the progress toward implementation
- **Related Discussions** (optional): Links to discussion topics that were created on the Hummingbot Governance Forum related to the proposal, if any
- **Treasury Allocation**: If the proposal includes the use of the Hummingbot Foundation treasury, it must contain a **Budget** (number of HBOT tokens requested) and **Distribution** (how the budget will be used, distribution timeframe, and the conditions for distribution)

Note that HGPs only have *For*, *Against*, and *Abstain* voting options, so proposal creators should write proposals that enable them to be voted on in this manner.

## Categories

Proposals related to the topics below need to be approved via a HGP before they can be executed by the Hummingbot Foundation team. Proposals that do not fit in any of these categories should be created through a [Hummingbot Improvement Proposal (HIP)](/hip) and will be deleted by the Hummingbot Foundation team if they are created as a HGP.

### Governance Changes

This category covers all changes related to the Hummingbot Foundation voting process, as exists on [https://hummingbot.org/governance/](https://hummingbot.org/governance/) and it’s sub-sections.

All proposals in this category should contain an explicit description of what to change in the governance process, along with a clear explanation for why the change is needed.

### Liquidity Distributions

Since Hummingbot is a decentralized community of liquidity providers that aims to democratize market making, HBOT tokens should be distributed to people who use the Hummingbot software to provide liquidity.

In order to maximize the probability that HBOT tokens are distributed to people using Hummingbot, Liquidity Distribution proposals should distribute tokens to users who:

- Generate verified trading activity via Hummingbot exchange connectors;
- Provide liquidity to HBOT trading pairs, and/or; 
- Participate on decentralized market making platforms like [Miner](https://miner.hummingbot.io) where the preponderance of users use Hummingbot.

All proposals in this category should contain detailed information about the platform and its trading metrics, along with an explanation for how the proposal will maximize HBOT distribution to Hummingbot users.

### Dev Grant Budgets

Dev Grant Budgets enable HBOT token holders to set aside HBOT token to fund development work performed by community contributors that that benefit the Hummingbot ecosystem. All such work should be committed to the [Hummingbot Github code repository](https://github.com/hummingbot/hummingbot) or other repositories in the [Hummingbot Foundation Github organization](https://github.com/hummingbot).

Each Dev Grant Budget should define the total number of HBOT reserved, distribution timeframe, and the specific type of code contribution that can seek a share of the budget.

After approval, a Dev Grant Budget will be distributed in the following manner:

1. A Developer looking to receive a share of the Dev Grant Budget should create a [Hummingbot Improvement Proposal (HIP)](/hip) that describes the scope of the intended work and share of budget sought.
2. After the HIP is approved, the developer should create a [Pull Request Proposal (PRP)](/prp) referencing a Github pull containing the work.
3. After the PRP is approved, which means the work will be merged into the codebase, the requested HBOT share of Dev Grant Budget is paid to the developer.

 If the PRP is rejected, the developer can resubmit the proposal at any moment, so long as the Dev Grant Budget is still available and active.

 ![](/assets/img/prp-process.png)

### Community Initiatives

This category covers use of the Foundation treasury for initiatives that improve the Hummingbot ecosystem and positively impact the community, such as:

- Community review incentives
- Hackathons
- Content creation contests
- Team projects

For approved Community Initiative with roles to be filled by community members, the first 
post-approval step will be an announcement thread in Commonwealth, where community members can present their qualifications and apply for the roles.

All proposals in this category should contain clear goals, define expected impact on the Hummingbot community, and outline the metrics that the community should use to gauge whether the initiative is successful.
