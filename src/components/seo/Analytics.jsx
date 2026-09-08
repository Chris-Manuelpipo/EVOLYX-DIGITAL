import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-EGL44RC3WS';

function isLiveHost() {
  const host = window.location.hostname;
  return host === 'www.evolyx.cm' || host === 'evolyx.cm';
}

/**
 * Le snippet gtag est déjà dans le HTML de production (index.html / build).
 * Ici on n'envoie que les vues SPA. Localhost et preview Vercel sont ignorés.
 */
export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!GA_ID || !isLiveHost() || typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${pathname}${search}`,
    });
  }, [pathname, search]);

  return null;
}
