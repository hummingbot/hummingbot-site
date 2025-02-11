# Hummingbot V2 + Dashboard

**Hummingbot 2.0** now features a Dashboard GUI, replacing the traditional CLI for a more intuitive experience. 

The **recommended** installation method, especially for new users, is **Hummingbot + Dashboard**, allowing you to easily create, backtest, and deploy strategies. 

Other standalone installation options like [Docker](docker.md) and [Source](source.md) are still available.

## System Requirements

### **Cloud server or local machine** 

| **Component**        | **Specifications**                                     |
|----------------------|-------------------------------------------------------|
| **Operating System** | Linux x64 or ARM (Ubuntu 20.04+, Debian 10+)          | 
| **Memory**           | 4 GB RAM per instance                                 |
| **Storage**          | 5 GB HDD space per instance                           |
| **CPU**              | at least 1 vCPU per instance / controller             |


### **Docker Compose**

Hummingbot uses [Docker Compose](https://docs.docker.com/compose/), a tool for defining and running multi-container Docker applications. 

=== "macOS"
    Install Docker Desktop from the [official Docker website](https://docs.docker.com/desktop/install/mac-install/)
    

=== "Linux"
    1. **Desktop Users**:  
       Install Docker Desktop from [official site](https://docs.docker.com/desktop/install/linux-install/)
    
    2. **Headless Servers** (VPS like AWS EC2 or Digital Ocean):  
       ```bash
       curl -fsSL https://get.docker.com -o get-docker.sh
       sh get-docker.sh
       ```
    

=== "Windows"
    !!! note "Prerequisites"
        - Docker Desktop installed  
        - WSL2 enabled  
        - Ubuntu distribution installed
    
    **Always run commands in:**  
    Ubuntu Terminal (Start Menu → Ubuntu)  
    

## Installation Steps

[Hummingbot Deploy](https://github.com/hummingbot/deploy) is a dedicated repo that allows users to quickly deploy Hummingbot using the Dashboard as the front end UI. The compose file spins up containers for the [Dashboard](https://github.com/hummingbot/dashboard), [Backend-API](https://github.com/hummingbot/backend-api) as well as the **Hummingbot Broker**.

```bash
git clone https://github.com/hummingbot/deploy.git
cd deploy
bash setup.sh
```

The setup script will pull the Docker images defined in repo's `docker-compose.yml` file and start them as new containers:

```bash
[+] Running 7/7
 ✔ Network deploy_emqx-bridge   Created
 ✔ Volume "deploy_emqx-data"    Created
 ✔ Volume "deploy_emqx-log"     Created
 ✔ Volume "deploy_emqx-etc"     Created
 ✔ Container dashboard          Started 
 ✔ Container backend-api        Started 
 ✔ Container hummingbot-broker  Started 
```

After all containers have started, access the Dashboard at <http://localhost:8501> in your browser.

!!! note "Cloud Servers"
    If you are using a cloud server or VPS, replace `localhost` with the IP of your server. You may need to edit the firewall rules to allow inbound connections to the necessary ports.  

---

## Dashboard Quickstart

Once you've installed Dashboard, check out the [Hummingbot Dashboard Quickstart](../blog/posts/quickstart-dashboard/index.md) guide, or the links below with a short explanation of each page (also in the sidebar).

- [Adding Credentials:](credentials.md)

- [Viewing Portfolio:](portfolio.md)

- [Configuring Strategies:](config.md)

- [Backtesting Strategies:](backtest.md)

- [Deploying Instances:](deploy.md)

- [Managing Instances:](instances.md)    


## Standalone Hummingbot

<div class="grid cards" markdown>

-   __[Docker Installation](./docker.md)__

    ---
    
    - 🐳 Containerized environment  
    - 🛡️ Simplest, easiest setup   
    - 🔄 Deploy multiple instances  
    - **Recommended for most users**

    [Install via Docker →](./docker.md)

-   __[Source Installation](./source.md)__

    ---
    
    - 💻 Developer-friendly setup  
    - 🔧 Modify core codebase  
    - 🧪 Test unreleased features  
    - **For advanced users**

    [Install from Source →](./source.md)

</div>

!!! note "Need help deciding?"
    See [Installation Overview](./install-overview.md) for comparison of different methods.




