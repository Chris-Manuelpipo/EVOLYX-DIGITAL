import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../../data/contact';
import Reveal from '../ui/Reveal';
import Headline from '../ui/Headline';
import LogoMark from '../ui/LogoMark';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="border-t border-outline bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-xl border border-outline bg-surface-container px-6 py-14 text-center sm:px-12">
          <div className="glow-gold absolute inset-0" aria-hidden="true" />

          <div className="relative mx-auto max-w-2xl">
            <div className="r-rise mb-6 flex justify-center">
              <LogoMark size={40} />
            </div>

            <Headline
              lines={t('cta_final.title_lines', { returnObjects: true })}
              start={80}
              className="display text-[clamp(1.75rem,3.8vw,2.75rem)] text-on-surface"
            />

            <p
              className="r-rise body-lg mx-auto mt-4 max-w-[48ch] text-on-variant"
              style={{ '--d': '280ms' }}
            >
              {t('cta_final.subtitle')}
            </p>

            <div
              className="r-rise mt-8 flex flex-col justify-center gap-3 sm:flex-row"
              style={{ '--d': '350ms' }}
            >
              <Link to="/contact" className="btn btn-gold group">
                {t('cta_final.button')}
                <FiArrowRight className="arrow-slide" aria-hidden="true" />
              </Link>

              {/* Porte d'entrée à faible engagement — sur ce marché, WhatsApp
                  convertit mieux qu'un formulaire de sept champs. */}
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

            <p className="r-fade mt-6 text-sm text-on-muted" style={{ '--d': '420ms' }}>
              {t('contact.sla_text')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
