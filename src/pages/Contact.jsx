import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/contact/ContactForm';
import { contact } from '../data/contact';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-evolyx-gold-dark uppercase mb-3">
          {t('contact.eyebrow')}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-evolyx-black mb-4">
          {t('contact.title')}
        </h1>
        <p className="text-evolyx-gray">{t('contact.subtitle')}</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white border border-evolyx-black/10 rounded-sm p-8 md:p-10">
        <ContactForm />
      </div>

      <div className="max-w-2xl mx-auto mt-10 text-center">
        <p className="text-sm text-evolyx-gray mb-4">{t('contact.direct')}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 min-h-11 hover:text-evolyx-gold transition-colors"
          >
            <FaEnvelope className="text-evolyx-gold" aria-hidden="true" />
            {contact.email}
          </a>
          <a
            href={contact.whatsappUrl}
            className="inline-flex items-center justify-center gap-2 min-h-11 hover:text-evolyx-gold transition-colors"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-evolyx-gold" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
