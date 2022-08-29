!!! tip
    Use the [development](https://github.com/hummingbot/hummingbot/tree/development), since Gateway is still new and undergoing active work. Once you have cloned the Hummingbot repo, you can run `git checkout development` to switch to that branch.


For developers, we recommend installing Hummingbot from source, rather than Docker. This allows you to run Gateway as a standalone server and connect to it from the Hummingbot client. This setup has a few advantages:

* Makes upgrading to new versions of Hummingbot/Gateway easier
* Easier access to configuration files
* Enables multiple client instances to connect to one Gateway instance

First, follow [these instructions](/installation/source/) to **install Hummingbot from source** on MacOS, Windows, or Linux-based systems. 

Then, follow the steps below to start a Gateway server and enable the Hummingbot client to communicate with it.

## 1. Generate certs

After installing Hummingbot from source, run `bin/hummingboy.py` in order to start the Hummingbot client. You'll be promoted to enter a password.

In the first step, we generate encrypted certificates that the Gateway server will incorporate, which allows the client to authenticate the Gateway server with which it communicates. 

From the Hummingbot client, run the following command: 
```
>>> gateway generate-certs

Enter pass phase to generate Gateway SSL certifications: 
>>> *****

Gateway SSL certification files are created in 
/Users/myname/.hummingbot-gateway/hummingbot-gateway-1dd88a7e8/certs.
```

You will be prompted to enter the passphrase used to encrypt these certs. We recommend using the same password you set when you launched Hummingbot.

Take note of this folder path, but **do not exit the Hummingbot client** since we will return to it in step 4.

## 2. Set up Gateway SSL

Next, we will ensure that the Gateway server can access these newly generated certification files.

Open a new Terminal/Bash window and go to the Hummingbot root directory.

Then, run the following setup script to generate the Gateway `conf` folder and populate it with templates, which contains the default configuration parameters for each chain and network.

```bash

(hummingbot) ➜ gateway/setup/generate_conf.sh gateway/conf

===============  GENERATE GATEWAY CONFIGURATION FILES ===============

HOST_CONF_PATH=gateway/conf
created gateway/conf/ethereum.yml
created gateway/conf/ssl.yml ## edit this file afterwards ##
created gateway/conf/ethereum-gas-station.yml
created gateway/conf/avalanche.yml
created gateway/conf/logging.yml
created gateway/conf/pangolin.yml
created gateway/conf/root.yml
created gateway/conf/server.yml
created gateway/conf/uniswap.yml
created gateway/conf/traderjoe.yml
created gateway/conf/telemetry.yml

```

Open the newly created file named `ssl.yml` with your text editor, so that we can modify it with the cert folder path from step 1.

Initially, `ssl.yml` contains the following entrries:

```yaml
caCertificatePath: /usr/src/app/certs/ca_cert.pem
certificatePath: /usr/src/app/certs/server_cert.pem
keyPath: /usr/src/app/certs/server_key.pem
```

Change the paths so that they matches the cert folder path from step 1, and save the file. This allows the Gateway server that you set up in step 3 to be able to decrypt messages from the Hummingbot client.
```yaml
caCertificatePath: /Users/myname/.hummingbot-gateway/hummingbot-gateway-1dd88a7e8/certs/ca_cert.pem
certificatePath: /Users/myname/.hummingbot-gateway/hummingbot-gateway-1dd88a7e8/certs/server_cert.pem
keyPath: /Users/myname/.hummingbot-gateway/hummingbot-gateway-1dd88a7e8/certs/server_key.pem
```

## 3. Run Gateway server

Now, we are ready to run the Gateway server, which establishes a Typescript-based Express server that acts as a stateless middleware that brokers communications between the Python-based Hummingbot client and DEXs on various blockchains.

From the `/gateway` directory inside Hummingbot, run the following commands:

```bash
# Install dependencies
(hummingbot) gateway ➜ yarn

yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 25.53s.

# Compile code
(hummingbot) gateway ➜ yarn build
$ rimraf dist && mkdir dist
$ tsc --skipLibCheck --project ./ && yarn copy-files
$ copyfiles -a 'src/**/schema/*.json' 'src/templates/*.yml' 'test/services/data/**/*.*' dist
Done in 6.40s.

# Start server using certs passphrase
(hummingbot) gateway ➜ yarn start --passphrase=XXXXX
yarn run v1.22.19
$ node dist/src/index.js --passphrase=XXXXXX
2022-08-27 09:45:29 | info |    ⚡️ Gateway API listening on port 5000
2022-08-27 09:45:29 | info |    The gateway server is secured behind HTTPS.
2022-08-27 09:45:29 | info |    ⚡️ Swagger listening on port 8080. Read the Gateway API documentation at 127.0.0.1:8080
```

When you run `yarn start`, make sure to use the same passphrase that you used in Step 1 to generate certs.


## 4. Connect wallet

In the final step, let's ensure that the Hummingbot client can establish a connection with Gateway.

Go back to the running Hummingbot client interface. If the Gateway server has been set up correctly, you should see a message in the log pane `Gateway service is ONLINE.`

Run the following commands in Hummingbot to test the connection and connect to a DEX like Uniswap:

```
>>> gateway test-connection

Successfully pinged Gateway.

>>> gateway connect uniswap

What chain do you want uniswap to connect to? (ethereum, polygon)

>>> ethereum

Which network do you want uniswap to connect to? (mainnet, kovan, ropsten, arbitrum_one, optimism)

>>> mainnet

Do you want to continue to use `https://rpc.ankr.com/eth` for ethereum-mainnet? (Yes/No)

>>> Yes

Enter your ethereum-mainnet wallet private key

>>> *******************************

The uniswap connector now uses wallet [public address] on ethereum-mainnet.

```

This sets the wallet used for trades on that DEX for that specific chain/network. If you create a strategy that uses that connector, the strategy will trade using the assets in that wallet.

Now, when you exit and restart Hummingbot, it should automatically detect whether Gateway is running and connect to it.


## Additional tips

### Configuring Gateway

The `gateway/conf` folder contains the configuration parameters for the various DEXs, chains, and networks. You can modify them either by changing each file, or by running the `gateway config` command from within Hummingbot.

### Testing using `curl`

Certain manual tests are defined in the `gateway/manual-tests/curl.sh` file. To run them, ensure that you have `curl` installed in your system.

Copy and paste individual commands into your terminal to execute the tests accordingly:

```bash
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:5000 | jq

# Installing curl
brew install curl

# Installing jq. Note: jq is like `sed` for JSON data
brew install jq

# Installing envsubst
brew install gettext
brew link --force gettext

```

## Generating Configurations and SSL Certificates

There are bash scripts in `$PROJECT_HOME/gateway/setup` folder that can be used to generate the necessary configurations and certificates that will be used by both the Gateway Server and the Hummingbot Client.

- **Generate Certificates using Hummingbot Client**
  - Run the Hummingbot client.
  - Run the `gateway generate-certs` command
  - The passphrase must be the same as the hummingbot client password
  - Take note of the directory in which the certs are being created. It will be used to configure ssl certifacte.
        ![Generate Certs](/assets/img/generate-certs.png)
- **Generating the configuration**
    Execute the following commands:

    ```bash
    cd $PROJECT_HOME/gateway/setup

    # Generates and configures the ethereum.yml conf to use the right Infura Eth node
    ./generate_conf.sh $GATEWAY_CONF_FOLDER $INFURA_PROJECT_ID

    # $GATEWAY_CONF_FOLDER - Directory the ssl.yml file is located in
    # $CA_CERT_FILE_PATH - Intended value for the caCertificatePath configuration.
    # $CERT_FILE_PATH - Intended value for the certificatePath configuration.
    # KEY_FILE_PATH - Intended value for the keyPath configuration.
    ./generate_ssl_conf.sh -f $GATEWAY_CONF_FOLDER -c $GATEWAY_CA_FILE -e $GATEWAY_SERVER_CERT_FILE -k $GATEWAY_SERVER_KEY_FILE

    ```

    **Note:**

    1. `$GATEWAY_CONF_FOLDER` should be the `$PROJECT_HOME/gateway/conf` folder.

    2. For `INFURA_PROJECT_ID`, you can register for a free infura account and create your own Ethereum node for testing.

    3. The files passed to `GATEWAY_CA_FILE`, `GATEWAY_SERVER_CERT_FILE`, and `GATEWAY_SERVER_KEY_FILE` are generated by `create_certs.sh` and should be under `$PROJECT_HOME/gateway/certs`.

- **List of Environment Variables**

    Below is an example of environment variables that are used by the aforementioned scripts and within the Hummingbot Client

    ```bash
    # Used within Hummingbot client to initialize GatewayHttpClient
    export GATEWAY_CONF_FOLDER="/Users/<username>/hummingbot/gateway/conf"
    export CERT_FOLDER="/Users/<username>/.hummingbot-gateway/hummingbot-gateway-36191c46/certs"
    export GATEWAY_LOGS_FOLDER="/Users/<username>/.hummingbot-gateway/hummingbot-gateway-36191c46/logs"

    # Used to populate the Gateway conf accordingly
    export INFURA_PROJECT_ID="<INFURA PROJECT ID>"
    export GATEWAY_CA_FILE="/Users/<username>/.hummingbot-gateway/hummingbot-gateway-36191c46/certs/ca_cert.pem"
    export GATEWAY_SERVER_CERT_FILE="/Users/<username>/.hummingbot-gateway/hummingbot-gateway-36191c46/certs/server_cert.pem"
    export GATEWAY_SERVER_KEY_FILE="/Users/<username>/.hummingbot-gateway/hummingbot-gateway-36191c46/certs/server_key.pem"


    # Used in curl commands for manual-testing
    export GATEWAY_CERT="/Users/<username>/.hummingbot-gateway/hummingbot-gateway-36191c46/certs/client_cert.pem"
    export GATEWAY_KEY="/Users/<username>/.hummingbot-gateway/hummingbot-gateway-36191c46/certs/client_key.pem"
    export ETH_ADDRESS="<ETH_ADDRESS>"

    ```

## Starting Server

Execute the following commands

```bash
# $PROJECT_HOME should be the root directory of the hummingbot project
cd $PROJECT_HOME/gateway

# Installs all dependencies defined
yarn

# Builds project
yarn build

# Starts the Gateway Server
yarn start --passphrase=$GATEWAY_PASSPHRASE
```

**NOTE:**

`$GATEWAY_PASSPHRASE` is the passphrase you set for the certificates when generating the ssl certificate. It should be the same as the hummingbot client password

## Additional Configurations/Troubleshooting

1. **Changing Gateway Port**

    In certain cases, the default port, `5000`, might already be in use. As such you might need to change the port number accordingly. To do so modify the following yaml files accordingly:

    - `$PROJECT_HOME/hummingbot/gateway/conf/server.yml`

        ```yaml
        port: <NEW_PORT_NUMBER>
        ipWhitelist: []
        unsafeDevModeWithHTTP: false
        GMTOffset: 800
        id: <ID>
        ```

    - `$PROJECT_HOME/hummingbot/conf/conf_client.yml`

        ```yaml
        ...
        
        # Gateway API Configurations
        # default host to only use localhost
        # Port need to match the final installation port for Gateway
        gateway_api_host: localhost
        gateway_api_port: '<NEW_PORT_NUMBER>'
        
        ...
        ```

        **NOTE:** The `NEW_PORT_NUMBER` in `conf_client.yml` should be in single-quotations

2. **Getting a `Error: could not detect network` error**
Ensure that the `nodeAPIKey` of `ethereum.yml` and/or `avalanche.yml` is entered correctly.
    - If using Infura Node, the `nodeAPIKey` refers to your **PROJECT ID**

## Testing using `curl`

Certain manual tests are defined in `$PROJECT_HOME/gateway/manual-tests/curl.sh` file. To run them, ensure that you have `curl` installed in your system.

Copy and paste individual commands into your terminal to execute the tests accordingly
i.e.

```bash
curl -s -X GET -k --key $GATEWAY_KEY --cert $GATEWAY_CERT https://localhost:5000/ | jq
```

Expected Output:

```json
>>>>>>> a5139afa185dab7e19e06b5b4bcb31b1a352ee02
{
  "status": "ok"
}
```
