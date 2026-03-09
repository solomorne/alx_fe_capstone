import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ErrorMessage from './components/ErrorMessage'
import RecentSearches from './components/RecentSearches'
import './App.css'

const API_KEY = 'f9c8a2e7a4c3f1b5d2e9f8c4a1b7e5d3'
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [city, setCity] = useState(null)
  const [recentSearches, setRecentSearches] = useState([])

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('weatherSearches')
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading recent searches:', e)
      }
    }
  }, [])

  // Auto-refresh weather data every 10 minutes
  useEffect(() => {
    if (!city) return

    const interval = setInterval(() => {
      fetchWeather(city)
    }, 10 * 60 * 1000)

    return () => clearInterval(interval)
  }, [city])

  const fetchWeather = async (searchCity) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `${API_BASE_URL}?q=${searchCity}&appid=${API_KEY}&units=metric`
      )

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found. Please check the spelling.')
        } else {
          throw new Error('Failed to fetch weather data. Please try again.')
        }
      }

      const data = await response.json()
      setWeather(data)
      setCity(searchCity)

      // Save to recent searches
      setRecentSearches((prev) => {
        const filtered = prev.filter((s) => s !== searchCity)
        const updated = [searchCity, ...filtered].slice(0, 5)
        localStorage.setItem('weatherSearches', JSON.stringify(updated))
        return updated
      })
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchCity) => {
    if (searchCity.trim()) {
      fetchWeather(searchCity.trim())
    }
  }

  const handleRecentSearch = (searchCity) => {
    fetchWeather(searchCity)
  }

  const handleRefresh = () => {
    if (city) {
      fetchWeather(city)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            Weather Dashboard
          </h1>
          <p className="text-white text-opacity-90 text-sm sm:text-base">
            Search for weather information in any city
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Error Message */}
        {error && <ErrorMessage message={error} />}

        {/* Weather Display */}
        {loading && (
          <div className="text-center mt-8">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              <p className="text-white mt-4 font-medium">Loading weather data...</p>
            </div>
          </div>
        )}

        {weather && !loading && (
          <>
            <WeatherCard weather={weather} onRefresh={handleRefresh} />
          </>
        )}

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <RecentSearches searches={recentSearches} onSearch={handleRecentSearch} />
        )}

        {/* Welcome Message */}
        {!weather && !error && !loading && (
          <div className="text-center mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 text-white">
              <p className="text-lg font-light mb-2">
                👋 Welcome to Weather Dashboard
              </p>
              <p className="text-sm text-opacity-80 text-white">
                Enter a city name above to see current weather conditions
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
