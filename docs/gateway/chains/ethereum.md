This page contains notes about connecting Gateway to the Ethereum blockhain and other Ethereum Virtual Machine (EVM)-based blockchains.

## Mainnet

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/ethereum)

📁 [EVM class folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/evm) 

## Avalanche  

📁 [Chain folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/avalanche)

### Moralis Speedy Nodes

Gateway uses Avalache's public RPC URLs for connecting to Avalanche-based DEXs like Pangolin, which is sufficient good enough for running short-term tests on Pangolin. 

However, for real trading workloads, you should get a dedicated Avalanche RPC endpoint for your trading bot via [Moralis Speedy Nodes](https://moralis.io/speedy-nodes/), which allows for much higher RPC request volumes from trading bots.

Afterwards, set the Speedy Node URL in Gateway:
```bash
# Set the node URL for Avalanche mainnet
gateway config avalanche.networks.avalanche.nodeURL <Moralis node URL>

# Set the node URL for Avalanche testnet
gateway config avalanche.networks.fuji.nodeURL <Moralis testnet node URL>
```

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
