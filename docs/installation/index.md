Hummingbot is a local software client that helps you run trading strategies that automate the execution of orders and trades on various cryptocurrency exchanges and protocols.

## System Requirements

Hummingbot has been successfully tested with the following specifications:

| Resource             | Requirement                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Operating System** | **Linux**: Ubuntu 18.04 or later Ubuntu 20.04 (recommended) \*Other Linux installations: Debian GNU/Linux 9, CentOS 7, Amazon Linux 2 AMI |
|                      | **MacOS**: macOS 10.12.6 (Sierra) or later                                                                                   |
|                      | **Windows**: Windows 10 or later                                                                                             |
| **Memory/RAM**       | 4 GB one instance _+250 MB per additional instance_                                                                          |
| **Storage**          | **Install using Docker**: 5 GB per instance                                                                                  |
|                      | **Install from source**: 3 GB per instance                                                                                   |
| **Network**          | A reliable internet connection is critical to keeping Hummingbot connected to exchanges.                                     |

## Installation Methods

In each supported operating system, you can install Hummingbot either via Docker or from source.

We recommend installing Hummingbot using Docker if:
- You are just looking to test it out
- You don't need to customize or extend the codebase
- You are using Windows or another non-Linux environment

See [Docker](./docker.md) for detailed instructions for various configurations.

We recommend installing Hummingbot from source if:
- You are a developer seeking to understand, customize, or extend the codebase
- You can building new components like connectors or strategies

For most users, we recommend installing Hummingbot using Docker, which lets you deploy Hummingbot in various configurations. Using Docker for Hummingbot deployment offers several benefits, such as simplifying the installation process, enabling easy versioning and scaling, and ensuring a consistent and isolated environment for running the bot. 

See [Source](./source.md) for detailed instructions on this path.

## Guides by Environment

In addition, here community-maintained resources about installation issues specific to various environments:

* [Linux](./linux.md)
* [MacOS](./mac.md)
* [Windows](./windows.md)
* [Raspberry Pi](./raspberry-pi.md)

## Running and Updating Hummingbot

After you have successfully installed Hummingbot, you may need to update it, get help on issues, and contribute to the codebase.

See [Updating Hummingbot](./updates.md) for detailed instructions on how to manage your installation.

## Multiple Bots

See [Multiple Bots](./multiple-bots.md) for more information on ways to deploy multiple instances of Hummingbot and the new Orchestration Module.

## Hummingbot in the Cloud

For experienced and technical users, we recommend setting up a cloud instance and installing the Docker version or from source. This enables Hummingbot to run 24/7.

Hummingot Docker instances takes up around 500 MB of storage space and 4 GB for Hummingbot Docker image. We have ested to install and run Hummingbot on the following machine types:

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