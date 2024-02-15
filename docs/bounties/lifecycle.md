## Bounty Lifecycle

### 1. Create Github Issue

Since all bounties reference as a Github issue, users should create [a new Github issue](https://github.com/hummingbot/hummingbot/issues/new/choose)

### 2. Submit New Bounty Form

A prospective sponsor submits the [New Bounty Form](https://forms.gle/sZr86AzP26JyL2fZA) with a link to Github issue, bounty type, and budget.

As another option, you can also create a new post in the Hummingbot Discord **#bounties** channel and provide the same information as in the New Bounty Form.

### 3. Scope Bounty

We work with the sponsor to define bounty scope, acceptance criteria and amount needed. See [Bounty Prices](prices.md) for more information.

### 4. Fund Bounty

The source of funding may be:

* HBOT allocations in the **Connector Pots** tab of [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit#gid=2065823371)
* Approved [Hummingbot Improvement Proposals]((https://hummingbot.org/governance/proposals/#hummingbot-improvement-proposals))
* External sponsor funding

The external sponsor sends the bounty amount to Foundation wallet, and we custody and pay the contributor after the pull request that fulfills the bounty has been merged to the `development` branch.

### 5. Post on Board

We post the Bounty on [Bounties Board](https://github.com/orgs/hummingbot/projects/7), where any contributor can apply for assignment.

### 6. Assign Contributor

After a bounty has been posted, anyone can apply to be assigned to the task by commenting on it with their Github handle. Once one or more qualified contributors have applied to work on a specific issue, we will evaluate the applicants based on their past experience with Hummingbot, as well as other relevant factors, and assign your bounty to a suitable contributor.

See [Assignation Process](#assignation-process) below for more information.

### 7. Monitor Contributor

We stay in constant contact with the contributor via comments in the bounty Github issue. Afterwards, the contributor is expected to deliver a pull request (PR) that fulfills the bounty. Note that we may re-assign the bounty if the assigned contributor is unresponsive or inactive for 7+ days, or if the submitted PR doesn’t address the acceptance criteria.

See [Assignation Process](#assignation-process) below for more information on how bounties may be re-assigned.

### 8. Review Pull Request

After the contributor has submitted the pull request (PR) addressing the issue, we review it for engineering security and adherence to code standards. We will conduct an engineering code review to ensure that the proposed changes can be safely and seamlessly integrated into the existing codebase without causing any conflicts or compromising system integrity.

For connectors, our engineering team uses following checklists in conducting reviews:

* [Spot Connector Developer Checklist](/developers/connectors/spot-connector-checklist/)
* [Perp Connector Developer Checklist](/developers/connectors/perp-connector-checklist/)

### 9. Test Pull Request

We will also run a quality assurance (QA) process on the submission to evaluate whether it fixes the issue and/or meets the acceptance criteria. We test the pull request to assess functionality, fulfillment of acceptance criteria, and UX impact. 

For connectors, our QA team uses following checklists in conducting reviews:

* [Spot Connector QA Checklist](/developers/connectors/connectors/test/)
* [Perp Connector QA Checklist](/developers/connectors/connectors/test-perp/)

### 10. Merge Pull Request

If the pull request passes muster, we merge the pull request into the `development` branch of Hummingbot. This ensures that the proposed solution has met the required standards and has been thoroughly reviewed. 

### 11. Release

We conduct a thorough overall check using the `staging` branch to prevent breaking changes. Afterwards, the code is merged to `master` and included in each monthly release. 

See [Release Process](../governance/releases.md) for more information.

### 12. Pay Contributor

After the bounty fix has been verified and published, we schedule the bounty for payment (net of our [Handling Fee](prices.md/#bounty-handling-fee)), and the Foundation will include the bounty payment in its monthly bounty payout process. 

Afterwards, we will mark the bounty as Paid in both [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1) and [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing).


## Assignation Process

Here is more information how the Foundation assigns and monitors bounty contributors. Each stage is a column in [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1).

### Potential

`POTENTIAL` bounties are Github issues that **not funded yet**.

The Foundation or community members may suggest issues for the [board](https://github.com/orgs/hummingbot/projects/7/views/1), either in Github or Discord.

Once there is funding for the bounty (either **Connector Pots** tab of [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit#gid=2065823371), [HIP](https://hummingbot.org/governance/proposals/#hummingbot-improvement-proposals), or community funding), the Foundation will mark the bounty as OPEN.

### Open

1. Any bounty in the `OPEN` column is not assigned. Contributors can leave a comment on Github ticket issue, such as “I want to be assigned for this bounty. Here is my experience...”
2. The Foundation team assign qualified contributor based on prior Hummingbot and/or development experience.
3. We will added: “[Contributor] has been assigned to this bounty” and change the bounty status from `OPEN` to `ASSIGNED`

### Assigned

Since the contributor is assigned to this bounty exclusively, they should continually inform on the progress over the next few days. 

They are expected to promptly submit a pull request (PR) that resolve the bounty issue. Developers should review and follow contribution guidelines when submitting their pull request (https://hummingbot.org/developers/contributions/)

Throughout the process, it's important to maintain regular communication with the Hummingbot Foundation team. We strongly encourage contributors to update the Github ticket with your progress, discussing any potential changes or roadblocks.

### Re-assignation / Wont Fix

Assigned contributors may get busy or realize they are incapable of solving the bounty. If the contributor lets us know or is unresponsive or inactive for 7+ days, the Foundation may unassign the contributor and open the bounty for others.

In rare cases, the bounty contributor may discover that the issue is unresolvable. In these cases, the Foundation will append a `wont-fix` label to the issue and work with the sponsor and contributor to resolve the issue fairly. Potential causes for `wont-fix` issues are:

  - Issue is out of Hummingbot scope
  - Issue is caused by exchange API limitation (rate limits etc.)
  - Issue is expected behavior