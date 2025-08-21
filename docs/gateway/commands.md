This guide covers how to use Gateway commands within the Hummingbot client. Gateway commands allow you to manage wallets, execute swaps, manage liquidity positions, and configure Gateway settings directly from Hummingbot.

## Installation and Setup

Before using Gateway commands, you need to have Gateway installed and running. Follow the [Gateway Installation Guide](./installation.md) to set up Gateway using either Docker or from source.

Once Gateway is running, you can verify the connection in Hummingbot:

1. **Check the status indicator**: Look for `GATEWAY: 🟢 ONLINE` in the upper right corner of the Hummingbot client
2. **Test the connection**: Run `gateway ping` to verify Gateway is accessible and chains are connected
3. **Generate certificates** (if needed): Run `gateway generate-certs` to create SSL certificates for secure communication

If you see `GATEWAY: 🔴 OFFLINE` in the upper right corner:

- Ensure Gateway is running (check Docker container or process)
- Verify Gateway is running on the correct port (default: 15888)
- Check that certificates match between Hummingbot and Gateway (if you are running in production mode)
- Review Gateway logs for any error messages

## gateway --help

To see all available Gateway commands and their descriptions:

```
>>> gateway --help
usage:  gateway [-h] {allowance,approve,balance,config,connect,generate-certs,list,lp,ping,pool,swap,token} ...

positional arguments:
  {allowance,approve,balance,config,connect,generate-certs,list,lp,ping,pool,swap,token}
    allowance           Check token allowances for ethereum connectors
    approve             Approve token for use with ethereum connectors
    balance             Check token balances
    config              Show or update configuration
    connect             Add a wallet for a chain
    generate-certs      Create SSL certificate
    list                List available connectors
    lp                  Manage liquidity positions
    ping                Test node and chain/network status
    pool                View or update pool information
    swap                Swap tokens
    token               View or update token information

```

## gateway ping

Test the connection to Gateway and check node/chain status.

```
usage: gateway ping [-h] [chain]                                                                                                                                                   
                                                                                                                                                                                     
  positional arguments:                                                                                                                                                              
    chain       Specific chain to test (optional)
```

```
>>> gateway ping

  Gateway service is online.                                                                                                                                                         
                                                                                                                                                                                     
  Testing network status for 2 chains...                                                                                                                                             
                                                                                                                                                                                     
  ethereum (base):                                                                                                                                                                   
    - RPC URL: https://small-dimensional-pine.base-mainnet.quiknode.pro/d01204cade4fab5                                                                                              
  2085cd0033c01bb2606a40c33                                                                                                                                                          
    - Current Block: 34463843                                                                                                                                                        
    - Native Currency: ETH                                                                                                                                                           
    - Status: ✓ Connected                                                                                                                                                            
                                                                                                                                                                                     
  solana (mainnet-beta):                                                                                                                                                             
    - RPC URL: https://dry-dawn-hill.solana-mainnet.quiknode.pro/41bbd7ad405c552f91cc92                                                                                              
  8e044e5e04c66341d2                                                                                                                                                                 
    - Current Block: 361378534                                                                                                                                                       
    - Native Currency: SOL                                                                                                                                                           
    - Status: ✓ Connected                            
```

## gateway list

List all available chains, networks, and connectors.

```
usage: gateway list [-h]  
```

```
>>> gateway list

      +-------------+--------------+------------------------------------------------------------------+-------------------+                                                          
      | connector   | chain_type   | networks                                                         | trading_types     |                                                          
      |-------------+--------------+------------------------------------------------------------------+-------------------|                                                          
      | jupiter     | solana       | devnet, mainnet-beta                                             | router            |                                                          
      | meteora     | solana       | devnet, mainnet-beta                                             | clmm              |                                                          
      | raydium     | solana       | devnet, mainnet-beta                                             | amm, clmm         |                                                          
      | uniswap     | ethereum     | arbitrum, avalanche, base, bsc, celo, mainnet, optimism, polygon | amm, clmm, router |                                                          
      | 0x          | ethereum     | arbitrum, avalanche, base, bsc, mainnet, optimism, polygon       | router            |                                                          
      +-------------+--------------+------------------------------------------------------------------+-------------------+
```

## gateway connect

Add a wallet for a specific chain. This is the primary way to connect your wallet to Gateway. After a wallet is successfully added, it automatically becomes the `defaultWallet` for that chain (ethereum or solana) in the Gateway configuration.

```
usage: gateway connect [-h] [chain]                                                                                                                                                
                                                                                                                                                                                     
  positional arguments:                                                                                                                                                              
    chain       Blockchain chain (e.g., ethereum, solana) 
```

### Add regular wallet
```
>>> gateway connect ethereum

Select Option (1) Add Regular Wallet, (2) Add Hardware Wallet, (3) Exit [default: 3]: 1
Enter your ethereum wallet private key: *********
```

### Add hardware wallet
```
>>> gateway connect ethereum

Select Option (1) Add Regular Wallet, (2) Add Hardware Wallet, (3) Exit [default: 3]: 2

Enter your hardware wallet address >>> 0x123...abc
```

!!! note
    The wallet you add becomes the default wallet for all operations on that chain. You can check which wallet is currently set as default by running `gateway config ethereum` or `gateway config solana`.

## gateway balance

Check token balances for connected wallets.

```
usage: gateway balance [-h] [chain] [tokens]                                                                                                                                       
                                                                                                                                                                                     
  positional arguments:                                                                                                                                                              
    chain       Chain name (e.g., ethereum, solana)                                                                                                                                  
    tokens      Comma-separated list of tokens to check (optional)                                                                                                                   
```

```
>>> gateway balance

Updating gateway balances, please wait...                                                                                                                                          
                                                                                                                                                                                     
  Fetching balances for ethereum:base for tokens: all                                                                                                                                
                                                                                                                                                                                     
  Chain: ethereum                                                                                                                                                                    
  Network: base                                                                                                                                                                      
  Address: <ethereum-address>                                                                                                                                
      Token Balance                                                                                                                                                                  
        ETH  0.0154                                                                                                                                                                  
       USDC 57.2579                                                                                                                                                                  
       WETH  0.0188                                                                                                                                                                  
                                                                                                                                                                                     
  Fetching balances for solana:mainnet-beta for tokens: all                                                                                                                          
                                                                                                                                                                                     
  Chain: solana                                                                                                                                                                      
  Network: mainnet-beta                                                                                                                                                              
  Address: <solana-address>                                                                                                                              
      Token    Balance                                                                                                                                                               
       BONK 20508.7066                                                                                                                                                               
        SOL     0.1413                                                                                                                                                               
       USDC    27.9640
```
## gateway config

View and update Gateway configuration settings.

```
usage: gateway config [-h] [namespace] [action] [args ...]                                                                                                                         
                                                                                                                                                                                     
  positional arguments:                                                                                                                                                              
    namespace   Namespace (e.g., ethereum-mainnet, uniswap)                                                                                                                          
    action      Action to perform (update)                                                                                                                                           
    args        Additional arguments: <path> <value> for direct update
```

### View configuration

You may view the configuration for any **namespace**:

- chain: ethereum, solana, etc
- network: ethereum-mainnet, solana-mainnet-beta, etc
- connector: jupiter, uniswap, etc

```
>>>  gateway config solana-mainnet-beta                                                                                                                                            
                                                                                                                                                                                     
  Gateway Configuration - namespace: solana-mainnet-beta:                                                                                                                            
  nodeURL: https://dry-dawn-hill.solana-mainnet.quiknode.pro/41bbd7ad405c552f91cc928e044e5e04c66341d2                                                                                
  nativeCurrencySymbol: SOL                                                                                                                                                          
  defaultComputeUnits: 200000                                                                                                                                                        
  confirmRetryInterval: 0.5                                                                                                                                                          
  confirmRetryCount: 10                                                                                                                                                              
  basePriorityFeePct: 90                                                                                                                                                             
  minPriorityFeePerCU: 0.1
```

### Update configuration
```
>>>  gateway config solana-mainnet-beta update                                                                                                                                     
                                                                                                                                                                                     
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
                                                                                                                                                                                     
  Current value for 'nodeURL': https://api.mainnet-beta.solana.com                                                           v
                                                                                                                                                                                     
  Enter new value (or 'exit' to cancel):                                                                                                                                             
                           
```

Gateway will automatically restart after any configuration change.

## gateway token

View or manage tokens in the token lists.
```
usage: gateway token [-h] [symbol_or_address] [action]                                                                                                                             
                                                                                                                                                                                     
  positional arguments:                                                                                                                                                              
    symbol_or_address  Token symbol or address                                                                                                                                       
    action             Action to perform (update)
```

### Get token info
```
>>>  gateway token WETH                                                                                                                                                            
                                                                                                                                                                                     
  Searching for token 'WETH' across all chains' default networks...                                                                                                                  
                                                                                                                                                                                     
  Found tokens:                                                                                                                                                                      
         chain network symbol          name                                    address  decimals                                                                                     
      ethereum    base   WETH Wrapped Ether 0x4200000000000000000000000000000000000006        18
```

### Add token

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

## gateway pool

View and manage liquidity pool information.

```
usage: gateway pool [-h] [connector] [trading_pair] [action] [args ...]                                                                                                            
                                                                                                                                                                                     
  positional arguments:                                                                                                                                                              
    connector     Connector name/type (e.g., uniswap/amm)                                                                                                                            
    trading_pair  Trading pair (e.g., ETH-USDC)                                                                                                                                      
    action        Action to perform (update)                                                                                                                                         
    args          Additional arguments: <address> for direct pool update  
```

### Get pool info
```
>>>  gateway pool raydium/amm SOL-USDC                                                                                                                                             
                                                                                                                                                                                     
  Fetching pool information for SOL-USDC on raydium/amm...                                                                                                                           
                                                                                                                                                                                     
  === Pool Information ===                                                                                                                                                           
  Connector: raydium/amm                                                                                                                                                             
  Trading Pair: SOL-USDC                                                                                                                                                             
  Pool Type: amm                                                                                                                                                                     
  Network: mainnet-beta                                                                                                                                                              
  Base Token: SOL                                                                                                                                                                    
  Quote Token: USDC                                                                                                                                                                  
  Pool Address: 58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2
```

### Add pool
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

## gateway swap

Execute token swaps through DEX connectors.

```
usage: gateway swap [-h] [connector] [args ...]                                                                                                                                    
                                                                                                                                                                                     
  positional arguments:                                                                                                                                                              
    connector   Connector name/type (e.g., jupiter/router)                                                                                                                           
    args        Arguments: [base-quote] [side] [amount]. Interactive mode if not all provided. Example: gateway swap uniswap ETH-USDC BUY 0.1                                        
                                                                                                                                                                                     
  options:                                                                                                                                                                           
    -h, --help  show this help message and exit
```

```
>>>  gateway swap jupiter/router                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                       
  Enter base token (symbol or address): SOL                                                                                                                                                                                                            
                                                                                                                                                                                                                                                       
  Enter quote token (symbol or address): USDC                                                                                                                                                                                                          
                                                                                                                                                                                                                                                       
  Enter amount to trade: 0.01                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                       
  Enter side (BUY/SELL): BUY                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                       
  Fetching swap quote for SOL-USDC from jupiter/router...                                                                                                                                                                                              
                                                                                                                                                                                                                                                       
  === Swap Transaction ===                                                                                                                                                                                                                             
  Token In: SOL (EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v)                                                                                                                                                                                         
  Token Out: USDC (So11111111111111111111111111111111111111112)                                                                                                                                                                                        
                                                                                                                                                                                                                                                       
  Price: 186.61700000000002 USDC/SOL                                                                                                                                                                                                                   
  Slippage: 1%                                                                                                                                                                                                                                         
  Price Impact: 0.00%                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                       
  You will spend:                                                                                                                                                                                                                                      
    Amount: 1.86617 USDC                                                                                                                                                                                                                               
    Max Amount (w/ slippage): 1.8848317 USDC                                                                                                                                                                                                           
                                                                                                                                                                                                                                                       
  You will receive:                                                                                                                                                                                                                                    
    Amount: 0.01 SOL                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                       
  Estimating transaction fees for solana mainnet-beta...                                                                                                                                                                                               
                                                                                                                                                                                                                                                       
  === Balance Impact After Swap ===                                                                                                                                                                                                                    
  Wallet: 82SggY...yHx5                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                       
  Token     Current Balance → After Transaction                                                                                                                                                                                                        
  --------------------------------------------------                                                                                                                                                                                                   
    SOL            0.141273 →       0.151248                                                                                                                                                                                                           
    USDC          27.963970 →      26.097800                                                                                                                                                                                                           
                                                                                                                                                                                                                                                       
  Transaction Fee Details:                                                                                                                                                                                                                             
    Current Gas Price: 0.1000 lamports                                                                                                                                                                                                                 
    Estimated Gas Cost: ~0.000025 SOL

Do you want to execute this swap? (y/n) >>>

Executing swap...                                                                                                                                                                                                                                    
  Order created: buy-SOL-USDC-1755721261102151                                                                                                                                                                                                         
  Monitoring transaction status...                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                       
  ✓ Transaction completed successfully!                                                                                                                                                                                                                
  Transaction hash: 5ToGDFBSALxAnY2nWjx1m1hNer9xp3bxg4dban1t5pefXHoaK41RiJJGxC7ZqLpy1nLx93DgZdtax8jqY3WzPwFa
```

## gateway lp

Manage liquidity positions on AMM and CLMM pools.

```
usage: gateway lp [-h] [connector] [{add-liquidity,remove-liquidity,position-info,collect-fees}]                                                                                       
                                                                                                                                                                                         
  positional arguments:                                                                                                                                                                  
    connector             Connector name/type (e.g., raydium/amm)                                                                                                                        
    {add-liquidity,remove-liquidity,position-info,collect-fees}                                                                                                                          
                          LP action to perform
```

### List positions
```
>>>  gateway lp raydium/amm position-info                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                         
  === Liquidity Positions on raydium/amm ===                                                                                                                                                                                                                                                             
  Chain: solana                                                                                                                                                                                                                                                                                          
  Network: mainnet-beta                                                                                                                                                                                                                                                                                  
  Wallet: 82SggY...yHx5                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                         
  Enter trading pair (e.g., SOL-USDC): SOL-USDC                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                         
  Fetching positions for SOL-USDC...                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                         
  === AMM Position ===                                                                                                                                                                                                                                                                                   
  Pool: 58oQCh...YQo2                                                                                                                                                                                                                                                                                    
  Pair: SOL-USDC                                                                                                                                                                                                                                                                                         
  Price: 186.849646 USDC/SOL                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                         
  Holdings:                                                                                                                                                                                                                                                                                              
    SOL: 0.009999                                                                                                                                                                                                                                                                                        
    USDC: 1.868401                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                         
  LP Tokens: 0.015601
```

### Add liquidity
```
>>>  gateway lp raydium/amm add-liquidity                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                         
  === Add Liquidity to raydium/amm ===                                                                                                                                                                                                                                                                   
  Chain: solana                                                                                                                                                                                                                                                                                          
  Network: mainnet-beta                                                                                                                                                                                                                                                                                  
  Wallet: 82SggY...yHx5                                                                                                                                                                                                                                                                                  
  Type: Standard AMM                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                         
  Enter trading pair (e.g., SOL-USDC): SOL-USDC                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                         
  Fetching pool information for SOL-USDC...                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                         
  === Pool Information ===                                                                                                                                                                                                                                                                               
  Pool Address: 58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2                                                                                                                                                                                                                                             
  Current Price: 186.803554                                                                                                                                                                                                                                                                              
  Fee: 0.0025%                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                         
  Pool Reserves:                                                                                                                                                                                                                                                                                         
    SOL: 46972.751032                                                                                                                                                                                                                                                                                    
    USDC: 8774676.823955                                                                                                                                                                                                                                                                                 
    TVL (in USDC): ~17549353.65                                                                                                                                                                                                                                                                          
  Enter token amounts to add (press Enter to skip):                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                         
  Amount of SOL (optional): 0.01                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                         
  Amount of USDC (optional): 2                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                         
  Calculating optimal token amounts...                                                                                                                                                                                                                                                                   
  Note: Liquidity will be limited by base token amount                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                         
  Token amounts to add:                                                                                                                                                                                                                                                                                  
    SOL: 0.010000                                                                                                                                                                                                                                                                                        
    USDC: 1.868497                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                         
  Estimating transaction fees...                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                         
  === Balance Impact After Adding Liquidity ===                                                                                                                                                                                                                                                          
  Wallet: 82SggY...yHx5                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                         
  Token     Current Balance → After Transaction                                                                                                                                                                                                                                                          
  --------------------------------------------------                                                                                                                                                                                                                                                     
    SOL            0.151259 →       0.141234                                                                                                                                                                                                                                                             
    USDC          26.098180 →      24.229683                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                         
  Transaction Fee Details:                                                                                                                                                                                                                                                                               
    Current Gas Price: 0.1000 lamports                                                                                                                                                                                                                                                                   
    Estimated Gas Cost: ~0.000025 SOL                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                         
  Adding liquidity to pool at current price: 186.803554                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                         
  Slippage tolerance: 1%                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                         
  Do you want to add liquidity? (Yes/No) >>> Yes                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                         
  Adding liquidity...                                                                                                                                                                                                                                                                                    
  Transaction submitted. Order ID: range-SOL-USDC-1755722086328873                                                                                                                                                                                                                                       
  Monitoring transaction status...                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                         
  ✓ Transaction completed successfully!                                                                                                                                                                                                                                                                  
  Transaction hash: 5g3hDfWdSVpsXTdrqF1HqPKh9bH8bqpQ3XBoZXqHrCJKsCXQkGRhCc1YaBWYB3MNwcgEHRwyN5qyuP9dvNiexCUL                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                         
  ✓ Liquidity added successfully!                                                                                                                                                                                                                                                                        
  Use 'gateway lp raydium/amm position-info' to view your position
```

### Remove liquidity
```
>>>  gateway lp raydium/amm remove-liquidity                                                                                                                                                                                                          
                                                                                                                                                                                                                                                        
  === Remove Liquidity from raydium/amm ===                                                                                                                                                                                                             
  Chain: solana                                                                                                                                                                                                                                         
  Network: mainnet-beta                                                                                                                                                                                                                                 
  Wallet: 82SggY...yHx5                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                        
  Enter trading pair (e.g., SOL-USDC): SOL-USDC                                                                                                                                                                                                         
                                                                                                                                                                                                                                                        
  Fetching positions for SOL-USDC...                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                        
  === AMM Position ===                                                                                                                                                                                                                                  
  Pool: 58oQCh...YQo2                                                                                                                                                                                                                                   
  Pair: SOL-USDC                                                                                                                                                                                                                                        
  Price: 186.802435 USDC/SOL                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                        
  Holdings:                                                                                                                                                                                                                                             
    SOL: 0.010001                                                                                                                                                                                                                                       
    USDC: 1.868167                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                        
  LP Tokens: 0.015601                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                        
  Selected position: 58oQCh...YQo2                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                        
  Percentage to remove (0-100, default 100): 100                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        
  Removing 100.0% liquidity                                                                                                                                                                                                                             
  You will receive:                                                                                                                                                                                                                                     
    SOL: 0.010001                                                                                                                                                                                                                                       
    USDC: 1.868167                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                        
  Estimating transaction fees...                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                        
  === Balance Impact After Removing Liquidity ===                                                                                                                                                                                                       
  Wallet: 82SggY...yHx5                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                        
  Token     Current Balance → After Transaction                                                                                                                                                                                                         
  --------------------------------------------------                                                                                                                                                                                                    
    SOL            0.141214 →       0.151189                                                                                                                                                                                                            
    USDC          24.229877 →      26.098044                                                                                                                                                                                                            
                                                                                                                                                                                                                                                        
  Transaction Fee Details:                                                                                                                                                                                                                              
    Current Gas Price: 0.1000 lamports                                                                                                                                                                                                                  
    Estimated Gas Cost: ~0.000025 SOL                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                        
  Do you want to remove 100.0% liquidity? (Yes/No) >>> Yes                                                                                                                                                                                              
                                                                                                                                                                                                                                                        
  Removing liquidity...                                                                                                                                                                                                                                 
  Transaction submitted. Order ID: range-SOL-USDC-1755722234730374                                                                                                                                                                                      
  Monitoring transaction status...                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                        
  ✓ Transaction completed successfully!                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                        
  ✓ 100.0% liquidity removed successfully!
```

### Collect fees
```
>>>  gateway lp raydium/clmm collect-fees                                                                                                                                              
                                                                                                                                                                                         
  === Collect Fees from raydium/clmm ===                                                                                                                                                 
  Chain: solana                                                                                                                                                                          
  Network: mainnet-beta                                                                                                                                                                  
  Wallet: 82SggY...yHx5                                                                                                                                                                  
                                                                                                                                                                                         
  Enter trading pair (e.g., SOL-USDC): SOL-USDC                                                                                                                                          
                                                                                                                                                                                         
  Fetching positions for SOL-USDC...
```

## gateway approve

Approve ERC-20 tokens for use with DEX connectors (Ethereum only).

```
usage: gateway approve [-h] [connector] [token]                                                                                                                                        
                                                                                                                                                                                         
  positional arguments:                                                                                                                                                                  
    connector   Connector name/type (e.g., jupiter/router)                                                                                                                               
    token       Token symbol to approve (e.g., WETH)
```

```
>>>  gateway approve uniswap/amm CBBTC                                                                                                                                                 
                                                                                                                                                                                         
  Fetching uniswap/amm allowance for CBBTC...                                                                                                                                            
                                                                                                                                                                                         
  === Approve Transaction ===                                                                                                                                                            
  Connector: uniswap/amm                                                                                                                                                                 
  Network: ethereum base                                                                                                                                                                 
  Wallet: 0xDA50...6684                                                                                                                                                                  
                                                                                                                                                                                         
  Token to approve:                                                                                                                                                                      
    Symbol: CBBTC                                                                                                                                                                        
    Address: Unknown                                                                                                                                                                     
    Current Allowance: 0                                                                                                                                                                 
                                                                                                                                                                                         
  Estimating transaction fees for ethereum base...                                                                                                                                       
                                                                                                                                                                                         
  === Balance Impact After Approval ===                                                                                                                                                  
  Wallet: 0xDA50...6684                                                                                                                                                                  
                                                                                                                                                                                         
  Token     Current Balance → After Transaction                                                                                                                                          
  --------------------------------------------------                                                                                                                                     
    CBBTC          0.000000                                                                                                                                                              
    ETH            0.015378 →       0.015348                                                                                                                                             
                                                                                                                                                                                         
  Transaction Fee Details:                                                                                                                                                               
    Current Gas Price: 0.1000 gwei                                                                                                                                                       
    Estimated Gas Cost: ~0.000030 ETH                                                                                                                                                    
                                                                                                                                                                                         
  Do you want to proceed with the approval? (Yes/No) >>> Yes                                                                                                                             
                                                                                                                                                                                         
  Approving CBBTC for uniswap/amm...                                                                                                                                                     
                                                                                                                                                                                         
  Submitting approval for CBBTC...                                                                                                                                                       
  Approval submitted for CBBTC. Order ID: approve-cbbtc-1755722519391857                                                                                                                 
  Monitoring transaction status...                                                                                                                                                       
                                                                                                                                                                                         
  ⚠ Transaction completed with state: OrderState.PENDING_APPROVAL
```

## gateway allowance

Check token allowances for DEX connectors (Ethereum only).

```
usage: gateway allowance [-h] [connector]                                                                                                                                              
                                                                                                                                                                                         
  positional arguments:                                                                                                                                                                  
    connector   Ethereum connector name/type (e.g., uniswap/amm)
```

```
>>>  gateway allowance uniswap/amm                                                                                                                                                     
  Checking token allowances, please wait...                                                                                                                                              
                                                                                                                                                                                         
  Connector: uniswap/amm                                                                                                                                                                 
  Chain: ethereum                                                                                                                                                                        
  Network: base                                                                                                                                                                          
  Wallet: 0xDA50C69342216b538Daf06FfECDa7363E0B96684                                                                                                                                     
       Symbol       Address Allowance                                                                                                                                                    
         AAVE 0x6370...814b Unlimited                                                                                                                                                    
        CBBTC 0xcbB7...33Bf         0                                                                                                                                                    
          DAI 0x50c5...B0Cb Unlimited                                                                                                                                                    
         LINK 0x88fb...e196 Unlimited                                                                                                                                                    
         USDC 0x8335...2913 Unlimited                                                                                                                                                    
         USDT 0xfde4...9bb2         0                                                                                                                                                    
      VIRTUAL 0x0b3e...7e1b Unlimited                                                                                                                                                    
         WETH 0x4200...0006 Unlimited 
```

## gateway generate-certs

Generate SSL certificates for secure Gateway communication.
```
usage: gateway generate-certs [-h]
```

```
>>>  gateway generate-certs                                                                                                                                                            
                                                                                                                                                                                         
  Enter pass phrase to generate Gateway SSL certifications  >>> *****                                                                                                                    
  Gateway SSL certification files are created in /Users/feng/hummingbot/certs.
```

Afterwards, run `pnpm run setup` from the Gateway root directory to copy these certificates to Gateway.