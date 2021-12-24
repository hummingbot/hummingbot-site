---
hide:
- toc
---

The purpose of the Hummingbot Foundation is to empower the HBOT token holders to govern many aspects of Hummingbot, such as:

* Approving all pull requests to the Hummingbot codebase
* Proposing improvements and architectural changes to the Hummingbot codebase
* Modifying parameters of the HBOT governance system
* Electing the foundation's Board of Directors
* Allocating grants and other expenditures of the community treasury

For more information, see the [Hummingbot Foundation Governance whitepaper](/whitepaper).

## Proposals

HBOT holders can vote on three types of proposals:

* **Pull Request Proposal (PRP)**: a proposal linked to an open pull request in the Hummingbot code repository
* **Improvement Proposal (IP)**: a proposal linked to an issue in the Hummingbot Github repository that specifies a proposed improvement to a component of the Hummingbot codebase
* **Governance Proposal (GP)**: a proposal linked to an issue in the Hummingbot Github repository that specifies either a proposed modification to the Foundation governance system, or a proposed distribution of HBOT tokens from the treasury for a community activity such as a grant. 

Each proposal type has different governance parameters:

| Proposal Type           | Pull Request            | Improvement             | Governance              |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| Minimum HBOT Balance    | 1                       | 10,000                  | 50,000                  |
| Quorum Percentage       | 1% of HBOT total supply | 3% of HBOT total supply | 10% of HBOT total supply |
| Approval Threshold      | >50% of tokens voted    | >50% of tokens voted    | >50% of tokens voted    |
| Vote Duration           | 7 days                  | 14 days                 | 14 days                 |

## How to Participate

All proposals can be found on the Hummingbot Foundation Snapshot: https://snapshot.org/#/hbot.eth. 

Voting is expected to commence in mid-to-late January 2022 with the Hummingbot 1.0 release. 

## Pull Request Proposal (PRP)

## What is a Pull Request Proposal (PRP)?
HBOT token holders have the right to vote on which Pull Requests should be added to the main Hummingbot Client Release. The first step is the Pull Request Proposal. Anyone can create a Pull Request Proposal related to a Pull Request. There is no need to hold HBOT tokens to create a PR o PRP. The votation in snapshop will then determine what PRPs are approved by majority and subject to review by Foundation for determination of integrity, quality and security issues before merging to master branch.  
All Pull Requests targeting the development branch will be merged into the main code-base only if there is an approved Pull Request Proposal on the Hummingbot Snapshot page related to it.

## Hummingbot Development Cycle
The Hummingbot Client Repository has three main branches related to the development cycle of each new version:

## 1.	Development branch
All Pull Requests aiming to be included on the master branch must be targeted to the development branch. They are then promoted from development to the staging branch before passing to master
Pull Requests targeted to the development branch will only be considered to merge into staging only when there is an approved Pull Request Proposal related to it. 

## 2.	Staging branch

Staging branch is used by the Foundation team to test all code changes before adding them to the master branch. The development branch is the prior step to staging branch.


## 3.	 Master branch
Master is the main release branch and contains the latest stable version of the Hummingbot Client. The staging branch is the step prior to master for Foundation QA review

 
## Pull Requests Proposals Approval and Implementation Cycle
 
 There is a workflow of approvals for the Pull Request ProcessÑ

 ![](/assets/img/pull request proposal workflow.png)

In any given month, each Hummingbot Foundation Proposal Release will have a two Months cycle:

![](/assets/img/pull request proposal period.png)

Month 1
During the first month of the development cycle, Pull Request Proposals approved during this period will be scheduled to be added to the next month's release.
Only Pull Request Proposals approved before the cut-off date will be added to the following release.

Month 2
During the second month of the development cycle, The Foundation team will merge all the remaining approved Pull Request Proposals, and move the development branch to the staging branch, and run all tests needed.
A new release can happen on any day of the second month, as soon as all approved Pull Requests are merged, and the Foundation QA team signs off the release.

## How to have your Pull Request added to the Hummingbot code base 

## 1. Create the Pull Request
For a Pull Request to be considered "open for voting", all the requirements below must be fulfilled:
a.	Is targeted to the development branch;
b.	Contains a clear description of what is the objective of the Pull Request;
c.	Passes all the existing Unit Tests;
d.	No merging conflicts exists;

When all the requirements above are met, a Pull Request Proposal can be created, allowing the community to vote if the Pull Request will be merged into the development branch. If the Pull Request or the Proposal does not meet the requirements described above, it will be deleted by the Foundation Team

## 2. Create the Code Merge Proposal
With the PR created, and the minimum requirements met, a Code Merge Proposal will be created on the Snapshot Page  https://snapshot.org/#/hbot.eth.

!!! note
    Anyone can create a Pull Request Proposal related to a Pull Request.


The proposal must contain the following information:
Title: It must contain the PR number and the PR title
Description: It must contain a description of what the PR Code does, with a link to the Github page.



Example:

![](/assets/img/example prp.png)

Once created, the proposal will be "Pending" for 4 days, as a Review Period: 
o	This period can be used by the community to review the code submitted.
o	The developer that created the PR will be able to change his Pull Request as needed.
o	All discussions related to the Proposal must happen on the PR Github page.
o	Code changes during this period must not change the original intent of the Proposal.


## 3. Voting period for Code Merge Proposal

After the Review Period, the vote will automatically start, for a 3 days period. This is the Voting Period:
o	No changes must be made to the PR during the voting period. The voting will be considered invalid by the Foundation if changes on the commit happen during the voting period.

•	The Foundation can, at any point, nullify or reject the proposal if it detects major issues on the Pull Request. Some examples of what could cause a proposal to be nullified are: 
o	Security issues are detected on the Pull Request (i.e. exposition of private keys) by the Foundation or any member of the community.
o	Changes are committed to the Pull Request that changes the original intent.
o	The Pull Request proposed makes the rest of the code unusable or unstable.

## 4. Voting Results
The minimum quorum for a Pull Request Proposal is 1% of the total HBOT tokens in circulation.
To be approved, a Pull Request Proposal must have more than 50% of the total votes cast on the For option.

## Rejection
If a proposal fails to meet the approval thresholds at the end of the 7 days voting period, (4 days for review, 3 days for voting) it will be rejected.
Once rejected, the respective PR will also be closed on the Hummingbot Repository.
The developer who created the PR is free to create a new PR and a new proposal.

## Approval
If the proposal is approved(> 50% For), The Foundation will schedule the merge of the related Pull Request into the development branch.
During the merging process, the Foundation QA team will test the submitted Pull Request to ensure that it works properly.
If issues are found by the Foundation QA team, the developer will be contacted to fix the problems found before completing the merge.
The Foundation still reserves the right to revert an approved Pull Request if major issues are found during the merging process. In that case, a report will be published by the foundation explaining the reason for this decision.

## Revision
Some examples of problems that could cause a Pull Request to be reverted are:
•	Security issues are detected on the Pull Request (i.e. exposition of private keys) by the Foundation or any member of the community.
•	Changes are committed to the Pull Request that changes the original intent.
•	The Pull Request proposed makes the rest of the code unusable or unstable.
•	Any other major issue with the code submitted.

