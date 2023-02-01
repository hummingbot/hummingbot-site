HBOT holders can vote on three types of proposals:

* [**Pull Request Proposal (PRP)**](#pull-request-proposals): a proposal linked to an open pull request in the Hummingbot code repository. The community votes if the linked Pull Request should be added to the main codebase;
* [**Hummingbot Improvement Proposal (HIP)**](#hummingbot-improvement-proposals): a proposal that allocates HBOT tokens for a developer bounty to improve a component in the Hummingbot codebase.
* [**Hummingbot Governance Proposal (HGP)**](#hummingbot-governance-proposals): a proposal used to conduct regular polls or one that allocates HBOT tokens for non-developer purposes.

Each proposal type has different parameters:

| Proposal Type                | Pull Request              | Improvement             | Governance               |
| ---------------------------- | ------------------------- | ----------------------- | ------------------------ |
| Snapshot Space               | <https://snapshot.org/#/hbot-prp.eth> | <https://snapshot.org/#/hbot-ip.eth> | <https://snapshot.org/#/hbot.eth> |
| Vote Duration                | 7 days                    | 7 days                 | 7 days                    |
| Minimum HBOT Balance         | 1                         | 10,000                  | 50,000                   |
| Quorum Percentage            | 0.1% of HBOT circulating supply | 3% of HBOT circulating supply | 10% of HBOT circulating supply |
| Approval Threshold           | >50% of tokens approved   | >50% of tokens approved | >50% of tokens approved  |

See [HBOT](/hbot) for the current Quorum Percentage, which is based on the HBOT circulating supply.

## Types of Proposals

### Pull Request Proposals

* Pull Request Proposals (PRP) let HBOT holders **approve pull requests** for merge and inclusion into the Hummingbot codebase.
* Any wallet with a HBOT balance that meets Minimum HBOT Balance with can create a PRP at the Snapshot sub-space: <https://snapshot.org/#/hbot-prp.eth>.
* A PRP links to a valid pull request in the Hummingbot code repository. See [Contribution Guidelines](/developers/contributions/) for more information about the process of creating a valid pull request.
* If the PRP is approved after the Vote Duration and the Quorum Percentage is met, then the Foundation will begin the process of reviewing and merging the pull request into the codebase.
* During the review process, the Foundation will test the submitted pull request to ensure that it fulfills its stated intention, conduct a technical code review, check for conflicts with other parts of the Hummingbot codebase and security issues. If the review passes, the pull request is merged into the codebase.
* If the PRP fails to meet the Approval Threshold, the Foundation will close the related pull request. However, the developer is free to create a new pull request and a new PRP at a subsequent date.

To be considered valid, a PRP should contain the following fields (otherwise the Foundation may close it):

* **Title**: Starts with `PRP` followed by count and summary (i.e. `PRP-100: [summary]`)
* **Github Link**: Link to a [Github pull request](https://github.com/hummingbot/hummingbot/pulls), which should contain a detailed explanation of the changes proposed

### Hummingbot Improvement Proposals

* Hummingbot Improvement Proposals (HIP) let HBOT holders **propose developer bounties** for improvements or fixes to the Hummingbot codebase
* HIPs may name a specific developer, in which case the bounty is assigned to the developer if it is approved. If not, the Foundation will mark the bounty as Open and publicize it to the community.
* Any wallet with a HBOT balance that meets Minimum HBOT Balance with can create a HIP at the Snapshot sub-space: <https://snapshot.org/#/hbot-hip.eth>
* Before creating an HIP, we recommend creating a thread in [Discord](https://discord.gg/hummingbot) under the **#proposal-discussions** channel to gauge whether the requested HBOT amount is appropriate.
* If the HIP is approved after the Vote Duration and the Quorum Percentage is met, then the Foundation will create a [Bounty](/governance/bounties) and follow the assignation process.

To be considered valid, a HIP should contain the following fields (otherwise the Foundation may close it):

* **Title**: Starts with `HIP` followed by count and summary (i.e. `HIP-100: [summary]`)
* **Github Link**: Link to a Github [issue](https://github.com/hummingbot/hummingbot/issues) or [pull request](https://github.com/hummingbot/hummingbot/pulls)
* **HBOT Allocation**: Proposed HBOT bounty amount
* **Developer** (if assigned): Link to a developer's Github page or website

### Hummingbot Governance Proposals

* Hummingbot Governance Proposals (HGP) are generally used by the Foundation to **conduct regular polls** that allow HBOT holders to decide how engineering bandwidth should be allocated across the exchanges, strategies, and issues in the codebase.
* The Foundation also uses an HGP to elects its [Board of Directors](/about/#board-of-directors) every year.
* In addition, HGPs are used to propose HBOT allocations for non-development purposes, such as community incentives and liquidity mining programs.

* Any wallet with a HBOT balance that meets Minimum HBOT Balance with can create a HGP at the main Snapshot space: <https://snapshot.org/#/hbot.eth>.
* Before creating an HGP, we recommend creating a thread in [Discord](https://discord.gg/hummingbot) under the **#proposal-discussions** channel to gauge whether the requested HBOT amount is appropriate.

To be considered valid, an HGP should contain the following fields:

* **Title**: Starts with `HGP` followed by count and summary (i.e. `HGP-100: [summary]`)
* **Description**: Detailed explanation of the proposed initiative or program
* **HBOT Allocation** (if any): Proposed HBOT bounty amount
