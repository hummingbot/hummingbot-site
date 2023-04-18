The official Github repository for Gateway is https://github.com/hummingbot/gateway. Gateway is released monthly  with the same cadence as the [Hummingbot client](https://github.com/hummingbot/hummingbot), and it follows the same conventions for releases, contributions, etc.

## Install Hummingbot + Gateway

For most users, we recommend installing Hummingbot and Gateway using Docker Compose.  See [Docker](/installation/docker/) for instructions for various configurations.

We recommend that new users who want to run DEX trading bots deploy a single [Hummingbot + Gateway instance](https://github.com/hummingbot/deploy-examples/tree/development/hummingbot_gateway_compose).

## Install Gateway (standalone)

Install the following dependencies:

- [NodeJS](https://nodejs.org/) (use 16.0.0 or higher)
- [Yarn](https://yarnpkg.com/): run `npm install -g yarn` after installing NodeJS

Then, follow the instructions below:

1. Clone Gateway repo:
```
git clone https://github.com/hummingbot/gateway.git
```

2. Navigate into the Gateway folder:
```
cd gateway
```

3. Install Javascript dependencies:
```
yarn
```

4. Compile Typescript into Javascript:
```
yarn build
```

5. Set permissions:
```
chmod a+x gateway-setup.sh
```

6. Run Gateway setup script:
```
./gateway-setup.sh
```

## Link Gateway to Hummingbot

These instructions assumes that you have already installed Hummingbot on the machine where you are installing Gateway, either from source or via Docker. Note that you will be prompted to enter **passphrase** and **certs_path** during the installation process.

## 1. Generate certs

The first step is to generate self-signed certificates from the Hummingbot client. These certificates let your bots securely communicate with Gateway.

Start Hummingbot. After entering your password, run `gateway generate-certs`:

[![](./generate-certs.png)](./generate-certs.png)

Enter a secure **passphrase**, and then Hummingbot will generate self-signed certificates that a server can use to authenticate its connection with this client.

Take note of the **path** where they are stored. This is also stored as `certs_path` in the Hummingbot's `conf_client.yml`, the global configuration file in the `/conf/` directory.

[![](./certs-path.png)](./certs-path.png)

!!! tip
    Make sure to save both **passphrase** and **certs_path** since you’ll need them later.

## 2. Run setup script

Select only one of the methods below, since multiple Gateways on the same machine may result in conflicts.

The `gateway-setup` script configures Gateway by:

* Copying the default configuration files from `/src/templates` to `/conf/` folder
* Copying the Hummingbot self-signed certificates into the `/certs/` folder. Enter **certs_path** when prompted.

!!! note "Alternative to copying certs files"
    The `gateway-setup.sh` script creates a copy of the Hummingbot certificates in the Gateway folder. Alternatively, you can override the **certs_path** parameter in `conf/server.yml` and enter the path to the Hummingbot certificates.


### 3. Start Gateway

Afterwards, start Gateway using **passphrase**:

```
$ yarn start --passphrase=<passphrase>
```

You should see Gateway running on the default port 15888:
```
2023-02-09 12:56:50 | info | 	⚡️ Starting Gateway API on port 15888...
2023-02-09 12:56:50 | info | 	The gateway server is secured behind HTTPS.
2023-02-09 12:56:50 | info | 	⚡️ Swagger listening on port 8080. Read the Gateway API documentation at 127.0.0.1:8080
```

Go back to your Hummingbot client or restart it if you have exited. In the upper right corner, you should see **GATEWAY: ONLINE** if your Hummingbot client is connected to Gateway.

[![](./gateway-status.png)](./gateway-status.png)

After Gateway is running, see [Testing](testing.md) to understand how to test the endpoints on a standalone basis before using it with Hummingbot.