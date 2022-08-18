# Release Candidate (staging branch) bug hunt

## Summary

To improve the quality of each Hummingbot Client Release, we propose to allocate **1,000,000** HBOT tokens to reward the community for bug hunting and bug fixes, during the staging phase of each monthly Release.

## Details
As detailed on the [Hummingbot Release cycle](https://hummingbot.org/governance/proposals/prp/#development-release-cycle), Release Candidates will be moved to the [staging branch](https://github.com/hummingbot/hummingbot/tree/staging) once all approved PRPs for that release are merged into `development`.

During this phase, the Release Candidate still needs to be tested for bugs not found during the initial merge of Pull Requests into the `development` branch.

As a way to improve the quality of each release, this proposal establish the Bug Hunt program, and allocate **1,000,000** HBOT tokens to be distributed as rewards to community members that find and/or fix bugs on the `staging` branch.

## Severity Classification
Each bug will be classified according to the following structure:

### Low
* Bugs won’t result in any noticeable breakdown of the system

* Related to : color, incorrect spacing, typo or all related to design or user interface 

* `Status:` The client still works as expected 

### Medium 

* Results in some unexpected or undesired behavior, but not enough to disrupt system function

* Related to: 
    * How parameter works when being called (Prompt)
    * Strategy performance (setup, order create/cancellation, orderbook integrity..etc)

* Sample
    * `Test case`: Executed command config order_refresh_time,
`Test expected result:` There should be prompt of how order_refresh time works and what user should input

    * `Test case:` Start pure market making
`Test expected result:` The bot should create orders after 20s upon running start command

* `Status:` The client still works as expected but with noticeable delays

### High

* Bug capable of collapsing large parts of the system

* Related to:
    -  The data client provides to users (SQlite, CSV, trades files)
    - Functionality of strategies
    - Connection between Client and Exchange 
    - Client performance when started
    - Compatibility on hardware and operating systems
    - Orders not created correctly
   - Trade history does not match from client and connector

* Sample:
    * `Test case:` History command, Trade PNL data
`Test expected result:` After few trades, run history command and it should show all data the user needs on trade events 

    * `Test case:` Binance connector
`Test expected result:` Connecting API and balance should return no error when executed

* `Status:` the client works but some of the functionalities are not working as expected

### Critical

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



!!! NOTE: The list above are examples for reference. Once the bug is reported, Hummigbot Foundation team will evaluate the severity of the bug through internal testing.

## Rewards allocation Structure
Community members can request a reward as a ***Bug Finding*** and/or a ***Bug Fix***.

The rewards will be allocated of the following structure

| Bug Severity  | Bug Finding | Bug Fix    | Bug Find + Bug Fix |
| -----------   | ----------- |---------   |--------------------|
|Low            | 500 HBOT    | 1500 HBOT  | 2000 HBOT 
|Medium         | 1000 HBOT   | 3000 HBOT  | 4000 HBOT
|High           | 5000 HBOT   | 15000 HBOT | 20000 HBOT
|Critical       | 20000 HBOT  | 80000 HBOT | 100000 HBOT     |



## Participation Rules
After all approved PRPs are merged and the `staging` branch is updated as the next Release Candidate, Hummingbot Foundation team will create a thread in [Hummingbot Forum - Releases](https://hummingbot.discourse.group/c/releases/12), detailing what Pull Requests are going into the next release.

Once the `Release Candidate Thread` is created, the Bug Hunt for that release will be active, until the new release deployment on the `main` branch is done. Then, the thread for that release candidate will be closed.

To report a bug and/or a bug fix on the release candidate `staging` branch, the community members must reply to the `“Client release candidate staging branch review active”` thread using the formats below.**

<br>


#### **Bug Finding Report**

* **Type:** `Bug Found` 

* **Severity:** <*Add the severity you think this bug should be classified as>*

* **Bug Description:** <*Add a description of the bug*>

* **How to reproduce:** <*Describe the steps to reproduce the bug, with as much details as possible*>


***

#### **Bug Fix Report** 

* **Type:** `Bug Fix` <*Add `Bug Found` instead, if the bug wasn’t reported before*>

* **Severity:** <*Add the severity you think this bug should be classified as>*

   `Note: Hummingbot Foundation reserves the right to modify the severity`

* **Bug Description:** <*Add a description of the bug*>

* **Fix PR:**  <*Link to the Pull Request targeting the staging branch*>

* **How to reproduce:** <*Describe the steps to reproduce the bug, with as much details as possible*>

<br>

## Reward payment
Rewards approved by the Hummingbot Foundation team will be sent to the address used to report on the respective **staging branch review** thread in the forum, after every new release is deployed into the `master` branch.

## Important Notes
- Bug fixes aimed to the `staging` branch **do not need** to go through a PRP voting
- Bug fixes reports will only be rewarded if the Foundation QA approves and merges the respective PR
- Bug findings reports will only be rewarded if Foundation QA is able to reproduce the bug and confirm its existence
- If a bug report/fix is related to a possible leak of users sensitive information we ask the community to `reach out to the Hummingbot Foundation team` directly before posting a report.

## Budget Allocation
Allocate **1,000,000** HBOT to reward bug findings and bug fixes for the release candidate