Bounties are rewards (denominated in HBOT or other tokens) given out by the Foundation or by community members to developers for fixing a bug or adding an improvement (enhancement, new connector, new strategy, etc) to the Hummingbot codebase.

## Bounties Board

![bounty](/assets/img/bounty-board.jpg)

Hummingbot Foundation maintains a [Github board](https://github.com/orgs/hummingbot/projects/7/views/1) in which you can see the status of all active bounties, including both bugs and improvements.

* **Open**: Open bounties that developers can apply to work on
* **Assigned**: Issue has been assigned to a developer, who is expected to submit a pull request resolving it
* **Submitted**: A pull request resolving the issue has been submitted by the assigned developer
* **Merged**: Pull request has been merged to the `development` branch
* **Paid**: The community developer has been paid and the bounty is considered done.

### Creation

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

## Bug Bounties

Starting in Epoch 2, the Foundation assigns bounties to open Github bugs, prioritizing issues related to [Certified](/maintenance/certification) exchanges. 

### Bug Bounty Schedule

The severity assigned by Hummingbot Foundation determines the amount for each bounty. Currently, the Foundation applies the following fixed bounty amounts per bug severity.

| Bug Severity  | Bug Fix      |
| -----------   | ------------ | 
| P3 (Low)      |  10,000 HBOT |
| P2 (High)      | 50,000 HBOT |
| P1 (Critical)  | 100,000 HBOT |

Afterwards, the Foundation team member will add a comment to the Github issue stating that a bounty has been created for the issue ("Created 100,000 HBOT bounty for a fix resolving issue X") and add it to the [Bounties board](https://github.com/orgs/hummingbot/projects/7/views/1) under the **Open** column.

See [Bounties](/maintenance/bounties) for how developers can take up bounties.

### Reporting

To report a bug, anyone can submit an [Bug Report](https://github.com/hummingbot/hummingbot/issues/new?assignees=&labels=bug&template=bug_report.md&title=) to the Hummingbot Github. 

The submitter should include as much description as possible for the issue reported, such as Steps to Reproduce, screenshots, etc. They should also add labels corresponding to the strategy name and exchange connector name as well.

### Classification

The Foundation will regularly assess all bugs, which entails determining whether it is in fact a real bug and applying a priority label to them. If the issue is a real bug, the Foundation will add the Github issue to the Bounty Board and assign a fixed HBOT amount according to the Bug Bounty Schedule above.

#### P3 (Low)

* Bugs won’t result in any noticeable breakdown of the system

* Related to:
    - Color, incorrect spacing, typo or all related to design or user interface 
    - How parameter works when being called (Prompt)
    - Strategy performance (setup, order create/cancellation, orderbook integrity..etc)

* `Status:` The client still works as expected with possible workarounds

* Results in some unexpected or undesired behavior, but not enough to disrupt system function

* Example 1
    * `Test case`: Executed command config order_refresh_time
    * `Test expected result:` There should be prompt of how order_refresh time works and what user should input

* Example 2
    * `Test case:` Start pure market making
    * `Test expected result:` The bot should create orders after 20s upon running start command

#### P2 (High)

* Bug capable of collapsing large parts of the system

* Related to:
    - The data client provides to users (SQlite, CSV, trades files)
    - Functionality of strategies
    - Connection between Client and Exchange 
    - Client performance when started
    - Compatibility on hardware and operating systems
    - Orders not created correctly
    - Trade history does not match from client and connector

* Example 1:
    * `Test case:` History command, Trade PNL data
    * `Test expected result:` After few trades, run history command and it should show all data the user needs on trade events

* Example 2: 
    * `Test case:` Binance connector
    * `Test expected result:` Connecting API and balance should return no error when executed

* `Status:` the client works but some of the functionalities are not working as expected

#### P1 (Critical)

* Bug capable of triggering complete system shutdown or can cause a leak of the user private information (i.e. API keys, wallet private keys)

* Related to:
    - The client does not work, returning number of errors
   - Unable to install/setup both source/docker build
    - Connector unusable
    - Client unstable 
   - Client  creates order but not on connector
   - Client crashes upon start
   - etc..

* `Status:` The client can be either usable or unusable due to functionality issues

## Improvement Bounties

Improvement bounties are created when an [HIP or HGP](/governance/proposals) allocates HBOT tokens to fund a specific task, such as a new connector, strategy, or enhancement.
