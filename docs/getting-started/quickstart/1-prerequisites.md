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

<iframe width="560" height="315" src="https://www.youtube.com/embed/YFl2mCHdv24?si=fCLbxE6VPCZlj0wE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The easiest way to install Docker is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites. Here are links to installers for each major OS:

* [Linux](https://docs.docker.com/desktop/install/linux-install/)
* [Mac](https://docs.docker.com/desktop/install/mac-install/)
* [Windows](https://docs.docker.com/desktop/install/windows-install/)

## What is Docker Compose?

Using Docker for Hummingbot deployment offers several benefits, such as simplifying the installation process, enabling easy versioning and scaling, and ensuring a consistent and isolated environment for running the bot. This repository aims to help users get started with deploying Hummingbot using Docker by providing different examples that demonstrate how to set up and customize the bot according to their needs.

## What is Attaching?

Imagine a Docker container as a little sealed room where a small part of a computer program is running. When you "attach" to this container, it's like you're opening a door to this room and stepping inside while it's buzzing along. Now, from inside, you can see what the program is doing, talk to it or give it new instructions. It's a way to directly interact with this small part of the program in its own isolated space, almost like visiting a tiny, self-contained workshop to see what's happening and maybe give a helping hand.

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

### Pull the latest Dashboard Docker image

```
docker pull hummingbot/dashboard:latest
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
