import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from '../../data/projects';
import ProjectCard from '../portfolio/ProjectCard';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import SectionLabel from '../ui/SectionLabel';

export default function PortfolioPreview() {
  const { t } = useTranslation();
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="border-t border-outline py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel className="mb-5">{t('portfolio.eyebrow')}</SectionLabel>
            <Headline
              lines={t('portfolio.title_lines', { returnObjects: true })}
              start={80}
              accentIndex={1}
              className="display text-[clamp(1.75rem,3.6vw,2.6rem)] text-on-surface"
            />
            <p className="r-rise body-lg mt-4 text-on-variant" style={{ '--d': '260ms' }}>
              {t('portfolio.subtitle')}
            </p>
          </div>

          <Link
            to="/portfolio"
            className="btn btn-outline r-rise group shrink-0"
            style={{ '--d': '320ms' }}
          >
            {t('portfolio.cta')}
            <FiArrowRight className="arrow-slide" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} delay={index * 90} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
