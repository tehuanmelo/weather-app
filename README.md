# Weather App

A simple weather application built with React. It fetches real-time weather data from the OpenWeatherMap API and displays the current weather for a given city.

## Features

- Search for the current weather in any city.
- Displays:
  - Temperature
  - Humidity
  - Wind speed
  - Weather icon based on conditions.
- Default city on load: **Abu Dhabi**.

## Technologies Used

- React
- JavaScript (ES6+)
- OpenWeatherMap API
- CSS Flexbox

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd weather-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your environment variables: create a `.env` file in the root directory and add your API key:
   ```env
   VITE_APP_ID=your_openweathermap_api_key
   ```
5. Run the app:
   ```bash
   npm run dev
   ```

## Folder Structure

```
src/
  components/
    Weather.jsx
    Weather.css
  assets/
    (icons for different weather conditions)
```

## Notes

- Clicking the search icon fetches the weather data based on the entered city.
- If no city is entered, an alert prompts the user to input a city name.
- If an error occurs while fetching the data, an alert informs the user.

## License

This project is licensed under the MIT License.