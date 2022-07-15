# Hummingbot Foundation website and documentation

Welcome to the official website and documentation for Hummingbot and the Hummingbot Foundation!

## Install and Run

This documentation site uses [MkDocs](https://www.mkdocs.org/) documentation-focused static site engine, along with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme, of which Hummingbot is a proud sponsor.

!!! note "Cairo dependency"
    Since we recently added social cards, you may need to install the [Cairo](https://www.cairographics.org/) graphics library to run this locally. On macOS, you can install it globally using [Homebrew](https://brew.sh/) with `brew install cairo`.

### Insiders

The deployed site at https://hummingbot.org uses the [Insiders build](https://squidfunk.github.io/mkdocs-material/insiders/) of MkDocs-Material, which features experimental features like tags and social cards. For site editors, please request access to the CoinAlpha fork of the Insiders repo, so that you can deploy the site in your local development environment and Netlify.

```
# create new conda environment
(base) ➜ conda create -n mkdocs-material

# activate new environment
(base) ➜ conda activate mkdocs-material

# install pip
(mkdocs-material) ➜ conda install pip

# install mkdocs-material-insiders and dependencies
# (http)
(mkdocs-material) ➜ pip install git+https://github.com/hummingbot/mkdocs-material-insiders.git
# (ssh)
(mkdocs-material) ➜ pip install git+ssh://git@github.com/hummingbot/mkdocs-material-insiders

# install revision date plugin
(base) ➜ pip install mkdocs-git-revision-date-plugin

# build Markdown files into HTML and start local development server
(base) ➜ mkdocs serve

```

#### Cairo dependency

You may need to install [Cairo](https://cairographics.org/download) to run the Insiders build. On MacOS, the easiest way to install Cairo is with [Homebrew](https://brew.sh/):

```
brew install cairo
```

### Regular

You can also generate the site using the normal version of Material for MkDocs:

```
# change to conda base environment since there may be conflicts with other environments like hummingbot
➜ conda activate

# install mkdocs-material and dependencies (HTTPS)
(base) ➜ pip install git+https://github.com/squidfunk/mkdocs-material.git

# install mkdocs-material-insiders and dependencies (SSH)
(base) ➜ pip install git+ssh://git@github.com/squidfunk/mkdocs-material

# install revision date plugin
(base) ➜ pip install mkdocs-git-revision-date-plugin

# build Markdown files into HTML and start local development server
(base) ➜ mkdocs serve

```

## Deployment

The `netlify.toml` file in the root directory contains the instructions used by Netlify to build the site. Make sure to add the `GH_TOKEN` as a build environment variable in Netlify beforehand to use the Insiders build.

If you push your commits to the `docs/staging` branch, Netlify will automatically deploy that branch to a staging site.


## Contributions

We welcome contributions to the Hummingbot documentation by our community!

Please create a new [issue](https://github.com/hummingbot/hummingbot-site/issues) if there are areas of the documentation you would like us to improve, or submit a [pull request](https://github.com/hummingbot/hummingbot-site/pulls) with the proposed change!
