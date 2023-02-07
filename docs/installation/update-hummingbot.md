## Docker

Hummingbot is regularly updated each month (see [Release Notes](/release-notes/)) and recommends users to periodically update their installations to get the latest version of the software.

Updating to the latest docker image (e.g. `hummingbot/hummingbot:latest`)

!!! note
    Make sure to stop all the containers using the same image first  before running the `./update.sh` script.

=== "Scripts"

    ```bash
    # 1) Remove old scripts
    rm -rf *.sh

    # 2) Download update script
    wget https://raw.githubusercontent.com/hummingbot/hummingbot/development/installation/docker-commands/update.sh

    # 3) Enable script permissions
    chmod a+x update.sh

    # 4) Run script to update hummingbot
    ./update.sh
    
    ```

=== "Manual"

    ```bash
    # 1) Delete instance
    docker rm hummingbot-instance

    # 2) Delete old hummingbot image
    docker image rm hummingbot/hummingbot:latest

    # 3) Re-create instance with latest hummingbot release
    docker run -it \
    --network host \
    --name hummingbot-instance \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_conf,destination=/conf/" \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_logs,destination=/logs/" \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_data,destination=/data/" \
    hummingbot/hummingbot:latest
    ```
A previous version (i.e. `version-1.11.0`) can be installed when creating a Hummingbot instance.

## Raspberry Pi

Users have been experiencing problems with updating Hummingbot on a Docker build. The command `./update.sh` doesn't work on Raspberry Pi.

Instead, you need to run `./create.sh` to create a new instance with the latest version.

=== "Manual"

    ```bash
    # 1) Create a new Hummingbot instance
    ./create.sh

    # 2) Pull the Hummingbot ARM image when asked what version to use
    Enter Hummingbot version [ latest/development ] ( default = 'latest' )
    >> version-1.12.0-arm_beta
    ```
!!! Note
    The latest ARM version of Hummingbot can be found here - [Hummingbot Dockerhub](https://hub.docker.com/r/hummingbot/hummingbot/tags?page=1&ordering=last_updated&name=arm)

## Source

The Hummingbot codebase is hosted at <https://github.com/hummingbot/hummingbot>.

=== "Scripts"

    ```bash
    # 1) Download update script to the *root* folder
    wget https://raw.githubusercontent.com/hummingbot/hummingbot/development/installation/install-from-source/update.sh

    # 2) Enable script permissions
    chmod a+x update.sh

    # 3) Run script to update hummingbot
    ./update.sh

    ```

=== "Manual"

    ```bash
    # From the hummingbot root folder:
    git pull origin master

    # Recompile the code:
    conda deactivate
    ./uninstall
    ./clean
    ./install
    conda activate hummingbot
    ./compile
    bin/hummingbot.py
    ```
