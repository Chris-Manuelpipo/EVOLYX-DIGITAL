import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects, getCategoryLabel } from '../../data/projects';

export default function OutcomeCard({ outcome, delay = 0 }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';
  const project = projects.find((item) => item.slug === outcome.project);
  if (!project) return null;

  return (
    <article
      className="card r-rise flex h-full flex-col p-6"
      style={{ '--d': `${delay}ms` }}
    >
      <span className="chip w-fit">{getCategoryLabel(project.category, lang)}</span>
      <h3 className="mt-4 text-[17px] font-semibold text-on-surface">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-on-variant">{outcome.outcome[lang]}</p>
      <Link
        to={`/portfolio/${project.slug}`}
        className="link-line group mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-on-surface transition-colors hover:text-gold-text"
      >
        {t('portfolio.view_project')}
        <FiArrowUpRight
          className="arrow-slide shrink-0 transition-colors group-hover:text-gold-text"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
