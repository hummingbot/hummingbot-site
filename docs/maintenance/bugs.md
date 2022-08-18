## Bug Bounty Pool

This [Snapshot](https://snapshot.org/#/hbot.eth/proposal/0x1fdb9a1ce7f3198c05711564dccad8dfbe9468078a77bc10647e80c30d49dd64) allocated **1,000,000 HBOT** to a community bug hunt.

Starting in Epoch 2, the Foundation will assign these tokens as bounties to open Github bugs, prioritizing issues related to [Certified](/maintenance/certification) exchanges.

## Bug Bounty Schedule

The severity assigned by Hummingbot Foundation determines the amount for each bounty. Currently, the Foundation applies the following fixed bounty amounts per bug severity.

| Bug Severity  | Bug Fix      |
| -----------   | ------------ | 
| P3 (Low)      | 10,000 HBOT |
| P2 (High)      | 20,000 HBOT |
| P1 (Critical)  |100,000 HBOT |

Afterwards, the Foundation team member will add a comment to the Github issue stating that a bounty has been created for the issue ("Created 100,000 HBOT bounty for a fix resolving issue X") and add it to the [Bounties board](https://github.com/orgs/hummingbot/projects/7/views/1) under the **Open** column.

See [Bounties](/maintenance/bounties) for how developers can take up bounties.

## Reporting

To report a bug, anyone can submit an [Bug Report](https://github.com/hummingbot/hummingbot/issues/new?assignees=&labels=bug&template=bug_report.md&title=) to the Hummingbot Github. 

The submitter should include as much description as possible for the issue reported, such as Steps to Reproduce, screenshots, etc. They should also add labels corresponding to the strategy name and exchange connector name as well.

## Classification

The Foundation will regularly assess all bugs, which entails determining whether it is in fact a real bug and applying a priority label to them. If the issue is a real bug, the Foundation will add the Github issue to the Bounty Board and assign a fixed HBOT amount according to the Bug Bounty Schedule above.

### P3 (Low)

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

### P2 (High)

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

### P1 (Critical)

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
