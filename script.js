const apiKey = "A3B8S4GMFRU37QRJSWHQJ5X4H";
const baseApiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('citySelector').value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    const url = `${baseApiUrl}${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
        suggestTravelMode(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>Weather in ${data.resolvedAddress}</h2>
        <p>Temperature: ${data.currentConditions.temp}°C</p>
        <p>Conditions: ${data.currentConditions.conditions}</p>
        <p>Precipitation: ${data.currentConditions.precip} mm</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}

function suggestTravelMode(data) {
    const temp = data.currentConditions.temp;
    const precip = data.currentConditions.precip;
    let suggestion;

    if (precip > 2) {
        suggestion = "It's better to use private transport or stay indoors due to heavy rain.";
    } else if (temp < 5 || temp > 35) {
        suggestion = "Extreme temperatures! Avoid walking or cycling.";
    } else {
        suggestion = "The weather looks good! Walking, cycling, or public transport are great options.";
    }

    document.getElementById('travelSuggestion').innerHTML = `<h3>Suggestion:</h3><p>${suggestion}</p>`;
}
