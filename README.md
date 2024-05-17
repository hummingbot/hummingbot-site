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
pip install mkdocs-git-revision-date-localized-plugin
pip install pillow cairosvg
pip install mkdocs-table-reader-plugin
```

Run site locally at http://localhost:8000:
```
mkdocs serve
```

Build site:
```
mkdocs build
```


## Troubleshooting

If you get this error, it means that the `cairosvg` package was installed, but the underlying `cairocffi` dependency couldn't find the installed library. 

```
no library called "cairo-2" was found
no library called "cairo" was found
no library called "libcairo-2" was found
cannot load library 'libcairo.so.2': error 0x7e.  Additionally, ctypes.util.find_library() did not manage to locate a library called 'libcairo.so.2'
cannot load library 'libcairo.2.dylib': error 0x7e.  Additionally, ctypes.util.find_library() did not manage to locate a library called 'libcairo.2.dylib'
cannot load library 'libcairo-2.dll': error 0x7e.  Additionally, ctypes.util.find_library() did not manage to locate a library called 'libcairo-2.dll'
```

See [Troubleshooting] in the Mkdocs-Material site for how to resolve this issue for your operating system.

## Contributions

We welcome contributions to the Hummingbot documentation by our community! See [Contributing](./CONTRIBUTING.md) for more information.

To suggest changes, please create a new [issue](https://github.com/hummingbot/hummingbot-site/issues) or submit a [pull request](https://github.com/hummingbot/hummingbot-site/pulls) with the proposed change!
