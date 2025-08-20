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

Chain configuration files (e.g., `/conf/chains/solana.yml`) now contain only the default network and wallet settings for each blockchain.

```yaml
defaultNetwork: mainnet-beta
defaultWallet: '<solana-wallet-address>'
```

When you connect a wallet using `gateway connect`, it automatically becomes the `defaultWallet` for that chain. The `defaultNetwork` determines which network configuration Gateway uses by default for that chain.

!!! note
    Network-specific configurations are now stored in separate files under `/conf/chains/{chain}/{network}.yml`


### Connector Configuration

Connector configuration files (e.g., `/conf/connectors/jupiter.yml`) define settings specific to each DEX connector, including slippage tolerance, routing preferences, and API configurations.

#### Example: Jupiter Configuration

```yaml
# Default slippage percentage for swaps (as a decimal, e.g., 1 = 1%)
slippagePct: 1

# Priority level for swap transaction processing
# Options: medium, high, veryHigh
priorityLevel: 'veryHigh'

# Maximum priority fee in lamports (for dynamic priority fees)
# Used when priorityLevel is set and no explicit priorityFeeLamports is provided
maxLamports: 1000000

# Restrict routing to only go through 1 market
# Default: false (allows multi-hop routes for better prices)
onlyDirectRoutes: false

# Restrict routing through highly liquid intermediate tokens only
# Default: true (for better price and stability)
restrictIntermediateTokens: true

# Jupiter API key (optional)
# For free tier, leave empty (uses https://lite-api.jup.ag)
# For paid plans, generate key at https://portal.jup.ag (uses https://api.jup.ag)
apiKey: ''
```

**Configuration Options Explained:**

- **`slippagePct`**: Maximum acceptable price slippage for trades. If the execution price deviates more than this percentage from the quoted price, the transaction will fail.

- **`priorityLevel`**: Controls transaction priority on Solana. Higher priority levels result in faster confirmation but cost more in fees. Set to `veryHigh` for time-sensitive trades.

- **`maxLamports`**: Caps the maximum priority fee to prevent excessive costs during network congestion. 1,000,000 lamports = 0.001 SOL.

- **`onlyDirectRoutes`**: When `true`, restricts swaps to direct pools only (no intermediate tokens). This can reduce price impact but may result in worse pricing or failed routes for less liquid pairs.

- **`restrictIntermediateTokens`**: When `true`, only routes through major tokens (SOL, USDC, USDT) as intermediates. This increases reliability and reduces price impact risks.

- **`apiKey`**: Optional API key for Jupiter's paid tier. The free tier (lite-api) is suitable for most users, while the paid tier offers higher rate limits and additional features.

### Network Configuration

Network configuration files (e.g., `/conf/chains/solana/mainnet-beta.yml`) contain the detailed settings for each blockchain network, including RPC endpoints and transaction parameters.

#### Example: Solana mainnet-beta Configuration

```yaml
nodeURL: https://api.mainnet-beta.solana.com
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

You can view the current configuration for any network using Gateway commands:

```
>>> gateway config solana-mainnet-beta

Gateway Configuration - namespace: solana-mainnet-beta:
nodeURL: https://dry-dawn-hill.solana-mainnet.quiknode.pro/41bbd7ad405c552f91cc928e044e5e04c66341d2
nativeCurrencySymbol: SOL
defaultComputeUnits: 200000
confirmRetryInterval: 0.5
confirmRetryCount: 10
basePriorityFeePct: 90
minPriorityFeePerCU: 0.1
```

To update any network setting, use `gateway config [namespace] update`:

```
>>> gateway config solana-mainnet-beta update

Available configuration paths: nodeURL, nativeCurrencySymbol, defaultComputeUnits, confirmRetryInterval, confirmRetryCount, basePriorityFeePct, minPriorityFeePerCU

Enter configuration path (or 'exit' to cancel): nodeURL
Current value for 'nodeURL': https://api.mainnet-beta.solana.com
Enter new value (or 'exit' to cancel): https://your-preferred-node-provider.com/your-api-key
```

## Common Configuration Tasks

### Changing Node Providers

To change the RPC node provider for a blockchain network, you can either use Gateway commands or edit the configuration files directly.

#### Using Gateway Commands

```
>>> gateway config solana-mainnet-beta update

Current configuration for solana-mainnet-beta:
nodeURL: https://api.mainnet-beta.solana.com
nativeCurrencySymbol: SOL
defaultComputeUnits: 200000
confirmRetryInterval: 0.5
confirmRetryCount: 10
basePriorityFeePct: 90
minPriorityFeePerCU: 0.1

Available configuration paths: nodeURL, nativeCurrencySymbol, defaultComputeUnits, confirmRetryInterval, confirmRetryCount, basePriorityFeePct, minPriorityFeePerCU

Enter configuration path (or 'exit' to cancel): nodeURL
Current value for 'nodeURL': https://api.mainnet-beta.solana.com
Enter new value (or 'exit' to cancel): https://your-preferred-node-provider.com/your-api-key

Successfully updated nodeURL
Gateway will restart automatically for changes to take effect
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
>>  gateway token HERMES update                                                                                                                                                   
                                                                                                                                                                                     
  Enter chain (e.g., ethereum, solana): solana                                                                                                                                       
                                                                                                                                                                                     
  Token 'HERMES' not found. Let's add it to solana (mainnet-beta).                                                                                                                   
                                                                                                                                                                                     
  Enter token information:                                                                                                                                                           
                                                                                                                                                                                     
  Symbol [HERMES]:                                                                                                                                                                   
                                                                                                                                                                                     
  Name: HermesWizard                                                                                                                                                                 
                                                                                                                                                                                     
  Contract address: 24R8j15RDq3VoeRaSDFXMvSw4W7RLLZLdpTwK8ynx777                                                                                                                     
                                                                                                                                                                                     
  Decimals [18]: 9                                                                                                                                                                   
                                                                                                                                                                                     
  Token to add/update:                                                                                                                                                               
  {                                                                                                                                                                                  
    "symbol": "HERMES",                                                                                                                                                              
    "name": "HermesWizard",                                                                                                                                                          
    "address": "24R8j15RDq3VoeRaSDFXMvSw4W7RLLZLdpTwK8ynx777",                                                                                                                       
    "decimals": 9                                                                                                                                                                    
  }                                                                                                                                                                                  
                                                                                                                                                                                     
  Add/update this token? (Yes/No) >>> Yes                                                                                                                                            
                                                                                                                                                                                     
  Adding/updating token...                                                                                                                                                           
  ✓ Token successfully added/updated!                                                                                                                                                
                                                                                                                                                                                     
  Restarting Gateway for changes to take effect...                                                                                                                                   
  ✓ Gateway restarted successfully                                                                                                                                                   
                                                                                                                                                                                     
  You can now use 'gateway token HERMES' to view the token information.
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
>>>  gateway pool raydium/amm LIGHT-SOL update                                                                                                                                     
                                                                                                                                                                                     
  === Add Pool for LIGHT-SOL on raydium/amm ===                                                                                                                                      
  Chain: solana                                                                                                                                                                      
  Network: mainnet-beta                                                                                                                                                              
                                                                                                                                                                                     
  Pool 'LIGHT-SOL' not found. Let's add it to solana (mainnet-beta).                                                                                                                 
                                                                                                                                                                                     
  Enter pool information:                                                                                                                                                            
                                                                                                                                                                                     
  Pool contract address: 7YZEyZ3DuHQTmgmKwzuXMYG6SHD3sCWZ3mLkU7HuLrfC                                                                                                                
                                                                                                                                                                                     
  Pool to add:                                                                                                                                                                       
  {                                                                                                                                                                                  
    "address": "7YZEyZ3DuHQTmgmKwzuXMYG6SHD3sCWZ3mLkU7HuLrfC",                                                                                                                       
    "baseSymbol": "LIGHT",                                                                                                                                                           
    "quoteSymbol": "SOL",                                                                                                                                                            
    "type": "amm"                                                                                                                                                                    
  }                                                                                                                                                                                  
                                                                                                                                                                                     
  Add this pool? (Yes/No) >>> Yes                                                                                                                                                    
                                                                                                                                                                                     
  Adding pool...                                                                                                                                                                     
  ✓ Pool successfully added!                                                                                                                                                         
                                                                                                                                                                                     
  Restarting Gateway for changes to take effect...                                                                                                                                   
  ✓ Gateway restarted successfully                                                                                                                                                   
                                                                                                                                                                                     
  Pool has been added. You can view it with: gateway pool raydium/amm LIGHT-SOL
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
