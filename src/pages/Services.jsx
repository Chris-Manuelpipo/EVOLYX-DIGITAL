import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { services } from '../data/services';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/ui/Reveal';

export default function Services() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <>
      <PageHeader
        eyebrow={t('services.eyebrow')}
        lines={t('services.title_lines', { returnObjects: true })}
        intro={t('services.subtitle')}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal
                as="article"
                key={service.id}
                id={service.id}
                className="card r-rise scroll-mt-24 p-7"
                style={{ '--d': `${(index % 2) * 80}ms` }}
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-text">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h2 className="mt-3 text-xl font-semibold text-on-surface md:text-2xl">
                  {service.title[lang]}
                </h2>

                <p className="mt-2.5 leading-relaxed text-on-variant">{service.summary[lang]}</p>

                <ul className="mt-6 space-y-2.5 border-t border-outline pt-5">
                  {service.items[lang].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-on-surface">
                      <FiCheck
                        className="mt-0.5 shrink-0 text-gold-text"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="card r-rise flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
              <div>
                <h2 className="text-xl font-semibold text-on-surface md:text-2xl">
                  {t('services.cta_title')}
                </h2>
                <p className="mt-2 max-w-[52ch] text-on-variant">{t('services.cta_text')}</p>
              </div>
              <Link to="/contact" className="btn btn-gold group shrink-0">
                {t('nav.cta')}
                <FiArrowRight className="arrow-slide" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
