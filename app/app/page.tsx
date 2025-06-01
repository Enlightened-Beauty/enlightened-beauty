
import HeroSection from '@/components/hero-section';
import ServicesOverview from '@/components/services-overview';
import AboutPreview from '@/components/about-preview';
import Testimonials from '@/components/testimonials';
import EmailSignup from '@/components/email-signup';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <Testimonials />
      <EmailSignup />
    </>
  );
}
