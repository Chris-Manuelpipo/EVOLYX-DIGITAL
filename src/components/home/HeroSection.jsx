import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import HexFacet from '../ui/HexFacet';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-evolyx-black-deep pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 relative z-[3] pb-20">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-10 h-0.5 bg-evolyx-gold" />
            <span className="text-evolyx-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Studio digital camerounais
            </span>
          </div>

          <h1 className="font-display font-bold text-white leading-[1.04] text-[42px] sm:text-[54px] lg:text-[72px] tracking-tight">
            {t('hero.title_1')}{' '}
            <span className="italic font-semibold bg-gradient-to-r from-evolyx-gold-light to-evolyx-gold bg-clip-text text-transparent">
              {t('hero.title_highlight')}
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/portfolio"
              className="bg-evolyx-gold text-evolyx-black-deep font-semibold px-8 py-4 rounded-sm hover:bg-evolyx-gold-light transition-colors inline-flex items-center justify-center gap-2"
            >
              {t('hero.cta_primary')} <FaArrowRight className="text-sm" />
            </Link>
            <Link
              to="/contact"
              className="border border-white/25 text-white font-medium px-8 py-4 rounded-sm hover:border-evolyx-gold hover:text-evolyx-gold transition-colors inline-flex items-center justify-center"
            >
              {t('hero.cta_secondary')}
            </Link>
          </div>

          <div className="flex gap-11 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="font-display text-3xl font-bold text-evolyx-gold">7+</div>
              <div className="text-xs text-white/50 mt-1 tracking-wide">Projets en production</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-evolyx-gold">2</div>
              <div className="text-xs text-white/50 mt-1 tracking-wide">Langues — FR / EN</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-evolyx-gold">100%</div>
              <div className="text-xs text-white/50 mt-1 tracking-wide">Sur mesure</div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center h-[520px]">
          <div className="absolute w-[480px] h-[480px] rounded-full bg-evolyx-gold/10 blur-3xl" />
          <HexFacet size={380} className="relative z-[2]" />
        </div>
      </div>
    </section>
  );
}
