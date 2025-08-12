import DockNavigation from "../components/Navigation";
import SmartDock from "../components/SmartDock";
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import FeaturedIn from '../components/FeaturedIn';
import Mission from '../components/Mission';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { ScrollRevealSection } from '../components/ScrollRevealSection';

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-full bg-background overflow-x-hidden">
      {/* Smart Dock Navigation */}
      <div className="w-full">
        <SmartDock />
      </div>
      
      {/* Main Content Container */}
      <main className="w-full flex flex-col">
        <section className="w-full">
          <ScrollRevealSection variant="zoom-in">
            <Hero />
          </ScrollRevealSection>
        </section>
        
        <section className="w-full">
          <ScrollRevealSection variant="slide-left">
            <HowItWorks />
          </ScrollRevealSection>
        </section>
        
        <section className="w-full">
          <ScrollRevealSection variant="fade-up">
            <Features />
          </ScrollRevealSection>
        </section>
        
        <section className="w-full">
          <ScrollRevealSection variant="slide-right" className="featured-in-section w-full">
            <FeaturedIn />
          </ScrollRevealSection>
        </section>
        
        <section className="w-full">
          <ScrollRevealSection variant="fade-up">
            <Mission />
          </ScrollRevealSection>
        </section>
        
        <section className="w-full">
          <ScrollRevealSection variant="slide-right">
            <FAQ />
          </ScrollRevealSection>
        </section>
        
        <section className="w-full">
          <ScrollRevealSection variant="fade-up">
            <Footer />
          </ScrollRevealSection>
        </section>
      </main>
      
      {/* Global styles to prevent white space */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        
        #__next {
          width: 100%;
          max-width: 100%;
        }
        
        .scroll-reveal-section {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0;
          padding: 0;
        }
        
        .featured-in-section {
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Ensure all child components use full width */
        .scroll-reveal-section > * {
          width: 100%;
          max-width: 100%;
        }
        
        /* Mobile responsive fixes */
        @media (max-width: 768px) {
          .min-h-screen {
            min-height: 100dvh;
          }
          
          section {
            padding-left: 0;
            padding-right: 0;
          }
        }
        
        /* Prevent horizontal overflow */
        @media (max-width: 640px) {
          body {
            overflow-x: hidden !important;
          }
          
          .w-full {
            width: 100vw !important;
            max-width: 100vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;