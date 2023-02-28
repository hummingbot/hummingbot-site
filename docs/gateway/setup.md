After you have [installed Gateway](installation.md), you should be ready to interact with it. This page shows you various commands that help you configure Gateway from inside the Hummingbot client.

### Checking Gateway status

Once you see `GATEWAY: ONLINE` in the top status bar in the Hummingbot client, your Gateway is ready to use with Hummingbot.

[![](./gateway-status.png)](./gateway-status.png)

You can also run the `gateway status` command, which prints a list of the connected chains/networks and their current block number.

```python
>>> gateway status

    network     chainID     rpcURL                          currentBlockNumber  nativeCurrency
    mainnet     1           https://rpc.ankr.com/eth        16699791            ETH
    goerli      5           https://rpc.ankr.com/eth_goerli 8549282             ETH
```

### Listing Gateway commands

Run the command `gateway -h` to print out the different commands you can use with gateway.

```python
>>> gateway -h

usage: gateway [-h] {create,config,connect,connector-tokens,generate-certs,start,status,stop,test-connection} ...

positional arguments: {create,config,connect,connector-tokens,generate-certs,start,status,stop,test-connection}
config              View or update gateway configuration
connect             Create/view connection info on gateway connector
connector-tokens    Report token balances for gateway connectors
generate-certs      Create ssl certificate for gateway
test-connection     Ping gateway api server

optional arguments:
-h, --help          show this help message and exit

```

## Getting help

To get help before running a command, run `gateway [command] -h`.

```python
>>> gateway config -h
usage: gateway config [-h] [key] [value]

positional arguments:
    key     Name of the parameter you want to change
    value   New value for the parameter

optional arguments:
    -h, --help show this help message and exit
```

## Listing DEX connectors

Running the `gateway list` command will list all available Gateway DEX connectors, the blockchains where they are supported, and their [Connector Tier](/exchanges/#connector-tiers), which determines the level of maintenance effort allocated to the connector.

```python
>>> gateway list
    +----------+------------------------+---------+
    | Exchange | Chains                 | Tier    |
    |----------|------------------------|---------|
    | uniswap  | ethereum, polygon      | GOLD    |
```

## Connecting to a DEX

Use `gateway connect [exchange]` to add connections to DEXs. See [Exchanges](/exchanges/) for all available connectors.

You will then be asked about which instance of Uniswap you want to connect. You'll be asked to specify `chain` (a Layer 1 blockchain architecture like `ethereum` or `polygon`), `network` (mainnet or testnet networks available for the chain like `mainnet`, `arbitrum_one`, `optimism`), and the private key of your wallet. 

```python
>>> gateway connect uniswap

Which chain do you want uniswap to connect to? (ethereum, polygon)
>>> ethereum

Which network do you want uniswap to connect to? (mainnet, goerli, arbitrum_one, optimism)?
>>> mainnet

Do you want to continue to use node url 'https://rpc.ankr.com/eth' for ethereum-mainnet? (Yes/No)
>>> Yes

Enter your ethereum-mainnet wallet private key
>>> *****************************************

The uniswap connector now uses wallet [public address] on ethereum-mainnet.
```

## Fetching wallet balances

Once your wallet has been connected to a Gateway DEX, you can the test the connection by running the `balance` command. 

You should see your wallet balance on the native blockchain asset (i.e. ETH for Uniswap/Ethereum, BNB for PancakeSwap/BSC) for each connection.

```python
>>> balance

uniswap_ethereum_mainnet:
    Asset   Total   Total($)    Allocated
    ETH     0.0000         0

uniswap_ethereum_goerli:
    Asset   Total   Total($)    Allocated
    ETH     0.0000         0
```

## Adding new symbols to `balance`

Use the `gateway connector-tokens` command to display additional tokens in the `balance` command.

```python
>>> gateway connector-tokens uniswap_ethereum_mainnet WETH,DAI

The 'balance' command will now report token balances WETH,DAI for 'uniswap_ethereum_mainnet'.

>>> balance

uniswap_ethereum_mainnet:
    Asset   Total   Total($)    Allocated
    ETH     0.0000         0
    WETH    0.0000         0
    DAI     0.0000         0
```

## Updating config parameters

Gateway supports a robust configuration management system for each supported chain, network and exchange. You can see all the current configuration by running `gateway config`

```python
>>> gateway config

Gateway Configurations (localhost:15888):
server:
    certificatePath: ./certs/
    logPath: ./logs
    ...
```

You can filter and see a specific configuration parameter with `gateway config <param>`:

```python
>>> gateway config ethereum.gasLimitTransaction

Gateway Configurations (localhost:15888):
ethereum:
    gasLimitTransaction: 3000000
```

To change it, simply add an updated value after it: `gateway config <param> <new-value>`:

```python
>>> gateway config ethereum.gasLimitTransaction 1000000

The config has been updated.
```

Gateway will automatically restart to incorporate the new settings.

Alternatively, you may find it easier to edit the configuration files for each chain and connector directly. These are located in the `/conf` directory in your Gateway files. Make sure to stop and start the Gateway server after each change.

## Configuring node providers

The node provider that you use to communicate with a blockchain network is critically important. The speed/latency of your node connection and its ability to read/write to the network may fluctuate greatly, especially in congested, volatile markets. 

Whether you use a cloud node service like Alchemy or run your own node client, you will connect to the node via the **RPC URL**, defined for each chain/network combination. This is set by the `nodeURL` configuration parameter for each chain/network, defined in the configuration file for each chain.

To help new users use Gateway, Hummingbot assumes a default `nodeURL` for each supported chain/network and automatically connects to it when users connect to a DEX. 

Currently, the default `nodeURL` for each chain/network uses [Ankr RPC endpoints](https://www.ankr.com/rpc/) where available, since they do not require users to sign up for an account.

For certain testnet or other networks that Ankr doesn't support, the default `nodeURL` may be an alternate public endpoint, or in certain cases, an [Infura](https://infura.io/) endpoint, which users need to configure with their Infura key to use.

Here are the current default `nodeURL` settings for Ethereum mainnet and testnet networks, which are defined in the [default config file](https://github.com/hummingbot/gateway/blob/main/src/templates/ethereum.yml):

```
mainnet:
    nodeURL: https://rpc.ankr.com/eth
goerli:
    nodeURL: https://rpc.ankr.com/eth_goerli
```

Here's how to change this setting from inside the Hummingbot client:

```python
>>> gateway config ethereum.networks.mainnet.nodeURL

Gateway Configurations (localhost:15888):
ethereum:
    mainnet:
        nodeURL: https://rpc.ankr.com/eth

>>> gateway config ethereum.networks.mainnet.nodeURL https://eth-mainnet.g.alchemy.com/v2/ALCHEMY-KEY

The config has been updated.
```

## Working with tokens

Since token symbols are not unique and may have duplicates on each network, it's very important to understand how symbols map to addresses for each chain/network. Also, you may also need to approve tokens before you can trade them.

See [Working with Tokens](tokens.md) for more details.
