<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/t3Su_F_SY_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We recommend installing Hummingbot using Docker if:

* You want the simplest, easiest installation method
* You don't need to modify the Hummingbot codebase
* You want to deploy Hummingbot alongside with Dashboard, Orchestation Module, and other advanced configurations

The instructions below help you install Hummingbot and its companion modules using Docker. Using Docker for Hummingbot deployment offers several benefits, such as simplifying the installation process, enabling easy versioning and scaling, and ensuring a consistent and isolated environment for running the bot.

## What Machine Do I Need?

* You don't need a huge machine
* What OS are supported
* Basic memory and storage requirements
* Link to system requirements

## What is Docker?

[Add intro video]

The easiest way to install Docker is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites. Here are links to installers for each major OS:

* [Linux](https://docs.docker.com/desktop/install/linux-install/)
* [Mac](https://docs.docker.com/desktop/install/mac-install/)
* [Windows](https://docs.docker.com/desktop/install/windows-install/)

## What is Docker Compose?

Using Docker for Hummingbot deployment offers several benefits, such as simplifying the installation process, enabling easy versioning and scaling, and ensuring a consistent and isolated environment for running the bot. This repository aims to help users get started with deploying Hummingbot using Docker by providing different examples that demonstrate how to set up and customize the bot according to their needs.

## What is Attaching?

## Basic Docker Commands

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

