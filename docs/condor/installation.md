# Installation & Deployment

This guide outlines the steps to install and deploy Condor.

## 🐳 Option 1: Docker (Recommended)

The easiest way to install Condor is via the [Hummingbot API Quickstart](../installation/hummingbot-api.md), which installs both Hummingbot API and Condor together.

## 🐍 Option 2: Source (Developers)

Use this method if you want to run Condor directly from the source code.

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/hummingbot/condor.git
cd condor
```

### Create Conda Environment

```bash
conda env create -f environment.yml
conda activate condor
```

### Configure Environment

Run the setup script to generate your `.env` file.

```bash
./setup-environment.sh
``` 

### Run the Bot

```bash
python main.py
```

## 🛠️ Post-Installation Configuration

**Getting Your Telegram User ID:**
1. Start the bot with `/start`
2. If not authorized, the bot will display your User ID
3. Add your User ID to `TELEGRAM_ALLOWED_IDS`

#### 2. API Servers Configuration (`servers.yml`)

Create `servers.yml` to define your Hummingbot instances:

```yaml
default_server: main
servers:
  main:
    host: localhost
    port: 8000
    username: admin
    password: admin
    enabled: true
  
  remote:
    host: 192.168.1.100
    port: 8000
    username: admin
    password: admin
    enabled: true
```

**Note**: You can also configure servers directly through the bot's `/config` menu.

### First-Time Setup

1. **Start the bot**: Send `/start` to your bot in Telegram
2. **Verify access**: Ensure your User ID is in `TELEGRAM_ALLOWED_IDS`
3. **Configure servers**: Use `/config` → `🔌 API Servers` to add your Hummingbot instances
4. **Add credentials**: Use `/config` → `🔑 API Keys` to connect exchange accounts
5. **Deploy Gateway** (optional): Use `/config` → `🌐 Gateway` to set up DEX trading
