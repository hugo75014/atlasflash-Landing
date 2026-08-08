import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://app.atlasflash.com"),
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://app.atlasflash.com",
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
    icon: [
      {
        url:
          "data:image/svg+xml;utf8," +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5cb0ff"/><stop offset="50%" stop-color="#3a86f5"/><stop offset="100%" stop-color="#2456db"/></linearGradient><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#d4d4d8"/><stop offset="100%" stop-color="#71717a"/></linearGradient><linearGradient id="p" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#818cf8"/><stop offset="100%" stop-color="#4338ca"/></linearGradient><linearGradient id="sw" x1="0" y1="0" x2="1" y2="0.4"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient><linearGradient id="i" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a9eff"/><stop offset="100%" stop-color="#2563eb"/></linearGradient></defs><g transform="translate(50 50)"><path d="M-32 32 L0-34 L0 32 Z" fill="url(%23b)"/><path d="M0-34 L32 32 L0 32 Z" fill="url(%23s)"/><path d="M32 32 L32 26 L5 32 Z" fill="url(%23p)"/><path d="M-30 10 Q-12-6 18-2 Q28 0 32 5" fill="none" stroke="url(%23sw)" stroke-width="3" stroke-linecap="round"/><path d="M-10 18 L0 0 L10 18 Z" fill="url(%23i)"/></g></svg>'
          ),
        type: "image/svg+xml",
      },
    ],
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
      </head>
      <body className="min-h-screen text-ink-900">
        {children}
        <script dangerouslySetInnerHTML={{ __html: themeToggleScript }} />
      </body>
    </html>
  );
}
