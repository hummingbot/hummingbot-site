# Installation and setup

Before we begin coding, let’s ensure that you are set up properly.

## Installation

Follow [this guide](https://docs.hummingbot.org/installation/) to install Hummingbot. You install it using Docker (easiest for new users) or from source (best for developers).

If you have questions or need help, join the [official Hummingbot Discord](https://discord.gg/hummingbot) and ask for help on the #support channel from our community.

## Folder structure

Note that Hummingbot is **local client software** that you run on your own machine, so you have full control over how it’s configured and where you save your files. No one else can access your data and secrets!

These are the most important folders for this guide.

<div style="display:flex;">
  <div style="flex:1;padding-right:10px;">

  Source Install <br>

    ```
    📦 hummingbot
     ┣ 📂 assets
     ┣ 📂 bin
     ┣ 📂 build
     ┣ 📂 conf
     ┃ ┣ 📂 connectors
     ┃ ┗ 📂 strategies
     ┣ 📂 docker
     ┣ 📂 hooks
     ┣ 📂 hummingbot
     ┣ 📂 installation
     ┣ 📂 integration_test
     ┣ 📂 logs
     ┣ 📂 pmm_scripts
     ┣ 📂 redist
     ┣ 📂 scripts
     ┣ 📂 setup
     ┗ 📂 test
    ```

  </div>
  <div style="flex:1;padding-left:10px;">
  
  Docker install <br>
    ```
    📦hummingbot_files
    ┣ 📂conf
    ┃ ┣ 📂connectors
    ┃ ┣ 📂strategies
    ┃ ┣ 📜conf_client.yml
    ┃ ┣ 📜conf_fee_overrides.yml
    ┃ ┣ 📜hummingbot_logs.yml
    ┃ ┣ 📜.password_verification
    ┗ 📂logs
    ┗ 📜logs_hummingbot.log
    ┣ 📂data
    ┣ 📂scripts
    ┣ 📂certs
    ┗ 📂pmm-scripts
    ```
  </div>
</div>

- **conf:** Here you will find the configuration files of api_keys, strategies, password, client, logs, and fees.

- **data:** Databases and CSV files of trades.

- **logs:** Log files of your running scripts are stored here.

- **hummingbot:** All the components that we are going to use are inside this folder. Read the API Reference guide to learn more about each component.

- **scripts:** This folder stores the code of the sample scripts, as well as new scripts that we create.

### Cheatsheet

!!! abstract "Cheat Sheet"
    We created this [cheat sheet](CheatSheet%20Hummingbot%20Scripts%20-%20White.pdf) highlighting the most commonly used methods available. While you may not need it in the future, keeping it open on a second screen, for now, would be helpful. There is also a black version available [here](CheatSheet%20Hummingbot%20Scripts%20-%20Black.pdf)

## Debugging scripts with PyCharm

Watch this video to learn how you can debug Scripts at runtime with the PyCharm IDE:

[:fontawesome-solid-video: Script Debugging with PyCharm](https://www.loom.com/share/6612ffd03199432c94338bcd18567831)
