import LogoMark from './LogoMark';

/**
 * L'emblème EVOLYX présenté en grand, posé sur un halo doré.
 * L'emblème lui-même n'est jamais déformé ni réinterprété.
 */
export default function Brandmark({ size = 220, className = '' }) {
  const frame = Math.round(size * 1.2);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: frame, height: frame }}
      aria-hidden="true"
    >
      <span
        className="glow-gold absolute inset-[-20%] rounded-full"
        aria-hidden="true"
      />
      <LogoMark size={size} alt="" className="relative drop-shadow-[var(--shadow-md)]" />
    </div>
  );
}
