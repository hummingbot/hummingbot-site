# Installing Hummingbot on Linux via Source

## Install Prerequisites

!!! tip
    Click the "Copy to clipboard" icon at the end of the code blocks to easily copy the commands

```
sudo apt-get update
```

```
sudo apt-get install -y build-essential
```

```
wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
```

```
sh Miniconda3-latest-Linux-x86_64.sh
```

```
exec bash
```

```
git clone https://github.com/hummingbot/hummingbot.git
```

```
cd hummingbot && ./clean && ./install
```

```
conda activate hummingbot && ./compile
```

```
bin/hummingbot.py
```

## Launch Hummingbot

In the terminal make sure you are within the Hummingbot folder then run the following commands below to launch Hummingbot

```
conda activate hummingbot
```

```
bin/hummingbot.py
```

## Additional Resources
