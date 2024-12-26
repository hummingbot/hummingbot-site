# Hummingbot website and documentation

Welcome to the official website and documentation for Hummingbot and the Hummingbot Foundation!

## Installation

This documentation site uses [MkDocs](https://www.mkdocs.org/) documentation-focused static site engine, along with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme, of which Hummingbot is a proud sponsor.

The deployed site at https://hummingbot.org uses the [Insiders build](https://squidfunk.github.io/mkdocs-material/insiders/) of MkDocs-Material, which features experimental features like tags and social cards. 

```
  - pip:
    - git+ssh://git@github.com/hummingbot/mkdocs-material-insiders
```

Create and activate new `hummingbot-site` conda environment using the environment file:
```bash
conda env create -f environment.yml
```

For core site editors, please request access to the Insiders repo, so that you can deploy the site in your local development environment. You also comment out the following lines in `environment.yml`:

```
  - pip:
    - git+ssh://git@github.com/hummingbot/mkdocs-material-insiders
```

Activate the environment:
```bash
conda activate hummingbot-site
```

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
