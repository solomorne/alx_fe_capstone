import { useEffect, useState } from 'react'

function WeatherCard({ weather, onRefresh }) {
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    setLastUpdated(new Date())
  }, [weather])

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '🌤️',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌦️',
      '10n': '🌧️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '❄️',
      '13n': '❄️',
      '50d': '🌫️',
      '50n': '🌫️',
    }
    return iconMap[iconCode] || '🌤️'
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 sm:p-8 text-white">
      {/* City and Main Info */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-white text-opacity-80 text-sm">
            Updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-200 font-medium text-sm"
        >
          🔄 Refresh
        </button>
      </div>

      {/* Main Temperature and Condition */}
      <div className="flex items-center justify-between mb-8 pb-8 border-b border-white border-opacity-20">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-7xl">
              {getWeatherIcon(weather.weather[0].icon)}
            </span>
            <div>
              <p className="text-6xl font-bold">{Math.round(weather.main.temp)}°C</p>
              <p className="text-xl capitalize text-white text-opacity-90">
                {weather.weather[0].main}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {/* Feels Like */}
        <div className="bg-white bg-opacity-5 rounded-lg p-4">
          <p className="text-white text-opacity-70 text-xs sm:text-sm mb-1">
            Feels Like
          </p>
          <p className="text-2xl font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>

        {/* Humidity */}
        <div className="bg-white bg-opacity-5 rounded-lg p-4">
          <p className="text-white text-opacity-70 text-xs sm:text-sm mb-1">
            Humidity
          </p>
          <p className="text-2xl font-bold">{weather.main.humidity}%</p>
        </div>

        {/* Wind Speed */}
        <div className="bg-white bg-opacity-5 rounded-lg p-4">
          <p className="text-white text-opacity-70 text-xs sm:text-sm mb-1">
            Wind Speed
          </p>
          <p className="text-2xl font-bold">{Math.round(weather.wind.speed)} m/s</p>
        </div>

        {/* Pressure */}
        <div className="bg-white bg-opacity-5 rounded-lg p-4">
          <p className="text-white text-opacity-70 text-xs sm:text-sm mb-1">
            Pressure
          </p>
          <p className="text-2xl font-bold">{weather.main.pressure} hPa</p>
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white border-opacity-20">
        <div>
          <p className="text-white text-opacity-70 text-sm mb-1">Max Temp</p>
          <p className="text-xl font-semibold">
            {Math.round(weather.main.temp_max)}°C
          </p>
        </div>
        <div>
          <p className="text-white text-opacity-70 text-sm mb-1">Min Temp</p>
          <p className="text-xl font-semibold">
            {Math.round(weather.main.temp_min)}°C
          </p>
        </div>
        <div>
          <p className="text-white text-opacity-70 text-sm mb-1">Visibility</p>
          <p className="text-xl font-semibold">
            {(weather.visibility / 1000).toFixed(1)} km
          </p>
        </div>
        <div>
          <p className="text-white text-opacity-70 text-sm mb-1">Sunrise</p>
          <p className="text-xl font-semibold">{formatTime(weather.sys.sunrise)}</p>
        </div>
        <div>
          <p className="text-white text-opacity-70 text-sm mb-1">Sunset</p>
          <p className="text-xl font-semibold">{formatTime(weather.sys.sunset)}</p>
        </div>
        <div>
          <p className="text-white text-opacity-70 text-sm mb-1">Cloud Cover</p>
          <p className="text-xl font-semibold">{weather.clouds.all}%</p>
        </div>
      </div>

      {/* Weather Description */}
      <div className="mt-6 p-4 bg-white bg-opacity-5 rounded-lg">
        <p className="text-white text-opacity-90">
          📍 {weather.weather[0].description.charAt(0).toUpperCase() +
            weather.weather[0].description.slice(1)}
        </p>
      </div>
    </div>
  )
}

export default WeatherCard
