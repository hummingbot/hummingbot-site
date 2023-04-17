
## Releases

Once a month, we publish an official [Release](/governance/releases) of Hummingbot and Hummingbot Gateway, marked by code publication on Github and DockerHub and the publication of the [release notes](/release-notes). 

Subscribe to the [Hummingbot Newletter](https://hummingbot.substack.com/) to get notified when a new release ships.

### Github

The official Hummingbot Github is: <https://github.com/hummingbot>. The main repos are:

* [Hummingbot](https://github.com/hummingbot/hummingbot)
* [Hummingbot Gateway](https://github.com/hummingbot/gateway)

You can submit issues such as bug fixes and proposed enhancements there.

### DockerHub

The official Hummingbot DockerHub is: <https://hub.docker.com/r/hummingbot>. Here, we publish images that correspond to various Github branches:

  * `hummingbot`: `master` (latest) and `development` images, starting with version 1.5.0
  * `gateway`: `main` (latest) and `development` images, starting with version 1.13.0

## Updating Hummingbot

Hummingbot is regularly updated each month (see [Release Notes](/release-notes/)), we recommend that users periodically update their installations to get the latest version of the software.

Users of the Docker version of Hummingbot can utilize the instructions and scripts found in the [Deploy Examples](https://github.com/hummingbot/deploy-examples/tree/main/bash_scripts) repo. Alternatively, they can update their instances to the latest image, which is updated with each release (e.g. `hummingbot/hummingbot:latest`).

For users who have installed from source, they can update their Hummingbot branches to `master` (with every release) or `development` branch (updated continually):

```
git checkout [branch]
git pull origin [branch]
```
