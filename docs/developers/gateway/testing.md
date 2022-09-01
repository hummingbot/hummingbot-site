## Manual tests

Certain manual tests are defined in the `gateway/manual-tests/curl.sh` file. To run them, ensure that you have `curl` installed in your system.

### Dependencies

#### Mac

```
# Install curl
brew install curl

# Install jq (note: jq is like `sed` for JSON data)
brew install jq

# Install envsubst
brew install gettext
brew link --force gettext
```

#### Linux
```
# Install curl
sudo apt install curl

# Install jq
sudo apt install jq
```

### Testing using `curl`

Initialize environment variables that use the certs folder path from [Setup - 1. Generate Certs](/developers/gateway/setup/#1-generate-certs) to define access to Gateway. This path should also be defined in `gateway/conf/ssl.yml`:

```bash
# Replace the path with the certs folder path
export GATEWAY_CERT="/Users/myname/.hummingbot-gateway/hummingbot-gateway-1dd88a7e8/certs/client_cert.pem"
export GATEWAY_KEY="/Users/myname/.hummingbot-gateway/hummingbot-gateway-1dd88a7e8/certs/client_key.pem"
```

Then, copy and paste individual commands into your Terminal to execute the tests accordingly:

```bash
(hummingbot) manual-tests ➜ curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:5000/ | jq

{
  "status": "ok"
}

(hummingbot) manual-tests ➜ curl -s -X POST -k --key $GATEWAY_KEY --cert $GATEWAY_CERT -H "Content-Type: application/json" -d "$(envsubst < ./requests/price_uniswap.json)" https://localhost:5000/amm/price | jq

{
  "network": "kovan",
  "timestamp": 1661981184467,
  "latency": 4.716,
  "base": "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
  "quote": "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
  "amount": "1.000000000000000000",
  "rawAmount": "1000000000000000000",
  "expectedAmount": "0.000023530401",
  "price": "0.000023069021",
  "gasPrice": 2.500000007,
  "gasPriceToken": "ETH",
  "gasLimit": 3000000,
  "gasCost": "0.000376721000000000"
}

```

## Testing with Postman

Hummingbot Foundation maintains a [Postman workspace](https://www.postman.com/faouzi-hummingbot/workspace/connectors-testing) that developers can use for testing.

See this [Notion page](https://hummingbot-foundation.notion.site/Gateway-V2-connector-testing-guide-78eebb22f6484159b321da4322c700ef) for more information about how to use the workspace with Postman.
