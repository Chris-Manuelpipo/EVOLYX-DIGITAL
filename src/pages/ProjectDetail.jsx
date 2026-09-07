import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { projects, getCategoryLabel } from '../data/projects';
import { getTestimonialForProject } from '../data/testimonials';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import ProjectCover from '../components/portfolio/ProjectCover';
import LiveSitePreview from '../components/portfolio/LiveSitePreview';
import BrowserFrame from '../components/ui/BrowserFrame';
import Reveal from '../components/ui/Reveal';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  if (currentIndex === -1) return <Navigate to="/portfolio" replace />;

  const project = projects[currentIndex];
  const next = projects[(currentIndex + 1) % projects.length];
  const testimonial = getTestimonialForProject(project.slug);

  const sections = [
    { key: 'context', label: t('portfolio.context'), text: project.context[lang] },
    { key: 'solution', label: t('portfolio.solution'), text: project.solution[lang] },
  ];

  return (
    <>
      <Reveal
        as="header"
        immediate
        className="relative overflow-hidden border-b border-outline pb-12 pt-28 sm:pt-32"
      >
        <div className="grid-faint absolute inset-0" aria-hidden="true" />
        <div
          className="glow-gold absolute left-1/2 top-0 h-[420px] w-[900px] max-w-[150vw] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            to="/portfolio"
            className="group link-line mb-8 inline-flex min-h-11 items-center text-sm font-medium text-on-variant transition-colors hover:text-on-surface"
          >
            <FiArrowLeft
              className="transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-x-1"
              aria-hidden="true"
            />
            {t('portfolio.back_to_portfolio')}
          </Link>

          <div className="r-rise flex flex-wrap items-center gap-2">
            <span className="chip">{getCategoryLabel(project.category, lang)}</span>
            {project.url && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-on-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-on-gold" aria-hidden="true" />
                {t('portfolio.live')}
              </span>
            )}
          </div>

          <h1 className="display r-rise mt-5 text-[clamp(2rem,4.6vw,3.25rem)] text-on-surface" style={{ '--d': '80ms' }}>
            {project.title}
          </h1>
          <p
            className="r-rise body-lg mt-3 max-w-[52ch] text-on-variant"
            style={{ '--d': '160ms' }}
          >
            {project.subtitle[lang]}
          </p>
        </div>
      </Reveal>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="r-veil mb-14">
            {project.url ? (
              <LiveSitePreview url={project.url} title={project.title} image={project.image} />
            ) : (
              <div className="group">
                <BrowserFrame label={project.title}>
                  <ProjectCover
                    title={project.title}
                    image={project.image}
                    className="aspect-[16/9]"
                    priority
                  />
                </BrowserFrame>
              </div>
            )}
          </Reveal>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
            <div>
              {sections.map((section) => (
                <Reveal as="section" key={section.key} className="mb-10 last:mb-0">
                  <h2 className="r-rise text-xl font-semibold text-on-surface md:text-2xl">
                    {section.label}
                  </h2>
                  <p
                    className="r-rise body-lg mt-3 max-w-[70ch] text-on-variant"
                    style={{ '--d': '100ms' }}
                  >
                    {section.text}
                  </p>
                </Reveal>
              ))}

              <Reveal as="section" className="card r-rise mt-10 border-l-2 border-l-gold p-6">
                <h2 className="text-sm font-semibold text-gold-text">
                  {t('portfolio.highlight')}
                </h2>
                <p className="mt-2.5 text-lg font-medium leading-snug text-on-surface">
                  {project.highlight[lang]}
                </p>
              </Reveal>

              {/* La parole du client, exactement là où le travail est décrit */}
              {testimonial && (
                <Reveal as="section" className="mt-10">
                  <h2 className="r-rise mb-4 text-sm font-semibold text-on-surface">
                    {t('testimonials.on_project')}
                  </h2>
                  <TestimonialCard testimonial={testimonial} showProjectLink={false} />
                </Reveal>
              )}
            </div>

            <Reveal as="aside" className="lg:sticky lg:top-24 lg:self-start">
              <div className="card p-6">
                <h2 className="text-sm font-semibold text-on-surface">{t('portfolio.stack')}</h2>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-surface-container px-2.5 py-1 text-xs font-medium text-on-variant"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn-gold group mt-6 w-full">
                  {t('nav.cta')}
                  <FiArrowRight className="arrow-slide" aria-hidden="true" />
                </Link>
                <p className="mt-3 text-center text-xs text-on-muted">
                  {t('portfolio.similar_project_cta')}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16 border-t border-outline pt-8">
            <Link
              to={`/portfolio/${next.slug}`}
              className="group r-rise flex items-center justify-between gap-6"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-on-muted">
                  {t('portfolio.next_project')}
                </span>
                <span className="mt-1.5 block text-xl font-semibold text-on-surface transition-colors group-hover:text-gold-text md:text-2xl">
                  {next.title}
                </span>
              </span>
              <FiArrowRight
                className="arrow-slide shrink-0 text-xl text-on-muted transition-colors group-hover:text-gold-text"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
