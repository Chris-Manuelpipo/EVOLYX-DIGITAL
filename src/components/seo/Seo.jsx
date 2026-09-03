import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';

const ROUTES = {
  '/': ['seo.home_title', 'seo.home_description'],
  '/services': ['seo.services_title', 'seo.services_description'],
  '/portfolio': ['seo.portfolio_title', 'seo.portfolio_description'],
  '/a-propos': ['seo.about_title', 'seo.about_description'],
  '/contact': ['seo.contact_title', 'seo.contact_description'],
  '/mentions-legales': ['seo.legal_title', 'seo.legal_description'],
};

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = i18n.language.startsWith('en') ? 'en' : 'fr';
    document.documentElement.lang = lang;

    const project = projects.find((item) => pathname === `/portfolio/${item.slug}`);
    let title = t('seo.default_title');
    let description = t('seo.default_description');

    if (project) {
      title = t('seo.project_title', { title: project.title });
      description = project.subtitle[lang];
    } else if (ROUTES[pathname]) {
      const [titleKey, descKey] = ROUTES[pathname];
      title = t(titleKey);
      description = t(descKey);
    }

    document.title = title;
    setMeta('description', description);
    setProperty('og:title', title);
    setProperty('og:description', description);
    setProperty('og:type', 'website');
  }, [pathname, t, i18n.language]);

  return null;
}
