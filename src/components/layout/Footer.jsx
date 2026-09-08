import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { contact, isFilled } from '../../data/contact';
import Reveal from '../ui/Reveal';
import LogoMark from '../ui/LogoMark';

const QUICK_LINKS = [
  { to: '/services', key: 'services' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/a-propos', key: 'about' },
  { to: '/contact', key: 'contact' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Reveal as="footer" className="border-t border-outline bg-surface">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[1.6fr_0.8fr_0.8fr_1.1fr]">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <LogoMark size={32} alt="" />
              <span className="text-[15px] font-bold tracking-tight text-on-surface">
                EVOLYX <span className="font-semibold text-gold-text">Digital</span>
              </span>
            </div>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-on-variant">
              {t('footer.tagline')}
            </p>
            <p className="mt-5 text-sm text-on-muted">Yaoundé — Cameroun</p>
          </div>

          <nav aria-label={t('footer.quick_links')}>
            <h2 className="text-sm font-semibold text-on-surface">{t('footer.quick_links')}</h2>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.to}
                    className="link-line text-sm text-on-variant transition-colors hover:text-on-surface"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-on-surface">{t('footer.group')}</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={contact.groupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-sm text-on-variant transition-colors hover:text-on-surface"
                >
                  EVOLYX
                </a>
              </li>
              <li>
                <a
                  href={contact.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-sm text-on-variant transition-colors hover:text-on-surface"
                >
                  EVOLYX Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-sm font-semibold text-on-surface">{t('footer.contact')}</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2.5 text-sm text-on-variant transition-colors hover:text-on-surface"
                >
                  <FaWhatsapp className="shrink-0 text-gold-text" aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-11 items-center gap-2.5 text-sm text-on-variant transition-colors hover:text-on-surface"
                >
                  <FiMail className="shrink-0 text-gold-text" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
            </ul>

            {(isFilled(contact.linkedin) || isFilled(contact.github)) && (
              <div className="mt-3 flex gap-2">
                {isFilled(contact.linkedin) && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-outline text-on-variant transition-colors hover:border-outline-strong hover:text-on-surface"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {isFilled(contact.github) && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-outline text-on-variant transition-colors hover:border-outline-strong hover:text-on-surface"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Signature typographique pleine largeur */}
        <div
          className="r-fade pointer-events-none mt-16 select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="block whitespace-nowrap pb-[0.14em] text-[clamp(2.25rem,11.5vw,8.75rem)] font-extrabold leading-[0.88] tracking-[-0.05em] text-on-surface/[0.055]">
            EVOLYX Digital
          </span>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-outline pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-on-muted">
            © {year} EVOLYX Digital — {t('footer.rights')}
          </p>
          <Link
            to="/mentions-legales"
            className="link-line text-xs text-on-muted transition-colors hover:text-on-surface"
          >
            {t('footer.legal')}
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
