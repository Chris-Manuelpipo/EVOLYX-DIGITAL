/**
 * Châssis de navigateur autour d'une capture d'écran.
 *
 * Une capture posée à nu ressemble à une image décorative ; encadrée, elle se
 * lit immédiatement comme « voici le produit en ligne ». C'est la convention
 * des sites produit, et elle donne au passage une barre où afficher l'URL.
 */
export default function BrowserFrame({ label, children, className = '', tone = 'surface' }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-outline shadow-[var(--shadow-lg)] ${
        tone === 'container' ? 'bg-surface-container' : 'bg-surface'
      } ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-outline px-3.5 py-2.5">
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
        </span>
        {label && (
          <span className="min-w-0 flex-1 truncate rounded-sm bg-surface-container px-3 py-1 text-center text-xs text-on-muted">
            {label}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
