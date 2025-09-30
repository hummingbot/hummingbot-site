# Quants Lab

Quants Lab contains interactive notebooks and task schedulers for quantitative trading research and development. It provides comprehensive tools for data collection, backtesting, strategy development, and automated task management.

**GitHub Repository**: [github.com/hummingbot/quants-lab](https://github.com/hummingbot/quants-lab)

## What is Quants Lab?

Quants Lab acts as a research and development platform for quantitative traders, enabling systematic strategy creation and testing. It bridges the gap between raw market data and executable trading strategies, providing a complete toolkit for quants and algorithmic traders.

Quants Lab enables quantitative traders to:

- 📊 Collect and process market data from multiple sources
- 🔍 Build custom screeners for specific trading signals or opportunities
- 🧠 Develop and backtest trading strategies
- 📣 Schedule Telegram, Discord, or email reports for automated notifications

Under the hood, Quants Lab uses the [Hummingbot Python library](https://pypi.org/project/hummingbot/) and is designed to be compatible with other Hummingbot repos. 

## Installation

Clone the Quants-Lab Github repo to download it to your machine, and then enter the folder:
```bash
git clone https://github.com/hummingbot/quants-lab.git
cd quants-lab
```

Then, run the one-command installation script `install.sh`:

```bash
./install.sh

[INFO] 🚀 Welcome to QuantsLab Installation!

[INFO] This script will:
[INFO]   1. Check prerequisites (conda, docker, docker compose)
[INFO]   2. Create conda environment from environment.yml
[INFO]   3. Install QuantsLab package in development mode
[INFO]   4. Setup databases (optional)
[INFO]   5. Create .env file with defaults
[INFO]   6. Test the installation
```

This script create a `quants-lab` Anaconda/Miniconda environment with all dependencies. Then, it sets up a MongoDB database for storage and creates a new `.env` file that contains starting environment variables.

For more information about other installation options, see the [Quants Lab Github repository](https://github.com/hummingbot/quants-lab).

## Usage

To get started, activate the `quants-lab` environment, explore available notebooks, and then customize them for your needs.

```bash
# Activate environment
conda activate quants-lab

# Launch Jupyter notebooks
jupyter lab

# Navigate to research_notebooks/ folders
```

You can also create and schedule automated runs of tasks, as well as individual notebooks:

```bash
# List available tasks
python cli.py list-tasks

# Run single task
python cli.py trigger-task --task pools_screener --config config/pools_screener_v2.yml

```

## Next Steps

After successful installation:

1. Explore example notebooks in `research_notebooks/`
2. Schedule automated runs of notebooks and tasks in `config/`
3. Join our [Discord](https://discord.gg/hummingbot) for community support
4. Create [GitHub Issues](https://github.com/hummingbot/quants-lab/issues) for bug reports and requested features

## Tutorials

!!! warning
    The videos below demonstrate features from an pre-release version of Quants Lab. Some interfaces and functionalities may have changed in the official release.

### Hummingbot Live: Quants Lab

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/jm7QRbjMHHA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/jm7QRbjMHHA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
