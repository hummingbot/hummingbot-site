## Summary

Hummingbot Improvement Proposals (HIP) allow HBOT token holders to propose fixes to the Hummingbot codebase, request HBOT dev grants associated with an approved Dev Grant Budget, and elect community members. Generally, HIPs should be used for proposals that are not covered by [HGPs](../hgp) or [PRPs](../prp).

## Voting requirements

| Proposal Type                | Hummingbot Improvement Proposal |
| ---------------------------- | ------------------------- |
| Snapshot                     | https://snapshot.org/#/hbot-ip.eth |
| Min HBOT Balance to create   | 10,000                    |
| Quorum Percentage            | 1% of HBOT total supply   |
| Approval Threshold           | >50% of tokens approved   |
| Vote Duration                | 14 days                   |

## Before creating a HIP

!!! note "Improvement Proposals vs Governance Proposals"
    Improvement Proposals (HIP) are intended for smaller, specific chunks of work that a single developer can perform. Unlike governance proposals (HGP), developers can request HBOT in an HIP for specific work that they individually perform, as long as it is linked to an approved Dev Grant Budget.

It is a good practice to discuss proposals with the community before opening it for voting. Proponents should create a thread in [Commonwealth](https://commonwealth.im/hummingbot-foundation) and share it in the **#governance-chat** channel in [Discord](https://discord.hummingbot.io) to encourage ample discussion.

Projects that require **more than one month** of estimated development work should be submitted as HGPs, then which can then be broken up into individual smaller tasks that enable participation by multiple community developers.

## Format

To be considered valid, a HIP must contain the following fields:

- **Title**: Title should start with `HIP` followed by its count along with the Category code
- **Category**: Category name
- **Summary**: A succinct summary of the proposal
- **Linked HGP:**  Associated Dev Grant Budget or Community Initiative HGP, if any
- **Description**: Detailed explanation of the improvement requested or work proposed

The Hummingbot Foundation reserves the right to remove or nullify HIPs that do not have sufficient information.

## Categories

While HIPs are not restricted to certain categories, we expect that most will fall under the ones below:

### Fix Requests (FR)

Use this category for proposed bug fixes and enhancements to the Hummingbot codebase. We recommend first creating a detailed [Github Issue](https://github.com/hummingbot/hummingbot/issues) and referencing specific code changes when possible.

After an Fix Request HIP has been approved, the Foundation will either assign the work to the Maintainer of the affected Hummingbot component or another available Maintainer, if the component has no assigned Maintainer. In the future, the Foundation plans to create Bounties that enable community developers to earn HBOT tokens by working on approved Fix Requests.

Improvement Request HIPs should only have *For*, *Against*, and *Abstain* voting options.

### Dev Grant Requests (DG)

As described in [HGP: Dev Grant Budgets](/governance/proposals/hgp/#dev-grant-budget-dg), developers can request Dev Grants for proposed contributions that fits specific Dev Grant Budgets that the Hummingbot community has allocated via HGPs. 

Proposals of this type should include the following additional fields:

- **Github Handle**: Developer's Github handle that will issue the pull request
- **Ethereum Wallet**: Address to receive the HBOT grant after the submitted **PRP** is approved
- **Total HBOT Requested**: Amount of Dev Grant budget the developer requested (see HBOT Guidelines below)
- **Estimated Dev Days**: Estimated number of days of work required
- **HBOT Per Day**: Total HBOT Requested / Estimated Dev Days

These HIPs should only have *For*, *Against*, and *Abstain* voting options.

For guidance in setting how much HBOT to request, please see [Epoch 1: HBOT Guidance](/governance/epochs/#hbot-guidance).

### Initiative Elections (IE)

Any Initiative Budget approved through a HGP that requires community members to be assigned for specific roles should be elected via this category of HIP.

Proposals of this type should include the following additional fields:

- **Title**: Title should contain **ELECTION** and a reference to the linked HGP
- **Role**: Description of role that to be voted on
- **Election Type**: Number of roles and election procedure
- **Registration Link**: Link to open forum thread where the candidates can submit applications

The voting options should contain the candidates (either individuals or teams) participating in the election.
