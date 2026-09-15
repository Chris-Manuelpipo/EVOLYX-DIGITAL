import { useTranslation } from 'react-i18next';
import { contact, isFilled } from '../data/contact';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/ui/Reveal';
import { sectionBandClass } from '../lib/sectionBand';

function Row({ label, value, pending, href, delay = 0 }) {
  const filled = isFilled(value);
  const display = filled ? value : pending;

  return (
    <div
      className="r-rise grid grid-cols-1 gap-1 border-b border-outline py-3.5 last:border-b-0 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6"
      style={{ '--d': `${delay}ms` }}
    >
      <dt className="text-sm font-medium text-on-variant">{label}</dt>
      <dd className={`text-sm ${filled ? 'text-on-surface' : 'italic text-on-muted'}`}>
        {href && filled ? (
          <a href={href} className="link-line transition-colors hover:text-gold-text">
            {display}
          </a>
        ) : (
          display
        )}
      </dd>
    </div>
  );
}

export default function LegalNotice() {
  const { t } = useTranslation();
  const pending = t('legal_page.pending');
  const { legal } = contact;

  const publisher = [
    { label: t('legal_page.company'), value: legal.company },
    { label: t('legal_page.parent'), value: legal.parent },
    { label: t('legal_page.director'), value: legal.director },
  ];

  const host = legal.host;
  const hostRows =
    host && typeof host === 'object'
      ? [
          { label: t('legal_page.host_name'), value: host.name },
          { label: t('legal_page.host_address'), value: host.address },
          {
            label: t('legal_page.host_website'),
            value: host.url ? host.url.replace(/^https?:\/\//, '') : '',
            href: host.url,
          },
        ]
      : [{ label: t('legal_page.host_name'), value: typeof host === 'string' ? host : '' }];

  return (
    <>
      <PageHeader
        eyebrow={t('footer.legal')}
        lines={t('legal_page.title_lines', { returnObjects: true })}
      />

      <section className={sectionBandClass('primary', 'compact')}>
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal as="section" className="card p-6 md:p-8">
            <h2 className="text-sm font-semibold text-on-surface">
              {t('legal_page.publisher')}
            </h2>
            <dl className="mt-4">
              {publisher.map((row, index) => (
                <Row
                  key={row.label}
                  label={row.label}
                  value={row.value}
                  pending={pending}
                  delay={index * 40}
                />
              ))}
            </dl>
          </Reveal>

          <Reveal as="section" className="card mt-5 p-6 md:p-8">
            <h2 className="text-sm font-semibold text-on-surface">{t('legal_page.hosting')}</h2>
            <p className="mt-2 text-sm text-on-variant">{t('legal_page.hosting_intro')}</p>
            <dl className="mt-4">
              {hostRows.map((row, index) => (
                <Row
                  key={row.label}
                  label={row.label}
                  value={row.value}
                  pending={pending}
                  href={row.href}
                  delay={index * 40}
                />
              ))}
            </dl>
          </Reveal>

          <Reveal as="section" className="card mt-5 p-6 md:p-8">
            <h2 className="text-sm font-semibold text-on-surface">{t('legal_page.contact')}</h2>
            <dl className="mt-4">
              <Row
                label={t('contact.form.email')}
                value={contact.email}
                pending={pending}
                href={`mailto:${contact.email}`}
              />
              <Row
                label={t('contact.form.phone')}
                value={contact.phoneDisplay}
                pending={pending}
                href={`tel:${contact.phoneTel}`}
                delay={40}
              />
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
