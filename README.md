#EasyGo - Travel Mode Predictor

Travel Mode Predictor is a web application that helps users decide the most suitable mode of transport based on real-time weather conditions. The application provides travel recommendations by analyzing temperature and precipitation data.

## Features
- **Real-Time Weather Data**: Fetches live weather information for any city using the Visual Crossing Weather API.
- **Travel Suggestions**: 
  - Suggests four-wheelers or public transport in cold weather (e.g., below 18°C) with helpful tips such as "You may feel cold on a bike."
  - Recommends air-conditioned vehicles during hot weather (above 35°C).
  - Advises against cycling or walking in rainy weather (precipitation above 2mm).
  - Encourages eco-friendly travel like walking or cycling during pleasant weather.
- **Simple User Interface**: Designed to be intuitive and accessible for all users.
- **GitHub Pages Hosting**: The application is hosted directly on GitHub Pages for ease of access.

## API Used
The application integrates the **Visual Crossing Weather API** to fetch weather data.

### API Endpoint
```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}?unitGroup=metric&key={API_KEY}&contentType=json
```

## How It Works
1. The user enters a city name in the input field.
2. The application retrieves real-time weather data via the Visual Crossing Weather API.
3. Based on the weather data:
   - If the temperature is below 18°C, a four-wheeler or public transport is suggested to avoid cold discomfort.
   - For temperatures above 35°C, air-conditioned travel is recommended.
   - During rain, the app advises avoiding walking or cycling.
   - For mild weather, eco-friendly options like cycling and walking are encouraged.
