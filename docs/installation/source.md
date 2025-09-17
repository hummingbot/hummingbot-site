# Install from Source

This method is recommended for developers and users who need to modify Hummingbot's source code. Most users should prefer [Docker installation](docker.md).


## Install Dependencies

=== "macOS"
    ### 🛠️ macOS Setup Instructions

    #### ✅ Install Xcode Command Line Tools  
    These are essential for compiling some Python dependencies.

    ```bash
    xcode-select --install
    ```

    #### ✅ Install Anaconda (Recommended for macOS)

    !!! note
        We recommend using the full **Anaconda** distribution instead of lighter alternatives like **Miniconda**. **Anaconda** includes a broader set of preinstalled packages, which helps prevent dependency conflicts and installation errors commonly encountered with Miniconda.
    
    You can install Anaconda using either the graphical interface or the command line.

    ### 🔹 Option 1: Graphical Installer (Beginner-Friendly)

    1. Visit [anaconda.com/download](https://www.anaconda.com/download?utm_source=anacondadocs&utm_medium=documentation&utm_campaign=download&utm_content=installmacgraphical)
    2. Choose your version (Intel or Apple Silicon)
    3. Click **Download for Mac**
    4. Follow the installer prompts

    ### 🔹 Option 2: Command Line Installer

    Use this method if you're comfortable with the terminal.

    **For macOS with Intel (x86):**
    ```bash
    curl -O https://repo.anaconda.com/archive/Anaconda3-2024.10-1-MacOSX-x86_64.sh
    bash Anaconda3-2024.10-1-MacOSX-x86_64.sh
    ```

    **For macOS with Apple Silicon (M1/M2/M3):**
    ```bash
    curl -O https://repo.anaconda.com/archive/Anaconda3-2024.10-1-MacOSX-arm64.sh
    bash Anaconda3-2024.10-1-MacOSX-arm64.sh
    ```

=== "Linux"
    ### 🐧 Linux Setup Instructions

    #### ✅ Install/Update System Packages
    ```bash
    sudo apt update && sudo apt upgrade -y && sudo apt install -y gcc build-essential
    ```

    #### ✅ Install Anaconda
    ```bash
    curl -O https://repo.anaconda.com/archive/Anaconda3-2025.06-0-Linux-x86_64.sh
    bash ~/Anaconda3-2025.06-0-Linux-x86_64.sh
    ```

=== "Windows"
    ### 🪟 Windows Setup Instructions

    #### ✅ Install WSL2 and Ubuntu

    This may take a while to complete and may require a system restart.

    ```bash
    wsl --install -d Ubuntu
    ```

    Once the Ubuntu distribution is installed, open the Ubuntu terminal and follow the instructions in the Linux section to install the dependencies. 

    !!! note
        Run all install commands below in an Ubuntu terminal, **not** Windows Command Prompt or PowerShell.



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




