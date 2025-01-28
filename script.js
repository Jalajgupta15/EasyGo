const API_KEY = "A3B8S4GMFRU37QRJSWHQJ5X4H";
const BASE_API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

document.getElementById('weather-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.getElementById('city').value.trim();
    const url = `${BASE_API_URL}${city}?unitGroup=metric&key=${API_KEY}&contentType=json`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found or an error occurred.");
        }

        const data = await response.json();
        const temp = data.currentConditions.temp;
        const precip = data.currentConditions.precip;
        const suggestion = calculateSuggestion(temp, precip);

        document.getElementById('result').innerHTML = `
            <p>🌡️ <strong>Temperature:</strong> ${temp}°C</p>
            <p>☔ <strong>Precipitation:</strong> ${precip} mm</p>
            <p>💡 <strong>Suggestion:</strong> ${suggestion}</p>
        `;
    } catch (error) {
        document.getElementById('result').textContent = "Error: Unable to fetch weather data. Please try again.";
    }
});

function calculateSuggestion(temp, precip) {
    if (precip > 2) {
        return "Heavy rain detected! Opt for private transport or stay indoors.";
    } else if (temp < 18) {
        return "It's quite cold! A four-wheeler or public transport is recommended. You might feel cold on a bike.";
    } else if (temp > 35) {
        return "High temperature! Avoid walking or cycling. Choose air-conditioned transport if possible.";
    } else {
        return "The weather is great! Walking, cycling, or public transport are excellent options.";
    }
}
