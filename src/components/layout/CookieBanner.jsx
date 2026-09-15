import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAnalyticsConsent, setAnalyticsConsent } from '../../lib/consent';
import { loadGoogleAnalytics } from '../../lib/googleAnalytics';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(() => getAnalyticsConsent() === 'unset');
  const acceptRef = useRef(null);

  useEffect(() => {
    if (visible) acceptRef.current?.focus();
  }, [visible]);

  useEffect(() => {
    const onChange = () => {
      if (getAnalyticsConsent() !== 'unset') setVisible(false);
    };
    window.addEventListener('evolyx-consent-change', onChange);
    return () => window.removeEventListener('evolyx-consent-change', onChange);
  }, []);

  const accept = () => {
    setAnalyticsConsent('granted');
    loadGoogleAnalytics();
    setVisible(false);
  };

  const refuse = () => {
    setAnalyticsConsent('denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-outline bg-surface/95 p-4 backdrop-blur-md sm:p-5"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p id="cookie-banner-title" className="text-sm font-semibold text-on-surface">
            {t('cookies.title')}
          </p>
          <p id="cookie-banner-desc" className="mt-1.5 text-sm leading-relaxed text-on-variant">
            {t('cookies.text')}{' '}
            <Link to="/politique-de-confidentialite" className="link-line text-on-surface">
              {t('footer.privacy')}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button type="button" className="btn btn-outline" onClick={refuse}>
            {t('cookies.refuse')}
          </button>
          <button ref={acceptRef} type="button" className="btn btn-gold" onClick={accept}>
            {t('cookies.accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
