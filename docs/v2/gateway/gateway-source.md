# Gateway Installation and Test

## Installation

This guide assumes that you have already installed Hummingbot from source. If you haven’t, see [these instructions](https://www.notion.so/Scripts-Snippets-3b4b454c9a1049d08497beddf52c9f30).

Before you start, make sure that you are on the `development` branch of Hummingbot. Run `git checkout development` and `./compile` afterwards.

The first step is to generate self-signed certificates from the Hummingbot client. These certificates let your bots securely communicate with Gateway.

Start the Hummingbot client:

```bash
(base) ➜ conda activate hummingbot
(hummingbot) ➜ bin/hummingbot.py

```

In the Hummingbot client, run `gateway generate-certs` **:**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/315a37ca-7fea-4f96-8dea-f3aaaf0ce455/Untitled.png)

Enter a secure **passphrase**, and then Hummingbot will generate self-signed certificates that a server can use to authenticate its connection with this client.

Take note of the **path** where they are stored. This is also stored as `certs_path` in the `conf_client.yml` file.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33a9c7a7-3933-4921-8a0d-c77387a9bb10/Untitled.png)

After this step, take note of **passphrase** and **certs_path** since you’ll need them later.

Now, you can install Gateway via source (preferred for developers) or Docker. Only pick one path as having both versions on the same machine will result in conflicts.

### Install Gateway via Source

Install the following dependencies:

- [NodeJS](https://nodejs.org/) (use 16.0.0 or higher)
- yarn: run `npm install -g yarn` after installing NodeJS

Then, follow the instructions below:

```bash
# Clone repo and enter the created directory
(base) ➜ git clone https://github.com/hummingbot/gateway.git

cd gateway

# Install dependencies
(base) ➜ yarn

# Complile Typescript into JS
(base) ➜ yarn build

# Run Gateway setup script, which helps you set configs and CERTS_PATH
$ chmod a+x gateway-setup.sh
$ ./gateway-setup.sh

# Enter path to the Hummingbot certs folder
# (certificatePath with certs_path from step 1)
Enter path to the Hummingbot certs folder >>> 

# Start Gateway using passphrase from step 1
(base) ➜ $ yarn start --passphrase=<passphrase>
```

<aside>
💡 Edit the file conf/server.yml in your IDE tips:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/24e0999f-e178-4e49-84ad-eaade12daed2/Untitled.png)

copy your certs directory:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4973492b-a074-46da-b46b-4c78c75c9b37/Untitled.png)

replace `/certs/` with your (correct) path:

</aside>

### Install Gateway via Docker

For the reference you could check docs here: [https://github.com/hummingbot/gateway/tree/main/docker](https://github.com/hummingbot/gateway/tree/main/docker)

```jsx
# Run Gateway Docker setup script
(base) ➜ ./gateway-create.sh
```

After a successful installation using via either method, you should see Gateway running on port 15888:

```bash

2023-02-09 12:56:50 | info |  ⚡️ Starting Gateway API on port 15888...
2023-02-09 12:56:50 | info |  The gateway server is secured behind HTTPS.
2023-02-09 12:56:50 | info |  ⚡️ Swagger listening on port 8080. Read the Gateway API documentation at 127.0.0.1:8080
```

Go back to your Hummingbot client or restart it if you have exited. In the upper right corner, you should see `GATEWAY: ONLINE`

## Documentation

Once Gateway is running, open [http://localhost:8080](http://localhost:8080) in your browser to see the Swagger documentation for each available endpoint:

![Screen Shot 2023-02-08 at 3.46.03 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/29b18190-04de-4968-8941-9a167eaee3b0/Screen_Shot_2023-02-08_at_3.46.03_PM.png)

(WIP) For more information on these endpoints, consult the **Gateway API Reference** section in the Hummingbot docs: [https://docs.hummingbot.org/developers/gateway/api-interface/](https://docs.hummingbot.org/developers/gateway/api-interface/)

## Testing

After the Gateway server is running, you can test it out in a few different ways:

### Postman

The official Hummingbot Postman workspace is: [https://www.postman.com/hummingbot](https://www.postman.com/hummingbot)

Postman is the easiest way to test Gateway on a standalone basis. In the future, we should encourage community maintainers to upload DEX and chain-specific collections to the Hummingbot workspace.

Download and Install Postman on your machine. You first have to establish a secure connection with your Gateway instance using certificates in the settings section, so the web version won’t work.

- In Postman, go to **Settings** >> **Certificates**

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/478f8063-3d82-46f4-ac4c-77c09e5baa7c/Untitled.png)

- Add the **CA Certificate**

    Follow the `certs_path` directory in Terminal/Bash and copy `ca_cert.pem` to your desktop. Click **Add Certificates** and add this file

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0a397fc-9f96-4525-a8bf-ce49cfc5e733/Untitled.png)

- Add the **Client Certificates**
  - Host: The port is `15888` by default
  - CRT: Enter path to `client_cert.pem`
  - KEY: Enter path to `client_key.pem`
  - Passphrase: Your Gateway `passphrase`

    ![Screen Shot 2023-01-23 at 2.29.58 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7b265f94-e467-4011-b39d-4f851614f19d/Screen_Shot_2023-01-23_at_2.29.58_PM.png)

It contains collections like [Gkspace/hummingbot-gateway/api/84754323-c812ab-996f-42ee-ab2a-f18 the main endpoints. Export thee orkspation `.cson` file that is downloaded:

![Sc//s3-us-west-2.amazonaws.com/secure.notf/Screen_Shot_2022-08-31_at_1.42.0man

![Screen Shot 2022-08-31 at 1.44.51 Pe.notion-static.com/abf57f85-9b01-4951-a.44.51_PM.png)

Now, you will be able to test all of the endpoints available in the collection. Feel free to change the values and add extra tests.

### Unit tests

Run the unit tests locally if there are issues with the Github workflow, since these are the same tests that Github run.

`yarn test:unit` runs all of the tests. Alternatively, you can run the unit tests from a single file with `yarn jest path/to/test`. For example:

```bash
yarn jest test/chains/ethereum/ethereum.controller.test.ts
```

Read this document for more details about how to write unit test in gateway: [How we write unit tests for gateway](https://github.com/hummingbot/gateway/blob/main/docs/testing.md).

### `curl` scripts

## `curl` scripts

Certain manual test scripts are defined in `/test-helpers/curl/curl.sh` file. To run them, ensure that you have [curl](https://curl.se/) installed in your system.

The requests can be changed by the files in `/test-helpers/curl/requests/*.json`

Copy and paste individual commands into your terminal to execute the tests accordingly.

<aside>
💡 When using `curl` any of the tests that can be run using `uniswap` can be done on `sushiswap` connector or any future compatible connector that is similar to Uniswap by simply replacing the `connector` value in the JSON file.

</aside>

### Get status

Request:

```bash
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT [https://localhost:15888/](https://localhost:5000/) | jq
```

Response:

```json
{
  "status": "ok"
}
```

### Get connectors

Request:

```bash
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:15888/connectors | jq
```

Response:

{
    "connectors": [
   ......,
        {
            "name": "sushiswap",
            "trading_type": [
                "EVM_AMM"
            ],
            "available_networks": [
                {
                    "chain": "ethereum",
                    "networks": [
                        "mainnet",
                        "kovan",
                        "ropsten"
                    ]
                }
            ]
        }
    ]
}

## Run `amm_arb`

A good way to safely test Gateway is to set it up on Goerli testnet, and arbitrage against Binance using the `amm-arb` Hummingbot strategy in paper trading mode.

<aside>
💡 See this Excel file for sample calculations used in the `amm-arb` strategy

[amm_min_profitability_calc-gateway-v2.xlsx](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cb38b67-e728-4270-8ef2-3806d96e48a6/amm_min_profitability_calc-gateway-v2.xlsx)

</aside>

We have also added a `GatewayPriceShim` class in ‣ which allows the apparent prices on gateway connectors to be controlled by developers / QA via debug console.

Running integration tests with this configuration has the following advantages:

1. Goerli test tokens are easy to obtain: [https://goerlifaucet.com/](https://goerlifaucet.com/)
2. No actual CEX account, or CEX balance is required to perform testing.
3. Developer / QA can trigger arbitrage trades, and actual testnet transactions, on demand - rather than needing to wait for real prices to reach arbitrage thresholds.

### Connecting Wallets

Start Hummingbot. Once Gateway is running, issue the following commands to connect to your test wallet.

```python
# Connecting wallet to Uniswap on Goerli
>>> gateway connect uniswap

Which network do you want uniswap to connect to? (mainnet, goerli, arbitrum_one) >>>
goerli

Enter your ethereum-mainnet private key >>>>
[private key]
```

**SECURITY WARNING: Ensure to remove private keys from clipboard once used.**

### Setting Up Global Configuration

You’ll need to enable debug console to allow triggering arbitrage transactions later. Also, you should set up some appropriate paper trade account balance to allow `amm_arb` to trade on both sides.

e.g. you’re going to set up `amm_arb` to trade between WETH-DAI Uniswap / Goerli vs. ETH-USDT on Binance paper trade. Then, you’ll need to set up some initial ETH and USDT balance on the paper trade account in `conf_global.yml` . Here’s an example setup you can use for the global config.

```yaml
debug_console: true
paper_trade_account_balance:
  ETH: 10
  USDT: 30000
```

### Setting Up `amm_arb` Strategy

Use `create` command to set up an `amm_arb` strategy. Make sure you’re trading between a test-net gateway connector, vs. a CEX in paper trading mode. Also, use small order amounts so you don’t burn up all your test tokens in just one order.

Here’s an example config:

```yaml
Connector 1: uniswap_ethereum_goerli
Market 1: WETH-DAI
Connector 2: binance_paper_trade
Market 2: ETH-USDT
Order amount: 0.1
Min profitability: 1
Market 1 slippage buffer: 0.05
Market 2 slippage buffer: 0
Concurrent orders submission: Doesn't matter, choose any
```

After creating the config, use the `config` command to set `debug_price_shim` to True.

```bash
>>> config debug_price_shim True
```

### Starting `amm_arb` Strategy

Use the `start` command, and then answer `Yes` when asked to confirm the strategy settings.

After starting the `amm_arb` strategy, you’ll see the apparent prices on the AMM market will track the prices on the CEX exchange - and the strategy will report no arbitrage opportunities. This is expected.

### Triggering Arbitrage Transactions

## Sample scripts
