/**
 * Gestion du thème clair / sombre.
 *
 * Trois états : 'system' (par défaut), 'light', 'dark'. Seuls 'light' et 'dark'
 * écrivent l'attribut data-theme ; 'system' le retire et laisse la media query
 * prefers-color-scheme décider. La valeur choisie est relue avant la première
 * peinture par le script inline de index.html — ici on ne gère que les
 * changements à chaud.
 */

const KEY = 'evolyx-theme';

export function readStored() {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'light' || value === 'dark' ? value : 'system';
  } catch {
    return 'system';
  }
}

export function systemPrefersDark() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

/** Le thème réellement affiché, une fois 'system' résolu. */
export function resolveTheme(preference) {
  if (preference === 'light' || preference === 'dark') return preference;
  return systemPrefersDark() ? 'dark' : 'light';
}

export function applyTheme(preference) {
  const root = document.documentElement;

  // Sans cette coupure, les ~40 propriétés de couleur de la page s'animent
  // toutes ensemble au moment de la bascule et l'écran clignote.
  root.classList.add('theme-switching');

  if (preference === 'light' || preference === 'dark') {
    root.setAttribute('data-theme', preference);
  } else {
    root.removeAttribute('data-theme');
  }

  try {
    if (preference === 'system') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, preference);
  } catch {
    /* mode privé ou stockage refusé : le thème vaut pour la session */
  }

  window.setTimeout(() => root.classList.remove('theme-switching'), 90);
}
