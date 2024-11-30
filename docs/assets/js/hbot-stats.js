async function updateHBOTStats() {
    try {
        // Get HBOT price
        const priceResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=hummingbot&vs_currencies=usd');
        const priceData = await priceResponse.json();
        const price = priceData.hummingbot.usd;
        
        // Get circulating supply
        const supplyResponse = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=N4n4qQVTKApqGc2int0KWqnepzV2kV38ue_DhxNyGkX-q4V6BwcSbcUYRulrmn3J4-m-9-rbax0QtMuLYtcEvnwE87sOlQEgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH1LtfJpvsx6ko-sqM14URZmZ3jYd3cBL80m9K3ehDaYBabPl9oGCLEKQlYYtvNTgmPDw6d8UvRjIjfxHAj5tMsQoE6T5t6l9Q&lib=M0hBf2ltttBRyRQ7geRilVBeMw4PaOM-o');
        const supplyData = await supplyResponse.json();
        const supply = parseFloat(supplyData.circulating_supply);
        
        // Calculate market cap and fully diluted value
        const TOTAL_SUPPLY = 1000000000;
        const marketCap = price * supply;
        const fdv = price * TOTAL_SUPPLY;
        
        // Update DOM elements
        const elements = {
            'hbot-price': price.toFixed(4),
            'circulating-supply': Math.round(supply).toLocaleString(),
            'market-cap': Math.round(marketCap).toLocaleString(),
            'fdv': Math.round(fdv).toLocaleString()
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