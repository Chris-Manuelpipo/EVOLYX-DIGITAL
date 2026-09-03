import { useTranslation } from 'react-i18next';

function currentLang(language) {
  return language.startsWith('en') ? 'en' : 'fr';
}

export default function LanguageSwitcher({ transparent = false }) {
  const { i18n } = useTranslation();
  const lang = currentLang(i18n.language);

  const toggleLanguage = () => {
    i18n.changeLanguage(lang === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`text-sm font-semibold rounded-full px-3 min-h-11 min-w-11 inline-flex items-center justify-center border transition-colors ${
        transparent
          ? 'border-white/30 text-white hover:border-evolyx-gold hover:text-evolyx-gold'
          : 'border-evolyx-black/20 text-evolyx-black hover:border-evolyx-gold hover:text-evolyx-gold'
      }`}
      aria-label="Changer de langue / Switch language"
    >
      {lang === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
