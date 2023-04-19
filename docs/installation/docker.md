## Docker Compose

Using Docker Compose for Hummingbot deployment offers several benefits, such as simplifying the installation process, enabling easy versioning and scaling, and ensuring a consistent and isolated environment for running the bot.

The recommended way to get Docker Compose is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.

Docker Desktop is available on:

* [Linux](https://docs.docker.com/desktop/install/linux-install/)
* [Mac](https://docs.docker.com/desktop/install/mac-install/)
* [Windows](https://docs.docker.com/desktop/install/windows-install/)
 
Afterwards, run the following command in Terminal/Bash to check that you have installed Docker Compose successfully:
```
docker compose
```

If you have installed Docker Compose successfully, you should see a response like:
```
Usage:  docker compose [OPTIONS] COMMAND

Docker Compose

Options:
      --ansi string                Control when to print ANSI control characters ("never"|"always"|"auto") (default "auto")
      --compatibility              Run compose in backward compatibility mode
      --env-file string            Specify an alternate environment file.
  -f, --file stringArray           Compose configuration files
      --parallel int               Control max parallelism, -1 for unlimited (default -1)
      --profile stringArray        Specify a profile to enable
      --project-directory string   Specify an alternate working directory
                                   (default: the path of the, first specified, Compose file)
  -p, --project-name string        Project name
```

## Deploy Examples

The [`deploy-examples`](https://github.com/hummingbot/deploy-examples) Github repository provides various examples of how to deploy Hummingbot using Docker Compose. It aims to help users get started with deploying Hummingbot using Docker by providing different examples that demonstrate how to set up and customize the bot according to their needs.

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
* `README.md`: Detailed deployment instructions for that deployment type

Please click the links below for the deployment instructions for each configuration.

### [Single Hummingbot Instance](https://github.com/hummingbot/deploy-examples/tree/master/simple_hummingbot_compose)

This installs a single Hummingbot instance as a Docker container.

**⭐️⭐️⭐️ We recommend that new Hummingbot users follow this route ⭐️⭐️⭐️**

### [Autostart Hummingbot Instance](https://github.com/hummingbot/deploy-examples/tree/master/autostart_hummingbot_compose)

This installs a single Hummingbot instance as a Docker container and automatically starts running a pre-configured script or strategy.

### [Hummingbot + Gateway Instances](https://github.com/hummingbot/deploy-examples/tree/master/hummingbot_gateway_compose)

This installs a Hummingbot instance linked to a Gateway instance.

### [Multiple Hummingbot Instances + Gateway](https://github.com/hummingbot/deploy-examples/tree/master/multiple_hummingbot_gateway_compose)

This installs two Hummingbot instances, linked to a single Gateway instance.

### [Hummingbot + Gateway + EMQX Broker](https://github.com/hummingbot/deploy-examples/tree/master/hummingbot_gateway_broker_compose)

This installs a Hummingbot instance linked to a Gateway instance, along with an EMQX Broker instance.

!!! note "Experimental deployment"
    This deployment is still undergoing testing, so we recommend using the standalone deployments for message brokers from the [hummingbot/brokers](https://github.com/hummingbot/brokers) repository.

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
