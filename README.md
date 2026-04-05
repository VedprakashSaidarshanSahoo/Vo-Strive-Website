# VoStrive Website

A modern, production-ready React website for VoStrive - your discipline engine for fitness, focus, and growth.

## Tech Stack

- **React** with TypeScript
- **Vite** for fast build and development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Anime.js** for additional animations
- **Three.js** with React Three Fiber for 3D elements

## Features

- Dark futuristic theme
- Responsive design
- Smooth animations and transitions
- Scroll-based animations
- 3D hero background
- Interactive components

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. Ensure your repository has the `gh-pages` branch (it will be created automatically).
2. Push your changes to the `main` branch.
3. The site will be available at `https://yourusername.github.io/vostrive-website/`

The GitHub Actions workflow will build and deploy the site automatically on every push to `main`.

### Configuration Notes

- The Vite config sets the base path to `/vostrive-website/` for production builds.
- If your repository name is different, update the `base` in `vite.config.ts`.
- The `homepage` in `package.json` should match your GitHub Pages URL.

## Project Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Section.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Philosophy.tsx
│   ├── Pricing.tsx
│   ├── Demo.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── Hero3D.tsx
├── assets/
├── App.tsx
├── main.tsx
└── index.css
```

## Deployment

The project builds to a `dist` folder compatible with static hosting providers like Hostinger.