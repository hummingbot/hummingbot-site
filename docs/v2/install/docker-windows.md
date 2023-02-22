# Installation on Windows

## Prerequisites

The Hummingbot codebase is designed and optimized for UNIX-based systems such as macOS and Linux. For Windows users, we recommend running Hummingbot in Windows Subsystem for Linux (WSL).

WSL lets developers run a Linux environment directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup. With WSL, Windows 10/11 users are able to run a Linux Virtual Machine without performance loss, and without the need of dual boot. See here for more detail about WSL.

- You must be running Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11

- Virtualization needs to be enabled under your BIOS setting.

For troubleshooting WSL see this [link](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting#installation-issues)

## Install WSL

Open a Powershell or Windows command prompt as administrator and run the command below to install WSL with Ubuntu 20.04

```
wsl --install --distribution Ubuntu-20.04
```

Restart your Computer

Open WSL Terminal in the Start Menu

WSL should finish installing then it will prompt you to enter a username / password for the Linux subsystem

## Install Docker

Launch the Ubuntu terminal and then enter the commands one by one below

1. Update the package index

```
sudo apt-get update && sudo apt-get upgrade -y
```

2. Install necessary packages

```
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common gnupg lsb-release
```

3. Add Docker's official GPG key

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

4. Setup the repository

```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu  $(lsb_release -cs)  stable"
```

5. Install Docker

```
sudo apt update && sudo apt-get install docker-ce
```

6. Start the Docker service

```
sudo service docker start 
```

7. Allow docker commands without requiring sudo prefix. If you are running as root replace $USER with your username

```
sudo usermod -aG docker $USER
```

8. Restart the terminal first before running the create.sh script (Important!)

```
exit
```

## Install Hummingbot

=== "Scripts"

    1. Download Hummingbot install, start, and update script

    Create Script
    ```
    wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/docker-commands/create.sh
    ```

    Start Script

    ```
    wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/docker-commands/start.sh
    ```

    Update Script

    ```
    wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/docker-commands/update.sh
    ```

   2. Enable script permissions

    ```
    chmod a+x *.sh
    ```

    3. Create a hummingbot instance
   
    ```
    ./create.sh
    ```

=== "Manual"

    1. Create folder for your new instance
    
    ```
    mkdir hummingbot_files
    ```
     
    2. Create folders for logs, config files and database file

    ```
    mkdir hummingbot_files/hummingbot_conf
    mkdir hummingbot_files/hummingbot_conf/connectors
    mkdir hummingbot_files/hummingbot_conf/strategies
    mkdir hummingbot_files/hummingbot_certs
    mkdir hummingbot_files/hummingbot_logs
    mkdir hummingbot_files/hummingbot_data
    mkdir hummingbot_files/hummingbot_scripts
    mkdir hummingbot_files/hummingbot_pmm_scripts
    mkdir hummingbot_files/gateway_conf
    mkdir hummingbot_files/gateway_logs
    ```

    3. Launch a new instance of hummingbot

    ```
    docker run -it \
    --network host \
    --name hummingbot-instance \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_conf,destination=/conf/" \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_logs,destination=/logs/" \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_data,destination=/data/" \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_pmm_scripts,destination=/pmm_scripts/" \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_scripts,destination=/scripts/" \
    --mount "type=bind,source=$(pwd)/hummingbot_files/hummingbot_certs,destination=/home/hummingbot/.hummingbot-gateway/certs/" \
    --mount "type=bind,source=$(pwd)/hummingbot_files/gateway_conf,destination=/gateway-conf/" \
    hummingbot/hummingbot:latest
    ```
