Hummingbot doesn't require much power, so some users have run successfully run multiple instances on a single Raspberry Pi. The following steps are for the Raspberry Pi but it should also work with any other device that uses the same ARM architecture.

Running Hummingbot on a Raspberry Pi or similar device has the same main benefit of running it on a cloud server: having a dedicated machine for Hummingbot. Raspberry Pi’s are relatively low cost, easy to set up, and, of course, don’t have the monthly charges associated with a cloud provider.

## Prerequisites

### Download 64-bit OS

To run Hummingbot on a Raspberry Pi, a 64-bit OS is required as it won't work with 32-bit. You can download the 64-bit OS from the [Raspberry Pi website](https://www.raspberrypi.com/software/operating-systems/#raspberry-pi-os-64-bit) or from the [Ubuntu](https://ubuntu.com/download/raspberry-pi) website.

You can also choose between CLI (command line) and Desktop GUI versions but you'll get more performance with just using the CLI version.

### Load the image file to your Raspberry Pi’s SD card

The Raspberry Pi has an easy to follow [guide](https://www.raspberrypi.org/documentation/installation/installing-images/) with alternatives on how to load the SD card with a Raspberry Pi OS from different operating systems.

Once the OS is installed and booted then you can follow the steps below to install Hummingbot using either Docker or Source

## Install from Source

Update the repository and install important dependencies:
```
sudo apt update
sudo apt upgrade -y
sudo apt-get install build-essential libssl-dev libffi-dev gcc python3-dev python-dev python3.7 -y
```

Install Miniforge:
```
wget https://github.com/conda-forge/miniforge/releases/download/4.11.0-4/Miniforge3-4.11.0-4-Linux-aarch64.sh
sh Miniforge3-4.11.0-4-Linux-aarch64.sh
```

Restart the terminal:
```
exec bash
```

Install `conda-build`:
```
conda install conda-build
```

Clone the Hummingbot repository:
```
git clone https://github.com/hummingbot/hummingbot.git
```

!!! note
    If you need to switch branches (ie. `development` branch) then after cloning the repository use the command `git checkout [branch_name]` to switch branches. For example, to switch to the development branch use `git checkout development`

Change directory into the Hummingbot folder:
```
cd hummingbot
```

!!! note
    If you are using Ubuntu 22.04 you'll need to go into the `./setup` folder first and edit the `environment-linux-aarch64.yml` file and change "cryptography==2.8" to "cryptography==3.1.1" before running the `./install` command otherwise you'll get an error "could not build wheels for cryptography"

Run the `install` command:
```
./install
```

Activate the `conda` environment:
```
conda activate hummingbot
```

Clean your Hummingbot directory and then compile:

```
./clean && ./compile
```

Launch Hummingbot:
```
bin/hummingbot.py
```
