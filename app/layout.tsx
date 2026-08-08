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
