# Deployment Guide

This guide covers deploying your Weather Dashboard application to popular hosting platforms.

## Prerequisites

Before deploying, ensure:
- Your project is working locally (`npm run dev`)
- Your code is pushed to GitHub (or another Git provider)
- You have an OpenWeatherMap API key (see [API_SETUP.md](API_SETUP.md))

## Option 1: Deploy on Netlify (Recommended for Beginners)

Netlify offers the easiest deployment experience with automatic builds and deployments.

### Step 1: Prepare Your Repository

1. Initialize a Git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Weather Dashboard"
```

2. Push to GitHub:
   - Create a new repository on [GitHub](https://github.com/new)
   - Follow the instructions to push your local code
   ```bash
   git remote add origin https://github.com/your-username/weather-dashboard.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click **Sign up** and choose GitHub as your provider
3. Click **New site from Git**
4. Select your GitHub repository
5. Netlify will auto-detect your build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**

### Step 3: Configure Environment Variables

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Build & deploy** → **Environment**
3. Click **Edit variables**
4. Add a new variable:
   - **Key**: `VITE_API_KEY`
   - **Value**: Your OpenWeatherMap API key
5. Save the changes
6. Redeploy your site (go to Deployments → Trigger deploy)

### Step 4: Access Your Live Site

- Your site will be deployed at a URL like: `https://your-site-name.netlify.app`
- Share this URL to let others access your weather dashboard!

### Troubleshooting Netlify Deployment

**Build fails with "Module not found"**
- Go to Build & deploy → Logs
- Check if dependencies are missing
- Ensure package.json is correctly formatted

**API calls fail in production**
- Verify VITE_API_KEY is set in Environment variables
- Check the browser's Network tab for failed requests
- Ensure API key is active on OpenWeatherMap dashboard

**Site shows blank page**
- Check browser console for JavaScript errors
- Verify dist folder is being published
- Clear Netlify cache (Deploys → Clear cache and retry)

## Option 2: Deploy on Vercel

Vercel is optimized for React applications with excellent performance.

### Step 1: Push Code to GitHub

Follow the same steps as Netlify (see Option 1, Step 1).

### Step 2: Deploy with Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **Add New...** → **Project**
3. Select **Continue with GitHub** and authorize Vercel
4. Select your weather-dashboard repository
5. Click **Import**

### Step 3: Configure Project

1. **Root Directory**: Leave as default (.)
2. **Build Command**: `npm run build` (auto-detected)
3. **Output Directory**: `dist` (auto-detected)

### Step 4: Add Environment Variables

1. In the project configuration, go to **Environment Variables**
2. Add:
   - **Name**: `VITE_API_KEY`
   - **Value**: Your OpenWeatherMap API key
   - **Environments**: Select Production, Preview, Development
3. Click **Deploy**

### Step 5: Access Your Live Site

- Your site will be deployed at: `https://your-project-name.vercel.app`
- Vercel automatically creates preview URLs for pull requests

### Troubleshooting Vercel Deployment

**Function error deploying serverless function**
- Remove any server-side code
- Ensure all code is client-side React
- Check that no API calls are made server-side

**Environment variables not being used**
- Rebuild and redeploy (from Deployments tab)
- Add `import.meta.env.VITE_API_KEY` in your code
- Check variable is set in all environments

## Option 3: Deploy with GitHub Pages

GitHub Pages is free and great for portfolio projects.

### Step 1: Update vite.config.js

```javascript
export default {
  base: '/weather-dashboard/', // Replace with your repo name
  plugins: [react()],
}
```

### Step 2: Build the Project

```bash
npm run build
```

### Step 3: Deploy Using gh-pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: gh-pages
4. Save

Your site will be available at: `https://your-username.github.io/weather-dashboard/`

### Limitations of GitHub Pages
- Cannot use private API keys directly (API calls will fail without a backend proxy)
- Better for static sites without sensitive credentials

## Option 4: Deploy on Heroku (Advanced)

Heroku requires a backend server for secure API key handling.

### Note on API Security

The current setup has the API key exposed in the client-side code. For production with Heroku, consider:

1. Creating a Node.js backend with Express
2. Keeping the API key server-side
3. Having the frontend request weather data from your backend

This is more secure but requires additional setup.

## Post-Deployment Checklist

- [ ] Test all search functionality in live environment
- [ ] Verify recent searches work with local storage
- [ ] Check responsive design on mobile devices
- [ ] Test error messages with invalid cities
- [ ] Confirm auto-refresh works
- [ ] Check that API rate limits are not being exceeded
- [ ] Monitor application performance
- [ ] Share deployment link with team/stakeholders

## Monitoring and Maintenance

### After Deployment

1. **Monitor Performance**
   - Use Netlify or Vercel Analytics
   - Check performance metrics regularly

2. **Monitor API Usage**
   - Log into OpenWeatherMap dashboard
   - Check your API usage to ensure you're within limits

3. **Fix Bugs Quickly**
   - Set up notifications for build failures
   - Monitor error logs in browser console
   - Use Sentry or similar for error tracking

4. **Keep Dependencies Updated**
   ```bash
   npm update
   npm audit
   npm audit fix
   ```

5. **Test Regularly**
   - Test across different browsers
   - Test on various devices
   - Monitor real user feedback

## Custom Domain Setup

### Add Your Own Domain on Netlify

1. Purchase a domain from any registrar (GoDaddy, Namecheap, etc.)
2. In Netlify site settings → Domain management
3. Click **Add custom domain**
4. Enter your domain name
5. Follow Netlify's DNS setup instructions
6. Update your domain registrar's nameservers (if needed)

### Add Your Own Domain on Vercel

1. Purchase a domain
2. Go to your project settings → Domains
3. Enter your domain name
4. Add DNS records as shown by Vercel
5. Wait for DNS to propagate (can take up to 48 hours)

## Cost Considerations

| Platform | Cost | Notes |
|----------|------|-------|
| Netlify | Free | 100GB bandwidth/month |
| Vercel | Free | Unlimited bandwidth for static |
| GitHub Pages | Free | Limited bandwidth |
| Heroku | Paid | No free tier (starting $7/month) |

## Common Deployment Errors and Solutions

### "404 Not Found" After Deployment
- **Cause**: Wrong build or publish directory
- **Solution**: Verify `dist` folder is set as publish directory

### "Cannot find module" Error
- **Cause**: Dependencies not installed during build
- **Solution**: Check `npm ci` is run during build, not `npm install`

### "API calls return CORS error"
- **Cause**: Mixed HTTP/HTTPS requests
- **Solution**: Ensure API URL uses HTTPS

### "Layout broken on live site"
- **Cause**: Asset paths are relative but base path is wrong
- **Solution**: Check `base` in vite.config.js matches your deployment

## Next Steps

After successful deployment:

1. Share your weather dashboard link
2. Gather user feedback
3. Implement stretch goals (forecast, dark mode, etc.)
4. Monitor and optimize performance
5. Consider adding more features

---

**Congratulations! Your Weather Dashboard is now live! 🚀**

For support, refer to official platform documentation:
- [Netlify Documentation](https://docs.netlify.com)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Documentation](https://pages.github.com)
