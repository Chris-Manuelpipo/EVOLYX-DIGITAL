import { useTranslation } from 'react-i18next';
import { FaCode, FaPuzzlePiece, FaHandshake } from 'react-icons/fa';

const points = [
  { icon: FaCode, key: 'point_1' },
  { icon: FaPuzzlePiece, key: 'point_2' },
  { icon: FaHandshake, key: 'point_3' },
];

export default function WhySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-evolyx-gold uppercase mb-3">
            {t('why.eyebrow')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-evolyx-black">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map(({ icon: Icon, key }) => (
            <div key={key} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-evolyx-black flex items-center justify-center text-evolyx-gold text-xl mb-5">
                <Icon />
              </div>
              <h3 className="font-display font-bold text-lg text-evolyx-black mb-2">
                {t(`why.${key}_title`)}
              </h3>
              <p className="text-sm text-evolyx-gray leading-relaxed">
                {t(`why.${key}_text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
