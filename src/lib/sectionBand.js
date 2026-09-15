/**
 * Bandes de section alternées sur tout le site.
 * Clair : blanc (surface) ↔ gris page (surface-page).
 * Sombre : gris (surface) ↔ noir (surface-page).
 */
export function sectionBandClass(band = 'primary', size = 'home') {
  const padding =
    size === 'home'
      ? 'py-20 md:py-28'
      : size === 'compact'
        ? 'py-14 md:py-20'
        : 'py-16 md:py-24';

  const bg = band === 'primary' ? 'bg-surface' : 'bg-surface-page';

  return `border-t border-outline ${padding} ${bg}`;
}
