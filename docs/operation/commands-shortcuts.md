# Commands and Shortcuts

## Hummingbot commands

Below are the available commands in the current Hummingbot release.

| Command           | Function                                                      |
| ----------------- | ------------------------------------------------------------- |
| `connect`         | List available exchanges and add API keys to them             |
| `create`          | Create a new bot                                              |
| `import`          | Import an existing bot by loading the configuration file      |
| `help`            | List available commands                                       |
| `balance`         | Display your asset balances across all connected exchanges    |
| `config`          | Display the current bot's configuration                       |
| `start`           | Start the current bot                                         |
| `stop`            | Stop the current bot                                          |
| `status`          | Get the market status of the current bot                      |
| `history`         | See the past performance of the current bot                   |
| `gateway`         | Helper commands for Gateway server                            |
| `exit`            | Exit and cancel all outstanding orders                        |
| `export`          | Export your bot's trades or private keys                      |
| `ticker`          | Show market ticker of current order book                      |
| `pmm_script`      | Send command to running PMM script instance                   |
| `previous`        | Imports the last strategy used                                |
| `rate`            | Show rate of a given trading pair                             |
| `order_book`      | Displays the top 5 bid/ask prices and volume                  |
| `tab_example`     | Display hello world                                           |

## Gateway commands

| Command           | Function                                                      |
| ----------------- | ------------------------------------------------------------- |
| `create`          | Create gateway docker container instance                      |
| `config`          | View or update gateway configuration                          |
| `connect`         | Start the current bot                                         |
| `connector-tokens`| Report token balances for gateway connectors                  |
| `generate-certs`  | Create ssl certificate for gateway                            |
| `list`            | Shows a list of all available gateway connectors and their tiers  |
| `start`           | Start gateway docker instance                                 |
| `status`          | Check status of gateway docker instance                       |
| `stop`            | Stop gateway docker instance                                  |
| `test-connection` | Ping gateway api server                                       |

Users can also use `gateway -h` this will print out the different commands you can use with gateway.

```
>>> gateway -h
usage: gateway [-h] {create,config,connect,connector-tokens,generate-certs,start,status,stop,test-connection} ...

positional arguments: {create,config,connect,connector-tokens,generate-certs,start,status,stop,test-connection}
create              Create gateway docker container instance
config              View or update gateway configuration
connect             Create/view connection info on gateway connector
connector-tokens    Report token balances for gateway connectors
generate-certs      Create ssl certificate for gateway
start               Start gateway docker instance
stop                Stop gateway docker instance
test-connection     Ping gateway api server

optional arguments:
-h, --help          show this help message and exit

```

Gateway help command can also be used this way `gateway [command]-h`

```
>>> gateway create -h
usage: gateway create [-h]

```

It can also be used with a different command:

```
>>> gateway connector-tokens -h
usage: gateway connector-tokens [-h] [connector_chain_network] [new_tokens]

positional arguements:
connector_chain_network  Name of connector you want to edit reported tokens for
new_tokens             Report balance of these tokens

```

## Docker commands

These are the commonly used docker commands when using Hummingbot.

| Command                       | Function                      |
| ----------------------------- | ----------------------------- |
| `docker ps -a`                | List containers               |
| `docker rm [container name]`  | Remove one or more containers |
| `docker rmi [image name]`     | Remove one or more images     |
| `docker rm $(docker ps -a q)` | Remove all containers         |

To view more docker commands, go to [Docker Command Line Reference](https://docs.docker.com/engine/reference/commandline/docker/).

## Linux commands

These are the basic commands used to navigate Linux commonly used with Hummingbot.

| Command | Function                                             |
| ------- | ---------------------------------------------------- |
| `ls`    | Lists all files and folders in the current directory |
| `cd`    | Change directory / move to another folder location   |
| `mv`    | Moves or renames a file or directory                 |
| `cp`    | To copy files or group of files or directory         |
| `rm`    | Remove / delete files and folders                    |
| `top`   | Details on all active processes                      |
| `htop`  | Monitor the system processes in real time            |

For more information about basic Linux commands, check out [The Linux command line for beginners](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview).

## Keyboard shortcuts

| Keyboard Combo                            | Command                      | Description                                  |
| ----------------------------------------- | ---------------------------- | -------------------------------------------- |
| Double <kbd>Ctrl</kbd> + <kbd>C</kbd>     | Exit                         | Press `CTRL + C` twice to exit the bot       |
| <kbd>Ctrl</kbd> + <kbd>S</kbd>            | Status                       | Show bot status                              |
| <kbd>Ctrl</kbd> + <kbd>F</kbd>            | Search / <br/> Hide Search   | Toggle search in log pane                    |
| <kbd>Ctrl</kbd> + <kbd>X</kbd>            | Exit Config                  | Exit from the current configuration question |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>            | Select All                   | \* Select all text                           |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd>            | Undo                         | \* Undo action                               |
| Single <kbd>Ctrl</kbd> + <kbd>C</kbd>     | Copy                         | \* Copy text                                 |
| <kbd>Ctrl</kbd> + <kbd>V</kbd>            | Paste                        | \* Paste text                                |
| <kbd>Ctrl</kbd> + <kbd>T</kbd>            | Toggle Logs                  | Hide / Show logs pane                        |

_\* Used for text edit in input pane only._

**Note about search:**

1. Press <kbd>Ctrl</kbd> + <kbd>F</kbd> to trigger display the search field
2. Enter your search keyword (not case sensitive)
3. Hit `Enter` to jump to the next matching keyword (incremental search)
4. When you are done, press <kbd>Ctrl</kbd> + <kbd>F</kbd> again to go back to reset

**Linux**

| Keyboard Combo                   | Command |
| -------------------------------- | ------- |
| <kbd>Ctrl</kbd> + <kbd>C</kbd>                         | Copy    |
| <kbd>SHIFT</kbd> + RMB (right-mouse button) | Paste   |

To highlight, hold <kbd>SHIFT</kbd> + LMB (left mouse button) and drag across the text you want to select.

**Mac**

| Keyboard Combo                        | Command |
| ------------------------------------- | ------- |
| <kbd>⌘</kbd> + <kbd>C</kbd>          | Copy    |
| <kbd>⌘</kbd> + <kbd>V</kbd>          | Paste   |

!!! note
    To select text on macOS, you may need to enable the **Allow Mouse Reporting** option by pressing <kbd>⌘</kbd> + <kbd>R</kbd> or selecting **View > Allow Mouse Reporting** in the menu bar.

![allowmouse](/assets/img/allow_mouse_reporting.png)

Then you should be able to select text by holding `LMB` (left mouse button) and drag. You can also hold down `⌥ + shift` to select specific lines like the image below.

![highlightmacos](/assets/img/highlight_macos.png)

When accessing Hummingbot on a Linux cloud server through `ssh` using a macOS terminal, hold down the `Option ⌥` key or `⌥ + ⌘` to highlight text.

**Windows**

| Keyboard Combo                                    | Command |
| ------------------------------------------------- | ------- |
| <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>C</kbd> | Copy    |
| <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>V</kbd> | Paste   |

To use this shortcut, check this box by doing a right-click on the title bar at the top of the Hummingbot window, then select **Properties**.

![](/assets/img/properties_windows.png)
