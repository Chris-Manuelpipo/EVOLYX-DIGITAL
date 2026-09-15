import { useTranslation } from 'react-i18next';
import { getProjectOutcomes } from '../../data/projectOutcomes';
import OutcomeCard from './OutcomeCard';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import SectionLabel from '../ui/SectionLabel';
import { sectionBandClass } from '../../lib/sectionBand';

const COLUMNS = {
  1: 'max-w-2xl mx-auto grid-cols-1',
  2: 'max-w-4xl mx-auto grid-cols-1 md:grid-cols-2',
};

export default function ProjectOutcomesSection({ band = 'primary' }) {
  const { t } = useTranslation();
  const outcomes = getProjectOutcomes();

  if (outcomes.length === 0) return null;

  const columns = COLUMNS[outcomes.length] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className={sectionBandClass(band)}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <SectionLabel className="mb-5">{t('outcomes.eyebrow')}</SectionLabel>
          <Headline
            lines={t('outcomes.title_lines', { returnObjects: true })}
            start={80}
            accentIndex={1}
            className="display text-[clamp(1.75rem,3.6vw,2.6rem)] text-on-surface"
          />
          <p className="r-rise body-lg mt-4 text-on-variant" style={{ '--d': '260ms' }}>
            {t('outcomes.subtitle')}
          </p>
        </Reveal>

        <Reveal className={`grid gap-5 ${columns}`}>
          {outcomes.map((outcome, index) => (
            <OutcomeCard key={outcome.project} outcome={outcome} delay={index * 90} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
