const STORAGE_KEY = 'evolyx-analytics-consent';

/** @typedef {'granted' | 'denied' | 'unset'} AnalyticsConsent */

/** @returns {AnalyticsConsent} */
export function getAnalyticsConsent() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'granted' || value === 'denied') return value;
  } catch {
    /* stockage indisponible */
  }
  return 'unset';
}

/** @param {'granted' | 'denied'} value */
export function setAnalyticsConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent('evolyx-consent-change', { detail: value }));
}

export function isLiveSiteHost() {
  const host = window.location.hostname;
  return host === 'www.evolyx.cm' || host === 'evolyx.cm';
}
