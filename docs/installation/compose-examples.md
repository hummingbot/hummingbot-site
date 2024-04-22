## Hummingbot Compose File

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
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
    tty: true
    stdin_open: true
    network_mode: host
```


## Gateway Compose file


```bash
services:  
  gateway:
    container_name: gateway
    image: hummingbot/gateway:latest
    ports:
      - "15888:15888"
      - "8080:8080"
    volumes:
      - "./gateway_files/conf:/usr/src/app/conf"
      - "./gateway_files/logs:/usr/src/app/logs"
      - "./hummingbot_files/certs:/usr/src/app/certs"
    # environment:
    #   - GATEWAY_PASSPHRASE=[passphrase]
  
```

## Dashboard Compose File

```bash
services:
  dashboard:
    container_name: dashboard
    image: hummingbot/dashboard:latest
    volumes:
      - ./hummingbot_files/data:/home/streamlit-apps/data
    ports:
      - "8501:8501"
```

## Broker Compose File

```bash
services:  
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


## Autostart Example

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
    # environment:
    #   - CONFIG_PASSWORD=[password]
    #   - CONFIG_FILE_NAME=simple_pmm_example.py
    #   - SCRIPT_CONFIG_FILE_NAME=conf_pure_mm_1.yml
    logging:
      driver: "json-file"
      options:
          max-size: "10m"
          max-file: "5"
    tty: true
    stdin_open: true
    network_mode: host
```

## Hummimgbot + Gateway

```bash
version: "3.9"
services:
  hummingbot:
    container_name: "hummingbot"
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
    # environment:
    #   - CONFIG_PASSWORD=[password]      
    logging:
      driver: "json-file"
      options:
          max-size: "10m"
          max-file: 5
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
    environment:
      - GATEWAY_PASSPHRASE=a
```

## Hummingbot (multiple bots)

```bash
version: "3.9"
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


## Hummingbot (multiple) + Gateway

```bash
version: "3.9"
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

  gateway:
    container_name: gateway
    image: hummingbot/gateway:latest
    ports:
      - "15888:15888"
      - "8080:8080"
    volumes:
      - "./gateway_files/conf:/usr/src/app/conf"
      - "./gateway_files/logs:/usr/src/app/logs"
      - "./hummingbot_files/certs:/usr/src/app/certs"
    # environment:
    #   - GATEWAY_PASSPHRASE=[passphrase]
```

## Hummingbot + Gateway + Broker Compose Example

```bash
version: "3.9"
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
      - "./hummingbot_files/certs:/usr/src/app/certs"
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