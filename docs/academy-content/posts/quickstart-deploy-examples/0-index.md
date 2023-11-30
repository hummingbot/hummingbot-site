---
date: 2023-03-30
authors:
  - fede
categories:
  - Quickstart Guides
tags:
  - Quickstart - Using Deploy-Examples
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

Once Docker is installed, we can proceed with the next steps!

## Download the `deploy-examples` Repository

Run the following command in the terminal:

```bash
git clone https://github.com/hummingbot/deploy-examples
```

Alternatively, you can download just the `docker-compose.yml` file without the entire `deploy-examples` repo using this command:

```bash
curl -LO https://github.com/hummingbot/deploy-examples/raw/main/simple_hummingbot_compose/docker-compose.yml
```

## Switch to the **simple_hummingbot_compose** folder

The **deploy-examples** repository contains several folders, each with different compose files for various scenarios (e.g., using autostart, Hummingbot with Gateway, etc.). For now, we will focus on the **simple_hummingbot_compose** example. Use the following command to switch to the **simple_hummingbot_compose** folder:

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

