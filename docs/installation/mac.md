The instructions below help you install a standalone Hummingbot instance from source on Apple MacOS machines.

Watch the video:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/_10M9uJan3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

Supported versions:

* macOS 10 (Sierra) or later
* Intel x86
* Apple M1

Unsupported:

* Apple M2 / M2 Max

### XCode Command Line Tools

[Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) are required. You can run the following command from Terminal to install them:

```
➜ xcode-select --install
```

### Miniconda / Anaconda

!!! warning "Don't use Homebrew!"
    We don't recommend installing `conda` through [Homebrew](https://brew.sh/) as this may cause issues during installation. Instead, downloading the installer directly from the Anaconda website. 

Hummingbot requires Python 3 and other libraries. To manage these dependencies, Hummingbot uses `conda`, an open source environment manager for Python. You can install `conda` using either Miniconda or Anaconda. 

Download the installer for your environment and run it:

* [Miniconda installer for MacOS](https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links)
* [Anaconda installer for MacOS](https://www.anaconda.com/download/)

https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh

MacOS with Intel x86:
```
curl -o Miniconda3-latest-MacOSX-x86_64.sh https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
bash Miniconda3-latest-MacOSX-x86_64.sh
```

MacOS with Apple M1:
```
curl -o Miniconda3-latest-MacOSX-arm64.sh https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
bash Miniconda3-latest-MacOSX-arm64.sh
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

#### `conda` command and ZSH

If the `conda` command is not available in your path, this may be because you are using [ZSH](https://en.wikipedia.org/wiki/Z_shell) or another shell. 

To fix this, copy the code snippet below to your `.zshrc` or similar file. By default, Anaconda only adds it to your `.bash_profile` file, which makes the `conda` command available in your root path.

Use an IDE to edit the `.zshrc` file, and copy and paste the following code to the bottom of the file:

```bash
__conda_setup="$(CONDA_REPORT_ERRORS=false '/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/anaconda3/etc/profile.d/conda.sh"
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
```

Save the changes, and run the `conda init` command to initialize them:
```bash
conda init zsh
```
Afterward, you should be able to access the `conda` command from your path.

#### `conda` and Apple M1/M2 chips

If you are using Apple Silicon, make sure that you haved downloaded the M1 versions of Miniconda or Anaconda.

If you encounter issues with the Hummingbot environemnt, you may need to regenerate a Hummingbot conda environment that is optimized for Intel-based Macs:
```bash
# Deactivate the environment if you're in it
conda deactivate

# Remove the envionment
conda env remove -n hummingbot

# Creates the hummingbot environment and enforces python 3.8.2 and initialize a environment variable used to determine the processor packages to use
CONDA_SUBDIR=osx-64 conda create -n hummingbot python=3.8.2

# Activate the new environment
conda activate hummingbot

# Configures environment to use intel-based packages
conda config --env --set subdir osx-64

# Start Hummingbot
(hummingbot) ➜ bin/hummingbot.py
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