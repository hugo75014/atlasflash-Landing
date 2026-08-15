import type { MetadataRoute } from "next";

/**
 * `robots.txt` généré par Next.js — App Router lit ce fichier spécial et le
 * sert automatiquement à `/robots.txt`.
 *
 * Il n'existait pas : l'URL retombait sur l'application elle-même, qui
 * renvoyait la page d'accueil en HTML. Un robot qui lit ça n'y trouve aucune
 * règle, ce qui se comprend comme « tout est permis » — mais lit surtout un
 * site mal tenu, ce qui pèse sur la confiance qu'un moteur lui accorde.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.atlasflash.com/sitemap.xml",
  };
}
