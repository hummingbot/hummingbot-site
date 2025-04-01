## Bounty Lifecycle

### 1. Sponsor Creates Github Issue

Since all bounties reference as a Github issue, users should create [a new Github issue](https://github.com/hummingbot/hummingbot/issues/new/choose) and choose the **Bounty Request** template. The issue should contain the following information:

* Issue Type
* Bounty Type
* Open Source or Private
* Desired completion time
* Acceptance criteria
* Steps to reproduce (for bugs)
* Bounty amount with denomination

### 2. Sponsor Refines Bounty

Staff from the Hummingbot Foundation will review the bounty submission and provide feedback on the Github issue. To gather broader input, we encourage you toe engage with community members on Discord to refine the bounty scope and requirements. This collaborative approach helps ensure the bounty aligns with community needs and expectations.

### 3. Preliminary Check

To ensure the bounty is feasible, the Foundation performs a preliminary check of the exchange API documentation to ensure the exchange is compatible with Hummingbot's connector standards and has the necessary WebSocket/REST API endpoints to be integrated into Hummingbot.

### 4. Sponsor Funds Bounty

The external sponsor sends the bounty amount to Foundation wallet, and we custody and pay the contributor after the pull request that fulfills the bounty has been merged to the `development` branch.

See [Bounty Wallets](external.md/#bounty-wallets) the official Foundation addresses for bounties.

### 5. Foundation Assigns Developer

We will post the Bounty on [Bounties Board](https://github.com/orgs/hummingbot/projects/7). Afterwards, anyone can apply to be assigned to the task by commenting on it with their Github handle. Once one or more qualified contributors have applied to work on a specific issue, we will evaluate the applicants based on their past experience with Hummingbot, as well as other relevant factors, and assign your bounty to a suitable contributor.

### 6. Developer Begins Work

The developer begins work on the bounty and is expected to submit a pull request (PR) that addresses the issue.

### 7. Foundation Monitors Progress

We stay in constant contact with the contributor via comments in the bounty Github issue. Afterwards, the contributor is expected to deliver a pull request (PR) that fulfills the bounty. Note that we may re-assign the bounty if the assigned contributor is unresponsive or inactive for 7+ days, or if the submitted PR doesn't address the acceptance criteria.

### 8. Foundation Reviews PR

After the contributor has submitted the pull request (PR) addressing the issue, we review it for engineering security and adherence to code standards. We will conduct an engineering code review to ensure that the proposed changes can be safely and seamlessly integrated into the existing codebase without causing any conflicts or compromising system integrity.

For connectors, our engineering team uses following checklists in conducting reviews:

* [Spot Connector Developer Checklist](../developers/connectors/spot-connector-checklist.md)
* [Perp Connector Developer Checklist](../developers/connectors/perp-connector-checklist.md)

### 9. Foundation Tests PR

We will also run a quality assurance (QA) process on the submission to evaluate whether it fixes the issue and/or meets the acceptance criteria. We test the pull request to assess functionality, fulfillment of acceptance criteria, and UX impact. 

For connectors, our QA team uses following checklists in conducting reviews:

* [Spot Connector QA Checklist](../developers/connectors/test.md)
* [Perp Connector QA Checklist](../developers/connectors/test-perp.md)

### 10. Foundation Merges PR

If the pull request passes muster, we merge the pull request into the `development` branch of Hummingbot. This ensures that the proposed solution has met the required standards and has been thoroughly reviewed.

Afterwards, the code is merged to `master` and included in each monthly release. See [Release Process](../governance/releases.md) for more information.

### 12. Foundation Pays Developer

Developers are paid only after their code has been merged into the `development` branch or Hummingbot fork (in the case of private bounties). For external bounties, developers are paid in the currency that was escrowed by the sponsor, which may be their native token, stablecoins, and/or HBOT. For Foundation bounties, developers are paid in HBOT tokens, with the USD amount converted based on the past 30-day average trading price.

The Foundation will include the bounty payment in its monthly bounty payout process and mark the bounty as **Paid** in both [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1) and [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing).

