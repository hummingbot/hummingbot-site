Gateway uses a modular configuration system that allows you to customize various aspects of its operation. This guide explains the configuration structure and how to modify it to suit your needs.

## Configuration Overview

Gateway's configuration system consists of YAML files located in the `/conf` directory, along with the `/conf/lists` folder that contains token mappings for each blockchain network.

The initial configuration files are created automatically using the default templates in `/src/templates` when you run the setup script during [installation](./installation.md).

### Configuration Structure

The `/conf/` folder contains the following types of configuration files:

1. **Root Configuration** (`root.yml`): Defines the list of all configuration files and their schemas
2. **Server Configuration** (`server.yml`): Controls Gateway server behavior
3. **Chain Configurations** (e.g., `solana.yml`): Define blockchain network settings
4. **Connector Configurations** (e.g., `raydium.yml`): Configure DEX-specific settings

### Root Configuration

The `root.yml` file serves as the entry point for Gateway's configuration system. It defines which configuration files are loaded and their corresponding schema files.

```yaml
version: 3
configurations:
  $namespace server:
    configurationPath: server.yml
    schemaPath: server-schema.json

  $namespace solana:
    configurationPath: solana.yml
    schemaPath: solana-schema.json

  $namespace jupiter:
    configurationPath: jupiter.yml
    schemaPath: jupiter-schema.json
```

This file tells Gateway:

- Which configuration files to load
- Where to find the schema files that validate each configuration, which are located in the `/src/services/schemas` directory
- How to namespace each configuration section

### Server Configuration

The `server.yml` file controls the core Gateway server behavior, including ports, logging, and security settings.

```yaml
# GMT Offset in hours (e.g. -8 for Pacific US Time, -5 for Eastern US Time)
GMTOffset: -8

# Port on which to run the Gateway server
port: 15888

# Port on which to run the Swagger documentation UI. 
# Set to 0 to serve docs at http://0.0.0.0:{port}/docs (same port as Gateway server)
# Set to a specific port (e.g. 8080) to serve docs separately at http://0.0.0.0:{docPort}
docsPort: 0

# Path to folder where Hummingbot generates self-signed certificates
certificatePath: ./certs/

# Path to folder where logs will be stored.
logPath: './logs'

# IPs allowed to access gateway. localhost is allowed by default.
ipWhitelist: []

# If true, logs will be stored in logPath and printed to stdout. If false, they
# will only be stored in logPath and not printed to stdout.
logToStdOut: true

# If true, the server will print detailed Fastify logs for each request and response to stdout. If false, only standard logs will be emitted.
fastifyLogs: false

# Nonce database
nonceDbPath: 'nonce.level'

# Transaction database
transactionDbPath: 'transaction.level'
```

### Chain Configuration

Chain configuration files (e.g., `solana.yml`) define chain-specific settings for specific blockchain networks. These may include node URLs, token lists, and transaction parameters.

```yaml
networks:
  mainnet-beta:
    nodeURL: https://dry-dawn-hill.solana-mainnet.quiknode.pro/41bbd7ad405c552f91cc928e044e5e04c66341d2
    tokenListType: FILE
    tokenListSource: conf/lists/solana.json
    nativeCurrencySymbol: SOL
  devnet:
    nodeURL: https://api.devnet.solana.com
    tokenListType: FILE
    tokenListSource: conf/lists/solana-devnet.json
    nativeCurrencySymbol: SOL

# Default compute units for a transaction used to estimate gasPrice
defaultComputeUnits: 200000

# Floor percentile of recent priority fee samples used to estimate gasPrice for a transaction
basePriorityFeePct: 90

# Multiplier for increasing priority fee on retry
priorityFeeMultiplier: 2

# Maximum priority fee in SOL
maxPriorityFee: 0.01

# Minimum priority fee in SOL
minPriorityFee: 0.0001

# Retry interval in milliseconds
retryIntervalMs: 500

# Number of retry attempts
retryCount: 10
```


### Connector Configuration

Connector configuration files (e.g., `raydium.yml`) define settings for specific DEX connectors, including slippage tolerance and predefined liquidity pools.

```yaml
# settings for AMM routes
amm:
  # how much the execution price is allowed to move unfavorably
  allowedSlippage: '1/100'
  # predefined pools
  pools:
    RAY-SOL: 'AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA'
    SOL-USDC: '58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2'
    RAY-USDC: '6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg'
    WIF-SOL: 'EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx'
    POPCAT-SOL: 'FRhB8L7Y9Qq41qZXYLtC2nw8An1RJfLLxRF2x9RwLLMo'
    SOL-TRUMP: 'HKuJrP5tYQLbEUdjKwjgnHs2957QKjR2iWhJKTtMa1xs'
    LAYER-USDC: 'G6drsaPCR3pxsEmSTAc81kW1EL3kFAFwtSAkzUZXmgH3'

# settings for CLMM routes
clmm:
  # how much the execution price is allowed to move unfavorably
  allowedSlippage: '1/100'
  # predefined pools
  pools:
    SOL-USDC: '3ucNos4NbumPLZNWztqGHNFFgkHeRMBQAVemeeomsUxv'
    RAY-USDC: '61R1ndXxvsWXXkWSyNkCxnzwd3zUNB8Q2ibmkiLPC8ht'
    SOL-USDT: '3nMFwZXwY1s1M5s8vYAHqd4wGs4iSxXE4LRoUMMYqEgF'
    SOL-RAY: '2AXXcN6oN9bBT5owwmTH53C7QHUXvhLeu718Kqt8rvY2'
    USDC-USDT: 'BZtgQEyS6eXUXicYPHecYQ7PybqodXQMvkjUbP4R8mUU'
    SOL-JITOSOL: '2uoKbPEidR7KAMYtY4x7xdkHXWqYib5k4CutJauSL3Mc'
    SOL-TRUMP: 'GQsPr4RJk9AZkkfWHud7v4MtotcxhaYzZHdsPCg9vNvW'
    LAYER-USDC: 'G6drsaPCR3pxsEmSTAc81kW1EL3kFAFwtSAkzUZXmgH3'
    TRUMP-USDC: '7XzVsjqTebULfkUofTDH5gDdZDmxacPmPuTfHa1n9kuh'
```

## Common Configuration Tasks

### Gateway Commands in Hummingbot

*Coming soon*

!!! warning
    Gateway commands in Hummingbot are currently being refactored as part of the Gateway v2.5+ modernization. For now, you may refer to [Setting up Gateway](./legacy/setup.md) in the Gateway Legacy docs.

### Changing Node Providers



To change the RPC node provider for a blockchain network:

1. Open the corresponding chain configuration file (e.g., `solana.yml`)
2. Locate the `nodeURL` field under the desired network
3. Replace the URL with your preferred node provider's URL
4. Save the file and restart Gateway

Example:
```yaml
networks:
  mainnet-beta:
    nodeURL: https://your-preferred-node-provider.com/your-api-key
    # other settings...
```

### Adding Tokens

!!! tip
    The new Gateway endpoints accept addresses for `baseToken` and `quoteToken` in addition to symbols, so you should be able to use addresses directly before adding their symbols into the network's token list.

Gateway handles the mapping of symbols to the valid token addresses for each network using the [Token Lists](https://tokenlists.org/) standard, which is an open specification for organizing token metadata that helps users avoid scams and find legitimate tokens across different networks.

To add new tokens to your configuration:

1. Navigate to the `/conf/lists` folder
2. Open the appropriate list file that matches the `tokenListSource` in the chain config file (e.g., `solana.json` for Solana `mainnet-beta`)
3. Add a new token entry following the existing format below
4. Make sure that the resulting file is still valid JSON!
5. Save the file and restart Gateway

```json
  {
    "chainId": 101,
    "name": "ai16z",
    "symbol": "AI16Z",
    "address": "HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC",
    "decimals": 9
  },
```

See [Working with Tokens](./legacy/tokens/index.md) in the Gateway Legacy docs for more information.

### Adding Pools

Each AMM and CLMM DEX may have different pools for the same trading pair, with varying parameters like fee tier and bin step. You can define addresses for various base-quote symbol pairs in the connector config file.

To add new liquidity pools to a DEX connector:

1. Open the connector configuration file (e.g., `raydium.yml`)
2. Locate the `pools` section under the appropriate protocol type
3. Add a new entry with the token pair as the key and the pool address as the value
4. Save the file and restart Gateway

Example:
```yaml
amm:
  pools:
    # existing pools...
    WIF-SOL: 'EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx'
```

### Updating Configurations

There are two ways to update your Gateway configurations:

1. **Manual Update**:
   - Edit the configuration files directly
   - Restart Gateway to apply changes

2. **API Update**:
   - Use the `/config/update` API endpoint to update configurations
   - This allows for dynamic updates without restarting Gateway

!!! tip
    Always validate your configuration changes before applying them to a production environment. You can use the schema files referenced in `root.yml` to ensure your configurations are valid.
