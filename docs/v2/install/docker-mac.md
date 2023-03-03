# Hummingbot via Docker on Mac

## Install Docker Desktop for Mac

Download the Docker installer from the official [Docker page](https://docs.docker.com/desktop/install/mac-install/)

Once Docker is installed **reboot** your computer first before proceeding to the next steps.

This step is **important!**

## Install Hummingbot

!!! note
    If you are using a Mac with Apple Silicon (M1 / M2) chip, after running the `create.sh` script and you get prompted for the version (development / latest) you'll need to specify a specific docker image for ARM devices in this format - `version-x.xx-arm_beta` See [this list](https://hub.docker.com/r/hummingbot/hummingbot/tags?page=1&ordering=last_updated&name=arm) for available ARM versions.

!!! tip
    Click the "Copy to clipboard" icon at the end of the code blocks to easily copy the commands

### Using Helper Scripts

!!! note "Download Helper Scripts here"

    === "Create Script"

        ``` markdown
        wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/docker-commands/create.sh
                
        ```

    === "Start Script"

        ``` markdown
        wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/docker-commands/start.sh
        ```

    === "Update Script"

        ``` markdown
        wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/docker-commands/update.sh
        ```

Enable script permissions

```
chmod a+x *.sh
```

Run the `create` script to launch a Hummingbot instance

```
./create.sh
```

### Manual Method

Create folder for your new instance

```
mkdir hummingbot_files
```

Create folders for logs, config files and database file

```
mkdir hummingbot_files/hummingbot_conf
mkdir hummingbot_files/hummingbot_conf/connectors
mkdir hummingbot_files/hummingbot_conf/strategies
mkdir hummingbot_files/hummingbot_certs
mkdir hummingbot_files/hummingbot_logs
mkdir hummingbot_files/hummingbot_data
mkdir hummingbot_files/hummingbot_scripts
mkdir hummingbot_files/hummingbot_pmm_scripts

```

Launch a new instance of hummingbot

```
docker run -it \
--network host \
--name hummingbot-instance \
--mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_conf,destination=/conf/" \
--mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_logs,destination=/logs/" \
--mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_data,destination=/data/" \
--mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_pmm_scripts,destination=/pmm_scripts/" \
--mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_scripts,destination=/scripts/" \
hummingbot/hummingbot:latest
```

## Additional Resources

The [Hummingbot DockerHub](https://hub.docker.com/r/hummingbot/hummingbot) publishes Docker images for the `master` (latest) and `development` builds of Hummingbot starting with version 1.5.0. For previous versions you may download the docker images from [CoinAlpha's Dockerhub](https://hub.docker.com/r/coinalpha/hummingbot)

:fontawesome-brands-youtube: [Using Docker Compose to launch multiple Hummingbots](https://www.youtube.com/watch?v=LU-4Ui-KCtY)
