// Témoignages clients — EVOLYX Digital
//
// ⚠️ Les trois entrées ci-dessous sont des EMPLACEMENTS, pas des témoignages.
//    Elles portent volontairement un texte d'instruction pour qu'on ne puisse
//    pas les confondre avec de vrais avis. Remplace-les par les phrases réelles
//    de tes clients, avec leur accord.
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
// valide, la section disparaît entièrement du site — mieux vaut pas de
// témoignages que des témoignages inventés.

export const testimonials = [
  {
    quote: {
      fr: "Remplacez ce texte par la phrase de votre client. Le plus convaincant : un problème concret avant, un résultat mesurable après.",
      en: 'Replace this text with your client’s own words. The most convincing ones name a concrete problem before, and a measurable result after.',
    },
    author: 'Nom du client',
    role: { fr: 'Fonction', en: 'Role' },
    company: 'Entreprise',
    project: 'jk-it-solutions',
    avatar: '',
  },
  {
    quote: {
      fr: "Deuxième emplacement. Une citation courte et précise vaut mieux qu'un paragraphe élogieux et vague.",
      en: 'Second placeholder. A short, specific quote beats a long, vague compliment.',
    },
    author: 'Nom du client',
    role: { fr: 'Fonction', en: 'Role' },
    company: 'Entreprise',
    project: '',
    avatar: '',
  },
  {
    quote: {
      fr: "Troisième emplacement. Demandez l'accord écrit du client avant de publier son nom et celui de son entreprise.",
      en: 'Third placeholder. Get written permission from the client before publishing their name and company.',
    },
    author: 'Nom du client',
    role: { fr: 'Fonction', en: 'Role' },
    company: 'Entreprise',
    project: 'oss-gestion',
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
