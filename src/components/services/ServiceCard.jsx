import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FiGlobe,
  FiSmartphone,
  FiDatabase,
  FiCpu,
  FiRefreshCw,
  FiTool,
  FiArrowUpRight,
} from 'react-icons/fi';

const ICONS = {
  FaGlobe: FiGlobe,
  FaMobileAlt: FiSmartphone,
  FaDatabase: FiDatabase,
  FaRobot: FiCpu,
  FaSyncAlt: FiRefreshCw,
  FaTools: FiTool,
};

export default function ServiceCard({ service, delay = 0, showItems = false }) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'fr';
  const Icon = ICONS[service.icon] || FiGlobe;

  return (
    <Link
      to={`/services#${service.id}`}
      className="card card-hover r-rise group flex h-full flex-col p-6"
      style={{ '--d': `${delay}ms` }}
    >
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold/12 text-[19px] text-gold-text"
        aria-hidden="true"
      >
        <Icon />
      </span>

      <h3 className="mt-5 flex items-start gap-2 text-[17px] font-semibold text-on-surface">
        {service.title[lang]}
        <FiArrowUpRight
          className="arrow-slide mt-0.5 shrink-0 text-on-muted transition-colors group-hover:text-gold-text"
          aria-hidden="true"
        />
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-on-variant">{service.summary[lang]}</p>

      {showItems && (
        <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-outline pt-4 mt-5">
          {service.items[lang].map((item) => (
            <li
              key={item}
              className="rounded-full bg-surface-container px-2.5 py-1 text-xs font-medium text-on-variant"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
