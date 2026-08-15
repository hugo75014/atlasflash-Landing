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
   * Relevé le 2026-08-15 au registre public (API Recherche d'entreprises de
   * l'État, SIREN 839385499) : établissement siège `83938549900018`, actif.
   * Il portait auparavant la mention « À COMPLÉTER », qui s'affichait telle
   * quelle sur la page publique — un placeholder livré vaut pire qu'un champ
   * absent. Ne jamais le remplacer par une valeur non vérifiée au registre.
   */
  siret: "839 385 499 00018",
  email: "hello@atlasflash.com",
  telephone: "+33 6 59 80 24 91",
  directeurPublication: "Hugues Bellevue",
  /**
   * DEUX hébergeurs, et c'est voulu : la LCEN impose de déclarer qui héberge
   * **ce site**, pas seulement l'infrastructure du produit. Le site vitrine est
   * servi par Netlify (en-tête `server: Netlify`, vérifié le 2026-08-15) ;
   * l'application `app.atlasflash.com` tourne sur le serveur Contabo. Ne
   * déclarer que Contabo, comme c'était le cas, désignait le mauvais
   * hébergeur pour la page qui porte la mention.
   */
  hebergeurs: [
    {
      quoi: "Site atlasflash.com",
      nom: "Netlify, Inc.",
      adresse: "512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis",
    },
    {
      quoi: "Application app.atlasflash.com",
      nom: "Contabo GmbH",
      adresse: "Aschauer Straße 32a, 81549 Munich, Allemagne",
    },
  ],
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
