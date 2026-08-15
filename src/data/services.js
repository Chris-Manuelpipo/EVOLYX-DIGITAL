// Données du catalogue de services EVOLYX Digital
// Chaque service est bilingue (fr/en) pour l'internationalisation

export const services = [
  {
    id: 'web',
    icon: 'FaGlobe',
    title: { fr: 'Sites & Plateformes Web', en: 'Websites & Web Platforms' },
    summary: {
      fr: 'Sites vitrines, e-commerce et plateformes web sur mesure, pensés pour convertir.',
      en: 'Custom showcase sites, e-commerce and web platforms, built to convert.',
    },
    items: {
      fr: ['Landing page', 'Site vitrine', 'Site vitrine avancé (CMS)', 'E-commerce'],
      en: ['Landing page', 'Showcase website', 'Advanced website (CMS)', 'E-commerce'],
    },
  },
  {
    id: 'mobile',
    icon: 'FaMobileAlt',
    title: { fr: 'Applications Mobiles', en: 'Mobile Applications' },
    summary: {
      fr: 'Applications Android/iOS, du simple outil au produit temps réel complexe.',
      en: 'Android/iOS applications, from simple tools to complex real-time products.',
    },
    items: {
      fr: ['App mobile simple', 'App avec backend', 'App temps réel (chat, notifications)'],
      en: ['Simple mobile app', 'App with backend', 'Real-time app (chat, notifications)'],
    },
  },
  {
    id: 'business-software',
    icon: 'FaDatabase',
    title: { fr: 'Logiciels & Plateformes Métiers', en: 'Business Software & Platforms' },
    summary: {
      fr: 'Des outils qui digitalisent vraiment vos opérations : stock, facturation, RH, gestion.',
      en: 'Tools that truly digitalize your operations: inventory, invoicing, HR, management.',
    },
    items: {
      fr: ['Plateforme métier sur mesure', 'Dashboard / back-office admin', 'Intégrations API'],
      en: ['Custom business platform', 'Admin dashboard / back-office', 'API integrations'],
    },
  },
  {
    id: 'automation-ai',
    icon: 'FaRobot',
    title: { fr: 'Automatisation & IA', en: 'Automation & AI' },
    summary: {
      fr: "Gagnez du temps en automatisant vos tâches répétitives, avec ou sans IA.",
      en: 'Save time by automating repetitive tasks, with or without AI.',
    },
    items: {
      fr: ["Automatisation de workflow", 'Intégration IA (chatbot, assistant)'],
      en: ['Workflow automation', 'AI integration (chatbot, assistant)'],
    },
  },
  {
    id: 'evolution',
    icon: 'FaSyncAlt',
    title: { fr: "Évolution d'Application Existante", en: 'Existing Application Evolution' },
    summary: {
      fr: "Vous avez déjà une application ? Nous ajoutons de nouvelles fonctionnalités, même si nous ne l'avons pas développée.",
      en: "Already have an application? We add new features, even if we didn't build it.",
    },
    items: {
      fr: ['Audit & prise en main du code', 'Ajout de fonctionnalités'],
      en: ['Code audit & handover', 'Feature additions'],
    },
  },
  {
    id: 'maintenance',
    icon: 'FaTools',
    title: { fr: 'Maintenance & Support', en: 'Maintenance & Support' },
    summary: {
      fr: 'Un accompagnement continu pour que votre solution reste stable, sécurisée et à jour.',
      en: 'Ongoing support to keep your solution stable, secure and up to date.',
    },
    items: {
      fr: ['Maintenance standard', 'Hébergement géré', 'Support prioritaire'],
      en: ['Standard maintenance', 'Managed hosting', 'Priority support'],
    },
  },
];
