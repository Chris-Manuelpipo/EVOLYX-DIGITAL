import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// Configuration EmailJS -- à renseigner avec vos identifiants
// Créer un compte gratuit sur https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactSchema = z.object({
  name: z.string().min(2, 'Nom trop court'),
  company: z.string().optional(),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Sélectionnez un type de projet'),
  budget: z.string().min(1, 'Sélectionnez un budget'),
  message: z.string().min(10, 'Décrivez votre besoin (10 caractères minimum)'),
});

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const projectTypes = ['Site web', 'Application mobile', 'Plateforme métier', 'Automatisation/IA', 'Évolution d\'existant', 'Autre'];
  const budgets = ['< 500 000 FCFA', '500 000 - 1 500 000 FCFA', '1 500 000 - 4 000 000 FCFA', '> 4 000 000 FCFA', 'À définir'];

  const onSubmit = async (data) => {
    setStatus('sending');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const inputClass =
    'w-full border border-evolyx-black/15 rounded-xl px-4 py-3 text-sm focus:border-evolyx-gold focus:outline-none transition-colors';
  const labelClass = 'block text-sm font-medium text-evolyx-black mb-1.5';
  const errorClass = 'text-xs text-red-600 mt-1';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t('contact.form.name')} *</label>
          <input {...register('name')} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>{t('contact.form.company')}</label>
          <input {...register('company')} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t('contact.form.email')} *</label>
          <input type="email" {...register('email')} className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>{t('contact.form.phone')}</label>
          <input {...register('phone')} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t('contact.form.project_type')} *</label>
          <select {...register('projectType')} className={inputClass} defaultValue="">
            <option value="" disabled>{t('contact.form.project_type_placeholder')}</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
        </div>
        <div>
          <label className={labelClass}>{t('contact.form.budget')} *</label>
          <select {...register('budget')} className={inputClass} defaultValue="">
            <option value="" disabled>{t('contact.form.budget_placeholder')}</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>{t('contact.form.message')} *</label>
        <textarea {...register('message')} rows={5} className={inputClass} />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-evolyx-black text-white font-medium px-8 py-4 rounded-sm hover:bg-evolyx-gold transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
      </button>

      {status === 'success' && (
        <p className="text-sm text-green-700 bg-green-50 rounded-lg px-4 py-3">
          {t('contact.form.success')}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-700 bg-red-50 rounded-lg px-4 py-3">
          {t('contact.form.error')}
        </p>
      )}
    </form>
  );
}
