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

## Installing Hummingbot via Docker

For most users, we recommend installing Hummingbot using [Docker](https://www.docker.com/), which lets you deploy Hummingbot in various configurations. 

Using Docker for Hummingbot deployment offers several benefits, such as simplifying the installation process, enabling easy versioning and scaling, and ensuring a consistent and isolated environment for running the bot.

Follow the instructions listed in the [Deploy Examples](/installation/deploy/) page to install Hummingbot with Docker.

## OS-Specific Guides

In addition, here are guides that walk you through the installation process for each operating system:

* [Linux](./linux.md)
* [MacOS](./mac.md)
* [Windows](./windows.md)
* [Raspberry Pi](./raspberry-pi.md)

## Releases

Once a month, we publish an official [Release](/governance/releases) of Hummingbot and Hummingbot Gateway, marked by code publication on Github and DockerHub and the publication of the [release notes](/release-notes). 

Subscribe to the [Hummingbot Newletter](https://hummingbot.substack.com/) to get notified when a new release ships.

### Github

The official Hummingbot Github is: <https://github.com/hummingbot>. The main repos are:

* [Hummingbot](https://github.com/hummingbot/hummingbot)
* [Hummingbot Gateway](https://github.com/hummingbot/gateway)

### DockerHub

The official Hummingbot DockerHub is: <https://hub.docker.com/r/hummingbot>. Here, we publish images that correspond to various Github branches:

  * `hummingbot`: `master` (latest) and `development` images, starting with version 1.5.0
  * `gateway`: `main` (latest) and `development` images, starting with version 1.13.0

## Updating Hummingbot

Hummingbot is regularly updated each month (see [Release Notes](/release-notes/)), we recommend that users periodically update their installations to get the latest version of the software.

Users of the Docker version of Hummingbot can utilize the instructions and scripts found in the [Deploy Examples](https://github.com/hummingbot/deploy-examples/tree/main/bash_scripts) repo. Alternatively, they can update their instances to the latest image, which is updated with each release (e.g. `hummingbot/hummingbot:latest`).

For users who have installed from source, they can update their Hummingbot branches to `master` (with every release) or `development` branch (updated continually):

```
git checkout [branch]
git pull origin [branch]
```

## Running Multiple Bots

See [Multiple Bots](./multiple-bots.md) for more information on ways to deploy multiple instances of Hummingbot and the new Orchestration Module.

## Running Hummingbot in the Cloud

For experienced and technical users, we recommend setting up a cloud instance and installing the Docker version or from source. This enables Hummingbot to run 24/7.

Hummingot Docker instances takes up around 500 MB of storage space and 4 GB for Hummingbot Docker image. We have ested to install and run Hummingbot on the following machine types:

| Provider              | Instance Type   | Instance Details      |
| --------------------- | --------------- | --------------------- |
| Google Cloud Platform | g1-small        | 2 vCPU, 4 GB memory |
| Amazon Web Services   | t2.small        | 2 vCPU, 4 GB memory   |
| Microsoft Azure       | Standard_D2s_v3 | 2 vCPU, 8 GB memory   |

These instances are pre-loaded with system files that takes up around 1.2 GB so we recommend having at least **8 GB of storage space** in your cloud server.

Here are more resources that might be helpful:

- [AWS Deployment for Hummingbot](https://www.youtube.com/watch?v=ppTxEngRDmU&list=PLDwlNkL_4MMc1GxjWShinaX4FQCxgOkyO&index=9)
- [Hummingbot on different cloud providers](https://blog.hummingbot.org/2019-06-cloud-providers/)
- [AWS - Connect to Your Amazon EC2 Instance](https://aws.amazon.com/ec2/?nc2=h_ql_prod_fs_ec2&ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)
- [AWS - Connecting to your Linux instance from Windows using PuTTY](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html)
- [Azure - Connect to a Linux-based VM](https://docs.microsoft.com/en-us/azure/marketplace/partner-center-portal/create-azure-vm-technical-asset#connect-to-a-linux-based-vm)