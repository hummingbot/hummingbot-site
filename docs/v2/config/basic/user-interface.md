# User Interface Guide

![Hummingbot CLI](/assets/img/userinterface-hummingbot.gif)

The CLI is divided into five panes:

* **Input pane (lower left)**: Where users enter commands

![Hummingbot CLI](/assets/img/input-pane.gif)

* **Output pane (upper left)**: Prints the output of the user's commands

![Hummingbot CLI](/assets/img/output-pane.gif)

* **Log pane (right)**: Log messages

![Log Pane](/assets/img/log-messages.gif)

* **Top navigation bar**: Displays the status/information of the following items

      * **Version:**

          * Reference of Version Release (Currently at 1.13.0)

      * **Strategy:**
          
          * Hummingbot has different strategy configurations that can be used for trading or liquidity mining. Currently we are moving away from strategy based config in favor of scripts. See the quick start guide for scripts [here](../../scripts/quick-start.md)
          
      * **Strategy_file:**
          
          * Displays the current in use `strategy` or `script` file

![Top Navigation](/assets/img/top-nav.gif)

* **Bottom navigation bar**: Displays the information of the following items

      * Trades
          * Number of trades done by the bot
          * Total P&L
          * Total profit & loss
          * Return%
          * Return percentage of assets
      * CPU
          * CPU usage of the computer
      * Mem
          * Memory usage of the computer

      * Threads
      * Duration
        * Duration of the trading session

![Bottom Navigation](/assets/img/bottom-nav.gif)

## Show and hide log pane

The log pane on the right can be shown or hidden in two ways:

1. Click the `log pane` button in the upper right hand corner
2. Press <kbd>CTRL</kbd> + <kbd>T</kbd> shortcut on your keyboard

![Hide Log Pane](/assets/img/hide-log-pane.gif)

## Tabs

Users can now open another tab in the left pane of Hummingbot where the log pane is supposed to be upon entering a command associated with the Tabs feature. Users can now switch between the `log pane` and the new tab they have opened simulateneously.

!!! note
    Currently, the feature only works with the `order_book` parameter.

## Opening and Closing

### Opening a tab

Use the tabs by simply inputting a command associated with the tabs feature.

Upon using the `order_book` command and any suffix it will open a tab automatically.

![opening tabs](/assets/img/tab-opening.png)

![showing tab](/assets/img/leftpane.png)

### Closing a tab

Simply click on the `x` at the top right corner or inputting `parameter_name --close`

One option to close the tab is by clicking on the `x` next to `order_book`

![closing tabs](/assets/img/closing-of-tabs.png)

Alternatively, you can remove the new tab by inputting the `order_book --close` command to close the tab

![alternative closing tabs](/assets/img/name-of-parameter.png)

![closed tabs](/assets/img/closed-tabs.png)

## Keyboard shortcuts

| Keyboard Combo                                   | Command                      | Description                                  |
| ----------------- -------------------------------| ---------------------------- | -------------------------------------------- |
| Double <kbd>CTRL</kbd> + <kbd>C</kbd>            | Exit                         | Press `CTRL + C` twice to exit the bot       |
| <kbd>CTRL</kbd> + <kbd>S/kbd>                    | Status                       | Show bot status                              |
| <kbd>CTRL</kbd> + <kbd>F</kbd>                   | Search / <br/> Hide Search   | Toggle search in log pane                    |
| <kbd>CTRL</kbd> + <kbd>X</kbd>                   | Exit Config                  | Exit from the current configuration question |
| <kbd>CTRL</kbd> + <kbd>A</kbd>                   | Select All                   | \* Select all text                           |
| <kbd>CTRL</kbd> + <kbd>Z</kbd>                   | Undo                         | \* Undo action                               |
| Single <kbd>CTRL</kbd> + <kbd>C</kbd>            | Copy                         | \* Copy text                                 |
| <kbd>CTRL</kbd> + <kbd>V</kbd>                   | Paste                        | \* Paste text                                |
| <kbd>CTRL</kbd> + <kbd>R</kbd>                   | Reset Style                  | Set default color style                      |
| <kbd>CTRL</kbd> + <kbd>T</kbd>                   | Toggle logs                  | Hide / show the logs pane                    |

_\* Used for text edit in input pane only._

**Note about search:**

1. Press <kbd>CTRL</kbd> + <kbd>F</kbd> to trigger display the search field

2. Enter your search keyword (not case sensitive)

3. Hit <kbd>Enter</kbd> to jump to the next matching keyword (incremental search)

4. When you are done, press <kbd>CTRL</kbd> + <kbd>F</kbd> again to go back to reset

### Linux

| Keyboard Combo                              | Command |
| ------------------------------------------- | ------- |
| <kbd>CTRL</kbd> + <kbd>C</kbd>              | Copy    |
| <kbd>SHIFT</kbd> + RMB (right-mouse button) | Paste   |

To highlight, hold <kbd>SHIFT</kbd> + LMB (left mouse button) and drag across the text you want to select.

### macOS

| Keyboard Combo                        | Command |
| ------------------------------------- | ------- |
| <kbd>⌘</kbd> + <kbd>C</kbd>          | Copy    |
| <kbd>⌘</kbd> + <kbd>V</kbd>          | Paste   |

!!! note
    To select text on macOS, you may need to enable the **Allow Mouse Reporting** option by pressing <kbd>⌘</kbd> + <kbd>R</kbd> or selecting **View > Allow Mouse Reporting** in the menu bar.

![allowmouse](/assets/img/allow_mouse_reporting.png)

Then you should be able to select text by holding `LMB` (left mouse button) and drag. You can also hold down <kbd>⌥</kbd> + <kbd>shift</kbd> to select specific lines like the image below.

![highlightmacos](/assets/img/highlight_macos.png)

When accessing Hummingbot on a Linux cloud server through `ssh` using a macOS terminal, hold down the <kbd>Option ⌥</kbd> key or <kbd>⌥</kbd> + <kbd>⌘</kbd> to highlight text.

### Windows

| Keyboard Combo                 | Command |
| ------------------------------ | ------- |
| <kbd>CTRL</kbd> + <kbd>C</kbd> | Copy    |
| <kbd>CTRL</kbd> + <kbd>V</kbd> | Paste   |

To use this shortcut, check this box by doing a right-click on the title bar at the top of the Hummingbot window, then select **Properties**.

![](/assets/img/properties_windows.png)

## Color Settings

Starting with version 0.45, we added new global configuration parameters that allows users to customize the client's background colors.

![New Hummingbot UI](/assets/img/new-ui-1.png)

1. `top-pane`
2. `output-pane`
3. `input-pane`
4. `bottom-pane`  
5. `log-pane`
6. `terminal-primary`

### Changing the panel colors

To make changes to the panel colors, run `config [parameter_name]` inside the Hummingbot client. For example, the command for changing the log pane color is `config log-pane` and enter the hex code of the desired color.

!!! tip
    You can use a hexadecimal color picker like the one here to choose colors: <https://www.w3schools.com/colors/colors_picker.asp>

Alternatively, you can edit these values in the `conf_client.yml` file located under the `hummingbot_conf` folder using a text editor.

!!! Note
    In past versions of Hummingbot (1.5.0 and below), the `conf_client.yml` file is named `conf_global.yml`

### Reset colors to default

Press `CTRL + R` while inside Hummingbot to reset the style to use its default colors.

```
# Background color of the top pane
top-pane: '#000000'

# Background color of the bottom pane
bottom-pane: '#000000'

# Background color of the output pane
output-pane: '#282C2F'

# Background color of the input pane
input-pane: '#151819'

# Background color of the logs pane
logs-pane: '#151819'

# Terminal primary color (text)
terminal-primary: '#00FFE5'
```
