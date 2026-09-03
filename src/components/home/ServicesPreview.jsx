import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../../data/services';
import ServiceCard from '../services/ServiceCard';

export default function ServicesPreview() {
  const { t } = useTranslation();
  const featured = services.slice(0, 3);

  return (
    <section className="pt-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-evolyx-gold-dark uppercase mb-4">
            <span className="w-6 h-0.5 bg-evolyx-gold" /> {t('services.eyebrow')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-evolyx-black leading-tight">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-evolyx-gray leading-relaxed">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-evolyx-black/[0.06] mb-12">
          {featured.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-evolyx-black font-medium hover:text-evolyx-gold transition-colors min-h-11"
        >
          {t('services.cta')} <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </section>
  );
}
