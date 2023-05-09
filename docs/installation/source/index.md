We recommend installing Hummingbot from source if:

* You want to customize or extend the Hummingbot codebase
* You want to build new components like connectors or strategies
* You want to learn how Hummingbot works at a deeper, technical level

Follow one of the guides below to install Hummingbot from source for your environment.

* [Linux](../linux.md)
* [Windows](../windows.md)
* [MacOS](../mac.md)
* [Raspberry Pi](../raspberry-pi.md)

## Useful Commands

### Clone the Hummingbot repo
```
git clone https://github.com/hummingbot/hummingbot.git
```

### Run the install script
```
./install
```

### Compile Hummmingbot
```
./compile
```

### Start Hummingbot

Activate the Hummingbot `conda` environment:
```
conda activate hummingbot
```

Launch Hummingbot:
```
bin/hummingbot.py
```

### Removed compiled files
```
./clean
```

### Remove hummingbot conda environment
```
./uninstall
```
