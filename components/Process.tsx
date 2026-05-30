'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We start with a free consultation to understand your business, goals, current challenges, and what success looks like for you. Message me for clarity on your next big decision.',
    color: 'border-pink-500/20 shadow-[0_0_20px_rgba(255,117,143,0.05)]',
  },
  {
    num: '02',
    title: 'Strategy & Plan',
    desc: 'I develop a custom digital marketing strategy tailored to your brand, audience, and budget — with clear KPIs and timelines.',
    color: 'border-purple-500/20 shadow-[0_0_20px_rgba(115,0,153,0.05)]',
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Campaigns go live with full hands-on management — ads, content, outreach, store management — all handled expertly.',
    color: 'border-[#ff007f]/20 shadow-[0_0_20px_rgba(255,0,127,0.05)]',
  },
  {
    num: '04',
    title: 'Optimize & Scale',
    desc: 'Continuous monitoring, A/B testing, and optimization to maximize results. We double down on what works and scale your growth.',
    color: 'border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)]',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#0c0423]/40">
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
            How It Works
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Simple Process
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Process Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              className={`glass p-8 rounded-3xl border flex flex-col justify-between h-[320px] transition-all duration-300 hover:border-[#ff758f]/30 hover:scale-[1.02] cursor-default group ${step.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Number Label */}
              <div className="flex justify-between items-center">
                <span className="font-display font-black text-4xl text-white/10 group-hover:text-[#ff758f]/20 group-hover:scale-105 transition-all duration-500">
                  {step.num}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#ff758f]/20 group-hover:bg-[#ff758f] group-hover:shadow-[0_0_8px_#ff007f] transition-all duration-300" />
              </div>

              {/* Information Text */}
              <div className="mt-8 flex-grow">
                <h3 className="font-sans font-bold text-base text-white group-hover:text-[#ff758f] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-white/50 leading-relaxed mt-3 group-hover:text-white/70 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                Phase 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
