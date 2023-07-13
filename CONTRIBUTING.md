# Contribution Guidelines

## General Workflow

1. Fork the `hummingbot/hummingbot-site` repository.
2. Create a new branch from the `main` branch in your fork.
3. Commit your changes to your branch.
4. Once you've completed your updates or additions to the documentation:

   - Rebase upstream changes into your branch.
   - Create a pull request to the `main` branch.
   - Include a detailed description of your changes / additions to the documentation.
   - Check any links to make sure they are pointing to the correct destination.
   - Proofread your changes.

5. Your changes will be reviewed by the Foundation team.
6. Address any changes requested by your reviewer, fix issues raised, and push your fixes as a single new commit.
7. Once the pull request has been reviewed and accepted, it will be merged by a member of the Hummingbot Foundation team.

## Detailed Workflow

### 1. Fork the Repository

Make sure your local repository is up-to-date with the upstream (original) repository you forked. This usually involves fetching the upstream repository and merging or rebasing it with your local branch. Use GitHub's interface to fork the repo, add the Hummingbot repo as an upstream remote, and fetch upstream data:

```bash
git remote add upstream https://github.com/hummingbot/hummingbot-site.git
git fetch upstream
```

### 2. Create Your Branch

Always work on a new, dedicated branch for each specific documentation update or addition, rather than directly on the main branch. This helps to organize changes and prevent potential conflicts. Create your local branch following this naming convention:

- doc/...

Create and switch to a new local branch called `doc/[branch_name]` based on the main branch of the remote upstream:

```bash
git checkout -b doc/[branch_name] upstream/main
```

### 3. Commit Changes to Your Branch

Make commits to your branch. Prefix each commit like so:

- (doc) ...

Commit messages should be written in the present tense, e.g., "(doc) update API guide". The first line of your commit message should be a summary of what the commit changes, aiming for about 70 characters max. If you want to explain the commit in more depth, provide a more detailed description after a blank line following the first line.

### 4. Rebase Upstream Changes

If there have been changes to the upstream main branch since you started working, rebase those changes into your working branch to ensure your updates are based on the most recent documentation. Rebase upstream changes to the main branch into yours by running this command from your branch:

```bash
git pull --rebase upstream main
```

### 5. Create a Pull Request

Create a clear pull request from your fork and branch to the upstream `main` branch, detailing your changes. Check 'Allow edits by maintainers' for the Foundation team to update your branch with `main` whenever needed.

Final Checks:

- **Check Any Links:** If your changes include hyperlinks, make sure they are pointing to the correct destination. Broken links can cause confusion for readers.

- **Proofread Your Changes:** Before submitting your pull request, review your changes thoroughly for any typographical errors, grammatical mistakes, or inconsistencies in style. Attention to detail can greatly improve the quality of the documentation.

- **Check the Rendered Documentation:** If possible, check how the rendered documentation looks after incorporating your changes. Look for formatting errors or other visual issues that might have been introduced.


### 6. Wait for a Review 

Once the pull request is made, wait for it to be reviewed. Be ready to make changes based on feedback from the review.


### 7. Respond to Feedback

Respond to any comments or feedback on your pull request in a timely manner. This may involve making further changes and committing those to your branch.


## Checklist

- Did I create my branch from `main`?
- Did I follow the correct naming convention for my branch?
- Did I make sure any hyperlinks are pointing to the correct destination?
- Did I proofread my changes?
- Did I rebase the upstream main branch after I finished all my work?
- Did I write a clear pull request message detailing what changes I made?
- Did I get a review?
- Did I make any requested changes from that review?

If you adhere to these guidelines and make quality changes, you should have no problems getting your contributions accepted. Thank you for contributing!
