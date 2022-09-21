Bounties are rewards (denominated in HBOT or other tokens) given out by the Foundation or by community members to developers for fixing a bug or adding an improvement (enhancement, new connector, new strategy, etc) to the Hummingbot codebase.

## Bounties Board

![bounty ](/assets/img/bounty-board.jpg)

Hummingbot Foundation maintains a [Github board](https://github.com/orgs/hummingbot/projects/7/views/1) in which you can see the status of all active bounties, including both bugs and improvements.

* **Open**: Open bounties that developers can apply to work on
* **Assigned**: Issue has been assigned to a developer, who is expected to submit a pull request resolving it
* **Submitted**: A pull request resolving the issue has been submitted by the assigned developer
* **Merged**: Pull request has been merged to the `development` branch
* **Paid**: The community developer has been paid and the bounty is considered done.

## Creating a bounty

There are three types of bounties:

* **Bug bounty**: bounties for priority bugs assessed by Hummingbot Foundation
* **Improvement bounty**: bounties for codebase improvements following an approved HIP
* **Community bounty**: bounties submitted by community members (skips HIP process)

For bugs related to core components, as well as for certified exchange connectors, Hummingbot Foundation will assess the bugs following the current schedule and create bounties for them on the **Bounties board**.

For improvements such as new connectors and strategies, anyone can create [Hummingbot Improvement Proposals (HIP)](/governance/proposals) that, if approved, determines whether Foundation should add an HBOT bounty to the **Bounties board**. 

In addition, community members can also fund bounties and get them to the **Bounties board** by sending tokens to a Foundation wallet, skipping the HIP voting process.  To fund a community bounty, please contact Hummingbot Foundation support team on Discord.

Afterwards, the Foundation team member will add a comment to the bounty's Github issue stating that a bounty has been created for the issue ("Created 100,000 HBOT bounty for a fix resolving issue X") and add it to the [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1) under the **Open** column.

### Assignation

After the bug has been added to Bounties Board, any developer from the community can apply to be assigned to fix the bug by commenting on the Github issue. 

Once there are one or more qualified developers who have applied to fix a bug, the Foundation will assign the issue to one of them, based on the developer’s past experience with Hummingbot. To mark the assignation, we will move the issue to **Assigned** in the Bounties board, and add a comment to the issue ("Assigned bounty to Developer X (with link to Github profile)").

### Submission

To claim a bounty, the assigned developer must submit a pull request addressing the bounty. Afterwards, Foundation will run tests to assess the fix and conduct an engineering review to ensure it can be merged into the codebase safely.

### Payment

Bounties are paid only after the pull request is merged into the `development` branch. Bounty payments are split into the following shares, which are governance parameters settable via HBOT voting:

* **Developer Share**: [80]% of bounty goes to the developer who submitted the pull request
* **Reviewer Share**: [20]% of bounty goes to the reviewer who approves it
