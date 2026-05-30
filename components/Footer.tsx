'use client';

import { FiArrowUp, FiInstagram, FiFacebook, FiMail, FiPhone } from 'react-icons/fi';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Social Media Management', href: '#services' },
  { name: 'Performance Marketing', href: '#services' },
  { name: 'Shopify Store Management', href: '#services' },
  { name: 'Lead Generation & Outreach', href: '#services' },
];

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="relative bg-[#07021a] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#ff758f]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Logo & Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-display font-bold text-2xl tracking-tight text-white mb-6">
              Digitally <span className="text-[#ff758f]">Saman</span>
            </span>
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm mb-6">
              I translate consumer behavior and analytical metrics into sustainable revenue pipelines. Digital growth engineered through cognitive principles.
            </p>
            {/* Social channels */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/digitallysaman"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#ff758f] hover:text-white transition-all cursor-pointer border border-white/5"
                aria-label="Instagram Profile"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/share/14jhbWeiQXU/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-white/5"
                aria-label="Facebook Profile"
              >
                <FiFacebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-xs text-white/60 hover:text-[#ff758f] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-6">Services</h4>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="font-sans text-xs text-white/60 hover:text-[#ff758f] transition-colors cursor-pointer"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-widest mb-6">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-2.5 text-xs text-white/60">
                <FiMail className="h-4 w-4 text-[#ff758f] shrink-0" />
                <a href="mailto:digitallysaman@gmail.com" className="hover:text-[#ff758f] transition-colors">
                  digitallysaman@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-white/60">
                <FiPhone className="h-4 w-4 text-[#ff758f] shrink-0" />
                <a href="https://wa.me/923304617934" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff758f] transition-colors">
                  +92 330 4617934
                </a>
              </li>
              <li className="text-xs text-white/40 leading-snug">
                Rawalpindi, Punjab, <br />
                Pakistan (PK)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Scroll top */}
        <div className="border-t border-white/5 pt-8 mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/40 font-sans tracking-wide">
            © 2025 Digitally Saman. All Rights Reserved. Designed for premium brand growth.
          </p>

          <button
            onClick={handleScrollToTop}
            className="h-9 w-9 rounded-full bg-white/5 border border-white/5 text-white/70 hover:bg-[#ff758f] hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg group"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
