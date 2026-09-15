// Coordonnées et mentions — un seul fichier à éditer
export const contact = {
  email: 'evolyxcmr@gmail.com',
  phoneDisplay: '+237 6 54 80 49 07',
  phoneTel: '+237654804907',
  whatsapp: '237654804907',
  whatsappUrl: 'https://wa.me/237654804907',
  linkedin: '',
  github: '',
  groupUrl: 'https://evolyx.cm',
  shopUrl: 'https://shop.evolyx.cm',
  legal: {
    company: 'EVOLYX Digital',
    parent: 'Groupe EVOLYX',
    director: 'ETCHOME Chris Manuel',
    host: {
      name: 'Vercel Inc.',
      address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
      url: 'https://vercel.com',
    },
  },
};

export function isFilled(value) {
  return Boolean(value && String(value).trim());
}

/** Texte court pour la politique de confidentialité (sous-traitant hébergement). */
export function formatLegalHost(host) {
  if (!host) return '';
  if (typeof host === 'string') return host.trim();
  const parts = [host.name, host.address].filter((part) => isFilled(part));
  return parts.join(' — ');
}
