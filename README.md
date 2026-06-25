<div align="center">

# ✦ Nida Patel — Portfolio

### Personal portfolio website built with Next.js, GSAP, and a cyan/purple/pink gradient design system.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Portfolio-a855f7?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-kappa-ochre-63.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)

</div>

---

## 🔗 Live

> **[https://portfolio-kappa-ochre-63.vercel.app/](https://portfolio-kappa-ochre-63.vercel.app/)**

---

## ✨ Features

- **GSAP Animations** — entrance animations, scroll-triggered reveals, floating orbs, and 3D card tilt on hover
- **Glassmorphism Navbar** — frosted glass effect on scroll, auto-hides on scroll down and reappears on scroll up
- **Gradient Design System** — consistent cyan → purple → pink gradient across text, buttons, and accents
- **Bento Grid Skills** — each skill category in its own colored card with glow on hover
- **3D Project Cards** — mouse-tracking tilt effect using GSAP on project cards
- **Scroll Animations** — elements reveal from sides and bottom as you scroll using ScrollTrigger
- **Floating Orbs** — animated background gradient orbs that float independently
- **Fully Responsive** — works across all screen sizes
- **Performance Optimized** — static generation with Next.js, Google Fonts preloaded

---

## 🛠️ Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Animations** — GSAP + ScrollTrigger
- **Styling** — Inline styles + Tailwind CSS
- **Icons** — Lucide React
- **Fonts** — Space Grotesk (display) + Inter (body)
- **Deployment** — Vercel

---

## 📂 Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout + font imports
│   └── page.js           # Main page — imports all sections
│
└── components/
    ├── Navbar.js          # Sticky nav with glass effect + hide on scroll
    ├── Hero.js            # Full screen hero with floating orbs + entrance animation
    ├── About.js           # Two column — bio + currently card with parallax
    ├── Skills.js          # Bento grid with scroll reveal
    ├── Projects.js        # Grid cards with 3D tilt + glow effects
    └── Contact.js         # Centered with floating orbs + hover cards
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/nidapatel4/portfolio
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🎨 Design Decisions

**Color palette** — Deep navy background `#060b18` with a cyan `#22d3ee` → purple `#a855f7` → pink `#ec4899` gradient. Chosen to feel modern and technical without being aggressive.

**GSAP over CSS animations** — GSAP's ScrollTrigger gives fine control over when elements animate in based on scroll position. The 3D tilt on project cards uses GSAP for smooth, physics-like motion that CSS transitions can't replicate.

**Inline styles over Tailwind** — Tailwind v4 in Next.js App Router had class conflicts. Inline styles guarantee consistent rendering across environments.

**No component library** — Built from scratch to keep bundle size small and maintain full design control.

---

## 👤 Author

**Nida Patel** — CS Student & Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-nida--patel8-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/nida-patel8)
[![GitHub](https://img.shields.io/badge/GitHub-nidapatel4-181717?style=flat&logo=github)](https://github.com/nidapatel4)
[![Email](https://img.shields.io/badge/Email-nidapatel1233@gmail.com-EA4335?style=flat&logo=gmail)](mailto:nidapatel1233@gmail.com)