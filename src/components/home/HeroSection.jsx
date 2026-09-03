import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import HexFacet from '../ui/HexFacet';

export default function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    { value: t('hero.stat_1_value'), label: t('hero.stat_1_label') },
    { value: t('hero.stat_2_value'), label: t('hero.stat_2_label') },
    { value: t('hero.stat_3_value'), label: t('hero.stat_3_label') },
  ];

  return (
    <section className="relative bg-evolyx-black-deep pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 relative z-[3] pb-20">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-10 h-0.5 bg-evolyx-gold" aria-hidden="true" />
            <span className="text-evolyx-gold text-xs font-semibold tracking-[0.25em] uppercase">
              {t('hero.eyebrow')}
            </span>
          </div>

          <h1 className="font-display font-bold text-white leading-[1.04] text-[42px] sm:text-[54px] lg:text-[72px] tracking-tight">
            {t('hero.title_1')}{' '}
            <span className="italic font-semibold text-evolyx-gold">
              {t('hero.title_highlight')}
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/contact"
              className="bg-evolyx-gold text-evolyx-black-deep font-semibold px-8 py-4 min-h-11 rounded-sm hover:bg-evolyx-gold-light transition-colors inline-flex items-center justify-center gap-2"
            >
              {t('hero.cta_primary')} <FaArrowRight className="text-sm" aria-hidden="true" />
            </Link>
            <Link
              to="/portfolio"
              className="border border-white/25 text-white font-medium px-8 py-4 min-h-11 rounded-sm hover:border-evolyx-gold hover:text-evolyx-gold transition-colors inline-flex items-center justify-center"
            >
              {t('hero.cta_secondary')}
            </Link>
          </div>

          <div className="flex flex-wrap gap-11 mt-16 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-evolyx-gold">{stat.value}</div>
                <div className="text-xs text-white/70 mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center h-[520px]">
          <div className="absolute w-[480px] h-[480px] rounded-full bg-evolyx-gold/10 blur-3xl" aria-hidden="true" />
          <HexFacet size={380} className="relative z-[2]" />
        </div>
      </div>
    </section>
  );
}
