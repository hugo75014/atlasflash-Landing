# Atlas — Landing Page

Landing page officielle d'Atlas, l'AI Gateway nouvelle génération. Next.js 14 App Router, Server Components uniquement, export statique.

## Stack

- **Next.js 14** — App Router, Server Components
- **Tailwind CSS** — design system via CSS variables
- **TypeScript** — strict mode
- **Aucun état React, aucun script tiers, aucune image externe** — tout est inline SVG

## Développement local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de production (statique)

```bash
npm run build    # produit le dossier ./out
```

Le dossier `out/` est un site statique 100% servable (GitHub Pages, Cloudflare Pages, Netlify, S3, nginx, etc.).

## Déploiement

### GitHub Pages (avec CI/CD via GitHub Actions)

Chaque push sur `main` rebuild et redéploie automatiquement.

1. Crée un repo `atlas-landing` (public) sur GitHub
2. Push la source :
   ```bash
   git init && git checkout -b main
   git add . && git commit -m "feat: initial landing"
   git remote add origin https://github.com/TON-USERNAME/atlas-landing.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source : `GitHub Actions` → Save**
4. Le workflow `.github/workflows/deploy.yml` build et déploie automatiquement.

URL : `https://TON-USERNAME.github.io/atlas-landing/`

## Structure

```
app/
├── layout.tsx       # racine, métadonnées, theme init script
├── page.tsx         # landing page entière — 1 seul Server Component
├── globals.css      # design tokens (light + dark via CSS vars)
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

## Features

- Mode sombre / mode clair avec persistance `localStorage` + respect de `prefers-color-scheme`
- Logo Atlas 3D en SVG inline (face bleue + face argent + arête violette + swoosh + triangle intérieur)
- Schéma d'orchestration interactif en SVG (Smart Routing + Smart Fallback)
- Section tarifs (3 plans : Free / Pro 5€/mois / Unlimited 10€/mois) avec tableau comparatif
- FAQ en `<details>` natifs (zéro JS)
- Build : 137 B de JS spécifique à la page, ~95 KB de HTML total

## Licence

Privé — Atlas.
