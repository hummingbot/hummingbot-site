## Install the Hummingbot Client

Hummingbot is a local software client that helps you run trading strategies that automate the execution of orders and trades on various cryptocurrency exchanges and protocols.

### Install with Docker

We recommend installing Hummingbot using Docker if you want the simplest, easiest installation method and don't need to modify the Hummingbot codebase.

Prerequisites:

* MacOS 10.12.6+ / Linux (Ubuntu 20.04+, Debian 10+) / Windows 10+
* Memory: 4 GB RAM per instance + 250 MB for additional instance on same machine
* Storage: 5 GB HDD space per instance
* Install [Docker Compose](https://docs.docker.com/compose/)

```
git clone https://github.com/hummingbot/hummingbot
cd hummingbot
docker compose up -d
docker attach hummingbot
```

See [Install from Docker](/installation/docker/) for a more detailed walkthrough.

### Install from Source

We recommend installing Hummingbot from source if you want to customize or extend the Hummingbot codebase, build new components like connectors or strategies, and/or learn how Hummingbot works at a deeper, technical level.

Prerequisites:

* MacOS 10.12.6+ / Linux (Ubuntu 20.04+, Debian 10+)
* Memory: 4 GB RAM per instance
* Storage: 3 GB HDD space per instance
* Install [Anaconda](https://www.anaconda.com/download) or [Miniconda](https://docs.anaconda.com/free/miniconda/miniconda-install/)

```
git clone https://github.com/hummingbot/hummingbot
cd hummingbot
./install
conda activate hummingbot
./compile
./start
```

See below for more detailed walkthrough for various environments:

* [Linux](./linux.md)
* [Windows](./windows.md)
* [MacOS](./mac.md)
* [Raspberry Pi](./raspberry-pi.md)

## Configure and Run V2 Strategies

New to Hummingbot? Start here with step-by-step guides for various use cases:

- V2 Strategy video 1

- V2 Strategy video 2

- V2 Strategy video 3

## Get Help from the Community

Hummingbot features an active, friendly community of users globally! Here are some ways to get help if you're encountering issues:

- Check out the [FAQ](../faq.md), [Troubleshooting](../troubleshooting.md), and [Glossary](../glossary.md) pages for answers to common questions about Hummingbot
- See [Academy](../academy/index.md) for a collection of free resources that help you understand the basics of algo trading and market making.
- To report a bug or request a new feature, post a [Github issue](https://github.com/hummingbot/hummingbot/issues/new/choose).
- Join the official [Discord](https://discord.gg/hummingbot) and post your question on **#support**

We pledge that we will not use the information/data your provide us for trading purposes nor share them with third parties.

## Master Algo Trading with Botcamp

Take [Botcamp](/botcamp) to learn professional-grade market making and algo trading!
