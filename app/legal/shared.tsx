import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Éditeur du site, déclaré une seule fois.
 *
 * Ces valeurs font foi en cas de réclamation : les recopier dans trois pages
 * serait le plus sûr moyen d'en laisser une périmée le jour où l'une change.
 */
export const EDITEUR = {
  nom: "Atlas",
  raisonSociale: "BELLEVUE HUGUES",
  formeJuridique: "Entrepreneur individuel",
  adresse: "8 rue Maurice Bouchor, 75014 Paris, France",
  siren: "839 385 499 RCS Paris",
  /**
   * Le SIREN identifie l'entreprise ; le SIRET (SIREN + 5 chiffres) identifie
   * cet établissement précis et manquait au moment de la rédaction. Un SIRET
   * inventé serait pire qu'absent — il désignerait un établissement qui n'est
   * pas le bon.
   */
  siret: "À COMPLÉTER — numéro SIRET (SIREN + 5 chiffres)",
  email: "hello@atlasflash.com",
  telephone: "+33 6 59 80 24 91",
  directeurPublication: "Hugues Bellevue",
  hebergeur: {
    nom: "Contabo GmbH",
    adresse: "Aschauer Straße 32a, 81549 Munich, Allemagne",
  },
};

/**
 * Coquille commune aux trois documents légaux.
 *
 * Le composant d'en-tête de la page d'accueil (`AtlasMark`, la navigation)
 * vit dans `page.tsx`, un fichier de plus de mille lignes qu'il n'y a pas
 * lieu de rouvrir pour trois pages de texte. Celle-ci reprend seulement les
 * classes utilitaires déjà déclarées dans `globals.css` — même fond, mêmes
 * teintes `ink-*`, même largeur de page — sans dupliquer la logique.
 */
export function PageLegale({
  titre,
  sousTitre,
  children,
}: {
  titre: string;
  sousTitre?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-5 py-14 sm:px-6">
      <div className="container-page max-w-3xl space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-ink-500 transition-colors hover:text-ink-950"
        >
          ← Retour à l’accueil
        </Link>

        <div className="space-y-2">
          <h1 className="text-2xl font-medium tracking-tight text-ink-950">
            {titre}
          </h1>
          {sousTitre && <p className="text-[13px] text-ink-500">{sousTitre}</p>}
        </div>

        <div className="space-y-8 text-[14.5px] leading-[1.7] text-ink-700">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Section({
  titre,
  children,
}: {
  titre: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h2 className="text-[15px] font-medium text-ink-950">{titre}</h2>
      {children}
    </section>
  );
}

export function Puces({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
