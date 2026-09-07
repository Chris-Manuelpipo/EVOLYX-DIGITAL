import { useEffect, useRef } from 'react';

/**
 * Un unique IntersectionObserver partagé par tout le site.
 *
 * Pourquoi pas une librairie d'animation : Motion/GSAP pèsent 30 à 50 Ko gzip
 * et animent en JS à chaque frame. Ici l'observer ne fait qu'ajouter une classe,
 * le navigateur prend le relais en CSS sur le compositeur. Coût réseau : 0 Ko.
 *
 * L'état initial (invisible) n'est appliqué que sous `.js-anim`, posé sur <html>
 * au démarrage. Si le script ne se charge pas — réseau coupé en plein
 * téléchargement, navigateur ancien — la page s'affiche entièrement, sans
 * animation. Une animation ratée ne doit jamais effacer le contenu.
 */

const SUPPORTED = typeof IntersectionObserver !== 'undefined';

let observer = null;

function reveal(el) {
  el.classList.add('is-in');
  // Une fois la transition terminée, on relâche les couches de composition
  // pour ne pas garder des dizaines de calques GPU en mémoire.
  window.setTimeout(() => el.classList.add('is-settled'), 1600);
}

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        reveal(entry.target);
      }
    },
    // On déclenche un peu avant l'entrée réelle : au moment où l'utilisateur
    // arrive sur la section, l'animation est déjà en cours, jamais en retard.
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );

  return observer;
}

export default function useReveal({ immediate = false } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Hero et contenus au-dessus de la ligne de flottaison : on joue au montage,
    // sans attendre un scroll qui n'arrivera peut-être jamais.
    // `useEffect` s'exécute après la première peinture : l'état initial a donc
    // déjà été rendu et la transition part bien de sa valeur de départ.
    if (immediate || !SUPPORTED) {
      reveal(el);
      return undefined;
    }

    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, [immediate]);

  return ref;
}
