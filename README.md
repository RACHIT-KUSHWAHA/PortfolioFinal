# 🎨 BeyondRachit Portfolio

> A modern, interactive portfolio website showcasing creative work and services with smooth animations and stunning visual effects.

![Portfolio Preview](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.18-pink?style=for-the-badge)

---

## ✨ Features

- 🎯 **Smooth Scroll Experience** - Powered by Lenis for butter-smooth scrolling
- 🎬 **Advanced Animations** - GSAP & Framer Motion for fluid, professional animations
- 🌟 **Particle Background** - Subtle animated particles with intelligent connections
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - GPU-accelerated animations, code-splitting, lazy loading
- 🎨 **Modern UI/UX** - Clean design with magnetic button effects and scroll reveals
- 📧 **Contact Integration** - Telegram bot integration for instant notifications
- 🚀 **Fast Loading** - Optimized bundle size with Vite and lazy imports

---

## 🛠️ Tech Stack

### **Core**
- **React 18.3** - UI library
- **TypeScript 5.5** - Type safety
- **Vite 5.4** - Build tool & dev server

### **Styling**
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing

### **Animation & Effects**
- **Framer Motion 10.18** - React animation library
- **GSAP 3.13** - Professional-grade animations
- **Lenis 1.3** - Smooth scroll library
- **Three.js 0.180** - 3D graphics (if needed)

### **UI Components**
- **Lucide React** - Beautiful icon library
- **Custom Components** - Magnetic buttons, scroll reveals, particles

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── ParticlesBackground.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── CountUp.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Process.tsx
│   │   ├── Impact.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── content.ts     # Content configuration
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── styles.css         # Global styles
├── public/
│   ├── images/            # Project images
│   ├── fonts/             # Custom fonts
│   └── resume.pdf         # Downloadable resume
├── api/                   # API routes
│   └── telegram.js        # Telegram integration
└── netlify/functions/     # Serverless functions
    └── telegram.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

> 💡 **Telegram Setup:** Create a bot via [@BotFather](https://t.me/botfather) on Telegram, get your bot token, and obtain your chat ID by messaging [@userinfobot](https://t.me/userinfobot)

4. **Start development server**
```bash
npm run dev
```

5. **Open browser**
```
http://localhost:5173
```

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder with:
- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking
- ✅ Asset optimization

### Preview Production Build

```bash
npm run preview
```

### Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Add environment variables** in Netlify dashboard:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. **Deploy settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard.

---

## 🎨 Customization

### Update Content

Edit `src/data/content.ts` to customize:
- Personal information
- Services offered
- Project showcase
- Social links
- Contact details

### Change Colors

Tailwind configuration in `tailwind.config.cjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#7c3aed',  // Purple
      // Add your colors here
    }
  }
}
```

### Add/Remove Sections

Import and add sections in `src/App.tsx`:

```tsx
import NewSection from './sections/NewSection';

// Add to render
<NewSection />
```

---

## 📧 Contact Form Integration

The contact form uses **Telegram Bot API** for instant notifications:

1. Form submission → Serverless function
2. Function → Telegram Bot API
3. You receive formatted message on Telegram

**Message Format:**
```
🔔 New Portfolio Inquiry

Name: John Doe
Email: john@example.com
Niche: Tech Reviews

Message:
I need thumbnails for my YouTube channel!
```

---

## ⚡ Performance Optimizations

- 🎯 **Code Splitting** - Vendor chunks separated (React, animations, scroll)
- 🚀 **Lazy Loading** - Components loaded on demand
- 💨 **GPU Acceleration** - Hardware-accelerated animations
- 📦 **Bundle Size** - Optimized to ~500KB total
- 🖼️ **Image Optimization** - Lazy loading and modern formats
- 🎨 **CSS Optimization** - Purged unused Tailwind classes
- ⚡ **Fast Refresh** - Instant HMR during development

---

## 🎬 Animation Features

- **Scroll Progress Bar** - Visual indicator of page progress
- **Scroll Reveal** - Elements fade in as you scroll
- **Magnetic Buttons** - Interactive hover effects
- **Count Up Numbers** - Animated statistics
- **Particle Background** - 50 connected particles with smooth motion
- **Smooth Scroll** - Natural easing with Lenis
- **GSAP Animations** - Timeline-based complex animations

---

## 📱 Responsive Design

- 📱 **Mobile First** - Optimized for mobile devices
- 💻 **Desktop Enhanced** - Advanced effects on larger screens
- 📐 **Breakpoints:**
  - Mobile: `< 640px`
  - Tablet: `640px - 1024px`
  - Desktop: `> 1024px`

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🐛 Troubleshooting

### Issue: Animations are laggy

**Solution:** Reduce blur effects in `styles.css` or disable particles on low-end devices

### Issue: Contact form not working

**Solution:** 
1. Check environment variables are set
2. Verify Telegram bot token is correct
3. Ensure you've started the bot on Telegram
4. Check browser console for errors

### Issue: Build fails

**Solution:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**BeyondRachit**

- 📧 Email: [Contact via form](https://yourwebsite.com)
- 💬 Telegram: [@BeyondRachit](https://t.me/BeyondRachit)
- 🎨 Portfolio: [yourwebsite.com](https://yourwebsite.com)

---

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://greensock.com/gsap/) - Animation platform
- [Lenis](https://lenis.studiofreight.com/) - Smooth scroll
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

---

## ⭐ Star This Repo

If you find this project useful, please consider giving it a star! ⭐

---

<div align="center">

**Made with ❤️ by BeyondRachit**

[🌐 Website](https://yourwebsite.com) • [📧 Contact](https://yourwebsite.com#contact) • [💼 Hire Me](https://yourwebsite.com#contact)

</div>
