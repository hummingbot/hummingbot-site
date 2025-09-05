# MCP Server Installation

This guide covers the installation and setup of the Hummingbot MCP Server for different environments and use cases.

## Prerequisites

Before installing the Hummingbot MCP Server, ensure you have:

1. **Python 3.11+** installed on your system
2. **Running Hummingbot API Server** - See [Hummingbot API Installation](/hummingbot-api/installation/)
3. **Valid API credentials** for the Hummingbot API server
4. **AI Assistant** supporting MCP (Claude CLI, Gemini CLI, etc.)
5. **Docker Desktop** installed 


## Docker MCP Catalog

- Open Docker Desktop and go to "MCP Toolkit" > "Catalog."

- Browse or search for the Hummingbot MCP server

![toolkit](toolkit.png)

- Click the plus icon to install the Hummingbot MCP server 

- Navigate to the "Configuration" tab for the Hummingbot MCP server

![alt text](config.png)


- Set the following **environment variables** for the MCP server to reach your Hummingbot API:

| Variable | Description | Example |
|---|---|---|
| `HUMMINGBOT_API_URL` | URL of the Hummingbot API endpoint | `http://localhost:8000` |
| `HUMMINGBOT_API_USERNAME` | API username | `admin` |
| `HUMMINGBOT_API_PASSWORD` | API password | `password` |


**Note: If you have Hummingbot API running locally, you might need to set the API_URL to `http://host.docker.internal:8000` instead of `http://localhost:8000`**


### Connect an MCP Client

- After installing and configuring the Hummmingbot MCP server, you can connect them to MCP clients

- In Docker Desktop, select **MCP Toolkit** and select the **Clients** tab

![alt text](client.png)

- Find the client you wish to connect (e.g., Claude Desktop, Cursor, VS Code).

- Click "Connect" to establish the connection. 

**For other clients not listed,  you can connect them by specifying the following command:**

```
docker mcp gateway run

```

**OR** manually add the Docker MCP Toolkit as a server

```
"mcp": {
  "servers": {
    "MCP_DOCKER": {
      "command": "docker",
      "args": [
        "mcp",
        "gateway",
        "run"
      ],
      "type": "stdio"
    }
  }
}
```


## JSON MCP integration

- If you don't have Docker Desktop installed (Linux CLI only), then you can manually add the Hummingbot MCP manually by adding the below to the `mcp.json` file of your AI Assistant. 

- Note that you'll still need to have `docker` working as well. 


```json
{
  "mcpServers": {
    "hummingbot-mcp-docker": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "--network", "host",
        "-e", "HUMMINGBOT_API_URL=http://localhost:8000",
        "-e", "HUMMINGBOT_USERNAME=admin",
        "-e", "HUMMINGBOT_PASSWORD=admin",
        "hummingbot/hummingbot-mcp:latest"
      ],
      "description": "Hummingbot MCP server for interacting with Hummingbot API"
    }
  }
}
```



### Optional Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `MCP_SERVER_PORT` | Port for MCP server | `3000` |
| `LOG_LEVEL` | Logging level (DEBUG, INFO, WARN, ERROR) | `INFO` |
| `REQUEST_TIMEOUT` | API request timeout in seconds | `30` |
| `MAX_RETRIES` | Maximum API retry attempts | `3` |


### Test with AI Assistant

Start a conversation with your AI assistant:

```
You: "Can you show me my portfolio balances?"
AI: "I'll check your portfolio balances using the Hummingbot MCP server..."
```

## Troubleshooting

### Connection Issues

**1. API Server Not Reachable**
- Verify Hummingbot API server is running
- Check API URL in configuration
- Test network connectivity

**2. Authentication Failures**
- Verify username / password provided or in `.env` file
- Check API server authentication settings
- Ensure credentials are properly formatted


## Next Steps

After successful installation:

1. **Explore [MCP Tools](/mcp/tools/)** - Learn about available trading tools
2. **Check [Usage Examples](/mcp/#example-workflows)** - See practical AI trading workflows
3. **Review [Security Guidelines](/mcp/#security-considerations)** - Ensure secure operation

---

*For additional support, visit our [Discord community](https://discord.gg/hummingbot) or check the [GitHub repository](https://github.com/hummingbot/mcp) for the latest updates.*