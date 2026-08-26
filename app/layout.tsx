import type { Metadata } from "next";
import { translations, LANGS, DEFAULT_LANG } from "./i18n";
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
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('atlas-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}document.documentElement.dataset.theme=t;}catch(e){}})();`;

const themeToggleScript = `(function(){document.addEventListener('click',function(e){var b=e.target.closest('[data-theme-toggle]');if(!b)return;e.preventDefault();var h=document.documentElement;var d=h.classList.toggle('dark');var t=d?'dark':'light';h.dataset.theme=t;try{localStorage.setItem('atlas-theme',t);}catch(_){}});})();`;

const watermarkRemovalScript = `(function(){function nuke(){var el=document.getElementById('minimax-floating-ball');if(el&&el.parentNode){el.parentNode.removeChild(el);}}if(document.readyState!=='loading'){nuke();}else{document.addEventListener('DOMContentLoaded',nuke);}setTimeout(nuke,100);setTimeout(nuke,500);setTimeout(nuke,1500);var obs=new MutationObserver(function(){nuke();});if(document.body){obs.observe(document.body,{childList:true,subtree:true});}});`;

/* Scroll reveal — IntersectionObserver with deferred run + safety net.
   The safety net ensures that every data-reveal element eventually becomes
   visible, even if the observer never fires (e.g. when the browser doesn't
   scroll the page during a full-page screenshot capture, or if the user
   navigates to a section via skip-link). */
const revealScript = `(function(){function run(){var els=document.querySelectorAll('[data-reveal]');if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('is-in');});return;}var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -4% 0px',threshold:0.05});els.forEach(function(el){io.observe(el);});setTimeout(function(){document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(function(el){el.classList.add('is-in');});},1500);}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}})();`;

/* Navbar scroll state */
const navScrollScript = `(function(){function run(){var nav=document.querySelector('[data-nav-shell]');if(!nav)return;var raf=0;function update(){var y=window.scrollY||window.pageYOffset||0;nav.dataset.scrolled=y>12?'true':'false';}window.addEventListener('scroll',function(){if(raf)return;raf=requestAnimationFrame(function(){update();raf=0;});},{passive:true});update();}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}})();`;

/* Number counters */
const counterScript = `(function(){function run(){if(!('IntersectionObserver' in window))return;var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;io.unobserve(el);var to=parseFloat(el.getAttribute('data-count-to'));if(isNaN(to))return;var dur=1000;var start=performance.now();var fmt=el.getAttribute('data-count-suffix')||'';function step(t){var p=Math.min(1,(t-start)/dur);var eased=1-Math.pow(1-p,3);var val=Math.round(eased*to);el.textContent=val+fmt;}step(start);function loop(t){if(t-start>=dur){el.textContent=to+fmt;return;}step(t);requestAnimationFrame(loop);}requestAnimationFrame(loop);});},{threshold:0.4});document.querySelectorAll('[data-count]').forEach(function(el){io.observe(el);});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}})();`;

/* i18n runtime — swaps [data-i18n] textContent based on selected language. */
const i18nDictJson = JSON.stringify(translations);
const i18nLangsJson = JSON.stringify(LANGS);
const i18nDefault = JSON.stringify(DEFAULT_LANG);
const i18nScript = `(function(){var DICT=${i18nDictJson};var LANGS=${i18nLangsJson};var DEFAULT=${i18nDefault};var KEY='atlas-lang';var THEME_KEY='atlas-theme';function detect(){try{var hashParams=new URLSearchParams(location.search);var qp=hashParams.get('_lang');if(qp&&DICT[qp]){try{localStorage.setItem(KEY,qp);}catch(e){}return qp;}var saved=localStorage.getItem(KEY);if(saved&&DICT[saved])return saved;}catch(e){}var nav=(navigator.language||'en').toLowerCase();var match=LANGS.find(function(l){return nav.indexOf(l.code)===0;});return match?match.code:DEFAULT;}function detectTheme(){try{var hashParams=new URLSearchParams(location.search);var qp=hashParams.get('_theme');if(qp==='dark'||qp==='light'){try{localStorage.setItem(THEME_KEY,qp);}catch(e){}document.documentElement.classList.toggle('dark',qp==='dark');document.documentElement.dataset.theme=qp;return qp;}}catch(e){}var saved=localStorage.getItem(THEME_KEY);if(saved==='dark'||saved==='light')return saved;return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}function apply(lang){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(DICT[lang]&&DICT[lang][k]!=null)el.textContent=DICT[lang][k];});document.querySelectorAll('[data-i18n-attr]').forEach(function(el){var k=el.getAttribute('data-i18n-attr');if(!k)return;var v=DICT[lang]&&DICT[lang][k]!=null?DICT[lang][k]:DICT[DEFAULT][k];if(v==null)return;el.setAttribute('aria-label',v);});document.querySelectorAll('[data-lang-option]').forEach(function(el){el.setAttribute('aria-current',el.getAttribute('data-lang-option')===lang?'true':'false');});var cur=document.querySelector('[data-lang-current]');if(cur)cur.textContent=lang.toUpperCase();}function setLang(lang){try{localStorage.setItem(KEY,lang);}catch(e){}apply(lang);}function attachHandlers(){document.addEventListener('click',function(e){var opt=e.target.closest('[data-lang-option]');if(opt){e.preventDefault();setLang(opt.getAttribute('data-lang-option'));var menu=document.querySelector('[data-lang-menu]');if(menu)menu.setAttribute('data-open','false');var btn=document.querySelector('[data-lang-toggle]');if(btn)btn.setAttribute('aria-expanded','false');return;}var tog=e.target.closest('[data-lang-toggle]');if(tog){e.preventDefault();var m=document.querySelector('[data-lang-menu]');if(!m)return;var open=m.getAttribute('data-open')==='true';m.setAttribute('data-open',open?'false':'true');tog.setAttribute('aria-expanded',open?'false':'true');return;}if(!e.target.closest('[data-lang-menu]')&&!e.target.closest('[data-lang-toggle]')){var m2=document.querySelector('[data-lang-menu]');if(m2)m2.setAttribute('data-open','false');var btn2=document.querySelector('[data-lang-toggle]');if(btn2)btn2.setAttribute('aria-expanded','false');}});document.addEventListener('keydown',function(e){if(e.key==='Escape'){var m=document.querySelector('[data-lang-menu]');if(m)m.setAttribute('data-open','false');}});}function init(){var theme=detectTheme();if(theme==='dark')document.documentElement.classList.add('dark');document.documentElement.dataset.theme=theme;var lang=detect();requestAnimationFrame(function(){requestAnimationFrame(function(){apply(lang);});});attachHandlers();}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();`;

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
        <script dangerouslySetInnerHTML={{ __html: i18nScript }} />
      </body>
    </html>
  );
}
