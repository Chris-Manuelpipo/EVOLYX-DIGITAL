import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/ui/Reveal';
import Brandmark from '../components/ui/Brandmark';

export default function About() {
  const { t } = useTranslation();

  const chapters = [
    { title: t('about_page.group_title'), text: t('about_page.group_text') },
    { title: t('about_page.approach_title'), text: t('about_page.approach_text') },
  ];

  const values = [
    { title: t('about_page.value_1_title'), text: t('about_page.value_1_text') },
    { title: t('about_page.value_2_title'), text: t('about_page.value_2_text') },
    { title: t('about_page.value_3_title'), text: t('about_page.value_3_text') },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('nav.about')}
        lines={t('about_page.title_lines', { returnObjects: true })}
        accentIndex={1}
        intro={t('about_page.intro')}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div>
              {chapters.map((chapter) => (
                <Reveal as="section" key={chapter.title} className="mb-10 last:mb-0">
                  <h2 className="r-rise text-xl font-semibold text-on-surface md:text-2xl">
                    {chapter.title}
                  </h2>
                  <p
                    className="r-rise body-lg mt-3 max-w-[68ch] text-on-variant"
                    style={{ '--d': '100ms' }}
                  >
                    {chapter.text}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* L'emblème du groupe, présenté en grand sur la page qui parle du groupe */}
            <Reveal className="r-rise hidden justify-center lg:flex">
              <Brandmark size={180} />
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <h2 className="r-rise display text-[clamp(1.6rem,3.2vw,2.25rem)] text-on-surface">
              {t('about_page.values_title')}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card r-rise p-6"
                  style={{ '--d': `${index * 90}ms` }}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/12 text-sm font-bold text-gold-text">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-[17px] font-semibold text-on-surface">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-variant">{value.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <div className="card r-rise flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
              <p className="text-lg font-medium text-on-surface md:text-xl">
                {t('cta_final.subtitle')}
              </p>
              <Link to="/contact" className="btn btn-gold group shrink-0">
                {t('nav.cta')}
                <FiArrowRight className="arrow-slide" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
