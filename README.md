# BeyondRachit — YouTube Thumbnail Designer Portfolio

A clean, fast portfolio built with React + Vite + Tailwind + Framer Motion. Deployed on Netlify with a serverless function that delivers contact form messages to a Telegram bot.

## Features
- Responsive design with animated reveal, tilt cards, and magnetic buttons
- Filterable gallery of thumbnails with a "Best" category limited to 6
- Contact form posts to Netlify Function → Telegram Bot (secure)
- Dark theme with spotlight hover background

## Tech
- React 18, TypeScript, Vite 5
- Tailwind CSS 3, Framer Motion
- Netlify Functions for serverless API

## Quick start (local)
1. Install dependencies
	```powershell
	npm install
	```
2. Run the dev server
	```powershell
	npm run dev
	```
	Open the URL Vite prints (for example http://localhost:5173). If the port is busy, Vite picks another port.

## Deploy to Netlify
1. Push this repo to GitHub.
2. On Netlify, create a new site from Git.
3. Build settings:
	- Build command: `npm run build`
	- Publish directory: `dist`
	- Functions directory: `netlify/functions`
4. Environment variables (Site settings → Environment variables):
	- `TELEGRAM_BOT_TOKEN` — Telegram bot token from @BotFather
	- `TELEGRAM_CHAT_ID` — Your numeric chat ID (user/group/channel)
5. Deploy. The contact form at `#contact` will send messages to your Telegram.

## Testing the contact function locally
- Use Netlify CLI to run the function locally with env vars:
  ```powershell
  npm i -g netlify-cli
  $env:TELEGRAM_BOT_TOKEN="<your-token>"
  $env:TELEGRAM_CHAT_ID="<your-chat-id>"
  netlify dev
  ```
- Open the local URL it prints and submit the contact form.

## Project structure (important files)
```
src/
  App.tsx               # Main app composition
  main.tsx              # Entry point
  styles.css            # Tailwind + global styles
  data/content.ts       # Profile + gallery data
  components/           # UI components (Navbar, Reveal, TiltCard, etc.)
  sections/             # Page sections (Hero, Projects, Process, Impact, About, Services, Contact)
netlify/
  functions/telegram.js # Netlify serverless function → Telegram API
netlify.toml            # Build + redirect /api/telegram → function
public/favicon.svg      # Favicon
```

## Customization
- Update `src/data/content.ts` to edit profile, socials, and gallery.
- Images live under `public/images/`.
- Hero chips and CTAs live in `src/sections/Hero.tsx`.
- Footer text is in `src/App.tsx`.

## License
Personal/portfolio use permitted. Remove or adapt before commercial reuse.
