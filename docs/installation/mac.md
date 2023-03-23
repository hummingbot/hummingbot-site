# Installing Hummingbot on MacOS

## Install via Docker

You can install Docker by installing [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/) or by [downloading an installer](https://docs.docker.com/docker-for-mac/install/) from the official page. 

After you have downloaded and installed Docker, restart your system if necessary.

Once Docker has been successfully installed, launch a Hummingbot instance following one of the [Deploy Examples](/installation/deploy/).

## Install from Source

### Prerequisites

#### XCode Command Line Tools

```
➜ xcode-select --install
```

#### Anaconda

Hummingbot requires Python 3 and other Python libraries. To manage these dependencies, Hummingbot uses Anaconda, an open-source environment, and package manager for Python that is the current industry standard for data scientists and data engineers.

To install Anaconda, go to the [Anaconda site](https://www.anaconda.com/products/distribution#Downloads) and download and install the latest Python installer applicable for your architecture (M1 / x86-64). Both the graphical installer (.pkg) and the command line installer (.sh) will work.

#### Edit the .zshrc file

!!! warning
    If you use ZSH or another Unix shell, copy the code snippet below to your `.zshrc` or similar file. By default, Anaconda only adds it to your `.bash_profile` file. This makes the `conda` command available in your root path.

    We also do **NOT** recommend installing `conda` through `Homebrew` as this will cause issues during installation. Downloading directly from the Anaconda website should be sufficient. 

Open a terminal window and run `vim` or an IDE to edit the `.zshrc` file:

Copy and paste the following code to the bottom of the file:

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

Exit out of `nano` and make sure to save the changes then close & relaunch the terminal. Once you have the terminal up run the `conda init` command.

```bash
➜ conda init zsh
```

Afterward, you can also try the `conda` command in a terminal to verify if conda was installed correctly. If the command is valid, then Anaconda has been successfully installed. Proceed to the next step to install Hummingbot

### Intel vs Apple Silicon

Installing Hummingbot from source on Macs differs depending on if you have an Intel architecture or Apple M1/M2 for its chipset.

#### Intel (x86)

Follow the steps below in Terminal:

```bash
# Clone the Hummingbot repo
➜ git clone https://github.com/hummingbot/hummingbot.git

# Navigate into the Hummingbot folder
➜ cd hummingbot

# Run the install script
➜ ./install

# Activate the conda environment
➜ conda activate hummingbot

# Compile Hummmingbot
➜ ./compile Hummingbot

# Start Hummingbot
(hummingbot) ➜ bin/hummingbot.py
```

#### Apple Silicon (M1/M2)

Copy the first few steps of the process above:

```bash
# Clone the Hummingbot repo
➜ git clone https://github.com/hummingbot/hummingbot.git

# Navigate into the Hummingbot folder
➜ cd hummingbot

# Run the install script
➜ ./install
```

Then, ensure that you create the Hummingbot environment for Intel-based Macs:

```bash
# Deactivate the environment if you're in it
(hummingbot) ➜ conda deactivate

# Remove the envionment
➜ conda env remove -n hummingbot

# Creates the hummingbot environment and enforces python 3.8.2 and initialize a environment variable used to determine the processor packages to use
➜ CONDA_SUBDIR=osx-64 conda create -n hummingbot python=3.8.2

# Activate the new environment
➜ conda activate hummingbot

# Configures environment to use intel-based packages
➜ conda config --env --set subdir osx-64

# Start Hummingbot
(hummingbot) ➜ bin/hummingbot.py
```

## Additional Resources

:fontawesome-brands-youtube: [Install Hummingbot on source | MacOS](https://www.youtube.com/watch?v=_10M9uJan3U&list=PLDwlNkL_4MMc1GxjWShinaX4FQCxgOkyO&index=1)
