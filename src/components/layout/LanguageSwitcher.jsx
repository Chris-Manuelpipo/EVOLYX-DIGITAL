import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({ transparent = false }) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`text-sm font-semibold rounded-full px-3 py-1.5 border transition-colors ${
        transparent
          ? 'border-white/30 text-white hover:border-evolyx-gold hover:text-evolyx-gold'
          : 'border-evolyx-black/20 text-evolyx-black hover:border-evolyx-gold hover:text-evolyx-gold'
      }`}
      aria-label="Changer de langue / Switch language"
    >
      {i18n.language === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
