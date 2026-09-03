import { useTranslation } from 'react-i18next';
import { contact, isFilled } from '../data/contact';

function Row({ label, value, pending, href }) {
  const display = isFilled(value) ? value : pending;
  const muted = !isFilled(value);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-4 py-3 border-b border-evolyx-black/10">
      <dt className="text-sm font-medium text-evolyx-black">{label}</dt>
      <dd className={`text-sm ${muted ? 'text-evolyx-gray italic' : 'text-evolyx-black'}`}>
        {href && isFilled(value) ? (
          <a href={href} className="hover:text-evolyx-gold transition-colors">
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
  const address = [legal.address, legal.city].filter(Boolean).join(', ');

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-evolyx-black mb-8">
          {t('legal_page.title')}
        </h1>

        <h2 className="font-display text-xl font-bold text-evolyx-black mb-2">
          {t('legal_page.publisher')}
        </h2>
        <dl>
          <Row label={t('legal_page.company')} value={legal.company} pending={pending} />
          <Row label={t('legal_page.parent')} value={legal.parent} pending={pending} />
          <Row label={t('legal_page.legal_form')} value={legal.legalForm} pending={pending} />
          <Row label={t('legal_page.rccm')} value={legal.rccm} pending={pending} />
          <Row label={t('legal_page.niu')} value={legal.niu} pending={pending} />
          <Row label={t('legal_page.address')} value={address} pending={pending} />
          <Row label={t('legal_page.director')} value={legal.director} pending={pending} />
          <Row label={t('legal_page.host')} value={legal.host} pending={pending} />
        </dl>

        <h2 className="font-display text-xl font-bold text-evolyx-black mt-10 mb-2">
          {t('legal_page.contact')}
        </h2>
        <dl>
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
          />
        </dl>
      </div>
    </div>
  );
}
