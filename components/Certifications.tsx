'use client';

import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certifications = [
  {
    title: 'Meta Certified Ads Management',
    issuer: 'Meta Blueprint',
    date: 'Verified Credentials',
    desc: 'Advanced capability in planning, executing, and optimizing campaigns across Facebook, Instagram, and WhatsApp.',
  },
  {
    title: 'Performance Marketing Specialist',
    issuer: 'Industry Standard Certified',
    date: 'Verified Credentials',
    desc: 'Expertise in scaling paid search, display grids, video ads, conversion API integrations, and ROAS scales.',
  },
  {
    title: 'Digital Marketing & Growth',
    issuer: 'Google Digital Garage',
    date: 'Verified Credentials',
    desc: 'Fundamentals of digital strategy, customer acquisition channels, search engines, and multi-market funnels.',
  },
  {
    title: 'Social Media Strategy & SMM',
    issuer: 'HubSpot Academy',
    date: 'Verified Credentials',
    desc: 'Creating engagement content campaigns, building communities, organizing assets, and scheduling content matrices.',
  },
  {
    title: 'B2B Lead Generation & Outreach',
    issuer: 'Outreach Academy',
    date: 'Verified Credentials',
    desc: 'Formulating cold email campaigns, LinkedIn prospecting, DM hunting, lead listing, and appointment pipelines.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-[#03001e]">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#ff758f]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#730099]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Qualifications
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Certifications & Training
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-[#ff758f]/30 hover:shadow-[0_4px_25px_rgba(255,117,143,0.08)] transition-all duration-300 group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div>
                {/* Ribbon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-[#ff758f]/10 flex items-center justify-center text-[#ff758f] group-hover:bg-[#ff758f] group-hover:text-white transition-all duration-300">
                    <FiAward className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] text-white/40 tracking-wider font-bold uppercase">{cert.date}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#ff758f] transition-colors duration-300">
                  {cert.title}
                </h3>
                <span className="text-xs font-bold text-[#ff758f]/75 mt-1 block">
                  {cert.issuer}
                </span>
                <p className="font-sans text-xs text-white/50 leading-relaxed mt-4">
                  {cert.desc}
                </p>
              </div>

              {/* Card Footer indicator */}
              <div className="mt-8 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] uppercase font-bold text-white/30 group-hover:text-white/50 transition-colors duration-300">
                <span>Credential Verified</span>
                <span>Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
