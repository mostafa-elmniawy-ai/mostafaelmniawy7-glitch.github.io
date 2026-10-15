# Mostafa Elmniawy: AI Product Engineer Portfolio

A dark, premium, single-page portfolio for an AI Product Engineer. Built with plain HTML, CSS, and vanilla JavaScript: no frameworks, no build step, no dependencies.

**Live demo:** https://your-username.github.io/your-repo/

---

## Overview

I build AI-powered products for startups and SMEs, from idea to launch. This site presents my services, projects, tech stack, and certifications in a fast, accessible, mobile-first layout inspired by Linear, Vercel, and Raycast.

## Features

- **Hero** with an animated connected-nodes canvas, floating gradient orbs, and a subtle grid background
- **Sections:** Hero, Stats, Services, Projects, Tech Stack, Certifications, About, Contact
- **Smooth scroll**, fade-in on scroll (Intersection Observer), and hover glow on cards
- **Responsive:** mobile-first with breakpoints at 640 / 768 / 1024 / 1280 px and a hamburger menu
- **Contact form** that opens the visitor's email app (`mailto`), so no backend is needed
- **Accessible:** semantic landmarks, proper heading hierarchy, ARIA labels, skip link, visible focus states, and `prefers-reduced-motion` support
- **SEO-ready:** meta description, Open Graph and Twitter tags, `lang` attribute
- **Fast:** three small static files; the only external request is the Inter font from Google Fonts

## Projects Showcased

| # | Project | Stack |
|---|---------|-------|
| 1 | [AI Business Chatbot](https://github.com/mostafaelmniawy7-glitch/restaurant_n8n) | n8n, OpenAI, Supabase |
| 2 | [Email Automation System](https://github.com/mostafaelmniawy7-glitch/Email-Automation) | n8n, GPT-4o-mini, Gmail API, Supabase, Telegram |
| 3 | [Content Repurposing Engine](https://github.com/mostafaelmniawy7-glitch/Content_AI_N8N) | n8n, GPT-4o-mini, gpt-image-1-mini, Supabase |
| 4 | [AI Invoice Extractor](https://github.com/mostafaelmniawy7-glitch/An-Invoice-Extracror) | n8n, GPT-4o-mini, Supabase |
| 5 | [WhatsApp Business Bot](https://github.com/mostafaelmniawy7-glitch/Whatsapp-Bot) | n8n, Meta Cloud API, OpenAI, Supabase |
| 6 | [AI Restaurant Bot](https://github.com/mostafaelmniawy7-glitch/Business-N8N) | n8n, OpenAI, Telegram Bot API, Google Sheets |
| 7 | [MediCare: Healthcare App UI/UX](https://github.com/mostafaelmniawy7-glitch/ui-ux-MediCare) | HTML, CSS, JavaScript, Figma |

## Tech Stack

| Area | Tools |
|------|-------|
| AI & Automation | n8n, OpenAI API, LangChain, RAG, AI Agents, Prompt Engineering |
| Web | Next.js, React, Node.js, JavaScript, TypeScript, HTML/CSS |
| Backend & DB | Supabase, PostgreSQL, REST APIs, Webhooks |
| Design | Figma, UI/UX Design, Prototyping |
| Tools | Git, GitHub, Docker, VS Code |

## Design System

| Token | Value |
|-------|-------|
| Background (primary) | `#0A1628` |
| Background (secondary) | `#0F1F3D` |
| Accent (cyan) | `#00D9FF` |
| Accent (CTA blue) | `#0A66C2` |
| Text (primary) | `#F8FAFC` |
| Text (secondary) | `#94A3B8` |
| Border | `rgba(0, 217, 255, 0.15)` |
| Font | Inter (400 / 500 / 700) |

All colors are CSS variables at the top of `styles.css`.

## Project Structure

```
.
├── index.html   # Markup, content, SEO and Open Graph meta tags
├── styles.css   # Design tokens, layout, components, responsive rules
├── script.js    # Menu, scroll reveal, contact form, hero canvas
└── README.md
```

## Getting Started

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npx serve .
```

Or simply open `index.html` in your browser.

## Deployment

**GitHub Pages**
1. Push the files to the root of the `main` branch.
2. Go to *Settings → Pages → Source: Deploy from a branch → `main` / `(root)`*.
3. Your site goes live at `https://<user>.github.io/<repo>/`.

**Netlify**
1. Go to *Add new site → Deploy manually* and drag the folder in, or connect the GitHub repo.
2. Leave the build command empty and set the publish directory to `.`.

**Vercel**
1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: *Other*. Leave the build command empty and the output directory as `.`.
3. Or run `npx vercel --prod`.

## Customization

- **Content:** edit the text directly in `index.html`.
- **Colors:** change the variables in the `:root` block of `styles.css`.
- **Photo:** replace the `.photo` placeholder in the About section with an `<img alt="...">`.
- **Social preview:** add `<meta property="og:image" content="https://your-domain/og.png">` once you host an image.
- **LinkedIn URL:** update it in the Contact section and the footer if it differs.

## Contact

- **Email:** mostafaelmniawy7@gmail.com
- **GitHub:** [mostafaelmniawy7-glitch](https://github.com/mostafaelmniawy7-glitch)
- **LinkedIn:** [mostafa-elmniawy](https://linkedin.com/in/mostafa-elmniawy)

Based in Cairo, Egypt. Available worldwide (remote).

## License

© 2026 Mostafa Mohamed Elmniawy. All rights reserved.


