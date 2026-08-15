import { useTranslation } from 'react-i18next';
import { services } from '../data/services';
import * as Icons from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'fr';

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold tracking-[0.2em] text-evolyx-gold uppercase mb-3">
          {t('services.eyebrow')}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-evolyx-black mb-4">
          {t('services.title')}
        </h1>
        <p className="text-evolyx-gray max-w-2xl mx-auto">{t('services.subtitle')}</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = Icons[service.icon] || Icons.FaGlobe;
          return (
            <div
              key={service.id}
              className="bg-white border border-evolyx-black/10 rounded-2xl p-8 hover:border-evolyx-gold transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-evolyx-gold/10 flex items-center justify-center text-evolyx-gold text-xl mb-5">
                <Icon />
              </div>
              <h2 className="font-display text-xl font-bold text-evolyx-black mb-2">
                {service.title[lang]}
              </h2>
              <p className="text-sm text-evolyx-gray mb-5 leading-relaxed">
                {service.summary[lang]}
              </p>
              <ul className="space-y-1.5">
                {service.items[lang].map((item) => (
                  <li key={item} className="text-sm text-evolyx-black/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-evolyx-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="inline-block bg-evolyx-black text-white font-medium px-8 py-4 rounded-sm hover:bg-evolyx-gold transition-colors"
        >
          {t('nav.cta')}
        </Link>
      </div>
    </div>
  );
}
