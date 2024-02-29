# Create and Delete Password

The password in Hummingbot encrypts sensitive data such as API keys, secret keys, and wallet private keys. For security reasons, the password is only stored locally in encrypted form, and we do not have access to it.

## Creating a password

If you are using Hummingbot for the first time, the system will prompt you to create a password. There are no character requirements, although we recommend using a strong password for additional security.

You can click the **OK** button on the welcome screen or you can press **TAB** to navigate the selection and **ENTER** to confirm.

**Passwords are stored locally in your computer. No passwords are uploaded to any server.**

![](/assets/img/welcome.gif)

## Deleting a password

The password is stored as an encrypted `.password_verification` file in the `/conf` directory within the `hummingbot` folder.

Delete the `.password_verification` file under the `hummingbot_conf` folder to reset the password. Note that the .password_verification file is hidden so you won't be able to see it by default unless you set your system to show all hidden files. In the terminal use the `ls -a` command to list all files

Note that if you do remove the `.password_verification` file you'll also need to remove the existing `connector.yml` files under the `conf/connector` folder otherwise you'll run into an issue where the bot throws an error message and doesn't start. 

This is because Hummingbot encrypts the connector files with the same password you use to login. Resetting the password by deleting the password verification file will prevent the existing connector files from being decrypted which means you'll also need to reconnect your API keys. 

Use the command ```sudo rm -rf .password_verification``` to delete the file

![password](../assets/img/password.png)

!!! tip
    In older versions the passwords and private keys are saved as encrypted files in `hummingbot_conf` (via Docker and binary) or `/conf` directory (installed from source). To reset your password, delete all files starting with `encrypted_` prefix.
    ![](/assets/img/encrypted_files.png)

!!! warning
    This will disconnect your API keys from Hummingbot. You will have to re-connect your API keys.