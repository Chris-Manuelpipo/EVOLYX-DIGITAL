import { useTranslation } from 'react-i18next';

const steps = ['step_1', 'step_2', 'step_3', 'step_4', 'step_5'];

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-evolyx-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] text-evolyx-gold uppercase mb-3">
            {t('process.eyebrow')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            {t('process.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step} className="relative text-center">
              <div className="font-display text-4xl font-bold text-evolyx-gold/30 mb-3">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-sm font-medium text-white/90">{t(`process.${step}`)}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[60%] w-full h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
