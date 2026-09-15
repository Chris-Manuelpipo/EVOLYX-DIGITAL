import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAnalyticsConsent } from '../../lib/consent';
import { loadGoogleAnalytics } from '../../lib/googleAnalytics';

/**
 * Vues SPA : gtag n'est chargé qu'après consentement (voir CookieBanner).
 */
export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (getAnalyticsConsent() === 'granted') loadGoogleAnalytics();
  }, []);

  useEffect(() => {
    const onConsent = (event) => {
      if (event.detail === 'granted') loadGoogleAnalytics();
    };
    window.addEventListener('evolyx-consent-change', onConsent);
    return () => window.removeEventListener('evolyx-consent-change', onConsent);
  }, []);

  useEffect(() => {
    if (getAnalyticsConsent() !== 'granted' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${pathname}${search}`,
    });
  }, [pathname, search]);

  return null;
}
