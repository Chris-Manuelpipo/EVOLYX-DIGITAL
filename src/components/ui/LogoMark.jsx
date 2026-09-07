/**
 * L'emblème EVOLYX — cube isométrique or / blanc / noir.
 *
 * Source unique : `public/logo.png`. Tous les emplacements (en-tête, pied de
 * page, héros, CTA, page à propos) passent par ce composant pour rester
 * identiques. L'image est déjà détourée : ne pas la recolorier ni la déformer.
 */
export default function LogoMark({
  size = 28,
  className = '',
  alt = 'EVOLYX',
  priority = false,
}) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      width={size}
      height={size}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      draggable="false"
      className={`object-contain ${className}`.trim()}
      style={{ width: size, height: size }}
    />
  );
}
