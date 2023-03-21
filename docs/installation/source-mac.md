# Hummingbot via Source on Mac

## Install Prerequisites

### Xcode

Running Hummingbot on macOS requires Xcode and Xcode command line tools.

!!! tip
    Click the "Copy to clipboard" icon at the end of the code blocks to easily copy the commands

```
xcode-select --install
```

### Anaconda

Hummingbot requires Python 3 and other Python libraries. To manage these dependencies, Hummingbot uses Anaconda, an open-source environment, and package manager for Python that is the current industry standard for data scientists and data engineers.

To install Anaconda, go to the [Anaconda site](https://www.anaconda.com/products/distribution#Downloads) and download and install the latest Python installer applicable for your architecture (M1 / x86-64). Both the graphical installer (.pkg) and the command line installer (.sh) will work.

### Edit the .zshrc file

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

## Install Hummingbot

The following steps below will differ depending on whether you are using a Mac with an Intel Chip or Apple Silicon.

=== "Mac with Intel Chip"

    Clone the Hummingbot repo

    ```
    git clone https://github.com/hummingbot/hummingbot.git
   
    ```
    Navigate into the Hummingbot folder

    ```
    cd hummingbot

    ```
    Run the install script

    ```
    
    ./install
    
    ```
    Activate the conda environment
    ```
    conda activate hummingbot
    ```
=== "Mac with Apple Silicon (M1 / M2 chip)"

    Deactivate and remove the conda environment
    
    ```
    conda deactivate
    ```
    ```
    conda env remove -n hummingbot
    ```
    Creates the hummingbot environment and enforces python 3.8.2 and initialize a environment variable used to determine the processor packages to use
    ```
    CONDA_SUBDIR=osx-64 conda create -n hummingbot python=3.8.2
    ```

    Activate the environment
    ```
    conda activate hummingbot
    ```

    Configures environment to use intel-based packages
    ```
    conda config --env --set subdir osx-64
    ```

    Run install script
    ```
    ./install
    ```

## Compile

```
./compile
```

## Run Hummingbot

```
bin/hummingbot.py
```

## 📺 Videos and Guides

:fontawesome-brands-youtube: [Install Hummingbot on source | MacOS](https://www.youtube.com/watch?v=_10M9uJan3U&list=PLDwlNkL_4MMc1GxjWShinaX4FQCxgOkyO&index=1)
