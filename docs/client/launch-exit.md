# Launch and Exit Hummingbot

This page contains information on launching and exiting the application, assuming Hummingbot is installed already on your machine.

## Launch via Docker

Check the list of running Docker containers

```
docker ps -a
```

Take note of the container name and use the following command to attach to it using the command below - 

```
docker attach [container_name]
```

!!! tip
    If no containers are running, follow the steps below to create a Hummingbot instance.


```
git clone https://github.com/hummingbot/hummingbot
cd hummingbot
docker compose up -d
```
 

## Launch from source

Make sure the hummingbot conda environment is enabled.

```Manual
conda activate hummingbot
```

In the `hummingbot` parent directory, run this command to launch the application:

```Manual
./start
```

![](/assets/img/launch-from-source.gif)

!!! tip
    As of version [1.19.0](/release-notes/1.19.0/), use `./start` command to launch hummingbot from source. [Read more](https://github.com/hummingbot/hummingbot/issues/6513)

## Exit Hummingbot

Running the `exit` command cancels all outstanding orders and exit the Hummingbot interface. In case of errors, the command `exit -f` will force the application to close.

If you're running Hummingbot installed via binary, exiting Hummingbot by clicking the close window icon will leave your active orders open in the exchange.

!!! tip
    You can also press the keyboard shortcut `CTRL + C` twice to exit.
