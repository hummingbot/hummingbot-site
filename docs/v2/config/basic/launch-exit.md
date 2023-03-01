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

## Working with Passwords

### Create and Delete Password

The password in Hummingbot encrypts sensitive data such as API keys, secret keys, and wallet private keys. For security reasons, the password is only stored locally in encrypted form, and we do not have access to it.

### Creating a password

If you are using Hummingbot for the first time, the system will prompt you to create a password. There are no character requirements, although we recommend using a strong password for additional security.

You can click the **OK** button on the welcome screen or you can press **TAB** to navigate the selection and **ENTER** to confirm.

**Passwords are stored locally in your computer. No passwords are uploaded to any server.**

![](/assets/img/welcome.gif)

### Deleting a password

Passwords and private keys are saved as encrypted files in `hummingbot_conf` (via Docker and binary) or `/conf` directory (installed from source).

To reset your password, delete all files starting with `encrypted_` prefix.

![](/assets/img/encrypted_files.png)

!!! warning
    This will disconnect your API keys from Hummingbot. You will have to re-connect your API keys.
