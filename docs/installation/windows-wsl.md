## What is Windows WSL?

WSL is an acronym to **Windows Subsystem for Linux**, and described by Microsoft as:

> *The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup.*

With WSL, windows 10/11 users are able to run a Linux Virtual Machine without performance loss, and without the need of dual boot. 

It is currently the best way to run Hummingbot Client on Windows OS. After enabling WSL, you can install Hummingbot Client using the Linux instructions using [Docker](./docker) or []

> NOTE: WSL is only available for Windows 10 & 11. For earlier versions, use [Docker Desktop](./docker/#windows) for *Docker install* or [Git for Windows](.source/#windows) *Source install*.

More detail about WSL [here](https://docs.microsoft.com/en-us/windows/wsl/about)

## System Requirements

- Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11.
- For Windows 10, only 64-bit versions are supported

## Installing WSL

**1. Open Powershell as *admin***

Search for "Powershell" on the start menu, right-click and "run as admin"

![Powershell start](/assets/img/wsl-powershell.png)

**2. Run the Install WSL commmand**

=== "Install wsl command"

    ```bash
    wsl --install
    ```

The Ubuntu distribution will be installed as default. To install different Linux distributions run:

=== "Installing different distributions"

    ```bash
    # 1) List the available Linux distributions
    wsl --list --online
    # 2) Install an specific Linux distribution
    wsl --install -d <Distribution Name>
    ```

**3. Start WSL**

After the installation, just type `wsl` on the Powershell or on the Command prompt.

The first time WSL is executed, you will be asked to create a new default username/password

**3.1 Install the Linux Distribution from Windows Store**

Alternatively, after WSL is installed, you can search the Windows store for different Linux distributions as an app on the start menu. That way, you don't have to run Powershell everytime you want to use WSL. 

![Powershell start](/assets/img/wsl-distros.png)

**4. Install Hummingbot**

With WSL installed, you now have a Linux Virtual Machine running under Windows.

![Linux on Windows](/assets/img/wsl-running.png)

To install Hummingbot Client, follow the Linux instructions for [Docker install](./docker/#linuxubuntu) or [Source install](/source/#linuxubuntu)

