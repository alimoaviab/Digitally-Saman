'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Digital Marketing', percentage: 96 },
  { name: 'Meta Ads', percentage: 94 },
  { name: 'Google Ads', percentage: 88 },
  { name: 'TikTok Ads', percentage: 91 },
  { name: 'Shopify Store Management', percentage: 89 },
  { name: 'Lead Generation', percentage: 92 },
  { name: 'Content Strategy', percentage: 93 },
  { name: 'SEO', percentage: 86 },
  { name: 'Social Media Marketing', percentage: 95 },
  { name: 'Conversion Optimization', percentage: 90 },
  { name: 'Analytics & Reporting', percentage: 92 },
];

export default function Skills() {
  // SVG Circle Dimensions
  const radius = 38;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius; // ~238.76

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#03001e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#ff758f]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 w-96 h-96 rounded-full bg-[#730099]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            className="text-xs font-bold tracking-widest uppercase text-[#ff758f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Expertise
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Core Competencies & Skills
          </motion.h2>
          <p className="font-sans text-sm md:text-base text-white/50 mt-4 max-w-xl mx-auto">
            Combining analytical tools with cognitive design strategy to orchestrate fully optimized multi-market pipelines.
          </p>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Circular Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-between text-center hover:border-[#ff758f]/30 hover:shadow-[0_4px_25px_rgba(255,117,143,0.08)] transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {/* Circular SVG Progress */}
              <div className="relative h-28 w-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  {/* Track Circle */}
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.04)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                  />
                  {/* Glowing Animated Progress Circle */}
                  <motion.circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke="url(#skillGlow)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: circumference - (circumference * skill.percentage) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: idx * 0.05 }}
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(255,117,143,0.5)]"
                  />
                  
                  {/* Linear Gradient Definition inside SVG */}
                  <defs>
                    <linearGradient id="skillGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff007f" />
                      <stop offset="100%" stopColor="#730099" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Percentage Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-black text-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {skill.percentage}%
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-xs text-white/90 group-hover:text-[#ff758f] transition-colors duration-300 mt-4 leading-snug">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
