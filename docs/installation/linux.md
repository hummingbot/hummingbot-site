The instructions below help you install a standalone Hummingbot instance from source on Linux-based machines.

## Prerequisites

### Cloud server or local machine

| **Component**      | **Specification**                                     |
|--------------------|-------------------------------------------------------|
| **Operating System** | Linux x64 or ARM (Ubuntu 20.04+, Debian 10+)                   | 
| **Memory**           | 4 GB RAM per instance                                 |
| **Storage**          | 5 GB HDD space per instance                           |
| **CPU**              | at least 1 vCPU per instance / controller             |

### Update Dependencies

On new Ubuntu instances, you may need to install the `build-essentials` package:

```
sudo apt update && sudo apt upgrade -y && sudo apt install -y gcc build-essential
```

### Miniconda / Anaconda

Hummingbot uses `conda`, an open source environment manager to manage dependencies for Python. You can install `conda` using either [Miniconda](https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links) or [Anaconda](https://www.anaconda.com/download/). 

Download the installer for your environment and run it:

```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

Follow the prompts on the installer screens. If you are unsure about any setting, accept the defaults. 

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



## Launch Hummingbot

From inside the conda environment, run the following command to launch Hummingbot:

```
./start
```

You should see the Hummingbot welcome screen:

![welcome screen](/assets/img/welcome.png)

To get started with Hummingbot, check out the following docs:

* [Post Installation](post-installation.md)
* [Basic Features](../client/index.md)
* [Quickstart Guide](../academy-content/posts/docker-installation-guide/0-index.md)
* [Hummingbot FAQ](../faq.md)

If you need to run DEX bots, install [Hummingbot Gateway](../gateway/index.md).

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
