Below, we show you how to install and use Gateway from a non-technical trader's perspective. 

For developers adding DEX connectors or otherwise modifying Gateway, see [Setting up Gateway for Developers](/developers/gateway/setup/) for instructions on how to install Gateway from source.

## Prerequisites

Gateway requires Docker to be installed on the host system. You can find instructions on how to install Docker from Docker's website:

* [Installing Docker on Windows](https://docs.docker.com/desktop/windows/install/)
* [Installing Docker on Linux](https://docs.docker.com/engine/install/ubuntu/)
* [Installing Docker on macOS](https://docs.docker.com/desktop/mac/install/)

You will also need to have an Infura account to set up Gateway, as the setup process will ask you for your Infura API key. Infura accounts are free, and you can create your own at https://infura.io/.

## Setting up Gateway

Inside the main Hummingbot console, issue the command

```
gateway create
```

This initializes Hummingbot gateway and starts it as a Docker container in your system. Once gateway has been initialized, it will be automatically started whenever you start Hummingbot.

You will be asked to input your Infura API key after the Docker container has been created and running. Enter the API key, and wait for the configuration to be loaded in the Gateway container.

Once you see the message "Loaded new configs into Gateway container", and the "Gateway" status flips to "ON" in the status bar, your Gateway installation is ready to use.

![Gateway Running](/assets/img/gateway-create.png)

## Setting up DEX connectors

Once Gateway is up and running, you can then use `gateway connect` to add connections to decentralized exchanges. 

Let's say you want to connect to Uniswap.

```
gateway connect uniswap
```

You will then be asked about which network you want to connect to (i.e. mainnet or testnets), and then the private key of your wallet.

![Connecting wallet to Gateway](/assets/img/gateway-connect.png)

Once your wallet has been connected to the gateway, you can the connection with

```
balance
```

And you should see your wallet balance on the native blockchain asset (i.e. ETH for Uniswap / Ethereum, AVAX for Pangolin / Avalanche) for your connected networks related to the decentralized exchanges. Other ERC20 token assets on your wallet will only be displayed once you have loaded an [amm_arb strategy](/strategies/amm-arbitrage/).

![Getting blockchain asset balances](/assets/img/gateway-balance.png)

## No auto-wrapping

Certain DEXs like Uniswap and TraderJoe automatically wrap native tokens that are not ERC-20, so that users can trade tokens such as `ETH` and `AVAX` through the interface. Behind the scenes, these exchanges automatically wrap these tokens into ERC-20 compliant `WETH` and `WAVAX` tokens.

Gateway does not auto-wrap tokens by default, so users need to wrap native tokens into ERC-20 tokens before using them with Gateway. As of the `1.4.0` release, there is no error message that lets you know if the token can't be used when it's not wrapped and instead will just display ``"Markets are not ready"`` but we are working on adding more informative messages within the next few releases.
