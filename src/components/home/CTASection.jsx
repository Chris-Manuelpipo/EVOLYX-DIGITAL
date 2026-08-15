import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-evolyx-bg rounded-3xl px-8 py-16 text-center border border-evolyx-gold/20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-evolyx-black mb-3">
          {t('cta_final.title')}
        </h2>
        <p className="text-evolyx-gray mb-8">{t('cta_final.subtitle')}</p>
        <Link
          to="/contact"
          className="inline-block bg-evolyx-gold text-evolyx-black font-semibold px-8 py-4 rounded-sm hover:bg-evolyx-black hover:text-white transition-colors"
        >
          {t('cta_final.button')}
        </Link>
      </div>
    </section>
  );
}
