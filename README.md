# Hummingbot website and documentation

Welcome to the official website and documentation for Hummingbot and the Hummingbot Foundation!

## Installation

This documentation site uses [MkDocs](https://www.mkdocs.org/) documentation-focused static site engine, along with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme, of which Hummingbot is a proud sponsor.

The deployed site at https://hummingbot.org uses the [Insiders build](https://squidfunk.github.io/mkdocs-material/insiders/) of MkDocs-Material, which features experimental features like tags and social cards. For site editors, please request access to the Hummingbot fork of the Insiders repo, so that you can deploy the site in your local development environment and Netlify.

### 1. Clone Repository and Navigate to Directory:
```
git clone https://github.com/hummingbot-site.git
cd hummingbot-site
```

### 2. Create Conda Environment and Install Dependencies:
```
make env_create
```

### 3. Activate the Isolated 'conda' Environment:
```
conda activate hummingbot-site
```

### 4. Start the Local Docs Server
```
make run
```

Now, the docs should be accessible locally at http://localhost:8000:


## Troubleshooting

If you get the error below, it means that the `cairosvg` package was installed, but the underlying `cairocffi` dependency couldn't find the installed library. 

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
