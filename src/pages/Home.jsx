import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import ProjectOutcomesSection from '../components/home/ProjectOutcomesSection';
import WhySection from '../components/home/WhySection';
import ProcessSection from '../components/home/ProcessSection';
import FaqSection from '../components/home/FaqSection';
import CTASection from '../components/home/CTASection';
import { getProjectOutcomes } from '../data/projectOutcomes';

/**
 * Ordre de lecture : ce qu'on fait → ce qu'on a livré → impacts concrets →
 * pourquoi nous → comment ça se passe → questions fréquentes → passer à l'action.
 */
export default function Home() {
  // Héros sur surface-page ; chaque bande suivante alterne surface / surface-page.
  let bandIndex = 0;
  const nextBand = () => (bandIndex++ % 2 === 0 ? 'primary' : 'muted');
  const hasOutcomes = getProjectOutcomes().length > 0;

  return (
    <>
      <HeroSection />
      <ServicesPreview band={nextBand()} />
      <PortfolioPreview band={nextBand()} />
      {hasOutcomes && <ProjectOutcomesSection band={nextBand()} />}
      <WhySection band={nextBand()} />
      <ProcessSection band={nextBand()} />
      <FaqSection band={nextBand()} />
      <CTASection band={nextBand()} />
    </>
  );
}
