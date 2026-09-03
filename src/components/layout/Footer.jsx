import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { contact, isFilled } from '../../data/contact';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-evolyx-black text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-xl font-bold text-white mb-3">
            EVOLYX <span className="text-evolyx-gold">Digital</span>
          </div>
          <p className="text-sm leading-relaxed">{t('footer.tagline')}</p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            {t('footer.quick_links')}
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-evolyx-gold transition-colors">
                {t('nav.services')}
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-evolyx-gold transition-colors">
                {t('nav.portfolio')}
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-evolyx-gold transition-colors">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-evolyx-gold transition-colors">
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            {t('footer.group')}
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={contact.groupUrl}
                className="hover:text-evolyx-gold transition-colors"
                rel="noopener noreferrer"
              >
                EVOLYX
              </a>
            </li>
            <li>
              <a
                href={contact.shopUrl}
                className="hover:text-evolyx-gold transition-colors"
                rel="noopener noreferrer"
              >
                EVOLYX Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            {t('footer.contact')}
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 min-h-11 hover:text-evolyx-gold transition-colors"
              >
                <FaEnvelope className="text-evolyx-gold shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappUrl}
                className="inline-flex items-center gap-2 min-h-11 hover:text-evolyx-gold transition-colors"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-evolyx-gold shrink-0" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>
          {(isFilled(contact.linkedin) || isFilled(contact.github)) && (
            <div className="flex gap-4 mt-4 text-lg">
              {isFilled(contact.linkedin) && (
                <a
                  href={contact.linkedin}
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 hover:text-evolyx-gold transition-colors"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}
              {isFilled(contact.github) && (
                <a
                  href={contact.github}
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 hover:text-evolyx-gold transition-colors"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <p>
          &copy; {year} EVOLYX Digital. {t('footer.rights')}
        </p>
        <Link to="/mentions-legales" className="hover:text-evolyx-gold transition-colors min-h-11 inline-flex items-center">
          {t('footer.legal')}
        </Link>
      </div>
    </footer>
  );
}
