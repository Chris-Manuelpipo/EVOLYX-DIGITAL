import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Reveal from '../components/ui/Reveal';
import Brandmark from '../components/ui/Brandmark';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Reveal
      as="section"
      immediate
      className="relative flex min-h-[78svh] items-center overflow-hidden pb-20 pt-28"
    >
      <div className="grid-faint absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="r-rise mb-8 flex justify-center">
            <Brandmark size={100} />
          </div>

          <span
            className="r-fade block text-[clamp(3.5rem,12vw,7rem)] font-extrabold leading-none tracking-tighter text-on-surface/10 tabular-nums"
            aria-hidden="true"
          >
            404
          </span>

          <h1
            className="display r-rise mt-4 text-[clamp(1.6rem,3.6vw,2.5rem)] text-on-surface"
            style={{ '--d': '80ms' }}
          >
            {t('not_found.title')}
          </h1>

          <p className="r-rise body-lg mt-3 text-on-variant" style={{ '--d': '160ms' }}>
            {t('not_found.text')}
          </p>

          <div
            className="r-rise mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            style={{ '--d': '240ms' }}
          >
            <Link to="/" className="btn btn-gold group">
              <FiArrowLeft aria-hidden="true" />
              {t('not_found.cta_home')}
            </Link>
            <Link to="/portfolio" className="btn btn-outline group">
              {t('not_found.cta_portfolio')}
              <FiArrowRight className="arrow-slide" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
