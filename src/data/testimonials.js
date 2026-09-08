// Témoignages clients — EVOLYX Digital
//
// Ces témoignages sont rédigés à partir du contexte réel des projets
// (voir src/data/projects.js). Pense à obtenir l'accord écrit de chaque
// client avant diffusion, et à remplacer les noms génériques par les vrais
// si besoin.
//
// Champs :
//   quote   {fr, en}  la phrase du client. 2 à 4 lignes, pas plus.
//   author            prénom + nom, ou prénom + initiale si le client préfère.
//   role    {fr, en}  fonction. Laisser vide ('') pour ne rien afficher.
//   company           nom de l'entreprise. Vide = masqué.
//   project           slug d'un projet de projects.js (optionnel) : le
//                     témoignage remonte alors aussi sur la page du projet.
//   avatar            chemin public optionnel, ex. '/testimonials/awa.webp'
//                     (carré, 160x160). Sans avatar, on affiche les initiales.
//
// Une entrée dont `quote.fr` est vide est ignorée. Si plus aucune entrée n'est
// valide, la section disparaît entièrement du site.

export const testimonials = [
  {
    quote: {
      fr: "Avant, modifier une page ou annoncer une actualité passait par un développeur à chaque fois. Aujourd'hui, je mets à jour le site moi-même en quelques minutes, sans dépendre de personne.",
      en: "Before, updating a page or posting news meant calling a developer every time. Now I update the site myself in minutes, without depending on anyone.",
    },
    author: 'JK IT Solutions',
    role: { fr: 'Direction', en: 'Management' },
    company: 'JK IT Solutions',
    project: 'jk-it-solutions',
    avatar: '',
  },
  {
    quote: {
      fr: "Nous avions besoin d'un outil fiable et structuré pour gérer assurés, cotisations et prestations. Le résultat est stable, bien organisé, et l'équipe a vite pris en main le quotidien.",
      en: "We needed a reliable, structured system to manage members, contributions and benefits. The result is stable, well organized, and the team picked it up quickly.",
    },
    author: 'OSS',
    role: { fr: 'Responsable du système', en: 'System manager' },
    company: 'Organisme de sécurité sociale',
    project: 'oss-gestion',
    avatar: '',
  },
  {
    quote: {
      fr: "On cherchait un outil simple pour suivre nos stocks sans usine à gaz. Le tableau de bord et les alertes de stock bas se sont révélés utiles immédiatement, dès les premières semaines.",
      en: "We were looking for a simple way to track our inventory without over-engineering. The dashboard and low-stock alerts proved useful right away, within the first weeks.",
    },
    author: 'Stock Manager',
    role: { fr: 'Gérant', en: 'Manager' },
    company: 'Commerce de détail',
    project: 'stock-manager',
    avatar: '',
  },
];

/** Entrées réellement affichables : une citation vide est ignorée. */
export function getTestimonials() {
  return testimonials.filter((item) => item.quote?.fr?.trim());
}

/** Le témoignage lié à un projet, s'il existe. */
export function getTestimonialForProject(slug) {
  if (!slug) return null;
  return getTestimonials().find((item) => item.project === slug) || null;
}

/** Initiales de repli quand aucun avatar n'est fourni. */
export function getInitials(name) {
  return (name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}
