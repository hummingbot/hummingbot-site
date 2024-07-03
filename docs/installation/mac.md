The instructions below will help you install a standalone Hummingbot instance from source on Apple MacOS machines.

Watch the video:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/_10M9uJan3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

| **Component**      | **Specification**                                     |
|--------------------|-------------------------------------------------------|
| **Operating System** | MacOS 12+ - Intel x86 or Apple Silicon (M1 / M2 / M3)    | 
| **Memory**           | 4 GB RAM per instance                                 |
| **Storage**          | 5 GB HDD space per instance                           |
| **CPU**              | at least 1 vCPU per instance / controller             |



### XCode Command Line Tools

[Xcode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) are required. You can run the following command from Terminal to install them:

```
xcode-select --install
```

### Miniconda / Anaconda

!!! warning "Don't use Homebrew!"
    We don't recommend installing `conda` through [Homebrew](https://brew.sh/) as this may cause issues during installation. Instead, downloading the installer directly from the Anaconda website. 

Hummingbot requires Python 3 and other libraries. To manage these dependencies, Hummingbot uses `conda`, an open source environment manager for Python. You can install `conda` using either Miniconda or Anaconda. 

Download the installer for your environment and run it:

**MacOS with Intel x86:**
```
curl -o Miniconda3-latest-MacOSX-x86_64.sh https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
bash Miniconda3-latest-MacOSX-x86_64.sh
```

**MacOS with Apple Silicon (M1 / M2 / M3):**
```
curl -o Miniconda3-latest-MacOSX-arm64.sh https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
bash Miniconda3-latest-MacOSX-arm64.sh
```

Follow the prompts on the installer screens. If you are unsure about any setting, accept the defaults. You can change them later.

To make the changes take effect, close and then re-open your terminal window.

## Install Hummingbot

After you have installed the dependencies, follow the steps below to install Hummingbot from source:


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
* [Basic Features](../client/)
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