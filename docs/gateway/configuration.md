Gateway uses a modular configuration system that allows you to customize various aspects of its operation. This guide explains the configuration structure and how to modify it to suit your needs.

## Configuration Overview

Gateway's configuration system consists of YAML files located in the `/conf` directory, along with JSON files for tokens and pools organized by chain and connector.

The initial configuration files are created automatically using the default templates in `/src/templates` when you run the setup script during [installation](./installation.md).

### Configuration Structure

The `/conf/` folder contains the following types of configuration files:

1. **Root Configuration** (`root.yml`): Defines the list of all configuration files and their schemas
2. **Server Configuration** (`server.yml`): Controls Gateway server behavior
3. **Chain Configurations** (e.g., `solana.yml`): Define blockchain network settings
4. **Connector Configurations** (e.g., `raydium.yml`): Configure DEX-specific settings
5. **Token Lists** (`/conf/tokens/{chain}/{network}.json`): Token definitions for each network
6. **Pool Lists** (`/conf/pools/{connector}.json`): Liquidity pool definitions for each DEX connector

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

Chain configuration files (e.g., `solana.yml`) define chain-specific settings for blockchain networks, including node URLs and transaction parameters.

```yaml
networks:
  mainnet-beta:
    nodeURL: https://dry-dawn-hill.solana-mainnet.quiknode.pro/41bbd7ad405c552f91cc928e044e5e04c66341d2
    nativeCurrencySymbol: SOL
  devnet:
    nodeURL: https://api.devnet.solana.com
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

!!! note
    Token lists are no longer specified in chain configuration files. They are now stored separately in `/conf/tokens/{chain}/{network}.json`


### Connector Configuration

Connector configuration files (e.g., `raydium.yml`) define settings for specific DEX connectors, primarily slippage tolerance settings.

```yaml
# settings for AMM routes
amm:
  # how much the execution price is allowed to move unfavorably
  allowedSlippage: '1/100'

# settings for CLMM routes
clmm:
  # how much the execution price is allowed to move unfavorably
  allowedSlippage: '1/100'
```

!!! note
    Pool definitions are no longer stored in connector configuration files. They are now stored separately in `/conf/pools/{connector}.json`

## Common Configuration Tasks

### Gateway Commands in Hummingbot

*Coming soon*

!!! warning
    Gateway commands in Hummingbot are currently being refactored as part of the Gateway v2.5+ modernization. For now, you may refer to [Setting up Gateway](./legacy/setup.md) in the Gateway Legacy docs.

### Changing Node Providers

To change the RPC node provider for a blockchain network, you can either edit the configuration file directly or use Gateway commands.

#### Using Gateway Commands

```
>>> gateway config set

Which namespace? >>> solana
Which network? >>> mainnet-beta
Which setting? >>> nodeURL
New value >>> https://your-preferred-node-provider.com/your-api-key

Successfully updated solana mainnet-beta nodeURL
Gateway restart required for changes to take effect
```

#### Editing Configuration Files

1. Navigate to the network configuration folder (e.g., `/conf/chains/solana/`)
2. Open the specific network file (e.g., `mainnet-beta.yml`)
3. Locate the `nodeURL` field and replace it with your preferred node provider's URL
4. Save the file and restart Gateway

Example for Solana mainnet (`/conf/chains/solana/mainnet-beta.yml`):
```yaml
nodeURL: https://your-preferred-node-provider.com/your-api-key
nativeCurrencySymbol: SOL

# Default compute units for a transaction
# This sets the compute unit limit for transactions when not specified by the user
defaultComputeUnits: 200000

# Confirmation polling interval in seconds
# How often to check if a submitted transaction has been confirmed (inner retry loop)
confirmRetryInterval: 0.5

# Number of confirmation polling attempts
# How many times to poll for confirmation before considering the transaction unconfirmed
confirmRetryCount: 10

# Floor percentile of recent priority fee samples used to estimate gasPrice for a transaction
# Use the Nth percentile of recent priority fees as the base fee (90 = 90th percentile)
basePriorityFeePct: 90

# Minimum priority fee per compute unit in lamports
# This sets the floor for priority fees to ensure transactions are processed (default: 0.1 lamports/CU)
minPriorityFeePerCU: 0.1
```

Example for Ethereum mainnet (`/conf/chains/ethereum/mainnet.yml`):
```yaml
chainID: 1
nodeURL: https://your-preferred-node-provider.com/your-api-key
nativeCurrencySymbol: ETH
minGasPrice: 0.1
```

### Adding Tokens

!!! tip
    The new Gateway endpoints accept addresses for `baseToken` and `quoteToken` in addition to symbols, so you should be able to use addresses directly before adding their symbols into the network's token list.

Gateway uses standardized token lists organized by chain and network. Each network has its own token list file that contains metadata for all supported tokens on that network.

#### Using Gateway Commands

```
>>> gateway token add

Which chain? >>> solana
Which network? >>> mainnet-beta
Token symbol >>> AI16Z
Token name >>> ai16z
Token address >>> HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC
Token decimals >>> 9

Successfully added AI16Z to solana mainnet-beta token list
```

#### Editing Token Files

1. Navigate to the `/conf/tokens/{chain}/` folder (e.g., `/conf/tokens/solana/`)
2. Open the appropriate network file (e.g., `mainnet-beta.json` for Solana mainnet)
3. Add a new token entry to the array following the existing format below
4. Make sure that the resulting file is still valid JSON!
5. Save the file and restart Gateway

```json
{
  "chainId": 101,
  "name": "ai16z",
  "symbol": "AI16Z",
  "address": "HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC",
  "decimals": 9
}
```

The token list structure follows the [Token Lists](https://tokenlists.org/) standard, which helps users avoid scams and find legitimate tokens across different networks.

### Adding Pools

Each AMM and CLMM DEX may have different pools for the same trading pair, with varying parameters like fee tier and bin step. Gateway now stores pool definitions in dedicated JSON files for each DEX connector.

#### Using Gateway Commands

```
>>> gateway pool add

Which connector? >>> raydium
Pool type (amm/clmm) >>> amm
Network >>> mainnet-beta
Base token symbol >>> WIF
Quote token symbol >>> SOL
Pool address >>> EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx

Successfully added WIF-SOL pool to raydium configuration
```

#### Editing Pool Files

1. Navigate to the `/conf/pools/` folder
2. Open the connector's pool file (e.g., `raydium.json`)
3. Add a new pool entry to the array following the existing format
4. Make sure that the resulting file is still valid JSON!
5. Save the file and restart Gateway

Example pool entry:
```json
{
  "type": "amm",
  "network": "mainnet-beta",
  "baseSymbol": "WIF",
  "quoteSymbol": "SOL",
  "address": "EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx"
}
```

For CLMM pools, use `"type": "clmm"` instead. The pool file structure allows you to specify different pools for different networks and trading types (AMM vs CLMM) within the same connector.

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
