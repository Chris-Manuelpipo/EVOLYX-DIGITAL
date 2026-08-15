import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
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

  const isHome = pathname === '/';
  // Transparent + light text only on the homepage hero, before scrolling.
  const transparentMode = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparentMode ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur shadow-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <LogoMark size={26} />
          <span
            className={`font-display text-lg font-bold tracking-tight ${
              transparentMode ? 'text-white' : 'text-evolyx-black'
            }`}
          >
            EVOLYX <span className="text-evolyx-gold">Digital</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-evolyx-gold ${
                  isActive
                    ? 'text-evolyx-gold'
                    : transparentMode
                    ? 'text-white/85'
                    : 'text-evolyx-black'
                }`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher transparent={transparentMode} />
          <Link
            to="/contact"
            className={`text-sm font-medium px-5 py-2.5 rounded-sm transition-colors ${
              transparentMode
                ? 'border border-evolyx-gold text-evolyx-gold hover:bg-evolyx-gold hover:text-evolyx-black-deep'
                : 'bg-evolyx-black text-white hover:bg-evolyx-gold'
            }`}
          >
            {t('nav.cta')}
          </Link>
        </div>

        <button
          className={`md:hidden text-xl ${transparentMode ? 'text-white' : 'text-evolyx-black'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-evolyx-black/10 mt-4 px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className="text-evolyx-black text-base font-medium"
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="bg-evolyx-black text-white text-center text-sm font-medium px-5 py-3 rounded-sm"
          >
            {t('nav.cta')}
          </Link>
        </div>
      )}
    </header>
  );
}
