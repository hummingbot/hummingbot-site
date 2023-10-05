Bounties are rewards (denominated in HBOT or other tokens) given out to community member for work that improves Hummingbot. They offer a platform for **Sponsors** seeking development work on exchange connectors, trading strategies, bug fixes, and related content/guides to connect with **Contributors**, experienced Hummingbot developers and traders capable of creating these solutions or content.

Bounties may be either **Open Source** (merged into the official Hummingbot codebase) or **Closed Source** (delivered as a private fork to the Sponsor for their own exclusive use).

Hummingbot Foundation oversees the entire Bounties process, from working with Sponsors to scope the bounty, finding and assigning the bounty to a qualified developer, performing engineering/QA review, and paying the developer. Since Bounties sprung out of an internal program that has rewarded 100+ unique contributors, the Foundation itself will continue to be an active Sponsor of bounties.

See below for step-by-step guides for Contributors and Sponsors:

* [Contributors](./contributors.md)
* [Sponsors](./sponsors.md)

## Bounties Board

![bounty](./bounty-board.png)

[Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1), a Kanban-style public Github project, is the source of truth for the status of all Hummingbot bounties, including both Foundation and community-created bounties.

The columns in the board include:

- **Potential**: Potential bounties that may be sponsored
- **Open**: Open bounties that contributors can apply to work on
- **Assigned**: Issue has been assigned to a contributor, who is expected to submit a pull request resolving it
- **Submitted**: A pull request resolving the issue has been submitted by the assigned contributor
- **Merged**: Pull request has been merged to the `development` branch (or published publicly in the case of content)
- **Paid**: Contributor has been paid and the bounty is considered done

In addition, see the **Bounties** tab in the [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) Google Sheet for a record of past bounty distributions.

## Bounty Types

Bounties can be classified into one of the following types:

* 🐞 **Bug Fix**: Fix to a bug in the Hummingbot codebase
* 🚀 **Enhancement**: Update or improvement to a component in the Hummingbot codebase
* 📺 **Content**: Documentation, videos, guides, and other content that explains how to use an aspect of Hummingbot
* 🔬 **Research**: Investigation into possible work and recommendation on how to proceed
* 🏦 **New Connector**: A new [connector](/exchanges/) in the Hummingbot or the Hummingbot Gateway codebases
* 📈 **New Strategy/Script**: A new Hummingbot [strategy](/strategies/) or [script](/scripts/)

In addition, bounties may be:

* **Open Source**: merged into the official Hummingbot codebase, or 
* **Closed Source**: delivered as a private fork to the Sponsor

## Governance for New Connectors

[Connectors](/exchanges/) require maintenance, testing and documentation, so adding new ones to the codebase imposes a cost by everyone who uses Hummingbot. Therefore, new connectors that are merged into the `master` branch and included into official monthly releases require community voting.

In addition to building the connector, sponsors should note that connectors need to be proposed and voted on via a [New Connector Proposal](/governance/proposals) and voted each quarter in [Polls](/governance/polls). All voting takes place using HBOT tokens on [Snapshot](https://snapshot.org/#/hbot.eth).



## Bounty Lifecycle

1. **Submit Form**: A prospective sponsor submits the [New Bounty form](https://forms.gle/sZr86AzP26JyL2fZA) with a link to Github issue, bounty type, and budget.

2. **Scope Bounty**: We work with the sponsor to define bounty scope, acceptance criteria and amount needed.

3. **Fund Bounty**: Sponsor sends the bounty amount to Foundation wallet. We custody and pay out only after code delivery.

4. **Post on Board**: We post the Bounty on [Bounties Board](https://github.com/orgs/hummingbot/projects/7), where any developer can apply for assignment.

5. **Assign Dev**: After a bounty has been posted, anyone can apply to be assigned to the task by commenting on it with their Github handle.  Once one or more qualified contributors have applied to work on a specific issue, we will evaluate the applicants based on their past experience with Hummingbot, as well as other relevant factors, and assign your bounty to a suitable contributor.

6. **Monitor Dev**: We stay in constant contact with the developer via the bounty Github issue. Afterwards, The contributor is expected to deliver a pull request (PR) that fulfills the bounty. Note that we may re-assign the bounty if the assigned contributor is unresponsive or inactive for 7+ days, or if the submitted PR doesn’t address the acceptance criteria.

7. **Review PR**: After the contributor has submitted the pull request (PR) addressing the issue, we review it for engineering security and adherence to code standards. We will conduct an engineering code review to ensure that the proposed changes can be safely and seamlessly integrated into the existing codebase without causing any conflicts or compromising system integrity.

8. **Test PR**: We will also run a quality assurance process on the submission to evaluate whether it fixes the issue and/or meets the acceptance criteria. We test the pull request to assess functionality, fulfillment of acceptance criteria, and UX impact. 

9. **Merge PR**: If the pull request passes muster, we merge the pull request into the `development` branch of Hummingbot.This ensures that the proposed solution has met the required standards and has been thoroughly reviewed. 

10. **Release**: We conduct a thorough overall check to prevent breaking changes before each monthly release.

11. **Pay Dev**: We process payment to the contributor, while retaining our Handing Fee, only after code has been verified and published. The Foundation will include the bounty payment in its monthly bounty payout process. Afterwards, we will mark the bounty as Paid in both [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1) and [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing).
