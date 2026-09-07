import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import WhySection from '../components/home/WhySection';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';

/**
 * Ordre de lecture : ce qu'on fait → ce qu'on a livré → ce que les clients en
 * disent → pourquoi nous → comment ça se passe → passer à l'action.
 *
 * Les témoignages viennent juste après le portfolio : le visiteur vient de voir
 * le travail, c'est le moment où une parole extérieure pèse le plus.
 * La section se retire d'elle-même s'il n'y a aucun témoignage renseigné.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <WhySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
