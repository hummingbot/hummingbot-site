# Install Hummingbot from Source

!!! note "Re-compiling files"
    If you make changes to the code, make sure to re-compile the code with `./compile` to ensure that any changes to Cython files are compiled before running Hummingbot

You can install Source and Hummingbot by selecting the following options below:

- **Scripts**: download and use automated install scripts
- **Manual**: run install commands manually

## Linux/Ubuntu

_Supported versions: 18.04 LTS, 19.04 LTS, 20.04_

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

### Prerequisites

#### Xcode command line tools

Running Hummingbot on **macOS** requires [Xcode](https://developer.apple.com/xcode/) and Xcode command line tools.

```
xcode-select --install
```

#### Anaconda

Hummingbot requires Python 3 and other Python libraries. To manage these dependencies, Hummingbot uses Anaconda, an open-source environment, and package manager for Python that is the current industry standard for data scientists and data engineers.

To install Anaconda, go to [the Anaconda site](https://www.anaconda.com/products/distribution#Downloads) and download and install the latest Python installer applicable for your architecture (M1 / x86-64). Both the graphical installer (.pkg) and the command line installer (.sh) will work.

!!! warning
    If you use ZSH or another Unix shell, copy the code snippet below to your `.zshrc` or similar file. By default, Anaconda only adds it to your `.bash_profile` file. This makes the `conda` command available in your root path.

    We also do **NOT** recommend installing `conda` through `Homebrew` as this will cause issues during installation. Downloading directly from the Anaconda website should be sufficient. 

Open a terminal window and run `nano` to edit the `.zshrc` file

```
nano .zshrc
```

Copy and paste the following code below:

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

Exit out of `nano` and make sure to save the changes then close & relaunch the terminal. Once you have the terminal up run the `conda init` command.

```
conda init zsh
```

Afterward, you can also try the `conda` command in a terminal to verify if conda was installed correctly. If the command is valid, then Anaconda has been successfully installed. Proceed to the next step to install Hummingbot

#### Install Hummingbot

Clone Hummingbot repo

```
git clone https://github.com/hummingbot/hummingbot.git
```

Navigate into the hummingbot folder

```
cd hummingbot
```

Run install script

```
./install
```

Activate the environment

```
conda activate hummingbot
```

Compile

```
./compile
```

Run Hummingbot

```
bin/hummingbot.py
```

## Windows

As Hummingbot is optimized for UNIX-based environments, [install Windows Subsystem for Linux](/installation/docker#install-wsl) in order to deploy an Ubuntu environment in your Windows machine.

Afterwards, follow the **Linux/Ubuntu** instructions above.

## 📺 Videos and Guides

:fontawesome-brands-youtube: [Install Hummingbot on source | MacOS](https://www.youtube.com/watch?v=_10M9uJan3U&list=PLDwlNkL_4MMc1GxjWShinaX4FQCxgOkyO&index=1)
