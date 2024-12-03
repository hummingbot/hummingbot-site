#!/bin/bash

# Instructions
#
# This script is used to fetch Hummingbot filled USDT volume data from Datadog and update the website with the latest data each month
#
# 1. Set the Datadog API key and application key before running the script
# export DATADOG_API_KEY=<YOUR_API_KEY>
# export DATADOG_APP_KEY=<YOUR_APP_KEY>
#
# 2. Run the script with the -f flag to save the output to a file
# ./datadog-script.sh -f output.txt
#
# 3. Use AI to generate VegaLite JSON from the output file similar to the example in the docs/index.md file
#
# 4. Modify the VegaLite JSON in the docs/index.md file. Make sure to include the past 12 months of data only.
# 
# 5. Update the cumulative total in the docs/index.md file.
#
# 5. Delete the output.txt file, and then commit the changes and open a PR.

# Script
# Set the dashboard ID
DASHBOARD_ID="6eq-2aj-ggn"

# Calculate timestamps for 1 year ago and the current time
FROM_TIMESTAMP=$(date -v-2y +%s)  # 2 years ago
TO_TIMESTAMP=$(date +%s)  # Current time

# Define the query with monthly rollup
QUERY="sum:hummingbot.filled_usdt_volume{!exchange:*testnet,!exchange:*sepolia,!exchange:*goerli,!exchange:kraken_perpetual,!exchange:mcx_perpetual,!exchange:altmarkets,!exchange:ibkr,!exchange:nekuti,!exchange:dex,!exchange:pangolin_amm}.rollup(sum, 2592000)"

# Encode the query for the URL
ENCODED_QUERY=$(python3 -c "import urllib.parse; print(urllib.parse.quote('''$QUERY'''))")

# Function to execute the curl command
execute_curl() {
    curl -s -X GET "https://api.datadoghq.com/api/v1/query?from=$FROM_TIMESTAMP&to=$TO_TIMESTAMP&query=$ENCODED_QUERY&with_extra_options=false" \
    -H "DD-API-KEY: $DATADOG_API_KEY" \
    -H "DD-APPLICATION-KEY: $DATADOG_APP_KEY"
}

# Parse command line arguments
USE_PARSER=false
OUTPUT_FILE=""

while getopts "pf:" opt; do
  case $opt in
    p) USE_PARSER=true ;;
    f) OUTPUT_FILE="$OPTARG" ;;
    \?) echo "Invalid option -$OPTARG" >&2; exit 1 ;;
  esac
done

# Execute curl and handle output
if [ -n "$OUTPUT_FILE" ]; then
    if $USE_PARSER; then
        execute_curl | python3 parser.py > "$OUTPUT_FILE"
    else
        execute_curl > "$OUTPUT_FILE"
    fi
    echo "Query results saved to $OUTPUT_FILE"
else
    if $USE_PARSER; then
        execute_curl | python3 parser.py
    else
        execute_curl
    fi
fi