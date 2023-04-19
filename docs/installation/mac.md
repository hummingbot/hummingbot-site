<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/_10M9uJan3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Apple M1/M2 Docker image

If you have a recent Mac that uses Apple Silicon (M1/M2) chipset or another ARM-based machine, you need to change the image tag to ensure that you pull a container that is optimized for your chip architecture.

Use an IDE like VSCode to edit the `docker-compose.yml` file. Change the the image tag from `latest` to `latest-arm` to pull the image built for ARM-based machines. You can also comment out the line that contains `latest` and uncomment the line that contains `latest-arm`:

```bash
# image: hummingbot/hummingbot:latest
image: hummingbot/hummingbot:latest-arm
```

If you are using a Mac with an Intel (x86) chipset, Windows or any other Intel-based machine, you don't need to make any changes before deploying a container.

Follow the instructions on [Install from Source](./source.md).

## XCode Command Line Tools

[Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) are required for installing Hummingbot from source on Mac OS.

You can run the following command from Terminal to install them:

```
➜ xcode-select --install
```

## Apple M1/M2 and Conda

Make sure that you download the M1 versions of [Miniconda](https://docs.conda.io/en/latest/miniconda.html).

You may need to regenerate a Hummingbot conda environment optimized for Intel-based Macs:

```bash
# Deactivate the environment if you're in it
conda deactivate

# Remove the envionment
conda env remove -n hummingbot

# Creates the hummingbot environment and enforces python 3.8.2 and initialize a environment variable used to determine the processor packages to use
CONDA_SUBDIR=osx-64 conda create -n hummingbot python=3.8.2

# Activate the new environment
conda activate hummingbot

# Configures environment to use intel-based packages
conda config --env --set subdir osx-64

# Start Hummingbot
(hummingbot) ➜ bin/hummingbot.py
```
