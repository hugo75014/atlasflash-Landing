import type { MetadataRoute } from "next";

/** Écrit une fois, réutilisé pour chaque page — jamais recopié à la main. */
const url = (
  chemin: string,
  priorite: number,
  frequence: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap[number] => ({
  url: `https://www.atlasflash.com${chemin}`,
  lastModified: new Date(),
  changeFrequency: frequence,
  priority: priorite,
});

/**
 * Plan du site, écrit comme fichier spécial Next.js plutôt que XML statique :
 * une page de plus ici suffit, pas besoin de se souvenir qu'un fichier séparé
 * existe et doit suivre.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    url("/", 1, "weekly"),
    url("/mentions-legales", 0.2, "yearly"),
    url("/privacy", 0.2, "yearly"),
    url("/terms", 0.2, "yearly"),
  ];
}
