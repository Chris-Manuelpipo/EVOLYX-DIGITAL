import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from '../ui/ThemeToggle';
import LogoMark from '../ui/LogoMark';

const navItems = [
  { to: '/', key: 'home' },
  { to: '/services', key: 'services' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/a-propos', key: 'about' },
];

export default function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-outline bg-surface/85 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-2.5">
          <LogoMark
            size={32}
            alt=""
            priority
            className="transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
          />
          <span className="text-[15px] font-bold tracking-tight text-on-surface">
            EVOLYX <span className="font-semibold text-gold-text">Digital</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-sm px-3 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-on-surface'
                    : 'text-on-variant hover:bg-surface-container hover:text-on-surface'
                }`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <Link to="/contact" className="btn btn-gold group">
            {t('nav.cta')}
            <FiArrowRight className="arrow-slide" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-xl text-on-surface transition-colors hover:bg-surface-container lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t('a11y.close_menu') : t('a11y.open_menu')}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      {/* Panneau mobile — déroulé sous la barre plutôt qu'en plein écran :
          le visiteur garde le contexte de la page derrière lui. */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t bg-surface transition-[max-height,opacity,border-color] duration-300 ease-[cubic-bezier(.2,0,0,1)] lg:hidden ${
          menuOpen
            ? 'max-h-[34rem] border-outline opacity-100'
            : 'pointer-events-none max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-sm px-3 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-surface-container text-on-surface'
                    : 'text-on-variant hover:bg-surface-container'
                }`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}

          <Link to="/contact" className="btn btn-gold group mt-3 w-full">
            {t('nav.cta')}
            <FiArrowRight className="arrow-slide" aria-hidden="true" />
          </Link>

          <div className="mt-4 flex items-center justify-between border-t border-outline pt-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
