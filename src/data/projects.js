// Données du portfolio EVOLYX Digital
// Textes rédigés en premier jet -- à relire et personnaliser avant mise en ligne

export const projects = [
  {
    slug: 'talky-alanya',
    category: 'realtime',
    title: 'Talky',
    subtitle: { fr: 'Messagerie mobile en temps réel', en: 'Real-time mobile messaging' },
    stack: ['Flutter', 'Node.js', 'Socket.IO', 'PostgreSQL'],
    featured: true,
    context: {
      fr: "Talky est une application de messagerie mobile pensée pour offrir une expérience de discussion fluide et instantanée, avec statuts de message en temps réel (envoyé, distribué, lu).",
      en: 'Talky is a mobile messaging application designed for a fluid, instant chat experience, with real-time message status (sent, delivered, read).',
    },
    solution: {
      fr: "Développement d'une application Flutter connectée à Alanya, un backend Node.js/Socket.IO gérant les connexions temps réel, la synchronisation des statuts de messages et l'authentification sécurisée.",
      en: 'Built a Flutter application connected to Alanya, a Node.js/Socket.IO backend handling real-time connections, message status synchronization and secure authentication.',
    },
    highlight: {
      fr: "Gestion fine de la synchronisation temps réel entre client mobile et serveur, y compris en conditions réseau instables.",
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
      fr: "Les universités camerounaises manquent d'un espace centralisé pour partager et retrouver facilement les travaux académiques produits localement.",
      en: 'Cameroonian universities lack a centralized space to easily share and find locally produced academic work.',
    },
    solution: {
      fr: "Plateforme de dépôt académique en accès ouvert avec recherche plein texte avancée sur PostgreSQL, développée lors du Hackathon J.U.I.N 2026, avec un backend FastAPI et un frontend React/Vite.",
      en: 'Open-access academic repository platform with advanced full-text search on PostgreSQL, built during the J.U.I.N 2026 Hackathon, with a FastAPI backend and React/Vite frontend.',
    },
    highlight: {
      fr: "Recherche plein texte performante, conçue pour un passage à l'échelle sur de gros volumes de documents.",
      en: 'High-performance full-text search, designed to scale across large document volumes.',
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
      fr: "Les PME qui gèrent des stocks physiques ont besoin d'un outil clair pour suivre leurs entrées, sorties, niveaux d'alerte et mouvements, sans complexité inutile.",
      en: 'SMEs managing physical inventory need a clear tool to track stock in/out, alert levels and movements without unnecessary complexity.',
    },
    solution: {
      fr: "Application de gestion de stock complète : tableau de bord avec indicateurs clés, gestion des produits, suivi des mouvements, alertes de stock bas, rapports et calendrier des opérations.",
      en: 'Complete inventory management application: KPI dashboard, product management, movement tracking, low-stock alerts, reports and operations calendar.',
    },
    highlight: {
      fr: "Interface moderne et réactive, pensée pour un usage quotidien rapide en contexte commercial.",
      en: 'Modern, responsive interface designed for fast daily use in a retail context.',
    },
  },
  {
    slug: 'mini-marche',
    category: 'desktop',
    title: 'Mini Marché',
    subtitle: { fr: "Application desktop de gestion d'épicerie", en: 'Desktop grocery store management app' },
    stack: ['Desktop App'],
    featured: false,
    context: {
      fr: "Les petites épiceries de quartier ont besoin d'un outil simple et local pour gérer leurs ventes et leur stock, sans dépendre d'une connexion Internet permanente.",
      en: 'Small neighborhood grocery stores need a simple, local tool to manage sales and inventory, without depending on a permanent internet connection.',
    },
    solution: {
      fr: "Application desktop autonome pour la gestion quotidienne d'une épicerie : ventes, inventaire et suivi des produits, fonctionnant sans connexion permanente.",
      en: 'Standalone desktop application for daily grocery store management: sales, inventory and product tracking, working without a permanent connection.',
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
    subtitle: { fr: 'Site vitrine complet avec CMS', en: 'Full showcase website with CMS' },
    stack: ['CMS', 'Web'],
    featured: false,
    url: 'https://jk-it-solutions.vercel.app/',
    context: {
      fr: "Une entreprise IT avait besoin d'un site vitrine professionnel, mais aussi de la liberté de mettre à jour son contenu sans dépendre d'un développeur à chaque changement.",
      en: 'An IT company needed a professional showcase website, but also the freedom to update its content without depending on a developer for every change.',
    },
    solution: {
      fr: "Site vitrine complet avec système de gestion de contenu (CMS) intégré, permettant au client de modifier lui-même ses pages, services et actualités.",
      en: 'Full showcase website with an integrated content management system (CMS), letting the client edit their own pages, services and news.',
    },
    highlight: {
      fr: "Autonomie totale du client sur la mise à jour du contenu, sans intervention technique.",
      en: 'Full client autonomy over content updates, with no technical intervention needed.',
    },
  },
  {
    slug: 'oss-gestion',
    category: 'business',
    title: 'OSS',
    subtitle: { fr: "Gestion d'un organisme de sécurité sociale", en: 'Social security organization management' },
    stack: ['JavaFX', 'PostgreSQL', 'Web'],
    featured: false,
    url: 'https://gestion-ss-app.vercel.app/',
    context: {
      fr: "Les organismes de sécurité sociale gèrent des volumes importants de dossiers d'assurés, de cotisations et de prestations, nécessitant un système fiable et structuré.",
      en: 'Social security organizations manage large volumes of member records, contributions and benefits, requiring a reliable, structured system.',
    },
    solution: {
      fr: "Application de gestion complète pour un organisme de sécurité sociale, couvrant la gestion des assurés, des cotisations et des prestations, avec une base de données PostgreSQL robuste.",
      en: 'Complete management application for a social security organization, covering member records, contributions and benefits, backed by a robust PostgreSQL database.',
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
    subtitle: { fr: 'MVP fintech pour la comptabilité des PME', en: 'Fintech MVP for SME accounting' },
    stack: ['React', 'Vite', 'FastAPI', 'Dexie.js'],
    featured: false,
    context: {
      fr: "De nombreuses PME africaines gèrent encore leur comptabilité de façon informelle, faute d'outils simples et adaptés à leur réalité.",
      en: 'Many African SMEs still manage their accounting informally, for lack of tools suited to their reality.',
    },
    solution: {
      fr: "MVP développé lors d'un hackathon fintech : outil de comptabilité simplifié pour PME, avec stockage local (Dexie.js) pour un fonctionnement fluide même en connexion limitée.",
      en: 'MVP built during a fintech hackathon: simplified accounting tool for SMEs, with local storage (Dexie.js) for smooth operation even with limited connectivity.',
    },
    highlight: {
      fr: "Conçu pour fonctionner même avec une connexion Internet instable, contrainte réelle du terrain.",
      en: 'Designed to work even with unstable internet connectivity, a real field constraint.',
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
