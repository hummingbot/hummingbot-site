We recommend installing Hummingbot using Docker if you want the simplest, easiest installation method and don't need to modify the Hummingbot codebase.

## Prerequisites

Hummingbot runs on commodity hardware and does not require much memory or storage.

* **Operating System**: MacOS 10.12.6+ / Linux (Ubuntu 20.04+, Debian 10+) / Windows 10+
* **Memory**: 4 GB RAM per instance
* **Storage**: 5 GB HDD space per instance

## Installation Process

### 1. Install Docker Compose

Hummingbot uses [Docker Compose](https://docs.docker.com/compose/), a tool for defining and running multi-container Docker applications. 

The recommended way to get Docker Compose is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.

For command line instructions and other helpful commands, see [this page](https://github.com/hummingbot/deploy-examples/blob/main/DOCKER.md) in our Deploy-Examples repo.

!!! note "For Windows users"
    To install Docker on Windows, [Windows Subsystem for Linux 2](https://learn.microsoft.com/en-us/windows/wsl/about) is needed. Follow this link to install WLS2 on your Windows system: https://learn.microsoft.com/en-us/windows/wsl/install.


Afterwards, verify that Docker Compose is installed correctly by checking the version:

```bash
docker compose version
```

The output should be: `Docker Compose version v2.17.2` or similar. Ensure that you are using Docker Compose V2, as V1 is deprecated.

### 2. Clone Repo

Enter the following commands in Bash/Terminal to clone the Hummingbot Github repo and enter the root folder:
```bash
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
```

### 3. Pull Image

The `docker-compose.yml` file in the root folder provides a basic configuration for launching an instance.

```yaml
version: "3.9"
services:
  hummingbot:
    container_name: hummingbot
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./conf:/home/hummingbot/conf
      - ./conf/connectors:/home/hummingbot/conf/connectors
      - ./conf/strategies:/home/hummingbot/conf/strategies
      - ./conf/controllers:/home/hummingbot/conf/controllers
      - ./conf/scripts:/home/hummingbot/conf/scripts
      - ./logs:/home/hummingbot/logs
      - ./data:/home/hummingbot/data
      - ./certs:/home/hummingbot/certs
      - ./scripts:/home/hummingbot/scripts
      - ./controllers:/home/hummingbot/controllers
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
    tty: true
    stdin_open: true
    network_mode: host
    #  environment:
    #    - CONFIG_PASSWORD=a
    #    - CONFIG_FILE_NAME=simple_pmm_example.py
    #    - SCRIPT_CONFIG=conf_simple_pmm_example.yaml
```

You will be able to modify this file and uncomment lines in order to automatically enter your pasword and start strategies. For now, we can use it as-is. 

Run the following command to pull the image and start the instance:

```bash
docker compose up -d
```

After the images have been downloaded, you should see the following output:

```bash
[+] Running 1/1
 ⠿ Container hummingbot  Started 
```

### 4. Attach to Instance

The `-d` flag runs Hummingbot in detached mode. Attach to it by running the command:

```bash
docker attach hummingbot
```

You should now see the Hummingbot welcome screen:

![welcome screen](/assets/img/welcome.png)

To get started with Hummingbot, check out the following pages and guides:

* [Basic Features](/client/)
* [V2 Strategy Walkthough](/v2-strategies/walkthrough/)
* [Hummingbot FAQ](/faq/)

## Advanced Configurations

We maintain the [Deploy Examples](https://github.com/hummingbot/deploy-examples) repo that provides advanced examples of how to deploy Hummingbot:

* Auto-starting strategies
* Running Hummingbot with Gateway
* Running multiple bots with Broker
