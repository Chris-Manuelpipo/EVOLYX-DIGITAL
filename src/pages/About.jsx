import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-evolyx-black mb-6">
          {t('about_page.title')}
        </h1>
        <p className="text-lg text-evolyx-gray leading-relaxed mb-10">
          {t('about_page.intro')}
        </p>

        <div className="bg-evolyx-bg rounded-2xl p-8 mb-10">
          <p className="text-evolyx-black/80 leading-relaxed">
            {/* TODO: Compléter avec l'histoire, l'équipe et les valeurs d'EVOLYX Digital */}
            Contenu à compléter : histoire d'EVOLYX Digital, présentation de l'équipe,
            valeurs et engagement qualité.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-evolyx-black text-white font-medium px-8 py-4 rounded-sm hover:bg-evolyx-gold transition-colors"
          >
            {t('nav.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
