We recommend installing Hummingbot using Docker if:

* You want the simplest, easiest installation method
* You don't need to modify the Hummingbot codebase
* You want to deploy Hummingbot alongside with Dashboard, Orchestation Module, and other advanced configurations

## Prerequisites

* MacOS 10.12.6+ / Linux (Ubuntu 20.04+, Debian 10+) / Windows 10+
* Memory: 4 GB RAM per instance
* Storage: 5 GB HDD space per instance
* Install [Docker Compose](https://docs.docker.com/compose/)

## Installation Process

```
git clone https://github.com/hummingbot/hummingbot
cd hummingbot
docker compose up -d
docker attach hummingbot
```

Follow the [Docker Installation Guide](/academy-content/docker-installation-guide/) for a detailed walkthrough.

## Deploy Examples Repo

The [`deploy-examples`](https://github.com/hummingbot/deploy-examples) Github repository provides various examples of how to deploy Hummingbot using Docker Compose, a tool for defining and running multi-container Docker applications. 

Clone the repo to the machine where you want to deploy Hummingbot:
```
git clone https://github.com/hummingbot/deploy-examples.git
```

Each sub-folder contains two important files:

* `docker-compose.yml`: The sample configuration file for that deployment type
* `README.md`: A detailed README file that guides users through the steps required to deploy Hummingbot using Docker, including how to build and run the containers, how to configure the bot, and how to monitor its performance.

After you have configured it properly, each deployment can be launched with the command:
```
docker compose up -d
```


Check out the [Deploy Examples Guide](../academy-content/posts/quickstart-deploy-examples/0-index.md): Guide on how to use the `deploy-examples` repo
