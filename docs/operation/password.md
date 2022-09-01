# Create and Delete Password

The password in Hummingbot encrypts sensitive data such as API keys, secret keys, and wallet private keys. For security reasons, the password is only stored locally in encrypted form, and we do not have access to it.

## Creating a password

If you are using Hummingbot for the first time, the system will prompt you to create a password. There are no character requirements, although we recommend using a strong password for additional security.

You can click the **OK** button on the welcome screen or you can press **TAB** to navigate the selection and **ENTER** to confirm.

**Passwords are stored locally in your computer. No passwords are uploaded to any server.**

![](/assets/img/welcome.gif)

## Reset the Hummingbot password

Delete the `.password_verification` file located under the `hummingbot_conf` folder (for Docker) or `/conf` folder (for Source install). 

The file is hidden by default so make sure you use the command `ls -a` in the terminal to show all files including hidden ones. 

### For versions 1.6.0 and below

In the older versions the passwords and private keys are saved as encrypted files in `hummingbot_conf` (via Docker and binary) or `/conf` directory (installed from source).

To reset your password, delete all files starting with `encrypted_` prefix.

![](/assets/img/encrypted_files.png)

!!! warning
    This will disconnect your API keys from Hummingbot. You will have to re-connect your API keys.
