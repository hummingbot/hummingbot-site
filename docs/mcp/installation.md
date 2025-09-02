# MCP Server Installation

This guide covers the installation and setup of the Hummingbot MCP Server for different environments and use cases.

## Prerequisites

Before installing the Hummingbot MCP Server, ensure you have:

1. **Python 3.11+** installed on your system
2. **Running Hummingbot API Server** - See [Hummingbot API Installation](/hummingbot-api/installation/)
3. **Valid API credentials** for the Hummingbot API server
4. **AI Assistant** supporting MCP (Claude CLI, Gemini CLI, etc.)

## Development Setup

### Using uv (Recommended)

The fastest way to get started for development:

1. **Clone the repository**:
```bash
git clone https://github.com/hummingbot/mcp.git
cd mcp
```

2. **Install dependencies**:
```bash
uv sync
```

3. **Configure environment**:
```bash
cp .env.example .env
# Edit .env with your Hummingbot API credentials
```

4. **Run the server**:
```bash
uv run mcp
```

### Using pip

If you prefer using pip:

1. **Clone the repository**:
```bash
git clone https://github.com/hummingbot/mcp.git
cd mcp
```

2. **Create virtual environment**:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**:
```bash
pip install -r requirements.txt
```

4. **Configure environment**:
```bash
cp .env.example .env
# Edit .env file with your configuration
```

5. **Run the server**:
```bash
python -m mcp
```

## Install via Source or Docker

### Source Installation

Install from source code for development and customization:

Follow the [Development Setup](#development-setup) instructions above.

### Docker Installation

*Docker installation guide coming soon.*

## Configuration

Configure the MCP server using environment variables:

### Required Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `HUMMINGBOT_API_URL` | URL of your Hummingbot API server | `http://localhost:8000` |
| `HUMMINGBOT_API_USERNAME` | API username | `admin` |
| `HUMMINGBOT_API_PASSWORD` | API password | `password123` |

### Optional Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `MCP_SERVER_PORT` | Port for MCP server | `3000` |
| `LOG_LEVEL` | Logging level (DEBUG, INFO, WARN, ERROR) | `INFO` |
| `REQUEST_TIMEOUT` | API request timeout in seconds | `30` |
| `MAX_RETRIES` | Maximum API retry attempts | `3` |

### Configuration File

Create a `.env` file in your project directory:

```bash
# Hummingbot API Configuration
HUMMINGBOT_API_URL=http://localhost:8000
HUMMINGBOT_API_USERNAME=admin
HUMMINGBOT_API_PASSWORD=your-secure-password

# MCP Server Configuration
MCP_SERVER_PORT=3000
LOG_LEVEL=INFO

# Optional Settings
REQUEST_TIMEOUT=30
MAX_RETRIES=3
```

## AI Assistant Integration

### Claude CLI Setup

1. **Install Claude CLI**:
```bash
npm install -g @anthropic-ai/claude-cli
```

2. **Configure MCP server** in your Claude configuration (`~/.claude/config.json`):
```json
{
  "mcpServers": {
    "hummingbot": {
      "command": "uv",
      "args": ["run", "mcp"],
      "cwd": "/path/to/hummingbot-mcp"
    }
  }
}
```

3. **Start Claude with MCP**:
```bash
claude --mcp
```

### Alternative Configuration Methods

**Using Python directly**:
```json
{
  "mcpServers": {
    "hummingbot": {
      "command": "python",
      "args": ["-m", "mcp"],
      "cwd": "/path/to/hummingbot-mcp",
      "env": {
        "HUMMINGBOT_API_URL": "http://localhost:8000"
      }
    }
  }
}
```

**Using Docker**:
*Configuration example coming soon.*

## Verification

### Test MCP Server

1. **Check server health**:
```bash
curl http://localhost:3000/health
```

2. **Verify API connection**:
```bash
curl -X POST http://localhost:3000/test-connection
```

### Test with AI Assistant

Start a conversation with your AI assistant:

```
You: "Can you show me my portfolio balances?"
AI: "I'll check your portfolio balances using the Hummingbot MCP server..."
```

## Troubleshooting

### Common Installation Issues

**1. Python Version Error**
```bash
# Check Python version
python --version
# Ensure you have Python 3.11+
```

**2. Missing Dependencies**
```bash
# Reinstall dependencies
uv sync --force
# or
pip install -r requirements.txt --force-reinstall
```

**3. Permission Issues**
```bash
# Fix permissions on Unix systems
sudo chown -R $USER:$USER /path/to/mcp
chmod +x scripts/*
```

### Connection Issues

**1. API Server Not Reachable**
- Verify Hummingbot API server is running
- Check API URL in configuration
- Test network connectivity

**2. Authentication Failures**
- Verify username/password in .env file
- Check API server authentication settings
- Ensure credentials are properly formatted

**3. Port Conflicts**
```bash
# Check if port 3000 is in use
lsof -i :3000
# Use alternative port
export MCP_SERVER_PORT=3001
```

### Docker Issues

*Docker troubleshooting guide coming soon.*

## Updating

### Development Environment
```bash
cd mcp
git pull origin main
uv sync
```

### Docker Environment
*Docker update instructions coming soon.*

## Next Steps

After successful installation:

1. **Explore [MCP Tools](/mcp/tools/)** - Learn about available trading tools
2. **Check [Usage Examples](/mcp/#example-workflows)** - See practical AI trading workflows
3. **Review [Security Guidelines](/mcp/#security-considerations)** - Ensure secure operation

---

*For additional support, visit our [Discord community](https://discord.gg/hummingbot) or check the [GitHub repository](https://github.com/hummingbot/mcp) for the latest updates.*