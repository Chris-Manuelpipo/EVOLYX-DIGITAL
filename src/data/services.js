// Catalogue de services EVOLYX Digital — bilingue fr/en

export const services = [
  {
    id: 'web',
    icon: 'FaGlobe',
    title: { fr: 'Sites & Plateformes Web', en: 'Websites & Web Platforms' },
    summary: {
      fr: 'Un site qui explique votre offre et convertit — pas une brochure figée que vous ne pouvez plus mettre à jour.',
      en: 'A site that explains your offer and converts — not a frozen brochure you cannot update.',
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
      fr: 'Des apps Android/iOS qui restent utiles sur le terrain : notifications, chat, synchro même réseau instable.',
      en: 'Android/iOS apps that stay useful in the field: notifications, chat, sync even on an unstable network.',
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
      fr: 'Digitaliser une opération réelle : stock, dossiers, facturation, RH — un outil que vos équipes utilisent tous les jours.',
      en: 'Digitize a real operation: inventory, records, invoicing, HR — a tool your teams actually use every day.',
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
      fr: 'Enlever les tâches répétitives de vos journées : workflows, relances, assistants — avec ou sans IA.',
      en: 'Take repetitive tasks out of the day: workflows, follow-ups, assistants — with or without AI.',
    },
    items: {
      fr: ['Automatisation de workflow', 'Intégration IA (chatbot, assistant)'],
      en: ['Workflow automation', 'AI integration (chatbot, assistant)'],
    },
  },
  {
    id: 'evolution',
    icon: 'FaSyncAlt',
    title: { fr: "Évolution d'Application Existante", en: 'Existing Application Evolution' },
    summary: {
      fr: "Vous avez déjà un outil. On le reprend, on l'audite, on ajoute ce qui manque — même si ce n'est pas nous qui l'avons écrit.",
      en: "You already have a tool. We take it over, audit it, and add what is missing — even if we did not write it.",
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
      fr: 'Que la solution reste stable, sécurisée et à jour une fois en production — pas un livrable abandonné.',
      en: 'Keep the solution stable, secure and up to date once it is live — not a delivered-and-forgotten artifact.',
    },
    items: {
      fr: ['Maintenance standard', 'Hébergement géré', 'Support prioritaire'],
      en: ['Standard maintenance', 'Managed hosting', 'Priority support'],
    },
  },
];
