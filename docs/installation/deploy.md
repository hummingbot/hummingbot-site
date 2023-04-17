The [`deploy-examples`](https://github.com/hummingbot/deploy-examples) Github repository provides various examples of how to deploy Hummingbot using Docker Compose, a tool for defining and running multi-container Docker applications.

## Getting Started

### Install Docker Compose

We recommended installing [Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.

Docker Desktop is available on:

* [Linux](https://docs.docker.com/desktop/install/linux-install/)
* [Mac](https://docs.docker.com/desktop/install/mac-install/)
* [Windows](https://docs.docker.com/desktop/install/windows-install/)
 
Afterwards, run the following command in Terminal/Bash to check that you have installed Docker Compose successfully:
```
docker compose
```

You should see a response that start with:
```
Usage:  docker compose [OPTIONS] COMMAND
```

### Clone `deploy-examples` repo

Clone the repo to the machine where you want to deploy Hummingbot:
```
git clone https://github.com/hummingbot/deploy-examples.git
```

It contains folders that help you deploy different Hummingbot configurations, such as:

* A single Hummingbot instance
* A single Hummingbot instance that auto-starts a strategy or script
* Linked Hummingbot and Gateway instances
* Multiple instances of Hummingbot

Each folder contains two important files:

* `docker-compose.yml`: The sample configuration file for that deployment type
* `README.md`: Detailed deployment instructions


### Enabling read/write permissions

During the installation process, Docker Compose will create `hummingbot_files` and `gateway_files` folders where your encrypted keys, scripts, trades, configs, logs, and other files related to your bots will be saved.

You may need to grant read and write access to the sub-folders created by Docker Compose that store your local files:
```
sudo chmod -R a+rw ./hummingbot_files ./gateway_files
```

### For Apple M1/M2 and other ARM machines

If you have a recent Mac that uses Apple Silicon (M1/M2) chipset or another ARM-based machine, you need to change the image tags in the `docker-compose.yml` file to ensure that you pull a container that is optimized for your chip architecture.

Use an IDE like VSCode to edit the `docker-compose.yml` file. Change the the image tag from `latest` to `latest-arm` to pull the image built for ARM-based machines. 

You can also comment out the lines that contains `latest` and uncomment the lines that contains `latest-arm`, so that the file looks like this:

```yaml
# image: hummingbot/hummingbot:latest
image: hummingbot/hummingbot:latest-arm

# image: hummingbot/gateway:latest
image: hummingbot/gateway:latest-arm
```

## Deployment Types

### [Single Hummingbot Instance](https://github.com/hummingbot/deploy-examples/tree/development/simple_hummingbot_compose)

This installs a single [Hummingbot](https://github.com/hummingbot/hummingbot) instance as a Docker container. Click the link above or follow the instructions below.

From the `deploy_examples` root directory, go to the folder that contains this configuration:
```
cd simple_hummingbot_compose
```

Run the following command to pull the image and start the instance:
```
docker compose up -d
```

After the images have been downloaded, you should see the following output:
```
[+] Running 1/1
 ⠿ Container hummingbot  Started 
```

Attach to the instance:
```
docker attach hummingbot
```

You should see the Hummingbot welcome screen:

![](/assets/img/welcome.png)

### [Autostart Hummingbot Instance](https://github.com/hummingbot/deploy-examples/tree/development/autostart_hummingbot_compose)

This installs a single [Hummingbot](https://github.com/hummingbot/hummingbot) instance as a Docker container and automatically starts running a pre-configured script or strategy. Click the link above for the installation instructions.

### [Hummingbot + Gateway Instances](https://github.com/hummingbot/deploy-examples/tree/development/hummingbot_gateway_compose)

This installs a [Hummingbot](https://github.com/hummingbot/hummingbot) instance linked to a [Hummingbot Gateway](https://github.com/hummingbot/gateway) instance. Click the link above for the installation instructions.

### [Multiple Hummingbot Instances + Gateway](https://github.com/hummingbot/deploy-examples/tree/development/multiple_hummingbot_gateway_compose)

This installs two [Hummingbot](https://github.com/hummingbot/hummingbot) instances, linked to a single [Hummingbot Gateway](https://github.com/hummingbot/gateway) instance. Click the link above for the installation instructions.

### [Hummingbot + Gateway + EMQX Broker](https://github.com/hummingbot/deploy-examples/tree/development/hummingbot_gateway_broker_compose)

This installs a [Hummingbot](https://github.com/hummingbot/hummingbot) instance linked to a [Hummingbot Gateway](https://github.com/hummingbot/gateway) instance, along with an EMQX [Broker](https://github.com/hummingbot/brokers). Click the link above for the installation instructions.

!!! note "Experimental deployment"
    This deployment is still undergoing testing, so we recommend using the standalone deployments for message brokers from the [hummingbot/brokers](https://github.com/hummingbot/brokers) repository.

## [Bash scripts (older)](https://github.com/hummingbot/deploy-examples/tree/development/bash_scripts)

We also maintain standalone bash scripts can also assist you to setting up Hummingbot and Gateway with Docker.

The following operations are possible using the bash scripts:

* Create a Hummingbot container
* Update the Hummingbot image version
* Start a stopped container of Hummingbot
* Create a Gateway container
* Copy the certificates to the corresponding gateway path

Click the link above for the installation instructions.

## Useful Docker Commands

Use the commands below or use the Docker Desktop application to manage your containers:

### Create the Compose project
```
docker compose up -d
```

### Stop the Compose project
```
docker compose down
```

### Update the Compose project for the latest images
```
docker compose up --force-recreate --build -d
```

### Give all users read/write permissions to local files
```
sudo chmod 666 *.*
```

### Attach to the container
```
docker attach <container-name>
```

### Detach from the container and return to command line

Press keys <kbd>Ctrl</kbd> + <kbd>P</kbd> then <kbd>Ctrl</kbd> + <kbd>Q</kbd>

### List all containers
```
docker ps -a
```

### Stop a container
```
docker stop <container-name>
```

### Remove a container
```
docker rm <container-name>
```