The Orchestration Module allows for remote control and monitoring of multi-bot environments in a distributed context , so that bots can "live" on different machines and infrastructures (e.g. having a bot local and another bot on AWS).

To achieve this approach, there is an MQTT layer for bots to connect remotely to message brokers, as a single point of reference, using asynchronous bidirectional communication channels (push/pull). In this architecture, bots can be considered as clients to the overall environment. Bot scaling is seamless and does not require any further setup, anyone can connect any number of bots the a message broker (e.g. RabbitMQ, EMQX etc) without any other dependencies.

See the following repos for more information:

* [Brokers](https://github.com/hummingbot/brokers): Various deployment examples using Docker Compose
* [Hummingbot remote client](https://github.com/hummingbot/hbot-remote-client-py): Package that implements a remote client for Hummingbot in Python.

Watch the February 2023 [community call](/#community-calls) that contains a demo of this feature:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/O64Br_gMPhM&start=954" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Thanks to [klpanagi](https://github.com/klpanagi) and [TheHolyRoger](https://github.com/TheHolyRoger) for your work! 🙏**

## Phase I

*Released in [v1.12.0](/release-notes/1.12.0/)*

- Interface to execute remote commands: `Start` , `Stop` , `Import` , `Config strategy`, `Balance` , `Change balance limits`
- All these commands can be called using an unified web application that also receives the following information from the bots - `Heartbeat - Status`, `PNL - History`
- The configuration of the broker in the client should be in the `conf_client.yml` file

## Phase II

*Released in [v1.14.0](/release-notes/1.14.0/)*

In this Phase, an event and data layer will be integrated into the Hummingbot codebase to support receiving and handling remote events via the message broker (MQTT), such as the case of TradingView signals.

An MQTTEventListener will be developed and integrated into the hummingbot codebase, which will provide configuration for setting the URIs of the events to listen on. Upon receiving an event, a handling callback provided by the user/developer will be executed by the MQTTEventListener, so that users operate/develop their strategy based on the input event.

- Defines interfaces for subscribing to external topics and listening to messages through the `EEventQueueFactory`, `EEventListenerFactory`, `ETopicQueueFactory`, and `ETopicListenerFactory` classes. 
- The specification defines a base URI format for consuming external events, and URI slashes are transformed to dots for multi-broker and multi-protocol support
- This extends the global configuration and adds the `mqtt_external_events` parameter for globally enabling/disabling external events feature for bot instances.

## Future phases

See [this Notion doc](https://www.notion.so/hummingbot-foundation/Bot-Orchestration-fcac18bd90d74b0ebca9b260617522f0) for an overview of the project. This is an ongoing project funded by Proposal [HIP-20](https://snapshot.org/#/hbot-ip.eth/proposal/0x23e5e5ec459daea8bcb2228b2e18bc081d4b12cb5067d7a9f9efe157cc05ce16).
