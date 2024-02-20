All contributors should adhere to the code conventions used in the Hummingbot repository. The guidelines are outlined below.

## **Workflow**

### **1. Fork the repository**

Use GitHub's interface to make a fork of the repo and clone it to your local machine.

```
git clone https://github.com/{user_github_handle}/hummingbot.git
```

### **2. Add remote**

Add the Hummingbot repo as an upstream remote, and fetch upstream data:

```
git remote add upstream https://github.com/hummingbot/hummingbot.git
git fetch upstream
```

### **3. Creating your branch**

Create your local branch and should follow this naming convention:

- feat/ ...
- fix/ ...
- refactor/ ...
- doc/ ...

Create and switch to a new local branch called `feat/[branch_name]` based on `development` of the remote `upstream`.

```
git checkout -b feat/[branch_name] upstream/development
```

### **4. Commit changes to a branch**

Make commits to your branch and make sure that you only make relevant changes. If you find yourself making unrelated changes, create a new branch for those changes. Prefix each commit like so:

- (feat) add a new feature
- (fix) fix inconsistent tests
- (refactor) ...
- (cleanup) ...
- (doc) ...

Commit message guidelines:

- Commit messages should be written in the present tense, e.g. "(feat) add unit tests".
- The first line of your commit message should be a summary of what the commit changes. Aim for about 70 characters max. Remember: This is a summary, not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should be blank and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.

### **5. Rebase upstream changes**

When you are done making changes, you can begin getting your code merged into the main repository. The first step is to rebase upstream changes into your branch.

```
git pull --rebase upstream development
```

This will start the rebase process. You must commit all of your changes before doing this. If there are no conflicts, this should roll all of your changes back on top of the changes from upstream, leading to an excellent, clean, linear commit history.

If there are conflicting changes, git will start yelling at you partway through the rebasing process. Then, git will pause rebasing to allow you to sort out the conflicts. You do this the same way you solve merge conflicts, by checking all of the files git says have been changed in both histories and picking the versions you want. Be aware that these changes will show up in your pull request, so try and incorporate upstream changes as much as possible.

You pick a file by `git add` ing it - you do not make commits during a rebase.

### **6. Create a pull request**

Make a clear pull request from your fork and branch to the upstream development branch, detailing exactly what changes you made and what feature this should add. The clearer your pull request is, the faster you can get your changes incorporated into this repository.

It is important to check **Allow edits by maintainers** for the Hummingbot team to update your branch with `development` whenever needed.

![Creating a pull request](/assets/img/pull-request-sample.png)

If the development team requests changes, you should make more commits to your branch to address these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting a further review, and someone will look at your code again. If it addresses the requests, it will get merged. Else, repeat the process.

### **7. Create a proposal in Snapshot ⚡️**

If you want your contribution to be reviewed, merged into the official Hummingbot codebase and included in ongoing monthly releases, you need to get a [Proposal](/governance/proposals) approved.

Create a new proposal in the appropriate Snapshot sub-space following the instructions on the Proposals page. Make sure that you have at least 200,000 HBOT to create a New Connector Proposal, or 1 HBOT for a Pull Request Proposal. The voting period is 7 days and the HBOT holders will decide if your proposal will be accepted or rejected.

### **8. Code review**

Once the PRP is approved, your code will be tested by the QA team and if pass all the test Tech Review DAO will review the code.

Fix any changes requested by your reviewer, fix issues raised by a tester, and push your fixes as a single new commit.

### **9. Merge**

Once the pull request has been reviewed and accepted; it will be merged by a member of the Hummingbot development team.

## Additional information

### Unit test coverage

!!! note
      Tests are very important. Submit tests if your pull request contains new, testable behavior. See [Unit test coverage](#unit-test-coverage) for more information.

It is required to present a minimum 80% unit test coverage of all the changes included in a pull request. Some components are, however, excluded from this validation (for example all UI components).

To calculate the diff-coverage locally on your computer, run `make development-diff-cover` after running all tests.

### Checklist

This is to help you organize your process.

- Did I create my branch from `development`?
- Did I follow the correct naming convention for my branch?
- Is my branch focused on a single main change?
- Do all of my changes directly relate to this change?
- Did I rebase the upstream `development` branch after I finished all my work?
- Did I write a clear pull request message detailing what changes I made?
- Did I get a code review?
- Did I make any requested changes from that code review?

If you followed all of these guidelines and made good changes, you should have no problem getting your changes merged.
