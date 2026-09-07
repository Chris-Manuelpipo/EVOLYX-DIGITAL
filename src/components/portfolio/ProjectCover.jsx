import LogoMark from '../ui/LogoMark';

/**
 * Couverture de projet — une capture d'écran réelle.
 *
 * Pour ajouter la capture d'un projet : déposer le fichier dans
 * `public/portfolio/<slug>.webp` (1600×1000, ~16:10) puis renseigner
 * `image: '/portfolio/<slug>.webp'` dans `src/data/projects.js`.
 *
 * Tant qu'une capture manque, on affiche une surface neutre avec l'emblème en
 * filigrane : c'est visiblement un emplacement en attente, pas une illustration
 * qui prétendrait montrer le produit.
 */
export default function ProjectCover({
  title,
  image,
  className = 'aspect-[16/10]',
  priority = false,
}) {
  if (image) {
    return (
      <div className={`overflow-hidden bg-surface-container ${className}`}>
        <img
          src={image}
          alt={title}
          width={1600}
          height={1000}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-surface-container ${className}`}
    >
      <span className="glow-gold absolute inset-0" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <LogoMark size={40} alt="" className="opacity-25" />
        <span className="text-sm font-medium text-on-muted">{title}</span>
      </div>
    </div>
  );
}
