// Coordonnées et mentions — un seul fichier à éditer
export const contact = {
  email: 'contact@evolyx.cm',
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
    legalForm: '',
    rccm: '',
    niu: '',
    address: '',
    city: 'Yaoundé, Cameroun',
    director: '',
    host: '',
  },
};

export function isFilled(value) {
  return Boolean(value && String(value).trim());
}
