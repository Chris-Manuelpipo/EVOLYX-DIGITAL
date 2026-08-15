import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { projects } from '../../data/projects';
import ProjectCard from '../portfolio/ProjectCard';

export default function PortfolioPreview() {
  const { t } = useTranslation();
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 px-6 bg-evolyx-bg">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-evolyx-gold-dark uppercase mb-4">
            <span className="w-6 h-0.5 bg-evolyx-gold" /> {t('portfolio.eyebrow')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-evolyx-black leading-tight">
            {t('portfolio.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-evolyx-black font-medium hover:text-evolyx-gold transition-colors"
        >
          {t('portfolio.cta')} <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </section>
  );
}
