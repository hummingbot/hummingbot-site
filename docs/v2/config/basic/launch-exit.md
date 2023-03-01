# Launch and Exit Hummingbot

This page contains information on launching and exiting the application, assuming Hummingbot is installed already on your machine.

## Launch via Docker

=== "Using Helper Scripts"

    Download the `start.sh` helper script

    ```
    wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/docker-commands/start.sh
   
    ```
    Change permissions

    ```
    chmod a+x start.sh

    ```
    Run the script

    ```
    
    ./start.sh
    
    ```

=== "Using Docker Compose file"
    Placeholder text

=== "Manual Docker commands"

    List all docker containers
        
    ```
    docker ps -a

    ```
    
    Start the docker container

    ```

    docker start [container_name]
     
    ``` 
    
    Connect to the container

    ```
    
    docker attach [container_name]

    ```     

## Launch from source

Make sure the hummingbot conda environment is enabled.

```
conda activate hummingbot
```

In the `hummingbot` parent directory, run this command to launch the application:

```
bin/hummingbot.py
```

![Launch from Source](../../../assets/img/launch-from-source.gif)

## Exit Hummingbot

Running the `exit` command cancels all outstanding orders and exit the Hummingbot interface. In case of errors, the command `exit -f` will force the application to close.

!!! tip
    You can also press the keyboard shortcut <kbd>Ctrl</kbd> + <kbd>C</kbd> twice to exit.
