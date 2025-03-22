# Install from Source

This method is recommended for developers and users who need to modify Hummingbot's source code. Most users should prefer [Docker installation](docker.md).


## Install Dependencies

=== "macOS"
    **XCode Command Line Tools**
    ```bash
    xcode-select --install
    ```
    **Anaconda**

    **Graphical Installer** 
    
    On [anaconda.com/download](https://www.anaconda.com/download?utm_source=anacondadocs&utm_medium=documentation&utm_campaign=download&utm_content=installmacgraphical), register with Anaconda (if desired), and click  Download for Mac.


    **Command Line**

    MacOS with Intel x86:
    ```bash
    curl -O https://repo.anaconda.com/archive/Anaconda3-2024.10-1-MacOSX-x86_64.sh
    bash ~/Anaconda3-2024.10-1-MacOSX-x86_64.sh
    ```

    MacOS with Apple Silicon:
    ```bash
    curl -O https://repo.anaconda.com/archive/Anaconda3-2024.10-1-MacOSX-arm64.sh
    bash ~/Anaconda3-2024.10-1-MacOSX-arm64.sh
    ``` 

=== "Linux"
    Install / Update Dependencies
    ```bash
    sudo apt update && sudo apt upgrade -y && sudo apt install -y build-essential
    ```
    Install Miniconda 
    ```bash
    wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
    bash Miniconda3-latest-Linux-x86_64.sh
    ```

=== "Windows"
    Install WSL2 and Ubuntu using the following command. This may take a while to complete and might need to restart your computer.
    
    ```bash
    wsl --install -d Ubuntu
    ```
    !!! note
        Run all install commands below in an Ubuntu terminal, not Windows Command Prompt / PowerShell


## Installation Steps 

Clone the repository
```bash
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
```

Install the environment and dependencies
```bash
./install
```

Activate the environment
```bash
conda activate hummingbot
```

Compile the code
```bash
./compile
```

Launch Hummingbot
```bash
./start
```

You should see the Hummingbot welcome screen:

![welcome screen](/assets/img/welcome.png)

To get started with Hummingbot, check out the following pages and guides:

* [Basic Features](/client/)
* [V2 Strategy Walkthough](/v2-strategies/walkthrough/)
* [Hummingbot FAQ](/faq/)


## Dev Branch | Older Versions

If you need to install the development branch or an older version of Hummingbot, follow these steps:

### **Development Branch**
To use the latest development version, first clone the repository and then switch to the `development` branch:

```bash
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
git checkout development
git pull origin development  # Ensure you have the latest updates
```

### **Previous Versions**
To install a specific older version, first list the available tags to find the correct version:

```bash
git tag
```

Once you've identified the desired version (e.g., `v2.1.0`), switch to it using:

```bash
git checkout v2.1.0
```

The tags for previous versions follow this format: `vx.x.x` (e.g., `v2.1.0`).

---

## Gateway: Required for DEX Trading

!!! warning "Essential for Decentralized Exchanges"
    **Gateway must be installed separately** to trade on these supported DEXs:  
    - Uniswap (Ethereum)  
    - PancakeSwap (BNB Chain)  
    - Trader Joe (Avalanche)  
    - dYdX (Starkware)  
    - And [30+ others](/gateway/exchanges)  

[Gateway](/gateway) acts as middleware that enables Hummingbot to interact with blockchain-based decentralized exchanges. To set up, follow the instructions in [Gateway - Installation](/gateway/installation) to generate certificates and connect Gateway to Hummingbot.




