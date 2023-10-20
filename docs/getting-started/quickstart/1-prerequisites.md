# Setting Up the Hummingbot Dashboard

## Introduction

Welcome to the second part of the Hummingbot Dashboard tutorial. In this section, we'll guide you through the essential steps to set up the project and get your dashboard up and running.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/VmlD_WQVe4M?si=esn1bc-d2Up-wase" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

Before diving in, there are a couple of essential tools you'll need:

1. **Anaconda**: Anaconda is a powerful distribution of Python and R for scientific computing and data science. It's vital for managing different environments for your projects. If you haven't already installed Anaconda, [click here](#anaconda-link-placeholder) to follow the installation guide.
2. **Docker**: Docker is a platform that allows you to develop, ship, and run applications inside containers. It's necessary for ensuring that the dashboard runs in a consistent environment. If Docker isn't installed on your system, [click here](#docker-link-placeholder) to follow the installation guide.

## Setting Up the Project

### 1. Access the Dashboard Source Code

The Hummingbot Dashboard is open-source, allowing anyone to access, modify, and contribute to its codebase. To get started, visit the project repository on GitHub at the following link: `hummingbot/dashboard`.

### 2. Clone the Repository

To get a local copy of the project, clone the repository by running the command:

```bash
git clone https://github.com/hummingbot/dashboard
```

### 3. Set Up the Conda Environment

Once you've cloned the repository and navigated into its root directory, it's time to create a Conda environment. This environment ensures that all the required dependencies for the dashboard are installed and isolated from other projects. Run the following commands:

```bash
cd dashboard
make env create
```

### 4. Activate the Environment

After creating the environment, you'll need to activate it:

```bash
conda activate dashboard
```

### 5. Launch the Dashboard

With the environment activated, initiate the dashboard with:

```bash
make run
```

It might take a while to load the dashboard for the first time. Subsequent launches will typically be faster. Once the dashboard is up, open a web browser and navigate to `localhost` to view it.


## Conclusion

Congratulations! You've successfully set up the Hummingbot Dashboard. In the next tutorial, we'll delve into managing your credentials and understanding the registration process. 

Stay tuned, and thank you for following along. We hope you find this guide helpful as you embark on your journey with Hummingbot.


**Note**: Ensure to refer to the video for visual guidance, especially if you encounter any hitches. Each step has been demonstrated to help you set up seamlessly.
