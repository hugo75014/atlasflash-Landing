import type { Metadata } from "next";
import { LANGS, t as _t } from "./i18n";
import { EDITEUR } from "./legal/shared";

/* ------------------------------------------------------------------ */
/* i18n text helper — wraps the translation with suppressHydrationWarning  */
/* so the runtime language-swap doesn't trip React's hydration check.   */
/* ------------------------------------------------------------------ */
function T({ k, children }: { k: string; children?: React.ReactNode }) {
  return (
    <span data-i18n={k} suppressHydrationWarning>
      {children ?? _t(k)}
    </span>
  );
}

export const metadata: Metadata = {
  title: "Atlas — Une seule API. Des centaines de modèles IA. Gratuit d'abord.",
  description:
    "Atlas orchestre automatiquement les meilleurs fournisseurs d'IA. Une seule clé, un seul endpoint, tout le catalogue. Smart Fallback, crédits gratuits exploités avant le payant.",
};

/* ------------------------------------------------------------------ */
/* Inline icon helpers (Server-rendered, no JS)                       */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Atlas brand logo — image officielle, identique à celle de           */
/* l'application (`/opt/atlas-engine/public/atlas-mark.png`).          */
/* L'ancien SVG « recréé de mémoire » divergeait du vrai monogramme,   */
/* d'où le passage au fichier source partagé.                          */
/* ------------------------------------------------------------------ */

function AtlasMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/atlas-mark.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`${className} object-contain select-none`}
    />
  );
}

/* ATLAS wordmark — custom geometric letterforms (A T L A S)            */
/* Each letter is composed of rectangles + parallelogram legs.         */

function AtlasWordmark({ className = "" }: { className?: string }) {
  // Single letter "A" — 24 wide × 28 tall
  const A = ({ x = 0 }: { x?: number }) => (
    <g transform={`translate(${x} 0)`} fill="currentColor">
      <path d="M 0 0 L 2 0 L 9 28 L 6 28 Z" />
      <path d="M 22 0 L 24 0 L 17 28 L 14 28 Z" />
      <rect x="0" y="0" width="24" height="3" />
      <rect x="6" y="13" width="12" height="3" />
    </g>
  );

  // Letter "T" — 18 wide × 28 tall
  const T = ({ x = 0 }: { x?: number }) => (
    <g transform={`translate(${x} 0)`} fill="currentColor">
      <rect x="0" y="0" width="18" height="3" />
      <rect x="7.5" y="3" width="3" height="25" />
    </g>
  );

  // Letter "L" — 16 wide × 28 tall
  const L = ({ x = 0 }: { x?: number }) => (
    <g transform={`translate(${x} 0)`} fill="currentColor">
      <rect x="0" y="0" width="3" height="25" />
      <rect x="0" y="25" width="16" height="3" />
    </g>
  );

  // Letter "S" — 18 wide × 28 tall
  const S = ({ x = 0 }: { x?: number }) => (
    <g transform={`translate(${x} 0)`} fill="currentColor">
      <rect x="0" y="0" width="18" height="3" />
      <rect x="0" y="3" width="3" height="9" />
      <rect x="0" y="12" width="18" height="3" />
      <rect x="15" y="15" width="3" height="10" />
      <rect x="0" y="25" width="18" height="3" />
    </g>
  );

  return (
    <svg
      viewBox="0 0 130 28"
      className={className}
      aria-label="ATLAS"
      fill="none"
    >
      <A x={0} />
      <T x={28} />
      <L x={50} />
      <A x={70} />
      <S x={98} />
    </svg>
  );
}

function IconArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M3 8.5l3.2 3 6.8-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconX({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true" fill="none">
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconRouting() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d="M4 7h6l2 3-2 3H4M20 7h-4M20 13h-4M14 4l2 3-2 3M14 14l2 3-2 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFree() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d="M12 3v18M16 7H10a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFallback() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d="M4 12a8 8 0 0 1 13.5-5.7M20 12a8 8 0 0 1-13.5 5.7M17 3v4h-4M7 21v-4h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUnify() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d="M5 8h6a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3h2M5 16h6M19 8h-2M19 16h-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <path
        d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronDown({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGlobe({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LanguageSelector() {
  return (
    <div className="lang-shell">
      <button
        type="button"
        data-lang-toggle
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Choisir la langue"
        title="Choisir la langue"
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-ink-200 bg-surface px-2.5 text-[12px] font-medium text-ink-700 transition-colors duration-200 hover:bg-ink-50 hover:text-ink-900 dark:hover:bg-ink-100"
      >
        <IconGlobe className="h-3.5 w-3.5 text-ink-500" />
        <span data-lang-current className="font-semibold tracking-wide">
          FR
        </span>
        <IconChevronDown className="h-2.5 w-2.5 text-ink-400" />
      </button>
      <div
        data-lang-menu
        data-open="false"
        role="menu"
        className="lang-menu absolute right-0 top-full z-50 mt-2 hidden w-44 flex-col gap-0.5 data-[open=true]:flex"
      >
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            data-lang-option={l.code}
            role="menuitemradio"
            aria-checked="false"
            className="lang-option"
          >
            <span>{l.native}</span>
            <span className="text-[11px] uppercase tracking-wider text-ink-400">
              {l.short}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The big Schema SVG — the heart of the page                          */
/* ------------------------------------------------------------------ */

function SchemaDiagram() {
  return (
    <svg
      viewBox="0 0 940 540"
      role="img"
      aria-label="Schéma de fonctionnement d'Atlas : votre application envoie une requête, Atlas route automatiquement vers les fournisseurs, et active un Smart Fallback en cas de quota atteint."
      data-i18n-attr="schema.aria"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="atlasGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "rgb(var(--surface))" }} />
          <stop offset="100%" style={{ stopColor: "rgb(var(--surface-2))" }} />
        </linearGradient>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10z" style={{ fill: "rgb(var(--ink-400))" }} />
        </marker>
        <marker
          id="arrowDark"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10z" style={{ fill: "rgb(var(--ink-900))" }} />
        </marker>
        <marker
          id="arrowWarn"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10z" fill="#dc2626" />
        </marker>
        <pattern id="dotGrid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" style={{ fill: "rgb(var(--ink-200))" }} />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect width="940" height="540" fill="url(#dotGrid)" opacity="0.5" />

      {/* ---------- Votre application ---------- */}
      <g>
        <rect
          x="320"
          y="20"
          width="240"
          height="58"
          rx="10"
          style={{ fill: "rgb(var(--surface))", stroke: "rgb(var(--ink-200))" }}
        />
        <text
          x="440"
          y="46"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontSize="13"
          fontWeight="500"
          style={{ fill: "rgb(var(--ink-900))" }}
          data-i18n="schema.app"
         suppressHydrationWarning>
          Votre application
        </text>
        <text
          x="440"
          y="64"
          textAnchor="middle"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize="11"
          style={{ fill: "rgb(var(--ink-500))" }}
        >
          POST /v1/chat/completions
        </text>
        {/* Live dot — "we are listening" indicator */}
        <circle cx="345" cy="49" r="3" fill="rgb(34, 197, 94)">
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* arrow down to Atlas (with traveling pulse + moving request dot) */}
      <line
        x1="440"
        y1="78"
        x2="440"
        y2="118"
        style={{ stroke: "rgb(var(--ink-400))" }}
        strokeWidth="1.5"
        markerEnd="url(#arrow)"
        className="routing-flow"
      />
      {/* Small traveling "request" dot — App → Atlas */}
      <circle r="2.5" fill="#3b82f6">
        <animate
          attributeName="cy"
          from="78"
          to="116"
          dur="1.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.15;0.85;1"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* ---------- Atlas — Smart Routing Engine ---------- */}
      <g>
        <rect
          x="220"
          y="120"
          width="440"
          height="100"
          rx="14"
          fill="url(#atlasGlow)"
          style={{ stroke: "rgb(var(--ink-900))" }}
          className="atlas-pulse"
        />
        {/* mini Atlas logo badge (top-left of the box) — inline SVG,
            matches the AtlasMark used in the navbar and final CTA. */}
        <g transform="translate(255 150)">
          <path d="M -11 11 L 0 -11 L 0 11 Z" fill="url(#schemaAtlasBlue)" />
          <path d="M 0 -11 L 11 11 L 0 11 Z" fill="url(#schemaAtlasSilver)" />
          <path d="M 11 11 L 11 9 L 2 11 Z" fill="url(#schemaAtlasPurple)" />
          <path
            d="M -10 3.5 Q -4 -2 6 -0.5 Q 9 0.5 11 2"
            fill="none"
            stroke="url(#schemaAtlasSwoosh)"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="swoosh-drift"
          />
          <path d="M -3.5 6 L 0 0 L 3.5 6 Z" fill="url(#schemaAtlasInner)" />
        </g>
        {/* ATLAS wordmark next to the mini logo */}
        <text
          x="278"
          y="156"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="11.5"
          fontWeight="700"
          letterSpacing="0.18em"
          style={{ fill: "rgb(var(--ink-950))" }}
        >
          ATLAS
        </text>
        <text
          x="440"
          y="190"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="20"
          fontWeight="600"
          style={{ fill: "rgb(var(--ink-950))" }}
          data-i18n="schema.atlas.title"
         suppressHydrationWarning>
          Smart Routing Engine
        </text>
        <text
          x="440"
          y="208"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="12"
          style={{ fill: "rgb(var(--ink-500))" }}
          data-i18n="schema.atlas.subtitle"
         suppressHydrationWarning>
          1 clé API · 1 endpoint · catalogue complet
        </text>
      </g>

      {/* ---------- Branching to 4 providers (with traveling light) ---------- */}
      <path
        d="M 320 220 C 280 250, 220 270, 130 290"
        fill="none"
        style={{ stroke: "rgb(var(--ink-400))", animationDuration: "3.4s" }}
        strokeWidth="1.5"
        markerEnd="url(#arrow)"
        className="routing-flow"
      />
      <path
        d="M 380 220 C 360 250, 330 270, 300 290"
        fill="none"
        style={{ stroke: "rgb(var(--ink-400))", animationDuration: "3.6s" }}
        strokeWidth="1.5"
        markerEnd="url(#arrow)"
        className="routing-flow"
      />
      <path
        d="M 500 220 C 520 250, 550 270, 580 290"
        fill="none"
        style={{ stroke: "rgb(var(--ink-400))", animationDuration: "3.2s" }}
        strokeWidth="1.5"
        markerEnd="url(#arrow)"
        className="routing-flow"
      />
      <path
        d="M 560 220 C 600 250, 660 270, 750 290"
        fill="none"
        style={{ stroke: "rgb(var(--ink-400))", animationDuration: "3.8s" }}
        strokeWidth="1.5"
        markerEnd="url(#arrow)"
        className="routing-flow"
      />

      {/* ---------- Provider chips ---------- */}
      <ProviderChip x={50} y={290} label="OpenAI" />
      <ProviderChip x={220} y={290} label="Gemini" />
      <ProviderChip x={500} y={290} label="Groq" />
      <ProviderChip x={670} y={290} label="OpenRouter" />

      {/* ---------- "quota atteint" branch from OpenAI ---------- */}
      <g>
        <line
          x1="130"
          y1="332"
          x2="130"
          y2="378"
          stroke="#dc2626"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#arrowWarn)"
          className="fault-pulse"
        />
        <rect
          x="64"
          y="346"
          width="132"
          height="22"
          rx="6"
          style={{
            fill: "rgb(var(--surface))",
            stroke: "rgba(220, 38, 38, 0.4)",
          }}
        />
        <text
          x="130"
          y="361"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="11"
          fontWeight="500"
          fill="#dc2626"
          data-i18n="schema.quota"
         suppressHydrationWarning>
          quota atteint
        </text>
      </g>

      {/* arrow from "quota atteint" to Smart Fallback */}
      <line
        x1="196"
        y1="357"
        x2="320"
        y2="410"
        stroke="#dc2626"
        strokeWidth="1.5"
        markerEnd="url(#arrowWarn)"
      />

      {/* ---------- Smart Fallback node ---------- */}
      <g>
        <rect
          x="320"
          y="380"
          width="240"
          height="62"
          rx="10"
          style={{
            fill: "rgb(var(--surface))",
            stroke: "rgb(var(--ink-900))",
          }}
          className="ok-glow"
        />
        <circle
          cx="346"
          cy="411"
          r="10"
          style={{ fill: "rgb(var(--ink-900))" }}
        />
        <path
          d="M341 411l3 3 6-6"
          style={{ stroke: "rgb(var(--accent-text))" }}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="370"
          y="406"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="14"
          fontWeight="600"
          style={{ fill: "rgb(var(--ink-950))" }}
          data-i18n="schema.smart"
         suppressHydrationWarning>
          Smart Fallback
        </text>
        <text
          x="370"
          y="423"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="11.5"
          style={{ fill: "rgb(var(--ink-500))" }}
          data-i18n="schema.smart.subtitle"
         suppressHydrationWarning>
          Bascule automatique
        </text>
      </g>

      {/* arrow down to DeepSeek */}
      <line
        x1="440"
        y1="442"
        x2="440"
        y2="472"
        style={{ stroke: "rgb(var(--ink-900))" }}
        strokeWidth="1.5"
        markerEnd="url(#arrowDark)"
      />

      {/* ---------- DeepSeek ---------- */}
      <g>
        <rect
          x="350"
          y="472"
          width="180"
          height="46"
          rx="10"
          style={{
            fill: "rgb(var(--surface))",
            stroke: "rgb(var(--ink-200))",
          }}
        />
        <text
          x="440"
          y="500"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="13"
          fontWeight="500"
          style={{ fill: "rgb(var(--ink-900))" }}
        >
          DeepSeek
        </text>
      </g>

      {/* ---------- Return to app arrow (curves around the right side) ---------- */}
      <path
        d="M 530 495 C 700 495, 870 495, 880 270 C 880 130, 800 60, 580 49"
        fill="none"
        style={{ stroke: "rgb(var(--ink-400))" }}
        strokeWidth="1.2"
        strokeDasharray="3 4"
        markerEnd="url(#arrow)"
      />
      <g>
        <rect
          x="858"
          y="260"
          width="78"
          height="22"
          rx="6"
          style={{
            fill: "rgb(var(--surface))",
            stroke: "rgb(var(--ink-200))",
          }}
        />
        <text
          x="897"
          y="275"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="11"
          fontWeight="500"
          style={{ fill: "rgb(var(--ink-500))" }}
          data-i18n="schema.response"
         suppressHydrationWarning>
          Réponse retournée
        </text>
      </g>
    </svg>
  );
}

function ProviderChip({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={120}
        height={42}
        rx={9}
        style={{
          fill: "rgb(var(--surface))",
          stroke: "rgb(var(--ink-200))",
        }}
      />
      <circle
        cx={x + 18}
        cy={y + 21}
        r={5}
        style={{ fill: "rgb(var(--ink-900))" }}
      />
      <text
        x={x + 32}
        y={y + 26}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize={13}
        fontWeight={500}
        style={{ fill: "rgb(var(--ink-900))" }}
      >
        {label}
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Top nav                                                   */
/* ------------------------------------------------------------------ */

function TopNav() {
  return (
    <header
      data-nav-shell
      data-scrolled="false"
      className="nav-shell sticky top-0 z-40 border-b border-transparent bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/70"
    >
      <div className="container-page flex h-14 items-center justify-between">
        <a
          href="/"
          data-i18n-aria-label="nav.home"
          aria-label="Atlas — Accueil"
          className="flex items-center gap-2 text-ink-950"
        >
          <AtlasMark className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight">Atlas</span>
        </a>
        <nav className="flex items-center gap-1.5 sm:gap-2">
          <LanguageSelector />
          <button
            type="button"
            data-theme-toggle
            data-i18n-aria-label="nav.theme"
            aria-label="Basculer entre le mode clair et le mode sombre"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-surface text-ink-700 transition-colors duration-200 hover:bg-ink-50 hover:text-ink-900 dark:hover:bg-ink-100"
          >
            <span className="block dark:hidden" aria-hidden="true">
              <IconMoon />
            </span>
            <span className="hidden dark:block" aria-hidden="true">
              <IconSun />
            </span>
          </button>
          <a
            href="https://app.atlasflash.com/signin"
            data-i18n="nav.signin"
            className="btn-secondary h-9 px-3.5 text-[13px] hidden sm:inline-flex"
           suppressHydrationWarning>
            Se connecter
          </a>
          <a
            href="https://app.atlasflash.com/signin"
            data-i18n="nav.signup"
            className="btn-primary h-9 px-3.5 text-[13px]"
           suppressHydrationWarning>
            Créer un compte
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Hero                                                      */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Localized ambient glow — sits on top of the body aurora to give the
         hero its own focal light. Pointer-events disabled so it never blocks clicks. */}
      <div aria-hidden="true" className="ambient-glow" />
      {/* Soft grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      {/* Soft top accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-300 to-transparent"
      />

      <div className="container-page relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="h-eyebrow"
            data-reveal
            data-i18n="hero.eyebrow"
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
           suppressHydrationWarning>
            Atlas · AI Gateway
          </p>

          <h1
            className="mt-6 h-display text-balance"
            data-reveal
            data-i18n="hero.title"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
           suppressHydrationWarning>
            <span className="hero-reveal-word" style={{ "--word-delay": "120ms" } as React.CSSProperties}>
              Une
            </span>{" "}
            <span className="hero-reveal-word" style={{ "--word-delay": "170ms" } as React.CSSProperties}>
              seule
            </span>{" "}
            <span className="hero-reveal-word" style={{ "--word-delay": "220ms" } as React.CSSProperties}>
              API.
            </span>{" "}
            <span className="hero-reveal-word" style={{ "--word-delay": "290ms" } as React.CSSProperties}>
              Des
            </span>{" "}
            <span className="hero-reveal-word" style={{ "--word-delay": "340ms" } as React.CSSProperties}>
              centaines
            </span>{" "}
            <span className="hero-reveal-word" style={{ "--word-delay": "390ms" } as React.CSSProperties}>
              de
            </span>{" "}
            <span className="hero-reveal-word" style={{ "--word-delay": "440ms" } as React.CSSProperties}>
              modèles
            </span>{" "}
            <span className="hero-reveal-word" style={{ "--word-delay": "490ms" } as React.CSSProperties}>
              IA.
            </span>{" "}
            <span
              className="text-ink-500 hero-reveal-word"
              style={{ "--word-delay": "600ms" } as React.CSSProperties}
            >
              Gratuit d&apos;abord.
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lead text-pretty"
            data-reveal
            data-i18n="hero.subtitle"
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
           suppressHydrationWarning>
            Atlas orchestre automatiquement les meilleurs fournisseurs d&apos;IA.
            Il utilise les crédits gratuits disponibles, bascule intelligemment
            lorsqu&apos;un quota est atteint et vous évite toute la complexité
            de gérer plusieurs APIs.
          </p>

          {/* CTA group */}
          <div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            data-reveal
            style={{ "--reveal-delay": "440ms" } as React.CSSProperties}
          >
            <a
              href="https://app.atlasflash.com/signin"
              data-i18n="hero.cta.primary"
              className="btn-primary h-11 w-full sm:w-auto px-5 text-[14px]"
             suppressHydrationWarning>
              Créer ma clé API gratuitement
              <IconArrowRight />
            </a>
            <a
              href="https://app.atlasflash.com/signin"
              data-i18n="hero.cta.secondary"
              className="btn-secondary h-11 w-full sm:w-auto px-5 text-[14px]"
             suppressHydrationWarning>
              Se connecter
            </a>
          </div>

          {/* Trust mentions */}
          <ul
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-ink-500"
            data-reveal
            style={{ "--reveal-delay": "560ms" } as React.CSSProperties}
          >
            <li className="flex items-center gap-1.5">
              <IconCheck className="h-3.5 w-3.5 text-ink-700" />
              <span data-i18n="hero.trust.1" suppressHydrationWarning>Sans carte bancaire</span>
            </li>
            <li className="flex items-center gap-1.5">
              <IconCheck className="h-3.5 w-3.5 text-ink-700" />
              <span data-i18n="hero.trust.2" suppressHydrationWarning>Compatible OpenAI</span>
            </li>
            <li className="flex items-center gap-1.5">
              <IconCheck className="h-3.5 w-3.5 text-ink-700" />
              <span data-i18n="hero.trust.3" suppressHydrationWarning>Compte créé en moins d&apos;une minute</span>
            </li>
          </ul>
        </div>

        {/* The Schema */}
        <div
          className="mx-auto mt-16 max-w-5xl"
          data-reveal
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
        >
          <div className="card overflow-hidden p-4 sm:p-6">
            <SchemaDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Proof band                                                */
/* ------------------------------------------------------------------ */

function ProofBand() {
  const items = [
    { type: "count", valueKey: "proof.1.value", labelKey: "proof.1.label", count: 160, suffix: "+" },
    { type: "text",  valueKey: "proof.2.value", labelKey: "proof.2.label" },
    { type: "text",  valueKey: "proof.3.value", labelKey: "proof.3.label" },
    { type: "text",  valueKey: "proof.4.value", labelKey: "proof.4.label" },
    { type: "text",  valueKey: "proof.5.value", labelKey: "proof.5.label" },
  ];

  return (
    <section className="border-y border-ink-200/70 bg-ink-50/40 dark:bg-ink-100/30">
      <div className="container-page py-10">
        <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5" data-reveal-group>
          {items.map((it, i) => (
            <li
              key={it.labelKey}
              className="flex flex-col items-center text-center"
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="text-[1.5rem] font-semibold tracking-tight text-ink-950 sm:text-2xl">
                {it.type === "text" ? (
                  <span data-i18n={it.valueKey}>
                    {it.valueKey === "proof.2.value" ? "Des centaines"
                      : it.valueKey === "proof.3.value" ? "OpenAI"
                      : it.valueKey === "proof.4.value" ? "Smart Fallback"
                      : "Gratuit"}
                  </span>
                ) : (
                  <span
                    data-count
                    data-count-to={it.count}
                    data-count-suffix={it.suffix || ""}
                    data-i18n-num={it.valueKey}
                  >
                    0{it.suffix || ""}
                  </span>
                )}
              </span>
              <span
                className="mt-1 text-[12.5px] uppercase tracking-[0.12em] text-ink-500"
                data-i18n={it.labelKey}
              >
                {it.labelKey === "proof.1.label" ? "fournisseurs"
                  : it.labelKey === "proof.2.label" ? "de modèles"
                  : it.labelKey === "proof.3.label" ? "compatible"
                  : it.labelKey === "proof.4.label" ? "automatique"
                  : "avant le payant"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Conçu pour économiser (quota / gratuit d'abord)            */
/* ------------------------------------------------------------------ */

function DesignedToSave() {
  const flow = [
    "1 clé Atlas",
    "plusieurs fournisseurs",
    "plusieurs clés",
    "des centaines de modèles",
  ];

  const tools = [
    "Claude Code",
    "Hermes Agent",
    "OpenClaw",
    "Cursor",
    "Cline",
    "Roo Code",
    "Windsurf",
  ];

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="h-eyebrow">Conçu pour économiser</p>
        <h2 className="mt-4 h-section text-balance">
          Votre agent IA ne devrait pas s&apos;arrêter parce qu&apos;un quota
          est atteint.
        </h2>
        <p className="mt-4 text-lead text-pretty">
          Connectez vos fournisseurs IA à Atlas. Atlas orchestre
          automatiquement vos clés, vos modèles, vos quotas et vos
          fournisseurs — pour que vous n&apos;ayez jamais à payer tant qu&apos;il
          reste du gratuit disponible.
        </p>
      </div>

      {/* Flow: 1 clé → plusieurs fournisseurs → plusieurs clés → des centaines de modèles */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-4">
        {flow.map((step, i) => (
          <span key={step} className="flex items-center gap-2">
            <span className="card inline-flex h-10 items-center px-4 text-[13.5px] font-medium text-ink-800">
              {step}
            </span>
            {i < flow.length - 1 && (
              <IconArrowRight className="h-4 w-4 flex-none text-ink-300" />
            )}
          </span>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-[1.6] text-ink-500">
        Jusqu&apos;à plus de 1,5 milliard de tokens par mois en combinant les
        offres gratuites disponibles chez plusieurs fournisseurs, selon leurs
        conditions, quotas et limites respectifs.
      </p>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[13.5px] leading-[1.6] text-ink-600">
        Compatible avec {tools.join(", ")} et tout autre client compatible
        OpenAI.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Pourquoi Atlas (comparison)                                */
/* ------------------------------------------------------------------ */

function WhyAtlas() {
  const rows = [
    { w: "Plusieurs comptes", a: "Une seule clé API", wKey: "why.row.1.without", aKey: "why.row.1.with" },
    { w: "Plusieurs APIs", a: "Un seul endpoint", wKey: "why.row.2.without", aKey: "why.row.2.with" },
    { w: "Gestion manuelle des quotas", a: "Automatique", wKey: "why.row.3.without", aKey: "why.row.3.with" },
    { w: "Erreurs 429", a: "Smart Fallback", wKey: "why.row.4.without", aKey: "why.row.4.with" },
    { w: "Changement de fournisseur", a: "Transparent", wKey: "why.row.5.without", aKey: "why.row.5.with" },
    { w: "Paiement immédiat", a: "Gratuit d'abord", wKey: "why.row.6.without", aKey: "why.row.6.with" },
  ];

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center" data-reveal>
        <p className="h-eyebrow" data-i18n="why.eyebrow" suppressHydrationWarning>Pourquoi Atlas</p>
        <h2 className="mt-4 h-section text-balance" data-i18n="why.title" suppressHydrationWarning>
          L&apos;infrastructure IA, sans la complexité.
        </h2>
        <p className="mt-4 text-lead text-pretty" data-i18n="why.subtitle" suppressHydrationWarning>
          Atlas remplace la gestion d&apos;une dizaines de fournisseurs par
          une seule interface fiable et unifiée.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="card overflow-hidden">
          <div className="grid grid-cols-2 border-b border-ink-200 bg-ink-50/60 text-[12.5px] uppercase tracking-[0.14em] text-ink-500">
            <div className="px-5 py-3 sm:px-6" data-i18n="why.col.without" suppressHydrationWarning>Sans Atlas</div>
            <div className="border-l border-ink-200 px-5 py-3 sm:px-6 text-ink-700" data-i18n="why.col.with" suppressHydrationWarning>
              Avec Atlas
            </div>
          </div>
          <ul data-reveal-group>
            {rows.map((r, i) => (
              <li
                key={r.w}
                className="grid grid-cols-2 border-b border-ink-200 last:border-b-0"
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="flex items-start gap-3 px-5 py-4 sm:px-6">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-400">
                    <IconX className="h-3 w-3" />
                  </span>
                  <span className="text-[14.5px] text-ink-600" data-i18n={r.wKey}>{r.w}</span>
                </div>
                <div className="flex items-start gap-3 border-l border-ink-200 bg-ink-100/30 px-5 py-4 sm:px-6">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ink-950 text-ink-50">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span className="text-[14.5px] text-ink-900" data-i18n={r.aKey}>{r.a}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Ce qu'Atlas fait (4 feature cards)                        */
/* ------------------------------------------------------------------ */

function Features() {
  const features = [
    {
      icon: <IconRouting />,
      titleKey: "features.1.title",
      bodyKey: "features.1.body",
      title: "Smart Routing",
      body: "Atlas choisit automatiquement le meilleur fournisseur selon la disponibilité, les performances et les quotas.",
    },
    {
      icon: <IconFree />,
      titleKey: "features.2.title",
      bodyKey: "features.2.body",
      title: "Gratuit d'abord",
      body: "Atlas exploite automatiquement les crédits gratuits disponibles avant d'utiliser des ressources payantes.",
    },
    {
      icon: <IconFallback />,
      titleKey: "features.3.title",
      bodyKey: "features.3.body",
      title: "Smart Fallback",
      body: "Si un fournisseur tombe en panne, atteint son quota ou devient indisponible, Atlas bascule automatiquement. Votre application continue de fonctionner.",
    },
    {
      icon: <IconUnify />,
      titleKey: "features.4.title",
      bodyKey: "features.4.body",
      title: "Une seule API",
      body: "Plus besoin de maintenir plusieurs SDK. Une seule API compatible OpenAI pour tout le catalogue.",
    },
  ];

  return (
    <section className="border-y border-ink-200/70 bg-ink-50/30 dark:bg-ink-100/20">
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="h-eyebrow" data-i18n="features.eyebrow" suppressHydrationWarning>Ce qu&apos;Atlas fait automatiquement</p>
          <h2 className="mt-4 h-section text-balance" data-i18n="features.title" suppressHydrationWarning>
            Quatre mécanismes. Zéro configuration.
          </h2>
        </div>

        <ul
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-2"
          data-reveal-group
        >
          {features.map((f, i) => (
            <li
              key={f.titleKey}
              className="glass-card shine-on-hover bg-surface p-6 sm:p-8"
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-200 text-ink-900">
                {f.icon}
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-950" data-i18n={f.titleKey}>
                {f.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-600" data-i18n={f.bodyKey}>
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Compatible avec vos outils                                 */
/* ------------------------------------------------------------------ */

function CompatibleTools() {
  const tools = [
    { label: "Hermes Agent", key: "tools.1" },
    { label: "OpenClaw", key: "tools.2" },
    { label: "Claude Code", key: "tools.3" },
    { label: "Continue.dev", key: "tools.4" },
    { label: "Roo Code", key: "tools.5" },
    { label: "Cursor", key: "tools.6" },
    { label: "Windsurf", key: "tools.7" },
    { label: "Tous les clients OpenAI", key: "tools.8" },
  ];

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center" data-reveal>
        <p className="h-eyebrow" data-i18n="tools.eyebrow" suppressHydrationWarning>Compatible avec vos outils</p>
        <h2 className="mt-4 h-section text-balance" data-i18n="tools.title" suppressHydrationWarning>
          Un seul point de remplacement. Tout le reste suit.
        </h2>
        <p className="mt-4 text-lead text-pretty" data-i18n="tools.subtitle" suppressHydrationWarning>
          Atlas expose une interface strictement compatible OpenAI. Vos outils,
          SDK et frameworks existants fonctionnent sans modification.
        </p>
      </div>

      <ul
        className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        data-reveal-group
      >
        {tools.map((t, i) => (
          <li
            key={t.label}
            className="glass-card shine-on-hover card flex h-16 items-center justify-center px-4 text-center text-[13.5px] font-medium text-ink-800"
            data-reveal
            style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
          >
            {t.label}
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-3xl" data-reveal>
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50/60 px-4 py-2.5 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
              <span className="ml-3 font-mono text-[12px] text-ink-500">
                .env
              </span>
            </div>
            <span className="text-[11.5px] uppercase tracking-[0.14em] text-ink-400" data-i18n="tools.filename" suppressHydrationWarning>
              .env
            </span>
          </div>
          <pre className="overflow-x-auto bg-surface p-5 font-mono text-[13px] leading-[1.7] text-ink-900 sm:p-6">
            <code>
              <span className="text-ink-400" data-i18n="tools.code.comment1" suppressHydrationWarning># 1. Point your base URL to Atlas</span>
              {"\n"}
              <span className="text-ink-500">export</span>{" "}
              <span className="text-ink-950">OPENAI_BASE_URL</span>=
              <span className="text-ink-700">
                https://app.atlasflash.com/api/v1
              </span>
              {"\n\n"}
              <span className="text-ink-400" data-i18n="tools.code.comment2" suppressHydrationWarning># 2. Use your Atlas key</span>
              {"\n"}
              <span className="text-ink-500">export</span>{" "}
              <span className="text-ink-950">OPENAI_API_KEY</span>=
              <span className="text-ink-700">atlas_live_xxxxxxxxx</span>
            </code>
          </pre>
        </div>
        <p className="mt-4 text-center text-[13.5px] text-ink-500" data-i18n="tools.caption" suppressHydrationWarning>
          Deux variables d&apos;environnement. Rien d&apos;autre à modifier.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Comment ça fonctionne                                      */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  const steps = [
    {
      n: "1",
      titleKey: "how.1.title",
      bodyKey: "how.1.body",
      title: "Créer gratuitement votre compte Atlas",
      body: "Inscription en moins d'une minute. Aucune carte bancaire requise.",
    },
    {
      n: "2",
      titleKey: "how.2.title",
      bodyKey: "how.2.body",
      title: "Récupérer votre clé API",
      body: "Une seule clé. Compatible avec n'importe quel client OpenAI.",
    },
    {
      n: "3",
      titleKey: "how.3.title",
      bodyKey: "how.3.body",
      title: "Atlas choisit automatiquement le meilleur fournisseur",
      body: "Vous ne changez rien à votre code. Atlas orchestre tout pour vous.",
    },
  ];

  return (
    <section className="border-y border-ink-200/70 bg-ink-50/30 dark:bg-ink-100/20">
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="h-eyebrow" data-i18n="how.eyebrow" suppressHydrationWarning>Comment ça fonctionne</p>
          <h2 className="mt-4 h-section text-balance" data-i18n="how.title" suppressHydrationWarning>
            Trois étapes. Aucun changement de code.
          </h2>
        </div>

        <ol className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5" data-reveal-group>
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative"
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <div className="glass-card shine-on-hover card h-full p-6">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-950 font-mono text-[12.5px] font-medium text-ink-50">
                  {s.n}
                </span>
                <h3 className="mt-5 text-[16px] font-semibold tracking-tight text-ink-950" data-i18n={s.titleKey}>
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-600" data-i18n={s.bodyKey}>
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 text-ink-300 sm:block"
                >
                  <IconArrowRight className="h-4 w-4" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Pricing                                                    */
/* ------------------------------------------------------------------ */

function Pricing() {
  const plans = [
    {
      key: "free",
      nameKey: "pricing.free.name",
      priceKey: "pricing.free.price",
      cadenceKey: "pricing.free.cadence",
      bodyKey: "pricing.free.body",
      ctaKey: "pricing.free.cta",
      name: "Free",
      price: "0 €",
      cadence: "à vie",
      description:
        "Pas un essai. Crée ta clé Atlas, colle-la dans Cursor, VS Code ou Cline, tu travailles. Jusqu'à 10 fournisseurs branchés, et 1 outil CLI installé en un clic — de quoi construire un projet entier.",
      cta: { label: "Commencer gratuitement", href: "https://app.atlasflash.com/signin", variant: "secondary" as const },
      highlight: false,
    },
    {
      key: "pro",
      nameKey: "pricing.pro.name",
      priceKey: "pricing.pro.price",
      cadenceKey: "pricing.pro.cadence",
      bodyKey: "pricing.pro.body",
      ctaKey: "pricing.pro.cta",
      name: "Pro",
      price: "5 €",
      cadence: "/ mois",
      description:
        "50 connexions. Vise plus de 1,5 milliard de tokens par mois en agrégeant les offres gratuites.",
      cta: { label: "Passer en Pro", href: "https://app.atlasflash.com/signin", variant: "primary" as const },
      highlight: true,
      badge: "le plus choisi",
    },
    {
      key: "unlimited",
      nameKey: "pricing.unlimited.name",
      priceKey: "pricing.unlimited.price",
      cadenceKey: "pricing.unlimited.cadence",
      bodyKey: "pricing.unlimited.body",
      ctaKey: "pricing.unlimited.cta",
      name: "Unlimited",
      price: "10 €",
      cadence: "/ mois",
      description:
        "Connexions sans limite. Pour les agents et outils qui branchent des dizaines de fournisseurs en parallèle.",
      cta: { label: "Passer en Unlimited", href: "https://app.atlasflash.com/signin", variant: "primary" as const },
      highlight: false,
    },
  ];

  // Tableau tarifaire
  const rows: { labelKey: string; free: React.ReactNode; pro: React.ReactNode; unlimited: React.ReactNode; label: string }[] = [
    {
      labelKey: "pricing.row.1",
      label: "Clé API Atlas, utilisable dans tout IDE",
      free: <CheckCell />,
      pro: <CheckCell />,
      unlimited: <CheckCell />,
    },
    {
      labelKey: "pricing.row.2",
      label: "Démarrage sans aucune clé fournisseur",
      free: <CheckCell />,
      pro: <CheckCell />,
      unlimited: <CheckCell />,
    },
    {
      labelKey: "pricing.row.3",
      label: "Connexions fournisseur",
      free: "10",
      pro: "50",
      unlimited: <span className="font-semibold text-ink-950 dark:text-ink-50" data-i18n="pricing.row.3.unlimited" suppressHydrationWarning>illimité</span>,
    },
    {
      labelKey: "pricing.row.cli",
      label: "Outils CLI installés en un clic",
      free: "1",
      pro: "5",
      unlimited: <span className="font-semibold text-ink-950 dark:text-ink-50" data-i18n="pricing.row.3.unlimited" suppressHydrationWarning>illimité</span>,
    },
    {
      labelKey: "pricing.row.4",
      label: "Plafond de tokens / requêtes",
      free: <span className="text-ink-500" data-i18n="pricing.row.4.any" suppressHydrationWarning>aucun</span>,
      pro: <span className="text-ink-500" data-i18n="pricing.row.4.any" suppressHydrationWarning>aucun</span>,
      unlimited: <span className="text-ink-500" data-i18n="pricing.row.4.any" suppressHydrationWarning>aucun</span>,
    },
    {
      labelKey: "pricing.row.5",
      label: "Routage intelligent + repli automatique",
      free: <CheckCell />,
      pro: <CheckCell />,
      unlimited: <CheckCell />,
    },
    {
      labelKey: "pricing.row.6",
      label: "Format OpenAI /v1/chat/completions",
      free: <CheckCell />,
      pro: <CheckCell />,
      unlimited: <CheckCell />,
    },
  ];

  return (
    <section id="pricing" className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center" data-reveal>
        <p className="h-eyebrow" data-i18n="pricing.eyebrow" suppressHydrationWarning>Tarifs</p>
        <h2 className="mt-4 h-section text-balance" data-i18n="pricing.title" suppressHydrationWarning>
          Un seul curseur : combien de fournisseurs tu branches.
        </h2>
        <p className="mt-4 text-lead text-pretty" data-i18n="pricing.subtitle" suppressHydrationWarning>
          Atlas ne vend pas de tokens. Tes clés appellent tes comptes, ta
          facture reste la tienne. On ne plafonne jamais ta consommation — la
          seule limite est celle de ton fournisseur.
        </p>
      </div>

      {/* 3 plan cards */}
      <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5" data-reveal-group>
        {plans.map((p, i) => (
          <li
            key={p.key}
            data-reveal
            style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            className={
              "glass-card shine-on-hover relative flex h-full flex-col rounded-xl border bg-surface p-6 sm:p-7 " +
              (p.highlight
                ? "border-ink-950 shadow-[0_0_0_1px_rgb(var(--ink-950))] dark:border-ink-50 dark:shadow-[0_0_0_1px_rgb(var(--ink-50))]"
                : "border-ink-200")
            }
          >
            {p.badge && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-ink-950 px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.12em] text-ink-50 dark:bg-ink-50 dark:text-ink-950" data-i18n="pricing.badge" suppressHydrationWarning>
                {p.badge}
              </span>
            )}

            <div>
              <h3 className="text-[15px] font-semibold tracking-tight text-ink-950" data-i18n={p.nameKey}>
                {p.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[2.5rem] font-semibold tracking-tightest text-ink-950" data-i18n={p.priceKey}>
                  {p.price}
                </span>
                <span className="text-[13.5px] text-ink-500" data-i18n={p.cadenceKey}>{p.cadence}</span>
              </div>
            </div>

            <p className="mt-4 text-[14px] leading-[1.6] text-ink-600" data-i18n={p.bodyKey}>
              {p.description}
            </p>

            <div className="mt-6 pt-2">
              <a
                href={p.cta.href}
                data-i18n={p.ctaKey}
                className={
                  p.cta.variant === "primary"
                    ? "btn-primary h-10 w-full text-[13.5px]"
                    : "btn-secondary h-10 w-full text-[13.5px]"
                }
              >
                {p.cta.label}
              </a>
            </div>
          </li>
        ))}
      </ul>

      {/* Tableau tarifaire */}
      <div className="mx-auto mt-14 max-w-4xl">
        <div className="card overflow-hidden">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-ink-200 bg-ink-50/40 text-[12px] uppercase tracking-[0.1em] text-ink-500 dark:bg-ink-100/30">
            <div className="px-4 py-3 sm:px-5" data-i18n="pricing.feature" suppressHydrationWarning>Feature</div>
            <div className="border-l border-ink-200 px-3 py-3 text-center sm:px-4" data-i18n="pricing.col.free" suppressHydrationWarning>
              Free
            </div>
            <div className="border-l border-ink-200 bg-ink-50/60 px-3 py-3 text-center text-ink-900 sm:px-4 dark:bg-ink-100/40" data-i18n="pricing.col.pro" suppressHydrationWarning>
              Pro
            </div>
            <div className="border-l border-ink-200 px-3 py-3 text-center sm:px-4" data-i18n="pricing.col.unlimited" suppressHydrationWarning>
              Unlimited
            </div>
          </div>
          <ul>
            {rows.map((r) => (
              <li
                key={r.labelKey}
                className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-ink-200 last:border-b-0"
              >
                <div className="flex items-center px-4 py-3.5 text-[13.5px] text-ink-700 sm:px-5" data-i18n={r.labelKey}>
                  {r.label}
                </div>
                <div className="flex items-center justify-center border-l border-ink-200 px-3 text-center text-[13.5px] text-ink-700 sm:px-4">
                  {r.free}
                </div>
                <div className="flex items-center justify-center border-l border-ink-200 bg-ink-50/30 px-3 text-center text-[13.5px] text-ink-900 sm:px-4 dark:bg-ink-100/20">
                  {r.pro}
                </div>
                <div className="flex items-center justify-center border-l border-ink-200 px-3 text-center text-[13.5px] text-ink-700 sm:px-4">
                  {r.unlimited}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-center text-[12.5px] text-ink-500" data-i18n="pricing.source" suppressHydrationWarning>
          Source unique : control-plane/src/plans/catalogue.ts. Aucun plafond de
          tokens, jamais.
        </p>
      </div>
    </section>
  );
}

function CheckCell() {
  return (
    <span
      aria-label="inclus"
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink-950 text-ink-50 dark:bg-ink-50 dark:text-ink-950"
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden="true" fill="none">
        <path
          d="M3 8.5l3.2 3 6.8-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Section: FAQ (native <details>)                                     */
/* ------------------------------------------------------------------ */

function Faq() {
  const items = [
    { qKey: "faq.1.q", aKey: "faq.1.a", q: "Est-ce vraiment gratuit ?", a: "Oui. Atlas exploite automatiquement les crédits gratuits offerts par les fournisseurs avant d'utiliser des ressources payantes. Vous ne payez que ce qu'Atlas ne peut pas couvrir gratuitement." },
    { qKey: "faq.2.q", aKey: "faq.2.a", q: "Dois-je modifier mon code ?", a: "Non. Atlas expose une interface strictement compatible OpenAI. Il suffit de changer deux variables d'environnement (OPENAI_BASE_URL et OPENAI_API_KEY) et votre code reste inchangé." },
    { qKey: "faq.3.q", aKey: "faq.3.a", q: "Que se passe-t-il lorsqu'un quota est atteint ?", a: "Atlas bascule automatiquement vers un autre fournisseur disponible grâce à son Smart Fallback. Votre application reçoit une réponse sans erreur 429 et sans intervention manuelle." },
    { qKey: "faq.4.q", aKey: "faq.4.a", q: "Mes clés API sont-elles sécurisées ?", a: "Les clés sont chiffrées au repos, isolées par compte, et ne sont jamais exposées au client. L'accès à l'API se fait exclusivement via votre clé Atlas." },
    { qKey: "faq.5.q", aKey: "faq.5.a", q: "Puis-je utiliser mes propres fournisseurs ?", a: "Atlas orchestre un large catalogue de fournisseurs par défaut. L'ajout de clés personnelles est en cours et sera disponible prochainement." },
  ];

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center" data-reveal>
        <p className="h-eyebrow" data-i18n="faq.eyebrow" suppressHydrationWarning>Questions fréquentes</p>
        <h2 className="mt-4 h-section text-balance" data-i18n="faq.title" suppressHydrationWarning>Tout ce qu&apos;il faut savoir.</h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl" data-reveal>
        <div className="card divide-y divide-ink-200 overflow-hidden">
          {items.map((it) => (
            <details
              key={it.qKey}
              className="group p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink-950">
                <span data-i18n={it.qKey}>{it.q}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-transform duration-200 group-open:rotate-45"
                >
                  <IconPlus />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.65] text-ink-600" data-i18n={it.aKey}>
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section: Final CTA                                                  */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="container-page pb-24 pt-12 sm:pb-32 sm:pt-16">
      <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-ink-950 text-ink-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18] grid-bg dark:opacity-[0.4]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-ink-50/10 blur-3xl"
        />
        <div className="relative px-6 py-16 text-center sm:px-10 sm:py-20" data-reveal>
          <div className="mx-auto mb-7 flex justify-center">
            <AtlasMark className="h-12 w-12" />
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]" data-i18n="final.title" suppressHydrationWarning>
            Arrêtez de gérer vos fournisseurs IA.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.6] text-ink-400 sm:text-base" data-i18n="final.subtitle" suppressHydrationWarning>
            Atlas s&apos;occupe du routage, des quotas, du Smart Fallback et de
            l&apos;orchestration. Vous développez. Atlas fait le reste.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://app.atlasflash.com/signin"
              data-i18n="final.cta.primary"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink-50 px-5 text-[14px] font-medium text-ink-950 transition-colors hover:bg-ink-100"
             suppressHydrationWarning>
              Créer mon compte gratuitement
              <IconArrowRight />
            </a>
            <a
              href="https://app.atlasflash.com/signin"
              data-i18n="final.cta.secondary"
              className="inline-flex h-11 items-center justify-center rounded-md border border-ink-50/20 bg-transparent px-5 text-[14px] font-medium text-ink-50 transition-colors hover:bg-ink-50/10"
             suppressHydrationWarning>
              Se connecter
            </a>
          </div>
          <p className="mt-6 text-[12.5px] text-ink-500" data-i18n="final.trust" suppressHydrationWarning>
            Sans carte bancaire · Compte créé en moins d&apos;une minute
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function SiteFooter() {
  const cols = [
    {
      titleKey: "footer.col.atlas",
      title: "Atlas",
      links: [
        { key: "footer.link.signin", label: "Connexion", href: "https://app.atlasflash.com/signin" },
        { key: "footer.link.signup", label: "Créer un compte", href: "https://app.atlasflash.com/signin" },
      ],
    },
    {
      titleKey: "footer.col.product",
      title: "Produit",
      links: [
        { key: "footer.link.compatible", label: "Compatible OpenAI", href: "#tools" },
      ],
    },
    {
      titleKey: "footer.col.legal",
      title: "Légal",
      links: [
        { key: "footer.link.terms", label: "Conditions", href: "/terms" },
        { key: "footer.link.privacy", label: "Confidentialité", href: "/privacy" },
        { key: "footer.link.mentions", label: "Mentions légales", href: "/mentions-legales" },
      ],
    },
    {
      titleKey: "footer.col.contact",
      title: "Contact",
      links: [
        // Pas de `key` en dictionnaire i18n pour ces deux liens : l'adresse et
        // le numéro sont des valeurs dynamiques (EDITEUR), jamais du texte à
        // traduire. Le script de swap ignore silencieusement une clé absente
        // du dictionnaire (voir `apply()` dans layout.tsx), donc `data-i18n`
        // reste posé pour la cohérence du composant sans jamais rien écraser.
        { key: "footer.link.email", label: EDITEUR.email, href: `mailto:${EDITEUR.email}` },
        {
          key: "footer.link.phone",
          label: EDITEUR.telephone,
          href: `tel:${EDITEUR.telephone.replace(/\s/g, "")}`,
        },
      ],
    },
  ];

  return (
    <footer className="border-t border-ink-200 bg-transparent">
      <div className="container-page py-14" data-reveal>
        {/*
          Cinq blocs depuis l'ajout de « Contact » : la marque plus quatre
          colonnes. À quatre colonnes sur tablette, la cinquième passait seule
          à la ligne ; on descend donc à trois avant d'ouvrir à cinq en large.
        */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <a href="/" className="flex items-center gap-2 text-ink-950">
              <AtlasMark className="h-7 w-7" />
              <span className="text-[15px] font-semibold tracking-tight">
                Atlas
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[13.5px] leading-[1.6] text-ink-500" data-i18n="footer.tagline" suppressHydrationWarning>
              Le pilote automatique de vos appels IA. Une seule API, des
              centaines de modèles, gratuit d&apos;abord.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.titleKey}>
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-500" data-i18n={c.titleKey}>
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.key}>
                    <a
                      href={l.href}
                      data-i18n={l.key}
                      className="text-[14px] text-ink-700 transition-colors hover:text-ink-950"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-[12.5px] text-ink-500 sm:flex-row sm:items-center">
          <p data-i18n="footer.copyright" suppressHydrationWarning>© {new Date().getFullYear()} Atlas. Tous droits réservés.</p>
          <p>
            <a
              href="https://app.atlasflash.com"
              className="text-ink-700 transition-colors hover:text-ink-950"
            >
              app.atlasflash.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <main>
      <TopNav />
      <Hero />
      <ProofBand />
      <DesignedToSave />
      <section id="why">
        <WhyAtlas />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="tools">
        <CompatibleTools />
      </section>
      <HowItWorks />
      <Pricing />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
