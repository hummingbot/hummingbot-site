Hummingbot is a local software client that helps you run trading strategies that automate the execution of orders and trades on various cryptocurrency exchanges and protocols.

## System Requirements

Hummingbot has been successfully tested with the following specifications:

| Resource             | Requirement                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Operating System** | **Linux**: Ubuntu 18.04 or later (recommended), Debian GNU/Linux 9, CentOS 7, Amazon Linux 2 AMI |
|                      | **MacOS**: macOS 10.12.6 (Sierra) or later                                                                                   |
|                      | **Windows**: Windows 10 or later                                                                                             |
| **Memory/RAM**       | 4 GB for one instance + 250 MB per additional instance_                                                                          |
| **Storage**          | **Install using Docker**: 5 GB per instance                                                                                  |
|                      | **Install from source**: 3 GB per instance                                                                                   |
| **Network**          | A reliable internet connection is critical to keeping Hummingbot connected to exchanges                                     |

## Installation Methods

You can install Hummingbot either (1) [via Docker](./docker.md) or (2) [from source](./source/).

### Docker

We recommend installing Hummingbot using Docker if:

- You want the simplest, easiest installation method
- You don't need to modify the Hummingbot codebase
- You want to deploy Hummingbot alongside with Dashboard, Orchestation Module, and other advanced configurations

For most new users, we recommend installing Hummingbot using Docker.

See [Install via Docker](./docker.md) for more info.

### Source

We recommend installing Hummingbot from source if:

- You want to customize or extend the Hummingbot codebase
- You want to build new components like connectors or strategies
- You want to learn how Hummingbot works at a deeper, technical level

See [Install from Source](./source/) or these guides for various environments:

* [Linux](./linux.md)
* [Windows](./windows.md)
* [MacOS](./mac.md)
* [Raspberry Pi](./raspberry-pi.md)

## Post-Installation

After you have successfully installed Hummingbot, See [Post-Installation](./post-installation.md) for how to manage the folder structure, launch/exit the client, update it, etc.

Then, check out the [Quickstart Guide](/quickstart) to build and run a trading bot!

## Orchestration Module

See [Orchestration](./orchestration.md) for more information on ways to deploy multiple instances of Hummingbot with the Orchestration Module.

## Hummingbot in the Cloud

For experienced users, we recommend running Hummingbot in a cloud instance, which enables your bots to run continually with minimized downtime.

Hummingot Docker instances takes up around 500 MB of storage space and 4 GB for Hummingbot Docker images. We have successfully installed and run Hummingbot on the following machine types:

| Provider              | Instance Type   | Instance Details      |
| --------------------- | --------------- | --------------------- |
| Google Cloud Platform | g1-small        | 2 vCPU, 4 GB memory |
| Amazon Web Services   | t2.small        | 2 vCPU, 4 GB memory   |
| Microsoft Azure       | Standard_D2s_v3 | 2 vCPU, 8 GB memory   |

These instances are pre-loaded with system files that takes up around 1.2 GB so we recommend having at least **8 GB of storage space** in your cloud server.

Here are more resources that might be helpful:

- [Installing Hummingbot on Digital Ocean](https://www.youtube.com/watch?v=XzQJbEJn9ag)
- [AWS - Connect to Your Amazon EC2 Instance](https://aws.amazon.com/ec2/?nc2=h_ql_prod_fs_ec2&ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)
- [AWS - Connecting to your Linux instance from Windows using PuTTY](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html)
- [Azure - Connect to a Linux-based VM](https://docs.microsoft.com/en-us/azure/marketplace/partner-center-portal/create-azure-vm-technical-asset#connect-to-a-linux-based-vm)