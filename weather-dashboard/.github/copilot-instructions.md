# Weather Dashboard - Project Guidance

This file provides workspace-specific instructions for the Weather Dashboard project.

## Project Overview

This is a modern React-based weather application that allows users to search for current weather conditions in various cities using the OpenWeatherMap API.

## Getting Started

### Prerequisites
- Node.js v14 or higher
- npm or yarn
- An OpenWeatherMap API key (free tier available)

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Get API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account and get your API key
   - See [API_SETUP.md](../API_SETUP.md) for detailed instructions

3. **Configure API Key**
   - Open `src/App.jsx`
   - Replace the placeholder API key with your own
   - Or use environment variables (see DEPLOYMENT.md)

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Access Application**
   - Opens at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── SearchBar.jsx           # Search input component
│   ├── WeatherCard.jsx         # Main weather display
│   ├── ErrorMessage.jsx        # Error notifications
│   └── RecentSearches.jsx      # Recent search history
├── App.jsx              # Main application component
├── App.css              # Component styles
├── index.css            # Global styles + Tailwind directives
└── main.jsx             # Application entry point
```

## Key Features

- **City Search**: Search for weather by city name
- **Current Weather Display**: Temperature, humidity, wind speed, weather icons
- **Error Handling**: User-friendly error messages
- **Auto-Refresh**: Updates every 10 minutes
- **Recent Searches**: Saves last 5 searches using localStorage
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Beautiful UI**: Gradient backgrounds and glassmorphism effects

## Available Commands

```bash
# Development
npm run dev              # Start dev server with HMR

# Production
npm run build            # Create optimized production build
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Fast build tool
- **Tailwind CSS v4**: Utility-first CSS framework
- **OpenWeatherMap API**: Weather data source

## Development Workflow

1. **Making Changes**
   - Edit component files in `src/`
   - Vite's HMR automatically refreshes the browser

2. **Adding Features**
   - Create new components in `src/components/`
   - Import and use in `App.jsx`
   - Use Tailwind classes for styling

3. **Testing**
   - Test locally with `npm run dev`
   - Test search functionality with various cities
   - Verify error handling with invalid inputs
   - Check responsive design on different screen sizes

## Building for Production

```bash
# Create optimized build
npm run build

# Preview the production build
npm run preview

# Commit and push to deploy
git add .
git commit -m "Description of changes"
git push origin main
```

## Deployment

### Netlify (Recommended)
- See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed instructions
- Connect GitHub repo → Auto-deploy on push

### Vercel
- Simple GitHub integration
- Automatic preview deployments

### GitHub Pages
- Free hosting
- Works for static sites

## Customization Options

### Change Weather Icons
Edit `getWeatherIcon()` function in `WeatherCard.jsx`

### Modify Color Scheme
- Edit gradients in `src/index.css`
- Update colors in `tailwind.config.js`

### Adjust Auto-Refresh Interval
In `App.jsx`, change `10 * 60 * 1000` (10 minutes) to desired interval

### Add More Weather Data
Extend `WeatherCard.jsx` to display additional API fields

## Troubleshooting

### "City not found" Error
- Check spelling of city name
- Try a major city like "London" or "New York"

### API Key Issues
- Verify API key is correctly pasted
- Ensure API key is active on OpenWeatherMap dashboard
- Check API rate limits (60 calls/minute free tier)

### Build Failures
- Run `npm install` to ensure dependencies
- Check Node.js version (`node --version`)
- Delete `node_modules` and reinstall if needed

### Styling Issues
- Clear browser cache
- Restart dev server
- Verify Tailwind CSS is imported in `index.css`

## Documentation Files

- **README.md**: Complete project documentation
- **API_SETUP.md**: OpenWeatherMap API configuration guide
- **DEPLOYMENT.md**: Detailed deployment instructions
- **tailwind.config.js**: Tailwind CSS customization
- **vite.config.js**: Vite build configuration

## Best Practices

1. **Code Organization**
   - Keep components focused and reusable
   - Use meaningful component and variable names
   - Add comments for complex logic

2. **Performance**
   - Avoid unnecessary re-renders
   - Use React hooks properly (useState, useEffect)
   - Optimize API calls with proper cleanup

3. **Styling**
   - Use Tailwind utility classes
   - Avoid custom CSS unless necessary
   - Maintain consistent spacing and colors

4. **Git Workflow**
   - Commit frequently with clear messages
   - Push to main branch only when ready
   - Keep commit history clean

## Stretch Goals

After completing core features, consider:
- [ ] 7-day weather forecast
- [ ] Dark/light theme toggle
- [ ] Geolocation API integration
- [ ] Multiple language support
- [ ] Favorite cities list
- [ ] Weather alerts
- [ ] PWA capability
- [ ] Weather charts/graphs

## Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [MDN Web Docs](https://developer.mozilla.org)

## Support

For questions or issues:
1. Check relevant documentation files
2. Review component comments and code
3. Test with browser DevTools
4. Check OpenWeatherMap API documentation
5. Search for solutions on Stack Overflow

---

**Happy developing! 🚀**
