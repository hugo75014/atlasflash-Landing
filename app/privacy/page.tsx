import type { Metadata } from "next";
import Link from "next/link";
import { EDITEUR, PageLegale, Puces, Section } from "../legal/shared";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Ce qu'Atlas enregistre, pourquoi, et comment reprendre la main.",
};

/**
 * Politique de confidentialité.
 *
 * Décrit ce que le service enregistre réellement (comptes, organisations,
 * clés fournisseur chiffrées, journaux d'audit) — pas une politique type
 * plus large que l'usage réel, qui serait une promesse invérifiable.
 */
export default function Confidentialite() {
  return (
    <PageLegale
      titre="Politique de confidentialité"
      sousTitre="Ce que nous enregistrons, pourquoi, et comment reprendre la main."
    >
      <Section titre="Ce que nous enregistrons">
        <Puces
          items={[
            "Votre identité : adresse e-mail, et éventuellement votre identité via connexion tierce (Google, GitHub…).",
            "Votre organisation : nom, membres, rôles.",
            "Vos clés d’accès aux fournisseurs d’IA (OpenAI, Anthropic…), chiffrées avant stockage — nous ne les affichons jamais en clair après leur saisie.",
            "L’usage de l’API : volume d’appels, modèles utilisés, pour appliquer les quotas et facturer si applicable.",
            "Des journaux d’audit techniques (action effectuée, adresse IP, horodatage) pour la sécurité du compte.",
          ]}
        />
        <p>
          Le contenu de vos requêtes envoyées aux modèles d’IA transite par Atlas pour être
          routé vers le bon fournisseur ; il n’est pas conservé au-delà du temps nécessaire à
          cet acheminement.
        </p>
      </Section>

      <Section titre="Pourquoi, et à quel titre">
        <Puces
          items={[
            "Fournir le service : router vos appels, appliquer vos quotas, vous authentifier — exécution du contrat.",
            "Sécurité du compte et prévention des abus — intérêt légitime.",
            "Vous contacter au sujet du service — votre consentement, retirable à tout moment.",
          ]}
        />
        <p>Vos données ne sont ni vendues, ni louées, ni utilisées pour de la publicité ciblée.</p>
      </Section>

      <Section titre="Qui y a accès">
        <Puces
          items={[
            "Les membres de votre organisation, selon leur rôle.",
            "L’exploitant du service, pour le support et la sécurité.",
            "Les fournisseurs d’IA que vous configurez, dans la seule mesure nécessaire à l’exécution de vos requêtes vers eux.",
            "Nos prestataires techniques (hébergement, e-mail). Ils agissent sur instruction.",
          ]}
        />
      </Section>

      <Section titre="Vos droits">
        <p>
          Vous pouvez accéder à vos données, les corriger, les faire effacer, en obtenir une
          copie, ou vous opposer à leur traitement en écrivant à {EDITEUR.email}. En cas de
          désaccord, vous pouvez saisir la CNIL (www.cnil.fr).
        </p>
      </Section>

      <Section titre="Cookies">
        <p>
          Ce site utilise uniquement des cookies strictement nécessaires à la connexion et au
          fonctionnement du tableau de bord. Aucun traceur publicitaire, aucune mesure
          d’audience tierce.
        </p>
      </Section>

      <Section titre="Voir aussi">
        <p>
          <Link href="/terms" className="text-ink-950 underline underline-offset-4">
            Conditions générales d’utilisation
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
