import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';
import { FAQ_KEYS } from '../../data/faq';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import SectionLabel from '../ui/SectionLabel';
import { sectionBandClass } from '../../lib/sectionBand';

export default function FaqSection({ band = 'muted' }) {
  const { t } = useTranslation();

  return (
    <section
      id="faq"
      className={sectionBandClass(band)}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <SectionLabel className="mb-5">{t('faq.eyebrow')}</SectionLabel>
            <Headline
              id="faq-heading"
              lines={t('faq.title_lines', { returnObjects: true })}
              start={80}
              className="display text-[clamp(1.75rem,3.6vw,2.6rem)] text-on-surface"
            />
          </div>
          <p className="r-rise body-lg text-on-variant lg:pb-1" style={{ '--d': '260ms' }}>
            {t('faq.subtitle')}
          </p>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl">
          <div className="card divide-y divide-outline">
            {FAQ_KEYS.map((key, index) => (
              <details
                key={key}
                className="group r-rise px-5 py-1 md:px-6"
                style={{ '--d': `${120 + index * 70}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold text-on-surface marker:content-none [&::-webkit-details-marker]:hidden">
                  {t(`faq.${key}_q`)}
                  <FiChevronDown
                    className="shrink-0 text-lg text-gold-text transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-on-variant">{t(`faq.${key}_a`)}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
