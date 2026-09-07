import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import SectionLabel from '../ui/SectionLabel';

const STEPS = ['step_1', 'step_2', 'step_3', 'step_4', 'step_5'];

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="border-t border-outline py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <SectionLabel className="mb-5">{t('process.eyebrow')}</SectionLabel>
            <Headline
              lines={t('process.title_lines', { returnObjects: true })}
              start={80}
              className="display text-[clamp(1.75rem,3.6vw,2.6rem)] text-on-surface"
            />
          </div>
          <p className="r-rise body-lg text-on-variant lg:pb-1" style={{ '--d': '260ms' }}>
            {t('process.subtitle')}
          </p>
        </Reveal>

        <Reveal className="relative">
          {/* Ligne de conduite reliant les étapes, tracée au scroll */}
          <span
            className="r-rule absolute left-0 right-0 top-[19px] hidden h-px bg-outline lg:block"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {STEPS.map((step, index) => (
              <li
                key={step}
                className="r-rise relative"
                style={{ '--d': `${200 + index * 90}ms` }}
              >
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline bg-surface text-sm font-bold text-gold-text shadow-[var(--shadow-sm)]">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-on-surface">
                  {t(`process.${step}`)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-on-variant">
                  {t(`process.${step}_text`)}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
