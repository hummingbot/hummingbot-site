---
date: 2023-12-11
authors:
  - foundation
categories:
  - Quickstart Guides
tags:
  - Docker Installation Guide
---

# Docker Installation Guide - 1 - Installation

## System Prerequisites

Hummingbot runs on commodity hardware and does not require much memory or storage.

* MacOS 10.12.6+ / Linux (Ubuntu 20.04+, Debian 10+) / Windows 10+
* Memory: 4 GB RAM per instance
* Storage: 5 GB HDD space per instance

## Install Docker

### For Windows Users

Hummingbot requires [Windows Subsystem for Linux 2](https://learn.microsoft.com/en-us/windows/wsl/about) (WSL2).

Install Linux on your Windows system: https://learn.microsoft.com/en-us/windows/wsl/install.

Afterwards, execute the following commands in your terminal to install Docker:
  ```bash
  curl -fsSL https://get.docker.com -o get-docker.sh
  sudo sh get-docker.sh
  sudo usermod -aG docker $USER
  ```

### For Mac Users

The easiest and recommended way to get Docker Compose is to install Docker Desktop. Docker Desktop includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.

Download and install the [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop). 

### For Linux Users

If you already have Docker Engine and Docker CLI installed, you can install the Compose plugin from the command line:

```
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

## Clone Hummingbot Repo

In your terminal, clone the Hummingbbot Githug repository:

```bash
git clone https://github.com/hummingbot/hummingbot
```

## Create Container

The `docker-compose.yml` file contains the basic instructions to deploy Humminggbot:

Use the following command to create the Docker container:

```bash
docker compose up -d
```

This will start the container in the background and we'll need to `attach` to it to be able to send commands to it. Run the following command below:

## Attach to Container

```bash
docker attach hummingbot
```

We should now have Hummingbot running and in the next section we'll go over the Hummingbot Interface 

[2. Hummingbot Interface](2-hb-interface.md){ .md-button .md-button--primary }

