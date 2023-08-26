## Overview

In 2019, Hummingbot was introduced as a command-line based market-making bot.

Now, we are excited to introduce [Hummingbot Dashboard](https://github.com/hummingbot/dashboard), an open-source graphical interface designed to help users deploy and manage multiple Hummingbot instances efficiently. Not only does Dashboard simplify the process of managing bots at scale, but it also is designed to be compatible with [V2 Strategies](/v2-strategies), which users can use Dashboard to create and backtest before deploying live.

Read about Dashboard in the introductory [blog post](/blog/2023/06/14/kicking-off-the-hummingbot-dashboard-community-project/).

## Architecture

* **Streamlit**: Dashboard uses the [Streamlit](https://streamlit.io/) open source data visualization framework
* **Docker**: Each bot instance is a [Docker](https://docker.io/) container that Dashboard manages using the [broker module](/installation/broker)
* **V2 Strategies**: Dashboard helps users create and optimize [V2 Strategies](/v2-strategies)

## Getting Started

To get started, check out these videos as a preview:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/3WqNV543goI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/2q9HSyIPuf4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Sign up for the [Hummingbot newsletter](https://hummmingbot.substack.com) to learn about other upcoming Dashboard demo events.