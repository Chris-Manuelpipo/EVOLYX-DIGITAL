import { useTranslation } from 'react-i18next';
import { FiZap, FiWifiOff, FiShield } from 'react-icons/fi';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import SectionLabel from '../ui/SectionLabel';

const POINTS = [
  { key: 'point_1', icon: FiZap },
  { key: 'point_2', icon: FiWifiOff },
  { key: 'point_3', icon: FiShield },
];

export default function WhySection() {
  const { t } = useTranslation();

  return (
    <section className="border-t border-outline bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <SectionLabel className="mb-5">{t('why.eyebrow')}</SectionLabel>
          <Headline
            lines={t('why.title_lines', { returnObjects: true })}
            start={80}
            accentIndex={1}
            className="display text-[clamp(1.75rem,3.6vw,2.6rem)] text-on-surface"
          />
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {POINTS.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className="card r-rise p-6"
              style={{ '--d': `${index * 90}ms` }}
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold/12 text-[19px] text-gold-text"
                aria-hidden="true"
              >
                <Icon />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold text-on-surface">
                {t(`why.${key}_title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-variant">
                {t(`why.${key}_text`)}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
