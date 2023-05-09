The instructions below help you install a standalone Hummingbot instance from source on a Windows machine.

Watch the video:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/i2Qb8vTLHbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

Supported versions:

* Windows 10 or later
* WSL 2

### Windows Subsystem for Linux 2 (WSL 2)

Hummingbot is designed for Unix-based environment such as macOS or Linux, so Windows users should first install [Windows Subsystem for Linux 2 (WSL 2)](https://learn.microsoft.com/en-us/windows/wsl/install) before installing Hummingbot from source.

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

## Install Hummingbot

Since you have an Ubuntu environment inside Windows, you can now install Hummingbot from source following the [Linux instructions](./linux.md).

While some users have reported being able to install and compile Hummingbot on Windows machines natively, it is not officially supported.

