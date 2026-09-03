import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { title: t('about_page.value_1_title'), text: t('about_page.value_1_text') },
    { title: t('about_page.value_2_title'), text: t('about_page.value_2_text') },
    { title: t('about_page.value_3_title'), text: t('about_page.value_3_text') },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-evolyx-black mb-6">
          {t('about_page.title')}
        </h1>
        <p className="text-lg text-evolyx-gray leading-relaxed mb-12">
          {t('about_page.intro')}
        </p>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-evolyx-black mb-3">
            {t('about_page.group_title')}
          </h2>
          <p className="text-evolyx-gray leading-relaxed">{t('about_page.group_text')}</p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-evolyx-black mb-3">
            {t('about_page.approach_title')}
          </h2>
          <p className="text-evolyx-gray leading-relaxed">{t('about_page.approach_text')}</p>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-evolyx-black mb-6">
            {t('about_page.values_title')}
          </h2>
          <div className="space-y-6">
            {values.map((value) => (
              <div key={value.title} className="border-l-[3px] border-evolyx-gold pl-5">
                <h3 className="font-display font-bold text-lg text-evolyx-black mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-evolyx-gray leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center min-h-11 bg-evolyx-black text-white font-medium px-8 py-3 rounded-sm hover:bg-evolyx-gold hover:text-evolyx-black transition-colors"
        >
          {t('nav.cta')}
        </Link>
      </div>
    </div>
  );
}
