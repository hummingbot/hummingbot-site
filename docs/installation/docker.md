We recommend installing Hummingbot using Docker if you want the simplest, easiest installation method and don't need to modify the Hummingbot codebase.

## Prerequisites

Hummingbot runs on commodity hardware and does not require much memory or storage.

* **Operating System**: MacOS 10.12.6+ / Linux (Ubuntu 20.04+, Debian 10+) / Windows 10+
* **Memory**: 4 GB RAM per instance
* **Storage**: 5 GB HDD space per instance

## Installation Process

### 1. Install Docker Compose

Hummingbot uses [Docker Compose](https://docs.docker.com/compose/), a tool for defining and running multi-container Docker applications. 

!!! note "For Windows users"
    To install Docker on Windows, [Windows Subsystem for Linux 2](https://learn.microsoft.com/en-us/windows/wsl/about) is needed. Follow [this link](https://learn.microsoft.com/en-us/windows/wsl/install) to install WSL2 on your Windows system. Afterwards, proceed to the instructions above to install Docker Compose.

The recommended way to get Docker Compose is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/), which includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.


After installing Docker Desktop, verify that Docker Compose is installed correctly by checking the version:

```bash
docker compose version
```

The output should be: `Docker Compose version v2.17.2` or similar. 

!!! warning
    Ensure that you are using Docker Compose V2, since Compose V1 is deprecated and the examples assume that you are using Compose V2.

### 2. Clone Repo

Enter the following commands in Bash/Terminal to clone the Hummingbot Github repo and enter the root folder:
```bash
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
```

### 3. Pull Image

The `docker-compose.yml` file in the root folder provides a basic configuration for launching an instance.

```yaml
services:
  hummingbot:
    container_name: hummingbot
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./conf:/home/hummingbot/conf
      - ./conf/connectors:/home/hummingbot/conf/connectors
      - ./conf/strategies:/home/hummingbot/conf/strategies
      - ./conf/controllers:/home/hummingbot/conf/controllers
      - ./conf/scripts:/home/hummingbot/conf/scripts
      - ./logs:/home/hummingbot/logs
      - ./data:/home/hummingbot/data
      - ./certs:/home/hummingbot/certs
      - ./scripts:/home/hummingbot/scripts
      - ./controllers:/home/hummingbot/controllers
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
    tty: true
    stdin_open: true
    network_mode: host
    #  environment:
    #    - CONFIG_PASSWORD=a
    #    - CONFIG_FILE_NAME=simple_pmm_example.py
    #    - SCRIPT_CONFIG=conf_simple_pmm_example.yaml
```

You will be able to modify this file and uncomment lines in order to automatically enter your pasword and start strategies. For now, we can use it as-is. 

Run the following command to pull the image and start the instance:

```bash
docker compose up -d
```

After the images have been downloaded, you should see the following output:

```bash
[+] Running 1/1
 ⠿ Container hummingbot  Started 
```

### 4. Attach to Instance

The `-d` flag runs Hummingbot in detached mode. Attach to it by running the command:

```bash
docker attach hummingbot
```

You should now see the Hummingbot welcome screen:

![welcome screen](/assets/img/welcome.png)

To get started with Hummingbot, check out the following pages and guides:

* [Basic Features](/client/)
* [V2 Strategy Walkthough](/v2-strategies/walkthrough/)
* [Hummingbot FAQ](/faq/)

## Advanced Configurations

Below are some compose examples of different configurations which might be useful depending on your specific use case 

### Autostart Compose Example 

```bash
services:
hummingbot:
  container_name: hummingbot
  image: hummingbot/hummingbot:latest
  volumes:
    - "./hummingbot_files/conf:/home/hummingbot/conf"
    - "./hummingbot_files/conf/connectors:/home/hummingbot/conf/connectors"
    - "./hummingbot_files/conf/strategies:/home/hummingbot/conf/strategies"
    - "./hummingbot_files/conf/controllers:/home/hummingbot/conf/controllers"
    - "./hummingbot_files/conf/scripts:/home/hummingbot/conf/scripts"
    - "./hummingbot_files/logs:/home/hummingbot/logs"
    - "./hummingbot_files/data:/home/hummingbot/data"
    - "./hummingbot_files/scripts:/home/hummingbot/scripts"
    - "./hummingbot_files/certs:/home/hummingbot/certs"
   environment:
     - CONFIG_PASSWORD=[password]
     - CONFIG_FILE_NAME=simple_pmm_example.py
     - SCRIPT_CONFIG_FILE_NAME=conf_pure_mm_1.yml
  logging:
    driver: "json-file"
    options:
        max-size: "10m"
        max-file: "5"
  tty: true
  stdin_open: true
  network_mode: host
```

Locate the **docker-compose.yml** file within the Hummingbot folder and using any text editor or IDE like VSCode, replace all with the code above. 

Replace environment variables:

  - `CONFIG_PASSWORD=[password]` - replace "[password]" with your Hummingbot password

  - `CONFIG_FILE_NAME=simple_pmm_example.py` - replace "simple_pmm_example.py" with your script file

  - `SCRIPT_CONFIG_FILE_NAME=conf_pure_mm_1.yml` - if using a configurable script, replace "conf_pure_mm_1.yml" with your script file else leave the line commented


### Multiple Hummingbot Instances

```bash
services:
  hummingbot-1:
    container_name: hummingbot-1
    image: hummingbot/hummingbot:latest
    volumes:
      - "./hummingbot_files/conf:/home/hummingbot/conf"
      - "./hummingbot_files/conf/connectors:/home/hummingbot/conf/connectors"
      - "./hummingbot_files/conf/strategies:/home/hummingbot/conf/strategies"
      - "./hummingbot_files/logs:/home/hummingbot/logs"
      - "./hummingbot_files/data:/home/hummingbot/data"
      - "./hummingbot_files/scripts:/home/hummingbot/scripts"
      - "./hummingbot_files/certs:/home/hummingbot/certs"
    # environment:
    #   - CONFIG_PASSWORD=[password]
    logging:
      driver: "json-file"
      options:
          max-size: "10m"
          max-file: "5"
    tty: true
    stdin_open: true
    network_mode: host

  hummingbot-2:
    container_name: hummingbot-2
    image: hummingbot/hummingbot:latest
    volumes:
      - "./hummingbot_files/conf:/home/hummingbot/conf"
      - "./hummingbot_files/conf/connectors:/home/hummingbot/conf/connectors"
      - "./hummingbot_files/conf/strategies:/home/hummingbot/conf/strategies"
      - "./hummingbot_files/logs:/home/hummingbot/logs"
      - "./hummingbot_files/data:/home/hummingbot/data"
      - "./hummingbot_files/scripts:/home/hummingbot/scripts"
      - "./hummingbot_files/certs:/home/hummingbot/certs"
    # environment:
    #   - CONFIG_PASSWORD=[password]
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
    tty: true
    stdin_open: true
    network_mode: host
```

This will create two Hummingbot client instances, and this can be increased if necessary. Just make sure to set each **container_name** to something unique. 

 The above configuration has both bots sharing the **hummingbot_files** folder. If you want to set a different folder for **hummingbot-2** then you can set the volumes to **hummingbot_files_2** for example. 

You can also set both bots to autostart by uncommenting the **#environment** and **#CONFIG_PASSWORD** fields and replace them with your Hummingbot password

When initially starting the compose file using `docker compose up -d` it will run the instances in detached mode. See below command to attach: 

```bash
docker attach hummingbot-1
``` 
To attach to bot #2 use 

```bash
docker attach hummingbot-2
```

### Hummingbot + Gateway + Broker Compose Example

```bash
services:
  hummingbot:
    container_name: "hummingbot"
    image: hummingbot/hummingbot:latest
    volumes:
      - "./hummingbot_files/conf:/conf"
      - "./hummingbot_files/conf/connectors:/conf/connectors"
      - "./hummingbot_files/conf/strategies:/conf/strategies"
      - "./hummingbot_files/logs:/logs"
      - "./hummingbot_files/data:/data"
      - "./hummingbot_files/scripts:/scripts"
      - "./hummingbot_files/certs:/certs"
    # environment:
    #   - CONFIG_PASSWORD=[password]
    logging:
      driver: "json-file"
      options:
          max-size: "10m"
          max-file: "5"
    tty: true
    stdin_open: true
    network_mode: host

  gateway:
    container_name: "gateway"
    image: hummingbot/gateway:latest
    ports:
      - "15888:15888"
      - "8080:8080"
    volumes:
      - "./gateway_files/conf:/usr/src/app/conf"
      - "./gateway_files/logs:/usr/src/app/logs"
      - "./hummingbot_files/certs:/home/gateway/certs"
    # environment:
    #   - GATEWAY_PASSPHRASE=[passphrase]

  emqx:
    container_name: "emqx"
    image: emqx:5
    restart: unless-stopped
    environment:
      - EMQX_NAME=emqx
      - EMQX_LOADED_PLUGINS="emqx_recon,emqx_retainer,emqx_management,emqx_dashboard"
    volumes:
      - emqx-data:/opt/emqx/data
      - emqx-log:/opt/emqx/log
      - emqx-etc:/opt/emqx/etc
    ports:
      - "1883:1883"  # mqtt:tcp
      - "8883:8883"  # mqtt:tcp:ssl
      - "8083:8083"  # mqtt:ws
      - "8084:8084"  # mqtt:ws:ssl
      - "8081:8081"  # http:management
      - "18083:18083"  # http:dashboard
      - "61613:61613"  # web-stomp gateway
    healthcheck:
      test: ["CMD", "/opt/emqx/bin/emqx_ctl", "status"]
      interval: 5s
      timeout: 25s
      retries: 5

volumes:
  emqx-data: {}
  emqx-log: {}
  emqx-etc: {}
```

This installs a Hummingbot instance linked to a Hummingbot Gateway instance, along with an EMQX Broker.

Gateway setup is similar to the steps listed here - [Install Gateway](../gateway/installation.md)

To configure the broker, attach to the EMQX Broker emqx instance:

```
docker attach emqx
```
Navigate to the EMQX dashboard to configure authentication and available ports at <http://localhost:18083/> 

The default credentials for connecting to the dashboards are **admin:public**

For connecting your bots via MQTT, just leave the mqtt_username and mqtt_password parameters of the bot empty.

### Hummingbot with Dashboard

```bash
services:
  hummingbot:
    container_name: hummingbot
    image: hummingbot/hummingbot:latest
    volumes:
      - "./hummingbot_files/conf:/home/hummingbot/conf"
      - "./hummingbot_files/conf/connectors:/home/hummingbot/conf/connectors"
      - "./hummingbot_files/conf/strategies:/home/hummingbot/conf/strategies"
      - "./hummingbot_files/conf/scripts:/home/hummingbot/conf/scripts"
      - "./hummingbot_files/logs:/home/hummingbot/logs"
      - "./hummingbot_files/data:/home/hummingbot/data"
      - "./hummingbot_files/scripts:/home/hummingbot/scripts"
      - "./hummingbot_files/certs:/home/hummingbot/certs"
    logging:
      driver: "json-file"
      options:
          max-size: "10m"
          max-file: "5"
    tty: true
    stdin_open: true
    network_mode: host
  dashboard:
    container_name: dashboard
    image: hummingbot/dashboard:latest
    volumes:
      - ./hummingbot_files/data:/home/dashboard/data
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - "8501:8501"
```

This installs a single Hummingbot bot instance alongside a Hummingbot Dashboard that can be used to control and analyze it.

Go to <http://localhost:8501> in your browser to see the Dashboard.