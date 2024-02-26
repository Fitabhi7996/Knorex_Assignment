import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  const handleChange = async (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=399da68060f84d10e82f0508fe8bf0f4`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setWeatherInfo(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};
console.log(weatherInfo)

  return (
    <div>
      <select value={city} onChange={handleChange}>
        <option value="Ho-chi-minh">Ho Chi Minh</option>
        <option value="Singapore">Singapore</option>
        <option value="Kuala-lumpur">Kuala Lumpur</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Athens">Athens</option>
      </select>

      {weatherInfo && (
        <div>
          <h2>Current Weather:{weatherInfo}</h2>
          
          <p>{weatherInfo.weather}°C</p>

          {/* Fetch forecast for the next 3 days */}
          
        </div>
      )}
    </div>
  );
};

export default WeatherApp;