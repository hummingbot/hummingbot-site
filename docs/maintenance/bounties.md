Bounties are rewards (denominated in HBOT or other tokens) given out by the Foundation by or community members to fix a bug or add an improvement (enhancement, new connector, new strategy, etc) to the Hummingbot codebase.

## Process

For bugs related to core components, as well as for certified exchange connectors, Hummingbot Foundation will assess the bugs and create bounties for them on the **Bounties board**. 

For non-bug improvements such as new connectors and strategies, anyone can create [Hummingbot Improvement Proposals (HIP)](/governance/proposals) that, if approved, determines whether Foundation should add an HBOT bounty to the **Bounties board**. Community members can also fund bounties and get them to the **Bounties board** by sending tokens to a Foundation wallet, skipping the HIP voting process.

Bounties are paid only after code is merged into development (after PRP approval and Tech Review DAO approval). 

Bounty payments are split into the following shares, which are governance parameters settable via HBOT voting:

* **Developer Share**: [80]% of bounty goes to the developer who submitted the pull request
* **Reviewer Share**: [10]% of bounty goes to the reviewer
* **Foundation Share**: [10]% of bounty goes to Hummingbot Foundation

## Foundation vs community bounties

An approved [HIP](/governance/proposals/hip) may authorize the Foundation to create a HBOT-based bounty for a specific Github issue. Alternatively, a community member may create a bounty, circumventing the HIP process. To fund a community bounty, please contact Hummingbot Foundation support team on Discord.

## Bounties board

![bounty ](/assets/img/bounty-board.jpg)

Hummingbot Foundation maintains a [Github board](https://github.com/orgs/hummingbot/projects/7/views/1) in which you can see the status of all active bounties, including both bugs and improvements.

* **Bugs**: Open bugs with bounties attached to them that developers can apply to work on
* **Improvements**: Open improvements with bounties attached to them that developers can apply to work on
* **In progress**: Issue has been assigned to a developer, who is expected to submit a pull request resolving it
* **Submitted**: A pull request resolving the issue has been submitted by the assigned developer
* **Merged**: Pull request has been merged to the `development` branch
* **Paid**: The community developer has been paid and the bounty is considered done.

## Bounty labels

To see a list of Github issues with bounties, you can also go to [Issues](https://github.com/hummingbot/hummingbot/issues) and click on **labels**. Then, choose between `bounty_hbot` or `bounty_community`.
