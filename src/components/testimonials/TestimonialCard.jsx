import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { getInitials } from '../../data/testimonials';
import { projects } from '../../data/projects';

export default function TestimonialCard({ testimonial, delay = 0, showProjectLink = true }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';

  const project =
    showProjectLink && testimonial.project
      ? projects.find((item) => item.slug === testimonial.project)
      : null;

  const role = testimonial.role?.[lang]?.trim();

  return (
    <figure
      className="card r-rise flex h-full flex-col p-6"
      style={{ '--d': `${delay}ms` }}
    >
      {/* Guillemet ouvrant : signale la citation sans alourdir la carte */}
      <span
        className="block text-4xl leading-none text-gold"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-on-surface text-pretty">
        {testimonial.quote[lang]}
      </blockquote>

      {/* Le lien projet passe avant le pied de carte : figcaption doit rester le
          dernier élément pour que les lignes d'auteur s'alignent d'une carte à
          l'autre, y compris quand un témoignage n'est rattaché à aucun projet. */}
      {project && (
        <Link
          to={`/portfolio/${project.slug}`}
          className="group mt-5 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-on-variant transition-colors hover:text-gold-text"
        >
          {t('testimonials.related', { title: project.title })}
          <FiArrowUpRight className="arrow-slide" aria-hidden="true" />
        </Link>
      )}

      <figcaption className="mt-5 flex items-center gap-3 border-t border-outline pt-5">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt=""
            width={80}
            height={80}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/12 text-xs font-bold text-gold-text"
            aria-hidden="true"
          >
            {getInitials(testimonial.author)}
          </span>
        )}

        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-on-surface">
            {testimonial.author}
          </span>
          <span className="block truncate text-xs text-on-muted">
            {[role, testimonial.company].filter(Boolean).join(' · ')}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
