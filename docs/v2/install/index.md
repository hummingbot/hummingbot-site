Hummingbot is a local software client that helps you run trading strategies that automate the execution of orders and trades on various cryptocurrency exchanges and protocols.

## Releases

Hummingbot's code is publicly hosted at <https://github.com/hummingbot/hummingbot>, and the `development` branch is continually updated.

Approximately once a month, we publish an official release of Hummingbot onto the `master` branch. See [Releases](https://github.com/hummingbot/hummingbot/releases).

## Installation options

### 🌎 Test Drive

Try out Hummingbot in your web browser without installing anything! Visit the [Test Drive](https://hummingbot.io/test-drive/) page on our website.

### 🐳 Docker

Our [DockerHub](https://hub.docker.com/r/hummingbot/hummingbot) publishes Docker images for the `master` (latest) and `development` builds of Hummingbot starting with version 1.5.0. For previous versions you may download the docker images from [CoinAlpha's Dockerhub](https://hub.docker.com/r/coinalpha/hummingbot)

We recommend this path for users who run Hummingbot on Linux, in the cloud, and/or multiple bots.

Read the Docker installation guide: [Install Hummingbot on Docker](./docker-windows.md)

### 🛠️ Source

Install Hummingbot from source, including all dependencies.

We recommend this path for **developers** who want to customize Hummingbot's behavior or to build new connectors and strategies.

Read the source installation guide: [Install Hummingbot from Source](./source-windows.md)

### 🍓 Raspberry Pi

Hummingbot doesn't require much power, so some users have run successfully run multiple instances on a single Raspberry Pi. We maintain an **experimental** build that shows users how to do this.

[Install on Raspberry Pi](./raspberry-pi)

## System requirements

Hummingbot has been successfully tested with the following specifications:

| Resource             | Requirement                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Operating System** | **Linux**: Ubuntu 18.04 or later (recommended) \*Other Linux installations: Debian GNU/Linux 9, CentOS 7, Amazon Linux 2 AMI |
|                      | **MacOS**: macOS 10.12.6 (Sierra) or later                                                                                   |
|                      | **Windows**: Windows 10 or later                                                                                             |
| **Memory/RAM**       | **4 GB or higher**
| **Storage**          | **Install using Docker**: 5 GB per instance                                                                                  |
|                      | **Install from source**: 3 GB per instance                                                                                   |
| **Network**          | A reliable internet connection is critical to keeping Hummingbot connected to exchanges.                                     |

## 📺 Videos and Guides

:fontawesome-brands-youtube: [Test Drive walkthrough](https://www.youtube.com/watch?v=8j4T3HEAML8&t=20s)

:fontawesome-brands-youtube: [Installation Guides playlist](https://www.youtube.com/playlist?list=PLDwlNkL_4MMc1GxjWShinaX4FQCxgOkyO)
