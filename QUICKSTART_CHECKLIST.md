# ✅ Quick Start Checklist

## Pre-Installation (< 2 minutes)

- [ ] Open terminal/command prompt
- [ ] Navigate to project folder:
  ```bash
  cd d:\PROJECTS\VoStrive\vostrive_website
  ```
- [ ] Verify Node.js installed:
  ```bash
  node --version
  ```
  (Should be v16 or higher)

## Installation (5-10 minutes)

### Option A: NPM Command
```bash
npm install
```

### Option B: Batch File (Windows)
```bash
install.bat
```

### Option C: Manual (if above fails)
1. Delete `node_modules` folder (if exists)
2. Delete `package-lock.json` file
3. Run:
   ```bash
   npm cache clean --force
   npm install
   ```

**Verify installation:**
```bash
npm list gsap framer-motion
```
Should show both packages with versions.

## Development Setup (< 1 minute)

```bash
npm run dev
```

Browser should open automatically to `http://localhost:5173`

**What you should see:**
- ✅ Glowing circular logo
- ✅ Rotating logo
- ✅ Pulsing glow colors
- ✅ Loading dots indicator
- ✅ Auto-transition after 4 seconds
- ✅ Website content slides up
- ✅ Logo watermark visible in background

## Testing Checklist

### Visual Testing
- [ ] Splash screen appears on load
- [ ] Logo is in perfect circle
- [ ] Border has rotating gradient (light effect)
- [ ] Glow color cycles: Blue → Purple → Cyan
- [ ] Logo rotates 360°
- [ ] Logo breathes (scales in/out)
- [ ] Text fades in smoothly
- [ ] Loading dots pulse
- [ ] Website content slides up from bottom
- [ ] Splash fades to low opacity
- [ ] Logo watermark visible in background
- [ ] All animations are smooth (no stuttering)

### Responsive Testing
- [ ] Desktop view looks good (1920px)
- [ ] Tablet view responsive (768px)
- [ ] Mobile view works (375px)
- [ ] No horizontal scrolling
- [ ] Touch interactions work on mobile

### Performance Testing
1. Open Chrome DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Reload page
5. Wait for animations to complete (5 seconds)
6. Click Stop
7. Check metrics:
   - [ ] 60 FPS (smooth)
   - [ ] No red bars in timeline
   - [ ] CPU usage reasonable (< 20%)

### SEO Testing
1. Right-click page → View Page Source
2. Check for in `<head>`:
   - [ ] Title tag: `<title>VoStrive - Discipline Engine...`
   - [ ] Description meta tag
   - [ ] Keywords meta tag
   - [ ] Open Graph tags (og:title, og:description, og:image)
   - [ ] Twitter Card tags (twitter:title, twitter:card)
   - [ ] Canonical URL
   - [ ] Manifest link

3. Validate Structured Data:
   - Navigate to: https://schema.org/validator
   - Paste your URL
   - [ ] No schema errors
   - [ ] Organization schema recognized
   - [ ] SoftwareApplication schema recognized

4. Test Social Sharing:
   - Go to: https://ogp.me/
   - Paste your URL
   - [ ] Title appears correctly
   - [ ] Description appears correctly
   - [ ] Image displays
   - [ ] Correct URL shown

## Build & Deploy

### Production Build
```bash
npm run build
```

Creates `dist/` folder with optimized code.

**Check build:**
```bash
npm run preview
```

Opens local preview of production build.

### Deploy Checklist
- [ ] Build succeeds without errors
- [ ] Preview works (splash and content visible)
- [ ] All assets copy correctly
- [ ] Meta tags in dist/index.html
- [ ] robots.txt in dist/
- [ ] sitemap.xml in dist/
- [ ] favicon.png in dist/
- [ ] manifest.json in dist/

### Deployment Platforms

**GitHub Pages:**
```bash
npm run build
npm run deploy
```

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Deploy dist/ folder via Netlify dashboard
```

## Customization Quick Guide

### Change Splash Duration
File: `src/components/SplashScreen.tsx`
Line: ~59
```typescript
}, 4000); // Change 4000 to desired milliseconds
```

### Change Glow Colors
File: `src/components/SplashScreen.tsx`
Line: ~18
```typescript
boxShadow: [
  // Replace with your colors
  '0 0 20px rgba(R, G, B, 0.5)',
  // ...
]
```

### Update SEO Info
File: `index.html`
Update:
- Line 10: `<title>` tag
- Line 11: `name="description"`
- Line 16: `property="og:title"`
- Line 17: `property="og:description"`

### Change Logo Size
File: `src/components/SplashScreen.tsx`
Line: ~109
```typescript
<div className="relative w-64 h-64">
// Change w-64 h-64 to w-80 h-80 or w-96 h-96
```

### Adjust Watermark Opacity
File: `src/components/MainLayout.tsx`
Line: ~40
```typescript
className="w-96 h-96 object-contain opacity-10"
// Change opacity-10 to opacity-20 for more visible
```

## Troubleshooting

### Issue: npm install fails
**Solution:**
```bash
npm cache clean --force
npm install
```

### Issue: Port 5173 already in use
**Solution:**
```bash
npm run dev -- --port 3000
# Use different port
```

### Issue: Blank screen on load
**Check:**
- [ ] Console (F12) for errors
- [ ] Network tab for failed requests
- [ ] SplashScreen component imported
- [ ] MainLayout wrapping app

### Issue: Splash doesn't show
**Check:**
- [ ] App.tsx uses `<MainLayout>`
- [ ] SplashScreen.tsx exists
- [ ] MainLayout.tsx exists
- [ ] No console errors

### Issue: Animations not smooth
**Check:**
- [ ] GPU acceleration enabled
- [ ] Close background apps
- [ ] Check Performance tab (FPS)
- [ ] Reduce animation duration

### Issue: Meta tags not showing
**Check:**
- [ ] View page source (Ctrl+U)
- [ ] Clear browser cache
- [ ] Refresh hard (Ctrl+Shift+R)
- [ ] Check index.html file

### Issue: Build fails
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## File Locations Reference

```
Key Files:
├── src/components/
│   ├── SplashScreen.tsx      → Splash animation
│   ├── MainLayout.tsx         → Layout wrapper
│   └── App.tsx               → Main app
├── public/
│   ├── favicon.png           → Logo icon
│   ├── robots.txt            → SEO crawling
│   ├── sitemap.xml           → Page index
│   └── manifest.json         → PWA config
├── index.html                → Meta tags & SEO
└── package.json              → Dependencies
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## Important URLs

- **Development**: http://localhost:5173
- **Production**: https://vostrive.com
- **SEO Validator**: https://schema.org/validator
- **Open Graph Test**: https://ogp.me
- **Lighthouse**: Chrome DevTools → Lighthouse
- **Twitter Card**: https://cards-dev.twitter.com/validator

## Performance Goals

- [ ] Splash animation: 60 FPS
- [ ] Content reveal: 60 FPS
- [ ] Lighthouse score: 90+
- [ ] LCP: < 2.5 seconds
- [ ] CLS: < 0.1

## Documentation References

- **Setup Details**: See `SETUP_GUIDE.md`
- **Animation Technical**: See `ANIMATION_GUIDE.md`
- **Visual Overview**: See `VISUAL_GUIDE.md`
- **Full Summary**: See `IMPLEMENTATION_SUMMARY.md`
- **Quick Start (SEO)**: See `SPLASH_AND_SEO_README.md`

## Success Indicators ✨

When everything is working:
1. ✅ Splash screen animates smoothly
2. ✅ Content appears after 4 seconds
3. ✅ No console errors
4. ✅ Meta tags visible in source
5. ✅ Performance is smooth (60fps)
6. ✅ Mobile responsive
7. ✅ Build completes successfully
8. ✅ Social sharing shows correct info

## Next Steps

1. [ ] Complete installation (`npm install`)
2. [ ] Run development server (`npm run dev`)
3. [ ] Test splash animation (wait 5 seconds)
4. [ ] Verify SEO tags (Ctrl+U)
5. [ ] Test on mobile devices
6. [ ] Build for production (`npm run build`)
7. [ ] Deploy to hosting
8. [ ] Test on live URL
9. [ ] Submit to Google Search Console
10. [ ] Monitor with Google Analytics

---

**Stuck?** Check the documentation files or test individual components. All animations use standard libraries (GSAP + Framer Motion).

**Questions?** Review `IMPLEMENTATION_SUMMARY.md` for detailed explanation of all changes.
