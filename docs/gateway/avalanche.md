Notes about connecting Gateway to the Avalanche blockchain and its decentralized exchanges.

## Special Notes about Avalanche and Pangolin

Gateway V2 uses Avalache's public RPC URLs for connecting to Avalanche and Pangolin. This is good enough for running short-term tests on Pangolin. However, for real trading workloads, you should get a dedicated Avalanche RPC endpoint for your trading bot (e.g. via [Moralis Speedy Nodes](https://moralis.io/speedy-nodes/)) - which allows for much higher RPC request volumes from trading bots.

Once you have got a Speedy Node URL, you can set it into Gateway V2 via the following commands

```
# Set the node URL for Avalanche mainnet
gateway config avalanche.networks.avalanche.nodeURL <Moralis node URL>

# Set the node URL for Avalanche testnet
gateway config avalanche.networks.fuji.nodeURL <Moralis testnet node URL>
```