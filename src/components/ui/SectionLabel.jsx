/**
 * Étiquette de section : une puce discrète avec un point doré.
 * Remplace l'ancien label monospace très espacé — trop « éditorial technique »
 * pour cette direction.
 */
export default function SectionLabel({ children, className = '' }) {
  return (
    <span className={`chip r-rise ${className}`}>
      <span
        className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
