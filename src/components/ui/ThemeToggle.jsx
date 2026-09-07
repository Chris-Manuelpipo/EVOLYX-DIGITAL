import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { readStored, applyTheme } from '../../lib/theme';

const OPTIONS = [
  { value: 'system', icon: FiMonitor, key: 'system' },
  { value: 'light', icon: FiSun, key: 'light' },
  { value: 'dark', icon: FiMoon, key: 'dark' },
];

/**
 * Contrôle segmenté à trois états. On expose « Système » explicitement plutôt
 * qu'un simple interrupteur : sans lui, le premier clic enferme le visiteur
 * dans un thème fixe et il ne peut plus revenir à la préférence de son OS.
 */
export default function ThemeToggle({ className = '' }) {
  const { t } = useTranslation();
  const [preference, setPreference] = useState('system');

  useEffect(() => {
    setPreference(readStored());
  }, []);

  // En mode « système », on suit les changements de l'OS en direct
  // (bascule automatique jour/nuit, réglage modifié dans un autre onglet).
  useEffect(() => {
    if (preference !== 'system') return undefined;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      document.documentElement.removeAttribute('data-theme');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [preference]);

  const choose = (value) => {
    setPreference(value);
    applyTheme(value);
  };

  return (
    <div
      role="radiogroup"
      aria-label={t('theme.label')}
      className={`inline-flex items-center gap-0.5 rounded-full border border-outline bg-surface-container p-0.5 ${className}`}
    >
      {OPTIONS.map(({ value, icon: Icon, key }) => {
        const active = preference === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={t(`theme.${key}`)}
            title={t(`theme.${key}`)}
            onClick={() => choose(value)}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-[15px] transition-colors duration-200 ${
              active
                ? 'bg-surface text-on-surface shadow-[var(--shadow-sm)]'
                : 'text-on-muted hover:text-on-surface'
            }`}
          >
            <Icon aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
