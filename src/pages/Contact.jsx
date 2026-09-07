import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiClock, FiArrowUpRight } from 'react-icons/fi';
import ContactForm from '../components/contact/ContactForm';
import { contact } from '../data/contact';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/ui/Reveal';

export default function Contact() {
  const { t } = useTranslation();

  const channels = [
    {
      icon: FaWhatsapp,
      label: t('contact.channel_whatsapp'),
      value: contact.phoneDisplay,
      href: contact.whatsappUrl,
      external: true,
    },
    {
      icon: FiMail,
      label: t('contact.channel_email'),
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('contact.eyebrow')}
        lines={t('contact.title_lines', { returnObjects: true })}
        accentIndex={1}
        intro={t('contact.subtitle')}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            {/* Canaux directs en premier : tout le monde ne veut pas remplir
                un formulaire de sept champs. */}
            <Reveal as="aside" className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="r-rise text-sm font-semibold text-on-surface">
                {t('contact.direct')}
              </h2>

              <ul className="mt-4 space-y-3">
                {channels.map((channel, index) => {
                  const Icon = channel.icon;
                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        {...(channel.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="card card-hover r-rise group flex items-center gap-3.5 p-4"
                        style={{ '--d': `${index * 80}ms` }}
                      >
                        <span
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold/12 text-[17px] text-gold-text"
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs text-on-muted">{channel.label}</span>
                          <span className="mt-0.5 block truncate text-sm font-medium text-on-surface">
                            {channel.value}
                          </span>
                        </span>
                        <FiArrowUpRight
                          className="arrow-slide shrink-0 text-on-muted transition-colors group-hover:text-gold-text"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="card r-rise mt-4 p-4" style={{ '--d': '180ms' }}>
                <span className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                  <FiClock className="text-gold-text" aria-hidden="true" />
                  {t('contact.sla_label')}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-on-variant">
                  {t('contact.sla_text')}
                </p>
              </div>

              <p className="r-fade mt-4 text-xs text-on-muted" style={{ '--d': '240ms' }}>
                Yaoundé — Cameroun · FR / EN
              </p>
            </Reveal>

            <Reveal>
              <div className="card r-rise p-6 md:p-8">
                <h2 className="mb-6 text-sm font-semibold text-on-surface">
                  {t('contact.form_label')}
                </h2>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
