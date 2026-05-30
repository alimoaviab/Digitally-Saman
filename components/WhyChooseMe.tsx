'use client';

import { motion } from 'framer-motion';
import { FiXCircle, FiCheckCircle } from 'react-icons/fi';

const othersItems = [
  { text: 'Generic Marketing', desc: 'Copy-paste strategies applied blindly to diverse business models.' },
  { text: 'Guesswork Ad Campaigns', desc: 'Running ad copies and targeting based on gut feelings rather than empirical insights.' },
  { text: 'Short-Term Optimization', desc: 'Hyper-focusing on clicks and immediate cost-per-click, ignoring overall LTV and retention.' },
];

const samanItems = [
  { text: 'Psychology Driven', desc: 'Tailoring visual framing and messaging to target specific cognitive patterns.' },
  { text: 'Data Backed Decisions', desc: 'Utilizing client dashboards, pixel logs, and analytics tracking to scale bids.' },
  { text: 'Long-Term Growth Maps', desc: 'Formulating end-to-end user retention pipelines and consistent brand value structures.' },
  { text: 'Conversion Focused', desc: 'Optimizing checkout paths, hooks, page speed, and landing page layouts.' },
  { text: 'Strategic Execution', desc: 'Strict funnel checkpoints matching Meta, Google, and email CRM outputs.' },
];

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="relative py-24 md:py-32 bg-[#0c0423]/50">
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
            The Difference
          </motion.span>
          <motion.h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Choose Digitally Saman?
          </motion.h2>
          <div className="h-1 w-20 bg-[#ff758f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Side-by-Side Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Typical Marketers (Dimmed) */}
          <motion.div
            className="lg:col-span-5 glass bg-white/2 border border-white/5 p-8 md:p-10 rounded-3xl opacity-60 hover:opacity-80 transition-opacity duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="font-display font-bold text-xl text-white/50 mb-6 flex items-center gap-3">
                <FiXCircle className="h-6 w-6 text-red-500/50 shrink-0" />
                Typical Marketers
              </h3>
              <p className="text-xs text-white/40 leading-relaxed mb-8">
                Typical agencies rely on cookie-cutter ad templates, ignore page conversions, and optimize for superficial metrics.
              </p>
              
              <div className="space-y-6">
                {othersItems.map((item) => (
                  <div key={item.text} className="flex gap-3">
                    <FiXCircle className="h-4 w-4 mt-0.5 text-red-500/40 shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-xs text-white/60 leading-none">{item.text}</h4>
                      <p className="text-[11px] text-white/40 mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-[10px] uppercase font-bold text-white/20 tracking-wider">
              Generic Approach
            </div>
          </motion.div>

          {/* Spacer / VS Column */}
          <div className="lg:col-span-2 flex items-center justify-center py-4 lg:py-0">
            <span className="h-12 w-12 rounded-full border border-[#ff758f]/20 bg-[#0c0423] text-sm font-bold tracking-widest text-[#ff758f] flex items-center justify-center shadow-lg">
              VS
            </span>
          </div>

          {/* Right Card: Digitally Saman (Highlighted) */}
          <motion.div
            className="lg:col-span-5 glass bg-gradient-to-b from-[#ff758f]/10 to-transparent border border-[#ff758f]/30 p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-[0_8px_32px_rgba(255,117,143,0.15)] group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -4, borderColor: 'rgba(255, 117, 143, 0.5)' }}
          >
            <div>
              <h3 className="font-display font-black text-xl text-white mb-6 flex items-center gap-3">
                <FiCheckCircle className="h-6 w-6 text-[#ff758f] shrink-0" />
                Digitally Saman
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-8">
                Funnels engineered around proven psychological cues, tracking precision, multi-market optimization, and scalable ROI.
              </p>

              <div className="space-y-6">
                {samanItems.map((item) => (
                  <div key={item.text} className="flex gap-3">
                    <FiCheckCircle className="h-4.5 w-4.5 mt-0.5 text-[#ff758f] shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-xs text-white leading-none">{item.text}</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-normal group-hover:text-white/60 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-[10px] uppercase font-bold text-[#ff758f] tracking-widest">
              Psychology + Data Strategy
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
