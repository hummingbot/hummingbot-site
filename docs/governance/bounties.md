# Introducing Community Bounties #

Last year, we introduced the `Bounties` process, which has successfully addressed numerous issues and funded vital technical improvements in the Hummingbot codebase. Bounties have been $HBOT-denominated rewards provided by the Foundation to developers for resolving bugs or adding enhancements (such as new connectors, strategies, etc.) to the Hummingbot codebase. Given its significant impact and cost-effectiveness, we believe it's time to expand the Bounties program to the broader Hummingbot ecosystem.

Here are the milestones that Bounties have achieved:

- 68 bounties paid, resulting in 53 bug fixes and 15 new features and exchange connectors, including Kucoin Perpetual, PancakeSwap, and SushiSwap.

- 32 unique developers have earned bounties.

- Smallest bounty paid: 10,000 $HBOT ($50 currently) for Priority 3 bugs.

- Largest bounty paid: 2,000,000 $HBOT ($10,000 currently) for the Orchestration Module.

- Total funds spent: 13,337,000 $HBOT ($67,000 currently).

Now, we believe it's time to open up these bounties to the broader Hummingbot ecosystem, so we are recasting them as **Community Bounties**.

Community Bounties offer a platform for those seeking development work on exchange connectors, strategies, bug fixes, and more to connect with skilled developers capable of building these solutions. As with past bounties, Hummingbot Foundation will oversee the entire lifecycle of Community Bounties, including scoping, assignment, QA/engineering review, and code merge / payment.

## Bounties Board ##

![bounty](/assets/img/bounty-board.jpg)

Hummingbot Foundation maintains a [Github board](https://github.com/orgs/hummingbot/projects/7/views/1) in which you can see the status of all active bounties, including both bugs and improvements.

- **Open**: Open bounties that developers can apply to work on
- **Assigned**: Issue has been assigned to a developer, who is expected to submit a pull request resolving it
- **Submitted**: A pull request resolving the issue has been submitted by the assigned developer
- **Merged**: Pull request has been merged to the `development` branch
- **Paid**: The community developer has been paid and the bounty is considered done.

The **Community Bounties** program is designed to streamline the process of funding enhancements, bug fixes, and new features for the official Hummingbot codebase, as well as private forks used by the community. The program consists of four key stages: **(1) Bounty Creation**, **(2) Bounty Assignment**, **(3) Pull Request Review**, and **(4) Code Merge and Payment**.

If you are a **sponsor** wishing to fund a bounty or if you are a **developer** who wants to work on a bounty see the links below for an outline of the exact steps you need to take.

- **[Sponsors](./sponsors.md)**
- **[Developers](./devs.md)**

## Bounty Creation ##

The first step in the process involves defining the bounty type, which can either be Open Source (to be merged into the official Hummingbot codebase) or Private (for a private Hummingbot fork and not included in open source codebase).

Bounties should also be classified as `Bug Fix`, `Enhancement`, `New Connector`, `New Strategy`, or `New Script`. It is important to note that Open Source bounties (except for Bug Fixes) require community approval via the **Hummingbot Improvement Proposal** before acceptance, whereas Private bounties and Open Source bounties for Bug Fixes do not require voting.

The Sponsor, either the Hummingbot Foundation or a community member, should post a thread in the `#bounties` Discord channel describing the issue. Developers interested in working on the bounty can post in the thread to ask questions.

Foundation staff will then collaborate with the Sponsor to scope the bounty in a Github issue, providing a clear description of the work required, acceptance criteria, an an appropriate schedule/bounty amount given scope of work.

If the Foundation approves the bounty, the Sponsor sends the bounty (which may be in $HBOT or other ERC-20 Ethereum tokens) to a designated Foundation Ethereum wallet, and the Foundation subsequently posts the bounty on the Bounties Board, a public Github project where you can see the status of all active bounties.

## Bounty Assignment ##

After a bounty has been posted on the Bounties Board, developers from the community can apply to be assigned to the task by commenting on the associated Github issue. This allows for an open and transparent selection process, giving interested developers the opportunity to showcase their skills and commitment to the project.

Once one or more qualified developers have applied to work on a specific issue, the Foundation will evaluate the applicants based on their past experience with Hummingbot, as well as other relevant factors.

The Foundation will then assign the issue to the most suitable candidate. To indicate the assignment, the issue will be moved to the "Assigned" column in the Bounties Board, and a comment will be added to the issue, such as "Assigned bounty to Developer X (with a link to their Github profile)." This ensures that the community is aware of the assignment and can monitor the progress of the task.

Afterwards, the developer is expected to deliver a pull request (PR) that fulfills the bounty. Note that the Foundation may re-assign the bounty if the assigned developer is unresponsive or inactive for 2+ weeks, or if the submitted PR doesn’t address the acceptance criteria.

## Pull Request Review ##

In order to claim a bounty, the assigned developer must submit a Pull Request (PR) that addresses the specific issue outlined in the bounty. Once the PR is submitted, the Foundation will thoroughly assess the proposed solution to ensure it meets the established acceptance criteria.

The Foundation will run various tests on the submission to evaluate its functionality, stability, and overall performance. Additionally, an engineering review will be conducted to ensure that the proposed changes can be safely and seamlessly integrated into the existing codebase without causing any conflicts or compromising system integrity.

The PR review process is a crucial step in maintaining the high quality and reliability of the Hummingbot ecosystem. By rigorously evaluating each submission, the Foundation can ensure that only the most effective and efficient solutions are implemented, ultimately resulting in a more robust and user-friendly platform for the entire community.

## Code Merge and Payment ##

Bounties are paid only after the Pull Request (PR) has been successfully merged into the development branch or private fork of Hummingbot. This ensures that the proposed solution has met the required standards and has been thoroughly reviewed by the Foundation.

The bounty payments are divided as follows:

- 75% of the bounty is awarded to the developer who submitted the PR that fulfills the bounty requirements.

- 25% of the bounty is allocated to the Hummingbot Foundation for overseeing the process, reviewing, and merging the PR.

In cases where the bounty is denominated in $HBOT, the payment structure is slightly different:

- 95% of the bounty is awarded to the developer.

- 5% of the bounty goes to the Hummingbot Foundation for their services.

We believe that this payment structure ensures that both the developers and the Foundation are fairly compensated for their work, promoting a healthy and sustainable Hummingbot ecosystem.

## First Community Bounties ##

To test the process, the Foundation has created a couple of initial Community bounties:

- Update Crypto.com exchange connector to latest API

- Update Coinbase connector to latest API

If you have questions about these issues or the Community Bounties process in general, please ask our community manager Carlito in [Discord(https://discord.gg/hummingbot)].

### Reporting

To report a bug, anyone can submit an [Bug Report](https://github.com/hummingbot/hummingbot/issues/new?assignees=&labels=bug&template=bug_report.md&title=) to the Hummingbot Github.

The submitter should include as much description as possible for the issue reported, such as Steps to Reproduce, screenshots, etc. They should also add labels corresponding to the strategy name and exchange connector name as well.

## The Future of Community Bounties ##

The Community Bounties program embodies our vision of fostering a collaborative and dynamic environment within the Hummingbot ecosystem. By actively involving developers and community members in the process of enhancing, fixing, and expanding the codebase, we aim to create a robust and user-centric platform that continuously evolves to meet the needs and expectations of its users.

As Hummingbot grows, the Community Bounties program will play a pivotal role in driving innovation and maintaining a high standard of quality across the platform. By offering incentives and support to talented developers, we can tap into a wealth of expertise and creativity that will ultimately benefit the entire ecosystem.
