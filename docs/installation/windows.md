<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/i2Qb8vTLHbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

### Windows Subsystem for Linux 2 (WSL 2)

The Hummingbot codebase is designed and optimized for UNIX-based systems such as macOS and Linux. For Windows users, we recommend running Hummingbot using [Windows Subsystem for Linux 2 (WSL 2)](https://learn.microsoft.com/en-us/windows/wsl/install).

Note that:

- You must be running Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11
- Virtualization needs to be enabled under your BIOS setting.

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

![Powershell distros](/assets/img/wsl-distros.png)

## Install from Source

Since WSL 2 creates a virtual Linux environment inside Windows, users can install Hummingbot from source afterwards: [Install from Source](/installation/source).

While some users have reported successfully being able to install and compile Hummingbot successfully on Windows machines natively, it is not officially supported.

