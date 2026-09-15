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
    project: 'stock-manager',
    outcome: {
      fr: "Suivi des stocks, mouvements et alertes de seuil bas dans une interface pensée pour un usage commercial quotidien.",
      en: 'Inventory, movements and low-stock alerts in an interface designed for everyday retail use.',
    },
  },
];

export function getProjectOutcomes() {
  return projectOutcomes.filter((item) => item.outcome?.fr?.trim());
}
