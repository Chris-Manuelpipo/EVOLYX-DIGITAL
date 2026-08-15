import HeroSection from '../components/home/HeroSection';
import AngleDivider from '../components/ui/AngleDivider';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import WhySection from '../components/home/WhySection';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AngleDivider />
      <ServicesPreview />
      <PortfolioPreview />
      <WhySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
