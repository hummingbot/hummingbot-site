The instructions below help you install a standalone Hummingbot instance from source on Linux-based machines.

## Prerequisites

* Ubuntu 20.04 / Ubuntu 22.04 (recommended)
* Debian 10 / 11
* Memory: 4 GB RAM per instance
* Storage: 3 GB HDD space per instance

### build-essentials

On new Ubuntu instances, you may need to install the `build-essentials` package:

```
sudo apt update && sudo apt upgrade -y && sudo apt install -y build-essential
```

### Miniconda / Anaconda

Hummingbot requires Python 3 and other libraries. To manage these dependencies, Hummingbot uses `conda`, an open source environment manager for Python. You can install `conda` using either Miniconda or Anaconda. 

Download the installer for your environment and run it:

* [Miniconda installer for Linux](https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links)
* [Anaconda installer for Linux](https://www.anaconda.com/download/)

For example:
```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

Follow the prompts on the installer screens. If you are unsure about any setting, accept the defaults. You can change them later.

To make the changes take effect, close and then re-open your terminal window.

## Install Hummingbot

After you have installed the dependencies, run the following commands to install Hummingbot from source:

```
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
./install
conda activate hummingbot
./compile

```

!!! note
     The `conda activate hummingbot` command should add a `(hummingbot)` label in front of your command line, which lets you know that you are inside the conda environment. If not, check if conda was installed correctly and reinstall if necessary. 



### Launch Hummingbot

From inside the conda environment, run the following command to launch Hummingbot:

```
./start
```

You should see the Hummingbot welcome screen:

![welcome screen](/assets/img/welcome.png)

To get started with Hummingbot, check out the following docs:

* [Post Installation](./post-installation.md)
* [Basic Features](/client/)
* [Quickstart Guide](/getting-started/#quickstart-guides)
* [Hummingbot FAQ](/faq/)

If you need to run DEX bots, install [Hummingbot Gateway](/gateway).

## Other Useful Commands

### Update Hummingbot to latest `master` release
```
git pull origin master
```

### Update Hummingbot to `development` branch
```
git pull origin development
```

### Removed compiled files
```
./clean
```

### Remove hummingbot conda environment
```
./uninstall
```
