# Commands Reference

## `/start` - Main Menu

Welcome screen with quick access to all features.

**Main Menu Options:**
- 📊 Portfolio
- 🤖 Bots
- 💱 Swap
- 📊 Trade
- 💧 LP
- 🔌 Servers
- 🔑 Keys
- 🌐 Gateway
- ❓ Help

## `/help` - Command Guide

Interactive help system with detailed information about each feature.


## `/portfolio` - Portfolio Management

Comprehensive portfolio dashboard with real-time data and analytics.

### Features

**PnL Tracking:**
- 24h, 7d, 30d performance indicators
- Deposit/withdrawal detection
- Historical PnL charts

**Holdings:**
- Token balances across all accounts
- 24h price changes
- Account breakdown

**Positions:**
- Perpetual positions with unrealized PnL
- CLMM liquidity positions
- In-range status for LP positions

**Dashboard Graphs:**
- Portfolio value history
- Token distribution pie chart
- Account breakdown

#### Settings

Click **⚙️ Settings** to customize:
- **Time Period**: 1d, 3d, 7d, 14d, 30d
- **Refresh**: Force update from exchanges

### Usage Examples

```
/portfolio                    # Show portfolio dashboard
Click "⚙️ Settings"          # Customize time period
Click "🔄 Refresh"            # Update from exchanges
```

## `/bots` - Bot Monitoring

Monitor and manage all your Hummingbot trading bots.

### Features

**Bot List:**
- All active bots with status
- Health and uptime indicators
- Quick access to each bot

**Bot Details:**
- System metrics (CPU, Memory, Uptime)  
- Active controllers with performance
- Recent logs

**Controller Management:**
- View controller details
- Performance metrics (PnL, volume, win rate)
- Edit parameters (Grid Strike)
- Start/stop controllers
- View OHLCV charts

**Actions Available:**

1. **View Bot**
   - Select bot from list
   - See all controllers and metrics
   
2. **View Controller**
   - Click controller name
   - See detailed performance
   - View charts (Grid Strike only)
   
3. **Edit Controller** (Grid Strike)
   - Click "📝 Edit"
   - Modify parameters field-by-field
   - Bulk edit with `key=value` format
   
4. **Stop/Start Controller**
   - Quick stop from bot detail
   - Start inactive controllers
   
5. **View Logs**
   - Click "📝 Logs"
   - See recent bot activity
   - Refresh for updates

6. **Stop Bot**
   - Click "🛑 Stop Bot"
   - Confirm to archive

#### Usage Examples

```
/bots                        # List all bots
Click bot name              # View bot details
Click controller name       # View controller metrics
Click "📝 Edit"             # Edit parameters
Click "📈 Chart"            # View OHLCV chart (Grid Strike)
Click "🛑 Stop"             # Stop controller
```

---

### `/trade` - CEX/CLOB Trading

Unified trading interface for centralized exchanges (spot and perpetual).

#### Supported Exchanges
- Binance (spot + perpetual)
- Bybit (spot + perpetual)
- OKX, Kucoin, Kraken, Coinbase, and more

#### Trading Functions

##### 1. Order Operations

**Place Market Order:**
- Click connector → select exchange
- Click pair → enter trading pair (e.g., `BTC-USDT`)
- Click side → select BUY/SELL
- Click type → select MARKET
- Click amount → enter quantity
    - Use `$100` for USD value (auto-converts to units)
    - Use `0.01` for exact token amount
- Click "✅ Execute" → confirm order

**Place Limit Order:**
- Same as market order, but:
- Click type → select LIMIT
- Click price → enter limit price
- Click "✅ Execute" → submit order

**View Orders:**
- Click "🔍 Orders" from trade menu
- See all open orders
- Filter by connector/pair
- Cancel individual orders
- Cancel all button

**Cancel Orders:**
- From orders view, click "🗑 Cancel" next to order
- Or click "Cancel All" to close all orders

##### 2. Position Management

**View Positions:**
- Click "📊 Positions" from trade menu
- See all open perpetual positions
- View unrealized PnL
- Check leverage and position side

**Close Position:**
- From positions view, select position
- Click "Close Position"
- Confirm to close at market

**Position Tracking:**
- Entry price and mark price
- Unrealized PnL in USD and %
- Leverage used
- Position side (LONG/SHORT)

##### 3. Perpetual Configuration

**Set Leverage:**
- Click "⚡ Leverage" from trade menu
- Select connector
- Select trading pair
- Enter leverage amount (1-125x depending on exchange)
- Confirm to set

**Position Mode:**
- Click "🔄 Position Mode"
- Select One-way or Hedge mode
- Applies to entire connector

**Account Switching:**
- Click connector button
- Select different account
- All subsequent trades use selected account

#### Interactive Menu

The trade menu shows:
- Current balances for selected connector
- Recent orders (last 5)
- Active positions (perpetual)
- Real-time quote preview
- Trading rules (min/max amounts)

#### Usage Examples

```
# Market Buy
/trade
Click "🔌 Connector" → Select "binance"
Click "💱 Pair" → Type "SOL-USDT"
Click "📈 Side" → Ensure "BUY"
Click "💰 Amount" → Type "$100"
Click "✅ Execute" → Confirm

# Limit Sell
/trade  
Click "🔌 Connector" → Select "bybit_perpetual"
Click "💱 Pair" → Type "BTC-USDT"
Click "📉 Side" → Select "SELL"
Click "📋 Type" → Select "LIMIT"
Click "💰 Amount" → Type "0.01"
Click "💵 Price" → Type "95000"
Click "✅ Execute" → Confirm

# Set Leverage
/trade
Click "⚡ Leverage"
Select connector and pair
Type "10" → 10x leverage
Confirm

# View & Cancel Orders
/trade
Click "🔍 Orders"
Click "🗑 Cancel" next to order
Or "Cancel All"
```

---

### `/swap` - DEX Token Swaps

Quick token swaps on decentralized exchanges via Gateway.

#### Supported DEX Routers
- **Solana**: Jupiter
- **Ethereum**: Uniswap
- **Base**: Uniswap
- And more aggregators (0x, 1inch, OpenOcean)

#### Swap Operations

**Get Quote:**
1. Click "🌐 Network" → Select network (e.g., Solana)
2. Click "🔌 Router" → Select DEX (e.g., jupiter)
3. Click "💱 Pair" → Enter pair (e.g., `SOL-USDC`)
4. Click "📈 Side" → Select BUY or SELL
5. Click "💰 Amount" → Enter amount
6. Click "📊 Slippage" → Set slippage % (default: 1%)
7. Click "📋 Quote" → Get real-time price

**Execute Swap:**
1. After getting quote, click "✅ Execute"
2. Review swap details
3. Confirm to submit transaction
4. Wait for blockchain confirmation

**Quick Swap:**
- Repeats last swap with same parameters
- Just update amount if needed
- Fast execution

**Swap History:**
- Click "🔍 History"
- View recent swaps
- See transaction status
- Filter by network/connector
- Click 🔗 to view on explorer

#### Features

- Real-time quote preview
- Buy/Sell spread display
- Balance checking
- Recent swaps display (last 5)
- Slippage protection
- Transaction status tracking

#### Usage Examples

```
# Basic Swap
/swap
Click "🌐 Network" → "Solana"
Click "🔌 Router" → "jupiter"
Click "💱 Pair" → "SOL-USDC"
Click "📈 Side" → "BUY"
Click "💰 Amount" → "10"
Click "📋 Quote" → Review
Click "✅ Execute" → Confirm

# View History
/swap
Click "🔍 History"
View recent swaps
Click 🔗 for transaction details
```

---

### `/lp` - Liquidity Pool Management

Manage CLMM (Concentrated Liquidity Market Maker) positions.

#### Features

**LP Positions:**
- View all liquidity positions
- In-range/out-of-range status
- Uncollected fees
- Position value and PnL

**Pool Discovery:**
- Browse pools by connector
- Search by network
- GeckoTerminal integration
- View pool analytics

**Position Management:**
- Collect fees from positions
- Add liquidity to pools
- Remove liquidity
- Close positions

#### Operations

**View Positions:**
- See all active LP positions
- In-range indicator (🟢/🔴)
- Uncollected fees
- Current value

**Collect Fees:**
- Click "💰 Collect" next to position
- Or "💰 Collect All" for all positions
- Fees sent to wallet

**Add Liquidity:**
- From pool explorer
- Select pool
- Enter amounts
- Set price range
- Confirm transaction

**Remove Liquidity:**
- Select position
- Click "❌ Close" or "Remove"
- Specify amount to remove
- Confirm transaction

**Pool Explorer:**
- Click "🔍 Pool Info"
- Search by network and connector
- View:
    - Pool TVL
    - 24h volume
    - Fee tier
    - Token reserves
    - Current price

#### Usage Examples

```
# View Positions
/lp
See all positions with fees

# Collect Fees
/lp
Click "💰 Collect" next to position
Confirm

# Explore Pools
/lp
Click "📋 Pools"
Select network
Select connector
Browse available pools
```

---

### `/config` - Configuration Management

Complete system configuration through Telegram menus.

#### API Servers

Manage connections to Hummingbot Backend API instances.

**View Servers:**
- Lists all configured servers
- Real-time status (🟢 Online / 🔴 Offline)
- Shows default server (⭐)
- Connection details

**Add Server:**
1. Click "➕ Add Server"
2. Progressive form:
   - **Name**: Unique identifier (e.g., `main`, `prod`, `dev`)
   - **Host**: Server address (e.g., `localhost`, `192.168.1.100`)
   - **Port**: API port (default: `8000`)
   - **Username**: API username (default: `admin`)
   - **Password**: API password (default: `admin`)
3. Review and confirm
4. Server is added and tested

**Modify Server:**
1. Click server name from list
2. Click field to modify (Host, Port, User, Pass)
3. Enter new value
4. Changes saved immediately

**Delete Server:**
1. Click server name
2. Click "🗑 Delete"
3. Confirm deletion
4. Server removed from configuration

**Set Default Server:**
1. Click server name
2. Click "⭐ Set as Default"
3. Default server used for all operations

**Server Status:**
- **🟢 Online**: Server reachable and authenticated
- **🔴 Offline**: Cannot connect to server
- **🔴 Auth Error**: Wrong credentials

#### API Keys

Manage exchange API credentials for trading.

**View Credentials:**
- Lists all accounts
- Shows connected exchanges per account
- Number of credentials

**Add API Key:**
1. Click "🔑 API Keys"
2. Select account
3. Select exchange connector
4. Progressive input form:
   - Fields vary by exchange
   - Common: `api_key`, `api_secret`
   - Perpetual: may need `api_passphrase`
5. Credentials tested automatically
6. Success confirmation

**Delete API Key:**
1. Select account
2. Find credential to remove
3. Click "🗑 Delete [exchange]"
4. Confirm deletion
5. Credential removed

**Security Features:**
- Secrets displayed as `****`
- Input messages deleted immediately
- Encrypted storage via Hummingbot API

#### Gateway Configuration

Deploy and manage Gateway for DEX trading.

##### Deployment

**Deploy Gateway:**
1. Click "🌐 Gateway"
2. Click "🚀 Deploy"
3. Select Docker image:
   - `latest` - Stable release
   - `development` - Latest features
   - Custom image
4. Gateway container deployed

**Stop Gateway:**
- Click "🛑 Stop Gateway"
- Container stopped
- Preserves configuration

**Restart Gateway:**
- Click "🔄 Restart"
- Gateway restarted with same config

**View Logs:**
- Click "📝 Logs"
- See recent gateway activity
- Troubleshoot issues

##### Wallet Management

**Add Wallet:**
1. Click "💼 Wallets"
2. Click "➕ Add Wallet"
3. Select blockchain (Solana, Ethereum, Base, etc.)
4. Enter private key
   - **Security**: Message deleted immediately
   - Stored encrypted in Gateway
5. Wallet address confirmed

**View Wallets:**
- Listed by blockchain
- Shows wallet addresses
- Balances (if available)

**Remove Wallet:**
1. Select blockchain
2. Select wallet address
3. Confirm removal
4. Wallet removed from Gateway

##### Network Configuration

**View Networks:**
- Lists all available networks
- Shows RPC endpoints
- Chain ID and settings

**Configure Network:**
1. Select network
2. Progressive field editing
3. Modify:
   - RPC URL
   - Chain ID
   - Gas settings
   - Timeouts
4. Changes applied to Gateway

**Supported Networks:**
- Ethereum Mainnet
- Base
- Solana Mainnet/Devnet
- BSC
- Polygon
- Arbitrum
- And more

##### DEX Connectors

**View Connectors:**
- Lists all DEX connectors
- Configuration status
- Trading type (AMM, CLMM, Router)

**Configure Connector:**
1. Select connector
2. View current settings
3. Edit configuration fields
4. Apply changes to Gateway

**Connector Types:**
- **AMM**: Constant product pools
- **CLMM**: Concentrated liquidity
- **Router**: Aggregated routing

##### Pool Management

**Add Custom Pool:**
1. Click "📋 Pools"
2. Select connector
3. Select network
4. Enter pool details:
   - Pool type
   - Base token
   - Quote token
   - Pool address
5. Pool added to Gateway

**Remove Pool:**
1. Browse pools by connector/network
2. Select pool
3. Click "🗑 Delete"
4. Confirm removal

**View Pools:**
- Listed by connector and network
- Shows token pairs
- Pool addresses

##### Token Management

**Add Custom Token:**
1. Click "🪙 Tokens"
2. Select network
3. Enter token details:
   - Token address
   - Symbol
   - Decimals
   - Name (optional)
4. Token added for trading

**Remove Token:**
1. Browse tokens by network
2. Select token
3. Click "🗑 Delete"
4. Confirm removal

**View Tokens:**
- Listed by network
- Shows all configured tokens
- Symbol, address, decimals

#### Usage Examples

```
# Add API Server
/config
Click "🔌 API Servers"
Click "➕ Add Server"
Name: "production"
Host: "192.168.1.100"
Port: "8000"
Username: "admin"
Password: "mypassword"
Confirm

# Add Exchange Credentials
/config
Click "🔑 API Keys"
Select account
Select "binance"
Enter api_key
Enter api_secret
Confirm → Tested automatically

# Deploy Gateway
/config
Click "🌐 Gateway"
Click "🚀 Deploy"
Select "latest"
Wait for deployment → Success

# Add Wallet
/config → "🌐 Gateway" → "💼 Wallets"
Click "➕ Add Wallet"
Select "solana-mainnet-beta"
Enter private key (deleted immediately)
Wallet address confirmed

# Configure Network
/config → "🌐 Gateway" → "🌐 Networks"
Select network
Edit RPC URL or other settings
Changes applied
```

**Community Support:**
- Hummingbot Discord: https://discord.gg/hummingbot
- GitHub Issues: https://github.com/hummingbot/condor/issues
