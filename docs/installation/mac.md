<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/_10M9uJan3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

!!! warning "Don't use Homebrew!"
    We don't recommend installing `conda` through [Homebrew](https://brew.sh/) as this may cause issues during installation. Instead, downloading the installer directly from the Anaconda website. 

### XCode Command Line Tools

[Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) are required for installing Hummingbot from source on Mac OS.

You can run the following command from Terminal to install them:

```
➜ xcode-select --install
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

#### `conda` command and ZSH

If the `conda` command is not available in your path, this may be because you are using ZSH or another shell. 

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

Make sure that you download the M1 versions of [Miniconda](https://docs.conda.io/en/latest/miniconda.html).

You may need to regenerate a Hummingbot conda environment optimized for Intel-based Macs:

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
