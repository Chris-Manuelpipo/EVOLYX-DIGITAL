import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'fr';

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group block bg-evolyx-black-deep transition-transform hover:-translate-y-1"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)' }}
    >
      <div
        className="aspect-[16/10] flex items-center justify-center relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(212,175,55,0.22) 0%, transparent 45%), linear-gradient(315deg, rgba(212,175,55,0.10) 0%, transparent 55%), #1e1e1c',
        }}
      >
        <span className="font-display text-2xl font-bold text-evolyx-gold/75 tracking-tight">
          {project.title}
        </span>
      </div>
      <div className="p-6">
        <p className="text-evolyx-gold text-[11px] font-bold tracking-[0.15em] uppercase">
          {project.category}
        </p>
        <h3 className="font-display text-lg font-bold text-white mt-2">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 mt-1.5 mb-4">{project.subtitle[lang]}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium text-white/60 border border-white/15 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
