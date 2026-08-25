import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.atlasflash.com"),
  title: {
    default: "Atlas — Une seule API. Des centaines de modèles IA. Gratuit d'abord.",
    template: "%s | Atlas",
  },
  description:
    "Atlas est le pilote automatique de vos appels IA. Une seule clé API, un seul endpoint, un catalogue complet de modèles orchestrés automatiquement. Gratuit avant le payant.",
  applicationName: "Atlas",
  keywords: [
    "AI Gateway",
    "LLM",
    "OpenAI",
    "API",
    "Smart Fallback",
    "Atlas",
    "Routage IA",
  ],
  authors: [{ name: "Atlas" }],
  creator: "Atlas",
  publisher: "Atlas",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.atlasflash.com/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.atlasflash.com",
    siteName: "Atlas",
    title: "Atlas — Une seule API. Des centaines de modèles IA. Gratuit d'abord.",
    description:
      "Atlas orchestre automatiquement les meilleurs fournisseurs d'IA. Une seule clé, un seul endpoint, tout le catalogue.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas — Une seule API. Des centaines de modèles IA. Gratuit d'abord.",
    description:
      "Atlas orchestre automatiquement les meilleurs fournisseurs d'IA. Une seule clé, un seul endpoint, tout le catalogue.",
  },
  icons: {
    // Mêmes fichiers que l'application (copiés de /opt/atlas-engine/public) :
    // un favicon SVG reprendrait la priorité et réafficherait l'ancien glyphe,
    // donc on s'en tient au raster.
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('atlas-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}document.documentElement.dataset.theme=t;}catch(e){}})();`;

const themeToggleScript = `(function(){document.addEventListener('click',function(e){var b=e.target.closest('[data-theme-toggle]');if(!b)return;e.preventDefault();var h=document.documentElement;var d=h.classList.toggle('dark');var t=d?'dark':'light';h.dataset.theme=t;try{localStorage.setItem('atlas-theme',t);}catch(_){}});})();`;

const watermarkRemovalScript = `(function(){function nuke(){var el=document.getElementById('minimax-floating-ball');if(el&&el.parentNode){el.parentNode.removeChild(el);}}if(document.readyState!=='loading'){nuke();}else{document.addEventListener('DOMContentLoaded',nuke);}setTimeout(nuke,100);setTimeout(nuke,500);setTimeout(nuke,1500);var obs=new MutationObserver(function(){nuke();});if(document.body){obs.observe(document.body,{childList:true,subtree:true});}});`;

/* Scroll reveal — adds `.is-in` to `[data-reveal]` elements as they enter
   the viewport. Defers to next tick so the DOM is parsed first. */
const revealScript = `(function(){function run(){if(!('IntersectionObserver' in window)){document.querySelectorAll('[data-reveal]').forEach(function(el){el.classList.add('is-in');});return;}var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:0.08});document.querySelectorAll('[data-reveal]').forEach(function(el){io.observe(el);});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}})();`;

/* Navbar — adds `data-scrolled="true"` once the page has scrolled past a small
   threshold so the bar can compress + gain a glassier background. */
const navScrollScript = `(function(){function run(){var nav=document.querySelector('[data-nav-shell]');if(!nav)return;var raf=0;function update(){var y=window.scrollY||window.pageYOffset||0;nav.dataset.scrolled=y>12?'true':'false';}window.addEventListener('scroll',function(){if(raf)return;raf=requestAnimationFrame(function(){update();raf=0;});},{passive:true});update();}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}})();`;

/* Number counters — animates `[data-count]` from 0 to the integer in
   `data-count-to`. Defers until DOM ready. */
const counterScript = `(function(){function run(){if(!('IntersectionObserver' in window))return;var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;io.unobserve(el);var to=parseFloat(el.getAttribute('data-count-to'));if(isNaN(to))return;var dur=900;var start=performance.now();var fmt=el.getAttribute('data-count-suffix')||'';function step(t){var p=Math.min(1,(t-start)/dur);var eased=1-Math.pow(1-p,3);var val=Math.round(eased*to);el.textContent=val+fmt;}step(start);function loop(t){if(t-start>=dur){el.textContent=to+fmt;return;}step(t);requestAnimationFrame(loop);}requestAnimationFrame(loop);});},{threshold:0.4});document.querySelectorAll('[data-count]').forEach(function(el){io.observe(el);});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: watermarkRemovalScript }} />
        <script dangerouslySetInnerHTML={{ __html: navScrollScript }} />
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body className="min-h-screen text-ink-900">
        {children}
        <script dangerouslySetInnerHTML={{ __html: themeToggleScript }} />
        <script dangerouslySetInnerHTML={{ __html: counterScript }} />
      </body>
    </html>
  );
}
