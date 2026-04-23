# Sensory Safari

Home page recreation for Sensory Safari — The Gym for All Kids, Bayside Shopping Centre, Cocorite.

Built with React + Vite. Single page, no backend, placeholder logo.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Structure

- `src/App.jsx` — page composition
- `src/components/` — `TopBar`, `NavBar`, `Hero`, `OpenPlay`, `Footer`
- `src/styles.css` — palette tokens + all component styles

## Swap in a real logo

Replace the `.brand-logo` `<div>` in `src/components/TopBar.jsx` with an `<img src="/logo.png" alt="Sensory Safari" />`, and drop the image file in `public/`.
