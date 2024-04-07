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

 * One of `CONFIG_FILE_NAME` lines: add your script OR strategy config file

 * Add your `SCRIPT_CONFIG` file if using a configurable script
 
 The final `environment` section of the YAML file should look something like this:

```yaml
    environment:
      - CONFIG_PASSWORD=password
      - CONFIG_FILE_NAME=simple_pmm_example.py
      - SCRIPT_CONFIG=conf_simple_pmm_example_config_1.yml
```

Afterwards, save the file.

You can auto-start either a Script or a Strategy:

* [Scripts](https://docs.hummingbot.org/scripts/) are Python files that contain all strategy logic. If you define a `.py` file as `CONFIG_FILE_NAME`, Hummingbot assumes it's a script file and looks for the `.py` file in the `hummingbot_files/scripts` directory. 

* [Strategies](https://docs.hummingbot.org/strategies/) are configurable strategy templates. If you define a `.yml` file as `CONFIG_FILE_NAME`, Hummingbot assumes it's a strategy config file and looks for the `.yml` file in the `hummingbot_files/conf/strategies` directory. 

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
bin/hummingbot_quickstart.py -p CONFIG_PASSWORD -f SCRIPT_FILE_NAME -c CONFIG_FILE_NAME
```

Where  
`CONFIG_PASSWORD` is the config password
`SCRIPT_FILE_NAME` is the script / strategy file name  
`CONFIG_FILE_NAME` is the script / strategy config file name

Example:

Let's say you configured your Hummingbot password as a single letter **a** and you created a config for the **Simple PMM Example** script which you then want to autostart as soon as you start the bot. Here's how you would configure the autostart command - 

```
bin/hummingbot_quickstart.py -p a -f simple_pmm_example_config.py -c conf_simple_pmm_example_config_1.yml
```

Where: 

- `a` is the config password

- `simple_pmm_example_config.py` is the script / strategy file name  

- `conf_simple_pmm_example_config_1.yml` is the script / strategy config file name



More information on strategy can be found in [Strategy](/strategies/).

More information on configuration file name can be found in [Configuring Hummingbot](/client/config-files).

More information on password can be found in [Create a secure password](/client/password).
