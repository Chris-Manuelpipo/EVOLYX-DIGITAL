import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { contact } from '../../data/contact';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const PROJECT_TYPE_KEYS = ['web', 'mobile', 'business', 'automation', 'evolution', 'other'];
const BUDGET_KEYS = ['under_500', 'mid', 'high', 'enterprise', 'tbd'];

function isEmailJsConfigured() {
  const values = [EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY];
  return values.every((value) => value && !value.includes('YOUR_') && value.trim().length > 0);
}

const LABEL = 'block text-sm font-medium text-on-surface mb-1.5';
const ERROR = 'mt-1.5 flex items-center gap-1.5 text-xs text-danger';

// wa.me passe le message dans l'URL. Les navigateurs coupent au-delà de
// quelques milliers de caractères et le lien casse silencieusement : on borne
// le champ libre, seul champ dont la longueur n'est pas maîtrisée.
const WHATSAPP_MESSAGE_MAX = 1200;

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');

  // L'email est semi-optionnel : indispensable pour l'envoi par email, inutile
  // pour WhatsApp puisque la conversation porte déjà l'identité de l'expéditeur.
  // Le schéma l'accepte donc vide, mais le refuse mal formé.
  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('contact.form.errors.name')),
        company: z.string().optional(),
        email: z.union([z.literal(''), z.string().email(t('contact.form.errors.email'))]),
        phone: z.string().optional(),
        projectType: z.string().min(1, t('contact.form.errors.project_type')),
        budget: z.string().min(1, t('contact.form.errors.budget')),
        message: z.string().min(10, t('contact.form.errors.message')),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    getValues,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
    },
  });

  const onInvalid = (formErrors) => {
    const first = Object.keys(formErrors)[0];
    if (first) setFocus(first);
  };

  const onSubmit = async (data) => {
    if (!isEmailJsConfigured()) {
      setStatus('unconfigured');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...data,
          projectTypeLabel: t(`contact.form.types.${data.projectType}`),
          budgetLabel: t(`contact.form.budgets.${data.budget}`),
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  /** Met en forme la demande pour WhatsApp (les astérisques y font le gras). */
  const buildWhatsAppMessage = (data) => {
    const label = (key) => t(`contact.whatsapp_message.${key}`);
    const field = (key, value) => `*${label(key)}* : ${value}`;

    const need = data.message.trim();
    const truncated =
      need.length > WHATSAPP_MESSAGE_MAX
        ? `${need.slice(0, WHATSAPP_MESSAGE_MAX).trimEnd()}…\n${label('truncated')}`
        : need;

    const company = data.company?.trim();
    const phone = data.phone?.trim();
    const email = data.email?.trim();

    return [
      `*${label('title')}*`,
      '',
      field('name', data.name.trim()),
      // `null` et non `false` ou `''` : les chaînes vides du tableau sont des
      // sauts de ligne voulus, seul `null` marque un champ à retirer.
      company ? field('company', company) : null,
      email ? field('email', email) : null,
      phone ? field('phone', phone) : null,
      field('project_type', t(`contact.form.types.${data.projectType}`)),
      field('budget', t(`contact.form.budgets.${data.budget}`)),
      '',
      `*${label('need')}*`,
      truncated,
      '',
      label('footer'),
    ]
      .filter((line) => line !== null)
      .join('\n');
  };

  const sendToWhatsApp = () => {
    // Validation synchrone (zod l'est) : on reste dans le geste utilisateur,
    // donc l'ouverture d'onglet n'est pas bloquée par le navigateur.
    const values = getValues();
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      trigger();
      const first = parsed.error.issues[0]?.path?.[0];
      if (first) setFocus(first);
      return;
    }

    const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      buildWhatsAppMessage(parsed.data),
    )}`;

    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    // Bloqueur de pop-up ou navigateur intégré (Instagram, Facebook) :
    // on bascule sur une navigation classique plutôt que de ne rien faire.
    if (!opened) window.location.href = url;

    // On ne vide surtout pas le formulaire : si WhatsApp ne s'ouvre pas,
    // le visiteur doit retrouver sa saisie intacte.
    setStatus('whatsapp');
  };

  const required = <span className="text-gold-text">*</span>;

  // Le bouton d'envoi par email reste grisé tant qu'aucun email n'est saisi :
  // sans adresse, la demande partirait sans moyen de répondre.
  const emailFilled = Boolean(watch('email')?.trim());

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            {t('contact.form.name')} {required}
          </label>
          <input
            id="name"
            autoComplete="name"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
            className="field"
          />
          {errors.name && (
            <p id="name-error" className={ERROR} role="alert">
              <FiAlertCircle aria-hidden="true" /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={LABEL}>
            {t('contact.form.company')}
          </label>
          <input
            id="company"
            autoComplete="organization"
            {...register('company')}
            className="field"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={LABEL}>
            {t('contact.form.email')}{' '}
            <span className="font-normal text-on-muted">{t('contact.form.email_note')}</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
            className="field"
          />
          {errors.email && (
            <p id="email-error" className={ERROR} role="alert">
              <FiAlertCircle aria-hidden="true" /> {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={LABEL}>
            {t('contact.form.phone')}
          </label>
          <input id="phone" type="tel" autoComplete="tel" {...register('phone')} className="field" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className={LABEL}>
            {t('contact.form.project_type')} {required}
          </label>
          <select
            id="projectType"
            aria-invalid={errors.projectType ? 'true' : 'false'}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            {...register('projectType')}
            className="field"
          >
            <option value="" disabled>
              {t('contact.form.project_type_placeholder')}
            </option>
            {PROJECT_TYPE_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`contact.form.types.${key}`)}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" className={ERROR} role="alert">
              <FiAlertCircle aria-hidden="true" /> {errors.projectType.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className={LABEL}>
            {t('contact.form.budget')} {required}
          </label>
          <select
            id="budget"
            aria-invalid={errors.budget ? 'true' : 'false'}
            aria-describedby={errors.budget ? 'budget-error' : undefined}
            {...register('budget')}
            className="field"
          >
            <option value="" disabled>
              {t('contact.form.budget_placeholder')}
            </option>
            {BUDGET_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`contact.form.budgets.${key}`)}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p id="budget-error" className={ERROR} role="alert">
              <FiAlertCircle aria-hidden="true" /> {errors.budget.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>
          {t('contact.form.message')} {required}
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
          className="field resize-y"
        />
        {errors.message && (
          <p id="message-error" className={ERROR} role="alert">
            <FiAlertCircle aria-hidden="true" /> {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={!emailFilled || status === 'sending'}
          aria-describedby="send-hint"
          className="btn btn-gold group w-full disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none sm:w-auto"
        >
          {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
          <FiArrowRight className="arrow-slide" aria-hidden="true" />
        </button>

        {/* type="button" : ce bouton ne doit jamais déclencher l'envoi email */}
        <button type="button" onClick={sendToWhatsApp} className="btn btn-outline w-full sm:w-auto">
          <FaWhatsapp className="text-[17px] text-gold-text" aria-hidden="true" />
          {t('contact.form.submit_whatsapp')}
        </button>
      </div>

      {/* Un bouton grisé sans explication laisse le visiteur bloqué :
          on dit toujours ce qui manque, et qu'une autre voie reste ouverte. */}
      <p id="send-hint" className="text-xs text-on-muted">
        {emailFilled ? t('contact.form.whatsapp_hint') : t('contact.form.email_required_hint')}
      </p>

      <div aria-live="polite">
        {status === 'whatsapp' && (
          <p className="flex items-start gap-2.5 rounded-md border border-outline bg-surface-container p-4 text-sm text-on-surface">
            <FaWhatsapp className="mt-0.5 shrink-0 text-gold-text" aria-hidden="true" />
            {t('contact.form.whatsapp_opened')}
          </p>
        )}
        {status === 'success' && (
          <p className="flex items-start gap-2.5 rounded-md border border-outline bg-surface-container p-4 text-sm text-on-surface">
            <FiCheckCircle className="mt-0.5 shrink-0 text-gold-text" aria-hidden="true" />
            {t('contact.form.success')}
          </p>
        )}
        {status === 'error' && (
          <p
            className="flex items-start gap-2.5 rounded-md border border-danger-outline bg-danger-surface p-4 text-sm text-danger"
            role="alert"
          >
            <FiAlertCircle className="mt-0.5 shrink-0" aria-hidden="true" />
            {t('contact.form.error')}
          </p>
        )}
        {status === 'unconfigured' && (
          <p
            className="flex items-start gap-2.5 rounded-md border border-outline bg-surface-container p-4 text-sm text-on-surface"
            role="alert"
          >
            <FiAlertCircle className="mt-0.5 shrink-0 text-gold-text" aria-hidden="true" />
            {t('contact.form.not_configured', { email: contact.email })}
          </p>
        )}
      </div>
    </form>
  );
}
