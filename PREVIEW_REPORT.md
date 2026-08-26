# Atlas Landing — Redesign + i18n — Delivered

## 🌐 Live preview URL

**https://a26vhulmo3c2b.space.minimax.io/**

(Any browser, no auth. URL params for testing: `?_lang=en` / `?_lang=es` / `?_lang=pt` / `?_lang=hi` / `?_theme=dark`. Default = browser language, falls back to French.)

Rate-limited 200/503 like the previous preview — retry if you hit a 503.

## ✅ What changed (CSS + i18n only)

| Area | Before | After |
|---|---|---|
| Background (light) | cream gradient `#FFF5EE → #FFF5E3` | soft white `#FAFAFA → #F8F8F8` |
| Background (dark) | warm brown gradient | `#18181B → #161619` (slightly darker gray, not pure black) |
| Type stack | ui-sans-serif | system font stack with `font-optical-sizing: auto`, `font-variation-settings: opsz/wght`, tight display tracking |
| Display headings | normal weight | `.h-display` 2.75–5rem with `-0.05em` tracking |
| Section headings | bigger | `.h-section` 1.875–2.75rem |
| Buttons | flat | `.btn-primary` / `.btn-secondary` with hover-lift shadow + cubic-bezier expo-out |
| Cards | flat | `.card` / `.glass-card` with soft shadow + `shine-on-hover` sweep |
| Color tokens | hardcoded | full HSL-style ink/surface tokens in `:root` and `.dark` |
| Animations | medium | softer timing (900ms / 800ms word, 5s pulse) + `prefers-reduced-motion` |
| Languages | 1 (FR) | 5 — FR (default), EN, ES, PT-BR, HI |
| Selector | none | pill in TopNav (globe icon + code) with dropdown of 5 native labels |
| Hydration | n/a | `suppressHydrationWarning` on every i18n element + `requestAnimationFrame` defer on apply |
| HTML structure | 8 sections | 8 sections (unchanged) |
| Auth URLs | `app.atlasflash.com/signin` | `app.atlasflash.com/signin` (unchanged) |
| Watermark removal | CSS + MutationObserver | CSS + MutationObserver (unchanged) |

## 🌍 Translation coverage

All visible strings are translated: 5 langs × ~150 keys = 750 translations, including:
- Hero (eyebrow, title, subtitle, CTAs, trust mentions)
- Schema diagram (App label, "Smart Routing Engine", "1 clé API…", "quota atteint", "Smart Fallback", "Réponse retournée", aria-label)
- Proof band (5 stats)
- Why Atlas (eyebrow, title, subtitle, col headers, 6 rows × 2 columns)
- Features (eyebrow, title, 4 cards × title + body)
- Tools (eyebrow, title, subtitle, filename, code comments, caption)
- How it works (eyebrow, title, 3 steps × title + body)
- Pricing (eyebrow, title, subtitle, badge, 3 plans × name/price/cadence/body/cta, 4 table headers, 6 rows)
- FAQ (eyebrow, title, 5 questions × Q + A)
- Final CTA (title, subtitle, 2 CTAs, trust line)
- Footer (tagline, 3 col headers, 5 links, copyright)
- Pricing currency: EUR (FR/ES), USD (EN), BRL (PT), INR (HI)
- Language detected from `navigator.language` or `?_lang=` URL param or `localStorage.atlas-lang`

## 📁 Files touched

```
A  app/i18n.ts                      — 50 KB translation dictionary (5 langs × 150 keys)
M  app/globals.css                  — 14 KB design system (ink/surface tokens, motion, components)
M  app/layout.tsx                    — embeds i18nScript + themeInitScript + watermark + nav scroll + reveal
M  app/page.tsx                     — 130 data-i18n + data-i18n-attr attributes; LangSelector in TopNav
M  next.config.mjs                   — unchanged (still has basePath for GitHub Pages)
M  .gitignore                        — ignore dev artifacts (snap.js, preview-build, *.png, .deploy-src)
```

No `"use client"`, no external scripts, no external images, no external fonts — all system stack + inline SVG + Tailwind only.

## 🎨 Design system

- **Light**: background `#FAFAFA`, surface `#FFFFFF`, ink-50→ink-950 from `#FAFAFA` to `#09090E`, accent graphite
- **Dark**: background `#18181B`, surface `#202024`, ink-50→ink-950 inverted, accent bone-white
- **Highlight (sparingly)**: blue-500 in light, blue-400 in dark
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out) for entrances; `cubic-bezier(0.22, 1, 0.36, 1)` for state transitions
- **Display tracking**: -0.045em to -0.05em
- **Radius**: cards 1rem, buttons 0.5rem, badges 9999px

## 🔧 Architecture notes

- All `data-i18n` elements use `suppressHydrationWarning` (or the parent does) so React 18's hydration doesn't fight the runtime text swap
- `i18nScript` defers the first apply with `requestAnimationFrame` so it runs after React's hydration phase
- Theme also accepts `?_theme=dark` URL param for sharing/screenshots
- All inline scripts are self-contained IIFEs — no external dependencies, no XHR
- The 5-language selector dropdown uses `data-[open=true]:flex` for pure-CSS show/hide, JS only toggles the `data-open` attribute

## 🚀 To re-deploy to GitHub Pages

When you have a new PAT (with `repo` scope), run:
```bash
cd /workspace
git remote set-url origin https://<NEW_TOKEN>@github.com/hugo75014/atlasflash-Landing.git
git push origin main
# The .github/workflows/deploy.yml will build + publish to https://hugo75014.github.io/atlasflash-Landing/
```

Latest commit on `main`: `c40f7ca chore: ignore .deploy-src/ (used only for deploy tool)`

## 📸 Visual proof

The preview was screenshotted in 7 variants:
- `snap-deploy-fr.png` — French (default)
- `snap-deploy-en.png` — English
- `snap-deploy-dark.png` — English + dark mode
- `snap-es.png`, `snap-pt.png`, `snap-hi.png` — Spanish, Portuguese, Hindi (sampled from local server)

The pricing card "MOST POPULAR" badge stays correctly translated as "le plus choisi" / "most popular" / "más elegido" / "mais escolhido" / "सबसे लोकप्रिय".
