/** Origine canonique du site en production. L'apex redirige vers www. */
export const SITE_ORIGIN = 'https://www.evolyx.cm';
export const SITE_NAME = 'EVOLYX Digital';
export const OG_IMAGE_PATH = '/og-image.png';
export const OG_IMAGE = `${SITE_ORIGIN}${OG_IMAGE_PATH}`;

export function canonicalUrl(pathname) {
  if (!pathname || pathname === '/') return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${pathname}`;
}

export function absoluteUrl(path) {
  if (!path) return SITE_ORIGIN;
  if (path.startsWith('http')) return path;
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}
