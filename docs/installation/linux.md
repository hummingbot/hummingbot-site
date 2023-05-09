The instructions below help you install a standalone Hummingbot instance from source on Linux-based machines.

## Prerequisites

Supported versions:

* Ubuntu 18.04 / Ubuntu 20.04 (recommended)
* Debian 10 / 11

### build-essentials

On new Ubuntu instances, you may need to install the `build-essentials` package:
```
sudo apt-get update
sudo apt-get install -y build-essential
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

Afterwards, run the `conda` command from your path:
```
conda
```

You should see a response similar to:
```
usage: conda [-h] [-V] command ...

conda is a tool for managing and deploying applications, environments and packages.

Options:

positional arguments:
  command
    clean        Remove unused packages and caches.
    compare      Compare packages between conda environments.
```

## Install Hummingbot

After you have installed the dependencies, follow the steps below to install Hummingbot from source:

### Clone repo

Clone the repo or download the source code from Github and navigate to the folder:
```
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
```
### Install environment

Next, run the install script that installs a `hummingbot` conda environment with the Python dependencies:
```
./install
```

### Active environment

Activate the conda environment:
```
conda activate hummingbot
```

This step should add a `(conda)` label in front of your command line, which lets you know that you are inside the conda environment.

### Compile source code

From inside the conda environment, run the script that compiles the Cython files in the Hummingbot codebase. Certain Hummingbot modules are written in Cython, which compiles down to lower-level C, to boost performance. 
```
./compile
```

### Launch Hummingbot

From inside the conda environment, run the following command to launch Hummingbot:
```
bin/hummingbot.py
```

You should see the Hummingbot welcome screen:

![welcome screen](/assets/img/welcome.png)

To get started with Hummingbot, check out the following docs:

* [Post Installation](./post-installation)
* [Basic Features](/operation/)
* [Quickstart Guide](/quickstart/)
* [Hummingbot FAQ](/faq/)

If you need to run DEX bots, install [Hummingbot Gateway](/gateway).

## Other Useful Commands

### Clone the Hummingbot repo
```
git clone https://github.com/hummingbot/hummingbot.git
```

### Run the install script
```
./install
```

### Compile Hummmingbot
```
conda activate hummingbot

./compile
```

### Start Hummingbot
```
conda activate hummingbot

bin/hummingbot.py
```

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