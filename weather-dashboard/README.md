# Weather Dashboard

A modern, responsive weather application built with React, Vite, and Tailwind CSS. Search for current weather conditions in any city around the world using the OpenWeatherMap API.

## 🌟 Features

### Core Features
- **City Search**: Easily search for weather information by entering a city name
- **Current Weather Display**: View comprehensive weather details including:
  - Current temperature (in Celsius)
  - "Feels like" temperature
  - Weather condition with emoji icons
  - Humidity percentage
  - Wind speed (in m/s)
  - Atmospheric pressure
  - Visibility distance
  - Min and max temperatures
  - Sunrise and sunset times
  - Cloud coverage percentage

- **Error Handling**: User-friendly error messages for invalid city names or network issues
- **Auto-Refresh**: Automatically updates weather data every 10 minutes
- **Manual Refresh**: Quick refresh button to update data on demand
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Extended Features
- **Recent Searches**: Local storage integration to save and display your last 5 searched cities
- **Beautiful UI**: Modern gradient backgrounds and glassmorphism effects
- **Loading States**: Smooth loading animation while fetching data
- **Time Display**: Current time and last update timestamp

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**:
```bash
cd fe_alx_capstone
```

2. **Install dependencies**:
```bash
npm install
```

3. **Get an API Key** (Free):
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API keys section
   - Copy your API key
   - Open `src/App.jsx` and replace the `API_KEY` value with your own key

4. **Start the development server**:
```bash
npm run dev
```

5. **Open in browser**:
   - The app will typically run on `http://localhost:5173`
   - Open this URL in your web browser

## 📁 Project Structure

```
fe_alx_capstone/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # Search input component
│   │   ├── WeatherCard.jsx    # Main weather display component
│   │   ├── ErrorMessage.jsx   # Error notification component
│   │   └── RecentSearches.jsx # Recent searches display
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── index.css              # Global styles + Tailwind directives
│   └── main.jsx               # Application entry point
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite build configuration
├── package.json               # Project dependencies
└── index.html                 # HTML template
```

## 🛠️ Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR)

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally

### Lint Code
```bash
npm run lint
```
Run ESLint to check code quality

## 🔧 Configuration

### API Key Configuration
The API key is currently hardcoded in `src/App.jsx`. For production deployment, consider using environment variables:

1. Create a `.env.local` file in the project root:
```env
VITE_API_KEY=your_api_key_here
```

2. Update `src/App.jsx` to use the environment variable:
```javascript
const API_KEY = import.meta.env.VITE_API_KEY
```

### Tailwind CSS Customization
Edit `tailwind.config.js` to customize:
- Color palette
- Font families
- Spacing
- Breakpoints
- And more!

## 📦 Dependencies

### Core Dependencies
- **react** (^18.0.0): JavaScript library for building user interfaces
- **react-dom** (^18.0.0): React DOM rendering

### Development Dependencies
- **vite**: Next generation frontend build tool
- **@vitejs/plugin-react**: Vite plugin for React
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS transformation tool
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes
- **eslint**: JavaScript code quality tool

## 🌍 Deployment

### Deploy on Netlify

1. **Push your code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/repo-name.git
git push -u origin main
```

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Set environment variable `VITE_API_KEY` in Netlify dashboard
   - Click deploy

3. **Access your deployed app**: Netlify will provide a URL for your live app

### Deploy on Vercel

1. **Push to GitHub** (same as above)

2. **Deploy with Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable `VITE_API_KEY`
   - Click "Deploy"

3. **Access your deployed app**: Vercel will provide a URL

## 💡 Usage Tips

1. **Search for Cities**: Type any city name and press Enter or click Search
2. **View Recent Searches**: Click on any recent search button to quickly view weather for that city
3. **Auto-Refresh**: Weather data updates automatically every 10 minutes
4. **Manual Refresh**: Click the refresh button to immediately update data
5. **Error Handling**: If a city isn't found, a clear error message will guide you

## 🎨 Customization

### Change Weather Icons
Edit the `getWeatherIcon()` function in `src/components/WeatherCard.jsx` to customize emoji icons for different weather conditions.

### Modify Color Scheme
Update the gradient colors in `src/index.css` and `tailwind.config.js` to match your preferred color palette.

### Adjust Auto-Refresh Interval
In `src/App.jsx`, change the interval value (currently `10 * 60 * 1000` milliseconds):
```javascript
const interval = setInterval(() => {
  fetchWeather(city)
}, 5 * 60 * 1000) // Change this to 5 minutes
```

## 🐛 Troubleshooting

### API Key Issues
- Ensure your API key is correctly pasted in `App.jsx`
- Verify the API key is active on OpenWeatherMap
- Check API rate limits (free tier: 60 calls/minute)

### CORS Issues
- If you see CORS errors, ensure you're using the HTTP API from OpenWeatherMap
- The free API should work without proxy configuration

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Clear `node_modules` and `package-lock.json`, then reinstall
- Check that you're using Node.js v14 or higher

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [MDN Web Docs](https://developer.mozilla.org)

## 🚀 Stretch Goals (Optional Enhancements)

- [ ] Add 7-day weather forecast
- [ ] Implement dark/light theme toggle
- [ ] Use Geolocation API to auto-detect user's location
- [ ] Add multiple language support
- [ ] Save favorite cities
- [ ] Add weather alerts
- [ ] Implement PWA functionality
- [ ] Add weather charts and graphs

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the project and submit pull requests.

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section
2. Review the Learning Resources
3. Open an issue on GitHub

---

**Happy Weather Checking!** 🌤️

