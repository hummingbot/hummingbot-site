## Prerequisites

Supported versions:

* Ubuntu 18.04 / Ubuntu 20.04 (recommended)
* Debian 10 / 11

## Install via Docker

In the Ubuntu terminal, enter the commands below to install Docker:

```bash
# 1) Remove older / currently installed versions of Docker first 
$ sudo apt-get remove docker docker-engine docker.io containerd runc

# 2) Update the package index
$ sudo apt-get update && sudo apt-get upgrade -y

# 3) Install necessary packages
$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common gnupg lsb-release

# 4) Add Docker's official GPG key 
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 5) Setup the repository
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu  $(lsb_release -cs)  stable"

# 6) Install Docker
$ sudo apt update && sudo apt-get install docker-ce

# 7) Start the Docker service
$ sudo service docker start 

# 8) Allow docker commands without requiring sudo prefix. If you are running as root replace $USER with your username
$ sudo usermod -aG docker $USER

# 9) Important! Restart the terminal first before running the create scripts 
$ exit
```

Once Docker has been successfully installed, launch a Hummingbot instance following one of the [Deploy Examples](/installation/deploy/).

## Install from Source

```bash
# install dependencies
$ sudo apt-get update
$ sudo apt-get install -y build-essential

# install miniconda
$ wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
$ sh Miniconda3-latest-Linux-x86_64.sh
$ exec bash

# Clone the Hummingbot repo
$ git clone https://github.com/hummingbot/hummingbot.git

# Navigate into the Hummingbot folder
$ cd hummingbot

# Run the install script
$ ./install

# Activate the conda environment
$ conda activate hummingbot

# Compile Hummmingbot
$ ./compile

# Start Hummingbot
(hummingbot) $ bin/hummingbot.py
```

### Launching Hummingbot

Make sure that you activate the Hummingbot conda environment:

```
conda activate hummingbot
```

From the Hummingbot root folder, run the following command:

```
(hummingbot) $ bin/hummingbot.py
```
