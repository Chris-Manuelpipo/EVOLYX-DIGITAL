import { useTranslation } from 'react-i18next';
import { getTestimonials } from '../../data/testimonials';
import TestimonialCard from '../testimonials/TestimonialCard';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import SectionLabel from '../ui/SectionLabel';

// La grille s'adapte au nombre réel de témoignages : à deux, trois colonnes
// laisseraient un trou ; à un seul, une carte pleine largeur serait bancale.
const COLUMNS = {
  1: 'max-w-2xl mx-auto grid-cols-1',
  2: 'max-w-4xl mx-auto grid-cols-1 md:grid-cols-2',
};

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = getTestimonials();

  // Pas de témoignage réel = pas de section. Mieux vaut un site plus court
  // qu'une preuve sociale fabriquée.
  if (testimonials.length === 0) return null;

  const columns = COLUMNS[testimonials.length] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="border-t border-outline bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <SectionLabel className="mb-5">{t('testimonials.eyebrow')}</SectionLabel>
          <Headline
            lines={t('testimonials.title_lines', { returnObjects: true })}
            start={80}
            accentIndex={1}
            className="display text-[clamp(1.75rem,3.6vw,2.6rem)] text-on-surface"
          />
          <p className="r-rise body-lg mt-4 text-on-variant" style={{ '--d': '260ms' }}>
            {t('testimonials.subtitle')}
          </p>
        </Reveal>

        <Reveal className={`grid gap-5 ${columns}`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.author}-${index}`}
              testimonial={testimonial}
              delay={index * 90}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
