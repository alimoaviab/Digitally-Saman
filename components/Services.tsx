'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiShoppingBag, FiMail, FiCheck } from 'react-icons/fi';

const services = [
  {
    title: 'Social Media Management',
    icon: <FiUsers className="h-6 w-6" />,
    desc: 'Complete brand management to elevate your organic reach, create high-converting assets, and build active communities.',
    features: [
      'Graphic Design & Branding',
      'Content Strategy & Scheduling',
      'Short-Form Video Editing',
      'Audience Engagement & Support',
      'Customer Care & Page Moderation',
      'Organic Page Growth Audits',
    ],
    borderGlow: 'hover:shadow-[0_0_30px_rgba(255,117,143,0.2)]',
    accentColor: '#ff758f',
  },
  {
    title: 'Performance Marketing',
    icon: <FiAward className="h-6 w-6" />,
    desc: 'Data-driven paid ads campaigns tailored to generate immediate leads, sales, and high return on advertising spend (ROAS).',
    features: [
      'Google Search & Display Ads',
      'Meta (Facebook/Instagram) Ads',
      'TikTok Ads & Video Creatives',
      'Funnels & Campaign Optimization',
      'Pixel & Conversion API Tracking',
      'Advanced Audience Retargeting',
    ],
    borderGlow: 'hover:shadow-[0_0_30px_rgba(115,0,153,0.25)]',
    accentColor: '#730099',
  },
  {
    title: 'Shopify Store Management',
    icon: <FiShoppingBag className="h-6 w-6" />,
    desc: 'End-to-end management of your Shopify store to optimize customer shopping journeys, visual appeal, and conversion rates.',
    features: [
      'Trending Product Research',
      'SEO Optimized Uploads & Copies',
      'Store Architecture & Themes',
      'Catalog & Collections Management',
      'Order Logistics & Support',
      'Funnels & Checkout Optimization',
    ],
    borderGlow: 'hover:shadow-[0_0_30px_rgba(255,0,127,0.2)]',
    accentColor: '#ff007f',
  },
  {
    title: 'Lead Generation & Outreach',
    icon: <FiMail className="h-6 w-6" />,
    desc: 'B2B outreach strategies designed to source high-quality potential clients, schedule meetings, and increase pipeline volume.',
    features: [
      'Cold Email Outreach Funnels',
      'LinkedIn Profile Optimization',
      'Instagram / DM Lead Hunting',
      'B2B Prospect List Building',
      'Appointment Setting Systems',
      'CRM System Workflows',
    ],
    borderGlow: 'hover:shadow-[0_0_30px_rgba(157,78,221,0.2)]',
    accentColor: '#9d4edd',
  },
];

export default function Services() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    card.style.setProperty('--rx', `${-y / 15}deg`);
    card.style.setProperty('--ry', `${x / 15}deg`);
    card.style.setProperty('--mx', `${e.clientX - box.left}px`);
    card.style.setProperty('--my', `${e.clientY - box.top}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0c0423]/40">
      {/* Background decorations */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-[#ff758f]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-[#730099]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Services
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            High-Performance Growth Solutions
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Services 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className={`glow-card glass p-8 md:p-10 rounded-3xl border border-white/5 flex flex-col justify-between transition-all duration-500 group cursor-default ${service.borderGlow}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: 'perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card Inner Light Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(400px circle at var(--mx, 0) var(--my, 0), ${service.accentColor}15, transparent 60%)`,
                }}
              />

              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-8" style={{ transform: 'translateZ(30px)' }}>
                  <div 
                    className="h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    {service.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 group-hover:text-[#ff758f] transition-colors duration-300">
                    Service 0{idx + 1}
                  </span>
                </div>

                {/* Info Text */}
                <h3 className="font-display font-extrabold text-2xl text-white mb-4" style={{ transform: 'translateZ(20px)' }}>
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed mb-8" style={{ transform: 'translateZ(10px)' }}>
                  {service.desc}
                </p>

                {/* Features list */}
                <div className="border-t border-white/5 pt-6 w-full" style={{ transform: 'translateZ(15px)' }}>
                  <h4 className="text-xs uppercase font-bold text-white/50 tracking-wider mb-4">Inclusions & Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-white/70">
                        <FiCheck className="h-4 w-4 text-[#ff758f] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
