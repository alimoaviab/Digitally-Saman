'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link checking
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 150; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-[#03001e]/60 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <span className="font-display font-bold text-2xl tracking-tight text-white transition-all duration-300 group-hover:text-[#ff758f]">
              Digitally <span className="text-[#ff758f] group-hover:text-white transition-all duration-300">Saman</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#ff758f]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative px-5 py-2.5 rounded-full overflow-hidden group border border-[#ff758f]/40 bg-[#ff758f]/10 text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:border-[#ff758f] hover:shadow-[0_0_15px_rgba(255,117,143,0.3)] cursor-pointer"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff007f] to-[#730099] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white/90 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="h-7 w-7" /> : <HiMenuAlt3 className="h-7 w-7" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col bg-[#03001e] px-8 pt-28 pb-10"
          >
            <div className="flex flex-col space-y-6 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-sans text-xl font-bold tracking-wider uppercase transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-[#ff758f]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-8 px-8 py-3 rounded-full text-center bg-gradient-to-r from-[#ff007f] to-[#730099] text-white font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(255,0,127,0.3)] hover:scale-105 transition-transform duration-300 w-full max-w-xs cursor-pointer"
              >
                Book Discovery Call
              </a>
            </div>
            
            <div className="mt-auto text-center text-white/40 text-xs">
              © 2025 Digitally Saman. All Rights Reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
