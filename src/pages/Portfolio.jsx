import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects, categories } from '../data/projects';
import ProjectCard from '../components/portfolio/ProjectCard';

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'fr';
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-evolyx-gold uppercase mb-3">
          {t('portfolio.eyebrow')}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-evolyx-black mb-4">
          {t('portfolio.title')}
        </h1>
        <p className="text-evolyx-gray max-w-2xl mx-auto">{t('portfolio.subtitle')}</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-sm font-medium px-5 py-2 rounded-full border transition-colors ${
              activeCategory === cat.id
                ? 'bg-evolyx-black text-white border-evolyx-black'
                : 'border-evolyx-black/20 text-evolyx-black hover:border-evolyx-gold'
            }`}
          >
            {cat.label[lang]}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
