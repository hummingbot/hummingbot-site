!!! note "Use development branch"
    Use the [development](https://github.com/hummingbot/hummingbot/tree/development) branch, since Gateway is still new and undergoing active work. Once you have cloned the Hummingbot repo, you can run `git checkout development` to switch to that branch.

For developers, we recommend installing Hummingbot from source, rather than Docker. This allows you to run Gateway as a standalone server and connect to it from the Hummingbot client. This setup has a few advantages:

* Makes upgrading to new versions of Hummingbot/Gateway easier
* Easier access to configuration files
* Enables multiple client instances to connect to one Gateway instance

First, follow [these instructions](/installation/source/) to **install Hummingbot from source** on MacOS, Windows, or Linux-based systems.

Then, follow the steps below to start a Gateway server and enable the Hummingbot client to communicate with it.

## 1. Generate Gatway configuration files

To run gateway, we need to generate the configurations. 

Open a new Terminal/Bash window and go to the Hummingbot root directory.

Then, run the following setup script to generate the Gateway `conf` folder and populate it with templates, which contains the default configuration parameters for each chain and network.

```bash

(hummingbot) ➜ gateway/setup/generate_conf.sh gateway/conf

===============  GENERATE GATEWAY CONFIGURATION FILES ===============

HOST_CONF_PATH=gateway/conf
created gateway/conf/ethereum.yml
created gateway/conf/ssl.yml
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

## 2. Generate certs

After installing Hummingbot from source, run `bin/hummingbot.py` in order to start the Hummingbot client. You'll be promoted to enter a password.

In this step, we generate encrypted certificates that the Gateway server will incorporate, which allows the client to authenticate the Gateway server with which it communicates.

From the Hummingbot client, run the following command:

```
>>> gateway generate-certs

Enter pass phase to generate Gateway SSL certifications: 
>>> *****

Gateway SSL certification files are created in 
/Users/myname/.hummingbot-gateway/hummingbot-gateway-1dd88a7e8/certs.
```

This will update the Gateway configuration files with the newly generated certification files. The updates can be found in the `gateway/conf/ssl.yml` file.

You will be prompted to enter the passphrase used to encrypt these certs. We recommend using the same password you set when you launched Hummingbot.


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

## Configuring Gateway

The `gateway/conf` folder contains the configuration parameters for the various DEXs, chains, and networks. You can modify them either by changing each file, or by running the `gateway config` command from within Hummingbot.

## API Interfaces

Gateway automatically starts a Swagger API server running on [port 8080](http://127.0.0.1:8080). This shows you the routes available and their request parameter / response models.

In addition, see [API Interfaces](/developers/gateway/api-interface) for a summary of the key routes that each DEX connector supports.

## Testing Gateway

See [Testing](/developers/gateway/testing) for more information about how to run tests for Gateway connectors.
