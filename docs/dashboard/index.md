## Overview

In 2019, Hummingbot was introduced as a command-line based market-making bot. While there was a potential pull towards creating a graphical user interface (GUI) early on, the primary focus remained on honing core functionalitiesL enhancing exchange connectors and expanding V1 strategy templates.

Now, we are excited to introduce Hummingbot Dashboard, an open-source graphical interface designed to help users deploy and manage multiple Hummingbot instances efficiently. In addtion, Dashboard is designed to be compatible with [V2 Strategies](/v2-strategies), which users can use Dashboard to create and backtest before deploying live.


## Architecture

* **Streamlit**: Dashboard uses the [Streamlit](https://streamlit.io/) open source data visualization framework
* **Docker**: Each bot instance is a [Docker](https://docker.io/) container that Dashboard manages using the [broker module](/installation/brokers)
* **V2 Strategies**: Dashboard helps users create and optimize [V2 Strategies](/v2-strategies)

## Getting Started

Coming soon. Check out these videos as a preview:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/3WqNV543goI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/GhvTaIWHqrU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>