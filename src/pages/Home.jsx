import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import WhySection from '../components/home/WhySection';
import ProcessSection from '../components/home/ProcessSection';
import FaqSection from '../components/home/FaqSection';
import CTASection from '../components/home/CTASection';
import { getTestimonials } from '../data/testimonials';

/**
 * Ordre de lecture : ce qu'on fait → ce qu'on a livré → ce que les clients en
 * disent → pourquoi nous → comment ça se passe → questions fréquentes → passer à l'action.
 *
 * Les témoignages viennent juste après le portfolio : le visiteur vient de voir
 * le travail, c'est le moment où une parole extérieure pèse le plus.
 * La section se retire d'elle-même s'il n'y a aucun témoignage renseigné.
 */
export default function Home() {
  // Héros sur surface-page ; chaque bande suivante alterne surface / surface-page.
  let bandIndex = 0;
  const nextBand = () => (bandIndex++ % 2 === 0 ? 'primary' : 'muted');
  const hasTestimonials = getTestimonials().length > 0;

  return (
    <>
      <HeroSection />
      <ServicesPreview band={nextBand()} />
      <PortfolioPreview band={nextBand()} />
      {hasTestimonials && <TestimonialsSection band={nextBand()} />}
      <WhySection band={nextBand()} />
      <ProcessSection band={nextBand()} />
      <FaqSection band={nextBand()} />
      <CTASection band={nextBand()} />
    </>
  );
}
