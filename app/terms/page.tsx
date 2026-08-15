import type { Metadata } from "next";
import Link from "next/link";
import { EDITEUR, PageLegale, Puces, Section } from "../legal/shared";

export const metadata: Metadata = {
  title: "Conditions d’utilisation",
  description: "Ce que le service fait, et ce que chacun s'engage à respecter.",
};

/**
 * Conditions générales d'utilisation.
 *
 * Décrit ce qu'Atlas fait tel qu'il est construit : une passerelle vers des
 * fournisseurs d'IA tiers, pas un fournisseur de modèles lui-même.
 */
export default function ConditionsUtilisation() {
  return (
    <PageLegale
      titre="Conditions générales d’utilisation"
      sousTitre="Ce que le service fait, ce qu’il ne fait pas, et ce que chacun s’engage à respecter."
    >
      <Section titre="Objet">
        <p>
          Ces conditions régissent l’utilisation d’Atlas, une passerelle qui route vos appels
          d’intelligence artificielle vers les fournisseurs de votre choix (OpenAI, Anthropic,
          et d’autres) derrière une seule clé et un seul point d’accès. Les utiliser, c’est les
          accepter.
        </p>
      </Section>

      <Section titre="Le compte et l’organisation">
        <Puces
          items={[
            "Un compte vous identifie ; une organisation regroupe vos clés, vos quotas et les membres qui y ont accès.",
            "Vous êtes responsable de la confidentialité de vos identifiants et de vos clés d’accès aux fournisseurs.",
            "Les crédits gratuits, quand ils existent, sont consommés avant tout usage payant — leur volume peut évoluer.",
          ]}
        />
      </Section>

      <Section titre="Ce qu’Atlas fait, et ce qu’il ne fait pas">
        <p>
          Atlas route vos requêtes vers le fournisseur d’IA choisi ; il n’édite pas les modèles
          et ne garantit pas leurs réponses. Le contenu produit par un modèle relève du
          fournisseur qui l’a généré. Le service est fourni en l’état, sans garantie d’absence
          totale d’interruption.
        </p>
      </Section>

      <Section titre="Usage interdit">
        <Puces
          items={[
            "Utiliser le service pour générer ou diffuser du contenu illégal.",
            "Contourner les quotas ou les mesures de sécurité du service.",
            "Revendre l’accès sans autorisation.",
            "Perturber le fonctionnement du service ou en extraire massivement le contenu.",
          ]}
        />
        <p>Un compte utilisé de la sorte est suspendu.</p>
      </Section>

      <Section titre="Résiliation">
        <p>
          Vous pouvez fermer votre compte à tout moment. Nous pouvons suspendre ou résilier un
          compte en cas de manquement à ces conditions, après en avoir informé son titulaire
          quand la situation le permet.
        </p>
      </Section>

      <Section titre="Évolution et droit applicable">
        <p>
          Ces conditions peuvent évoluer ; la version applicable est celle affichée ici. Le
          droit français s’applique. En cas de litige, une solution amiable est recherchée
          avant toute action, en écrivant à {EDITEUR.email}.
        </p>
      </Section>

      <Section titre="Voir aussi">
        <p>
          <Link href="/privacy" className="text-ink-950 underline underline-offset-4">
            Politique de confidentialité
          </Link>{" "}
          ·{" "}
          <Link href="/mentions-legales" className="text-ink-950 underline underline-offset-4">
            Mentions légales
          </Link>
        </p>
      </Section>
    </PageLegale>
  );
}
