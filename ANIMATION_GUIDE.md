# Animation Architecture Guide

## Overview

VoStrive uses two complementary animation libraries:
- **Framer Motion** - Layout animations, page transitions, smooth fades
- **GSAP** - Advanced element animations, complex timelines, SVG effects

## Animation Stack

### Framer Motion (React-Native)
Best for:
- Page transitions
- Component entry/exit
- Layout shifts
- Conditional rendering animations
- Interactive gestures

### GSAP (Vanilla JS)
Best for:
- Complex timelines
- Sequenced animations
- CSS property tweening
- Box shadows and gradients
- Repeating/looping animations

## Splash Screen Animation Details

### File: `src/components/SplashScreen.tsx`

#### 1. GSAP Timeline Setup
```javascript
const timeline = gsap.timeline();

// Glow effect animation - creates pulsing glow
timeline.to('.glow-circle', {
  duration: 2,
  boxShadow: [
    '0 0 20px rgba(59, 130, 246, 0.5)',      // Blue
    '0 0 60px rgba(139, 92, 246, 0.6)',      // Purple
    '0 0 100px rgba(34, 211, 238, 0.7)',     // Cyan
    '0 0 60px rgba(139, 92, 246, 0.6)',      // Purple
    '0 0 20px rgba(59, 130, 246, 0.5)',      // Blue
  ],
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});
```

**What it does:**
- Animates box shadow colors in sequence
- `repeat: -1` = infinite loop
- `yoyo: true` = reverses animation
- `sine.inOut` = smooth easing curve

#### 2. Logo Rotation & Scale
```javascript
timeline.to(
  '.logo-container',
  {
    duration: 3,
    rotation: 360,
    scale: [0.8, 1.1, 0.8],  // Breathing effect
    repeat: -1,
    ease: 'sine.inOut',
  },
  0  // Start at same time as other animations (0 = timeline position)
);
```

**What it does:**
- Rotates logo 360 degrees
- Scales between 0.8 and 1.1 (breathing effect)
- 3-second duration
- Runs infinitely

#### 3. Border Gradient Animation
```javascript
timeline.to(
  '.border-ring',
  {
    duration: 3,
    backgroundImage: [
      'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #22D3EE, #3B82F6)',
      'conic-gradient(from 180deg, #8B5CF6, #22D3EE, #3B82F6, #8B5CF6)',
      'conic-gradient(from 360deg, #22D3EE, #3B82F6, #8B5CF6, #22D3EE)',
    ],
    repeat: -1,
    ease: 'none',
  },
  0  // Synchronized with other animations
);
```

**What it does:**
- Creates rotating gradient effect
- Changes gradient angles (0° → 180° → 360°)
- Gives "light running around the circle" effect
- Tubelight appearance

#### 4. Framer Motion Splash Fade
```javascript
<motion.div
  className="fixed inset-0 bg-background flex items-center justify-center z-50"
  initial={{ opacity: 1 }}
  animate={{ opacity: isExiting ? 0.15 : 1 }}
  transition={{
    duration: 1.2,
    ease: 'easeInOut',
  }}
  pointerEvents={isExiting ? 'none' : 'auto'}
>
```

**What it does:**
- Controls splash screen fade
- Fades from full opacity to 15% background opacity
- 1.2 second transition
- `pointerEvents: 'none'` prevents interaction with faded splash

#### 5. Logo Text Fade-In
```javascript
<motion.div
  className="mt-12 text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
```

**What it does:**
- Text starts invisible and 20px lower
- Fades in and moves up
- 0.3 second delay (waits for logo to scale in)
- Smooth entry effect

#### 6. Loading Dots Animation
```javascript
<motion.div
  className="mt-6 flex justify-center gap-2"
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 2, repeat: Infinity }}
>
```

**What it does:**
- Creates pulsing loading indicator
- Oscillates between 50% and 100% opacity
- 2-second loop
- Runs forever or until splash completes

## Main Content Animation

### File: `src/components/MainLayout.tsx`

#### Content Slide-Up Effect
```javascript
<motion.div
  className="relative z-0"
  initial={{ opacity: 0, y: 100 }}
  animate={splashComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
  transition={{
    duration: 1.2,
    ease: 'easeOut',
    delay: splashComplete ? 0 : 0.5,
  }}
>
```

**What it does:**
- Content starts 100px below visible area
- Slides up into view
- Fades in simultaneously
- Triggered after splash completes
- Eases out (faster start, slower end)

#### Background Logo Watermark
```javascript
{splashComplete && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.05 }}
    transition={{ duration: 1 }}
  >
    <img src="/favicon.png" className="w-96 h-96 object-contain opacity-10" />
  </motion.div>
)}
```

**What it does:**
- Shows logo watermark after splash
- Very low opacity (5%)
- Fades in smoothly over 1 second
- Doesn't interfere with content

## Animation Timing Sequence

```
Timeline (in seconds):
0.0s  ├─ Splash screen shows (opacity: 1)
      ├─ Logo scales in (0 → scale)
      └─ GSAP animations start

0.3s  └─ Text fades in below logo

2.0s  ├─ GSAP animations continue looping
      └─ Loading dots pulsing

3.5s  ├─ Timeout triggers for exit
      ├─ Splash opacity: 1 → 0.15
      └─ Content animation state changes

4.0s  ├─ Content slides up (y: 100 → 0)
      ├─ Content opacity: 0 → 1
      └─ Loading indicator stops

4.3s  ├─ Background watermark appears
      ├─ Watermark opacity: 0 → 0.05
      └─ Splash pointerEvents: none

4.5s  ├─ All animations complete
      ├─ Page scrollable
      └─ User can interact with content
```

## Color Scheme

### Glow Colors
- **Blue**: `rgba(59, 130, 246, 0.5)` - Primary blue
- **Purple**: `rgba(139, 92, 246, 0.6)` - Accent purple
- **Cyan**: `rgba(34, 211, 238, 0.7)` - Light cyan highlight

### How Colors Are Used
```
Glow Animation → Blue → Purple → Cyan → Purple → Blue (loop)
Border Animation → Creates 3-stop gradient rotating around circle
```

## Performance Considerations

### GPU Acceleration
These properties should use GPU acceleration:
- ✅ `transform` (scale, rotate, translateY)
- ✅ `opacity`
- ⚠️ `boxShadow` (less optimized)
- ❌ `backgroundImage` (CPU intensive)

### Optimization Tips
1. Use `transform` instead of manual positioning
2. Avoid animating `width` and `height`
3. Use `will-change: transform` for animated elements
4. Batch DOM updates
5. Use `requestAnimationFrame` for smooth 60fps

### Current Implementation
- ✅ Logo uses transform: scale + rotate (GPU accelerated)
- ✅ Content uses transform: translateY (GPU accelerated)
- ⚠️ Glow uses boxShadow (consider GPU background-blur alternative)
- ⚠️ BorderRing uses backgroundImage (CSS alternative available)

## Customization Examples

### Make Splash Longer
```typescript
// Change timeout from 4000ms to 6000ms
setTimeout(() => {
  setIsExiting(true);
  onAnimationComplete();
}, 6000); // ← Change this
```

### Slower Animations
```typescript
// In GSAP timeline
timeline.to('.glow-circle', {
  duration: 3, // ← Increase from 2
  // ... rest of config
});
```

### Different Color Scheme
```typescript
// Replace RGB values
boxShadow: [
  '0 0 20px rgba(255, 102, 178, 0.5)',  // Pink
  '0 0 60px rgba(51, 204, 255, 0.6)',   // Light blue
  '0 0 100px rgba(153, 51, 255, 0.7)',  // Purple
  // ...
]
```

### Skip Splash Screen (Development)
```typescript
// In MainLayout, add condition:
const [showSplash, setShowSplash] = useState(
  process.env.NODE_ENV === 'development' ? false : true
);
```

## Browser Support

### Animation Libraries Compatibility
- **Framer Motion**: All modern browsers (iOS Safari 14+, Chrome 90+)
- **GSAP**: All browsers including IE 9+
- **CSS Transforms**: 98% of browsers

### Fallback for Old Browsers
Add feature detection:
```typescript
const supportsWebgl = (() => {
  try {
    return !!window.WebGLRenderingContext;
  } catch(e) {
    return false;
  }
})();

if (!supportsWebgl) {
  // Show simple version without animations
}
```

## Testing Animations

### Chrome DevTools
1. Open DevTools (F12)
2. Go to Performance tab
3. Click "Record"
4. Reload page, let animations play
5. Click "Stop"
6. Check FPS and memory usage
7. Should see smooth 60fps

### Firefox DevTools
1. Open DevTools (F12)
2. Go to Inspector → Animations
3. Watch animation timeline
4. Check for jank or stuttering

## Resources

- [GSAP Timeline Docs](https://greensock.com/docs/v3/GSAP/Timeline)
- [GSAP Easing](https://greensock.com/docs/v3/Eases)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [CSS Transforms Performance](https://web.dev/animations-guide/)
