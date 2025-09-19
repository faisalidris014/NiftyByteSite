# Animation Notes

## Framer Motion Provider

- `client/src/components/providers/MotionProvider.tsx` wraps the app with `MotionConfig`.
- Default transition: `duration: 0.35`, ease `easeOut`.
- Respects the user's `prefers-reduced-motion` setting (`reducedMotion="user"`).

## Using Motion Components

```tsx
import { motion } from "framer-motion";

function FeatureCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glow-card"
    >
      {children}
    </motion.div>
  );
}
```

- Place animations inside existing Tailwind class wrappers.
- Override transition per-element if you need different timing.

## Route Transitions

- Wrap route contents with `AnimatePresence` for enter/exit animations.
- Wouter example:

```tsx
import { AnimatePresence, motion } from "framer-motion";

function Router({ location }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
      >
        {/* route content */}
      </motion.main>
    </AnimatePresence>
  );
}
```

## Next Steps

- Decide page sections to animate (hero, testimonials, service cards).
- Establish motion guidelines: easing, durations, stagger values.
- Audit components for repeated motion so you can extract reusable variants.
