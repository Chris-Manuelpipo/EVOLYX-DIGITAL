import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { contact } from '../../data/contact';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import LogoMark from '../ui/LogoMark';
import BrowserFrame from '../ui/BrowserFrame';
import ProjectCover from '../portfolio/ProjectCover';

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';

  // Le visuel du héros est une capture réelle, pas une illustration : le premier
  // écran doit déjà prouver quelque chose. On prend le premier projet mis en
  // avant qui dispose d'une capture.
  const showcase =
    projects.find((project) => project.featured && project.image) ||
    projects.find((project) => project.image);

  const stats = [
    { value: t('hero.stat_1_value'), label: t('hero.stat_1_label') },
    { value: t('hero.stat_2_value'), label: t('hero.stat_2_label') },
    { value: t('hero.stat_3_value'), label: t('hero.stat_3_label') },
  ];

  return (
    <Reveal as="section" immediate className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="grid-faint absolute inset-0" aria-hidden="true" />
      <div
        className="glow-gold absolute left-1/2 top-0 h-[620px] w-[1100px] max-w-[150vw] -translate-x-1/2 -translate-y-1/3"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* L'emblème EVOLYX ouvre la page : c'est la marque du groupe,
              elle ne se réduit pas à une vignette dans un coin de l'en-tête. */}
          <div className="r-rise mb-7 flex justify-center">
            <span className="relative inline-flex items-center justify-center">
              <span className="glow-gold absolute inset-[-90%] rounded-full" aria-hidden="true" />
              <LogoMark size={88} priority className="relative" />
            </span>
          </div>

          <div className="r-rise mb-6 flex justify-center" style={{ '--d': '60ms' }}>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              {t('hero.eyebrow')}
            </span>
          </div>

          <Headline
            as="h1"
            lines={t('hero.title_lines', { returnObjects: true })}
            start={140}
            stagger={90}
            className="display text-[clamp(2.25rem,5.6vw,4rem)] text-on-surface"
          />

          <p
            className="r-rise body-lg mx-auto mt-6 max-w-[54ch] text-on-variant"
            style={{ '--d': '400ms' }}
          >
            {t('hero.subtitle')}
          </p>

          <div
            className="r-rise mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            style={{ '--d': '470ms' }}
          >
            <Link to="/contact" className="btn btn-gold group">
              {t('hero.cta_primary')}
              <FiArrowRight className="arrow-slide" aria-hidden="true" />
            </Link>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FaWhatsapp className="text-[17px] text-gold-text" aria-hidden="true" />
              {t('cta_final.whatsapp')}
            </a>
          </div>

          <dl
            className="r-rise mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-outline pt-8"
            style={{ '--d': '540ms' }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-xl font-bold tracking-tight text-on-surface sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-on-muted sm:text-[13px]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {showcase && (
          <div className="r-veil mx-auto mt-16 max-w-5xl" style={{ '--d': '620ms' }}>
            <Link to={`/portfolio/${showcase.slug}`} className="group block">
              <BrowserFrame label={showcase.url ? hostname(showcase.url) : showcase.title}>
                <ProjectCover
                  title={`${showcase.title} — ${showcase.subtitle[lang]}`}
                  image={showcase.image}
                  className="aspect-[16/9]"
                  priority
                />
              </BrowserFrame>
            </Link>
          </div>
        )}
      </div>
    </Reveal>
  );
}
