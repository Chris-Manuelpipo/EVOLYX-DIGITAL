import { getAnalyticsConsent, isLiveSiteHost } from './consent';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XGF4RPVJHR';

let loadPromise = null;

export function getGaMeasurementId() {
  return GA_ID;
}

/** Charge gtag.js une seule fois, uniquement si consentement + domaine prod. */
export function loadGoogleAnalytics() {
  if (!GA_ID || !isLiveSiteHost() || getAnalyticsConsent() !== 'granted') {
    return Promise.resolve(false);
  }
  if (typeof window.gtag === 'function') return Promise.resolve(true);
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve) => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });

  return loadPromise;
}
