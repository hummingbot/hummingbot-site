After a [Pull Request Proposal](/governance/proposals) is approved, the pull request linked to it will go through the following development cycle, coordinated by the Hummingbot Foundation team:

## Branches

[![PRP code merge workflow](/assets/img/pull request proposal workflow.png)](/assets/img/pull request proposal workflow.png)

The Hummingbot code repository has three main branches related to the development cycle of each monthly release:

### `development`

All pull requests aiming to be included on the `master` branch must be targeted to the development branch. They are then promoted from `development` to `staging` before passing to `master`. Pull requests targeting the `development` branch will only be merged into `staging` only when there is an approved PRP related to it. 

### `staging`

`staging` is used by the Foundation QA team to conduct a thorough test all code changes before adding them to the `master` branch.

### `master`

`master` is the main release branch and contains the latest stable version of the Hummingbot software client and is released once per month.

### Release cadence

Hummingbot ships a new release approximately every month. Each release is built, tested and released over a two-month cycle that overlaps with the next release.

[![Release schedule](/assets/img/pull request proposal period.png)](/assets/img/pull request proposal period.png)

#### Month 1: Review and approve

During the first month, PRPs approved during this period will be scheduled to be added to the next release. Only PRPs approved before the cutoff date will be added.

#### Month 2: Test and release

During the second month, The Foundation team will merge all remaining PRPs that are approved but not yet merged, merge the `development` branch into the `staging` branch, and run all tests needed. 

A new release can happen anytime during Month 2. There is no fixed date for, and it will happen as when all approved pull request are merge and the Foundation QA team signs off the new release.
