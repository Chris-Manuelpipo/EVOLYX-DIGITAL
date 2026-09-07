import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';
import { services } from '../../data/services';
import ServiceCard from '../services/ServiceCard';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import SectionLabel from '../ui/SectionLabel';

export default function ServicesPreview() {
  const { t } = useTranslation();

  return (
    <section className="border-t border-outline bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <SectionLabel className="mb-5">{t('services.eyebrow')}</SectionLabel>
          <Headline
            lines={t('services.title_lines', { returnObjects: true })}
            start={80}
            className="display text-[clamp(1.75rem,3.6vw,2.6rem)] text-on-surface"
          />
          <p className="r-rise body-lg mt-4 text-on-variant" style={{ '--d': '260ms' }}>
            {t('services.subtitle')}
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={index * 70} />
          ))}
        </Reveal>

        <Reveal className="mt-10">
          <Link
            to="/services"
            className="link-line r-rise group text-[15px] font-semibold text-on-surface"
          >
            {t('services.cta')}
            <FiArrowRight className="arrow-slide" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
