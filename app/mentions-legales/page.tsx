import type { Metadata } from "next";
import { EDITEUR, PageLegale, Puces, Section } from "../legal/shared";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Qui édite Atlas, et qui l'héberge.",
};

/**
 * Mentions légales — obligatoires pour tout site accessible au public
 * (art. 6-III de la loi pour la confiance dans l'économie numérique).
 */
export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales" sousTitre="Qui édite ce site, et qui l’héberge.">
      <Section titre="Éditeur du site">
        <Puces
          items={[
            <>Nom commercial : {EDITEUR.nom}</>,
            <>Raison sociale : {EDITEUR.raisonSociale}</>,
            <>Forme juridique : {EDITEUR.formeJuridique}</>,
            <>Siège social : {EDITEUR.adresse}</>,
            <>SIREN : {EDITEUR.siren}</>,
            <>SIRET : {EDITEUR.siret}</>,
            <>
              Contact : {EDITEUR.email} — {EDITEUR.telephone}
            </>,
            <>Directeur de la publication : {EDITEUR.directeurPublication}</>,
          ]}
        />
      </Section>

      <Section titre="Hébergement">
        <p>
          {EDITEUR.hebergeur.nom} — {EDITEUR.hebergeur.adresse}
        </p>
      </Section>

      <Section titre="Rôle du service">
        <p>
          Atlas est une passerelle qui route les appels vers des fournisseurs d’intelligence
          artificielle tiers (OpenAI, Anthropic, et d’autres). Le contenu généré par ces
          modèles relève de la responsabilité du fournisseur qui l’a produit ; Atlas fournit
          l’infrastructure de routage, l’authentification et le suivi d’usage, pas les modèles
          eux-mêmes.
        </p>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          Les textes, l’interface et les éléments graphiques de ce site sont protégés. Toute
          reproduction sans autorisation est interdite.
        </p>
      </Section>

      <Section titre="Contact">
        <p>
          Pour toute question sur ce site ou le service, écrivez à {EDITEUR.email}.
        </p>
      </Section>
    </PageLegale>
  );
}
