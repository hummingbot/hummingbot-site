This page contains notes about connecting Gateway to the Ethereum blockhain and other Ethereum Virtual Machine (EVM)-based blockchains.

## Mainnet

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/ethereum)

📁 [EVM class folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/evm) 

### Supported Networks

* `mainnet` (mainnet)
* `kovan` (testnet)
* `ropsten` (testnet)

### Node Providers

As of the `v1.5.0` release, Gateway's default node provider is [Infura](infura.io). To add your Infura API key, run `gateway config ethereum.nodeKey` and enter your Infura API key (i.e. `https://mainnet.infura.io/v3/<API-key>`).

Alternatively, run `gateway config ethereum.networks.mainnet.nodeURL` and add the mainnet RPC URL from any provider. To set the testnet RPC URLs, run `gateway config ethereum.networks.kovan.nodeURL` and `gateway config ethereum.networks.ropsten.nodeURL`.

## Avalanche  

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/avalanche)

### Supported Networks

* `avalanche` (mainnet)
* `fuji` (testnet)

### Node Providers

As of the `v1.5.0` release, Gateway's default node provider is [Moralis](moralis.io). To add your Moralis Speedy Node API key, run `gateway config avalanche.nodeKey` and enter your Moralis Speedy Node API key (i.e. `https://speedy-nodes-nyc.moralis.io/<API-KEY>/avalanche/mainnet`).

Alternatively, run `gateway config avalanche.networks.avalanche.nodeURL` and add the mainnet RPC URL from any provider. You can use the default Avalanche RPC endpoint `https://api.avax.network/ext/bc/C/rpc`, but it may be slow. To set the testnet RPC URLs, run `gateway config avalanche.networks.fuji.nodeURL`.

## Harmony

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/harmony)

## Polygon

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/polygon)

## Arbitrum

Coming soon.

## BNB Chain

Coming soon.

## Optimism

Coming soon.
