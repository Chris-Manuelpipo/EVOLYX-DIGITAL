import { useTranslation } from 'react-i18next';
import { contact, formatLegalHost, isFilled } from '../data/contact';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/ui/Reveal';
import { sectionBandClass } from '../lib/sectionBand';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const hostFormatted = formatLegalHost(contact.legal.host);
  const host = isFilled(hostFormatted) ? hostFormatted : t('privacy_page.host_pending');

  const sections = [
    { title: t('privacy_page.controller_title'), body: t('privacy_page.controller_text', { email: contact.email }) },
    { title: t('privacy_page.data_title'), body: t('privacy_page.data_text') },
    { title: t('privacy_page.purpose_title'), body: t('privacy_page.purpose_text') },
    { title: t('privacy_page.legal_basis_title'), body: t('privacy_page.legal_basis_text') },
    { title: t('privacy_page.retention_title'), body: t('privacy_page.retention_text') },
    {
      title: t('privacy_page.processors_title'),
      body: t('privacy_page.processors_text', { host }),
    },
    { title: t('privacy_page.cookies_title'), body: t('privacy_page.cookies_text') },
    { title: t('privacy_page.rights_title'), body: t('privacy_page.rights_text', { email: contact.email }) },
    { title: t('privacy_page.updates_title'), body: t('privacy_page.updates_text') },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('footer.privacy')}
        lines={t('privacy_page.title_lines', { returnObjects: true })}
        intro={t('privacy_page.intro')}
      />

      <section className={sectionBandClass('primary', 'compact')}>
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal as="article" className="card space-y-8 p-6 md:p-8">
            {sections.map((section, index) => (
              <section key={section.title}>
                <h2
                  className="r-rise text-base font-semibold text-on-surface"
                  style={{ '--d': `${index * 40}ms` }}
                >
                  {section.title}
                </h2>
                <p
                  className="r-rise mt-2 text-sm leading-relaxed text-on-variant whitespace-pre-line"
                  style={{ '--d': `${index * 40 + 60}ms` }}
                >
                  {section.body}
                </p>
              </section>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
