# Updating to New Versions

Hummingbot Foundation actively maintains all repositories in the Hummingbot ecosystem and ships versioned releases of Hummingbot Client and Gateway monthly. These releases work with user interfaces like Condor and MCP, add new exchange connectors and strategies, and include bug fixes and API updates.

This page shows you how to update your installation to the latest version.

## Standard Updates

For most releases where the configuration schema hasn't changed, follow these steps:

### Hummingbot API

```bash
docker compose down hummingbot-api
docker pull hummingbot/hummingbot-api:latest
docker compose up hummingbot-api -d
```

### Hummingbot Client

**Docker:**

```bash
docker compose down
docker pull hummingbot/hummingbot:latest
docker compose up -d
```

**Source:**

```bash
cd hummingbot
git pull origin master
./install
./compile
./start
```

### Gateway

**Docker:**

```bash
docker compose down
docker pull hummingbot/gateway:latest
docker compose up -d
```

**Source:**

```bash
cd gateway
git pull origin main
pnpm install
pnpm start --dev --passphrase=PASSPHRASE
```

---

## Updates with Configuration Changes

Some releases include changes to configuration file schemas. When this happens, existing configuration files are incompatible and must be removed before updating. Check the [release notes](../release-notes/index.md) for your target version to see if configuration changes are required.

The main configuration schemas reside in:

- **Hummingbot Client**: `conf/conf_client.yml` - Contains client settings like logging, color scheme, and global parameters
- **Gateway**: `conf/` folder - Contains chain, network, and connector configurations

!!! warning "Back Up First"
    If you have custom settings you want to preserve, back up your configuration files before removing them. After updating, you can reference your backups to re-apply custom settings to the new configuration files.

### Hummingbot API

Hummingbot API uses the same `gateway-files` directory as Gateway for configuration.

```bash
cd hummingbot-api

# Back up configs (optional)
cp -r gateway-files gateway-files.backup

# Remove legacy configs
rm -rf gateway-files
```

**Docker**

```bash
docker compose down hummingbot-api
docker pull hummingbot/hummingbot-api:latest
docker compose up hummingbot-api -d
```

**Source:** 
```bash
git pull origin main
docker compose up emqx postgres -d
conda activate hummingbot-api && uvicorn main:app --reload
```


### Hummingbot Client

**Docker:**

```bash
# Back up config (optional)
cp conf/conf_client.yml conf/conf_client.yml.backup

# Remove legacy config
rm conf/conf_client.yml

# Update and restart
docker compose down
docker pull hummingbot/hummingbot:latest
docker compose up -d
```

**Source:**

```bash
cd hummingbot

# Remove legacy environment
conda env remove -n hummingbot -y

# Back up config (optional)
cp conf/conf_client.yml conf/conf_client.yml.backup

# Update, reinstall, and compile
git pull origin master
./install
./compile
./start
```

### Gateway

**Docker:**

```bash
# Back up configs (optional)
cp -r gateway_files gateway_files.backup

# Remove legacy configs
rm -rf gateway_files

# Update and restart
docker compose down
docker pull hummingbot/gateway:latest
docker compose up -d
```

**Source:**

```bash
cd gateway

# Back up config (optional)
cp -r conf gateway_conf.backup

# Update and re-run setup
git pull origin main

# Re-run setup to generate new config
pnpm setup              # interactive setup
# or
pnpm setup:with-defaults  # use default settings

# Start Gateway
pnpm start --dev --passphrase=PASSPHRASE
```

After updating, fresh configuration files with the correct schema will be generated automatically.
