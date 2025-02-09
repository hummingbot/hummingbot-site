We recommend installing Hummingbot using Docker if you want the simplest, easiest installation method and don't need to modify the Hummingbot codebase.


## Install Docker Compose

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
    
## Installation (Client Only)

These instructions help you launch the standalone Hummingbot client.

### Clone Hummingbot Repo

Open a terminal and run the following commands to clone the Hummingbot Github repo and enter the root folder:

```bash
  git clone https://github.com/hummingbot/hummingbot.git
  cd hummingbot
```

### Launch Hummingbot 

```bash
  docker compose up -d
```

This will start to download the `latest` Hummingbot image if it's not already on your system. 

### Attach to Instance

The `-d` flag runs Hummingbot in detached mode. Attach to it by running the command:


```bash
  docker attach hummingbot
```

You should now see the Hummingbot welcome screen:

![welcome screen](/assets/img/welcome.png)

To get started with Hummingbot, check out the following pages and guides:

* [Basic Features](/client/)
* [V2 Strategy Walkthough](/v2-strategies/walkthrough/)
* [Hummingbot FAQ](/faq/)

## Dev Branch | Older Versions

If you need to install the development branch or an older version of Hummingbot, follow these steps:

### **Development Branch**
To use the latest development version, browse to the `hummingbot` folder and open the `docker-compose.yml` file using any text editor. Look for the `image` field, and replace `latest` with `development`.

```bash
    image: hummingbot/hummingbot:development
```


### **Previous Versions**
To install a specific older version, replace the image field with the desired version. The version tags will follow this format: `version-x.x.x` 
For example, to install version 2.0.0, replace the image field with:

```bash
image: hummingbot/hummingbot:version-2.0.0
```

---

## Gateway: Required for DEX Trading

!!! warning "Essential for Decentralized Exchanges"
    **Gateway must be installed separately** to trade on these supported DEXs:  
    - Uniswap (Ethereum)  
    - PancakeSwap (BNB Chain)  
    - Trader Joe (Avalanche)  
    - dYdX (Starkware)  
    - And [30+ others](/gateway/exchanges)  

**Key Differences** → [Why Gateway?](/gateway/overview)  

[Gateway](/gateway) acts as middleware that enables Hummingbot to interact with blockchain-based decentralized exchanges. To set up, follow the instructions in [Gateway - Installation](/gateway/installation) to generate certificates and connect Gateway to Hummingbot.