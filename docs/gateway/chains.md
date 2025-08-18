# Gateway Blockchain Support

Gateway provides standardized access to multiple blockchain networks, enabling wallet management, transaction execution, and node RPC interactions. Each chain integration is customized to handle the specific requirements and features of that blockchain.

## Supported Chains

Gateway currently supports two major blockchain architectures:

| Base Chain | Architecture | Networks | Description |
|------------|--------------|----------|-------------|
| **Ethereum** | EVM | mainnet, arbitrum, optimism, base, sepolia, bsc, avalanche, celo, polygon | Ethereum and EVM-compatible chains using Ethers.js |
| **Solana** | SVM | mainnet-beta, devnet | Solana blockchain using @solana/web3.js |

## Ethereum & EVM Networks

### Overview
Gateway's Ethereum integration supports the Ethereum mainnet and all EVM-compatible chains. These chains share the same basic architecture, allowing for unified handling of wallets, transactions, and smart contract interactions.

### Supported Networks

#### Ethereum Mainnet
- **Network ID:** mainnet
- **Chain ID:** 1
- **Native Token:** ETH
- **Block Time:** ~12 seconds
- **Consensus:** Proof of Stake

#### Layer 2 Networks

**Arbitrum**
- **Network ID:** arbitrum
- **Chain ID:** 42161
- **Native Token:** ETH
- **Block Time:** ~0.25 seconds
- **Technology:** Optimistic Rollup

**Optimism**
- **Network ID:** optimism
- **Chain ID:** 10
- **Native Token:** ETH
- **Block Time:** ~2 seconds
- **Technology:** Optimistic Rollup

**Base**
- **Network ID:** base
- **Chain ID:** 8453
- **Native Token:** ETH
- **Block Time:** ~2 seconds
- **Technology:** OP Stack (Optimistic Rollup)

**Polygon**
- **Network ID:** polygon
- **Chain ID:** 137
- **Native Token:** MATIC
- **Block Time:** ~2 seconds
- **Technology:** Proof of Stake sidechain

#### Other EVM Chains

**Binance Smart Chain (BSC)**
- **Network ID:** bsc
- **Chain ID:** 56
- **Native Token:** BNB
- **Block Time:** ~3 seconds
- **Consensus:** Proof of Staked Authority

**Avalanche C-Chain**
- **Network ID:** avalanche
- **Chain ID:** 43114
- **Native Token:** AVAX
- **Block Time:** ~2 seconds
- **Consensus:** Avalanche Consensus

**Celo**
- **Network ID:** celo
- **Chain ID:** 42220
- **Native Token:** CELO
- **Block Time:** ~5 seconds
- **Consensus:** Proof of Stake

#### Testnets

**Sepolia**
- **Network ID:** sepolia
- **Chain ID:** 11155111
- **Native Token:** SepoliaETH
- **Purpose:** Ethereum testnet for development

### Configuration

Each EVM network can be configured in Gateway through YAML configuration files:

#### Chain Configuration
Location: `/conf/chains/ethereum.yml`
```yaml
timeout: 10000
gasLimitTransaction: 3000000
manualGasPrice: 100  # in Gwei
gasPriceRefreshInterval: 60
nativeCurrencySymbol: "ETH"
```

#### Network-Specific Configuration
Location: `/conf/chains/ethereum/{network}.yml`

Example for Ethereum mainnet (`/conf/chains/ethereum/mainnet.yml`):
```yaml
nodeURL: "https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY"
chainId: 1
tokenListType: "FILE"
tokenListSource: "/conf/tokens/ethereum/mainnet.json"
nativeCurrencySymbol: "ETH"
gasPriceRefreshInterval: 60
```

### EVM-Specific Features

#### Token Standards
- **ERC-20:** Fungible tokens (USDC, USDT, etc.)
- **ERC-721:** Non-fungible tokens (NFTs)
- **ERC-1155:** Multi-token standard

#### Gas Management
- Dynamic gas price estimation
- EIP-1559 support (base fee + priority fee)
- Manual gas price override option
- Gas limit configuration per transaction type

#### Smart Contract Interactions
- Token approvals for DEX trading
- Wrapping/unwrapping native tokens (ETH ↔ WETH)
- Multi-call support for batch operations

### API Endpoints

All EVM chains share the same API structure:

- `GET /chains/ethereum/status` - Chain connection and block status
- `GET /chains/ethereum/tokens` - Token information
- `POST /chains/ethereum/balances` - Wallet balances
- `POST /chains/ethereum/allowances` - Token allowances
- `POST /chains/ethereum/approve` - Approve token spending
- `POST /chains/ethereum/wrap` - Wrap native token
- `POST /chains/ethereum/unwrap` - Unwrap to native token
- `POST /chains/ethereum/poll` - Poll transaction status
- `POST /chains/ethereum/estimate-gas` - Estimate transaction gas

## Solana

### Overview
Gateway's Solana integration provides access to the Solana blockchain, a high-performance blockchain supporting parallel transaction processing and sub-second finality.

### Supported Networks

#### Mainnet Beta
- **Network ID:** mainnet-beta
- **Native Token:** SOL
- **Block Time:** ~400ms
- **Consensus:** Proof of History + Proof of Stake
- **TPS Capacity:** 65,000+ theoretical

#### Devnet
- **Network ID:** devnet
- **Native Token:** SOL (test tokens)
- **Purpose:** Development and testing
- **Faucet:** Available for free test tokens

### Configuration

#### Chain Configuration
Location: `/conf/chains/solana.yml`
```yaml
timeout: 30000
retryCount: 3
commitment: "confirmed"
skipPreflight: false
maxFee: 0.01  # in SOL
```

#### Network-Specific Configuration
Location: `/conf/chains/solana/{network}.yml`

Example for mainnet-beta (`/conf/chains/solana/mainnet-beta.yml`):
```yaml
nodeURL: "https://api.mainnet-beta.solana.com"
commitment: "confirmed"
skipPreflight: false
preflightCommitment: "confirmed"
maxFee: 0.01
priorityFee: 0.00001
```

### Solana-Specific Features

#### Token Program
- **SPL Tokens:** Solana's token standard
- **Token-2022:** Enhanced token program with additional features
- **Associated Token Accounts:** Automatic token account management

#### Transaction Features
- **Versioned Transactions:** Support for lookup tables
- **Priority Fees:** Dynamic fee prioritization
- **Compute Units:** Customizable compute budget
- **Transaction Size:** 1232 bytes maximum

#### Account Model
- **Program Derived Addresses (PDAs)**
- **Rent-exempt accounts**
- **Account ownership model**

### API Endpoints

Solana chains use these endpoints:

- `GET /chains/solana/status` - Chain connection and slot status
- `GET /chains/solana/tokens` - SPL token information
- `POST /chains/solana/balances` - Wallet SOL and token balances
- `POST /chains/solana/poll` - Poll transaction status
- `POST /chains/solana/estimate-gas` - Estimate transaction fees

## Chain Schema

Gateway implements a standardized schema for chain operations across all supported blockchains.

### Common Operations

#### Status Check
Returns chain connection status and current block/slot information.

**Request:**
```json
{
  "network": "mainnet"
}
```

**Response:**
```json
{
  "chain": "ethereum",
  "network": "mainnet",
  "rpcUrl": "https://eth-mainnet.g.alchemy.com/v2/...",
  "currentBlockNumber": 18500000,
  "nativeCurrency": "ETH"
}
```

#### Token Information
Retrieves token metadata including addresses and decimals.

**Request:**
```json
{
  "network": "mainnet",
  "tokenSymbols": ["USDC", "USDT"]
}
```

**Response:**
```json
{
  "tokens": [
    {
      "symbol": "USDC",
      "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "decimals": 6,
      "name": "USD Coin"
    }
  ]
}
```

#### Balance Query
Fetches wallet balances for native and specified tokens.

**Request:**
```json
{
  "network": "mainnet",
  "address": "0x...",
  "tokenSymbols": ["ETH", "USDC"]
}
```

**Response:**
```json
{
  "balances": {
    "ETH": "1.5",
    "USDC": "1000.0"
  }
}
```

## Adding New Chains

Gateway's modular architecture makes it easy to add support for new blockchains.

### For EVM-Compatible Chains

Adding a new EVM-compatible chain is straightforward:

1. **Create network configuration file:**
   ```yaml
   # /conf/chains/ethereum/mynetwork.yml
   nodeURL: "https://rpc.mynetwork.com"
   chainId: 12345
   tokenListType: "FILE"
   tokenListSource: "/conf/tokens/ethereum/mynetwork.json"
   nativeCurrencySymbol: "MYT"
   ```

2. **Add token list:**
   Create `/conf/tokens/ethereum/mynetwork.json` with supported tokens

3. **Update chain configuration:**
   Add network to `/conf/chains/ethereum.yml` if needed

4. **Restart Gateway** to load the new configuration

### For Non-EVM Chains

Adding support for a new blockchain architecture requires:

1. **Create chain implementation:**
   ```typescript
   // src/chains/mychain/mychain.ts
   export class MyChain extends ChainBase {
     // Implement required methods
   }
   ```

2. **Implement required methods:**
   - `getWallet(address: string)`
   - `getBalance(address: string)`
   - `getTokens(tokenSymbols: string[])`
   - `getStatus()`

3. **Create route handlers:**
   Define API endpoints in `src/chains/mychain/routes/`

4. **Add configuration schemas:**
   - Chain schema: `src/templates/namespace/mychain-schema.json`
   - Network schemas for each supported network

5. **Register the chain:**
   Add to `src/chains/chain.routes.ts`

## Network Requirements

### RPC Node Providers

Gateway requires reliable RPC endpoints for blockchain interaction. Recommended providers:

#### Ethereum/EVM
- **Alchemy:** High reliability, free tier available
- **Infura:** Ethereum-focused, robust infrastructure
- **QuickNode:** Multi-chain support
- **Ankr:** Decentralized node infrastructure
- **Public RPCs:** Available but less reliable

#### Solana
- **Official RPC:** https://api.mainnet-beta.solana.com
- **Helius:** Enhanced APIs and websockets
- **QuickNode:** Low latency endpoints
- **Triton:** RPC pool with load balancing

### Performance Considerations

#### Connection Pooling
Gateway maintains persistent connections to RPC endpoints for better performance.

#### Request Batching
Multiple RPC calls can be batched to reduce latency and improve throughput.

#### Caching
Token metadata and static data are cached to minimize RPC calls.

#### Rate Limiting
Gateway respects RPC provider rate limits and implements retry logic.

## Security Considerations

### Private Key Management
- Keys are encrypted at rest using AES-256
- Passphrase required for wallet operations
- Hardware wallet support via Ledger

### RPC Security
- Use HTTPS endpoints only
- Validate RPC responses
- Implement request timeouts
- Monitor for RPC errors and failures

### Transaction Security
- Simulate transactions before execution
- Implement slippage protection
- Validate gas prices against recent blocks
- Check token approvals before trades

## Troubleshooting

### Common Issues

**"Cannot connect to RPC" errors:**
- Verify RPC URL is correct
- Check API key if using provider service
- Test RPC endpoint directly with curl
- Verify network configuration

**"Insufficient balance" errors:**
- Check wallet has enough native token for gas
- Verify token balances for trades
- Account for gas costs in calculations

**"Transaction failed" errors:**
- Check gas limit and gas price
- Verify contract addresses
- Review transaction simulation results
- Check for contract-specific requirements

**"Invalid chain ID" errors:**
- Verify chain ID in configuration
- Ensure wallet is on correct network
- Check RPC endpoint matches network

### Debugging Tools

#### Logs
Check Gateway logs for detailed error messages:
```bash
tail -f logs/gateway_app.log
```

#### RPC Testing
Test RPC endpoints directly:
```bash
# Ethereum
curl -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  YOUR_RPC_URL

# Solana
curl -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","id":1,"method":"getSlot"}' \
  YOUR_RPC_URL
```

## Resources

### Documentation
- [Ethereum JSON-RPC Specification](https://ethereum.org/en/developers/docs/apis/json-rpc/)
- [Solana RPC Methods](https://docs.solana.com/api/http)
- [Gateway GitHub Repository](https://github.com/hummingbot/gateway)

### Developer Tools
- [Etherscan](https://etherscan.io) - Ethereum blockchain explorer
- [Solscan](https://solscan.io) - Solana blockchain explorer
- [Tenderly](https://tenderly.co) - Transaction simulation
- [Foundry](https://getfoundry.sh) - EVM development framework