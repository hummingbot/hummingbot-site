# Install Hummingbot from Source

!!! note "Re-compiling files"
    If you make changes to the code, make sure to re-compile the code with `./compile` to ensure that any changes to Cython files are compiled before running Hummingbot

You can install Source and Hummingbot by selecting the following options below:

- **Scripts**: download and use automated install scripts
- **Manual**: run install commands manually

## Linux/Ubuntu

_Supported versions: 16.04 LTS, 18.04 LTS, 19.04_

=== "Scripts"

    ```bash
    # 1) Download install script
    wget https://raw.githubusercontent.com/hummingbot/hummingbot/development/installation/install-from-source/install-source-ubuntu.sh

    # 2) Enable script permissions
    chmod a+x install-source-ubuntu.sh

    # 3) Run installation
    ./install-source-ubuntu.sh
    ```

=== "Manual"

    ```bash
    # 1) Install dependencies
    sudo apt-get update
    sudo apt-get install -y build-essential

    # 2) Install Miniconda3
    wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
    sh Miniconda3-latest-Linux-x86_64.sh

    # 3) Reload .bashrc to register "conda" command
    exec bash

    # 4) Clone Hummingbot
    git clone https://github.com/hummingbot/hummingbot.git

    # 5) Install Hummingbot
    cd hummingbot && ./clean && ./install

    # 6) Activate environment and compile code
    conda activate hummingbot && ./compile

    # 7) Start Hummingbot
    bin/hummingbot.py
    ```

## MacOS

### Xcode command line tools

Running Hummingbot on **macOS** requires [Xcode](https://developer.apple.com/xcode/) and Xcode command line tools.

```
xcode-select --install
```

### Anaconda

Hummingbot requires Python 3 and other Python libraries. To manage these dependencies, Hummingbot uses Anaconda, an open-source environment, and package manager for Python that is the current industry standard for data scientists and data engineers.

To install Anaconda, go to [the Anaconda site](https://www.anaconda.com/distribution/) and download the **Python 3.7 installer** for your operating system. Both the graphical installer and the command line installer will work. Run the installer, and it will guide you through the installation process.

Afterward, open a Terminal window and try the `conda` command. If the command is valid, then Anaconda has been successfully installed, even if the graphical installer says that it failed.

!!! warning
    If you use ZSH or another Unix shell, copy the code snippet below to your `.zshrc` or similar file. By default, Anaconda only adds it to your `.bash_profile` file. This makes the `conda` command available in your root path.

```
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

### Hummingbot

```
# 1) Clone Hummingbot repo
git clone https://github.com/hummingbot/hummingbot.git

# 2) Navigate into the hummingbot folder
cd hummingbot

# 3) Run install script
./install

# 4) Activate the environment
conda activate hummingbot

# 5) Compile
./compile

# 6) Run Hummingbot
bin/hummingbot.py
```

## Windows

As Hummingbot is optimized for UNIX-based environments, [install Windows Subsystem for Linux](/installation/docker#install-wsl) in order to deploy an Ubuntu environment in your Windows machine.

Afterwards, follow the **Linux/Ubuntu** instructions above.

## 📺 Videos and Guides

:fontawesome-brands-youtube: [Install Hummingbot on source | MacOS](https://www.youtube.com/watch?v=_10M9uJan3U&list=PLDwlNkL_4MMc1GxjWShinaX4FQCxgOkyO&index=1)