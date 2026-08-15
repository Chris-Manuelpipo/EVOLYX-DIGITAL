// Transition angulaire entre une section sombre et une section claire.
// Placé en sibling (pas en enfant) de la section sombre pour révéler le fond clair en dessous.
export default function AngleDivider() {
  return (
    <div
      className="h-[60px] sm:h-[80px] bg-evolyx-black-deep"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 100%)' }}
      aria-hidden="true"
    />
  );
}
