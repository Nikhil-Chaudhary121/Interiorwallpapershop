# Dream Interiors

A rich, editorial one-page website for an interior design studio — React + Tailwind CSS, with GSAP ScrollTrigger for scroll-driven reveals/parallax and Framer Motion for hover and load-in motion.

## Stack

- React 18 + Vite
- Tailwind CSS (custom color/type tokens in `tailwind.config.js`)
- GSAP + ScrollTrigger — section reveal-on-scroll (`src/components/Reveal.jsx`) and the hero filmstrip parallax
- Framer Motion — navbar mobile menu, hover states, scroll progress bar, load-in sequence
- lucide-react — icon set

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build in `dist/`.

## Where things live

```
src/
  data.js               ← ALL copy, pricing, images, stats, social links
  App.jsx                ← page assembly / section order
  index.css              ← font import (Fraunces + Work Sans) + base styles
  components/
    Navbar.jsx
    Hero.jsx              ← headline, image collage, GSAP parallax filmstrip
    About.jsx
    Services.jsx
    Projects.jsx          ← portfolio carousel: price, location, likes, views
    Process.jsx
    Testimonials.jsx      ← ratings + stats
    Blog.jsx               ← journal grid
    Footer.jsx              ← contact, newsletter (client-side only), socials
    Reveal.jsx              ← shared GSAP ScrollTrigger fade/stagger wrapper
    ScrollProgress.jsx       ← Framer Motion top progress bar
tailwind.config.js         ← color tokens (ink, clay, olive, stone, gold) + fonts
```

## Customizing

- **All text, prices, images, stats, likes/views and social links** live in `src/data.js` — edit that file only for content changes; components read from it.
- **Images** are placeholder photography from Lorem Picsum (`picsum.photos/seed/...`). Swap the `src`/`image` fields in `data.js` for real photography before shipping.
- **Colors and fonts** are Tailwind tokens in `tailwind.config.js` (`clay`, `olive`, `stone`, `ink`, and the `display`/`sans` font families).
- **Newsletter form** in the footer is front-end only (local state, no backend) — wire `handleSubscribe` in `Footer.jsx` to your email provider when ready.
- Every anchor link (`#about`, `#services`, etc.) targets the matching `id` on each `<section>`, so the nav scrolls smoothly to it out of the box.

## Accessibility notes already handled

- `prefers-reduced-motion` disables the GSAP/parallax animation.
- Visible focus ring on interactive elements (`:focus-visible` in `index.css`).
- Semantic sections, alt text on every image field in `data.js`.
