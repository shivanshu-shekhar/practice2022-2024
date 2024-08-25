// src/Weather.js
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState('london'); // Default city to load on mount
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const apiKey = '2931b12b27594d31c77d5b30d7e8e923'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (city.trim() === '') {
      setTemperature(null);
      setError(null);
      setShowResult(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setTemperature(data.main.temp);
      setShowResult(true);
    } catch (error) {
      setError(error.message);
      setShowResult(true);
    }
    setLoading(false);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    if (e.target.value.trim() === '') {
      setShowResult(false);
    }
  };

  const handleButtonClick = () => {
    fetchWeather();
  };

  const handleClearClick = () => {
    setCity('');
    setTemperature(null);
    setError(null);
    setShowResult(false);
  };

  // Use useEffect to fetch weather data when the component mounts or the city changes
  useEffect(() => {
    fetchWeather();
  }, []); // Runs once

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body text-center">
          <h1 className="card-title mb-4">Weather App</h1>
          <input
            type="text"
            className="form-control mb-3"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
          />
          <div className="d-flex justify-content-around">
            <button
              onClick={handleButtonClick}
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Get Temperature'}
            </button>
            <button
              onClick={handleClearClick}
              className="btn btn-secondary"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Clear'}
            </button>
          </div>
          {showResult && (
            <>
              {error && <p className="text-danger mt-3">Error: {error}</p>}
              {temperature !== null && !error && (
                <p className="card-text mt-3">
                  The current temperature in <strong>{city}</strong> is{' '}
                  <strong>{temperature}°C</strong>
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
