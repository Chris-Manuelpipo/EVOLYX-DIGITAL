import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects, categories } from '../data/projects';
import ProjectCard from '../components/portfolio/ProjectCard';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/ui/Reveal';

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const countFor = (id) =>
    id === 'all' ? projects.length : projects.filter((p) => p.category === id).length;

  return (
    <>
      <PageHeader
        eyebrow={t('portfolio.eyebrow')}
        lines={t('portfolio.title_lines', { returnObjects: true })}
        accentIndex={1}
        intro={t('portfolio.subtitle')}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-10 flex flex-wrap items-center gap-2">
            {categories.map((category, index) => {
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={active}
                  className={`r-rise inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'border-transparent bg-on-surface text-surface'
                      : 'border-outline bg-surface text-on-variant hover:border-outline-strong hover:text-on-surface'
                  }`}
                  style={{ '--d': `${index * 50}ms` }}
                >
                  {category.label[lang]}
                  <span
                    className={`text-xs tabular-nums ${active ? 'opacity-70' : 'text-on-muted'}`}
                  >
                    {countFor(category.id)}
                  </span>
                </button>
              );
            })}
          </Reveal>

          {/* La clé change avec le filtre : les cartes rejouent leur révélation
              à chaque changement de catégorie, ce qui rend le filtre lisible. */}
          <Reveal
            key={activeCategory}
            immediate
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.slug} project={project} delay={index * 60} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
