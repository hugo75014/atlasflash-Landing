export const dynamic = "force-static";

const body = `# Atlas

> Atlas est une passerelle IA unique : une seule clé API, un seul endpoint, des centaines de modèles orchestrés automatiquement. Bascule intelligente (Smart Fallback) entre fournisseurs, crédits gratuits exploités avant le payant.

Atlas s'adresse aux développeurs et équipes produit qui veulent appeler n'importe quel modèle IA (OpenAI, Anthropic, Google, Mistral, et des centaines d'autres) sans gérer une clé par fournisseur ni coder de logique de repli.

## Pages

- [Accueil](https://www.atlasflash.com/): présentation du produit, tarifs, fonctionnement
- [Mentions légales](https://www.atlasflash.com/mentions-legales/)
- [Confidentialité](https://www.atlasflash.com/privacy/)
- [Conditions d'utilisation](https://www.atlasflash.com/terms/)

## Application

- [app.atlasflash.com](https://app.atlasflash.com/): console, clés API, catalogue de modèles, facturation
`;

export function GET() {
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
