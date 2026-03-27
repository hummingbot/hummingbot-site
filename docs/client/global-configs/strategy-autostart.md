# Strategy Autostart

## Docker autostart

!!! warning
    Running any trading bots without manual supervision may incur additional risks. It is imperative that you thoroughly understand and test the strategy and parameters before deploying bots that can trade in an unattended manner.

Hummingbot can automatically start the execution of a previously configured trading strategy upon launch without needing user interaction when provided with pre-existing configuration files. This can be very useful if you wish to deploy already well-tested strategies and configurations to cloud services and have Hummingbot running automatically in the background.

### Prerequisites

- You have Hummingbot running via Docker Compose
- You have already run the instance at least once and have set the password and API keys
- You have at least one strategy configuration file that has been set up previously


### How to autostart

**Stop any running containers**

```
docker compose down
```

**Modify YAML file**

Use an IDE like [VSCode](https://code.visualstudio.com/) to edit the `docker-compose.yml` file.

Edit or add the section that defines the environment variables:

 * The `environment:` line

 * The `CONFIG_PASSWORD` line: add the Hummingbot password to login

 * For **V2 scripts** (including the `v2_with_controllers` loader), set `SCRIPT_CONFIG` to the YAML file name in `conf/scripts/` (this maps to `hummingbot_quickstart.py --v2`).
 * For **legacy V1 strategies**, set `CONFIG_FILE_NAME` to the YAML file name in `conf/strategies/` (this maps to `-f`).
 
 The final `environment` section of the YAML file should look something like one of these:

```yaml
    environment:
      - CONFIG_PASSWORD=password
      - SCRIPT_CONFIG=conf_simple_pmm_1.yml
```

```yaml
    environment:
      - CONFIG_PASSWORD=password
      - CONFIG_FILE_NAME=conf_pure_mm_1.yml
```

Afterwards, save the file.

You can auto-start either a V2 script config or a V1 strategy config:

* **V2:** `SCRIPT_CONFIG` points to a file in `conf/scripts/` (must include `script_file_name` for the entry script).

* **V1:** `CONFIG_FILE_NAME` points to a file in `conf/strategies/`. See [Strategies](https://docs.hummingbot.org/strategies/) for V1 templates. 

**Relaunch Hummingbot**

```
docker compose up -d
```

When you attach to it, the strategy or script should already be running:

```
docker attach hummingbot
```


## Source autostart

### Prerequisites

- You have Hummingbot installed via Source.
- You have already connected exchanges by adding API keys
- You have at least one strategy configuration file that has been set up previously


### How to autostart

Running unattended Hummingbot is very similar to running Hummingbot manually. The only differences are:

- You will read the pre-existing configuration files to the `conf` directory.
- You will pass some parameters telling Hummingbot which strategy configuration to use and the password to decrypt your API keys and wallets.

```
bin/hummingbot_quickstart.py -p CONFIG_PASSWORD --v2 V2_CONFIG_YML
```

or, for a legacy V1 strategy:

```
bin/hummingbot_quickstart.py -p CONFIG_PASSWORD -f V1_STRATEGY_YML
```

Where  
`CONFIG_PASSWORD` is the config password;  
`V2_CONFIG_YML` is the file name of a YAML config in `conf/scripts/`;  
`V1_STRATEGY_YML` is the file name of a YAML config in `conf/strategies/`.

Example:

Let's say you configured your Hummingbot password as a single letter **a** and you created a config for **`simple_pmm`** which you then want to autostart as soon as you start the bot:

```
bin/hummingbot_quickstart.py -p a --v2 conf_simple_pmm_1.yml
```

Where: 

- `a` is the config password

- `conf_simple_pmm_1.yml` is the V2 script config under `conf/scripts/`



More information on strategy can be found in [Strategy](../../strategies/index.md).

More information on configuration file name can be found in [Configuring Hummingbot](../../client/config-files.md).

More information on password can be found in [Create a secure password](../password.md).
