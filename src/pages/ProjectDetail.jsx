import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa';
import { projects, getCategoryLabel } from '../data/projects';
import ProjectCover from '../components/portfolio/ProjectCover';
import LiveSitePreview from '../components/portfolio/LiveSitePreview';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-evolyx-gray hover:text-evolyx-gold transition-colors mb-8 min-h-11"
        >
          <FaArrowLeft className="text-xs" aria-hidden="true" /> {t('portfolio.back_to_portfolio')}
        </Link>

        {project.url ? (
          <LiveSitePreview url={project.url} title={project.title} />
        ) : (
          <div className="mb-10 rounded-sm overflow-hidden">
            <ProjectCover title={project.title} image={project.image} className="aspect-[16/9]" />
          </div>
        )}

        <p className="text-evolyx-gold text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
          {getCategoryLabel(project.category, lang)}
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-evolyx-black mb-2">
          {project.title}
        </h1>
        <p className="text-evolyx-gray text-lg mb-6">{project.subtitle[lang]}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-evolyx-bg text-evolyx-black/80 px-3 py-1.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold text-evolyx-black mb-2">
              {t('portfolio.context')}
            </h2>
            <p className="text-evolyx-gray leading-relaxed">{project.context[lang]}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-evolyx-black mb-2">
              {t('portfolio.solution')}
            </h2>
            <p className="text-evolyx-gray leading-relaxed">{project.solution[lang]}</p>
          </div>
          <div className="bg-evolyx-bg rounded-sm p-6 border border-evolyx-gold/20">
            <h2 className="font-display text-lg font-bold text-evolyx-black mb-2">
              {t('portfolio.highlight')}
            </h2>
            <p className="text-evolyx-black/80 leading-relaxed">{project.highlight[lang]}</p>
          </div>
        </div>

        <div className="mt-14 text-center border-t border-evolyx-black/10 pt-10">
          <p className="text-evolyx-gray mb-4">{t('portfolio.similar_project_cta')}</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-11 bg-evolyx-black text-white font-medium px-8 py-4 rounded-sm hover:bg-evolyx-gold hover:text-evolyx-black transition-colors"
          >
            {t('nav.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
