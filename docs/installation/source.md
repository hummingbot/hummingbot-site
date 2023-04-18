Note that the Hummingbot codebase is designed and optimized for Unix-based systems such as macOS and Linux. For Windows users, we recommend running Hummingbot using [Windows Subsystem for Linux 2 (WSL 2)](https://learn.microsoft.com/en-us/windows/wsl/install).

The instructions below assume that the user is in an Unix-based environment.

## Install Dependencies

### Build-essentials

On new Ubuntu instances, you may need to install the build-essentials package:
```
sudo apt-get update
sudo apt-get install -y build-essential
```

### XCode Command Line Tools

On MacOS, [Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) are required for installing Hummingbot from source. You can run the following command from Terminal to install them:
```
xcode-select --install
```

### Miniconda

Hummingbot requires Python3 and other Python libraries. To manage these dependencies, Hummingbot uses `conda`, an open source environment manager for Python.

!!! warning "Don't use Homebrew!"
    We don't recommend installing `conda` through [Homebrew](https://brew.sh/) as this may cause issues during installation. Instead, downloading the installer directly from the Anaconda website. 

Go to the [Miniconda](https://docs.conda.io/en/latest/miniconda.html) and use the installer link for your architecture.

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

### `conda` command and ZSH

If the `conda` command is not available in your path, this may be because you are using ZSH or another Unix shell. 

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

## Useful Commands

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
