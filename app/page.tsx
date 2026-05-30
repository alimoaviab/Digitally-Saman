import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseMe from '@/components/WhyChooseMe';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Sticky Top Navigation */}
      <Navbar />
      
      {/* Main Flow Sequence */}
      <main className="relative flex flex-col min-h-screen">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseMe />
        <Process />
        <Contact />
      </main>

      {/* Footer Signature */}
      <Footer />
    </>
  );
}
