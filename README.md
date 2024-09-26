# Hummingbot website and documentation

Welcome to the official website and documentation for Hummingbot and the Hummingbot Foundation!

## Installation

This documentation site uses [MkDocs](https://www.mkdocs.org/) documentation-focused static site engine, along with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme, of which Hummingbot is a proud sponsor.

The deployed site at https://hummingbot.org uses the [Insiders build](https://squidfunk.github.io/mkdocs-material/insiders/) of MkDocs-Material, which features experimental features like tags and social cards. For site editors, please request access to the CoinAlpha fork of the Insiders repo, so that you can deploy the site in your local development environment and Netlify.

Create new `hummingbot-site` conda environment:
```
conda create -n hummingbot-site
```

Activate new environment:
```
conda activate hummingbot-site
```

Install `pip`:

```
conda install pip
```

Install dependencies:
```bash
pip install git+ssh://git@github.com/hummingbot/mkdocs-material-insiders  # fetch via SSH
# pip install git+https://github.com/hummingbot/mkdocs-material-insiders.git  # fetch via SSH
pip install mkdocs-git-revision-date-plugin mkdocs-charts-plugin
pip install pillow cairosvg
```

## Running local site

Run site locally at http://localhost:8000:
```bash
mkdocs serve
```

To run the site on a different port, such as 8080:
```bash
mkdocs serve --dev-addr=127.0.0.1:8080
```

Build site for production:
```bash
mkdocs build
```


## Contributions

We welcome contributions to the Hummingbot documentation by our community! See [Contributing](./CONTRIBUTING.md) for more information.

To suggest changes, please create a new [issue](https://github.com/hummingbot/hummingbot-site/issues) or submit a [pull request](https://github.com/hummingbot/hummingbot-site/pulls) with the proposed change!
