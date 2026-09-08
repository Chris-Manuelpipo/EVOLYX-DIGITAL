import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN, canonicalUrl } from '../../lib/site';
import {
  breadcrumbNode,
  buildGraph,
  projectNode,
  webPageNode,
} from '../../lib/schema';

const ROUTES = {
  '/': ['seo.home_title', 'seo.home_description', 'nav.home'],
  '/services': ['seo.services_title', 'seo.services_description', 'nav.services'],
  '/portfolio': ['seo.portfolio_title', 'seo.portfolio_description', 'nav.portfolio'],
  '/a-propos': ['seo.about_title', 'seo.about_description', 'nav.about'],
  '/contact': ['seo.contact_title', 'seo.contact_description', 'nav.contact'],
  '/mentions-legales': ['seo.legal_title', 'seo.legal_description', 'footer.legal'],
};

function setMeta(attr, key, content) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el =
    document.head.querySelector(`link[rel="${rel}"][data-seo]`) ||
    document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    el.setAttribute('data-seo', 'true');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(data) {
  let el = document.getElementById('ld-json');
  if (!el) {
    el = document.createElement('script');
    el.id = 'ld-json';
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = i18n.language.startsWith('en') ? 'en' : 'fr';
    document.documentElement.lang = lang;

    const project = projects.find((item) => pathname === `/portfolio/${item.slug}`);
    const known = Boolean(ROUTES[pathname] || project);

    let title = t('seo.not_found_title');
    let description = t('seo.not_found_description');
    let extraType;
    const crumbs = [{ path: '/', name: t('nav.home') }];

    if (project) {
      title = t('seo.project_title', { title: project.title });
      description = project.context[lang] || project.subtitle[lang];
      crumbs.push({ path: '/portfolio', name: t('nav.portfolio') });
      crumbs.push({ path: pathname, name: project.title });
    } else if (ROUTES[pathname]) {
      const [titleKey, descKey, labelKey] = ROUTES[pathname];
      title = t(titleKey);
      description = t(descKey);
      if (pathname === '/contact') extraType = 'ContactPage';
      if (pathname === '/a-propos') extraType = 'AboutPage';
      if (pathname !== '/') crumbs.push({ path: pathname, name: t(labelKey) });
    }

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', known ? 'index, follow' : 'noindex, follow');
    setMeta('name', 'author', SITE_NAME);
    setLink('canonical', known ? canonicalUrl(pathname) : SITE_ORIGIN);

    const ogLocale = lang === 'en' ? 'en_US' : 'fr_FR';
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', known ? canonicalUrl(pathname) : SITE_ORIGIN);
    setMeta('property', 'og:image', OG_IMAGE);
    setMeta('property', 'og:image:alt', title);
    setMeta('property', 'og:locale', ogLocale);
    setMeta('property', 'og:locale:alternate', lang === 'en' ? 'fr_FR' : 'en_US');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', OG_IMAGE);

    const graphNodes = [];
    if (known) {
      graphNodes.push(
        webPageNode({ path: pathname, title, description, lang, extraType }),
        breadcrumbNode(crumbs),
      );
      if (project) graphNodes.push(projectNode(project, lang));
    }
    setJsonLd(buildGraph(graphNodes));
  }, [pathname, t, i18n.language]);

  return null;
}
