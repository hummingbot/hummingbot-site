# Managing Credentials in Hummingbot Dashboard

## Introduction

In this section, we'll dive into the importance of securely managing credentials in the Hummingbot Dashboard, ensuring that your information remains private and under your control.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/VmlD_WQVe4M?si=esn1bc-d2Up-wase" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Credential Management in the Dashboard

Managing credentials securely is paramount. While Hummingbot employs a salt for hashing passwords, the dashboard requires some additional steps. We present two methods for credential management:

### 1. Manual Password Hashing

- Declare the users and their corresponding passwords.
- The template password "ABC" is a placeholder. To generate a secure password:
  1. Hash the password as demonstrated in the video using the below commands.
    ```
    import streamlit_authenticator as st_auth
    hashed_password = st_auth.hasher_generate("YOUR_PLAIN_TEXT_PASSWORD")

    ```
  2. Ensure the `conda` environment is active. Without it, certain libraries, like `streamlit authenticator`, won't function.
  3. Replace the placeholder password "ABC" with the hashed output string.
  4. Within the web app, access the dashboard using the original password.

This method might be cumbersome if numerous users interact with the dashboard.

### 2. Whitelisted Email Registration

- Define a whitelist of emails authorized to access the dashboard.
- In the credentials YAML file, add the emails of users who will be pre-authorized to register and create their credentials.
    ```
    pre_authorized_emails:
        - user1@example.com
        - user2@example.com
    ```
- Users with whitelisted emails can fill out a registration form upon their first login.
- Upon registration, the dashboard will hash and store their credentials automatically.


## Navigating the Dashboard

Once logged in, you have the freedom to navigate through the various sections of the dashboard. However, to log out securely, ensure you return to the main Hummingbot dashboard page and click the logout button. This ensures optimal security for your credentials and the dashboard's functionality.



## Conclusion

Credential management is crucial to ensure the security and privacy of your operations on the Hummingbot Dashboard. The methods provided offer flexibility and security, catering to individual and multiple user setups. Always prioritize safety when interacting with platforms that require sensitive data.



