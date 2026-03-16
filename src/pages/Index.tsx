import { LanguageProvider } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import CollectionSection from '@/components/CollectionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <CollectionSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
