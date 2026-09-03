import evolyxIcon from '../../assets/images/evolyx-icon.svg';

// Le symbole EVOLYX (logo officiel), utilisé en grand comme signature visuelle du hero
// et comme motif décoratif à travers le site.
export default function HexFacet({ size = 420, className = '' }) {
  return (
    <img
      src={evolyxIcon}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ height: size, width: 'auto' }}
      aria-hidden="true"
    />
  );
}
