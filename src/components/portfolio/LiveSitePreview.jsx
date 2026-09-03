import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function LiveSitePreview({ url, title }) {
  const { t } = useTranslation();

  return (
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <p className="text-sm text-evolyx-gray">{t('portfolio.preview_note')}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-h-11 bg-evolyx-gold text-evolyx-black-deep font-semibold px-5 py-2 rounded-sm hover:bg-evolyx-gold-light transition-colors shrink-0"
        >
          {t('portfolio.open_site')} <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
        </a>
      </div>

      <div className="hidden md:block border border-evolyx-black/15 rounded-sm overflow-hidden bg-evolyx-black-deep">
        <iframe
          src={url}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-[560px] bg-white"
        />
      </div>
    </div>
  );
}
