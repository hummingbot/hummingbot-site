import requests

def define_env(env):
    """
    This is the hook for the variables, macros and filters.
    """

    @env.macro
    def hbot_price():
        "Get HBOT price from CoinGecko"
        coingecko_response = requests.get("https://api.coingecko.com/api/v3/simple/price?ids=hummingbot&vs_currencies=usd")
        return float(coingecko_response.json()['hummingbot']['usd'])

    @env.macro
    def circulating_supply():
        "Get HBOT circulating supply"
        response = requests.get("https://script.googleusercontent.com/macros/echo?user_content_key=N4n4qQVTKApqGc2int0KWqnepzV2kV38ue_DhxNyGkX-q4V6BwcSbcUYRulrmn3J4-m-9-rbax0QtMuLYtcEvnwE87sOlQEgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH1LtfJpvsx6ko-sqM14URZmZ3jYd3cBL80m9K3ehDaYBabPl9oGCLEKQlYYtvNTgmPDw6d8UvRjIjfxHAj5tMsQoE6T5t6l9Q&lib=M0hBf2ltttBRyRQ7geRilVBeMw4PaOM-o")
        supply = float(response.json()['circulating_supply'])
        return f"{round(supply):,}"

    @env.macro
    def fully_diluted_value():
        "Calculate fully diluted value"
        TOTAL_SUPPLY = 1000000000  # 1 billion HBOT total supply
        return f"{round(hbot_price() * TOTAL_SUPPLY):,}"

    @env.macro
    def market_cap():
        "Calculate circulating market cap"
        response = requests.get("https://script.googleusercontent.com/macros/echo?user_content_key=N4n4qQVTKApqGc2int0KWqnepzV2kV38ue_DhxNyGkX-q4V6BwcSbcUYRulrmn3J4-m-9-rbax0QtMuLYtcEvnwE87sOlQEgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH1LtfJpvsx6ko-sqM14URZmZ3jYd3cBL80m9K3ehDaYBabPl9oGCLEKQlYYtvNTgmPDw6d8UvRjIjfxHAj5tMsQoE6T5t6l9Q&lib=M0hBf2ltttBRyRQ7geRilVBeMw4PaOM-o")
        supply = float(response.json()['circulating_supply'])
        return f"{round(hbot_price() * supply):,}"
