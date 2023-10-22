## Introduction

Welcome to the second part of the Hummingbot Dashboard quickstart. In this section, we'll guide you through the essential steps to set up the project and get Dashboard up and running.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/AbezIhb6iJg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

Before diving in, there are a couple of essential tools you'll need:

### Anaconda

Anaconda is a powerful distribution of Python and R for scientific computing and data science. It's vital for managing different environments for your projects. Download the installer for your environment from the [Anaconda](https://www.anaconda.com/download/) website and then run it.

For example, here is how to download and run the Linux installer:
```
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

Follow the prompts on the installer screens. If you are unsure about any setting, accept the defaults. You can change them later. 

To make the changes take effect, close and then re-open your Terminal window. Afterwards, run the `conda` command from your path:
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

### Docker

Docker is a platform that allows you to develop, ship, and run applications inside containers. It's necessary for ensuring that the dashboard runs in a consistent environment. If Docker isn't installed on your system, [click here](#docker-link-placeholder) to follow the installation guide.


The easiest way to install Docker is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites. Here are links to installers for each major OS:

* [Linux](https://docs.docker.com/desktop/install/linux-install/)
* [Mac](https://docs.docker.com/desktop/install/mac-install/)
* [Windows](https://docs.docker.com/desktop/install/windows-install/)

For command-line Linux distributions, you can install Docker Engine following the steps below:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```


## Installing Dashboard

### 1. Access the Dashboard Repo

Hummingbot Dashboard is open-source, allowing anyone to access, modify, and contribute to its codebase. To get started, visit the project repository on GitHub at the following link: [`hummingbot/dashboard`](https://github.com/hummingbot/dashboard).

### 2. Clone the Repository

To get a local copy of the project, clone the repository by running the command:

```bash
git clone https://github.com/hummingbot/dashboard
```

### 3. Set Up the Conda Environment

Once you've cloned the repository and navigated into its root directory, it's time to create a Conda environment. This environment ensures that all the required dependencies for the dashboard are installed and isolated from other projects. Run the following commands:

```bash
cd dashboard
make env create
```

### 4. Activate the Environment

After creating the environment, you'll need to activate it:

```bash
conda activate dashboard
```

### 5. Launch the Dashboard

With the environment activated, initiate the dashboard with:

```bash
make run
```

It might take a while to load the dashboard for the first time. Subsequent launches will typically be faster. Once the dashboard is up, open a web browser and navigate to <https://localhost:8501> to view it.

---
Congratulations - you've successfully set up the Hummingbot Dashboard. In the next tutorial, we'll delve into managing your credentials and understanding the registration process.

[Manage Credentials](2-manage-credentials.md){ .md-button .md-button--primary }