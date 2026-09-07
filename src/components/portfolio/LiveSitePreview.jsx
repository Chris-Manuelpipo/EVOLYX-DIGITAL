import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import BrowserFrame from '../ui/BrowserFrame';
import ProjectCover from './ProjectCover';

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/**
 * Aperçu d'un projet en ligne : la capture d'écran dans un châssis de
 * navigateur, doublée d'un lien vers le site réel.
 *
 * On n'embarque plus le site distant en <iframe> : la plupart le refusent
 * (X-Frame-Options), et quand ça passe on télécharge un site entier pour une
 * vignette — l'inverse de ce que promet EVOLYX sur les connexions limitées.
 */
export default function LiveSitePreview({ url, title, image }) {
  const { t } = useTranslation();

  return (
    <figure className="group">
      <BrowserFrame label={hostname(url)}>
        <a href={url} target="_blank" rel="noopener noreferrer" className="block">
          <ProjectCover title={title} image={image} className="aspect-[16/9]" priority />
        </a>
      </BrowserFrame>

      <figcaption className="mt-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          {t('portfolio.open_site')}
          <FiExternalLink aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
