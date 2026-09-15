// Impacts métier mis en avant sur l'accueil — formulations factuelles, pas de citations client.

export const projectOutcomes = [
  {
    project: 'jk-it-solutions',
    outcome: {
      fr: "Site vitrine avec CMS : le client met à jour pages, services et actualités sans passer par un développeur à chaque changement.",
      en: 'Showcase site with CMS: the client updates pages, services and news without calling a developer for every change.',
    },
  },
  {
    project: 'oss-gestion',
    outcome: {
      fr: "Gestion structurée des assurés, cotisations et prestations pour un organisme de sécurité sociale, sur une base de données rigoureuse.",
      en: 'Structured management of members, contributions and benefits for a social security organization, on a rigorous data model.',
    },
  },
  {
    project: 'mini-marche',
    outcome: {
      fr: "Point de vente et stock sur un seul poste : catalogue, panier et paiement en FCFA pour les épiceries de quartier.",
      en: 'Till and inventory on one terminal: catalog, cart and FCFA checkout for neighborhood grocery stores.',
    },
  },
];

export function getProjectOutcomes() {
  return projectOutcomes.filter((item) => item.outcome?.fr?.trim());
}
