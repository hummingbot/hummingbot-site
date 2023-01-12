Below, we show you how to install and use Gateway from a non-technical trader's perspective. You'll run a command from the Hummingbot client that installs, configures, and uses the Gateway Docker image to connect to DEXs.

Alternatively, you can run a standalone Gateway server and connect the Hummingbot client to it manually, which offers more customizability. We recommend this path for developers adding DEX connectors or otherwise modifying Gateway. See [Setting up Gateway for Developers](/developers/gateway/setup/) for instructions on this workflow.

## Prerequisites

Installing Gateway from the Hummingbot client requires Docker to be installed on the host system. You can find instructions on how to install Docker from Docker's website:

* [Installing Docker on Windows](https://docs.docker.com/desktop/windows/install/)
* [Installing Docker on Linux](https://docs.docker.com/engine/install/ubuntu/)
* [Installing Docker on macOS](https://docs.docker.com/desktop/mac/install/)

## Setting up Gateway

Inside the main Hummingbot console, issue the command:
```
gateway create
```

This initializes Gateway as a Docker container in your system. Once Gateway has been initialized, it will be automatically started whenever you start Hummingbot.

Once you see the message "Loaded new configs into Gateway container", and the "Gateway" status flips to "ON" in the status bar, your Gateway installation is ready to use.

[![Gateway Running](/assets/img/gateway-create.png)](/assets/img/gateway-create.png)

## Connecting to a DEX

Once Gateway is up and running, you can then use `gateway connect` to add connections to decentralized exchanges. 

Let's say you want to connect to Uniswap:
```
gateway connect uniswap
```

You will then be asked about which instance of Uniswap you want to connect. You'll be asked to specify a Layer 1 blockchain (i.e. `ethereum`, `polygon`) and network (i.e. `mainnet`, `arbitrum_one`, `optimism`, etc), and then the private key of your wallet. See the [Uniswap documentation page](/gateway/exchanges/uniswap) for which chains and network it support.

Once your wallet has been connected to the gateway, you can the test the connection by running `balance`.

[![Connecting wallet to Gateway](/assets/img/gateway-connect.png)](/assets/img/gateway-connect.png)

And you should see your wallet balance on the native blockchain asset (i.e. ETH for Uniswap / Ethereum, AVAX for Pangolin / Avalanche) for your connected networks related to the decentralized exchanges. Other ERC20 token assets on your wallet will only be displayed once you have loaded an [amm_arb strategy](/strategies/amm-arbitrage/).

[![Getting blockchain asset balances](/assets/img/gateway-balance.png)](/assets/img/gateway-balance.png)

## Changing Gateway configuration

Gateway supports a robust configuration management system for each supported chain, network and exchange. You can see all the current configuration by running:
```
gateway config
```

Afterwards, change a setting by running:
```
gateway config <chain>.networks.<network>.<setting>
```

For example, to change the `nodeURL` for Ethereum mainnet, you can run `gateway config ethereum.networks.mainnet.nodeURL`. To change the `nodeURL` for the Ethereum testnets, run `gateway config ethereum.networks.kovan.nodeURL` and `gateway config ethereum.networks.ropsten.nodeURL`.

!!! warning "Why does Gateway continually emit disconnection messages?"
    Any time you change a Gateway config, it restarts in order to propagate that setting across other related settings. Therefore, you may see log messages about Gateway losing and re-establishing connection. If Gateway doesn't restart, you can force it to start by running `gateway start`.

Click [here](/operation/commands-shortcuts/#gateway-commands) to see the different gateway commands.

## Connecting to a node provider

Connecting to a node provider is necessary for Hummingbot to receive and send data to a blockchain network. Alternatively, you can also run your own node client and connect to its RPC URL. This is set by the `nodeURL` configuration parameter for each network.

To help new users use Gateway, Hummingbot assumes a default `nodeURL` for each supported chain/network and automatically connects to it when users connect to a DEX. The default `nodeURL` for each chain/network uses [Ankr RPC endpoints](https://www.ankr.com/rpc/) where available, since they do not require users to sign up for an account. 

For certain testnet or other networks that Ankr doesn't support, the default `nodeURL` may be an alternate public endpoint, or in certain cases, an [Infura](https://infura.io/) endpoint, which users need to configure with their Infura key to use (see **Changing Gateway configuration**).

For a list of the default parameters including `nodeURL` for each chain/network, see [Ethereum and EVM-Based Chains](/gateway/chains/ethereum/).

## Working with Token Lists

When trading across different blockchains, it's very important to understand how symbols map to addresses for each chain/network. In Hummingbot, each chain/network defines a `tokenListType` (`FILE` or `URL`) and `tokenListSource` (path to the designated file or URL), which uses the [Token Lists](https://tokenlists.org/) standard to define a token dictionary for each network.

You can edit the `tokenListType` and `tokenListSource` parameters for each network by running `gateway config` (see **Changing Gateway configuration**)

For a list of the default parameters including `tokenListType` and `tokenListSource` for each chain/network, see [Ethereum and EVM-Based Chains](/gateway/chains/ethereum/).

## Adding tokens to `balance`

To have the `balance` command report balances for a specific token symbol, use the `gateway connector-tokens` command.

For instance, you can run the following command from the Hummingbot client:

```bash
# format: gateway connector-tokens [connector_chain_network] [symbol]
>>> gateway connector-tokens uniswap_ethereum_mainnet UNI

The 'balance' command will now report token balances UNI for 'uniswap_ethereum_mainnet'.
```

## No auto-wrapping

Certain DEXs like Uniswap and TraderJoe automatically wrap native tokens that are not ERC-20, so that users can trade tokens such as `ETH` and `AVAX` through the interface. Behind the scenes, these exchanges automatically wrap these tokens into ERC-20 compliant `WETH` and `WAVAX` tokens.

Gateway does not auto-wrap tokens by default, so users need to wrap native tokens into ERC-20 tokens before using them with Gateway. As of the `v1.4.0` release, there is no error message that lets you know if the token can't be used when it's not wrapped and instead will just display ``"Markets are not ready"`` but we are working on adding more informative messages within the next few releases.

## Approve Tokens

On Ethereum and EVM-compatible chains, wallets need to [approve](https://help.matcha.xyz/en/articles/4285134-why-do-i-need-to-approve-my-tokens-before-i-can-trade-them) other addresses such as DEXs before they can send tokens to them, creating an allowance.

To approve the tokens for spending on gateway, there are multiple ways outlined below. 

### 1. Use approve-token command. 

Hummingbot has a command that allows you to approve tokens for spending on gateway one token at a time. 

```bash

gateway approve-tokens [connector_chain_network] [symbol]

```

Here is an example of the approve-tokens command:

[![Approve tokens on dex using approve-tokens command.](/assets/img/approve-tokens-command.png)](/assets/img/approve-tokens-command.png)


### 2. Approve manually using DEX interface

You can use the Dex interface directly for approval. Once you approve a token, you will not have to to approve that token again on the Dex. Each token from a specific wallet you wish to trade requires a one-time approval.

Please note that you don't have to do a full swap to approve a token or multiple tokens, however you will need to pay for transaction fee for approving the token. Here is an example of the approval on Uniswap.

[![Approve tokens on dex using interface](/assets/img/dex-interface-approve.png)](/assets/img/dex-interface-approve.png)



### 3. Approve manually using explorer (etherscan)

Token approval can be done using the chain explorer such as etherscan in two ways:

-   Search for the `token address`on etherscan.

    a. if the contract is verified, go to `contract > Write contract > _approve`

    b. connect your wallet using the `connect to Web3` button. 

    c. Fill the details as displayed below. 

    [![Approve tokens using etherscan](/assets/img/etherscan-approve.png)](/assets/img/etherscan-approve.png)

    d. Approve the transaction and wait for it to be confirmed. 

- Search for the `Dex router address` on etherscan.

    a. if the contract is verified, go to `contract > Write contract > approveMax`

    b. connect your wallet using the `connect to Web3` button. 

    c. Fill the details as displayed below. 

    [![Approve tokens on dex using etherscan](/assets/img/etherscan-dex-approve.png)](/assets/img/etherscan-dex-approve.png)

    d. Approve the transaction and wait for it to be confirmed. 
