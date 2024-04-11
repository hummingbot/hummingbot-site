The main Hummingbot code repository is:

<div class="grid cards" markdown>

- [__Hummingbot__](/client) Core trading client, strategies, and connectors

</div>

Other repos include:

<div class="grid cards" markdown>

- [__Gateway__](/gateway) API middleware for DEX connectors
- [__Deploy Examples__](https://github.com/hummingbot/deploy-examples) Examples of Hummingbot Docker deployments 
- [__Dashboard__](/dashboard) Community-maintained Hummingbot dashboards and apps
- [__Brokers__](/installation/brokers): Bot orchestration module

</div>

### MQTT Brokers Repo

See [Brokers](./broker.md) for more information orchestrating multiple instances of Hummingbot using MQTT message brokers.


### Deploy Examples Repo

- [Quickstart Guide to Deploy-Examples](../academy-content/posts/quickstart-deploy-examples/0-index.md): Guide on how to use the `deploy-examples` repo

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
