import { useTranslation } from 'react-i18next';

const LANGS = ['fr', 'en'];

export default function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith('en') ? 'en' : 'fr';

  return (
    <div
      role="radiogroup"
      aria-label={t('a11y.language')}
      className={`inline-flex items-center gap-0.5 rounded-full border border-outline bg-surface-container p-0.5 ${className}`}
    >
      {LANGS.map((lang) => {
        const active = current === lang;
        return (
          <button
            key={lang}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => i18n.changeLanguage(lang)}
            className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-xs font-semibold transition-colors duration-200 ${
              active
                ? 'bg-surface text-on-surface shadow-[var(--shadow-sm)]'
                : 'text-on-muted hover:text-on-surface'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
