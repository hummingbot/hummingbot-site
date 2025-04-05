Hummingbot Gateway is an API/CLI client that exposes standardized REST endpoints to interact with blockchain networks and decentralized exchanges (DEXs). It provides a language-agnostic approach to interacting with these protocols through a unified interface.

There are two main ways to install Gateway:

1. **Docker Installation** (Recommended for most users)
2. **Source Installation** (For developers and advanced users)

## Install from Source

You can install Gateway on a standalone basis and then link it to Hummingbot manually. These instructions assume that you have already installed Hummingbot on the machine where you are installing Gateway, either from source or via Docker. See [Installation](/installation) for how to install Hummingbot.

### Install Prerequisites

Install the following dependencies:

- [NodeJS](https://nodejs.org/) (v20.0.0 or higher)
- [pnpm](https://pnpm.io/) package manager

!!! tip
    The new version of Gateway uses pnpm instead of npm because it efficiently handles dependencies with a disk space-saving approach. Since Gateway imports multiple libraries with redundant dependencies, pnpm creates a single content-addressable storage for all packages, significantly reducing installation size and improving performance.

From CLI: 

First, install NodeJS 20+ using the `sudo` administrator prefix:
```bash
# For Ubuntu 20+
sudo apt update && sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Afterwards, install pnpm:
```bash
sudo npm install -g pnpm
```
### Install and Setup Gateway

1. Clone the Gateway repo and navigate into the folder:
```bash
# Clone repository
git clone https://github.com/hummingbot/gateway.git
cd gateway
```

1. Install and build Javascript dependencies defined in `package.json`:
```bash
pnpm install
pnpm build
```

### Generate Certificates

Hummingbot and Gateway use SSL certificates for secure communication. These self-signed certificates create an encrypted connection between the Hummingbot client and Gateway, ensuring that:

1. All data transmitted between Hummingbot and Gateway is encrypted
2. The client can verify it's connecting to the legitimate Gateway instance
3. Gateway can authenticate requests coming from authorized Hummingbot clients

The certificate system uses a public/private key pair where:

- The client and server each have their own certificate and private key
- They exchange public certificates to establish trust
- All subsequent communications are encrypted and authenticated

This security layer is essential since Gateway handles sensitive operations like wallet management and trade execution on decentralized exchanges.

To generate certificates, start your Hummingbot [client](/client). After entering your password, run `gateway generate-certs`:

[![](./legacy/generate-certs.png)](./legacy/generate-certs.png)

Enter a secure **passphrase**, and write it down. Hummingbot will generate self-signed certificates that a server can use to authenticate its connection with this client.

Take note of the **certs_path** where they are stored. This is also stored as `certs_path` in the Hummingbot's `conf_client.yml`, the global configuration file in the `/conf/` directory.

[![](./legacy/certs-path.png)](./legacy/certs-path.png)

### Run Setup Script

The `gateway-setup.sh` script, located in the root Gateway directory, performs the following actions:

* Copies the default Gateway [configuration](./configuration.md) files from `/src/templates` to `/conf/` folder
* Copies the Hummingbot certificates into the `/certs/` folder.

Run the script:
```bash
pnpm run setup
```

When prompted, enter **certs_path** from the prior step:

```
ℹ️ Confirm if this is correct:

            Copy configs FROM: [/folder]/gateway/src/templates
              Copy configs TO: [/folder]/gateway/conf

              Copy certs FROM: [/folder]/hummingbot/certs
                Copy certs TO: [/folder]/gateway/certs

Do you want to proceed? [Y/N] >>> 
```

Afterwards, you can start Gateway in **development** or **production** mode.

##  Install with Docker

*Coming soon.*

## Running Gateway

### Development vs Production Modes

When installed from source, Gateway can be run in one of two modes:

!!! note
    The Docker version of Gateway only runs in **Production (HTTPS)** mode since it is designed to be used alongside the Hummingbot client.

**Development Mode (HTTP)**

   - Started with `--dev` flag: `pnpm start --passphrase=<PASSPHRASE> --dev`
   - Exposes HTTP (unencrypted) REST endpoints at <http://localhost:15888>
   - Interactive Swagger docs at <http://localhost:15888/docs>
   - Shows 🔴 indicator in logs
   - Suitable for local development and testing
   - **Warning**: Not secure for production use

**Production Mode (HTTPS)**

   - Started without `--dev` flag: `pnpm start --passphrase=<PASSPHRASE>`
   - Exposes HTTPS (encrypted) REST endpoints at <https://localhost:15888>
   - Shows 🟢 indicator in logs
   - Required for connecting with Hummingbot
   - Secure for production use

Both modes require a passphrase for endpoints that handle wallet operations, but development mode allows unauthenticated access to read-only endpoints. 

### Development

For development (HTTP mode), run:
```bash
pnpm start --passphrase=<PASSPHRASE> --dev
```

While the passphrase is not needed for read-only routes, it is still needed for endpoints that require encrypting or decrypting wallets.


If the server has started successfully, you should see:
```bash
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)

╔██████╗  █████╗ ████████╗███████╗██╗    ██╗ █████╗ ██╗   ██╗
██╔════╝ ██╔══██╗╚══██╔══╝██╔════╝██║    ██║██╔══██╗╚██╗ ██╔╝
██║  ███╗███████║   ██║   █████╗  ██║ █╗ ██║███████║ ╚████╔╝ 
██║   ██║██╔══██║   ██║   ██╔══╝  ██║███╗██║██╔══██║  ╚██╔╝  
╚██████╔╝██║  ██║   ██║   ███████╗╚███╔███╔╝██║  ██║   ██║   
 ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝   ╚═╝
2025-04-04 10:09:59 | info | 	⚡️ Gateway version 2.5.0 starting at http://localhost:15888
2025-04-04 10:09:59 | info | 	Checking for processes using port 15888...
2025-04-04 10:09:59 | info | 	No process found using port 15888
2025-04-04 10:09:59 | info | 	🔴 Running in development mode with (unsafe!) HTTP endpoints
2025-04-04 10:09:59 | info | 	Read token file from conf/lists/solana.json, content length: 619791
2025-04-04 10:09:59 | info | 	Parsed token count: 3859
2025-04-04 10:09:59 | info | 	Loaded 3859 tokens for mainnet-beta
2025-04-04 10:09:59 | info | 	📓 Documentation available at http://localhost:15888/docs
```

### Production

For production mode (HTTPS), which is required to connect to Hummingbot:

1. You must set a secure passphrase that will be used for authentication
2. SSL certificates must be properly configured for secure communication
3. The certificates need to be generated using the Hummingbot client (see "Generating Certificates" section below)
4. Both Hummingbot and Gateway must use the same certificates for successful connection

See below for how to setting the passphrase and generate certificates. Afterwards, run:
```bash
pnpm start --passphrase=<PASSPHRASE>
```

If the server has started successfully, you should see:
```bash
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)

╔██████╗  █████╗ ████████╗███████╗██╗    ██╗ █████╗ ██╗   ██╗
██╔════╝ ██╔══██╗╚══██╔══╝██╔════╝██║    ██║██╔══██╗╚██╗ ██╔╝
██║  ███╗███████║   ██║   █████╗  ██║ █╗ ██║███████║ ╚████╔╝ 
██║   ██║██╔══██║   ██║   ██╔══╝  ██║███╗██║██╔══██║  ╚██╔╝  
╚██████╔╝██║  ██║   ██║   ███████╗╚███╔███╔╝██║  ██║   ██║   
 ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝   ╚═╝
2025-04-04 10:12:32 | info | 	⚡️ Gateway version 2.5.0 starting at https://localhost:15888
2025-04-04 10:12:32 | info | 	Checking for processes using port 15888...
2025-04-04 10:12:32 | info | 	No process found using port 15888
2025-04-04 10:12:32 | info | 	🟢 Running in secured mode with behind HTTPS endpoints
2025-04-04 10:12:33 | info | 	Read token file from conf/lists/solana.json, content length: 619791
2025-04-04 10:12:33 | info | 	Parsed token count: 3859
2025-04-04 10:12:33 | info | 	Loaded 3859 tokens for mainnet-beta
2025-04-04 10:12:33 | info | 	📓 Documentation available at https://localhost:15888/docs
```

Go back to your Hummingbot client or restart it if you have exited. In the upper right corner, you should see **GATEWAY: ONLINE** if your Hummingbot client is connected to Gateway.

[![](./legacy/gateway-status.png)](./legacy/gateway-status.png)


## Interactive Swagger Docs

![swagger](./swagger.png)

Gateway provides interactive API documentation through Swagger UI when running in development mode. This interface allows you to:

1. Browse all available API endpoints
2. Test API calls directly from your browser
3. View request/response schemas
4. Execute live API calls

To access the Swagger documentation:

1. Start Gateway in development mode using `pnpm start --passphrase=<PASSPHRASE> --dev`
2. Open your browser and navigate to <http://localhost:15888/docs>
3. You'll see the Swagger UI interface with all available endpoints grouped by category

Each endpoint in the documentation displays detailed information (method, path, description, parameters, request/response examples) and allows you to test API calls directly by filling in parameters and viewing the server's response.

The documentation is automatically generated from the Gateway route files, ensuring it's always up to date with the latest API changes.
