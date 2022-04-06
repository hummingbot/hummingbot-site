---
tags:
- gateway
- gateway v2
- protocol connector
---

## What is Hummingbot Gateway V2?

Hummingbot Gateway V2 is API middleware that allows Hummingbot to connect to decentralized exchanges on various blockchain protocols that are used in the [amm-arb strategy](/strategies/amm-arbitrage/) and other strategies. Essentially, Gateway is a light web server that enables Hummingbot client to send and receive data from different blockchain protocols and provides an easier entry point for external devs to build connectors to other protocols.

Gateway V2 is now part of the Hummingbot repository. You can find the gateway V2 code living under
the `gateway` directory inside the Hummingbot repository.

## Prerequisites

Gateway V2 requires Docker to be installed on the host system. You can find instructions on how to install Docker from Docker's website:

* [Installing Docker on Windows](https://docs.docker.com/desktop/windows/install/)
* [Installing Docker on Linux](https://docs.docker.com/engine/install/ubuntu/)
* [Installing Docker on macOS](https://docs.docker.com/desktop/mac/install/)

You will also need to have an Infura account to set up Gateway V2, as the setup process will ask you for your Infura API key. Infura accounts are free, and you can create your own at https://infura.io/.

## Setting Up Gateway V2

Inside the main Hummingbot console, issue the command

```
gateway create
```

This initializes Hummingbot gateway and starts it as a Docker container in your system. Once gateway has been initialized, it will be automatically started whenever you start Hummingbot.

You will be asked to input your Infura API key after the Docker container has been created and running. Enter the API key, and wait for the configuration to be loaded in the Gateway container.

Once you see the message "Loaded new configs into Gateway container", and the "Gateway" status flips to "ON" in the status bar, your Gateway V2 installation is ready to use.

![Gateway V2 Running](/assets/img/gateway-create.png)

## Setting Up DEX connectors

Once Gateway V2 is up and running, you can then use `gateway connect` to add connections to decentralized exchanges. As of today, Gateway V2 supports Uniswap (V2) and Pangolin. More decentralized exchanges are on the way for future releases.

Let's say you want to connect to Uniswap.

```
gateway connect uniswap
```

You will then be asked about which network you want to connect to (i.e. mainnet or test nets), and then the private key of your wallet.

![Connecting wallet to Gateway V2](/assets/img/gateway-connect.png)

Once your wallet has been connected to the gateway, you can the connection with

```
balance
```

And you should see your wallet balance on the native blockchain asset (i.e. ETH for Uniswap / Ethereum, AVAX for Pangolin / Avalanche) for your connected networks related to the decentralized exchanges. Other ERC20 token assets on your wallet will only be displayed once you have loaded an [amm_arb strategy](/strategies/amm-arbitrage/).

![Getting blockchain asset balances](/assets/img/gateway-balance.png)

## Special Notes about Avalanche and Pangolin

Gateway V2 uses Avalache's public RPC URLs for connecting to Avalanche and Pangolin. This is good enough for running short-term tests on Pangolin. However, for real trading workloads, you should get a dedicated Avalanche RPC endpoint for your trading bot (e.g. via [Moralis Speedy Nodes](https://moralis.io/speedy-nodes/)) - which allows for much higher RPC request volumes from trading bots. 
