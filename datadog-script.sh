#!/bin/bash

# Set the Datadog API key and application key before running the script
# export DATADOG_API_KEY=<YOUR_API_KEY>
# export DATADOG_APP_KEY=<YOUR_APP_KEY>

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