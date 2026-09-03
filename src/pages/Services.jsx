import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaGlobe,
  FaMobileAlt,
  FaDatabase,
  FaRobot,
  FaSyncAlt,
  FaTools,
} from 'react-icons/fa';
import { services } from '../data/services';

const ICONS = {
  FaGlobe,
  FaMobileAlt,
  FaDatabase,
  FaRobot,
  FaSyncAlt,
  FaTools,
};

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
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold tracking-[0.2em] text-evolyx-gold-dark uppercase mb-3">
          {t('services.eyebrow')}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-evolyx-black mb-4">
          {t('services.title')}
        </h1>
        <p className="text-evolyx-gray max-w-2xl mx-auto">{t('services.subtitle')}</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = ICONS[service.icon] || FaGlobe;
          return (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 bg-white border border-evolyx-black/10 rounded-sm p-8 hover:border-evolyx-gold transition-colors"
            >
              <div className="w-12 h-12 rounded-sm bg-evolyx-gold/10 flex items-center justify-center text-evolyx-gold text-xl mb-5">
                <Icon aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold text-evolyx-black mb-2">
                {service.title[lang]}
              </h2>
              <p className="text-sm text-evolyx-gray mb-5 leading-relaxed">{service.summary[lang]}</p>
              <ul className="space-y-1.5">
                {service.items[lang].map((item) => (
                  <li key={item} className="text-sm text-evolyx-black/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-evolyx-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center min-h-11 bg-evolyx-black text-white font-medium px-8 py-4 rounded-sm hover:bg-evolyx-gold hover:text-evolyx-black transition-colors"
        >
          {t('nav.cta')}
        </Link>
      </div>
    </div>
  );
}
