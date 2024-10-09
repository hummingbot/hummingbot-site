## What types of connector bounties will the Foundation handle?

Integrations to exchanges that meet the [connector standards](/exchanges/) for CLOB (Spot), CLOB (Perp), and AMM connectors.

## What types of strategies bounties will the Foundation handle?

Custom algorithmic trading stratgies composed as a [Script](/scripts) or [Controller](/v2-strategies/controllers/index.md) - market making, arbitrage, directional, etc.

## Can multiple users fund a single bounty?

Yes, multiple users can fund the same bounty, but they must coordinate between themselves to ensure that the Foundation receives the bounty amounts in a timely manner.

## What does the preliminary check for new connectors entail?

Before users fund a new connector bounty, the Foundation's engineering team performs a preliminary check of the exchange API documentation to ensure the exchange is compatible with Hummingbot's connector standards and has the necessary WebSocket/REST API endpoints to be integrated into Hummingbot.

## What tests do developer need to write?

- CLOB spot and perp connectors: unit tests
- AMM connectors: curl tests, optional unit tests (in `test-bronze` folder)

## How can a developer get assigned to a bounty?

Any bounty in the `OPEN` column on [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1) is not assigned. Contributors can leave a comment on Github ticket issue, such as “I want to be assigned for this bounty. Here is my experience...”

After a quorum of developers have indicated interest in the bounty, the Foundation will assign a contributor, taking into account their [certification](/certification) status, past bounty contribution experience, and Github track record.

On the Github issue, we will added: “[Contributor] has been assigned to this bounty” and change the bounty status from `OPEN` to `ASSIGNED`

## Can a developer be assigned to multiple bounties?

No, a developer can only be assigned to one bounty at a time, unless they have alredy submitted a PR for the current bounty and the PR is under review.

## If a bounty takes too long or the work is unsatisfactory, can the developer be replaced?

After assignment, we expect the developer to continually inform the Foundation team on the progress. If the developer is unresponsive or inactive for 7+ days, the Foundation may unassign the developer and open the bounty for others.

In rare cases, the bounty contributor may discover that the issue is unresolvable. In these cases, the Foundation will append a `wont-fix` label to the issue and refund all or part of the bounty amount, depending on the extent of work completed.
