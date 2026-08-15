import type { MetadataRoute } from "next";

/**
 * Plan du site — un seul fichier `page.tsx`, donc une seule adresse à
 * déclarer. Écrit comme fichier spécial Next.js plutôt que XML statique : le
 * jour où une deuxième page apparaît (tarifs, documentation…), elle s'ajoute
 * ici sans avoir à se souvenir qu'un fichier séparé existe et doit suivre.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.atlasflash.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
