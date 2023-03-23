# Installing Hummingbot on Windows

## Prerequisites

The Hummingbot codebase is designed and optimized for UNIX-based systems such as macOS and Linux. For Windows users, we recommend running Hummingbot using [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/) in Windows Subsystem for Linux 2 (WSL 2).

Note that:

- You must be running Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11
- Virtualization needs to be enabled under your BIOS setting.

### Windows Subsystem for Linux 2 (WSL 2)

To troubleshoot WSL issues, see this [link](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting#installation-issues)

**1. Open Powershell as `admin`**

Search for "Powershell" on the start menu, right-click and "run as admin"

![Powershell start](/assets/img/wsl-powershell.png)

**2. Run the Install WSL commmand**

```bash
wsl --install
```

By default, WSL uses the Ubuntu distribution of Linux, which is compatible for Hummingbot.

**3. Start WSL**

After the installation, just type `wsl` on the Powershell or on the Command prompt.

Note that the first time WSL is executed, you will be asked to create a new default username/password.

**4. Install Ubuntu from Windows Store**

Alternatively, after WSL is installed, search for **Ubuntu** in the Windows Store and install it as an app in the Start menu. That way, you don't have to run Powershell every time you use Hummingbot.

![Powershell start](/assets/img/wsl-distros.png)

## Install via Docker

### Install Docker in WSL

With WSL installed, you now have a Linux Virtual Machine running under Windows.

![Linux on Windows](/assets/img/wsl-running.png)

Follow the instructions below to complete the Docker installation process.

```bash
# 1) Remove older / currently installed versions of Docker first 
$ sudo apt-get remove docker docker-engine docker.io containerd runc

# 2) Update the package index
$ sudo apt-get update && sudo apt-get upgrade -y

# 3) Install necessary packages
$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common gnupg lsb-release

# 4) Add Docker's official GPG key 
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 5) Setup the repository
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu  $(lsb_release -cs)  stable"

# 6) Install Docker
$ sudo apt update && sudo apt-get install docker-ce

# 7) Start the Docker service
$ sudo service docker start 

# 8) Allow docker commands without requiring sudo prefix. If you are running as root replace $USER with your username
$ sudo usermod -aG docker $USER

# 9) Important! Restart the terminal first before running the create scripts 
$ exit
```

Once Docker has been successfully installed, launch a Hummingbot instance following one of the [Deploy Examples](/installation/deploy/).

## Install from Source

While some users have reported successfully being able to install and compile Hummingbot successfully on Windows machines, it is not officially supported.
