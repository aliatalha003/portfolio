# Alyaa Talha — Personal Portfolio

A modern, high-end personal portfolio built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark / Light mode** toggle with smooth transition
- **Custom animated cursor** with spring physics
- **Scroll progress bar** at the top
- **Typewriter effect** in the Hero
- **Scroll-triggered animations** throughout
- **Animated skill bars**, project cards, and timeline
- **Contact form** with success state
- **Grain texture overlay** for premium feel
- **Responsive** — works on all screen sizes
- **Playfair Display + DM Sans** — editorial typography

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky nav with mobile menu
│   ├── Hero.jsx           # Animated intro with typewriter
│   ├── About.jsx          # Bio + animated skill bars
│   ├── ProjectCard.jsx    # Reusable project card
│   ├── Projects.jsx       # Projects grid section
│   ├── Experience.jsx     # Animated timeline
│   ├── Contact.jsx        # Form + social links
│   ├── Footer.jsx
│   ├── CustomCursor.jsx   # Spring-based custom cursor
│   └── ScrollProgress.jsx # Top scroll indicator
├── hooks/
│   ├── useDarkMode.js
│   └── useScrollAnimation.js
├── data/
│   └── portfolio.js       # All content data
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Tailwind CSS 3 | Utility styling |
| Framer Motion 11 | Animations |
| Vite | Build tool |
| Lucide React | Icons |

## 🎨 Customization

Edit `src/data/portfolio.js` to update:
- Your name, roles, and bio
- Skills with levels
- Projects with descriptions and tags
- Work experience timeline
- Social links

## 📦 Build for Production

```bash
npm run build
npm run preview
```
