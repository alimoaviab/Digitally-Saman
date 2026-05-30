'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    pill: 'ROI',
    title: 'Data-Driven Strategy',
    desc: 'Every decision backed by real analytics. No guesswork — only strategies that boost your return on investment.',
    glow: 'hover:shadow-[0_0_30px_rgba(255,117,143,0.2)]',
    color: 'from-[#ff758f]/10 to-transparent',
  },
  {
    pill: '24H',
    title: 'Fast Turnaround',
    desc: 'Quick responses, fast execution. Your business moves fast — and so do I.',
    glow: 'hover:shadow-[0_0_30px_rgba(115,0,153,0.25)]',
    color: 'from-purple-500/10 to-transparent',
  },
  {
    pill: '100%',
    title: 'Full Transparency',
    desc: 'Clear reporting, honest communication. You always know exactly what\'s happening with your campaigns.',
    glow: 'hover:shadow-[0_0_30px_rgba(255,0,127,0.2)]',
    color: 'from-[#ff007f]/10 to-transparent',
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="relative py-24 md:py-32 bg-[#03001e]">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] rounded-full bg-[#ff758f]/5 blur-[150px] pointer-events-none" />

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
            Why Choose Me
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Results That Speak
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              className={`relative overflow-hidden glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-[280px] hover:border-[#ff758f]/40 transition-all duration-500 cursor-default group ${item.glow}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Inner subtle glow gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              {/* Large Stylistic Pill Tag */}
              <span className="font-display font-black text-4xl text-[#ff758f] tracking-tight block">
                {item.pill}
              </span>

              {/* Text info */}
              <div className="mt-6 flex-grow">
                <h3 className="font-sans font-bold text-lg text-white group-hover:text-[#ff758f] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-white/50 mt-3 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="h-1 w-8 rounded-full bg-white/10 group-hover:bg-[#ff758f] group-hover:w-16 transition-all duration-500 mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
