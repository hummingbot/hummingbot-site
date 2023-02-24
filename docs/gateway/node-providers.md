## Connecting to node provider

Connecting to a node provider is necessary for Hummingbot to receive and send data to a blockchain network. Alternatively, you can also run your own node client and connect to its RPC URL. This is set by the `nodeURL` configuration parameter for each network.

To help new users use Gateway, Hummingbot assumes a default `nodeURL` for each supported chain/network and automatically connects to it when users connect to a DEX. The default `nodeURL` for each chain/network uses [Ankr RPC endpoints](https://www.ankr.com/rpc/) where available, since they do not require users to sign up for an account.

For certain testnet or other networks that Ankr doesn't support, the default `nodeURL` may be an alternate public endpoint, or in certain cases, an [Infura](https://infura.io/) endpoint, which users need to configure with their Infura key to use (see **Changing Gateway configuration**).

For a list of the default parameters including `nodeURL` for each chain/network, see [Ethereum and EVM-Based Chains](/gateway/chains/ethereum/).
