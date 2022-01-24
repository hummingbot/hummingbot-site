## Summary

**Improvement Proposals (IP)** encompass all types of proposals that are not covered by **Governance Proposals (GP)** or **Pull Request Proposals (PRP).**

These proposals are a tool for the Hummingbot Community to suggest improvements for the Hummingbot ecosystem.

## Voting requirements

Since this type of proposal has the biggest impact on Foundation and may allocates a significant portion of the HBOT treasury,  it has the highest requirements for approval.

| Proposal Type                | Hummingbot Governance Proposal |
| ---------------------------- | ------------------------- |
| Snapshot                     | https://snapshot.org/#/hbot.eth |
| Min HBOT Balance to create   | 10,000                    |
| Quorum Percentage            | 3% of HBOT total supply   |
| Approval Threshold           | >50% of tokens approved   |
| Vote Duration                | 14 days                   |

## Before creating a proposal

**Improvement Proposals (IP)** must have clear objectives and actions needed to be carried out by the Hummingbot Foundation and/or the Hummingbot Community.

The community should avoid create **IPs** that do not have a defined objective, and a clear idea of how that objective should be achieved.

- If the **objective and execution of a proposal isn’t clear yet**, we suggest starting a discussion thread on the [Hummingbot Commonwealth Forum]([https://commonwealth.im/hummingbot-foundation/](https://commonwealth.im/hummingbot-foundation/)) to discuss with the community how to implement your idea.
- If you are looking to **request an improvement on Hummingbot codebase**, we suggest creating a [Github Issue]([https://github.com/hummingbot/hummingbot/issues](https://github.com/hummingbot/hummingbot/issues)).

## Improvement Proposal Format

There is no specific format related to the creation of **IPs,** but each of them must contain at least the following sections, to allow the community have a clear idea what the proposal is about, and how its objective would be achieved.

- **Objective:** A summary of the final goal of the proposal
- **Actions:** A bullet-point list of what actions will be needed to achieve the proposal objetive
- **Description:** A more detailed description of the proposal, including the rationale of the proposal.

## Special Cases

Altough almost any kind of improvement (excluding those coverede by the other two types of proposal), some **Improvement Proposals (IP)** must follow some special rules for it’s creation, depeding on what process is attached to it.

### 1. Dev Grants requests

As established on the **Governace Proposals (GP)**, [Dev Grants](link) follows a 3 step process:

1. A **Governance Proposal (GP)** defines the topic and the budget allocated to the Grant
2. Community Developers creates an **Improvement Proposals (IP)** requesting a share of the that Grant
3. If the **IP** is approved by community vote, the developer proceeds to create a **Pull Request Proposal (PRP)** related to it. Once the **PRP** is approved, the developer will receive his grant.

**Improvement Proposals (IP)** requesting the participation on Dev Grants must be written using the specific structure below to be considered a valid request:

- **Title:** The proposal must contain **GRANT REQUEST** written on the beginning of the title.;
- **Dev Grant Proposal:**  A link to the approved **Governance Proposal (GP)** that allocates the budget;
- **Github handle:** The developer Github name, where the **PRP** will be created from;
- **Ethereum wallet:** The address the developer want to receive the requested grant after the respective **PRP** is approved;
- **Objective:** A summary of what will be built with the funds requested from the grant;
- **Amount Requested:** How much of the approved Dev Grant budget the developer wants to receive after delivering his Proposal.
- **Details:** All details related to the proposal. We suggest to add as much information as possible, from the design of the prosal to how the proposed solution will be implemented. Proposals with better details allows the rest of the community to understand the proposal objective and do a better judgment of it.

The Hummingbot Foundation reserves the right to invalidate **Improvement Proposals (IP**) ****that do not follow the rules established above.

Dev Grant Requests proposals must only have “For”, “Against” and “Abstains” voting options.

### HBOT guidelines

- Improvement Proposal - how much HBOT to ask for?
    - Smaller: 10-50k
        - Less than 1 week
        - Example: Bug fix
    - Larger: 50k-200k
        - 1-4 weeks
        - Example: Connector
    - Projects larger than 1 month should first be submitted as GPs, then broken up into individual smaller tasks submitted as IPs

### 2. Initiatives Elections

Any Initiative approved through a **Governance Proposal (GP)** that requires community members to be assigned for specific roles should go through an **Improvement Proposal (IP)** voting.

For this type of election, the following structure must be followed:

- **Title:** The proposal must contain **ELECTION** on it’s title, along with a reference to the **Governance Proposal (GP)** releated to it.
- **Role:** The description of what is the role that is being voted on;
- **Type of election:** The definition if the election is for voting on individuals or teams;
- **Registration post:** A link to the respective Hummingbot Foundation Forum post where the candidates registered to participate on the election;
- **Available positions:** The number of available positions that will be filled by the election.

The voting options must contain the candidates (Individuals or Teams) participating on the election.