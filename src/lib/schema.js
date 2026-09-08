import { contact, isFilled } from '../data/contact';
import { services } from '../data/services';
import { SITE_NAME, SITE_ORIGIN, OG_IMAGE, canonicalUrl, absoluteUrl } from './site';

export function organizationNode() {
  const sameAs = [contact.groupUrl, contact.linkedin, contact.github].filter(isFilled);

  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE_ORIGIN}/#org`,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    email: contact.email,
    telephone: `+${contact.whatsapp}`,
    image: OG_IMAGE,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yaoundé',
      addressCountry: 'CM',
    },
    areaServed: [
      { '@type': 'Country', name: 'Cameroon' },
      'Worldwide',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: contact.legal.parent,
      url: contact.groupUrl,
    },
    knowsAbout: services.map((service) => service.title.fr),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: SITE_NAME,
    inLanguage: ['fr', 'en'],
    publisher: { '@id': `${SITE_ORIGIN}/#org` },
  };
}

export function breadcrumbNode(items) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl(items.at(-1)?.path || '/')}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function webPageNode({ path, title, description, lang, extraType }) {
  return {
    '@type': extraType ? ['WebPage', extraType] : 'WebPage',
    '@id': `${canonicalUrl(path)}#webpage`,
    url: canonicalUrl(path),
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    about: { '@id': `${SITE_ORIGIN}/#org` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
    },
  };
}

export function projectNode(project, lang) {
  const node = {
    '@type': 'SoftwareApplication',
    '@id': `${canonicalUrl(`/portfolio/${project.slug}`)}#app`,
    name: project.title,
    description: project.subtitle[lang] || project.subtitle.fr,
    applicationCategory: 'BusinessApplication',
    operatingSystem: project.stack.join(', '),
    author: { '@id': `${SITE_ORIGIN}/#org` },
    url: canonicalUrl(`/portfolio/${project.slug}`),
  };
  if (project.url) node.sameAs = project.url;
  if (project.image) node.image = absoluteUrl(project.image);
  return node;
}

export function buildGraph(nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationNode(), websiteNode(), ...nodes],
  };
}
