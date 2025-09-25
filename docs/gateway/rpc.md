## Overview

Starting with [v2.9.0](/release-notes/2.9.0), deep integrations with leading RPC providers like Helius and Infura are available to optimize speed and reduce latency for DEX trading.

The RPC provider controls your bot's connection to the blockchain network, which is crucial in DEX trading because it directly impacts the speed, reliability, and security of your transactions. A robust node connection ensures:

- **Low Latency:** Faster order placement and execution with greater rate limits.
- **High Availability:** Reliable access to blockchain data, minimizing downtime or missed trades.
- **Accurate Data:** Up-to-date blockchain state for price feeds, balances, and transaction statuses.
- **MEV Protection:** Direct connections to trusted nodes help reduce the risk of having your transactions front-run or  sandwiched.

## Setup

When you set up Gateway initially, the standard `nodeURL` for each network uses default public RPC endpoints. 

By adding an API key from a RPC provider (as shown below), you will override the default `nodeURL` for each supported network, ensuring more reliable and performant blockchain connectivity. This step is essential for optimal DEX trading performance.

Run `gateway ping` to check your current network and node connection:

```
>>> gateway ping

Gateway service is online.
Testing network status for 2 chains... 

ethereum (mainnet):
- RPC URL: https://mainnet.infura.io/v3/<api-key>
- Current Block: 23440952
- Native Currency: ETH
- Status: ✓ Connected

solana (mainnet-beta): 
- RPC URL: https://mainnet.helius-rpc.com/?api-key=<api-key>
- Current Block: 369194830
- Native Currency: SOL
- Status: ✓ Connected
```

## Supported Providers

### Helius

[Helius](https://www.helius.dev/) is a leading Solana validator and infrastructure provider, offering fast, reliable, and scalable RPC endpoints and other services.

**Helius Supported Networks:**

| Chain | Network |
|-------|---------|
| solana | mainnet-beta |
| solana | devnet |

**Adding Helius API Keys:**

1. Create a free account at [Helius](https://helius.dev/) to get your API key

2. Run `gateway config helius update` and add the API key. Alternatively, modify the file `conf/rpc/helius.yml` and restart Gateway.

3. Run `gateway config solana update` and change `rpcProvider` from `url` to `helius`. Alternatively, modify the file `conf/chains/solana.yml` and restart Gateway.

**Helius Configuration**

Adjust these settings in your `conf/rpc/helius.yml` file as needed for your deployment.

```yaml
helius:
  apiKey: YOUR_HELIUS_API_KEY
  useWebSocketRPC: false
  useSender: false
  regionCode: slc
  jitoTipSOL: 0.001
```

### Infura

[Infura](https://www.infura.io/), a division of Metamask, is a leading RPC provider for EVM-based networks.

**Infura Supported Networks:**

| Chain      | Network           | Chain ID            |
|------------|-------------------|---------------------|
| ethereum   | mainnet           | 1                   |
| ethereum   | arbitrum          | 42161               |
| ethereum   | avalanche         | 43114               |
| ethereum   | base              | 8453                |
| ethereum   | bsc               | 56                  |
| ethereum   | celo              | 42220               |
| ethereum   | polygon           | 137                 |
| ethereum   | sepolia           | 11155111            |

**Adding Infura API Key:**

1. Create a free account at [Infura](https://app.infura.io/) to get your API key

2. Run `gateway config infura update` and add the API key. Alternatively, modify the file `conf/rpc/infura.yml` and restart Gateway.

3. Run `gateway config ethereum update` and change `rpcProvider` from `url` to `infura`. Alternatively, modify the file `conf/chains/ethereum.yml` and restart Gateway.

**Infura Configuration:**


Adjust these settings in your `conf/rpc/infura.yml` file as needed for your deployment.

```yaml
apiKey: YOUR_INFURA_API_KEY
useWebSocket: false
```

## Troubleshooting

#### Provider Not Connecting
- Run `gateway ping` to assess connection
- Verify API key is correct
- Check network configuration

#### Rate Limiting
- Change Hummingbot `tick_size` to a higher number
- Consider upgrading to a paid tier for better performance
- Distribute usage across multiple API keys
