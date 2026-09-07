import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import SectionLabel from '../ui/SectionLabel';

/**
 * En-tête commun aux pages internes : même grammaire que le héros
 * (puce d'étiquette, titre en lignes masquées, chapô) à échelle réduite.
 */
export default function PageHeader({ eyebrow, lines, accentIndex = -1, intro, children }) {
  return (
    <Reveal
      as="header"
      immediate
      className="relative overflow-hidden border-b border-outline pb-14 pt-28 sm:pt-32"
    >
      <div className="grid-faint absolute inset-0" aria-hidden="true" />
      <div
        className="glow-gold absolute left-1/2 top-0 h-[420px] w-[900px] max-w-[150vw] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {eyebrow && <SectionLabel className="mb-5">{eyebrow}</SectionLabel>}

        <Headline
          as="h1"
          lines={lines}
          start={90}
          accentIndex={accentIndex}
          className="display max-w-[20ch] text-[clamp(2rem,4.6vw,3.25rem)] text-on-surface"
        />

        {intro && (
          <p className="r-rise body-lg mt-5 max-w-[58ch] text-on-variant" style={{ '--d': '320ms' }}>
            {intro}
          </p>
        )}

        {children}
      </div>
    </Reveal>
  );
}
