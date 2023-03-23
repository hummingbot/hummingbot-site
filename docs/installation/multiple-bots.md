## Orchestration module

TBD.

## Multiple bots via Docker

See the [Deploy Examples](https://github.com/hummingbot/deploy-examples) repo for examples of how to deploy Hummingbot in various configurations.

## Multiple bots from source

!!! tip
    We recommend that users download and install Hummingbot separately for each instance they wish to run.

The below command downloads the Hummingbot repository from GitHub, where `$FOLDER_NAME` is the name of the separate directory.

```
cd ~
git clone https://github.com/hummingbot/hummingbot.git $FOLDER_NAME
```

Do another install in the new directory.

```
cd $FOLDER_NAME
./install
conda activate hummingbot
./compile
```

## Keeping bots running in the background

### Docker

Press keys <kbd>Ctrl</kbd> + <kbd>P</kbd> then <kbd>Ctrl</kbd> + <kbd>Q</kbd> in sequence to detach from Docker, i.e., return to the command line. This exits out of Hummingbot without shutting down the container instance.

Restart or connect to a running instance using the `./start.sh` script or use `docker attach [container_name]` to a already running bot in the background.

### From source

Use either `tmux` or `screen` to run multiple bots installed from source. Check out these external links how to use them.

- [Getting started with Tmux](https://linuxize.com/post/getting-started-with-tmux/)
- [How to use Linux Screen](https://linuxize.com/post/how-to-use-linux-screen/)

When using screen to run an instance in the background, run either of the following commands: `screen` or `screen -S $NAME`, where `$NAME` is what you wish to call this background instance. Use the latter to be more explicit if you want to run multiple bots.

Navigate to the folder where your separate Hummingbot is installed, then start the bot like normal.

```
conda activate hummingbot
bin/hummingbot.py
```

To exit the screen (detach), press <kbd>Ctrl</kbd> + <kbd>A</kbd> then <kbd>Ctrl</kbd> + <kbd>D</kbd> in sequence.

To list all running instances, use `screen -ls`.

![List Screen Instances](/assets/img/screen.png)

Log back into the screen by using either `screen` or `screen -r $NAME` to open a specific instance.

**Thank you to Discord user `@matha` for this question and `@pfj` for the solution!**

## Additional Resources

- [Managing Bot Cycles with Wojak](https://www.youtube.com/watch?v=eB_66K0JxgM&t=2s)
