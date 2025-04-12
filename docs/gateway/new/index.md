## Motivation

The Gateway refactor approved in [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c) modernizes the codebase and makes it more flexible for future development, while adding important new components that enable standalone use:

* **Route Flexibility**: The new architecture allows each exchange to define their own routes, and as long as they match the appropriate schemas, they're compatible with the Hummingbot client. This flexibility supports a wider range of DEX protocols and enables extension into future connector types such as lending and bridging.
* **Chain-Agnostic Design**: Removes dependency on specific chain architectures in the Hummingbot client. The client now supports specific connector types, and any connector that implements the appropriate schema should be compatible with Hummingbot.
* **Modernized Codebase**: The new version reduces code bloat and image size by upgrading to Fastify and `pnpm`
* **Developer Mode**: The new `--dev` flag allows developers to inspect/execute endpoints using the auto-generated Swagger interactive API
* **Command-Line Interface**: Gateway introduced a dedicated `gateway` command and CLI for standalone use.

## Route Schemas

Gateway schemas define standardized endpoints that chains and connectors must implement to ensure compatibility with Hummingbot. Each schema specifies a set of endpoints with precise request and response structures that the Hummingbot GatewayHTTPClient and related connector interfaces utilize.

These schemas establish a contract between Gateway connectors and the Hummingbot client, enabling consistent interaction regardless of the underlying blockchain or protocol implementation details.

Each chain and connector route should be self-contained in its own file and contain both the route handler and other logic required.

For comprehensive documentation on each connector schema, including detailed endpoint specifications, request parameters, and response formats, please refer to the [Schemas](../schemas.md) documentation.

## Chain Structure

Gateway connectors are built on top of supported blockchain chains, creating a dependency relationship where each connector must be associated with a chain that Gateway supports. This relationship exists because DEX connectors rely on chain-specific functionality to operate, including:

1. **Wallet Management**: Connectors need access to wallet functionality provided by the chain module to sign transactions and manage private keys securely.
2. **Transaction Handling**: Connectors use chain-specific methods to create, send, and confirm transactions on the blockchain.
3. **RPC Interactions**: Connectors leverage the chain module's established RPC connections to interact with blockchain nodes.
4. **Network Configuration**: Chain modules handle network selection (mainnet, testnet) and other chain-specific configurations that connectors depend on.

Each chain integration is contained in a sub-folder in the [`src/chains`](https://github.com/hummingbot/gateway/tree/development/src/connectors) folder. 

## Connector Structure

Each exchange integration is contained in a sub-folder in the [`src/connectors`](https://github.com/hummingbot/gateway/tree/development/src/connectors) folder. The exchange folder may connectors that fit different schemas, such as `/raydium/amm-routes` for the `raydium/amm` connector and `/raydium/clmm-routes` for the `raydium/clmm` connector.

When developing a new connector, you must first ensure that Gateway supports the underlying blockchain. If your target DEX operates on an unsupported chain, you would need to implement both the chain and the connector modules.
