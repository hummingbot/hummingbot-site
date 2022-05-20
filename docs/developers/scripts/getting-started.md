
## Motivation

- Make it easier for Hummingbot users to prototype new strategies focusing only on the functionality and forgetting about configuration files and compilation
- Since scripts do not require configuration files, the `create` and `import` commands do not apply when using them them.
- Scripts are pure Python implementations. They have all the capabilities that a traditional strategy (aka.: full strategy) has. Having pure Python implementations enables developers to change scripts and reload them in the client without rerunning the compilation process.

## Running a Script

In the Hummingbot client interface, enter `start --scripts [filename]` to start a script. Run `stop` to stop a script.

Since scripts are in Python, you can modify the script's code and re-run it to apply the changes without exiting the Hummingbot interface or re-compiling the code.
