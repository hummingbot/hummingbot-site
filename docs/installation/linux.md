# Install Hummingbot from Source on Linux

The instructions below help you install a standalone Hummingbot from source on Linux-based machines.


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

Download the installer for your environment:

* [Miniconda installer for Linux](https://docs.conda.io/en/latest/miniconda.html#linux-installers)
* [Anaconda installer for Linux](https://www.anaconda.com/download/)

Then, run the installer:

Miniconda:
```bash
bash Miniconda3-latest-Linux-x86_64.sh
```

Anaconda:
```bash
bash Anaconda-latest-Linux-x86_64.sh
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

1. Clone Hummingbot repo:
```
git clone https://github.com/hummingbot/hummingbot.git
```

2. Navigate into the hummingbot folder:
```
cd hummingbot
```

3. Install conda environment:
```
./install
```

4. Activate the conda environment:
```
conda activate hummingbot
```

5. Compile Hummingbot:
```
./compile
```

6. Run Hummingbot:
```
bin/hummingbot.py
```

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
./compile
```

### Start Hummingbot
```
bin/hummingbot.py
```

### Removed compiled files
```
./clean
```

### Remove hummingbot conda environment
```
./uninstall
```