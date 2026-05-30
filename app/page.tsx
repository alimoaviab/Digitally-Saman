import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PsychologyEdge from '@/components/PsychologyEdge';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Tools from '@/components/Tools';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Certifications from '@/components/Certifications';
import WhyChooseMe from '@/components/WhyChooseMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Sticky Top Navigation */}
      <Navbar />
      
      {/* Main Multi-Section Flow */}
      <main className="relative flex flex-col min-h-screen">
        <Hero />
        <About />
        <PsychologyEdge />
        <Services />
        <Skills />
        <Tools />
        <Portfolio />
        <Testimonials />
        <Certifications />
        <WhyChooseMe />
        <Contact />
      </main>

      {/* Footer Branding index */}
      <Footer />
    </>
  );
}
