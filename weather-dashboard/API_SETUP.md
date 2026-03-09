# API Key Setup Guide

## Getting Your OpenWeatherMap API Key

Follow these steps to get your free OpenWeatherMap API key:

### Step 1: Create an Account
1. Visit [OpenWeatherMap](https://openweathermap.org)
2. Click on **Sign Up** in the top right corner
3. Fill in your details:
   - Email address
   - Password
   - Username
4. Accept the terms of service
5. Click **Create Account**
6. Verify your email by clicking the link sent to your inbox

### Step 2: Get Your API Key
1. Log in to your OpenWeatherMap account
2. Click on your **Profile** (top right corner)
3. Select **My API keys**
4. You'll see a default key called "Default"
5. Copy this key

### Step 3: Add the API Key to Your Application

#### Option A: Direct Configuration (Development Only)
1. Open `src/App.jsx`
2. Find the line: `const API_KEY = 'f9c8a2e7a4c3f1b5d2e9f8c4a1b7e5d3'`
3. Replace the placeholder key with your copied API key:
   ```javascript
   const API_KEY = 'your-actual-api-key-here'
   ```

#### Option B: Environment Variables (Recommended for Production)
1. Create a file named `.env.local` in the project root (same level as package.json)
2. Add the following line:
   ```
   VITE_API_KEY=your-actual-api-key-here
   ```
3. Update `src/App.jsx` to use the environment variable:
   ```javascript
   const API_KEY = import.meta.env.VITE_API_KEY
   ```
4. Never commit `.env.local` to version control (it's in `.gitignore`)

### Step 4: Test Your API Key

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open the application in your browser
3. Search for a city (e.g., "London")
4. If weather data appears, your API key is working!
5. If you see an error, check:
   - The API key is correctly copied
   - Your internet connection is working
   - The OpenWeatherMap API status is up

## API Rate Limits

The free OpenWeatherMap API has the following limits:

- **60 calls per minute**: Maximum request rate
- **1,000,000 calls per month**: Monthly request limit
- **Free tier**: Sufficient for personal and learning projects

### Tips to Avoid Rate Limits:
- The app auto-refreshes every 10 minutes (6 calls per hour)
- This is well within the free tier limits
- Each search makes 1 API call
- Manual refresh button makes 1 additional call

## Troubleshooting API Issues

### Issue: "City not found" error
- **Cause**: The city name might be misspelled or doesn't exist
- **Solution**: Try a major city like "New York", "London", or "Tokyo"

### Issue: No weather data displays
- **Cause**: Possible API key issue or missing internet connection
- **Solution**: 
  - Verify your API key is correct in App.jsx
  - Check your internet connection
  - Wait a few seconds and try again

### Issue: "401 Unauthorized" error
- **Cause**: Invalid or missing API key
- **Solution**: 
  - Verify you copied the entire API key correctly
  - Check in OpenWeatherMap dashboard that the key is active
  - Try generating a new API key

### Issue: "429 Too Many Requests"
- **Cause**: You've exceeded the rate limit
- **Solution**: 
  - Wait a few minutes before making more requests
  - Consider upgrading to a paid plan for higher limits

## API Reference

The application uses the OpenWeatherMap **Current Weather** API endpoint:

```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### Response Data Structure
The API returns weather data in this format:

```json
{
  "name": "London",
  "sys": {
    "country": "GB",
    "sunrise": 1234567890,
    "sunset": 1234567890
  },
  "main": {
    "temp": 15.5,
    "feels_like": 14.2,
    "humidity": 65,
    "pressure": 1013,
    "temp_min": 13.0,
    "temp_max": 17.0
  },
  "wind": {
    "speed": 5.5
  },
  "clouds": {
    "all": 80
  },
  "visibility": 10000,
  "weather": [
    {
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ]
}
```

## Extending the API Usage

### Using Additional OpenWeatherMap APIs

The application can be extended to use other OpenWeatherMap APIs:

1. **5-Day Forecast API**: For future weather predictions
   ```
   https://api.openweathermap.org/data/2.5/forecast
   ```

2. **Geocoding API**: To find coordinates for any city
   ```
   https://api.openweathermap.org/geo/1.0/direct
   ```

3. **One Call API**: For current weather, forecasts, and historical data
   ```
   https://api.openweathermap.org/data/3.0/onecall
   ```

### API Key Best Practices

1. **Use Environment Variables**: Never hardcode API keys in version control
2. **Limit Key Permissions**: Only enable required APIs on your key
3. **Monitor Usage**: Check your API usage in the OpenWeatherMap dashboard
4. **Regenerate Keys**: Periodically regenerate old keys for security
5. **Use HTTPS**: Always use HTTPS connections when making API calls

## Free Tier vs Paid Plans

### Free Plan
- 60 API calls/minute
- 1,000,000 calls/month
- Access to current weather and 5-day forecast
- Good for learning and personal projects

### Paid Plans
- Higher rate limits
- Additional API access
- Professional support
- Perfect for production applications

For more information, visit [OpenWeatherMap Pricing](https://openweathermap.org/price)

---

**Need Help?** Visit [OpenWeatherMap Support](https://openweathermap.org/find)
