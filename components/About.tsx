'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiCompass } from 'react-icons/fi';

const contactDetails = [
  {
    icon: <FiMapPin className="h-5 w-5 text-[#ff758f]" />,
    label: 'Location',
    value: 'Rawalpindi, Pakistan',
    href: null,
  },
  {
    icon: <FiPhone className="h-5 w-5 text-[#ff758f]" />,
    label: 'Phone / WhatsApp',
    value: '+92 330 4617934',
    href: 'https://wa.me/923304617934',
  },
  {
    icon: <FiMail className="h-5 w-5 text-[#ff758f]" />,
    label: 'Email Address',
    value: 'digitallysaman@gmail.com',
    href: 'mailto:digitallysaman@gmail.com',
  },
  {
    icon: <FiLinkedin className="h-5 w-5 text-[#ff758f]" />,
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/samannaz-digitalmarketer',
    href: 'https://linkedin.com/in/samannaz-digitalmarketer',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0c0423]/50">
      {/* Decorative side lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#ff758f]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#730099]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get To Know Me
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Me
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff758f]/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Smart Strategies for Sustainable Success
              </h3>
              
              <p className="font-sans text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                I&apos;m Saman — a results-driven digital marketer based in Rawalpindi, Pakistan. I specialize in turning online presence into real business growth through performance marketing, social media mastery, e-commerce management, and B2B/B2C lead generation.
              </p>

              <p className="font-sans text-white/70 leading-relaxed text-sm md:text-base">
                Whether you&apos;re a startup looking for your first customers or an established brand wanting to scale — I bring data-backed strategy and creative execution to every campaign.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                <FiCompass className="h-5 w-5 text-[#ff758f] animate-pulse" />
                Contact Info
              </h4>

              {contactDetails.map((detail, idx) => (
                <div 
                  key={idx}
                  className="glass p-5 rounded-2xl flex items-center gap-4 hover:border-[#ff758f]/40 hover:shadow-[0_4px_20px_rgba(255,117,143,0.06)] transition-all duration-300 group cursor-default"
                >
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-105 transition-transform duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold block">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a 
                        href={detail.href} 
                        target={detail.href.startsWith('http') ? '_blank' : undefined}
                        rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-sans font-bold text-sm text-white hover:text-[#ff758f] transition-colors break-all"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="font-sans font-bold text-sm text-white break-all">
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
