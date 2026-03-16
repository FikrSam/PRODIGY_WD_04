# PRODIGY_WD_04 - React Portfolio Port

This directory contains the React port of the original vanilla HTML/CSS/JS PRODIGY_WD_04 portfolio. The exact terminal-inspired design and snap-scroll behavior has been preserved and modularized into reusable React components.

## Tech Stack
- React 18
- Vite for fast bundling and development
- Vanilla CSS (ported exactly from the original `styles.css`)

## Project Structure
- `src/components/Navbar.jsx`: Fixed top navigation
- `src/components/Hero.jsx`: Landing section
- `src/components/About.jsx`: Protocol/Skills section
- `src/components/Projects.jsx`: Archives/Work grid section
- `src/components/Contact.jsx`: Signal/Footer section
- `src/components/CustomCursor.jsx`: The custom tracking mouse sentinel logic extracted into a React `useEffect`
- `src/index.css`: Global styles, layout formatting, and CSS variables

## Getting Started

To run this application locally:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to view the site.

## Building for Production

To create a production-ready build:
```bash
npm run build
```
This will generate optimized assets in the `dist` directory.
