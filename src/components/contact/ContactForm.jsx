import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
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

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('contact.form.errors.name')),
        company: z.string().optional(),
        email: z.string().email(t('contact.form.errors.email')),
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

  const inputClass =
    'w-full min-h-11 border border-evolyx-black/15 rounded-sm px-4 py-3 text-sm focus:border-evolyx-gold focus:outline-none transition-colors';
  const labelClass = 'block text-sm font-medium text-evolyx-black mb-1.5';
  const errorClass = 'text-xs text-red-700 mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t('contact.form.name')} *
          </label>
          <input
            id="name"
            autoComplete="name"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
            className={inputClass}
          />
          {errors.name && (
            <p id="name-error" className={errorClass} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {t('contact.form.company')}
          </label>
          <input id="company" autoComplete="organization" {...register('company')} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            {t('contact.form.email')} *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t('contact.form.phone')}
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            {t('contact.form.project_type')} *
          </label>
          <select
            id="projectType"
            aria-invalid={errors.projectType ? 'true' : 'false'}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            {...register('projectType')}
            className={inputClass}
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
            <p id="projectType-error" className={errorClass} role="alert">
              {errors.projectType.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            {t('contact.form.budget')} *
          </label>
          <select
            id="budget"
            aria-invalid={errors.budget ? 'true' : 'false'}
            aria-describedby={errors.budget ? 'budget-error' : undefined}
            {...register('budget')}
            className={inputClass}
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
            <p id="budget-error" className={errorClass} role="alert">
              {errors.budget.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {t('contact.form.message')} *
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
          className={inputClass}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full min-h-11 bg-evolyx-black text-white font-medium px-8 py-4 rounded-sm hover:bg-evolyx-gold hover:text-evolyx-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <p className="text-sm text-green-800 bg-green-50 border border-green-200 rounded-sm px-4 py-3">
            {t('contact.form.success')}
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-800 bg-red-50 border border-red-200 rounded-sm px-4 py-3" role="alert">
            {t('contact.form.error')}
          </p>
        )}
        {status === 'unconfigured' && (
          <p className="text-sm text-evolyx-black bg-evolyx-bg border border-evolyx-gold/40 rounded-sm px-4 py-3" role="alert">
            {t('contact.form.not_configured', { email: contact.email })}
          </p>
        )}
      </div>
    </form>
  );
}
