import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCategoryLabel } from '../../data/projects';
import ProjectCover from './ProjectCover';

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group block bg-evolyx-black-deep transition-transform hover:-translate-y-1 focus-visible:outline-offset-4"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)' }}
    >
      <div className="relative">
        <ProjectCover title={project.title} image={project.image} />
        {project.url && (
          <span className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.16em] uppercase bg-evolyx-gold text-evolyx-black-deep px-2.5 py-1">
            {t('portfolio.live')}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="text-evolyx-gold text-[11px] font-bold tracking-[0.15em] uppercase">
          {getCategoryLabel(project.category, lang)}
        </p>
        <h3 className="font-display text-lg font-bold text-white mt-2">{project.title}</h3>
        <p className="text-sm text-white/70 mt-1.5 mb-4">{project.subtitle[lang]}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium text-white/70 border border-white/15 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
