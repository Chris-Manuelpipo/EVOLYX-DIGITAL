/**
 * Titre dont chaque ligne monte depuis un masque, décalée dans le temps.
 * Le découpage en lignes est explicite (fourni par les traductions) plutôt que
 * calculé : on maîtrise la césure dans les deux langues, et rien ne bouge si la
 * police met du temps à charger.
 */
export default function Headline({
  as: Tag = 'h2',
  lines = [],
  className = '',
  stagger = 80,
  start = 0,
  accentIndex = -1,
  accentClassName = 'text-gold-text',
}) {
  // i18next renvoie la clé brute (une string) si la traduction manque :
  // sans ce garde-fou, un oubli dans un fichier de locale casse la page.
  const safeLines = Array.isArray(lines) ? lines : [lines];

  return (
    <Tag className={className}>
      {safeLines.map((line, index) => (
        <span
          key={typeof line === 'string' ? line : index}
          className="r-line"
          style={{ '--d': `${start + index * stagger}ms` }}
        >
          <span className={index === accentIndex ? accentClassName : undefined}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
