# Pull Request Proposals (PRP)

## Summary

HBOT token holders have the right to vote and approve pull requests, or proposed code changes to the official Hummingbot code repository, via **Pull Request Proposals (PRP)**. 

All pull requests will only be merged into `development` and included in a subsequent release if there is an approved PRP on the Hummingbot Snapshot space related to it.

## Proposal Voting Requirements

| Proposal Type                | Pull Request              |
| ---------------------------- | ----------------------  - |
| Min HBOT Balance to create   | 1                         |
| Quorum Percentage            | 0.1% of HBOT total supply |
| Approval Threshold           | >50% of tokens approved   |
| Vote Duration                | 7 days                    |

## PRP lifecycle

### 1. Pull request is created

Anyone can submit a new [pull request](https://github.com/hummingbot/hummingbot/pulls) in the Hummingbot repository targeting the `development` branch.

Specifically, the pull request must:  

* Target the `development` branch with no merge conflicts;
* Contain a clear description of what what **Pull Request** does and why it is needed;
* Enable **Allow edits by maintainers**;
* Contain unit tests and and they all pass (connectors only);

For more information, see [Contribution Guidelines](/developers/contributions/#5-create-a-pull-request).

### 2. Proposal is created

With the pull request created and the minimum requirements listed above are met, the next step is to create a proposal on the following Snapshot space: https://snapshot.org/#/hbot-prp.eth. **This space is dedicated for Pull Request Proposals (PRP).**

The PRP should contain the following information:

* **Title**: Pull request number and title
* **Description**: Description summary and a link to the pull request in Github

!!! note
    In the near future, any ETH address with at least 1 HBOT can create a Pull Request Proposal related to a Pull Request. In order to test and improve the process of voting and merging the approved PRP, only Hummingbot Foundation members will be able to create new PRPs until the Hummingbot 1.0 release, scheduled for late January.

If the pull request or PRP do not meet the requirements described above, the PRP may be deleted by Foundation staff.

Here is an example of a PRP in Snapshot:

![](/assets/img/example prp.png)
*PRP on example*

### 3. Pending review

The Voting Period for PRPs is currently **7 days**, divided between Pending (4 days) and Active (3 days).

The initial **Pending** period gives the entire Hummingbot community time to discuss the pull request, review the code submitted, and decide whether the Foundation should undertake the time and effort to review and merge in the proposed changes

* Proposal submitter may promote discussion of the pull request on Discord **#governance-chat** channels and the [Governance Forum](https://commonwealth.im/hummingbot-foundation/)
* The developer that created the pull request will be able to change his pull request as needed
* Code changes during this period must not change the original intent of the pull request

!!! note "Discuss code on Github"
    All discussions related to the code changes should happen on the Github page associated with pull request

### 4. Active voting

After the Pending period has finished, the PRP becomes Active and enables voting for 3 days:

* No code changes should be made to the pull request during this period.  **A proposal may be considered invalid by the Foundation if changes occur**.
* If the Quorum Percentage (currently 100,000 tokens) have voted (either directly or via delegation) and the Approval Threshold based on participating votes (currently 50%) is exceeded, the Foundation labels the Github pull request as “approved”;

!!! warning "Proposal nullification"
    The Foundation can nullify the proposal if it detects major issues on the pull request. Some examples of what could cause a proposal to be nullified are:

    * Security issues are detected on the pull request (i.e. exposition of private keys) by the Foundation or any member of the community;

    * Changes are committed to the pull request that changes the original intent;

    * Pull request proposed makes the rest of the code unusable or unstable;

    * Any other major issue with the code.

### 5. Code merged or rejected

If the PRP is approved, the Foundation will attempt to merge the related pull request into the `development` branch. During the merge process, the Foundation QA team will test the submitted pull request to ensure that it works properly. If issues are found by the Foundation QA team, the developer will be contacted to fix the problems found before completing the merge.

The Foundation reserves the right to revert an approved pull request if major issues are found during the merge process. In that case, Foundation will publish a public retrospective explaining the reason for this decision.

If the PRP fails to meet the approval thresholds at the end of the Voting Period, it will be rejected. Afterwards, the Foundation will close the related pull request in the Hummingbot repository. However, the developer is free to create a new pull request and a new proposal at a subsequent date.

## Development & Release Cycle

<!-- @todo Create a new page about the release process and keep here only info about the PRP voting and approval. -->

After a PRP is approved the Pull Request linked to it will go through the following development cycle, coordinated by the Hummingbot Foundation team:

### Branches

![](/assets/img/pull request proposal workflow.png)
*PRP code merge workflow*

The Hummingbot code repository has three main branches related to the development cycle of each monthly release:

#### `development`

All pull requests aiming to be included on the `master` branch must be targeted to the development branch. They are then promoted from `development` to `staging` before passing to `master`. Pull requests targeting the `development` branch will only be merged into `staging` only when there is an approved PRP related to it. 

#### `staging`

`staging` is used by the Foundation QA team to conduct a thorough test all code changes before adding them to the `master` branch.

#### `master`

`master` is the main release branch and contains the latest stable version of the Hummingbot software client and is released once per month.

### Release cadence

Hummingbot ships a new release approximately every month. Each release is built, tested and released over a two-month cycle that overlaps with the next release.

![](/assets/img/pull request proposal period.png)
*Release schedule*

#### Month 1: Review and approve

During the first month, PRPs approved during this period will be scheduled to be added to the next release. Only PRPs approved before the cutoff date will be added.

#### Month 2: Test and release

During the second month, The Foundation team will merge all remaining PRPs that are approved but not yet merged, merge the `development` branch into the `staging` branch, and run all tests needed. 

A new release can happen anytime during Month 2. There is no fixed date for, and it will heppen as when all approved pull request are merge and the Foundation QA team signs off the new release.
