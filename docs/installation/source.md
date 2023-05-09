Hummingbot is designed for Unix-based environment such as macOS or Linux.

Windows users should first install [Windows Subsystem for Linux 2 (WSL 2)](https://learn.microsoft.com/en-us/windows/wsl/install) before installing Hummingbot from source.

* [Linux](./linux.md)
* [Windows](./windows.md)
* [MacOS](./mac.md)
* [Raspberry Pi](./raspberry-pi.md)

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
