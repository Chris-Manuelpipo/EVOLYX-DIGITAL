// Données du portfolio EVOLYX Digital
// image : chemin public optionnel, ex. '/portfolio/talky.webp' (déposer le fichier dans public/portfolio/)
// url : preview live si le site est public

export const projects = [
  {
    slug: 'talky-alanya',
    category: 'realtime',
    title: 'Talky',
    subtitle: { fr: 'Messagerie mobile en temps réel', en: 'Real-time mobile messaging' },
    stack: ['Flutter', 'Node.js', 'Socket.IO', 'PostgreSQL'],
    featured: true,
    context: {
      fr: "Talky est une application de messagerie mobile pensée pour une discussion fluide et instantanée, avec statuts de message en temps réel (envoyé, distribué, lu).",
      en: 'Talky is a mobile messaging application designed for a fluid, instant chat experience, with real-time message status (sent, delivered, read).',
    },
    solution: {
      fr: "Application Flutter connectée à Alanya, un backend Node.js/Socket.IO qui gère les connexions temps réel, la synchronisation des statuts et l'authentification sécurisée.",
      en: 'A Flutter app connected to Alanya, a Node.js/Socket.IO backend handling real-time connections, message-status synchronization and secure authentication.',
    },
    highlight: {
      fr: "Synchronisation fine entre client mobile et serveur, y compris en conditions réseau instables.",
      en: 'Fine-grained real-time synchronization between mobile client and server, including under unstable network conditions.',
    },
  },
  {
    slug: 'openscience-hub',
    category: 'web',
    title: 'OpenScience Hub',
    subtitle: { fr: 'Répertoire académique ouvert', en: 'Open academic repository' },
    stack: ['FastAPI', 'PostgreSQL', 'React', 'Vite'],
    featured: true,
    context: {
      fr: "Les universités camerounaises manquent d'un espace centralisé pour partager et retrouver les travaux académiques produits localement.",
      en: 'Cameroonian universities lack a centralized space to share and find locally produced academic work.',
    },
    solution: {
      fr: "Plateforme de dépôt académique en accès ouvert, recherche plein texte sur PostgreSQL, backend FastAPI et frontend React/Vite.",
      en: 'Open-access academic repository with full-text search on PostgreSQL, a FastAPI backend and a React/Vite frontend.',
    },
    highlight: {
      fr: "Recherche plein texte conçue pour passer à l'échelle sur de gros volumes de documents.",
      en: 'Full-text search designed to scale across large document volumes.',
    },
  },
  {
    slug: 'stock-manager',
    category: 'business',
    title: 'Stock Manager',
    subtitle: { fr: 'Plateforme de gestion de stock', en: 'Inventory management platform' },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    featured: true,
    context: {
      fr: "Les PME qui gèrent des stocks physiques ont besoin d'un outil clair pour suivre entrées, sorties, alertes et mouvements, sans complexité inutile.",
      en: 'SMEs managing physical inventory need a clear tool to track stock in/out, alert levels and movements without unnecessary complexity.',
    },
    solution: {
      fr: "Application de gestion de stock : tableau de bord, produits, mouvements, alertes de stock bas, rapports et calendrier des opérations.",
      en: 'Inventory application: KPI dashboard, product management, movement tracking, low-stock alerts, reports and operations calendar.',
    },
    highlight: {
      fr: "Interface pensée pour un usage quotidien rapide en contexte commercial.",
      en: 'Interface designed for fast daily use in a retail context.',
    },
  },
  {
    slug: 'mini-marche',
    category: 'desktop',
    title: 'Mini Marché',
    subtitle: { fr: "Application desktop de gestion d'épicerie", en: 'Desktop grocery store management app' },
    stack: ['Application native', 'Hors ligne'],
    featured: false,
    context: {
      fr: "Les petites épiceries de quartier ont besoin d'un outil simple et local pour gérer ventes et stock, sans connexion Internet permanente.",
      en: 'Small neighborhood grocery stores need a simple, local tool to manage sales and inventory, without depending on a permanent internet connection.',
    },
    solution: {
      fr: "Application desktop autonome : ventes, inventaire et suivi des produits, utilisable sans connexion permanente.",
      en: 'Standalone desktop application: sales, inventory and product tracking, usable without a permanent connection.',
    },
    highlight: {
      fr: "Fonctionne en local, adapté aux commerces avec un accès Internet limité.",
      en: 'Runs locally, suited to businesses with limited internet access.',
    },
  },
  {
    slug: 'jk-it-solutions',
    category: 'web',
    title: 'JK IT Solutions',
    subtitle: { fr: 'Site vitrine avec CMS', en: 'Showcase website with CMS' },
    stack: ['CMS', 'Vercel'],
    featured: false,
    url: 'https://jk-it-solutions.vercel.app/',
    context: {
      fr: "Une entreprise IT avait besoin d'un site vitrine professionnel, et de la liberté de mettre à jour son contenu sans développeur à chaque changement.",
      en: 'An IT company needed a professional showcase website, and the freedom to update content without a developer for every change.',
    },
    solution: {
      fr: "Site vitrine avec CMS intégré : le client modifie lui-même pages, services et actualités.",
      en: 'Showcase website with an integrated CMS: the client edits pages, services and news themselves.',
    },
    highlight: {
      fr: "Autonomie du client sur le contenu, sans intervention technique à chaque mise à jour.",
      en: 'Client autonomy over content, with no technical intervention for each update.',
    },
  },
  {
    slug: 'oss-gestion',
    category: 'business',
    title: 'OSS',
    subtitle: { fr: "Gestion d'un organisme de sécurité sociale", en: 'Social security organization management' },
    stack: ['JavaFX', 'PostgreSQL', 'React'],
    featured: false,
    url: 'https://gestion-ss-app.vercel.app/',
    context: {
      fr: "Les organismes de sécurité sociale gèrent des volumes importants de dossiers d'assurés, de cotisations et de prestations : il faut un système fiable et structuré.",
      en: 'Social security organizations manage large volumes of member records, contributions and benefits, and need a reliable, structured system.',
    },
    solution: {
      fr: "Application de gestion complète : assurés, cotisations et prestations, avec une base PostgreSQL robuste et une interface web.",
      en: 'Complete management application: members, contributions and benefits, backed by PostgreSQL and a web interface.',
    },
    highlight: {
      fr: "Modélisation rigoureuse des données pour un domaine réglementé et sensible.",
      en: 'Rigorous data modeling for a regulated, sensitive domain.',
    },
  },
  {
    slug: 'pme-compta',
    category: 'fintech',
    title: 'PME Compta',
    subtitle: { fr: 'Comptabilité simplifiée pour PME', en: 'Simplified accounting for SMEs' },
    stack: ['React', 'Vite', 'FastAPI', 'Dexie.js'],
    featured: false,
    context: {
      fr: "De nombreuses PME africaines gèrent encore leur comptabilité de façon informelle, faute d'outils simples et adaptés à leur réalité.",
      en: 'Many African SMEs still manage their accounting informally, for lack of tools suited to their reality.',
    },
    solution: {
      fr: "Outil de comptabilité simplifié pour PME, avec stockage local (Dexie.js) pour rester fluide même en connexion limitée.",
      en: 'Simplified accounting tool for SMEs, with local storage (Dexie.js) so it stays usable even with limited connectivity.',
    },
    highlight: {
      fr: "Conçu pour fonctionner avec une connexion Internet instable, contrainte réelle du terrain.",
      en: 'Designed to work with unstable internet connectivity, a real field constraint.',
    },
  },
];

export const categories = [
  { id: 'all', label: { fr: 'Tous', en: 'All' } },
  { id: 'web', label: { fr: 'Web', en: 'Web' } },
  { id: 'realtime', label: { fr: 'Temps réel', en: 'Real-time' } },
  { id: 'business', label: { fr: 'Métier', en: 'Business' } },
  { id: 'desktop', label: { fr: 'Desktop', en: 'Desktop' } },
  { id: 'fintech', label: { fr: 'Fintech', en: 'Fintech' } },
];

export function getCategoryLabel(categoryId, lang) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return categoryId;
  return category.label[lang] || category.label.fr;
}
