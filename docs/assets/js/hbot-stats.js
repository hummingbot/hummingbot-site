async function updateHBOTStats() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=hummingbot');
        if (!response.ok) {
            throw new Error(`CoinGecko API request failed: ${response.status}`);
        }
        const [data] = await response.json();
        if (!data) {
            throw new Error('CoinGecko API returned no data for hummingbot');
        }

        // Update DOM elements
        const elements = {
            'hbot-price': data.current_price.toFixed(4),
            'circulating-supply': Math.round(data.circulating_supply).toLocaleString(),
            'market-cap': Math.round(data.market_cap).toLocaleString(),
            'fdv': Math.round(data.fully_diluted_valuation).toLocaleString()
        };

        for (const [id, value] of Object.entries(elements)) {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        }
    } catch (error) {
        console.error('Error updating HBOT stats:', error);
    }
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Update immediately and then every 30 seconds
    updateHBOTStats();
    setInterval(updateHBOTStats, 30000);
});
