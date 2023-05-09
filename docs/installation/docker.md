We recommend installing Hummingbot using Docker if:

* You want the simplest, easiest installation method
* You don't need to modify the Hummingbot codebase
* You want to deploy Hummingbot alongside with Dashboard, Orchestation Module, and other advanced configurations

The instructions below help you install Hummingbot and its companion modules using Docker. Using Docker for Hummingbot deployment offers several benefits, such as simplifying the installation process, enabling easy versioning and scaling, and ensuring a consistent and isolated environment for running the bot.

## Prequisites

### Docker

The easiest way to install Docker is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites. Here are links to installers for each major OS:

* [Linux](https://docs.docker.com/desktop/install/linux-install/)
* [Mac](https://docs.docker.com/desktop/install/mac-install/)
* [Windows](https://docs.docker.com/desktop/install/windows-install/)

For command-line Linux distributions, you can install Docker Engine following the steps below:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

Once you've executed the aforementioned commands, be sure to `exit` the terminal and log out, then log back in to ensure the changes are applied.

### Docker Compose

If you installed Docker Desktop, it already comes with Docker Compose. Alternatively, you can install Docker Compose on a standalone basis:

**Linux (Ubuntu / Debian)**

```bash
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

--- 

Afterwards, verify that Docker Compose is installed correctly by checking the version:

```
docker compose version
```

The output should be: `Docker Compose version v2.17.2` or similar. Ensure that you are using Docker Compose V2, as V1 is deprecated.


## Deploy Examples

The [`deploy-examples`](https://github.com/hummingbot/deploy-examples) Github repository provides various examples of how to deploy Hummingbot using Docker Compose, a tool for defining and running multi-container Docker applications. 

Clone the repo to the machine where you want to deploy Hummingbot:
```
git clone https://github.com/hummingbot/deploy-examples.git
```

This is where your encrypted keys, scripts, trades, configs, logs, and other files related to your bots will be saved. The repo contains various sub-folders that help you deploy different Hummingbot configurations, such as:

* A single Hummingbot instance
* A single Hummingbot instance that auto-starts a strategy or script
* Linked Hummingbot and Gateway instances
* Multiple instances of Hummingbot

Each sub-folder contains two important files:

* `docker-compose.yml`: The sample configuration file for that deployment type
* `README.md`: A detailed README file that guides users through the steps required to deploy Hummingbot using Docker, including how to build and run the containers, how to configure the bot, and how to monitor its performance.

After you have configured it properly, each deployment can be launched with the command:
```
docker compose up -d
```

## Deployment Types

Please click the links below for the deployment instructions for each configuration.

### [Single Hummingbot Instance](https://github.com/hummingbot/deploy-examples/tree/main/simple_hummingbot_compose)

This installs a single Hummingbot instance as a Docker container.

**⭐️⭐️⭐️ We recommend that new Hummingbot users follow this route ⭐️⭐️⭐️**

### [Autostart Hummingbot Instance](https://github.com/hummingbot/deploy-examples/tree/main/autostart_hummingbot_compose)

This installs a single Hummingbot instance as a Docker container and automatically starts running a pre-configured script or strategy.

### [Hummingbot + Gateway Instances](https://github.com/hummingbot/deploy-examples/tree/main/hummingbot_gateway_compose)

This installs a Hummingbot instance linked to a Gateway instance.

### [Multiple Hummingbot Instances + Gateway](https://github.com/hummingbot/deploy-examples/tree/main/multiple_hummingbot_gateway_compose)

This installs two Hummingbot instances, linked to a single Gateway instance.

### [Hummingbot + Gateway + EMQX Broker](https://github.com/hummingbot/deploy-examples/tree/main/hummingbot_gateway_broker_compose)

This installs a Hummingbot instance linked to a Gateway instance, along with an EMQX Broker instance.

!!! note "Experimental deployment"
    This deployment is still undergoing testing, so we recommend using the standalone deployments for message brokers from the [hummingbot/brokers](https://github.com/hummingbot/brokers) repository.

## Bash Scripts

This is the older method of installing Hummingbot using Docker. You can access the scripts from the [`/bash_scripts`](https://github.com/hummingbot/deploy-examples/tree/main/bash_scripts) folder in the Deploy Examples repo.

Afterwards, enable script permissions:
```
sudo chmod a+x *.sh
``` 

Then, run the script you need. For example, you can create a new Hummingbot instance by running:
```
./hummingbot-create.sh
```

## Building Docker Images

To build an image for a **specific architecture**, use the `docker build` command with the `--platform` flag.

To build an image that is compatible with **multiple architectures**, use the `docker buildx` command. Additionally, Docker Buildx allows you to easily build and test images for different architectures locally, and then push the multiarch image to a registry, simplifying the deployment process.

### docker build

Here is how to build a Hummingbot Docker image using `docker build`:

**1. Go to the Hummingbot folder**
```
cd hummingbot
```

**2. Build the image**
```
docker build -t myimage:latest .
```

**3. Before pushing an image, you must first tag it with the appropriate name and version using the docker tag command**
 
``` 
docker tag myimage myusername/myimage:[tag]
```

**4. Push the image to DockerHub**

```
docker push myusername/myimage:[tag]
```

### docker buildx

Here is how to build a multi-architecture Hummingbot Docker image using `docker buildx`:

**1. Go to the Hummingbot folder**
```
cd hummingbot
```

**2. Check if buildx is installed**
```
docker buildx version
```

**3. Create Builder**
```
docker buildx create --name multiarch --platform linux/arm64,linux/amd64
```

**4. Switch to the new builder instance**
```
docker buildx use multiarch
```

**5. Inspect the builder instance**
```
docker buildx inspect --bootstrap
```

The output should show both arm64 and amd64 platforms in the `Platforms` field.

**6. Build the image and push to Dockerhub**
```
docker buildx build --platform linux/amd64,linux/arm64 --tag myusername/myimage:[tag] --push .
```

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
sudo chmod -R a+rw <files/folders>
```

### Attach to the container
```
docker attach <container-name>
```

### Detach from the container and return to command line

Press keys <kbd>Ctrl</kbd> + <kbd>P</kbd> then <kbd>Ctrl</kbd> + <kbd>Q</kbd>


### Update the container to the latest image
```
docker compose up --force-recreate --build -d
```

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
