# Adding New Commands

Currently, Hummingbot supports the following commands:

[![Supported Commands](/assets/img/all-commands.png)](/assets/img/all-commands.png)

Depending on the usage of the hummingbot client, you may need to add new commands to the client. This is done by adding a new command class to the `hummingbot/client/command` directory. 

The new command class should be called `<command_name>_command.py` 

The new class should be called `<CommandName>Command` and adhere to the CamelCase naming convention.

The new class should have a function called `command_name` which will be ran when the command is called in the Hummingbot client.

Add the new class to the `__init__.py` file in the `hummingbot/client/command` directory and add any necessary imports to the `__init__.py` file.

[![__init__.py File](/assets/img/command-init.png)](/assets/img/command-init.png)

The last step is to add any other functions that the new command class may need. 

Please note: check the `hummingbot/client/command` directory for any existing commands that may be similar to the new command you are adding.