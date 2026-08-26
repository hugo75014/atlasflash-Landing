// Multilingual dictionary for the Atlas landing page.
// Five languages: French (default), English, Spanish, Portuguese (BR), Hindi.
// All text is keyed with dot-notation (e.g. "hero.eyebrow") so the runtime
// script can swap textContent by walking the DOM.

export type Lang = "fr" | "en" | "es" | "pt" | "hi";

export const DEFAULT_LANG: Lang = "fr";

export const LANGS: { code: Lang; label: string; native: string; short: string }[] = [
  { code: "fr", label: "Français", native: "Français", short: "FR" },
  { code: "en", label: "English", native: "English", short: "EN" },
  { code: "es", label: "Español", native: "Español", short: "ES" },
  { code: "pt", label: "Português", native: "Português (BR)", short: "PT" },
  { code: "hi", label: "हिन्दी", native: "हिन्दी", short: "HI" },
];

const fr: Record<string, string> = {
  // Nav
  "nav.signin": "Se connecter",
  "nav.signup": "Créer un compte",
  "nav.theme": "Basculer entre le mode clair et le mode sombre",
  "nav.lang": "Choisir la langue",
  "nav.home": "Atlas — Accueil",

  // Hero
  "hero.eyebrow": "Atlas · AI Gateway",
  "hero.title": "Une seule API. Des centaines de modèles IA.",
  "hero.title.accent": "Gratuit d'abord.",
  "hero.subtitle":
    "Atlas orchestre automatiquement les meilleurs fournisseurs d'IA. Il utilise les crédits gratuits disponibles, bascule intelligemment lorsqu'un quota est atteint et vous évite toute la complexité de gérer plusieurs APIs.",
  "hero.cta.primary": "Créer ma clé API gratuitement",
  "hero.cta.secondary": "Se connecter",
  "hero.trust.1": "Sans carte bancaire",
  "hero.trust.2": "Compatible OpenAI",
  "hero.trust.3": "Compte créé en moins d'une minute",

  // Schema (aria)
  "schema.aria":
    "Schéma de fonctionnement d'Atlas : votre application envoie une requête, Atlas route automatiquement vers les fournisseurs, et active un Smart Fallback en cas de quota atteint.",
  "schema.app": "Votre application",
  "schema.endpoint": "POST /v1/chat/completions",
  "schema.atlas.title": "Smart Routing Engine",
  "schema.atlas.subtitle": "1 clé API · 1 endpoint · catalogue complet",
  "schema.smart": "Smart Fallback",
  "schema.smart.subtitle": "Bascule automatique",
  "schema.quota": "quota atteint",
  "schema.response": "Réponse retournée",

  // Proof band
  "proof.1.value": "160+",
  "proof.1.label": "fournisseurs",
  "proof.2.value": "Des centaines",
  "proof.2.label": "de modèles",
  "proof.3.value": "OpenAI",
  "proof.3.label": "compatible",
  "proof.4.value": "Smart Fallback",
  "proof.4.label": "automatique",
  "proof.5.value": "Gratuit",
  "proof.5.label": "avant le payant",

  // Why
  "why.eyebrow": "Pourquoi Atlas",
  "why.title": "L'infrastructure IA, sans la complexité.",
  "why.subtitle":
    "Atlas remplace la gestion d'une dizaines de fournisseurs par une seule interface fiable et unifiée.",
  "why.col.without": "Sans Atlas",
  "why.col.with": "Avec Atlas",
  "why.row.1.with": "Une seule clé API",
  "why.row.2.with": "Un seul endpoint",
  "why.row.3.with": "Automatique",
  "why.row.4.with": "Smart Fallback",
  "why.row.5.with": "Transparent",
  "why.row.6.with": "Gratuit d'abord",

  // Features
  "features.eyebrow": "Ce qu'Atlas fait automatiquement",
  "features.title": "Quatre mécanismes. Zéro configuration.",
  "features.1.title": "Smart Routing",
  "features.1.body":
    "Atlas choisit automatiquement le meilleur fournisseur selon la disponibilité, les performances et les quotas.",
  "features.2.title": "Gratuit d'abord",
  "features.2.body":
    "Atlas exploite automatiquement les crédits gratuits disponibles avant d'utiliser des ressources payantes.",
  "features.3.title": "Smart Fallback",
  "features.3.body":
    "Si un fournisseur tombe en panne, atteint son quota ou devient indisponible, Atlas bascule automatiquement. Votre application continue de fonctionner.",
  "features.4.title": "Une seule API",
  "features.4.body":
    "Plus besoin de maintenir plusieurs SDK. Une seule API compatible OpenAI pour tout le catalogue.",

  // Compatible tools
  "tools.eyebrow": "Compatible avec vos outils",
  "tools.title": "Un seul point de remplacement. Tout le reste suit.",
  "tools.subtitle":
    "Atlas expose une interface strictement compatible OpenAI. Vos outils, SDK et frameworks existants fonctionnent sans modification.",
  "tools.filename": ".env",
  "tools.section.label": "Deux variables",
  "tools.code.comment1": "# 1. Point your base URL to Atlas",
  "tools.code.export": "export",
  "tools.code.var1": "OPENAI_BASE_URL",
  "tools.code.value1": "https://app.atlasflash.com/api/v1",
  "tools.code.comment2": "# 2. Use your Atlas key",
  "tools.code.var2": "OPENAI_API_KEY",
  "tools.code.value2": "atlas_live_xxxxxxxxx",
  "tools.code.caption": "Deux variables d'environnement. Rien d'autre à modifier.",

  // How it works
  "how.eyebrow": "Comment ça fonctionne",
  "how.title": "Trois étapes. Aucun changement de code.",
  "how.1.title": "Créer gratuitement votre compte Atlas",
  "how.1.body": "Inscription en moins d'une minute. Aucune carte bancaire requise.",
  "how.2.title": "Récupérer votre clé API",
  "how.2.body": "Une seule clé. Compatible avec n'importe quel client OpenAI.",
  "how.3.title": "Atlas choisit automatiquement le meilleur fournisseur",
  "how.3.body": "Vous ne changez rien à votre code. Atlas orchestre tout pour vous.",

  // Pricing
  "pricing.eyebrow": "Tarifs",
  "pricing.title": "Un seul curseur : combien de fournisseurs tu branches.",
  "pricing.subtitle":
    "Atlas ne vend pas de tokens. Tes clés appellent tes comptes, ta facture reste la tienne. On ne plafonne jamais ta consommation — la seule limite est celle de ton fournisseur.",
  "pricing.badge": "le plus choisi",
  "pricing.alt": "inclus",
  "pricing.free.name": "Free",
  "pricing.free.price": "0 €",
  "pricing.free.cadence": "à vie",
  "pricing.free.body":
    "Pas un essai. Crée ta clé Atlas, colle-la dans Cursor, VS Code ou Cline, tu travailles. Jusqu'à 10 fournisseurs branchés — de quoi construire un projet entier.",
  "pricing.free.cta": "Commencer gratuitement",
  "pricing.pro.name": "Pro",
  "pricing.pro.price": "5 €",
  "pricing.pro.cadence": "/ mois",
  "pricing.pro.body":
    "50 connexions. Vise plus de 1,5 milliard de tokens par mois en agrégeant les offres gratuites.",
  "pricing.pro.cta": "Passer en Pro",
  "pricing.unlimited.name": "Unlimited",
  "pricing.unlimited.price": "10 €",
  "pricing.unlimited.cadence": "/ mois",
  "pricing.unlimited.body":
    "Connexions sans limite. Pour les agents et outils qui branchent des dizaines de fournisseurs en parallèle.",
  "pricing.unlimited.cta": "Passer en Unlimited",
  "pricing.feature": "Feature",
  "pricing.col.free": "Free — 0 €",
  "pricing.col.pro": "Pro — 5 €/mois",
  "pricing.col.unlimited": "Unlimited — 10 €/mois",
  "pricing.row.1": "Clé API Atlas, utilisable dans tout IDE",
  "pricing.row.2": "Démarrage sans aucune clé fournisseur",
  "pricing.row.3": "Connexions fournisseur",
  "pricing.row.3.free": "10",
  "pricing.row.3.pro": "50",
  "pricing.row.3.unlimited": "illimité",
  "pricing.row.4": "Plafond de tokens / requêtes",
  "pricing.row.4.any": "aucun",
  "pricing.row.5": "Routage intelligent + repli automatique",
  "pricing.row.6": "Format OpenAI /v1/chat/completions",
  "pricing.source":
    "Source unique : control-plane/src/plans/catalogue.ts. Aucun plafond de tokens, jamais.",

  // FAQ
  "faq.eyebrow": "Questions fréquentes",
  "faq.title": "Tout ce qu'il faut savoir.",
  "faq.1.q": "Est-ce vraiment gratuit ?",
  "faq.1.a":
    "Oui. Atlas exploite automatiquement les crédits gratuits offerts par les fournisseurs avant d'utiliser des ressources payantes. Vous ne payez que ce qu'Atlas ne peut pas couvrir gratuitement.",
  "faq.2.q": "Dois-je modifier mon code ?",
  "faq.2.a":
    "Non. Atlas expose une interface strictement compatible OpenAI. Il suffit de changer deux variables d'environnement (OPENAI_BASE_URL et OPENAI_API_KEY) et votre code reste inchangé.",
  "faq.3.q": "Que se passe-t-il lorsqu'un quota est atteint ?",
  "faq.3.a":
    "Atlas bascule automatiquement vers un autre fournisseur disponible grâce à son Smart Fallback. Votre application reçoit une réponse sans erreur 429 et sans intervention manuelle.",
  "faq.4.q": "Mes clés API sont-elles sécurisées ?",
  "faq.4.a":
    "Les clés sont chiffrées au repos, isolées par compte, et ne sont jamais exposées au client. L'accès à l'API se fait exclusivement via votre clé Atlas.",
  "faq.5.q": "Puis-je utiliser mes propres fournisseurs ?",
  "faq.5.a":
    "Atlas orchestre un large catalogue de fournisseurs par défaut. L'ajout de clés personnelles est en cours et sera disponible prochainement.",

  // Final CTA
  "final.title": "Arrêtez de gérer vos fournisseurs IA.",
  "final.subtitle":
    "Atlas s'occupe du routage, des quotas, du Smart Fallback et de l'orchestration. Vous développez. Atlas fait le reste.",
  "final.cta.primary": "Créer mon compte gratuitement",
  "final.cta.secondary": "Se connecter",
  "final.trust": "Sans carte bancaire · Compte créé en moins d'une minute",

  // Footer
  "footer.tagline":
    "Le pilote automatique de vos appels IA. Une seule API, des centaines de modèles, gratuit d'abord.",
  "footer.col.atlas": "Atlas",
  "footer.col.product": "Produit",
  "footer.col.legal": "Légal",
  "footer.link.signin": "Connexion",
  "footer.link.signup": "Créer un compte",
  "footer.link.smart_routing": "Smart Routing",
  "footer.link.smart_fallback": "Smart Fallback",
  "footer.link.compatible": "Compatible OpenAI",
  "footer.link.terms": "Conditions",
  "footer.link.privacy": "Confidentialité",
  "footer.copyright": "© 2026 Atlas. Tous droits réservés.",
  "footer.brand": "app.atlasflash.com",
};

const en: Record<string, string> = {
  "nav.signin": "Sign in",
  "nav.signup": "Create account",
  "nav.theme": "Toggle light and dark mode",
  "nav.lang": "Select language",
  "nav.home": "Atlas — Home",

  "hero.eyebrow": "Atlas · AI Gateway",
  "hero.title": "One API. Hundreds of AI models.",
  "hero.title.accent": "Free first.",
  "hero.subtitle":
    "Atlas automatically orchestrates the best AI providers. It uses available free credits, falls back intelligently when a quota is reached, and saves you from the complexity of managing multiple APIs.",
  "hero.cta.primary": "Create my API key — free",
  "hero.cta.secondary": "Sign in",
  "hero.trust.1": "No credit card",
  "hero.trust.2": "OpenAI-compatible",
  "hero.trust.3": "Account created in under a minute",

  "schema.aria":
    "Schema of how Atlas works: your application sends a request, Atlas routes automatically to providers, and activates a Smart Fallback when a quota is reached.",
  "schema.app": "Your application",
  "schema.endpoint": "POST /v1/chat/completions",
  "schema.atlas.title": "Smart Routing Engine",
  "schema.atlas.subtitle": "1 API key · 1 endpoint · full catalog",
  "schema.smart": "Smart Fallback",
  "schema.smart.subtitle": "Automatic failover",
  "schema.quota": "quota reached",
  "schema.response": "Response returned",

  "proof.1.value": "160+",
  "proof.1.label": "providers",
  "proof.2.value": "Hundreds",
  "proof.2.label": "of models",
  "proof.3.value": "OpenAI",
  "proof.3.label": "compatible",
  "proof.4.value": "Smart Fallback",
  "proof.4.label": "automatic",
  "proof.5.value": "Free",
  "proof.5.label": "before paid",

  "why.eyebrow": "Why Atlas",
  "why.title": "AI infrastructure, without the complexity.",
  "why.subtitle":
    "Atlas replaces the management of dozens of providers with a single, reliable and unified interface.",
  "why.col.without": "Without Atlas",
  "why.col.with": "With Atlas",
  "why.row.1.with": "One API key",
  "why.row.2.with": "One endpoint",
  "why.row.3.with": "Automatic",
  "why.row.4.with": "Smart Fallback",
  "why.row.5.with": "Transparent",
  "why.row.6.with": "Free first",

  "features.eyebrow": "What Atlas does automatically",
  "features.title": "Four mechanisms. Zero configuration.",
  "features.1.title": "Smart Routing",
  "features.1.body":
    "Atlas automatically picks the best provider based on availability, performance, and quotas.",
  "features.2.title": "Free first",
  "features.2.body":
    "Atlas automatically leverages available free credits before tapping paid resources.",
  "features.3.title": "Smart Fallback",
  "features.3.body":
    "If a provider goes down, hits its quota or becomes unavailable, Atlas automatically switches. Your app keeps running.",
  "features.4.title": "One single API",
  "features.4.body":
    "No need to maintain multiple SDKs. One OpenAI-compatible API for the entire catalog.",

  "tools.eyebrow": "Compatible with your tools",
  "tools.title": "One point of replacement. Everything else follows.",
  "tools.subtitle":
    "Atlas exposes a strictly OpenAI-compatible interface. Your existing tools, SDKs, and frameworks work without any modification.",
  "tools.filename": ".env",
  "tools.section.label": "Two variables",
  "tools.code.comment1": "# 1. Point your base URL to Atlas",
  "tools.code.export": "export",
  "tools.code.var1": "OPENAI_BASE_URL",
  "tools.code.value1": "https://app.atlasflash.com/api/v1",
  "tools.code.comment2": "# 2. Use your Atlas key",
  "tools.code.var2": "OPENAI_API_KEY",
  "tools.code.value2": "atlas_live_xxxxxxxxx",
  "tools.code.caption": "Two environment variables. Nothing else to change.",

  "how.eyebrow": "How it works",
  "how.title": "Three steps. Zero code changes.",
  "how.1.title": "Create your free Atlas account",
  "how.1.body": "Sign up in under a minute. No credit card required.",
  "how.2.title": "Grab your API key",
  "how.2.body": "One key. Compatible with any OpenAI client.",
  "how.3.title": "Atlas automatically picks the best provider",
  "how.3.body": "You don't change a line of code. Atlas orchestrates everything for you.",

  "pricing.eyebrow": "Pricing",
  "pricing.title": "One knob: how many providers you wire up.",
  "pricing.subtitle":
    "Atlas doesn't sell tokens. Your keys call your accounts, your bill stays yours. We never cap your usage — the only limit is your provider's.",
  "pricing.badge": "most popular",
  "pricing.alt": "included",
  "pricing.free.name": "Free",
  "pricing.free.price": "$0",
  "pricing.free.cadence": "forever",
  "pricing.free.body":
    "Not a trial. Create your Atlas key, drop it into Cursor, VS Code or Cline, you're off. Up to 10 wired providers — enough to ship a full project.",
  "pricing.free.cta": "Start for free",
  "pricing.pro.name": "Pro",
  "pricing.pro.price": "$5",
  "pricing.pro.cadence": "/ month",
  "pricing.pro.body":
    "50 connections. Hit 1.5B+ tokens a month by aggregating free tiers across providers.",
  "pricing.pro.cta": "Go Pro",
  "pricing.unlimited.name": "Unlimited",
  "pricing.unlimited.price": "$10",
  "pricing.unlimited.cadence": "/ month",
  "pricing.unlimited.body":
    "Unlimited connections. For agents and tools that wire up dozens of providers in parallel.",
  "pricing.unlimited.cta": "Go Unlimited",
  "pricing.feature": "Feature",
  "pricing.col.free": "Free — $0",
  "pricing.col.pro": "Pro — $5 / month",
  "pricing.col.unlimited": "Unlimited — $10 / month",
  "pricing.row.1": "Atlas API key, usable in any IDE",
  "pricing.row.2": "Boot up with zero provider keys",
  "pricing.row.3": "Provider connections",
  "pricing.row.3.free": "10",
  "pricing.row.3.pro": "50",
  "pricing.row.3.unlimited": "unlimited",
  "pricing.row.4": "Token / request cap",
  "pricing.row.4.any": "none",
  "pricing.row.5": "Smart routing + automatic failover",
  "pricing.row.6": "OpenAI /v1/chat/completions format",
  "pricing.source":
    "Single source of truth: control-plane/src/plans/catalogue.ts. No token caps. Ever.",

  "faq.eyebrow": "Frequently asked",
  "faq.title": "Everything you need to know.",
  "faq.1.q": "Is it really free?",
  "faq.1.a":
    "Yes. Atlas automatically leverages the free credits offered by providers before tapping paid resources. You only pay for what Atlas can't cover for free.",
  "faq.2.q": "Do I need to change my code?",
  "faq.2.a":
    "No. Atlas exposes a strictly OpenAI-compatible interface. Just change two environment variables (OPENAI_BASE_URL and OPENAI_API_KEY) and your code stays unchanged.",
  "faq.3.q": "What happens when a quota is hit?",
  "faq.3.a":
    "Atlas automatically switches to another available provider via its Smart Fallback. Your app gets a response with no 429 error and no manual intervention.",
  "faq.4.q": "Are my API keys secure?",
  "faq.4.a":
    "Keys are encrypted at rest, isolated per account, and never exposed to the client. API access happens exclusively via your Atlas key.",
  "faq.5.q": "Can I use my own providers?",
  "faq.5.a":
    "Atlas orchestrates a wide catalog of providers by default. Adding personal keys is in progress and will be available soon.",

  "final.title": "Stop managing your AI providers.",
  "final.subtitle":
    "Atlas handles routing, quotas, Smart Fallback and orchestration. You build. Atlas does the rest.",
  "final.cta.primary": "Create my free account",
  "final.cta.secondary": "Sign in",
  "final.trust": "No credit card · Account created in under a minute",

  "footer.tagline":
    "The autopilot for your AI calls. One API, hundreds of models, free first.",
  "footer.col.atlas": "Atlas",
  "footer.col.product": "Product",
  "footer.col.legal": "Legal",
  "footer.link.signin": "Sign in",
  "footer.link.signup": "Create account",
  "footer.link.smart_routing": "Smart Routing",
  "footer.link.smart_fallback": "Smart Fallback",
  "footer.link.compatible": "OpenAI compatible",
  "footer.link.terms": "Terms",
  "footer.link.privacy": "Privacy",
  "footer.copyright": "© 2026 Atlas. All rights reserved.",
  "footer.brand": "app.atlasflash.com",
};

const es: Record<string, string> = {
  "nav.signin": "Iniciar sesión",
  "nav.signup": "Crear cuenta",
  "nav.theme": "Cambiar entre modo claro y oscuro",
  "nav.lang": "Elegir idioma",
  "nav.home": "Atlas — Inicio",

  "hero.eyebrow": "Atlas · AI Gateway",
  "hero.title": "Una sola API. Cientos de modelos de IA.",
  "hero.title.accent": "Gratis al principio.",
  "hero.subtitle":
    "Atlas organiza automáticamente los mejores proveedores de IA. Usa los créditos gratuitos disponibles, cambia inteligentemente cuando se alcanza una cuota y te evita toda la complejidad de gestionar varias APIs.",
  "hero.cta.primary": "Crear mi clave API gratis",
  "hero.cta.secondary": "Iniciar sesión",
  "hero.trust.1": "Sin tarjeta de crédito",
  "hero.trust.2": "Compatible con OpenAI",
  "hero.trust.3": "Cuenta creada en menos de un minuto",

  "schema.aria":
    "Esquema de funcionamiento de Atlas: tu aplicación envía una solicitud, Atlas enruta automáticamente a los proveedores y activa un Smart Fallback cuando se alcanza una cuota.",
  "schema.app": "Tu aplicación",
  "schema.endpoint": "POST /v1/chat/completions",
  "schema.atlas.title": "Smart Routing Engine",
  "schema.atlas.subtitle": "1 clave API · 1 endpoint · catálogo completo",
  "schema.smart": "Smart Fallback",
  "schema.smart.subtitle": "Conmutación automática",
  "schema.quota": "cuota alcanzada",
  "schema.response": "Respuesta devuelta",

  "proof.1.value": "160+",
  "proof.1.label": "proveedores",
  "proof.2.value": "Cientos",
  "proof.2.label": "de modelos",
  "proof.3.value": "OpenAI",
  "proof.3.label": "compatible",
  "proof.4.value": "Smart Fallback",
  "proof.4.label": "automático",
  "proof.5.value": "Gratis",
  "proof.5.label": "antes del pago",

  "why.eyebrow": "Por qué Atlas",
  "why.title": "Infraestructura de IA, sin la complejidad.",
  "why.subtitle":
    "Atlas reemplaza la gestión de decenas de proveedores por una única interfaz fiable y unificada.",
  "why.col.without": "Sin Atlas",
  "why.col.with": "Con Atlas",
  "why.row.1.with": "Una sola clave API",
  "why.row.2.with": "Un solo endpoint",
  "why.row.3.with": "Automático",
  "why.row.4.with": "Smart Fallback",
  "why.row.5.with": "Transparente",
  "why.row.6.with": "Gratis al principio",

  "features.eyebrow": "Lo que Atlas hace automáticamente",
  "features.title": "Cuatro mecanismos. Cero configuración.",
  "features.1.title": "Smart Routing",
  "features.1.body":
    "Atlas elige automáticamente el mejor proveedor según la disponibilidad, el rendimiento y las cuotas.",
  "features.2.title": "Gratis al principio",
  "features.2.body":
    "Atlas aprovecha automáticamente los créditos gratuitos disponibles antes de usar recursos de pago.",
  "features.3.title": "Smart Fallback",
  "features.3.body":
    "Si un proveedor cae, alcanza su cuota o deja de estar disponible, Atlas cambia automáticamente. Tu aplicación sigue funcionando.",
  "features.4.title": "Una sola API",
  "features.4.body":
    "Sin necesidad de mantener varios SDK. Una sola API compatible con OpenAI para todo el catálogo.",

  "tools.eyebrow": "Compatible con tus herramientas",
  "tools.title": "Un solo punto de reemplazo. Todo lo demás sigue.",
  "tools.subtitle":
    "Atlas expone una interfaz estrictamente compatible con OpenAI. Tus herramientas, SDK y frameworks existentes funcionan sin ninguna modificación.",
  "tools.filename": ".env",
  "tools.section.label": "Dos variables",
  "tools.code.comment1": "# 1. Apunta tu base URL a Atlas",
  "tools.code.export": "export",
  "tools.code.var1": "OPENAI_BASE_URL",
  "tools.code.value1": "https://app.atlasflash.com/api/v1",
  "tools.code.comment2": "# 2. Usa tu clave Atlas",
  "tools.code.var2": "OPENAI_API_KEY",
  "tools.code.value2": "atlas_live_xxxxxxxxx",
  "tools.code.caption": "Dos variables de entorno. Nada más que cambiar.",

  "how.eyebrow": "Cómo funciona",
  "how.title": "Tres pasos. Cero cambios de código.",
  "how.1.title": "Crea tu cuenta gratis de Atlas",
  "how.1.body": "Registro en menos de un minuto. Sin tarjeta de crédito.",
  "how.2.title": "Obtén tu clave API",
  "how.2.body": "Una sola clave. Compatible con cualquier cliente OpenAI.",
  "how.3.title": "Atlas elige automáticamente el mejor proveedor",
  "how.3.body": "No cambias una línea de código. Atlas organiza todo por ti.",

  "pricing.eyebrow": "Precios",
  "pricing.title": "Un solo control: cuántos proveedores conectas.",
  "pricing.subtitle":
    "Atlas no vende tokens. Tus claves llaman a tus cuentas, tu factura sigue siendo tuya. Nunca limitamos tu consumo: el único límite es el de tu proveedor.",
  "pricing.badge": "más elegido",
  "pricing.alt": "incluido",
  "pricing.free.name": "Free",
  "pricing.free.price": "0 €",
  "pricing.free.cadence": "para siempre",
  "pricing.free.body":
    "No es una prueba. Crea tu clave Atlas, pégala en Cursor, VS Code o Cline y empieza. Hasta 10 proveedores conectados: suficiente para lanzar un proyecto entero.",
  "pricing.free.cta": "Empezar gratis",
  "pricing.pro.name": "Pro",
  "pricing.pro.price": "5 €",
  "pricing.pro.cadence": "/ mes",
  "pricing.pro.body":
    "50 conexiones. Alcanza más de 1.500 millones de tokens al mes agregando los planes gratuitos de los proveedores.",
  "pricing.pro.cta": "Pasar a Pro",
  "pricing.unlimited.name": "Unlimited",
  "pricing.unlimited.price": "10 €",
  "pricing.unlimited.cadence": "/ mes",
  "pricing.unlimited.body":
    "Conexiones ilimitadas. Para agentes y herramientas que conectan decenas de proveedores en paralelo.",
  "pricing.unlimited.cta": "Pasar a Unlimited",
  "pricing.feature": "Característica",
  "pricing.col.free": "Free — 0 €",
  "pricing.col.pro": "Pro — 5 €/mes",
  "pricing.col.unlimited": "Unlimited — 10 €/mes",
  "pricing.row.1": "Clave API Atlas, utilizable en cualquier IDE",
  "pricing.row.2": "Arranque sin ninguna clave de proveedor",
  "pricing.row.3": "Conexiones de proveedor",
  "pricing.row.3.free": "10",
  "pricing.row.3.pro": "50",
  "pricing.row.3.unlimited": "ilimitado",
  "pricing.row.4": "Límite de tokens / solicitudes",
  "pricing.row.4.any": "ninguno",
  "pricing.row.5": "Enrutamiento inteligente + conmutación automática",
  "pricing.row.6": "Formato OpenAI /v1/chat/completions",
  "pricing.source":
    "Fuente única: control-plane/src/plans/catalogue.ts. Sin límite de tokens. Nunca.",

  "faq.eyebrow": "Preguntas frecuentes",
  "faq.title": "Todo lo que necesitas saber.",
  "faq.1.q": "¿Es realmente gratis?",
  "faq.1.a":
    "Sí. Atlas aprovecha automáticamente los créditos gratuitos que ofrecen los proveedores antes de usar recursos de pago. Solo pagas por lo que Atlas no puede cubrir gratis.",
  "faq.2.q": "¿Tengo que cambiar mi código?",
  "faq.2.a":
    "No. Atlas expone una interfaz estrictamente compatible con OpenAI. Basta con cambiar dos variables de entorno (OPENAI_BASE_URL y OPENAI_API_KEY) y tu código queda igual.",
  "faq.3.q": "¿Qué pasa cuando se alcanza una cuota?",
  "faq.3.a":
    "Atlas cambia automáticamente a otro proveedor disponible mediante su Smart Fallback. Tu aplicación recibe una respuesta sin error 429 y sin intervención manual.",
  "faq.4.q": "¿Están seguras mis claves API?",
  "faq.4.a":
    "Las claves están cifradas en reposo, aisladas por cuenta y nunca se exponen al cliente. El acceso a la API se realiza exclusivamente mediante tu clave Atlas.",
  "faq.5.q": "¿Puedo usar mis propios proveedores?",
  "faq.5.a":
    "Atlas organiza un amplio catálogo de proveedores por defecto. La opción de añadir claves personales está en desarrollo y estará disponible próximamente.",

  "final.title": "Deja de gestionar tus proveedores de IA.",
  "final.subtitle":
    "Atlas se encarga del enrutamiento, las cuotas, el Smart Fallback y la orquestación. Tú desarrollas. Atlas hace el resto.",
  "final.cta.primary": "Crear mi cuenta gratis",
  "final.cta.secondary": "Iniciar sesión",
  "final.trust": "Sin tarjeta de crédito · Cuenta creada en menos de un minuto",

  "footer.tagline":
    "El piloto automático para tus llamadas de IA. Una sola API, cientos de modelos, gratis al principio.",
  "footer.col.atlas": "Atlas",
  "footer.col.product": "Producto",
  "footer.col.legal": "Legal",
  "footer.link.signin": "Iniciar sesión",
  "footer.link.signup": "Crear cuenta",
  "footer.link.smart_routing": "Smart Routing",
  "footer.link.smart_fallback": "Smart Fallback",
  "footer.link.compatible": "Compatible con OpenAI",
  "footer.link.terms": "Condiciones",
  "footer.link.privacy": "Privacidad",
  "footer.copyright": "© 2026 Atlas. Todos los derechos reservados.",
  "footer.brand": "app.atlasflash.com",
};

const pt: Record<string, string> = {
  "nav.signin": "Entrar",
  "nav.signup": "Criar conta",
  "nav.theme": "Alternar entre modo claro e escuro",
  "nav.lang": "Escolher idioma",
  "nav.home": "Atlas — Início",

  "hero.eyebrow": "Atlas · AI Gateway",
  "hero.title": "Uma única API. Centenas de modelos de IA.",
  "hero.title.accent": "Grátis primeiro.",
  "hero.subtitle":
    "O Atlas orquestra automaticamente os melhores provedores de IA. Usa os créditos gratuitos disponíveis, troca de provedor de forma inteligente quando uma cota é atingida e elimina toda a complexidade de gerenciar várias APIs.",
  "hero.cta.primary": "Criar minha chave API grátis",
  "hero.cta.secondary": "Entrar",
  "hero.trust.1": "Sem cartão de crédito",
  "hero.trust.2": "Compatível com OpenAI",
  "hero.trust.3": "Conta criada em menos de um minuto",

  "schema.aria":
    "Esquema de funcionamento do Atlas: seu aplicativo envia uma requisição, o Atlas roteia automaticamente para os provedores e ativa um Smart Fallback quando uma cota é atingida.",
  "schema.app": "Seu aplicativo",
  "schema.endpoint": "POST /v1/chat/completions",
  "schema.atlas.title": "Smart Routing Engine",
  "schema.atlas.subtitle": "1 chave API · 1 endpoint · catálogo completo",
  "schema.smart": "Smart Fallback",
  "schema.smart.subtitle": "Comutação automática",
  "schema.quota": "cota atingida",
  "schema.response": "Resposta retornada",

  "proof.1.value": "160+",
  "proof.1.label": "provedores",
  "proof.2.value": "Centenas",
  "proof.2.label": "de modelos",
  "proof.3.value": "OpenAI",
  "proof.3.label": "compatível",
  "proof.4.value": "Smart Fallback",
  "proof.4.label": "automático",
  "proof.5.value": "Grátis",
  "proof.5.label": "antes do pago",

  "why.eyebrow": "Por que Atlas",
  "why.title": "Infraestrutura de IA, sem a complexidade.",
  "why.subtitle":
    "O Atlas substitui o gerenciamento de dezenas de provedores por uma interface única, confiável e unificada.",
  "why.col.without": "Sem Atlas",
  "why.col.with": "Com Atlas",
  "why.row.1.with": "Uma única chave API",
  "why.row.2.with": "Um único endpoint",
  "why.row.3.with": "Automático",
  "why.row.4.with": "Smart Fallback",
  "why.row.5.with": "Transparente",
  "why.row.6.with": "Grátis primeiro",

  "features.eyebrow": "O que o Atlas faz automaticamente",
  "features.title": "Quatro mecanismos. Zero configuração.",
  "features.1.title": "Smart Routing",
  "features.1.body":
    "O Atlas escolhe automaticamente o melhor provedor com base em disponibilidade, desempenho e cotas.",
  "features.2.title": "Grátis primeiro",
  "features.2.body":
    "O Atlas aproveita automaticamente os créditos gratuitos disponíveis antes de usar recursos pagos.",
  "features.3.title": "Smart Fallback",
  "features.3.body":
    "Se um provedor cai, atinge sua cota ou fica indisponível, o Atlas troca automaticamente. Seu app continua funcionando.",
  "features.4.title": "Uma única API",
  "features.4.body":
    "Sem precisar manter vários SDKs. Uma única API compatível com OpenAI para todo o catálogo.",

  "tools.eyebrow": "Compatível com suas ferramentas",
  "tools.title": "Um único ponto de substituição. Todo o resto segue.",
  "tools.subtitle":
    "O Atlas expõe uma interface estritamente compatível com OpenAI. Suas ferramentas, SDKs e frameworks existentes funcionam sem nenhuma modificação.",
  "tools.filename": ".env",
  "tools.section.label": "Duas variáveis",
  "tools.code.comment1": "# 1. Aponte sua base URL para o Atlas",
  "tools.code.export": "export",
  "tools.code.var1": "OPENAI_BASE_URL",
  "tools.code.value1": "https://app.atlasflash.com/api/v1",
  "tools.code.comment2": "# 2. Use sua chave Atlas",
  "tools.code.var2": "OPENAI_API_KEY",
  "tools.code.value2": "atlas_live_xxxxxxxxx",
  "tools.code.caption": "Duas variáveis de ambiente. Nada mais para mudar.",

  "how.eyebrow": "Como funciona",
  "how.title": "Três passos. Zero mudança de código.",
  "how.1.title": "Crie sua conta gratuita do Atlas",
  "how.1.body": "Cadastro em menos de um minuto. Sem cartão de crédito.",
  "how.2.title": "Pegue sua chave API",
  "how.2.body": "Uma única chave. Compatível com qualquer cliente OpenAI.",
  "how.3.title": "O Atlas escolhe automaticamente o melhor provedor",
  "how.3.body": "Você não muda uma linha de código. O Atlas orquestra tudo para você.",

  "pricing.eyebrow": "Preços",
  "pricing.title": "Um único controle: quantos provedores você conecta.",
  "pricing.subtitle":
    "O Atlas não vende tokens. Suas chamam suas contas, sua conta continua sendo sua. Nunca limitamos seu consumo — o único limite é o do seu provedor.",
  "pricing.badge": "mais escolhido",
  "pricing.alt": "incluído",
  "pricing.free.name": "Free",
  "pricing.free.price": "R$ 0",
  "pricing.free.cadence": "para sempre",
  "pricing.free.body":
    "Não é um teste. Crie sua chave Atlas, cole no Cursor, VS Code ou Cline e pronto. Até 10 provedores conectados — suficiente para entregar um projeto inteiro.",
  "pricing.free.cta": "Começar grátis",
  "pricing.pro.name": "Pro",
  "pricing.pro.price": "R$ 30",
  "pricing.pro.cadence": "/ mês",
  "pricing.pro.body":
    "50 conexões. Atinja mais de 1,5 bilhão de tokens por mês agregando os planos gratuitos dos provedores.",
  "pricing.pro.cta": "Ir para Pro",
  "pricing.unlimited.name": "Unlimited",
  "pricing.unlimited.price": "R$ 60",
  "pricing.unlimited.cadence": "/ mês",
  "pricing.unlimited.body":
    "Conexões ilimitadas. Para agentes e ferramentas que conectam dezenas de provedores em paralelo.",
  "pricing.unlimited.cta": "Ir para Unlimited",
  "pricing.feature": "Recurso",
  "pricing.col.free": "Free — R$ 0",
  "pricing.col.pro": "Pro — R$ 30 / mês",
  "pricing.col.unlimited": "Unlimited — R$ 60 / mês",
  "pricing.row.1": "Chave API Atlas, usável em qualquer IDE",
  "pricing.row.2": "Início sem nenhuma chave de provedor",
  "pricing.row.3": "Conexões de provedor",
  "pricing.row.3.free": "10",
  "pricing.row.3.pro": "50",
  "pricing.row.3.unlimited": "ilimitado",
  "pricing.row.4": "Limite de tokens / requisições",
  "pricing.row.4.any": "nenhum",
  "pricing.row.5": "Roteamento inteligente + comutação automática",
  "pricing.row.6": "Formato OpenAI /v1/chat/completions",
  "pricing.source":
    "Fonte única: control-plane/src/plans/catalogue.ts. Sem limite de tokens. Nunca.",

  "faq.eyebrow": "Perguntas frequentes",
  "faq.title": "Tudo o que você precisa saber.",
  "faq.1.q": "É realmente grátis?",
  "faq.1.a":
    "Sim. O Atlas aproveita automaticamente os créditos gratuitos oferecidos pelos provedores antes de usar recursos pagos. Você só paga pelo que o Atlas não consegue cobrir de graça.",
  "faq.2.q": "Preciso mudar meu código?",
  "faq.2.a":
    "Não. O Atlas expõe uma interface estritamente compatível com OpenAI. Basta alterar duas variáveis de ambiente (OPENAI_BASE_URL e OPENAI_API_KEY) e seu código continua igual.",
  "faq.3.q": "O que acontece quando uma cota é atingida?",
  "faq.3.a":
    "O Atlas alterna automaticamente para outro provedor disponível por meio do Smart Fallback. Seu aplicativo recebe uma resposta sem erro 429 e sem intervenção manual.",
  "faq.4.q": "Minhas chaves API estão seguras?",
  "faq.4.a":
    "As chaves são criptografadas em repouso, isoladas por conta e nunca expostas ao cliente. O acesso à API acontece exclusivamente pela sua chave Atlas.",
  "faq.5.q": "Posso usar meus próprios provedores?",
  "faq.5.a":
    "O Atlas orquestra um amplo catálogo de provedores por padrão. A opção de adicionar chaves pessoais está em desenvolvimento e ficará disponível em breve.",

  "final.title": "Pare de gerenciar seus provedores de IA.",
  "final.subtitle":
    "O Atlas cuida do roteamento, das cotas, do Smart Fallback e da orquestração. Você desenvolve. O Atlas faz o resto.",
  "final.cta.primary": "Criar minha conta grátis",
  "final.cta.secondary": "Entrar",
  "final.trust": "Sem cartão de crédito · Conta criada em menos de um minuto",

  "footer.tagline":
    "O piloto automático para suas chamadas de IA. Uma única API, centenas de modelos, grátis primeiro.",
  "footer.col.atlas": "Atlas",
  "footer.col.product": "Produto",
  "footer.col.legal": "Legal",
  "footer.link.signin": "Entrar",
  "footer.link.signup": "Criar conta",
  "footer.link.smart_routing": "Smart Routing",
  "footer.link.smart_fallback": "Smart Fallback",
  "footer.link.compatible": "Compatível com OpenAI",
  "footer.link.terms": "Termos",
  "footer.link.privacy": "Privacidade",
  "footer.copyright": "© 2026 Atlas. Todos os direitos reservados.",
  "footer.brand": "app.atlasflash.com",
};

const hi: Record<string, string> = {
  "nav.signin": "साइन इन",
  "nav.signup": "खाता बनाएँ",
  "nav.theme": "लाइट और डार्क मोड टॉगल करें",
  "nav.lang": "भाषा चुनें",
  "nav.home": "Atlas — होम",

  "hero.eyebrow": "Atlas · AI Gateway",
  "hero.title": "एक API. सैकड़ों AI मॉडल.",
  "hero.title.accent": "पहले मुफ़्त.",
  "hero.subtitle":
    "Atlas स्वचालित रूप से सर्वश्रेष्ठ AI प्रदाताओं का समन्वय करता है। उपलब्ध मुफ़्त क्रेडिट का उपयोग करता है, कोटा पूरा होने पर समझदारी से बदलता है, और कई APIs को प्रबंधित करने की जटिलता से आपको बचाता है।",
  "hero.cta.primary": "मेरी API key मुफ़्त बनाएँ",
  "hero.cta.secondary": "साइन इन",
  "hero.trust.1": "कोई क्रेडिट कार्ड नहीं",
  "hero.trust.2": "OpenAI-संगत",
  "hero.trust.3": "एक मिनट से कम में खाता बनता है",

  "schema.aria":
    "Atlas कैसे काम करता है: आपका ऐप्लिकेशन अनुरोध भेजता है, Atlas स्वचालित रूप से प्रदाताओं को रूट करता है, और कोटा पूरा होने पर Smart Fallback सक्रिय करता है।",
  "schema.app": "आपका ऐप्लिकेशन",
  "schema.endpoint": "POST /v1/chat/completions",
  "schema.atlas.title": "Smart Routing Engine",
  "schema.atlas.subtitle": "1 API key · 1 endpoint · पूरा कैटलॉग",
  "schema.smart": "Smart Fallback",
  "schema.smart.subtitle": "स्वचालित फ़ेलओवर",
  "schema.quota": "कोटा पूरा हुआ",
  "schema.response": "जवाब लौटाया गया",

  "proof.1.value": "160+",
  "proof.1.label": "प्रदाता",
  "proof.2.value": "सैकड़ों",
  "proof.2.label": "मॉडल",
  "proof.3.value": "OpenAI",
  "proof.3.label": "संगत",
  "proof.4.value": "Smart Fallback",
  "proof.4.label": "स्वचालित",
  "proof.5.value": "मुफ़्त",
  "proof.5.label": "पेमेंट से पहले",

  "why.eyebrow": "क्यों Atlas",
  "why.title": "AI इन्फ्रास्ट्रक्चर, बिना जटिलता के।",
  "why.subtitle":
    "Atlas दर्जनों प्रदाताओं के प्रबंधन को एक ही विश्वसनीय एकीकृत इंटरफ़ेस से बदल देता है।",
  "why.col.without": "Atlas के बिना",
  "why.col.with": "Atlas के साथ",
  "why.row.1.with": "एक API key",
  "why.row.2.with": "एक endpoint",
  "why.row.3.with": "स्वचालित",
  "why.row.4.with": "Smart Fallback",
  "why.row.5.with": "पारदर्शी",
  "why.row.6.with": "पहले मुफ़्त",

  "features.eyebrow": "Atlas स्वचालित रूप से क्या करता है",
  "features.title": "चार तंत्र। शून्य कॉन्फ़िगरेशन।",
  "features.1.title": "Smart Routing",
  "features.1.body":
    "Atlas उपलब्धता, प्रदर्शन और कोटा के आधार पर स्वचालित रूप से सर्वश्रेष्ठ प्रदाता चुनता है।",
  "features.2.title": "पहले मुफ़्त",
  "features.2.body":
    "Atlas भुगतान वाले संसाधनों का उपयोग करने से पहले स्वचालित रूप से उपलब्ध मुफ़्त क्रेडिट का उपयोग करता है।",
  "features.3.title": "Smart Fallback",
  "features.3.body":
    "यदि कोई प्रदाता डाउन हो जाता है, उसका कोटा पूरा हो जाता है या वह अनुपलब्ध हो जाता है, तो Atlas स्वचालित रूप से स्विच करता है। आपका ऐप चलता रहता है।",
  "features.4.title": "एक ही API",
  "features.4.body":
    "कई SDKs बनाए रखने की कोई ज़रूरत नहीं। पूरे कैटलॉग के लिए एक OpenAI-संगत API।",

  "tools.eyebrow": "आपके टूल्स के साथ संगत",
  "tools.title": "एक ही प्रतिस्थापन बिंदु। बाकी सब कुछ इसका अनुसरण करता है।",
  "tools.subtitle":
    "Atlas एक सख्ती से OpenAI-संगत इंटरफ़ेस प्रदान करता है। आपके मौजूदा टूल्स, SDK और फ्रेमवर्क बिना किसी संशोधन के काम करते हैं।",
  "tools.filename": ".env",
  "tools.section.label": "दो वेरिएबल",
  "tools.code.comment1": "# 1. अपना base URL Atlas पर सेट करें",
  "tools.code.export": "export",
  "tools.code.var1": "OPENAI_BASE_URL",
  "tools.code.value1": "https://app.atlasflash.com/api/v1",
  "tools.code.comment2": "# 2. अपनी Atlas key का उपयोग करें",
  "tools.code.var2": "OPENAI_API_KEY",
  "tools.code.value2": "atlas_live_xxxxxxxxx",
  "tools.code.caption": "दो environment variables. और कुछ बदलने की ज़रूरत नहीं.",

  "how.eyebrow": "यह कैसे काम करता है",
  "how.title": "तीन चरण। कोई कोड परिवर्तन नहीं।",
  "how.1.title": "अपना मुफ़्त Atlas खाता बनाएँ",
  "how.1.body": "एक मिनट से कम में साइन अप। क्रेडिट कार्ड की आवश्यकता नहीं।",
  "how.2.title": "अपनी API key लें",
  "how.2.body": "एक ही key। किसी भी OpenAI client के साथ संगत।",
  "how.3.title": "Atlas स्वचालित रूप से सर्वश्रेष्ठ प्रदाता चुनता है",
  "how.3.body": "आप अपने कोड की एक भी लाइन नहीं बदलते। Atlas आपके लिए सब कुछ ऑर्केस्ट्रेट करता है।",

  "pricing.eyebrow": "मूल्य निर्धारण",
  "pricing.title": "एक ही नॉब: आप कितने प्रदाता कनेक्ट करते हैं।",
  "pricing.subtitle":
    "Atlas tokens नहीं बेचता। आपकी keys आपके खातों को कॉल करती हैं, आपका बिल आपका रहता है। हम आपके उपयोग को कभी सीमित नहीं करते — एकमात्र सीमा आपके प्रदाता की है।",
  "pricing.badge": "सबसे लोकप्रिय",
  "pricing.alt": "शामिल",
  "pricing.free.name": "Free",
  "pricing.free.price": "₹ 0",
  "pricing.free.cadence": "हमेशा के लिए",
  "pricing.free.body":
    "कोई ट्रायल नहीं। अपनी Atlas key बनाएँ, इसे Cursor, VS Code या Cline में पेस्ट करें, आप तैयार हैं। 10 तक कनेक्टेड प्रदाता — पूरा प्रोजेक्ट लॉन्च करने के लिए पर्याप्त।",
  "pricing.free.cta": "मुफ़्त शुरू करें",
  "pricing.pro.name": "Pro",
  "pricing.pro.price": "₹ 400",
  "pricing.pro.cadence": "/ माह",
  "pricing.pro.body":
    "50 कनेक्शन। प्रदाताओं की मुफ़्त tiers को जोड़कर प्रति माह 1.5B+ tokens तक पहुँचें।",
  "pricing.pro.cta": "Pro पर जाएँ",
  "pricing.unlimited.name": "Unlimited",
  "pricing.unlimited.price": "₹ 800",
  "pricing.unlimited.cadence": "/ माह",
  "pricing.unlimited.body":
    "असीमित कनेक्शन। उन agents और tools के लिए जो समानांतर रूप से दर्जनों प्रदाताओं को जोड़ते हैं।",
  "pricing.unlimited.cta": "Unlimited पर जाएँ",
  "pricing.feature": "विशेषता",
  "pricing.col.free": "Free — ₹ 0",
  "pricing.col.pro": "Pro — ₹ 400 / माह",
  "pricing.col.unlimited": "Unlimited — ₹ 800 / माह",
  "pricing.row.1": "Atlas API key, किसी भी IDE में उपयोग योग्य",
  "pricing.row.2": "बिना किसी provider key के शुरू करें",
  "pricing.row.3": "Provider कनेक्शन",
  "pricing.row.3.free": "10",
  "pricing.row.3.pro": "50",
  "pricing.row.3.unlimited": "असीमित",
  "pricing.row.4": "Token / request सीमा",
  "pricing.row.4.any": "कोई नहीं",
  "pricing.row.5": "Smart routing + स्वचालित failover",
  "pricing.row.6": "OpenAI /v1/chat/completions फ़ॉर्मेट",
  "pricing.source":
    "एकल स्रोत: control-plane/src/plans/catalogue.ts. कोई token सीमा नहीं. कभी नहीं.",

  "faq.eyebrow": "अक्सर पूछे जाने वाले प्रश्न",
  "faq.title": "आपको जो कुछ भी जानना है।",
  "faq.1.q": "क्या यह सच में मुफ़्त है?",
  "faq.1.a":
    "हाँ। Atlas भुगतान वाले संसाधनों का उपयोग करने से पहले स्वचालित रूप से प्रदाताओं द्वारा दिए जाने वाले मुफ़्त क्रेडिट का उपयोग करता है। आप केवल उन चीज़ों के लिए भुगतान करते हैं जिन्हें Atlas मुफ़्त में कवर नहीं कर सकता।",
  "faq.2.q": "क्या मुझे अपना कोड बदलना होगा?",
  "faq.2.a":
    "नहीं। Atlas एक सख्ती से OpenAI-संगत इंटरफ़ेस प्रदान करता है। बस दो environment variables (OPENAI_BASE_URL और OPENAI_API_KEY) बदलें और आपका कोड वैसा ही रहता है।",
  "faq.3.q": "जब कोटा पूरा हो जाता है तो क्या होता है?",
  "faq.3.a":
    "Atlas अपने Smart Fallback के माध्यम से स्वचालित रूप से किसी अन्य उपलब्ध प्रदाता पर स्विच करता है। आपके ऐप्लिकेशन को 429 error के बिना और किसी मैन्युअल हस्तक्षेप के बिना प्रतिक्रिया मिलती है।",
  "faq.4.q": "क्या मेरी API keys सुरक्षित हैं?",
  "faq.4.a":
    "Keys रेस्ट पर एन्क्रिप्टेड हैं, प्रति खाता isolated हैं, और कभी client को expose नहीं की जातीं। API एक्सेस विशेष रूप से आपकी Atlas key के माध्यम से होता है।",
  "faq.5.q": "क्या मैं अपने स्वयं के प्रदाताओं का उपयोग कर सकता हूँ?",
  "faq.5.a":
    "Atlas डिफ़ॉल्ट रूप से प्रदाताओं की एक विस्तृत कैटलॉग ऑर्केस्ट्रेट करता है। व्यक्तिगत keys जोड़ने का विकल्प प्रगति में है और जल्द ही उपलब्ध होगा।",

  "final.title": "अपने AI प्रदाताओं को मैनेज करना बंद करें।",
  "final.subtitle":
    "Atlas routing, quotas, Smart Fallback और orchestration को संभालता है। आप बनाएँ। Atlas बाकी सब करे।",
  "final.cta.primary": "मेरा मुफ़्त खाता बनाएँ",
  "final.cta.secondary": "साइन इन",
  "final.trust": "कोई क्रेडिट कार्ड नहीं · एक मिनट से कम में खाता बनता है",

  "footer.tagline":
    "आपके AI calls के लिए ऑटोपाइलट। एक API, सैकड़ों मॉडल, पहले मुफ़्त।",
  "footer.col.atlas": "Atlas",
  "footer.col.product": "उत्पाद",
  "footer.col.legal": "कानूनी",
  "footer.link.signin": "साइन इन",
  "footer.link.signup": "खाता बनाएँ",
  "footer.link.smart_routing": "Smart Routing",
  "footer.link.smart_fallback": "Smart Fallback",
  "footer.link.compatible": "OpenAI संगत",
  "footer.link.terms": "शर्तें",
  "footer.link.privacy": "गोपनीयता",
  "footer.copyright": "© 2026 Atlas. सर्वाधिकार सुरक्षित.",
  "footer.brand": "app.atlasflash.com",
};

export const translations: Record<Lang, Record<string, string>> = { fr, en, es, pt, hi };

/**
 * Look up a translation for a key in a given language.
 * Falls back to French, then to the key itself, if the translation is missing.
 */
export const t = (key: string, lang: Lang = DEFAULT_LANG): string => {
  return translations[lang]?.[key] ?? translations.fr[key] ?? key;
};
