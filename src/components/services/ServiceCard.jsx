import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ServiceCard({ service, index }) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';

  return (
    <Link
      to={`/services#${service.id}`}
      className="group relative bg-white p-10 min-h-[220px] transition-colors duration-300 [@media(hover:hover)]:hover:bg-evolyx-black-deep overflow-hidden block"
    >
      <span
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-evolyx-gold scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"
        aria-hidden="true"
      />

      <div className="font-display text-sm font-bold text-evolyx-gold-dark/80 tracking-wide [@media(hover:hover)]:group-hover:text-evolyx-gold transition-colors">
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="font-display text-xl font-bold text-evolyx-black mt-4 mb-3 [@media(hover:hover)]:group-hover:text-white transition-colors">
        {service.title[lang]}
      </h3>
      <p className="text-sm text-evolyx-gray leading-relaxed [@media(hover:hover)]:group-hover:text-white/70 transition-colors">
        {service.summary[lang]}
      </p>
    </Link>
  );
}
