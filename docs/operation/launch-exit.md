# Launch and Exit Hummingbot

This page contains information on launching and exiting the application, assuming Hummingbot is installed already on your machine.

## Launch via Docker

=== "Using Helper Scripts"
    If you've already downloaded the helper scripts before, proceed to step 2.

    1. Download `start.sh` helper script from Github using the command below.
    ```
    wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/docker-commands/start.sh
    chmod a+x start.sh
    ```
    2. Run the following command inside the directory where the helper script is located:
    ```
    ./start.sh
    ```

=== "Manual Docker commands"
    1. Use the command `docker ps -a` to list all docker containers
    2. If the status is showing "exited" next to the container you want to run then use `docker start [container_name]` to start the container, if the container is already running then skip this command and run the next one instead.
    3. Next use `docker attach [container_name] to attach to the running container

!!! tip
    Run `ls` command from the terminal to check if the file is in your current directory.

![](/assets/img/launch-via-docker.gif)

!!! tip
    If no containers are running, follow the guide to creating a Hummingbot instance.

## Launch from source

1. Make sure the hummingbot conda environment is enabled.

```Manual
conda activate hummingbot
```

2. In the `hummingbot` parent directory, run this command to launch the application:

```Manual
bin/hummingbot.py
```

![](/assets/img/launch-from-source.gif)

## Exit Hummingbot

Running the `exit` command cancels all outstanding orders and exit the Hummingbot interface. In case of errors, the command `exit -f` will force the application to close.

!!! tip
    You can also press the keyboard shortcut <kbd>Ctrl</kbd> + <kbd>C</kbd> twice to exit.
