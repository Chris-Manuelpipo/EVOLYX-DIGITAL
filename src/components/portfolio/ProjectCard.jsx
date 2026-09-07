import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { getCategoryLabel } from '../../data/projects';
import ProjectCover from './ProjectCover';

export default function ProjectCard({ project, delay = 0, priority = false }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="card card-hover r-rise group flex h-full flex-col overflow-hidden"
      style={{ '--d': `${delay}ms` }}
    >
      <div className="relative border-b border-outline">
        <ProjectCover title={project.title} image={project.image} priority={priority} />

        {project.url && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-on-gold shadow-[var(--shadow-sm)]">
            <span className="h-1.5 w-1.5 rounded-full bg-on-gold" aria-hidden="true" />
            {t('portfolio.live')}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-gold-text">
          {getCategoryLabel(project.category, lang)}
        </span>

        <h3 className="mt-2 flex items-start gap-2 text-lg font-semibold text-on-surface">
          {project.title}
          <FiArrowUpRight
            className="arrow-slide mt-0.5 shrink-0 text-on-muted transition-colors group-hover:text-gold-text"
            aria-hidden="true"
          />
        </h3>

        <p className="mt-1.5 text-sm leading-relaxed text-on-variant">
          {project.subtitle[lang]}
        </p>

        {/* mt-auto : les cartes d'une même rangée n'ont pas la même hauteur de
            texte, la ligne de technologies doit rester alignée en bas. */}
        <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-outline pt-4 mt-5">
          {project.stack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-surface-container px-2.5 py-1 text-xs font-medium text-on-variant"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
