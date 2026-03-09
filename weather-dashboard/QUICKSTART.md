# Quick Start Guide - Weather Dashboard

Get your Weather Dashboard up and running in 5 minutes!

## ⚡ 5-Minute Setup

### Step 1: Get Your API Key (2 minutes)
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a **free account**
3. Navigate to "My API keys"
4. Copy your default API key

### Step 2: Add API Key to Project (1 minute)
1. Open `src/App.jsx`
2. Find line 10: `const API_KEY = 'f9c8a2e7a4c3f1b5d2e9f8c4a1b7e5d3'`
3. Replace the value with your API key:
   ```javascript
   const API_KEY = 'your-actual-api-key-here'
   ```
4. Save the file

### Step 3: Start the App (1 minute)
```bash
cd c:\Users\solom\alx_projects\capstone_projects\fe_alx_capstone
npm install  # If not already done
npm run dev
```

### Step 4: Access in Browser (1 minute)
- Open [http://localhost:5173](http://localhost:5173)
- Search for a city: "London", "New York", "Tokyo"
- See weather data appear!

---

## 🎯 What Works Right Now

✅ Search for any city's weather  
✅ View temperature, humidity, wind speed  
✅ See weather icons and conditions  
✅ View sunrise/sunset times  
✅ Auto-refresh every 10 minutes  
✅ Manual refresh button  
✅ Recent searches saved locally  
✅ Error handling  
✅ Mobile-friendly responsive design  
✅ Beautiful gradient UI  

---

## 🚀 Try These Now

### Test Searches
- Type "London" → Press Enter
- Type "New York" → Click Search
- Type "Paris" → Try on mobile
- Type "Invalid City" → See error handling

### Test Recent Searches
- Search 3-5 different cities
- Click recent search buttons
- Notice the list updates

### Test Refresh
- After searching, click 🔄 Refresh
- Weather updates immediately

### Test Mobile View
- Open DevTools (F12)
- Click device toggle (tablet/phone icon)
- Try rotating device
- Check responsive design

---

## 📚 Documentation Files

In your project root, you'll find:

- **README.md** - Complete project guide
- **API_SETUP.md** - Detailed API key setup
- **DEPLOYMENT.md** - How to deploy online
- **FEATURES.md** - Details of all features
- **STRETCH_GOALS.md** - Optional enhancements
- **.github/copilot-instructions.md** - Development guide

---

## 🔧 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for code issues
npm run lint
```

---

## 💡 Tips

1. **API Key Issues?**
   - Check spelling is exact
   - Make sure it's in OpenWeatherMap dashboard
   - Try starting fresh with a new key

2. **City Not Found?**
   - Try major cities: "London", "Paris", "Tokyo"
   - Check spelling
   - Some small towns may not be in database

3. **Want to Customize?**
   - Change colors in `tailwind.config.js`
   - Edit weather icons in `WeatherCard.jsx`
   - Modify auto-refresh time in `App.jsx`

4. **Ready to Deploy?**
   - Follow steps in `DEPLOYMENT.md`
   - Push to GitHub first
   - Use Netlify or Vercel (free!)

---

## 🎓 Learning Path

Start with:
1. Understanding the code structure
2. Testing all features
3. Reading component files
4. Check API responses in browser DevTools
5. Try customizing the UI

Then consider adding:
- [ ] 7-day forecast
- [ ] Dark mode toggle
- [ ] Auto-location detection
- [ ] More languages
- [ ] Other features in STRETCH_GOALS.md

---

## 🆘 Having Issues?

### "City not found" appears every time
- Check your API key is correct
- Try a major city like "London"
- Check internet connection

### Page is blank
- Check browser console (F12) for errors
- Verify API key is correct
- Restart dev server (Ctrl+C, then npm run dev)

### Styling looks broken
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Tailwind is working

### Search button doesn't work
- Check API key is configured
- Make sure you typed a city name
- Check network tab in DevTools for errors

---

## 📱 Browser Support

Works on:
- Chrome/Edge (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & Mobile)
- Any modern browser with ES6 support

---

## 🎉 Next Steps

1. **Explore the project**:
   - Read component files
   - Understand how data flows
   - Check API integration

2. **Learn the tools**:
   - React hooks (useState, useEffect)
   - Tailwind CSS utilities
   - Vite dev experience

3. **Build skills**:
   - Try modifying components
   - Add new features
   - Deploy to production

4. **Share your work**:
   - Deploy to Netlify/Vercel
   - Share the live link
   - Get feedback

---

## 📞 Need Help?

- Check **README.md** for comprehensive guide
- See **API_SETUP.md** for API issues
- Read **DEPLOYMENT.md** for going live
- Review **FEATURES.md** for feature details
- Explore **STRETCH_GOALS.md** for new ideas

---

**Congratulations! You now have a working Weather Dashboard! 🎊**

Start with `npm run dev` and enjoy exploring! 
