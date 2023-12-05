---
date: 2023-12-11
authors:
  - foundation
categories:
  - Quickstart Guides
tags:
  - Docker Installation Guide
---

# Docker Installation Guide

## Prerequisites

### Installing Docker

To use Docker, it must first be installed on your system. Follow the instructions below according to your operating system.

#### For Linux and Windows Users

- **Note for Windows Users:** Ensure that WSL2 is installed to access an Ubuntu terminal.
- Execute the following commands in your terminal:

  ```bash
  curl -fsSL https://get.docker.com -o get-docker.sh
  sudo sh get-docker.sh
  sudo usermod -aG docker $USER
  ```

#### For Mac Users (Both Intel and Apple Silicon)

- Download and install the Docker Desktop application:
  - [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop)

Once Docker is installed on your system, you're ready to move on to using it with the **deploy-examples** repository.

## Download the [deploy-examples](https://github.com/hummingbot/deploy-examples) repository

In your terminal, clone the deploy-examples repository:

```bash
git clone https://github.com/hummingbot/deploy-examples
```

Alternatively, you can download just the `docker-compose.yml` file without the entire `deploy-examples` repo using this command:

```bash
curl -LO https://github.com/hummingbot/deploy-examples/raw/main/simple_hummingbot_compose/docker-compose.yml
```

## Switch to the **simple_hummingbot_compose** folder

The **deploy-examples** repository contains several folders, each with different compose files for various scenarios (e.g., using autostart, Hummingbot with Gateway, etc.). For now, we will focus on the **simple_hummingbot_compose** example. 

Use the following command to change your current working directory to the correct folder:

```bash
cd deploy-examples/simple_hummingbot_compose
```

## Start the Docker Compose File

Use the following command to create the **simple_hummingbot_compose** Docker container:

```bash
docker compose up -d
```

This will start the container in the background and we'll need to `attach` to it to be able to send commands to it. Run the following command below:

```bash
docker attach hummingbot
```

We should now have Hummingbot running and in the next section we'll go over the Hummingbot Interface 

[Hummingbot Interface](1-hb-interface.md){ .md-button .md-button--primary }

