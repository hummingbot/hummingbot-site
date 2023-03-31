## Orchestration Module

The Orchestration Module allows for remote control and monitoring of multi-bot environments in a distributed context , so that bots can "live" on different machines and infrastructures (e.g. having a bot local and another bot on AWS).

To achieve this approach, there is an MQTT layer for bots to connect remotely to message brokers, as a single point of reference, using asynchronous bidirectional communication channels (push/pull). In this architecture, bots can be considered as clients to the overall environment. Bot scaling is seamless and does not require any further setup, anyone can connect any number of bots the a message broker (e.g. RabbitMQ, EMQX etc) without any other dependencies.

See the following repos for more information:

* [Brokers](https://github.com/hummingbot/brokers): Various deployment examples using Docker Compose
* [Hummingbot remote client](https://github.com/hummingbot/hbot-remote-client-py): ackage that implements a remote client for hummingbot in Python.

Watch the February 2023 [community call](/#community-calls) that contains a demo of this feature:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/O64Br_gMPhM&start=954" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Thanks to [klpanagi](https://github.com/klpanagi) and [TheHolyRoger](https://github.com/TheHolyRoger) for your work! 🙏**

### Phase I

*Released in [v1.12.0](/release-notes/1.12.0/)*

- Interface to execute remote commands: `Start` , `Stop` , `Import` , `Config strategy`, `Balance` , `Change balance limits`
- All these commands can be called using an unified web application that also receives the following information from the bots - `Heartbeat - Status`, `PNL - History`
- The configuration of the broker in the client should be in the `conf_client.yml` file

### Phase II

*Released in [v1.14.0](/release-notes/1.14.0/)*

In this Phase, an event and data layer will be integrated into the Hummingbot codebase to support receiving and handling remote events via the message broker (MQTT), such as the case of TradingView signals.

An MQTTEventListener will be developed and integrated into the hummingbot codebase, which will provide configuration for setting the URIs of the events to listen on. Upon receiving an event, a handling callback provided by the user/developer will be executed by the MQTTEventListener, so that users operate/develop their strategy based on the input event.

- Defines interfaces for subscribing to external topics and listening to messages through the `EEventQueueFactory`, `EEventListenerFactory`, `ETopicQueueFactory`, and `ETopicListenerFactory` classes. 
- The specification defines a base URI format for consuming external events, and URI slashes are transformed to dots for multi-broker and multi-protocol support
- This extends the global configuration and adds the `mqtt_external_events` parameter for globally enabling/disabling external events feature for bot instances.

### Future phases

See [this Notion doc](https://www.notion.so/hummingbot-foundation/Bot-Orchestration-fcac18bd90d74b0ebca9b260617522f0) for an overview of the project. This is an ongoing project funded by Proposal [HIP-20](https://snapshot.org/#/hbot-ip.eth/proposal/0x23e5e5ec459daea8bcb2228b2e18bc081d4b12cb5067d7a9f9efe157cc05ce16).

## Multiple bots via Docker

See the [Deploy Examples](https://github.com/hummingbot/deploy-examples) repo for examples of how to deploy Hummingbot in various multi-bot configurations using Docker Compose.

## Multiple bots from source

!!! tip
    We recommend that users download and install Hummingbot separately for each instance they wish to run.

The below command downloads the Hummingbot repository from GitHub, where `$FOLDER_NAME` is the name of the separate directory.

```
cd ~
git clone https://github.com/hummingbot/hummingbot.git $FOLDER_NAME
```

Do another installation in the new directory.

```
cd $FOLDER_NAME
./install
conda activate hummingbot
./compile
```

## Keeping bots running in background

### Docker

Press keys <kbd>Ctrl</kbd> + <kbd>P</kbd> then <kbd>Ctrl</kbd> + <kbd>Q</kbd> in sequence to detach from Docker, i.e., return to the command line. This exits out of Hummingbot without shutting down the container instance.

Restart or connect to a running instance using the `./start.sh` script or use `docker attach [container_name]` to a already running bot in the background.

### Source

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

## Additional resources

- [Managing Bot Cycles with Wojak](https://www.youtube.com/watch?v=eB_66K0JxgM&t=2s)
